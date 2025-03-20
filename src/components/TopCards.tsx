// src/components/TopCards.tsx
import React, { useState } from "react";
import VaultBalanceCard from "./cards/VaultBalanceCard";

interface UserData {
  name: string;
  vaultBalance: number;
  vaultValueUSD: number;
  wrappedBTC: number;
  wrappedBTCValueUSD: number;
  creditScore: number;
  maxCreditScore: number;
  creditScorePercentage: number;
  maxLoanAmount: number;
  maxLoanAmountUSDT: number;
}

interface TopCardsProps {
  userData: UserData;
  handleWithdraw: (amount: number) => void;
  handleDeposit: (amount: number) => void;
}

const TopCards: React.FC<TopCardsProps> = ({
  userData,
  handleWithdraw,
  handleDeposit,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {/* Vault Balance Card - Updated to use VaultBalanceCard component */}
      <VaultBalanceCard
        vaultBalance={userData.vaultBalance}
        vaultValueUSD={userData.vaultValueUSD}
        onWithdraw={handleWithdraw}
        onDeposit={handleDeposit}
      />

      {/* Credit Score Card */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Credit Score
          </h3>
          <div className="flex items-end mb-4">
            <span className="text-3xl font-bold text-gray-900">
              {userData.creditScore}
            </span>
            <span className="ml-2 text-gray-500">
              / {userData.maxCreditScore}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div
              className="bg-green-600 h-2.5 rounded-full"
              style={{ width: `${userData.creditScorePercentage}%` }}
            ></div>
          </div>
          <p className="text-gray-500 text-sm">
            Your credit score is {userData.creditScorePercentage}% of the
            maximum score.
          </p>
        </div>
      </div>

      {/* Loan Limit Card */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Loan Limits
          </h3>
          <div className="flex items-end mb-2">
            <span className="text-3xl font-bold text-gray-900">
              {userData.maxLoanAmount.toFixed(4)}
            </span>
            <span className="ml-2 text-gray-500">WBTC</span>
          </div>
          <div className="flex items-end mb-4">
            <span className="text-3xl font-bold text-gray-900">
              {userData.maxLoanAmountUSDT.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </span>
            <span className="ml-2 text-gray-500">USDT</span>
          </div>
          <p className="text-gray-500 text-sm">
            Based on your collateral and credit score
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopCards;
