import React from "react";
import Navbar from "../Components/Navbar";
import Profile from "../Components/Profile";
import MentorListCard from "../Components/MentorListCard";
import InvestorListCard from "../Components/InvestorListCard";
import "../styles/EntrepreneurPage.css";
import { useState, useEffect } from "react";

function EntrepreneurPage() {
  const [activePage, setActivePage] = useState("home");

  const handleNavItemClick = (page) => {
    setActivePage(page);
  };

  const [mentors, setMentors] = useState(null);
  const [organisations, setOrganisations] = useState(null);

  async function getMentors() {
    const response = await fetch("http://localhost:5000/mentor");
    const data = await response.json();
    if (response.ok) {
      setMentors(data);
    } else {
      setMentors(null);
    }

    console.log(data);
  }

  async function getOrganisations() {
    const response = await fetch("http://localhost:5000/organisation");
    const data = await response.json();
    if (response.ok) {
      setOrganisations(data);
    } else {
      setOrganisations(null);
    }

    console.log(data);
    console.log(organisations);
  }

  useEffect(() => {
    getMentors();
  }, []);

  useEffect(() => {
    getOrganisations();
  }, []);

  return (
    <div className="entrepreneur-page">
      <Navbar onNavItemClick={handleNavItemClick} />
      <div className="usercard-list">
        {activePage == "mentors" &&
          (mentors ? (
            mentors.mentors.map((mentor) => (
              <MentorListCard key={mentor.id} mentor={mentor} />
            ))
          ) : (
            <p>No Mentors Available</p>
          ))}

        {activePage == "investment" &&
          (organisations ? (
            organisations.organisation.map((organisation) => (
              <InvestorListCard
                key={organisation.id}
                organisation={organisation}
              />
            ))
          ) : (
            <p>No Investors Available</p>
          ))}
      </div>
    </div>
  );
}

export default EntrepreneurPage;
