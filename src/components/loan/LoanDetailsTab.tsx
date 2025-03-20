// src/components/loan/LoanDetailsTab.tsx
import React from "react";
import LoanDetailsCard from "./LoanDetailsCard";
import LoanStatusCard from "./LoanStatusCard";

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
      <LoanDetailsCard userData={userData} />

      {/* Loan Status Card */}
      <LoanStatusCard userData={userData} onRepay={handleRepay} />
    </div>
  );
};

export default LoanDetailsTab;
