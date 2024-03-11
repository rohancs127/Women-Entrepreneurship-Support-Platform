import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import EntrepreneurRegForm from "./Pages/EntrepreneurRegForm";
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
        <Route
          path="entrepreneur_registration"
          element={<EntrepreneurRegForm />}
        />
      </Routes>
    </Router>
  );
}

export default App;
