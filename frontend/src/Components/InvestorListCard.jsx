import React from "react";
import "../styles/ListCard.css";
import InvestorCard from "./InvestorCard";
import { CircleDollarSign } from "lucide-react";
import { useState } from "react";

function InvestorListCard({ organisation }) {
  const [displayCard, setDisplayCard] = useState(false);
  return (
    <div>
      <div className="list-card-section" onClick={() => setDisplayCard(true)}>
        <CircleDollarSign size={50} />
        <div className="list-card-details">
          <h3>{organisation.org_name}</h3>
        </div>
      </div>

      {displayCard && (
        <div>
          <InvestorCard
            setDisplayCard={setDisplayCard}
            organisation={organisation}
          />
        </div>
      )}
    </div>
  );
}

export default InvestorListCard;
