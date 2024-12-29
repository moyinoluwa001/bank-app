import { useState } from 'react';

function TransferFunds({ accounts, onTransfer }) {
  const [from, setFrom] = useState(accounts[0]?.id || '');
  const [to, setTo] = useState(accounts[1]?.id || '');
  const [amount, setAmount] = useState('');

  const handleTransfer = (e) => {
    e.preventDefault();
    const parsedAmount = parseFloat(amount);

    if (!to) {
      alert("Please select a 'To' account.");
      return;
    }

    if (parsedAmount > 0 && from && to && from !== to) {
      onTransfer(from, to, parsedAmount); 
    } else {
      alert("Please ensure valid inputs and different accounts.");
    }
  };

  return (
    <div className="container mt-4">
      <form className="w-50 mx-auto p-4 border rounded" onSubmit={handleTransfer}>
        <h4 className="mb-4 text-center">Transfer Funds</h4>

        <div className="form-group mb-3">
          <label>From Account</label>
          <select value={from} className="form-control" onChange={(e) => setFrom(e.target.value)}>
            {accounts.map((acc) => (
              <option key={acc.id} value={acc.id}>{acc.type}</option>
            ))}
          </select>
        </div>

        <div className="form-group mb-3">
          <label>To Account</label>
          <select value={to} className="form-control" onChange={(e) => setTo(e.target.value)}>
            {accounts.map((acc) => (
              <option key={acc.id} value={acc.id}>{acc.type}</option>
            ))}
          </select>
        </div>

        <div className="form-group mb-4">
          <label>Amount</label>
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>

        <button type="submit" className="btn btn-success w-100">Transfer</button>
      </form>
    </div>
  );
}

export default TransferFunds;
