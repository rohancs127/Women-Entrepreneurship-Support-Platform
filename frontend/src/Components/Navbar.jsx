import React from "react";
import { Search } from "lucide-react";
import "../styles/Navbar.css";
import EntrepreneurNavbarContent from "./EntrepreneurNavbarContent";

function Navbar({ onNavItemClick }) {
  return (
    <div className="navbar-section">
      <h1 className="page-title">ShePreneur</h1>
      <div className="navigate-and-search-section">
        <EntrepreneurNavbarContent onNavItemClick={onNavItemClick} />
        {/* <div className="search-section">
          <Search />
          <input className="search-input" type="text" placeholder="Search" />
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
