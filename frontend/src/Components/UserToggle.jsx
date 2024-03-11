import React from "react";
import "../styles/UserToggle.css";

function UserToggle({ setUser }) {
  return (
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
  );
}

export default UserToggle;
