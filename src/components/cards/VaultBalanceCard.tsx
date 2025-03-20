// src/components/cards/VaultBalanceCard.tsx
import React, { useState } from "react";
import VaultIcon from "../icons/VaultIcon"; // Change import path as needed

interface VaultBalanceCardProps {
  vaultBalance: number;
  vaultValueUSD: number;
  onWithdraw: (amount: number) => void;
  onDeposit: (amount: number) => void;
}

const VaultBalanceCard: React.FC<VaultBalanceCardProps> = ({
  vaultBalance,
  vaultValueUSD,
  onWithdraw,
  onDeposit,
}) => {
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [depositAmount, setDepositAmount] = useState("");
  const [error, setError] = useState("");

  const handleWithdrawSubmit = () => {
    const amount = parseFloat(withdrawAmount);
    if (isNaN(amount) || amount <= 0) {
      setError("Please enter a valid amount");
      return;
    }

    if (amount > vaultBalance) {
      setError("Amount exceeds your balance");
      return;
    }

    onWithdraw(amount);
    setShowWithdrawModal(false);
    setWithdrawAmount("");
    setError("");
  };

  const handleDepositSubmit = () => {
    const amount = parseFloat(depositAmount);
    if (isNaN(amount) || amount <= 0) {
      setError("Please enter a valid amount");
      return;
    }

    onDeposit(amount);
    setShowDepositModal(false);
    setDepositAmount("");
    setError("");
  };

  return (
    <>
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
          <div className="flex gap-2 mt-4">
            <button
              className="border border-gray-300 rounded-md px-4 py-2 text-sm hover:bg-gray-100 flex-1"
              style={{
                border: "1px solid #d1d5db",
                borderRadius: "0.375rem",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
                fontSize: "0.875rem",
                transition: "background-color 0.2s",
              }}
              onClick={() => setShowWithdrawModal(true)}
            >
              Withdraw
            </button>
            <button
              className="bg-blue-600 text-white rounded-md px-4 py-2 text-sm hover:bg-blue-700 flex-1"
              style={{
                backgroundColor: "#2563eb",
                color: "white",
                borderRadius: "0.375rem",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
                fontSize: "0.875rem",
                transition: "background-color 0.2s",
              }}
              onClick={() => setShowDepositModal(true)}
            >
              Deposit
            </button>
          </div>
        </div>
      </div>

      {/* Withdraw Modal */}
      {showWithdrawModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">Withdraw BTC</h3>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Amount (BTC)
              </label>
              <div className="flex items-center">
                <input
                  type="number"
                  value={withdrawAmount}
                  onChange={(e) => {
                    setWithdrawAmount(e.target.value);
                    setError("");
                  }}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="0.0"
                  step="0.0001"
                  min="0"
                  max={vaultBalance}
                />
                <button
                  className="ml-2 bg-blue-500 text-white px-2 py-1 rounded text-xs"
                  onClick={() => setWithdrawAmount(vaultBalance.toString())}
                >
                  MAX
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Available: {vaultBalance} BTC
              </p>
              {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            </div>
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                onClick={() => {
                  setShowWithdrawModal(false);
                  setWithdrawAmount("");
                  setError("");
                }}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={handleWithdrawSubmit}
              >
                Withdraw
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Deposit Modal */}
      {showDepositModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">Deposit BTC</h3>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Amount (BTC)
              </label>
              <input
                type="number"
                value={depositAmount}
                onChange={(e) => {
                  setDepositAmount(e.target.value);
                  setError("");
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="0.0"
                step="0.0001"
                min="0"
              />
              {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            </div>
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                onClick={() => {
                  setShowDepositModal(false);
                  setDepositAmount("");
                  setError("");
                }}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={handleDepositSubmit}
              >
                Deposit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VaultBalanceCard;
