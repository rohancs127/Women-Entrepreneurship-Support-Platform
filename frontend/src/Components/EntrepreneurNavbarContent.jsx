import React from "react";
import "../styles/EntrepreneurNavbarContent.css";

function EntrepreneurNavbarContent({ onNavItemClick }) {
  return (
    <div>
      <div className="navigate-section">
        <ul onClick={() => onNavItemClick("home")}>Home</ul>
        <ul onClick={() => onNavItemClick("mentors")}>Mentors</ul>
        <ul onClick={() => onNavItemClick("investment")}>Investment</ul>
      </div>
    </div>
  );
}

export default EntrepreneurNavbarContent;
