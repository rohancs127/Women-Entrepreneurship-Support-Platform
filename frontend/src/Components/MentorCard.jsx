import React from "react";
import { UserRound, X } from "lucide-react";

function MentorCard() {
  return (
    <div className="mentor-card-div">
      <X />
      <div>
        <UserRound />
      </div>
      <div className="mentor-details">
        <h2>Name</h2>
        <p>ID: xxxxx</p>
        <p>Domain: </p>
        <p>Email: email</p>
        <p>Phone: phone</p>
        <p>Mentees: x</p>
      </div>
    </div>
  );
}

export default MentorCard;
