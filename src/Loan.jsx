// import { useState } from "react";

// function Loan({ balance, setBalance, onLoan, transaction, setTransaction }) {
//   const [loanAmount, setLoanAmount] = useState('');
//   const [loanBalance, setLoanBalance] = useState(0);

//   const handleLoan = (e) => {
//     e.preventDefault();
//     const parsedAmount = parseFloat(loanAmount);

//     if (parsedAmount <= 0) {
//       alert("Please enter a valid loan amount");
//       return;
//     }

//     setLoanBalance((prevLoanBalance) => prevLoanBalance + parsedAmount);
//     setBalance((prevBalance) => prevBalance + parsedAmount);
//     setTransaction((prevTransaction) => [
//       ...prevTransaction,
//       {
//         from: 'Bank',
//         to: 'Loan',
//         amount: parsedAmount,
//         date: new Date().toLocaleString(),
//         type: "Loan"
//       }
//     ]);
//     setLoanAmount('');
//     alert(`Loan of $${parsedAmount} approved and added to your account`);
//   };

//   return (
//     <div className="container mt-4">
//       <form className="w-50 mx-auto p-4 border rounded" onSubmit={handleLoan}>
//         <h4 className="mb-4 text-center">Take a Loan</h4>
//         <div className="form-group mb-4">
//           <label>Loan Amount</label>
//           <input
//             type="number"
//             className="form-control"
//             value={loanAmount}
//             onChange={(e) => setLoanAmount(e.target.value)}
//             placeholder="Enter loan amount"
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary w-100">Apply for Loan</button>
//       </form>

//       <div className="mt-4 text-center">
//         <h5>Your current loan balance: ${loanBalance}</h5>
//       </div>
//     </div>
//   );
// }

// export default Loan;










// import { useState } from "react";

// function Loan({ balance, setBalance, onLoan, transaction, setTransaction }) {
//   const [loanAmount, setLoanAmount] = useState('');
//   const [loanBalance, setLoanBalance] = useState(0);
//   const [loanPurpose, setLoanPurpose] = useState('');
//   const [loanTenure, setLoanTenure] = useState('');

//   const handleLoan = (e) => {
//     e.preventDefault();
//     const parsedAmount = parseFloat(loanAmount);
//     const parsedTenure = parseInt(loanTenure, 10);

//     if (parsedAmount <= 0) {
//       alert("Please enter a valid loan amount");
//       return;
//     }

//     if (!loanPurpose) {
//       alert("Please specify the purpose of the loan");
//       return;
//     }

//     if (parsedTenure <= 0) {
//       alert("Please enter a valid loan tenure in months");
//       return;
//     }

//     setLoanBalance((prevLoanBalance) => prevLoanBalance + parsedAmount);
//     setBalance((prevBalance) => prevBalance + parsedAmount);
//     setTransaction((prevTransaction) => [
//       ...prevTransaction,
//       {
//         from: 'Bank',
//         to: 'Loan',
//         amount: parsedAmount,
//         date: new Date().toLocaleString(),
//         type: "Loan",
//         purpose: loanPurpose,
//         tenure: `${parsedTenure} months`
//       }
//     ]);
//     setLoanAmount('');
//     setLoanPurpose('');
//     setLoanTenure('');
//     alert(`Loan of $${parsedAmount} approved for ${loanPurpose} with a tenure of ${parsedTenure} months.`);
//   };

//   return (
//     <div className="container mt-4">
//       <form className="w-50 mx-auto p-4 border rounded" onSubmit={handleLoan}>
//         <h4 className="mb-4 text-center">Take a Loan</h4>

//         <div className="form-group mb-4">
//           <label>Loan Amount</label>
//           <input
//             type="number"
//             className="form-control"
//             value={loanAmount}
//             onChange={(e) => setLoanAmount(e.target.value)}
//             placeholder="Enter loan amount"
//             required
//           />
//         </div>

//         <div className="form-group mb-4">
//           <label>Purpose of Loan</label>
//           <input
//             type="text"
//             className="form-control"
//             value={loanPurpose}
//             onChange={(e) => setLoanPurpose(e.target.value)}
//             placeholder="E.g., Business, Education"
//             required
//           />
//         </div>

//         <div className="form-group mb-4">
//           <label>Loan Tenure (Months)</label>
//           <input
//             type="number"
//             className="form-control"
//             value={loanTenure}
//             onChange={(e) => setLoanTenure(e.target.value)}
//             placeholder="Enter loan tenure in months"
//             required
//           />
//         </div>

//         <button type="submit" className="btn btn-primary w-100">Apply for Loan</button>
//       </form>

//       <div className="mt-4 text-center">
//         <h5>Your current loan balance: ${loanBalance}</h5>
//       </div>
//     </div>
//   );
// }

// export default Loan;











import { useState } from "react";

function Loan({ onLoan }) {
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [loanTenure, setLoanTenure] = useState("");

  const handleLoanSubmission = (e) => {
    e.preventDefault();
    onLoan(loanAmount, loanPurpose, loanTenure);
    setLoanAmount("");
    setLoanPurpose("");
    setLoanTenure("");
  };

  return (
    <div className="container mt-4">
      <form className="w-50 mx-auto p-4 border rounded" onSubmit={handleLoanSubmission}>
        <h4 className="mb-4 text-center">Take a Loan</h4>

        <div className="form-group mb-4">
          <label>Loan Amount</label>
          <input
            type="number"
            className="form-control"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="Enter loan amount"
            required
          />
        </div>

        <div className="form-group mb-4">
          <label>Purpose of Loan</label>
          <input
            type="text"
            className="form-control"
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="E.g., Business, Education"
            required
          />
        </div>

        <div className="form-group mb-4">
          <label>Loan Tenure (Months)</label>
          <input
            type="number"
            className="form-control"
            value={loanTenure}
            onChange={(e) => setLoanTenure(e.target.value)}
            placeholder="Enter loan tenure in months"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Apply for Loan
        </button>
      </form>
    </div>
  );
}

export default Loan;







// {/* <al-sudais></al-sudais>
// mp3 quran
// Ruqya  */}

