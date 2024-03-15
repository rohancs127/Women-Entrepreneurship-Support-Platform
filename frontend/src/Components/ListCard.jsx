import React from "react";
import "../styles/ListCard.css";
import MentorCard from "./MentorCard";
import { SquareUserRound } from "lucide-react";

function ListCard({ mentor }) {
  return (
    <div>
      <div className="list-card-section">
        <SquareUserRound size={80} />
        <div className="list-card-details">
          <h3>{mentor.mentor_name}</h3>
          <p>{mentor.domain}</p>
        </div>
      </div>

      <div>
        <MentorCard />
      </div>
    </div>
  );
}

export default ListCard;
