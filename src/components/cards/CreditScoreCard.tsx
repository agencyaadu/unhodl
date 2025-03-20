// src/components/cards/CreditScoreCard.tsx
import React from "react";
import CreditScoreIcon from "../icons/CreditScoreIcon"; // Change import path

interface CreditScoreCardProps {
  creditScore: number;
  maxCreditScore: number;
  creditScorePercentage: number;
}

const CreditScoreCard: React.FC<CreditScoreCardProps> = ({
  creditScore,
  maxCreditScore,
  creditScorePercentage,
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
          {creditScore}
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
                width: `${creditScorePercentage}%`,
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
          {creditScore}/{maxCreditScore} - Excellent
        </p>
      </div>
    </div>
  );
};

export default CreditScoreCard;
