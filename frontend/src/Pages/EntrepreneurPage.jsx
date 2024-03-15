import React from "react";
import Navbar from "../Components/Navbar";
import Profile from "../Components/Profile";
import ListCard from "../Components/ListCard";
import "../styles/EntrepreneurPage.css";
import { useState, useEffect } from "react";

function EntrepreneurPage() {
  const [mentors, setMentors] = useState(null);

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

  useEffect(() => {
    getMentors();
  }, []);

  return (
    <div className="entrepreneur-page">
      <Navbar />
      <div className="usercard-list">
        {mentors ? (
          mentors.mentors.map((mentor) => (
            <ListCard key={mentor.id} mentor={mentor} />
          ))
        ) : (
          <p>No Mentors Available</p>
        )}
      </div>
    </div>
  );
}

export default EntrepreneurPage;
