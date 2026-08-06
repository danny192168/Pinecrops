import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8000";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin() {
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
      });

      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // Example:
      // navigate("/dashboard");
    } catch (err: any) {
      if (err.response) {
        setError(err.response.data.detail || "Login failed.");
      } else {
        setError("Cannot connect to server.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h1>Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="error">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}