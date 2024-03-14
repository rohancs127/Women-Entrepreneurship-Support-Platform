import React from "react";
import "../styles/RegistrationForm.css";

function LocationInput() {
  return (
    <div className="location-input-div">
      <h3 className="attribute-div">Location</h3>
      <input
        className="reg-input"
        type="text"
        placeholder="City"
        name="city"
        //   onChange={handleChange}
      />
      <input
        className="reg-input"
        type="text"
        placeholder="State"
        name="state"
        //   onChange={handleChange}
      />
      <input
        className="reg-input"
        type="text"
        placeholder="Country"
        name="country"
        //   onChange={handleChange}
      />
    </div>
  );
}

export default LocationInput;
