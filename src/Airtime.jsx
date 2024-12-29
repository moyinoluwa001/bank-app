import { useState } from "react";

function Airtime({ onPurchase }) {
  const [amount, setAmount] = useState("");
  const [network, setNetwork] = useState("MTN");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleAirtimePurchase = (e) => {
    e.preventDefault();
    const parsedAmount = parseFloat(amount);

    // Validation checks
    if (!network) {
      alert('Please select a network.');
      return;
    }

    if (!phoneNumber) {
      alert('Please enter a phone number.');
      return;
    }

    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      alert('Please enter a valid amount greater than zero.');
      return;
    }

    // Proceed with the purchase
    onPurchase(`Airtime on ${network} for ${phoneNumber}`, parsedAmount);
    setAmount('');
    setPhoneNumber('');
  };

  return (
    <div className="container mt-4">
      <form className="w-50 mx-auto p-4 border rounded" onSubmit={handleAirtimePurchase}>
        <h4 className="mb-4 text-center">Buy Airtime</h4>

        <div className="form-group mb-4">
          <label>Select Network</label>
          <select
            className="form-control"
            value={network}
            onChange={(e) => setNetwork(e.target.value)}
          >
            <option value='MTN'>MTN</option>
            <option value='Glo'>Glo</option>
            <option value='Airtel'>Airtel</option>
            <option value='9mobile'>9mobile</option>
          </select>
        </div>

        <div className="form-group mb-4">
          <label>Phone Number</label>
          <input
            type="text"
            className="form-control"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
            required
          />
        </div>

        <div className="form-group mb-4">
          <label>Amount</label>
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Buy Airtime</button>
      </form>
    </div>
  );
}

export default Airtime;
