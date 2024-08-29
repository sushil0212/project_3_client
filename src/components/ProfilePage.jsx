import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/auth.context";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { user, authenticateUser, storeToken } = useContext(AuthContext);
  const [newProfilePic, setNewProfilePic] = useState("");
  const [loading, setLoading] = useState(false);
  const storedToken = localStorage.getItem("authToken");
  const navigate = useNavigate();

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
      navigate("/activity"); // Navigate to Activity after updating profile pic
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
      storeToken(response.data.authToken);
      await authenticateUser();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="ProfilePage min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-200 to-blue-300 p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform duration-300 hover:scale-105">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Profile Page</h2>

        {user && user.profilePic ? (
          <img
            src={user.profilePic}
            alt="Profile"
            className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-lg"
          />
        ) : (
          <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center text-gray-500">
            No Profile Picture
          </div>
        )}

        <input
          type="file"
          onChange={handleFileUpload}
          className="mt-4 mb-6 text-center block mx-auto text-sm text-gray-600"
        />

        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={handleUpdateProfilePic}
            disabled={loading}
            className={`py-2 px-6 rounded-lg text-white ${
              loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
            } transition duration-300`}>
            {loading ? "Uploading..." : "Update"}
          </button>

          <button
            onClick={handleDeleteProfilePic}
            disabled={loading}
            className={`py-2 px-6 rounded-lg text-white ${
              loading ? "bg-gray-400" : "bg-red-500 hover:bg-red-600"
            } transition duration-300`}>
            {loading ? "Removing..." : "Delete"}
          </button>
        </div>

        {/* Next Button */}
        <button
          onClick={() => navigate("/activity")}
          className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300">
          Next
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
