import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8060/users/login", {
        email,
        password,
      });
      console.log(data);
      localStorage.setItem("logged", true)
      navigate("/rooms");
    } catch (error) {
      console.error(error);
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <div style={{ margin: "100px" }}>
      <h1 style={{ color: "#007bff" }}>Sign In</h1>
      <form onSubmit={handleSubmit}>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <input
          style={{
            width: "400px",
            height: "40px",
            margin: "10px",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            boxShadow: "0px 0px 5px #888888",
          }}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          style={{
            width: "400px",
            height: "40px",
            margin: "10px",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            boxShadow: "0px 0px 5px #888888",
          }}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button style={{
            width: "100px",
            height: "40px",
            margin: "10px",
            borderRadius: "5px",
            backgroundColor: "#2196f3",
            color: "#ffffff",
            border: "none",
            boxShadow: "0px 0px 5px #888888",
          }} type="submit">Login</button>
        <br/>
        <a href='/register' style={{
            color: "#2196f3",
            textDecoration: "none",
            marginLeft: "10px",
          }}>Sign Up</a>

        <a href='/feedbackList' style={{
            color: "#2196f3",
            textDecoration: "none",
            marginLeft: "10px",
          }}>Feedbacks</a>
      </form>
    </div>
  );
};

export default Login;
