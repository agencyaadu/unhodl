// src/components/cards/VaultBalanceCard.tsx
import React from "react";
import VaultIcon from "../icons/VaultIcon"; // Change import path

interface VaultBalanceCardProps {
  vaultBalance: number;
  vaultValueUSD: number;
  onWithdraw: () => void;
}

const VaultBalanceCard: React.FC<VaultBalanceCardProps> = ({
  vaultBalance,
  vaultValueUSD,
  onWithdraw,
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
          Vault Balance
        </h3>
        <VaultIcon />
      </div>
      <div className="p-6" style={{ padding: "1.5rem" }}>
        <div
          className="text-3xl font-bold"
          style={{ fontSize: "1.875rem", fontWeight: "bold" }}
        >
          {vaultBalance} BTC
        </div>
        <p className="text-gray-500" style={{ color: "#6b7280" }}>
          ${vaultValueUSD.toLocaleString()}
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
          onClick={onWithdraw}
        >
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default VaultBalanceCard;
