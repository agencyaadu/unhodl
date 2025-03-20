"use client";
// src/components/Dashboard.tsx
import { useState } from "react";

// Icons
const BitcoinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m3.94.694-.347 1.97" />
    <path d="M7.116 5.257 11 6.12" />
    <path d="M7.47 13.93 5.861 18.047" />
  </svg>
);

const VaultIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <circle cx="12" cy="12" r="5" />
    <path d="M12 12h.01" />
  </svg>
);

const CreditScoreIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-3.5c2-1.5 2-2.8 2-4.5 0-1.2-1.5-4.5-1-5zm-7 10.5h-1v-1h1v1zm-.5-2.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" />
  </svg>
);

const LoanIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <line x1="2" x2="22" y1="10" y2="10" />
  </svg>
);

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
      {/* Header with wallet info */}
      <header
        className="w-full p-6 flex justify-between items-center border-b border-gray-200 bg-white bg-opacity-80 backdrop-blur-sm"
        style={{
          width: "100%",
          padding: "1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #e5e7eb",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          className="text-gray-800 text-2xl font-bold"
          style={{ color: "#2d3748", fontSize: "1.5rem", fontWeight: "bold" }}
        >
          DirectDeposit
        </div>
        <div
          className="flex items-center gap-4"
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <div className="text-right" style={{ textAlign: "right" }}>
            <p
              className="text-sm text-gray-500"
              style={{ fontSize: "0.875rem", color: "#6b7280" }}
            >
              Welcome back
            </p>
            <p className="font-medium" style={{ fontWeight: "500" }}>
              {userData.name}
            </p>
          </div>
          <button
            className="bg-green-500 text-white hover:bg-green-600 rounded-full px-4"
            style={{
              backgroundColor: "#48bb78",
              color: "white",
              borderRadius: "9999px",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              transition: "background-color 0.2s",
            }}
          >
            Connected
          </button>
        </div>
      </header>

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
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
          style={{
            display: "grid",
            gridTemplateColumns:
              window.innerWidth >= 768
                ? window.innerWidth >= 1024
                  ? "repeat(3, minmax(0, 1fr))"
                  : "repeat(2, minmax(0, 1fr))"
                : "repeat(1, minmax(0, 1fr))", // Conditional gridTemplateColumns
            gap: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          {/* Vault Balance Card */}
          <div
            className="bg-white rounded-lg shadow-md"
            style={{
              backgroundColor: "white",
              borderRadius: "0.5rem",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          >
            <div
              className="flex flex-row items-center justify-between pb-2 p-6"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "0.5rem",
                padding: "1.5rem",
              }}
            >
              <h3
                className="text-lg font-medium"
                style={{ fontSize: "1.125rem", fontWeight: "500" }}
              >
                Vault Balance
              </h3>
              <VaultIcon />
            </div>
            <div className="p-6" style={{ padding: "1.5rem" }}>
              <div
                className="text-3xl font-bold"
                style={{ fontSize: "1.875rem", fontWeight: "bold" }}
              >
                {userData.vaultBalance} BTC
              </div>
              <p className="text-gray-500" style={{ color: "#6b7280" }}>
                ${userData.vaultValueUSD.toLocaleString()}
              </p>
              <button
                className="border border-gray-300 rounded-md px-4 py-2 mt-4 text-sm hover:bg-gray-100"
                style={{
                  border: "1px solid #d1d5db",
                  borderRadius: "0.375rem",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                  marginTop: "1rem",
                  fontSize: "0.875rem",
                  transition: "background-color 0.2s",
                }}
                onClick={handleWithdraw}
              >
                Withdraw
              </button>
            </div>
          </div>

          {/* Wrapped BTC Card */}
          <div
            className="bg-white rounded-lg shadow-md"
            style={{
              backgroundColor: "white",
              borderRadius: "0.5rem",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          >
            <div
              className="flex flex-row items-center justify-between pb-2 p-6"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "0.5rem",
                padding: "1.5rem",
              }}
            >
              <h3
                className="text-lg font-medium"
                style={{ fontSize: "1.125rem", fontWeight: "500" }}
              >
                Wrapped BTC
              </h3>
              <BitcoinIcon />
            </div>
            <div className="p-6" style={{ padding: "1.5rem" }}>
              <div
                className="text-3xl font-bold"
                style={{ fontSize: "1.875rem", fontWeight: "bold" }}
              >
                {userData.wrappedBTC} wBTC
              </div>
              <p className="text-gray-500" style={{ color: "#6b7280" }}>
                ${userData.wrappedBTCValueUSD.toLocaleString()}
              </p>
              <div
                className="text-sm text-gray-500 mt-4"
                style={{
                  fontSize: "0.875rem",
                  color: "#6b7280",
                  marginTop: "1rem",
                }}
              >
                Collateral locked for credit line
              </div>
            </div>
          </div>

          {/* Credit Score Card */}
          <div
            className="bg-white rounded-lg shadow-md"
            style={{
              backgroundColor: "white",
              borderRadius: "0.5rem",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          >
            <div
              className="flex flex-row items-center justify-between pb-2 p-6"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "0.5rem",
                padding: "1.5rem",
              }}
            >
              <h3
                className="text-lg font-medium"
                style={{ fontSize: "1.125rem", fontWeight: "500" }}
              >
                Credit Score
              </h3>
              <CreditScoreIcon />
            </div>
            <div className="p-6" style={{ padding: "1.5rem" }}>
              <div
                className="text-3xl font-bold"
                style={{ fontSize: "1.875rem", fontWeight: "bold" }}
              >
                {userData.creditScore}
              </div>
              <div className="mt-2" style={{ marginTop: "0.5rem" }}>
                <div
                  className="h-2 bg-gray-200 rounded-full"
                  style={{
                    height: "0.5rem",
                    backgroundColor: "#e5e7eb",
                    borderRadius: "9999px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="h-2 bg-blue-500 rounded-full"
                    style={{
                      height: "0.5rem",
                      backgroundColor: "#3b82f6",
                      borderRadius: "9999px",
                      width: `${userData.creditScorePercentage}%`,
                    }}
                  />
                </div>
              </div>
              <p
                className="text-sm text-gray-500 mt-2"
                style={{
                  fontSize: "0.875rem",
                  color: "#6b7280",
                  marginTop: "0.5rem",
                }}
              >
                {userData.creditScore}/{userData.maxCreditScore} - Excellent
              </p>
            </div>
          </div>
        </div>

        {/* Loan Information Section */}
        <div className="mb-8" style={{ marginBottom: "2rem" }}>
          <h2
            className="text-2xl font-bold mb-4"
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            Loan Information
          </h2>

          <div className="w-full" style={{ width: "100%" }}>
            <div
              className="mb-4"
              style={{ marginBottom: "1rem", display: "flex" }}
            >
              <button
                onClick={() => setActiveTab("details")}
                style={{
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                  borderRadius: "0.375rem",
                  backgroundColor:
                    activeTab === "details" ? "#3b82f6" : "#f3f4f6",
                  color: activeTab === "details" ? "white" : "#4b5563",
                  transition: "background-color 0.2s",
                }}
              >
                Loan Details
              </button>
              <button
                className={`px-4 py-2 rounded-md ml-2 repayment-button ${
                  activeTab === "repayment"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("repayment")}
                style={{
                  marginLeft: "0.5rem",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                  borderRadius: "0.375rem",
                  backgroundColor:
                    activeTab === "repayment" ? "#3b82f6" : "#f3f4f6",
                  color: activeTab === "repayment" ? "white" : "#4b5563",
                  transition: "background-color 0.2s",
                }}
              >
                Repayment Schedule
              </button>
            </div>

            {activeTab === "details" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 loan-details-grid">
                {/* Loan Details Card */}
                <div
                  className="bg-white rounded-lg shadow-md"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "0.5rem",
                    boxShadow:
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  }}
                >
                  <div className="p-6" style={{ padding: "1.5rem" }}>
                    <div
                      className="flex items-center gap-2 mb-4"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <LoanIcon />
                      <h3
                        className="text-lg font-medium"
                        style={{ fontSize: "1.125rem", fontWeight: "500" }}
                      >
                        Active Loan
                      </h3>
                    </div>
                    <div
                      className="grid grid-cols-2 gap-y-4"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                        rowGap: "1rem", // Changed from gapRow to rowGap
                      }}
                    >
                      <div>
                        <p
                          className="text-sm text-gray-500"
                          style={{ fontSize: "0.875rem", color: "#6b7280" }}
                        >
                          Loan Amount
                        </p>
                        <p
                          className="font-medium"
                          style={{ fontWeight: "500" }}
                        >
                          ${userData.loanAmount.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p
                          className="text-sm text-gray-500"
                          style={{ fontSize: "0.875rem", color: "#6b7280" }}
                        >
                          Date Taken
                        </p>
                        <p
                          className="font-medium"
                          style={{ fontWeight: "500" }}
                        >
                          {userData.loanTaken}
                        </p>
                      </div>
                      <div>
                        <p
                          className="text-sm text-gray-500"
                          style={{ fontSize: "0.875rem", color: "#6b7280" }}
                        >
                          Duration
                        </p>
                        <p
                          className="font-medium"
                          style={{ fontWeight: "500" }}
                        >
                          {userData.loanDuration}
                        </p>
                      </div>
                      <div>
                        <p
                          className="text-sm text-gray-500"
                          style={{ fontSize: "0.875rem", color: "#6b7280" }}
                        >
                          Interest Rate
                        </p>
                        <p
                          className="font-medium"
                          style={{ fontWeight: "500" }}
                        >
                          {userData.loanInterest}
                        </p>
                      </div>
                      <div>
                        <p
                          className="text-sm text-gray-500"
                          style={{ fontSize: "0.875rem", color: "#6b7280" }}
                        >
                          Total to Repay
                        </p>
                        <p
                          className="font-medium"
                          style={{ fontWeight: "500" }}
                        >
                          ${userData.loanRepaymentAmount.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p
                          className="text-sm text-gray-500"
                          style={{ fontSize: "0.875rem", color: "#6b7280" }}
                        >
                          Collateral
                        </p>
                        <p
                          className="font-medium"
                          style={{ fontWeight: "500" }}
                        >
                          {userData.wrappedBTC} wBTC
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Loan Status Card */}
                <div
                  className="bg-white rounded-lg shadow-md"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "0.5rem",
                    boxShadow:
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  }}
                >
                  <div className="p-6" style={{ padding: "1.5rem" }}>
                    <h3
                      className="text-lg font-medium mb-4"
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: "500",
                        marginBottom: "1rem",
                      }}
                    >
                      Loan Status
                    </h3>{" "}
                    {/* Closing h3 tag here */}
                    <div className="space-y-4">
                      {" "}
                      {/* Removed style={{ spaceY: "1rem" }} */}
                      <div>
                        <div
                          className="flex justify-between mb-1"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "0.25rem",
                          }}
                        >
                          <span
                            className="text-sm text-gray-500"
                            style={{ fontSize: "0.875rem", color: "#6b7280" }}
                          >
                            Loan Utilization
                          </span>
                          <span
                            className="text-sm font-medium"
                            style={{ fontSize: "0.875rem", fontWeight: "500" }}
                          >
                            {Math.round(
                              (userData.loanAmount / userData.maxLoanAmount) *
                                100
                            )}
                            %
                          </span>
                        </div>
                        <div
                          className="h-2 bg-gray-200 rounded-full"
                          style={{
                            height: "0.5rem",
                            backgroundColor: "#e5e7eb",
                            borderRadius: "9999px",
                            overflow: "hidden",
                          }}
                        >
                          <div
                            className="h-2 bg-blue-500 rounded-full"
                            style={{
                              height: "0.5rem",
                              backgroundColor: "#3b82f6",
                              borderRadius: "9999px",
                              width: `${
                                (userData.loanAmount / userData.maxLoanAmount) *
                                100
                              }%`,
                            }}
                          />
                        </div>
                        <p
                          className="text-xs text-gray-500 mt-1"
                          style={{
                            fontSize: "0.75rem",
                            color: "#6b7280",
                            marginTop: "0.25rem",
                          }}
                        >
                          ${userData.loanAmount.toLocaleString()} of $
                          {userData.maxLoanAmount.toLocaleString()} credit line
                        </p>
                      </div>
                      <div>
                        <div
                          className="flex justify-between mb-1"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "0.25rem",
                          }}
                        >
                          <span
                            className="text-sm text-gray-500"
                            style={{ fontSize: "0.875rem", color: "#6b7280" }}
                          >
                            Repayment Progress
                          </span>
                          <span
                            className="text-sm font-medium"
                            style={{ fontSize: "0.875rem", fontWeight: "500" }}
                          >
                            {Math.round(
                              (userData.totalPaid /
                                userData.loanRepaymentAmount) *
                                100
                            )}
                            %
                          </span>
                        </div>
                        <div
                          className="h-2 bg-gray-200 rounded-full"
                          style={{
                            height: "0.5rem",
                            backgroundColor: "#e5e7eb",
                            borderRadius: "9999px",
                            overflow: "hidden",
                          }}
                        >
                          <div
                            className="h-2 bg-blue-500 rounded-full"
                            style={{
                              height: "0.5rem",
                              backgroundColor: "#3b82f6",
                              borderRadius: "9999px",
                              width: `${
                                (userData.totalPaid /
                                  userData.loanRepaymentAmount) *
                                100
                              }%`,
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="pt-4 border-t border-gray-200"
                        style={{
                          paddingTop: "1rem",
                          borderTop: "1px solid #e5e7eb",
                        }}
                      >
                        <div
                          className="flex justify-between"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div>
                            <p
                              className="text-sm text-gray-500"
                              style={{ fontSize: "0.875rem", color: "#6b7280" }}
                            >
                              Next Payment
                            </p>
                            <p
                              className="font-medium"
                              style={{ fontWeight: "500" }}
                            >
                              ${userData.nextPaymentAmount.toLocaleString()}
                            </p>
                            <p
                              className="text-xs text-gray-500"
                              style={{ fontSize: "0.75rem", color: "#6b7280" }}
                            >
                              Due {userData.nextPaymentDate}
                            </p>
                          </div>
                          <button
                            onClick={handleRepay}
                            className="bg-purple-500 text-white hover:bg-purple-600 px-4 py-2 rounded-md"
                            style={{
                              backgroundColor: "#9333ea",
                              color: "white",
                              paddingLeft: "1rem",
                              paddingRight: "1rem",
                              paddingTop: "0.5rem",
                              paddingBottom: "0.5rem",
                              borderRadius: "0.375rem",
                              transition: "background-color 0.2s",
                            }}
                          >
                            Repay Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "repayment" && (
              <div
                className="bg-white rounded-lg shadow-md"
                style={{
                  backgroundColor: "white",
                  borderRadius: "0.5rem",
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                }}
              >
                <div className="p-6" style={{ padding: "1.5rem" }}>
                  <h3
                    className="text-lg font-medium mb-4"
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: "500",
                      marginBottom: "1rem",
                    }}
                  >
                    Repayment Schedule
                  </h3>
                  <div
                    className="overflow-x-auto"
                    style={{ overflowX: "auto" }}
                  >
                    <table className="w-full" style={{ width: "100%" }}>
                      <thead>
                        <tr
                          className="border-b"
                          style={{ borderBottom: "1px solid #e5e7eb" }}
                        >
                          <th
                            className="text-left pb-2"
                            style={{
                              textAlign: "left",
                              paddingBottom: "0.5rem",
                            }}
                          >
                            Payment Date
                          </th>
                          <th
                            className="text-right pb-2"
                            style={{
                              textAlign: "right",
                              paddingBottom: "0.5rem",
                            }}
                          >
                            Amount
                          </th>
                          <th
                            className="text-right pb-2"
                            style={{
                              textAlign: "right",
                              paddingBottom: "0.5rem",
                            }}
                          >
                            Principal
                          </th>
                          <th
                            className="text-right pb-2"
                            style={{
                              textAlign: "right",
                              paddingBottom: "0.5rem",
                            }}
                          >
                            Interest
                          </th>
                          <th
                            className="text-right pb-2"
                            style={{
                              textAlign: "right",
                              paddingBottom: "0.5rem",
                            }}
                          >
                            Remaining Balance
                          </th>
                          <th
                            className="text-right pb-2"
                            style={{
                              textAlign: "right",
                              paddingBottom: "0.5rem",
                            }}
                          >
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody
                        className="text-sm"
                        style={{ fontSize: "0.875rem" }}
                      >
                        <tr
                          className="border-b"
                          style={{ borderBottom: "1px solid #e5e7eb" }}
                        >
                          <td
                            className="py-3"
                            style={{
                              paddingTop: "0.75rem",
                              paddingBottom: "0.75rem",
                            }}
                          >
                            2025-02-15
                          </td>
                          <td
                            className="text-right"
                            style={{ textAlign: "right" }}
                          >
                            $3,048.00
                          </td>
                          <td
                            className="text-right"
                            style={{ textAlign: "right" }}
                          >
                            $2,785.50
                          </td>
                          <td
                            className="text-right"
                            style={{ textAlign: "right" }}
                          >
                            $262.50
                          </td>
                          <td
                            className="text-right"
                            style={{ textAlign: "right" }}
                          >
                            $33,214.50
                          </td>
                          <td
                            className="text-right text-green-500"
                            style={{ textAlign: "right", color: "#22c55e" }}
                          >
                            Paid
                          </td>
                        </tr>
                        <tr
                          className="border-b"
                          style={{ borderBottom: "1px solid #e5e7eb" }}
                        >
                          <td
                            className="py-3"
                            style={{
                              paddingTop: "0.75rem",
                              paddingBottom: "0.75rem",
                            }}
                          >
                            2025-03-15
                          </td>
                          <td
                            className="text-right"
                            style={{ textAlign: "right" }}
                          >
                            $3,048.00
                          </td>
                          <td
                            className="text-right"
                            style={{ textAlign: "right" }}
                          >
                            $2,806.39
                          </td>
                          <td
                            className="text-right"
                            style={{ textAlign: "right" }}
                          >
                            $241.61
                          </td>
                          <td
                            className="text-right"
                            style={{ textAlign: "right" }}
                          >
                            $30,408.11
                          </td>
                          <td
                            className="text-right text-green-500"
                            style={{ textAlign: "right", color: "#22c55e" }}
                          >
                            Paid
                          </td>
                        </tr>
                        <tr
                          className="border-b bg-blue-50"
                          style={{
                            borderBottom: "1px solid #e5e7eb",
                            backgroundColor: "#eff6ff",
                          }}
                        >
                          <td
                            className="py-3"
                            style={{
                              paddingTop: "0.75rem",
                              paddingBottom: "0.75rem",
                            }}
                          >
                            2025-04-15
                          </td>
                          <td
                            className="text-right"
                            style={{ textAlign: "right" }}
                          >
                            $3,048.00
                          </td>
                          <td
                            className="text-right"
                            style={{ textAlign: "right" }}
                          >
                            $2,827.44
                          </td>
                          <td
                            className="text-right"
                            style={{ textAlign: "right" }}
                          >
                            $220.56
                          </td>
                          <td
                            className="text-right"
                            style={{ textAlign: "right" }}
                          >
                            $27,580.67
                          </td>
                          <td
                            className="text-right text-amber-500"
                            style={{ textAlign: "right", color: "#f59e0b" }}
                          >
                            Upcoming
                          </td>
                        </tr>
                        <tr
                          className="border-b"
                          style={{ borderBottom: "1px solid #e5e7eb" }}
                        >
                          <td
                            className="py-3"
                            style={{
                              paddingTop: "0.75rem",
                              paddingBottom: "0.75rem",
                            }}
                          >
                            2025-05-15
                          </td>
                          <td
                            className="text-right"
                            style={{ textAlign: "right" }}
                          >
                            $3,048.00
                          </td>
                          <td
                            className="text-right"
                            style={{ textAlign: "right" }}
                          >
                            $2,848.65
                          </td>
                          <td
                            className="text-right"
                            style={{ textAlign: "right" }}
                          >
                            $199.35
                          </td>
                          <td
                            className="text-right"
                            style={{ textAlign: "right" }}
                          >
                            $24,732.02
                          </td>
                          <td
                            className="text-right text-gray-400"
                            style={{ textAlign: "right", color: "#9ca3af" }}
                          >
                            Scheduled
                          </td>
                        </tr>
                        <tr
                          className="border-b"
                          style={{ borderBottom: "1px solid #e5e7eb" }}
                        >
                          <td
                            className="py-3"
                            style={{
                              paddingTop: "0.75rem",
                              paddingBottom: "0.75rem",
                            }}
                          >
                            2025-06-15
                          </td>
                          <td
                            className="text-right"
                            style={{ textAlign: "right" }}
                          >
                            $3,048.00
                          </td>
                          <td
                            className="text-right"
                            style={{ textAlign: "right" }}
                          >
                            $2,870.01
                          </td>
                          <td
                            className="text-right"
                            style={{ textAlign: "right" }}
                          >
                            $177.99
                          </td>
                          <td
                            className="text-right"
                            style={{ textAlign: "right" }}
                          >
                            $21,862.01
                          </td>
                          <td
                            className="text-right text-gray-400"
                            style={{ textAlign: "right", color: "#9ca3af" }}
                          >
                            Scheduled
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .repayment-button:hover {
          background-color: #e5e7eb;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
