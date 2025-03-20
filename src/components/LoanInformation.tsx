// src/components/LoanInformation.tsx
import React, { useState } from "react";
import LoanDetailsTab from "./loan/LoanDetailsTab";
import RepaymentScheduleTab from "./loan/RepaymentScheduleTab";

interface LoanInformationProps {
  userData: any; // Replace 'any' with a more specific type if available
  handleRepay: () => void;
}

const LoanInformation: React.FC<LoanInformationProps> = ({
  userData,
  handleRepay,
}) => {
  const [activeTab, setActiveTab] = useState("details");

  return (
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
        <div className="mb-4" style={{ marginBottom: "1rem", display: "flex" }}>
          <button
            onClick={() => setActiveTab("details")}
            style={{
              paddingLeft: "1rem",
              paddingRight: "1rem",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              borderRadius: "0.375rem",
              backgroundColor: activeTab === "details" ? "#3b82f6" : "#f3f4f6",
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
          <LoanDetailsTab userData={userData} handleRepay={handleRepay} />
        )}

        {activeTab === "repayment" && <RepaymentScheduleTab />}
      </div>
      <style jsx>{`
        .repayment-button:hover {
          background-color: #e5e7eb;
        }
      `}</style>
    </div>
  );
};

export default LoanInformation;
