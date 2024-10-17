import React, { useContext, useState } from "react";
import { AuthContext } from '../context/authContext'; 


function AuthForm() {
  const { register, login, error } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in both email and password.");
      return;
    }
    if (isRegistering) {
      register(email, password);
    } else {
      login(email, password);
    }
  };

  return (
    <div className="authForm">
      <h2>{isRegistering ? "Register" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">{isRegistering ? "Register" : "Login"}</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={() => setIsRegistering(!isRegistering)}>
        Switch to {isRegistering ? "Login" : "Register"}
      </button>
    </div>
  );
}

export default AuthForm;
