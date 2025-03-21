// src/components/loan/LoanDetailsTab.tsx
import React from "react";
import LoanDetailsCard from "./LoanDetailsCard";
import LoanStatusCard from "./LoanStatusCard";
import LoanIcon from "../icons/LoanIcon";

interface LoanDetailsTabProps {
  userData: any; // Replace 'any' with a more specific type if available
  handleRepay: () => void;
}

const LoanDetailsTab: React.FC<LoanDetailsTabProps> = ({
  userData,
  handleRepay,
}) => {
  return (
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
              rowGap: "1rem",
            }}
          >
            <div>
              <p
                className="text-sm text-gray-500"
                style={{ fontSize: "0.875rem", color: "#6b7280" }}
              >
                Loan Amount
              </p>
              <p className="font-medium" style={{ fontWeight: "500" }}>
                ${userData.loanAmount.toLocaleString()}
              </p>
            </div>
            <div>
              <p
                className="text-sm text-gray-500"
                style={{ fontSize: "0.875rem", color: "#6b7280" }}
              >
                Loan Token
              </p>
              <p className="font-medium" style={{ fontWeight: "500" }}>
                {userData.loanTaken}
              </p>
            </div>
            <div>
              <p
                className="text-sm text-gray-500"
                style={{ fontSize: "0.875rem", color: "#6b7280" }}
              >
                Interest Rate
              </p>
              <p className="font-medium" style={{ fontWeight: "500" }}>
                {userData.loanInterest}
              </p>
            </div>
            <div>
              <p
                className="text-sm text-gray-500"
                style={{ fontSize: "0.875rem", color: "#6b7280" }}
              >
                Collateral
              </p>
              <p className="font-medium" style={{ fontWeight: "500" }}>
                {userData.wrappedBTC} wBTC
              </p>
            </div>
          </div>
        </div>
        <div className="p-6 flex justify-center">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            onClick={handleRepay}
          >
            Repay Loan
          </button>
        </div>
      </div>
      {/* <LoanDetailsCard userData={userData} /> */}

      {/* Loan Status Card */}
      {/* <LoanStatusCard userData={userData} onRepay={handleRepay} /> */}
    </div>
  );
};

export default LoanDetailsTab;
