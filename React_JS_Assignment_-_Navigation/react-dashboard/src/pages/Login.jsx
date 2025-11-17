import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    // here you would normally validate credentials
    // on success navigate to /dashboard
    navigate("/dashboard");
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>
            Username: <input defaultValue="user1" />
          </label>
        </div>
        <div>
          <label>
            Password: <input type="password" defaultValue="123" />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
