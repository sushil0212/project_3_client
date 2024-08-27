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
        // Fetch shorts or fallback to jobs based on searchTerm and role
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/shorts`,
          {
            params: {
              searchTerm,
              role: selectedCategory,
            },
          }
        );

        // If fallback is present in the response, show jobs instead
        if (response.data.fallback) {
          setVideos(response.data.jobs);
          setError("Failed to load shorts. Showing job descriptions instead.");
        } else {
          setVideos(response.data);
          console.log(response.data);
          setError(null);
        }
      } catch (error) {
        console.error(error);
        setError("Failed to load shorts. Showing job descriptions instead.");
      }
    };
    fetchVideos();
  }, [searchTerm, selectedCategory]); // Trigger fetching when searchTerm or selectedCategory changes

  const handleCvUpload = async (shortId, e) => {
    console.log(shortId);
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

  return (
    <div>
      <header>
        <input
          type="text"
          placeholder="Search Jobs as Position"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </header>

      <main>
        {error ? (
          <p>{error}</p>
        ) : (
          videos.map(video => (
            <div key={video._id}>
              <div>
                <h1>Job Description</h1>
                {video.shortVideoUrl && (
                  <>
                    <p>Listen to this description</p>
                    <audio
                      src={video.shortVideoUrl}
                      controls
                    />
                  </>
                )}

                <h2>Position:</h2>
                <p>{video.position}</p>
                <h2>Salary:</h2>
                <p>{video.salary}</p>
                <h2>Working Days:</h2>
                <p>{video.workingDays}</p>
                <h2>Qualification:</h2>
                <p>{video.qualification}</p>
                <h2>Role:</h2>
                <p>{video.role}</p>
                <h2>Experience:</h2>
                <p>{video.experience}</p>
                <Link to={`/shorts/${video._id}`}>Check details</Link>
                <div>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={e => handleCvUpload(video._id, e)}
                  />
                  {uploadCvMessage && <p>{uploadCvMessage}</p>}
                </div>

                {/*                 <LikeDislikeButtons
                  shortId={video._id}
                  userId={user._id}
                  isLiked={video.likes.includes(user._id)}
                  isDisliked={video.dislikes.includes(user._id)}
                /> */}

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
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
}

export default Shorts;
