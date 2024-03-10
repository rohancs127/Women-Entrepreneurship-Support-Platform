import React from "react";
import "../styles/Login.css";
import { useState } from "react";

function Login() {
  const [user, setUser] = useState("Entrepreneur");
  return (
    <div className="parent-div">
      <div className="login-section">
        <h1 className="login-heading">{user}</h1>
        <div className="users-div">
          <a onClick={() => setUser("Entrepreneur")} className="user-link">
            Entrepreneur
          </a>
          <a onClick={() => setUser("Mentor")} className="user-link">
            Mentor
          </a>
          <a onClick={() => setUser("Investor")} className="user-link">
            Investor
          </a>
        </div>
        <div className="login-input-div">
          <h2 className="input-heading">{user} Name</h2>
          <input placeholder="username" />
          <h2 className="input-heading">{user} UserId</h2>
          <input placeholder="userid" />
        </div>
        <button className="login-button">Login</button>
      </div>
      <div className="new-register">
        New User? <a className="new-register-tag"> Register</a>
      </div>
    </div>
  );
}

export default Login;
