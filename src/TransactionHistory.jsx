import React from "react";

function TransactionHistory({ transactions }) {
  return (
    <div className="container mt-4">
      <h4 className="mb-4 text-center">Transaction History</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>From</th>
            <th>To</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, index) => (
            <tr key={index}>
              <td>{tx.date}</td>
              <td>${tx.amount}</td>
              <td>{tx.from}</td>
              <td>{tx.to}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionHistory;
