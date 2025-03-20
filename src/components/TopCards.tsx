// src/components/TopCards.tsx
import React from "react";
import VaultBalanceCard from "./cards/VaultBalanceCard";
import WrappedBTCCard from "./cards/WrappedBTCCard";
import CreditScoreCard from "./cards/CreditScoreCard";

interface TopCardsProps {
  userData: any; // Replace 'any' with a more specific type if available
  handleWithdraw: () => void;
}

const TopCards: React.FC<TopCardsProps> = ({ userData, handleWithdraw }) => {
  return (
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
      <VaultBalanceCard
        vaultBalance={userData.vaultBalance}
        vaultValueUSD={userData.vaultValueUSD}
        onWithdraw={handleWithdraw}
      />

      {/* Wrapped BTC Card */}
      <WrappedBTCCard
        wrappedBTC={userData.wrappedBTC}
        wrappedBTCValueUSD={userData.wrappedBTCValueUSD}
      />

      {/* Credit Score Card */}
      <CreditScoreCard
        creditScore={userData.creditScore}
        maxCreditScore={userData.maxCreditScore}
        creditScorePercentage={userData.creditScorePercentage}
      />
    </div>
  );
};

export default TopCards;
