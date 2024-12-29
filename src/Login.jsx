import { useState } from "react";

function Login({ onLogin, onSwitchToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="container mt-4">
      <form className="w-50 mx-auto p-4 border rounded" onSubmit={handleLogin}>
        <h4 className="mb-4 text-center">Login</h4>
        <div className="form-group mb-4">
          <label>Email</label>
          <input
            type="text"
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
        <button type="submit" className="btn btn-primary w-100">Login</button>

        <div className="text-center mt-4">
          <p>
            Don't have an account?{" "}
            <span
              className="text-primary"
              style={{ cursor: "pointer" }}
              onClick={onSwitchToRegister}
            >
              Register
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
