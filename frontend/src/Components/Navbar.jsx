import React from "react";
import { Search } from "lucide-react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar-section">
      <h1 className="page-title">ShePreneur</h1>
      <div className="navigate-and-search-section">
        <div className="navigate-section">
          <ul>Home</ul>
          <ul>Mentors</ul>
          <ul>Investment</ul>
        </div>
        <div className="search-section">
          <Search />
          <input className="search-input" type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
