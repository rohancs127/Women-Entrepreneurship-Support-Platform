import React from "react";
import "../styles/Login.css";

function Login() {
  return (
    <div className="parent-div">
      <div className="login-section">
        <h1 className="login-heading">Login</h1>
        <div className="users-div">
          <a className="user-link">Entrepreneur</a>
          <a className="user-link">Mentor</a>
          <a className="user-link">Investor</a>
        </div>
        <div className="login-input-div">
          <h2>Name</h2>
          <input placeholder="username" />
          <h2>UserId</h2>
          <input placeholder="user id" />
        </div>
      </div>
    </div>
  );
}

export default Login;
