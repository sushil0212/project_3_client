/* // src/pages/Activity.jsx
import { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";
import { useNavigate } from "react-router-dom";

function Activity() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const goToJobsAds = () => {
    if (user.companyInfo) {
      navigate(`/vacancy-required/${user.companyInfo}`);
    } else {
      navigate("/jobs-ads");
    }
  };

  const goToShorts = () => {
    navigate("/shorts");
  };

  return (
    <div>
      <button onClick={goToJobsAds}>JobsAds</button>
      <button onClick={goToShorts}>Shorts</button>
    </div>
  );
}

export default Activity;
 */

import { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";
import { useNavigate } from "react-router-dom";

function Activity() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const goToJobsAds = () => {
    if (user.companyInfo) {
      navigate(`/vacancy-required/${user.companyInfo}`);
    } else {
      navigate("/jobs-ads");
    }
  };

  const goToShorts = () => {
    navigate("/shorts");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-indigo-600 p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Activity Page
        </h1>

        <div className="space-y-4">
          {/* Jobs Ads Button */}
          <button
            onClick={goToJobsAds}
            className="w-full py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition duration-300">
            Jobs Ads
          </button>

          {/* Shorts Button */}
          <button
            onClick={goToShorts}
            className="w-full py-3 px-6 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition duration-300">
            Shorts
          </button>
        </div>
      </div>
    </div>
  );
}

export default Activity;
