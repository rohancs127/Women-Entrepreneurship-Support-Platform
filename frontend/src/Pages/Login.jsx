import React from "react";
import "../styles/Login.css";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <div>
        <a>Entrepreneur</a>
        <a>Mentor</a>
        <a>Investor</a>
      </div>
      <div>
        <h2>Name</h2>
        <input placeholder="username" />
        <h2>UserId</h2>
        <input placeholder="user id" />
      </div>
    </div>
  );
}

export default Login;
