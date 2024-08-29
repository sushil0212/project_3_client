
import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const handleSkip = () => {
    console.log("Navigating to signup...");
    navigate("/signup");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-purple-200 text-center p-6 overflow-hidden">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to NepApp Job Ads
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Discover job opportunities in an innovative way by listening to
          detailed descriptions. Whether you're searching for a new career or
          simply exploring your options, NepApp makes it easier to stay
          informed. Our app provides a unique, user-friendly experience by
          combining audio with job ads, ensuring that you can engage with
          opportunities on the go. Find the perfect job and stay connected with
          the latest openings, all through the power of voice. Explore NepApp
          Job Ads today!
        </p>
        <button
          onClick={handleSkip}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
          Skip to Signup
        </button>
      </div>
    </div>
  );
}

export default About;
