import { useState } from "react";

function Register({ onRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [initialDeposit, setInitialDeposit] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (parseFloat(initialDeposit) <= 0) {
      alert("Initial deposit must be greater than zero");
      return;
    }
    const newUser = {
      name,
      email,
      password,
      balance: parseFloat(initialDeposit),
    };
    onRegister(newUser); // Assuming `onRegister` is a prop that adds the user to your list
  };

  return (
    <div className="container mt-4">
      <form className="w-50 mx-auto p-4 border rounded" onSubmit={handleRegister}>
        <h4 className="mb-4 text-center">Register New Account</h4>

        <div className="form-group mb-4">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group mb-4">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group mb-4">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="form-group mb-4">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            required
          />
        </div>

        <div className="form-group mb-4">
          <label>Initial Deposit</label>
          <input
            type="number"
            className="form-control"
            value={initialDeposit}
            onChange={(e) => setInitialDeposit(e.target.value)}
            placeholder="Enter initial deposit"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
}

export default Register;
