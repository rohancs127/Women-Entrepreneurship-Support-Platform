import React from "react";
import "../styles/Login.css";
import UserToggle from "../Components/UserToggle";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [user, setUser] = useState("Entrepreneur");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("role", user);
    navigate("/entrepreneur_page");
  };

  return (
    <div className="parent-div">
      <div className="login-section">
        <h1 className="login-heading">{user}</h1>
        <div className="users">
          <UserToggle setUser={setUser} />
        </div>
        <div className="login-input-div">
          <h2 className="input-heading">{user} Email</h2>
          <input placeholder="email" className="login-input" />
          <h2 className="input-heading">{user} UserId</h2>
          <input placeholder="userid" className="login-input" />
        </div>

        <button className="login-button" onClick={handleSubmit}>
          Login
        </button>
      </div>
      <div className="new-register">
        New User?{" "}
        <Link to="/registration">
          <p className="new-register-tag"> Register</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
