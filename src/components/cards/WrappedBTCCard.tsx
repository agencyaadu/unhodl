// src/components/cards/WrappedBTCCard.tsx
import React from "react";
import BitcoinIcon from "../icons/BitcoinIcon"; // Change import path

interface WrappedBTCCardProps {
  wrappedBTC: number;
  wrappedBTCValueUSD: number;
}

const WrappedBTCCard: React.FC<WrappedBTCCardProps> = ({
  wrappedBTC,
  wrappedBTCValueUSD,
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
          Wrapped BTC
        </h3>
        <BitcoinIcon />
      </div>
      <div className="p-6" style={{ padding: "1.5rem" }}>
        <div
          className="text-3xl font-bold"
          style={{ fontSize: "1.875rem", fontWeight: "bold" }}
        >
          {wrappedBTC} wBTC
        </div>
        <p className="text-gray-500" style={{ color: "#6b7280" }}>
          ${wrappedBTCValueUSD.toLocaleString()}
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
  );
};

export default WrappedBTCCard;
