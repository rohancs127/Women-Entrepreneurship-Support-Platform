import React from "react";
import Navbar from "../Components/Navbar";
import Profile from "../Components/Profile";
import MentorListCard from "../Components/MentorListCard";
import InvestorListCard from "../Components/InvestorListCard";
import "../styles/EntrepreneurPage.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function EntrepreneurPage() {
  const [activePage, setActivePage] = useState("home");

  const { ent_id } = useParams();

  const handleNavItemClick = (page) => {
    setActivePage(page);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [mentors, setMentors] = useState(null);
  const [organisations, setOrganisations] = useState(null);
  const [ent, setEnt] = useState(null);

  // async function getMentors() {
  //   const response = await fetch("http://localhost:5000/mentor");
  //   const data = await response.json();
  //   if (response.ok) {
  //     setMentors(data);
  //   } else {
  //     setMentors(null);
  //   }

  //   console.log(data);
  // }

  async function fetchData() {
    const response = await axios.get(
      `http://localhost:5000/entrepreneur/entrepreneur/${ent_id}`
    );
    const data = await response.data.data;
    console.log(data);
    setEnt(data);
  }

  // async function getOrganisations() {
  //   const response = await fetch("http://localhost:5000/organisation");
  //   const data = await response.json();
  //   if (response.ok) {
  //     setOrganisations(data);
  //   } else {
  //     setOrganisations(null);
  //   }
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:500/entrepreneur/${ent_id}`
  //     );
  //     const { values, value } = response.data;

  //     setData(values);
  //     setProjectData(value);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  async function getOrganisations() {
    const response = await fetch("http://localhost:5000/organisation");
    const data = await response.json();
    if (response.ok) {
      setOrganisations(data);
    } else {
      setOrganisations(null);
    }

    //   console.log(data);
    //   console.log(organisations);
    //
  }

  useEffect(() => {
    // getMentors();
    fetchData();
  }, []);

  // useEffect(() => {
  //   getOrganisations();
  // }, []);

  return (
    <div className="entrepreneur-page">
      <Navbar onNavItemClick={handleNavItemClick} />
      <div className="usercard-list">
        {activePage == "home" &&
          (mentors ? (
            mentors.mentors.map((mentor) => (
              <MentorListCard key={mentor.id} mentor={mentor} />
            ))
          ) : (
            <p>No Mentors Available</p>
          ))}

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
