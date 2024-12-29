import React from "react";

function Navbar({ onNavigation }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">Sporty Light Bank Of Russia</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => onNavigation('dashboard')}>Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => onNavigation('transferFunds')}>Transfer Funds</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => onNavigation('airtime')}>Buy Airtime</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => onNavigation('data')}>Buy Data</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => onNavigation('loan')}>Apply for Loan</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => onNavigation('transactionHistory')}>Transaction History</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
