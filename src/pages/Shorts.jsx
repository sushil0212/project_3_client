import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";
import axios from "axios";
import LikeDislikeButtons from "../components/LikeDislikeButtons";

function Shorts() {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [error, setError] = useState(null);
  const [uploadCvMessage, setUploadCvMessage] = useState("");

  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/shorts`,
          {
            params: {
              searchTerm,
              role: selectedCategory,
            },
          }
        );

        if (response.data.fallback) {
          setVideos(response.data.jobs);
          setError("Failed to load shorts. Showing job descriptions instead.");
        } else {
          setVideos(response.data);
          setError(null);
        }
      } catch (error) {
        console.error(error);
        setError("Failed to load shorts. Showing job descriptions instead.");
      }
    };
    fetchVideos();
  }, [searchTerm, selectedCategory]);

  const handleCvUpload = async (shortId, e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("cv", file);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/upload/cv/${shortId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUploadCvMessage(response.data.message);
    } catch (error) {
      console.error(error.response?.data || error.message);
      setUploadCvMessage(
        error.response?.data?.message || "Failed to upload CV"
      );
    }
  };

  const handleSaveForLater = async shortId => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/saved-shorts/save/${shortId}`,
        { userId: user._id },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert("Failed to save the short.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="mb-6">
        <input
          type="text"
          placeholder="Search Jobs as Position"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 p-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </header>

      <main className="space-y-8">
        {error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          videos.map(video => (
            <div
              key={video._id}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row md:space-x-6">
              <div className="w-full">
                <h1 className="text-xl font-semibold text-gray-800 mb-4">
                  Job Description
                </h1>
                {video.shortVideoUrl && (
                  <>
                    <p className="text-gray-600">Listen to this description:</p>
                    <audio
                      src={video.shortVideoUrl}
                      controls
                      className="w-full mt-2"
                    />
                  </>
                )}
                <div className="mt-4">
                  <h2 className="font-medium text-gray-700">Position:</h2>
                  <p className="text-gray-600">{video.position}</p>
                </div>
                <div className="mt-2">
                  <h2 className="font-medium text-gray-700">Salary:</h2>
                  <p className="text-gray-600">{video.salary}</p>
                </div>
                <div className="mt-2">
                  <h2 className="font-medium text-gray-700">Working Days:</h2>
                  <p className="text-gray-600">{video.workingDays}</p>
                </div>
                <div className="mt-2">
                  <h2 className="font-medium text-gray-700">Qualification:</h2>
                  <p className="text-gray-600">{video.qualification}</p>
                </div>
                <div className="mt-2">
                  <h2 className="font-medium text-gray-700">Role:</h2>
                  <p className="text-gray-600">{video.role}</p>
                </div>
                <div className="mt-2">
                  <h2 className="font-medium text-gray-700">Experience:</h2>
                  <p className="text-gray-600">{video.experience}</p>
                </div>

                <Link
                  to={`/shorts/${video._id}`}
                  className="inline-block mt-4 text-green-500 hover:underline">
                  Check details
                </Link>
              </div>

              <div className="mt-6 md:mt-0">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={e => handleCvUpload(video._id, e)}
                  className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {uploadCvMessage && (
                  <p className="text-green-500 mt-2">{uploadCvMessage}</p>
                )}
              </div>

              <div className="mt-4 md:mt-0">
                <LikeDislikeButtons
                  shortId={video._id}
                  userId={user._id}
                  isLiked={video.likes.includes(user._id)}
                  isDisliked={video.dislikes.includes(user._id)}
                  likeCount={video.likes.length}
                  dislikeCount={video.dislikes.length}
                  likesList={video.likes}
                  dislikesList={video.dislikes}
                />
                <button
                  onClick={() => handleSaveForLater(video._id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 transition hover:bg-blue-600">
                  Watch Later
                </button>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
}

export default Shorts;
