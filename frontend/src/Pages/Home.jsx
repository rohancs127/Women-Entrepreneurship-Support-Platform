import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-section">
      <div className="image-list">
        <img src="image1.jpg" />
        <img src="image2.jpg" />
        {/* <img src='image3.jpg'/> */}
        <img src="image4.jpg" />
        <img src="image5.jpg" />
        <img src="image6.jpg" />
      </div>
      <div className="content-section">
        <p>
          Welcome to ShePreneur, your dynamic space dedicated to nurturing and
          celebrating the entrepreneurial spirit of women worldwide. Here,
          you'll find a supportive community, valuable resources, and expert
          guidance to help you turn your business dreams into reality.
        </p>
        <p>
          Join us at ShePreneur, where we believe that every woman has the
          potential to build her empire. Whether you're a seasoned entrepreneur
          or just starting out, our platform offers the tools, connections, and
          inspiration you need to thrive in the competitive business world.
          Unlock your full potential and embark on your entrepreneurial journey
          with us today!
        </p>
      </div>

      <Link to="/login">
        <button className="register-button">Login</button>
      </Link>
    </div>
  );
}

export default Home;
