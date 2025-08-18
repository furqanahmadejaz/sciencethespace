import { useState } from "react";
import useSignup from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h2>Create Account</h2>
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
        placeholder="Create a password"
        required
      />
      <button disabled={isLoading}>
        {isLoading ? "Creating account..." : "Sign Up"}
      </button>
      {error && <div className="error">{error} </div>}
    </form>
  );
};

export default Signup;
