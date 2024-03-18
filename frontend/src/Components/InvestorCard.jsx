import React from "react";
import { CircleDollarSign, X } from "lucide-react";
import "../styles/MentorCard.css";

function InvestorCard({ setDisplayCard, organisation }) {
  return (
    <div className="mentor-card-div">
      <div className="close">
        <X strokeWidth={5} onClick={() => setDisplayCard(false)} />
      </div>
      <div>
        <CircleDollarSign size={150} />
        <h2>{organisation.org_name}</h2>
        <p>
          <strong>ID:</strong> {organisation.org_id}
        </p>
      </div>
      <div className="mentor-details">
        <p>
          <strong>Email:</strong> {organisation.email}
        </p>
        <p>
          <strong>Phone:</strong> {organisation.phone}
        </p>
        <p>
          <strong>Total Investments:</strong> x
        </p>
      </div>
    </div>
  );
}

export default InvestorCard;
