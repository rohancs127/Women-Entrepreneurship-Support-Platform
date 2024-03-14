import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import RegistrationForm from "./Pages/RegistrationForm";
import EntrepreneurPage from "./Pages/EntrepreneurPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Home />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/entrepreneur_page" element={<EntrepreneurPage />} />
      </Routes>
    </Router>
  );
}

export default App;
