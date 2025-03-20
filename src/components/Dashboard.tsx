"use client";
// src/components/Dashboard.tsx
import React, { useState } from "react";
// import DashboardHeader from "./DashboardHeader";
import TopCards from "./TopCards"; // Path is correct relative to Dashboard.tsx
import LoanInformation from "./LoanInformation"; // Path is correct relative to Dashboard.tsx

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("details");

  // Fake data for display
  const userData = {
    name: "Alex Johnson",
    vaultBalance: 2.75, // BTC
    vaultValueUSD: 157840.25,
    wrappedBTC: 1.25,
    wrappedBTCValueUSD: 71745.57,
    creditScore: 785,
    maxCreditScore: 850,
    creditScorePercentage: 92,
    loanAmount: 35000,
    maxLoanAmount: 50000,
    loanTaken: "2025-01-15",
    loanDuration: "12 months",
    loanInterest: "4.5%",
    loanRepaymentAmount: 36575,
    nextPaymentDate: "2025-04-15",
    nextPaymentAmount: 3048,
    totalPaid: 6096,
    remainingBalance: 30479,
  };

  const handleRepay = () => {
    console.log("Processing repayment");
    // Add your repayment logic here
  };

  const handleWithdraw = () => {
    console.log("Processing withdrawal");
    // Add your withdrawal logic here
  };

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
        <TopCards userData={userData} handleWithdraw={handleWithdraw} />

        {/* Loan Information Section */}
        <LoanInformation userData={userData} handleRepay={handleRepay} />
      </div>
    </div>
  );
};

export default Dashboard;
