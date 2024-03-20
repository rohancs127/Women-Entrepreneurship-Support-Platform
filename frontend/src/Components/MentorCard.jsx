import React from "react";
import { UserRound, X } from "lucide-react";
import "../styles/MentorCard.css";

function MentorCard({ setDisplayCard, mentor }) {
  return (
    <div className="mentor-card-div">
      <div className="close">
        <X strokeWidth={5} onClick={() => setDisplayCard(false)} />
      </div>
      <div>
        <UserRound size={150} />
        <h2>{mentor.mentor_name}</h2>
        <p>
          <strong>ID:</strong> {mentor.mentor_id}
        </p>
      </div>
      <div className="mentor-details">
        <p>
          <strong>Domain:</strong> {mentor.domain}
        </p>
        <p>
          <strong>Email:</strong> {mentor.email}
        </p>
        <p>
          <strong>Phone:</strong> {mentor.phone}
        </p>
        <p>
          <strong>Mentees:</strong> x
        </p>
        <button className="add-button">Add Mentor</button>
      </div>
    </div>
  );
}

export default MentorCard;
