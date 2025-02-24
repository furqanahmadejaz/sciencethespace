import { useState } from "react";
import useSignup from "../hooks/useSignup";

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {signup, isLoading, error} = useSignup()

    const handleSubmit = async(e) =>{
        e.preventDefault()

        await signup(email, password)
    }

    
    return (
      <form className="user-form" onSubmit={handleSubmit}>
        <label>Email: </label>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Password: </label>
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button disabled={isLoading}>Signup</button>
        {error && <div className="error">{error} </div>}
      </form>
    );
}
 
export default Signup;