import React from "react";
import "../styles/Login.css";
import UserToggle from "../Components/UserToggle";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState("Entrepreneur");
  return (
    <div className="parent-div">
      <div className="login-section">
        <h1 className="login-heading">{user}</h1>
        <div className="users">
          <UserToggle setUser={setUser} />
        </div>
        <div className="login-input-div">
          <h2 className="input-heading">{user} Name</h2>
          <input placeholder="username" className="login-input" />
          <h2 className="input-heading">{user} UserId</h2>
          <input placeholder="userid" className="login-input" />
        </div>
        <Link to="/entrepreneur_page">
          <button className="login-button">Login</button>
        </Link>
      </div>
      <div className="new-register">
        New User?{" "}
        <Link to="/registration">
          <a className="new-register-tag"> Register</a>
        </Link>
      </div>
    </div>
  );
}

export default Login;
