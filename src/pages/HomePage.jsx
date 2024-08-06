import React from "react";
import { useNavigate } from "react-router-dom";
import Nepshopy_logo from "../pages/images/Nepshopy_logo.png";

function HomePage() {
  const navigate = useNavigate(); // Get the navigate function

  const handleStart = () => {
    // Navigate to the signup/login page
    navigate("/auth"); // Use navigate instead of history.push
  };

  return (
    <div className="home-page">
      <div className="logo">
        <img
          src={Nepshopy_logo}
          alt="App Logo"
          height={100}
        />
      </div>
      <h1>Welcome to Job Shorts</h1>
      <p>Your gateway to the latest job opportunities and quick job ads.</p>
      <button
        onClick={handleStart}
        className="start-button">
        Get Started
      </button>
    </div>
  );
}

export default HomePage;
