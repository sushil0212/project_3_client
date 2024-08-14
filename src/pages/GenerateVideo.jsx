// src/pages/GenerateVideo.jsx
import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";

function GenerateVideo() {
  const [roles, setRoles] = useState([{ role: "", quantity: "" }]);
  const [videoUrl, setVideoUrl] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const storedToken = localStorage.getItem("authToken");

  const handleRoleChange = (index, e) => {
    const newRoles = [...roles];
    newRoles[index][e.target.name] = e.target.value;
    setRoles(newRoles);
  };

  const addRole = () => {
    setRoles([...roles, { role: "", quantity: "" }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/generate-video`,
        { roles },
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );
      if (response.data.success) {
        setVideoUrl(response.data.videoUrl);
        navigate(`/preview/${response.data.videoUrl}`);
      } else {
        setError("Failed to generate video.");
      }
    } catch (error) {
      console.error("Error generating video:", error);
      setError("An error occurred while generating the video.");
    }
  };

  return (
    <div>
      <h2>Generate Video</h2>
      <form onSubmit={handleSubmit}>
        {roles.map((role, index) => (
          <div key={index}>
            <label htmlFor={`role-${index}`}>Role</label>
            <input
              type="text"
              id={`role-${index}`}
              name="role"
              value={role.role}
              onChange={e => handleRoleChange(index, e)}
            />
            <label htmlFor={`quantity-${index}`}>Quantity</label>
            <input
              type="text"
              id={`quantity-${index}`}
              name="quantity"
              value={role.quantity}
              onChange={e => handleRoleChange(index, e)}
            />
          </div>
        ))}
        <button type="button" onClick={addRole}>Add Role</button>
        <button type="submit">Generate Video</button>
      </form>
      {videoUrl && (
        <video
          src={videoUrl}
          controls
        />
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default GenerateVideo;
