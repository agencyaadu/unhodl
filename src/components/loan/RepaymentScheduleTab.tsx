// src/components/loan/RepaymentScheduleTab.tsx
import React from "react";

const RepaymentScheduleTab = () => {
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
          Repayment Schedule
        </h3>
        <div className="overflow-x-auto" style={{ overflowX: "auto" }}>
          <table className="w-full" style={{ width: "100%" }}>
            <thead>
              <tr
                className="border-b"
                style={{ borderBottom: "1px solid #e5e7eb" }}
              >
                <th
                  className="text-left pb-2"
                  style={{
                    textAlign: "left",
                    paddingBottom: "0.5rem",
                  }}
                >
                  Payment Date
                </th>
                <th
                  className="text-right pb-2"
                  style={{
                    textAlign: "right",
                    paddingBottom: "0.5rem",
                  }}
                >
                  Amount
                </th>
                <th
                  className="text-right pb-2"
                  style={{
                    textAlign: "right",
                    paddingBottom: "0.5rem",
                  }}
                >
                  Principal
                </th>
                <th
                  className="text-right pb-2"
                  style={{
                    textAlign: "right",
                    paddingBottom: "0.5rem",
                  }}
                >
                  Interest
                </th>
                <th
                  className="text-right pb-2"
                  style={{
                    textAlign: "right",
                    paddingBottom: "0.5rem",
                  }}
                >
                  Remaining Balance
                </th>
                <th
                  className="text-right pb-2"
                  style={{
                    textAlign: "right",
                    paddingBottom: "0.5rem",
                  }}
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="text-sm" style={{ fontSize: "0.875rem" }}>
              <tr
                className="border-b"
                style={{ borderBottom: "1px solid #e5e7eb" }}
              >
                <td
                  className="py-3"
                  style={{
                    paddingTop: "0.75rem",
                    paddingBottom: "0.75rem",
                  }}
                >
                  2025-02-15
                </td>
                <td className="text-right" style={{ textAlign: "right" }}>
                  $3,048.00
                </td>
                <td className="text-right" style={{ textAlign: "right" }}>
                  $2,785.50
                </td>
                <td className="text-right" style={{ textAlign: "right" }}>
                  $262.50
                </td>
                <td className="text-right" style={{ textAlign: "right" }}>
                  $33,214.50
                </td>
                <td
                  className="text-right text-green-500"
                  style={{ textAlign: "right", color: "#22c55e" }}
                >
                  Paid
                </td>
              </tr>
              <tr
                className="border-b"
                style={{ borderBottom: "1px solid #e5e7eb" }}
              >
                <td
                  className="py-3"
                  style={{
                    paddingTop: "0.75rem",
                    paddingBottom: "0.75rem",
                  }}
                >
                  2025-03-15
                </td>
                <td className="text-right" style={{ textAlign: "right" }}>
                  $3,048.00
                </td>
                <td className="text-right" style={{ textAlign: "right" }}>
                  $2,806.39
                </td>
                <td className="text-right" style={{ textAlign: "right" }}>
                  $241.61
                </td>
                <td className="text-right" style={{ textAlign: "right" }}>
                  $30,408.11
                </td>
                <td
                  className="text-right text-green-500"
                  style={{ textAlign: "right", color: "#22c55e" }}
                >
                  Paid
                </td>
              </tr>
              <tr
                className="border-b bg-blue-50"
                style={{
                  borderBottom: "1px solid #e5e7eb",
                  backgroundColor: "#eff6ff",
                }}
              >
                <td
                  className="py-3"
                  style={{
                    paddingTop: "0.75rem",
                    paddingBottom: "0.75rem",
                  }}
                >
                  2025-04-15
                </td>
                <td className="text-right" style={{ textAlign: "right" }}>
                  $3,048.00
                </td>
                <td className="text-right" style={{ textAlign: "right" }}>
                  $2,827.44
                </td>
                <td className="text-right" style={{ textAlign: "right" }}>
                  $220.56
                </td>
                <td className="text-right" style={{ textAlign: "right" }}>
                  $27,580.67
                </td>
                <td
                  className="text-right text-amber-500"
                  style={{ textAlign: "right", color: "#f59e0b" }}
                >
                  Upcoming
                </td>
              </tr>
              <tr
                className="border-b"
                style={{ borderBottom: "1px solid #e5e7eb" }}
              >
                <td
                  className="py-3"
                  style={{
                    paddingTop: "0.75rem",
                    paddingBottom: "0.75rem",
                  }}
                >
                  2025-05-15
                </td>
                <td className="text-right" style={{ textAlign: "right" }}>
                  $3,048.00
                </td>
                <td className="text-right" style={{ textAlign: "right" }}>
                  $2,848.65
                </td>
                <td className="text-right" style={{ textAlign: "right" }}>
                  $199.35
                </td>
                <td className="text-right" style={{ textAlign: "right" }}>
                  $24,732.02
                </td>
                <td
                  className="text-right text-gray-400"
                  style={{ textAlign: "right", color: "#9ca3af" }}
                >
                  Scheduled
                </td>
              </tr>
              <tr
                className="border-b"
                style={{ borderBottom: "1px solid #e5e7eb" }}
              >
                <td
                  className="py-3"
                  style={{
                    paddingTop: "0.75rem",
                    paddingBottom: "0.75rem",
                  }}
                >
                  2025-06-15
                </td>
                <td className="text-right" style={{ textAlign: "right" }}>
                  $3,048.00
                </td>
                <td className="text-right" style={{ textAlign: "right" }}>
                  $2,870.01
                </td>
                <td className="text-right" style={{ textAlign: "right" }}>
                  $177.99
                </td>
                <td className="text-right" style={{ textAlign: "right" }}>
                  $21,862.01
                </td>
                <td
                  className="text-right text-gray-400"
                  style={{ textAlign: "right", color: "#9ca3af" }}
                >
                  Scheduled
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RepaymentScheduleTab;
