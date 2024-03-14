import React from "react";
import "../styles/ListCard.css";
import { SquareUserRound } from "lucide-react";

function ListCard({ mentor }) {
  return (
    <div className="list-card-section">
      <SquareUserRound size={80} />
      <div className="list-card-details">
        <h3>{mentor.mentor_name}</h3>
        <p>{mentor.domain}</p>
      </div>
    </div>
  );
}

export default ListCard;
