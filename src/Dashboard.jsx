
import React from "react";

function Dashboard({ name, balance }) {
  return (
    <div className="container mt-4">
      <div className="text-center">
        <h3>Welcome, {name}</h3>
        <p>Your current balance is:</p>
        <h2>${balance.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default Dashboard;
