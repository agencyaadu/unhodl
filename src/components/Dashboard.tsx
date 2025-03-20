"use client";
// src/components/Dashboard.tsx
import React, { useState, useEffect } from "react";
import TopCards from "./TopCards";
import LoanInformation from "./LoanInformation";
import { ethers } from "ethers";
import Manager from "../ABI/Manager.json";
import Vaultabi from "../ABI/Vaultabi.json";

// Constants
const MANAGER_ADDRESS = "0x0E22A7cDF47F8A3f574af08Ed7776229fF9b2367";
const WBTC = "0xdb1D816f2eEc010F8aF79Ca0C59a63CceF1D27Ed";
const USDT = "0x28F73576727325dB10eBA316f8C39F0571600c4C";

// Define the user data interface
interface UserData {
  name: string;
  vaultBalance: number;
  vaultValueUSD: number;
  wrappedBTC: number;
  wrappedBTCValueUSD: number;
  creditScore: number;
  maxCreditScore: number;
  creditScorePercentage: number;
  loanAmount: number;
  maxLoanAmount: number;
  maxLoanAmountUSDT: number;
  loanTaken: string;
  loanDuration: string;
  loanInterest: string;
  loanRepaymentAmount: number;
  nextPaymentDate: string;
  nextPaymentAmount: number;
  totalPaid: number;
  remainingBalance: number;
}

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("details");
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVaultData = async () => {
      try {
        setLoading(true);

        // Get user's wallet address
        if (!window.ethereum) {
          throw new Error("MetaMask is not installed");
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        const userAddress = accounts[0];

        // Get vault address for the user
        const manager = new ethers.Contract(MANAGER_ADDRESS, Manager, provider);
        const vaultAddress = await manager.vaultOwners(userAddress);

        if (!vaultAddress || vaultAddress === ethers.constants.AddressZero) {
          throw new Error("No vault found for this address");
        }

        // Connect to the vault contract
        const vault = new ethers.Contract(vaultAddress, Vaultabi, provider);

        // Fetch all vault data
        const [collateral, maxLoanWBTC, maxLoanUSDT, creditScore] =
          await Promise.all([
            vault.collateralAmount(),
            vault.getMaxLoanAmount(WBTC),
            vault.getMaxLoanAmount(USDT),
            vault.creditScore(),
          ]);

        // Convert the values
        const collateralAmount = Number(collateral) / 1e18;
        const maxLoanAmountWBTC = Number(maxLoanWBTC) / 1e18;
        const maxLoanAmountUSDT = Number(maxLoanUSDT) / 1e18;
        const creditScoreValue = Number(creditScore);

        // Current BTC price in USD (in a real app, fetch this from an API)
        const btcPriceUSD = 57000;

        // Set user data with dynamic values
        setUserData({
          name: userAddress.slice(0, 6) + "..." + userAddress.slice(-4), // Format address for display
          vaultBalance: collateralAmount,
          vaultValueUSD: collateralAmount * btcPriceUSD,
          wrappedBTC: collateralAmount, // Assuming all collateral is wrapped BTC
          wrappedBTCValueUSD: collateralAmount * btcPriceUSD,
          creditScore: creditScoreValue,
          maxCreditScore: 850, // Assuming max credit score is 850
          creditScorePercentage: Math.round((creditScoreValue / 850) * 100),
          loanAmount: 0, // In a real app, fetch current loan amount
          maxLoanAmount: maxLoanAmountWBTC,
          maxLoanAmountUSDT: maxLoanAmountUSDT,
          loanTaken: "N/A", // In a real app, fetch from contract
          loanDuration: "12 months", // In a real app, fetch from contract
          loanInterest: "4.5%", // In a real app, fetch from contract
          loanRepaymentAmount: 0, // In a real app, calculate based on loan details
          nextPaymentDate: "N/A", // In a real app, calculate based on loan details
          nextPaymentAmount: 0, // In a real app, calculate based on loan details
          totalPaid: 0, // In a real app, fetch from contract
          remainingBalance: 0, // In a real app, fetch from contract
        });

        setLoading(false);
      } catch (err) {
        console.error("Error fetching vault data:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
        setLoading(false);
      }
    };

    fetchVaultData();
  }, []);

  const handleRepay = async () => {
    console.log("Processing repayment");
    // Add your repayment logic here using the contract methods
  };

  const handleWithdraw = async () => {
    console.log("Processing withdrawal");
    // Add your withdrawal logic here using the contract methods
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-lg font-medium">Loading your vault data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-lg">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold mb-4">Error Loading Dashboard</h2>
          <p className="mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, white, #f0f9ff, #e0f2fe)",
      }}
    >
      {/* Main dashboard content */}
      <div
        className="container mx-auto px-4 py-8"
        style={{
          maxWidth: "1280px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <h1
          className="text-3xl font-bold mb-8"
          style={{
            fontSize: "1.875rem",
            fontWeight: "bold",
            marginBottom: "2rem",
          }}
        >
          Your Financial Dashboard
        </h1>
        {/* Top Cards Row */}
        {userData && (
          <TopCards userData={userData} handleWithdraw={handleWithdraw} />
        )}
        {/* Loan Information Section */}
        {userData && (
          <LoanInformation userData={userData} handleRepay={handleRepay} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
