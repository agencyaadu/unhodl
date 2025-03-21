"use client";
import { MANAGER_ADDRESS, USDT, WBTC } from "@/Hooks/Hook";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import ManagerAbi from "@/ABI/Manager.json";
import Vaultabi from "@/ABI/Vaultabi.json";




export default function PaymentPage() {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [token, setToken] = useState("WBTC");

  const [Vault, setVault] = useState<ethers.Contract | null>(null);

  useEffect(() => {
    const fetchVaultData = async () => {
      try {

        // Get user's wallet address
        if (!window.ethereum) {
          throw new Error("MetaMask is not installed");
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const accounts = await provider.send("eth_requestAccounts", []);
        const userAddress = accounts[0];

        // Get vault address for the user
        const manager = new ethers.Contract(MANAGER_ADDRESS, ManagerAbi, signer);
        const vaultAddress = await manager.vaultOwners(userAddress);

        if (!vaultAddress || vaultAddress === ethers.constants.AddressZero) {
          throw new Error("No vault found for this address");
        }

        // Connect to the vault contract
        const vault = new ethers.Contract(vaultAddress, Vaultabi, signer);
        setVault(vault);
        // Fetch all vault data

       
      } catch (err) {
        console.error("Error fetching vault data:", err);

      }
    };

    fetchVaultData();
  }, []);

  const handlePayment = () => {
    console.log("Sending", amount, token, "to", address);
    Vault?.takeLoan(token=="WBTC"?WBTC:USDT,address,ethers.utils.parseUnits(amount, 18));
    // Add logic for handling payment
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Make a Payment
        </h2>

        <label className="block mb-2 text-gray-600">Recipient Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter recipient address"
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:ring focus:ring-blue-300"
        />

        <label className="block mb-2 text-gray-600">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:ring focus:ring-blue-300"
        />

        <label className="block mb-2 text-gray-600">Select Token</label>
        <select
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:ring focus:ring-blue-300"
        >
          <option value="WBTC">WBTC</option>
          <option value="USDC">USDC</option>
        </select>

        <button
          onClick={handlePayment}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Make Payment
        </button>
      </div>
    </div>
  );
}
