import { useState } from "react";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h2>Welcome Back</h2>
      <label>Email: </label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Enter your email"
        required
      />
      <label>Password: </label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Enter your password"
        required
      />
      <button disabled={isLoading}>
        {isLoading ? "Signing in..." : "Login"}
      </button>
      {error && <div className="error">{error} </div>}
    </form>
  );
};

export default Login;
