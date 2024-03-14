import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RegistrationForm.css";
import UserToggle from "../Components/UserToggle";
import { useState } from "react";
import LocationInput from "../Components/LocationInput";
import BusinessInput from "../Components/BusinessInput";
import DomainInput from "../Components/DomainInput";

function RegistrationForm() {
  const [user, setUser] = useState("Entrepreneur");
  //   const navigate = useNavigate()
  //   const [error, setError] = React.useState("")

  //   const [details, setDetails] = React.useState({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     city: "",
  //     state: "",
  //     country: "",
  //     password: "",
  //   })

  //   const handleChange = (e) => {
  //     setDetails({ ...details, [e.target.name]: e.target.value })
  //   }

  //   const register = () => {
  //     console.log(details)
  //     fetch("http://localhost:5000/auth/rescuer/create", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(details),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data)
  //         if (data.success) {
  //           navigate("/")
  //         } else {
  //           setError(data.error)
  //         }
  //       })
  //   }

  return (
    <div className="registration-div">
      <h1 className="registration-heading">Register as {user}</h1>
      <div className="input-div">
        <h3 className="attribute-div">{user} ID</h3>
        <input
          className="reg-input"
          type="text"
          name="name"
          // onChange={handleChange}
        />
      </div>
      <div className="input-div">
        <h3 className="attribute-div">Name</h3>
        <input
          className="reg-input"
          type="text"
          name="name"
          // onChange={handleChange}
        />
      </div>
      <div className="input-div">
        <h3 type="email" className="attribute-div">
          Email
        </h3>
        <input
          className="reg-input"
          type="email"
          name="email"
          // onChange={handleChange}
        />
      </div>
      <div className="input-div">
        <h3 className="attribute-div">Phone</h3>
        <input
          className="reg-input"
          type="text"
          name="phone"
          // onChange={handleChange}
        />
      </div>
      {user == "Entrepreneur" && <BusinessInput />}
      {user == "Entrepreneur" && <LocationInput />}
      {user == "Mentor" && <DomainInput />}
      {/* {error && <p className="error-message">{error}</p>} */}
      <button
        className="submit-button"
        //   onClick={register}
      >
        Register
      </button>
      <div>
        <UserToggle setUser={setUser} />
      </div>
    </div>
  );
}

export default RegistrationForm;
