"use client";

import React, { useState } from "react";
import axios from "axios";
import Map from "./components/Map";
import Upload from "./components/Upload";

const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [token, setToken] = useState("");

  const register = async () => {
    await axios.post("https://hyperspace-back-end.onrender.com/register", {
      username,
      password,
    });
    alert("User registered");
  };

  const login = async () => {
    const response = await axios.post("https://hyperspace-back-end.onrender.com/login", {
      loginUsername,
      loginPassword,
    });
    setToken(response.data.token);
  };

  return (
    <div>
      <h1>Register</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={register}>Register</button>

      <h1>Login</h1>
      <input
        type="text"
        value={loginUsername}
        onChange={(e) => setLoginUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={login}>Login</button>

      <h1>Map</h1>
      {token && <Upload token={token} />}
      <Map />
    </div>
  );
};

export default Home;
