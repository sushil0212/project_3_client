/* import React from "react";
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
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import Nepshopy_logo from "../pages/images/NepApp.png";

function HomePage() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/about");
  };

  return (
    <div className="home-page flex flex-col items-center justify-center h-screen bg-gray-900 relative overflow-hidden">
      {/* Sparkling Stars and Sun */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="sparkle bg-yellow-400 w-4 h-4 rounded-full absolute top-0 left-1/4 animate-glow-and-move"></div>
        <div className="sparkle bg-white w-6 h-6 rounded-full absolute top-1/3 left-1/2 animate-glow-and-move"></div>
        <div className="sparkle bg-yellow-500 w-8 h-8 rounded-full absolute top-2/3 left-3/4 animate-glow-and-move"></div>
        <div className="sparkle bg-white w-5 h-5 rounded-full absolute top-3/4 left-1/4 animate-glow-and-move"></div>
      </div>
      <h1 className="text-white text-4xl font-bold mb-8">NepApp</h1>
      <div className="logo-container relative flex items-center justify-center h-[60vh] w-full">
        <img
          src={Nepshopy_logo}
          alt="App Logo"
          className="animate-rotate-360 w-3/5 max-w-xs md:max-w-md transition-all duration-500 ease-in-out cursor-pointer hover:animate-pulse"
          onClick={handleLogoClick}
        />
      </div>
      <h1 className="text-white text-2xl mt-4">Welcome to NepApp Job Ads</h1>
    </div>
  );
}

export default HomePage;
