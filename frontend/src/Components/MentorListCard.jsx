import React from "react";
import "../styles/ListCard.css";
import MentorCard from "./MentorCard";
import { SquareUserRound } from "lucide-react";
import { useState } from "react";

function MentorListCard({ mentor }) {
  const [displayCard, setDisplayCard] = useState(false);
  return (
    <div>
      <div className="list-card-section" onClick={() => setDisplayCard(true)}>
        <SquareUserRound size={80} />
        <div className="list-card-details">
          <h3>{mentor.mentor_name}</h3>
          <p>{mentor.domain}</p>
        </div>
      </div>

      {displayCard && (
        <div>
          <MentorCard setDisplayCard={setDisplayCard} mentor={mentor} />
        </div>
      )}
    </div>
  );
}

export default MentorListCard;
