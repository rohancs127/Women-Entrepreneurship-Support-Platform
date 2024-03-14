import React from "react";
import { UserRound } from "lucide-react";
import "../styles/Profile.css";

function Profile() {
  return (
    <div className="profile-section">
      <div className="profile-pic">
        <UserRound size="200px" />
      </div>
      <div className="details-section">
        <h2>Name: name</h2>
        <h2>ID: xxxxx</h2>
        <h2>Mentor: mentor</h2>
        <h2>Phone: 0123456789</h2>
        <h2>Email: wertrttdd</h2>
        <h2>Busines: business</h2>
        <h2>Location: city, state, country</h2>
      </div>
    </div>
  );
}

export default Profile;
