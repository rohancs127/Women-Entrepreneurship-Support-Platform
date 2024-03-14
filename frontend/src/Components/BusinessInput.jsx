import React from "react";
import "../styles/RegistrationForm.css";

function BusinessInput() {
  return (
    <div className="input-div">
      <h3 className="attribute-div">Business</h3>
      <input
        className="reg-input"
        type="text"
        name="name"
        // onChange={handleChange}
      />
    </div>
  );
}

export default BusinessInput;
