// ProfilePage.jsx
import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/auth.context";

const ProfilePage = () => {
  const { user, authenticateUser, storeToken } = useContext(AuthContext);
  const [newProfilePic, setNewProfilePic] = useState("");
  const [loading, setLoading] = useState(false);
  const storedToken = localStorage.getItem("authToken");

  const handleFileUpload = async e => {
    const uploadData = new FormData();
    uploadData.append("imgUrl", e.target.files[0]);

    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/upload/image`,
        uploadData
      );
      setNewProfilePic(response.data.fileUrl);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const handleUpdateProfilePic = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/update-profile-pic`,
        { profilePic: newProfilePic },
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );
      storeToken(response.data.authToken);
      await authenticateUser();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteProfilePic = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/delete-profile-pic`,
        {},
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );
      storeToken(response.data.authToken); //check
      await authenticateUser();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="ProfilePage">
      <h2>Profile</h2>
      {user && user.profilePic && (
        <img
          src={user.profilePic}
          alt="Profile"
          height={100}
        />
      )}
      <input
        type="file"
        onChange={handleFileUpload}
      />
      <button
        onClick={handleUpdateProfilePic}
        disabled={loading}>
        {loading ? "Uploading..." : "Update Profile Picture"}
      </button>
      <button
        onClick={handleDeleteProfilePic}
        disabled={loading}>
        {loading ? "Removing..." : "Delete Profile Picture"}
      </button>
    </div>
  );
};

export default ProfilePage;
