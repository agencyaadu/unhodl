// src/components/loan/LoanStatusCard.tsx
import React from "react";

interface LoanStatusCardProps {
  userData: any; // Replace 'any' with a more specific type if available
  onRepay: () => void;
}

const LoanStatusCard: React.FC<LoanStatusCardProps> = ({
  userData,
  onRepay,
}) => {
  return (
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
        </h3>
        <div className="space-y-4">
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
                  (userData.loanAmount / userData.maxLoanAmount) * 100
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
                    (userData.loanAmount / userData.maxLoanAmount) * 100
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
                  (userData.totalPaid / userData.loanRepaymentAmount) * 100
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
                    (userData.totalPaid / userData.loanRepaymentAmount) * 100
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
                <p className="font-medium" style={{ fontWeight: "500" }}>
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
                onClick={onRepay}
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
  );
};

export default LoanStatusCard;
