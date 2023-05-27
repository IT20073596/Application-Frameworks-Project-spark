import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8060/users/register", {
        email,
        password,
        name,
        age
      });
      console.log(data);
      navigate("/rooms");
    } catch (error) {
      console.error(error);
      setError(error.response.data.error);
    }
  };

  return (
    <div style={{ margin: "100px" }}>
      <h1 style={{ color: "#2196f3" }}>Sign Up</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
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
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
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
        <button
          style={{
            width: "100px",
            height: "40px",
            margin: "10px",
            borderRadius: "5px",
            backgroundColor: "#2196f3",
            color: "#ffffff",
            border: "none",
            boxShadow: "0px 0px 5px #888888",
          }}
          type="submit"
        >
          Register
        </button>
        <br/>
        <a
          style={{
            color: "#2196f3",
            textDecoration: "none",
            marginLeft: "10px",
          }}
          href="/"
        >
          Sign In
        </a>
      </form>
    </div>
  );
  
};

export default Register;
