import { useState } from "react";
import Navbar from "./Navbar.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Dashboard from "./Dashboard.jsx";
import TransferFund from "./TransferFund.jsx";
import TransactionHistory from "./TransactionHistory.jsx";
import Airtime from "./Airtime.jsx";
import Data from "./Data.jsx";
import Loan from "./Loan.jsx";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [activeComponent, setActiveComponent] = useState("dashboard");

  // Handles user login
  const handleLogin = (email, password) => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
    } else {
      alert("Invalid login credentials");
    }
  };

  // Handles user registration
  const handleRegister = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
    alert("Registration successful! You can now log in.");
    setIsRegistering(false);
  };

  // Handles fund transfer
  const handleTransfer = (from, to, amount) => {
    if (amount > currentUser.balance) {
      alert("Insufficient funds");
      return;
    }

    setCurrentUser((prevUser) => ({
      ...prevUser,
      balance: prevUser.balance - amount,
    }));

    setTransactions((prevTransactions) => [
      ...prevTransactions,
      { from, to, amount, date: new Date().toLocaleString(), type: "Transfer" },
    ]);
  };

  // Handles purchases (airtime or data)
  const handlePurchase = (type, amount) => {
    if (amount > currentUser.balance) {
      alert("Insufficient funds");
      return;
    }

    setCurrentUser((prevUser) => ({
      ...prevUser,
      balance: prevUser.balance - amount,
    }));

    setTransactions((prevTransactions) => [
      ...prevTransactions,
      {
        from: "account",
        to: type,
        amount,
        date: new Date().toLocaleString(),
        type: "purchase",
      },
    ]);
  };

  // Handles loans
  const handleLoan = (loanAmount, purpose, tenure) => {
    const parsedAmount = parseFloat(loanAmount);
    const parsedTenure = parseInt(tenure, 10);

    if (parsedAmount <= 0 || parsedTenure <= 0) {
      alert("Please enter valid loan details.");
      return;
    }

    setCurrentUser((prevUser) => ({
      ...prevUser,
      balance: prevUser.balance + parsedAmount,
    }));

    setTransactions((prevTransactions) => [
      ...prevTransactions,
      {
        from: "Bank",
        to: "Account",
        amount: parsedAmount,
        date: new Date().toLocaleString(),
        type: "Loan",
        purpose,
        tenure: `${parsedTenure} months`,
      },
    ]);

    alert(`Loan of $${parsedAmount.toFixed(2)} approved for ${purpose} with a tenure of ${tenure} months.`);
    setActiveComponent("dashboard");
  };

  const handleNavigation = (component) => {
    setActiveComponent(component);
  };

  if (!currentUser) {
    return isRegistering ? (
      <Register onRegister={handleRegister} />
    ) : (
      <Login onLogin={handleLogin} onSwitchToRegister={() => setIsRegistering(true)} />
    );
  }

  return (
    <div>
      <Navbar onNavigation={handleNavigation} />
      {activeComponent === "dashboard" && (
        <Dashboard name={currentUser.name} balance={currentUser.balance} />
      )}
      {activeComponent === "transferFunds" && (
        <TransferFund
          accounts={[{ id: 1, type: "savings" }, { id: 2, type: "checking" }]}
          onTransfer={handleTransfer}
        />
      )}
      {activeComponent === "airtime" && <Airtime onPurchase={handlePurchase} />}
      {activeComponent === "data" && <Data onPurchase={handlePurchase} />}
      {activeComponent === "loan" && <Loan onLoan={handleLoan} />}
      {activeComponent === "transactionHistory" && (
        <TransactionHistory transactions={transactions} />
      )}
    </div>
  );
}

export default App;
