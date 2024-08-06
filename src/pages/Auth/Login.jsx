import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../contexts/auth.context";

import React from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, seterrorMessage] = useState(null);
  const { storeToken, authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          email,
          password,
        }
      );
      //function to store the token
      storeToken(response.data.authToken);
      //first we store the token

      storeToken(response.data.authToken);
      //then we authenticate the user
      authenticateUser();
      navigate("/");
    } catch (error) {
      seterrorMessage(error.response.data.message);
    }
  };

  return (
    <div className="LoginPage">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={handleEmail}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePassword}
        />
        <button type="submit">Login</button>
      </form>

      {errorMessage && <p>{errorMessage}</p>}

      <p>Don't have an account?</p>
      <Link to="/signup">Signup</Link>
    </div>
  );
}

export default Login;
