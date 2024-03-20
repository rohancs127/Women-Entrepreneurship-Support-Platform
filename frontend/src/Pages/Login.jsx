// import "../styles/Login.css";
// import UserToggle from "../Components/UserToggle";
// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";

// function Login() {
//   const [user, setUser] = useState("Entrepreneur");
//   const navigate = useNavigate();
//   console.log(user);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const email = e.target.querySelector('input[name="email"]').value;
//     const userId = e.target.querySelector('input[name="userId"]').value;

//     console.log(email)
//     console.log(userId)

//     localStorage.setItem("role", user);
// try{
//     const response = await axios.post("http://localhost:5000/app/login", {
//       email: email,
//       userId: userId,
//       role: user,
//     });
//     if (response.data.success === true) {
//       if (user === "Entrepreneur") {
//         navigate("/entrepreneur_page");
//       } else if (user === "Mentor") {
//         navigate("/mentor_page");
//       } else {
//         navigate("/investor_page");
//       }
//     }
//     else{
//       console.log("email and password didnt match")
//     }
//   }
// catch(error){
// console.log(error)
// }
//   }

//   return (
//     <div className="parent-div">
//       <div className="login-section">
//         <h1 className="login-heading">{user}</h1>
//         <div className="users">
//           <UserToggle setUser={setUser} />
//         </div>
//         <div className="login-input-div">
//           <h2 className="input-heading">{user} Email</h2>
//           <input placeholder="email" className="login-input" name="email" />
//           <h2 className="input-heading">{user} UserId</h2>
//           <input placeholder="userid" className="login-input" name="userId" />
//         </div>

//         <button className="login-button" onClick={handleSubmit}>
//           Login
//         </button>
//       </div>
//       <div className="new-register">
//         New User?{" "}
//         <Link to="/registration">
//           <p className="new-register-tag"> Register</p>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Login;

import "../styles/Login.css";
import UserToggle from "../Components/UserToggle";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [user, setUser] = useState("Entrepreneur");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const userId = formData.get("userId");

    try {
      const response = await axios.post("http://localhost:5000/app/login", {
        email: email,
        userId: userId,
        role: user,
      });

      if (response.data.success === true) {
        if (user === "Entrepreneur") {
          navigate(`/entrepreneur_page/${userId}`);
        } else if (user === "Mentor") {
          navigate("/entrepreneur_page");
        } else {
          navigate("/entrepreneur_page");
        }
      } else {
        console.log("no match found");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="parent-div">
      <div className="login-section">
        <h1 className="login-heading">{user}</h1>
        <div className="users">
          <UserToggle setUser={setUser} />
        </div>
        <div className="login-input-div">
          <form onSubmit={handleSubmit}>
            <h2 className="input-heading">{user} Email</h2>
            <input placeholder="email" className="login-input" name="email" />
            <h2 className="input-heading">{user} UserId</h2>
            <input placeholder="userid" className="login-input" name="userId" />
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="new-register">
        New User?{" "}
        <Link to="/registration">
          <p className="new-register-tag"> Register</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
