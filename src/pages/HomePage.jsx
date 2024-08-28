import React from "react";
import { useNavigate } from "react-router-dom";
import Nepshopy_logo from "../pages/images/NepApp.png";

function HomePage() {
  const navigate = useNavigate(); // Get the navigate function

  const handleStart = () => {
    // Navigate to the signup/login page
    navigate("/auth"); // Use navigate instead of history.push
  };

  return (
    <div className="home-page">
      <h1>Welcome to Job Ads</h1>
      <button
        onClick={handleStart}
        className="start-button">
        Get Started
      </button>
      <div className="logo">
        <img
          src={Nepshopy_logo}
          alt="App Logo"
          height={200}
        />
      </div>
    </div>
  );
}

export default HomePage;
