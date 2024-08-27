// src/pages/Activity.jsx
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
