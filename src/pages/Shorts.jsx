import React, { useState, useEffect } from "react";
import axios from "axios";

function Shorts() {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [error, setError] = useState(null); // New state for error handling

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/shorts`
        );
        setVideos(response.data);
      } catch (error) {
        console.error(error);
        setError("Failed to load shorts. Showing job descriptions instead.");
        // Optional: Fetch and show job descriptions if necessary
      }
    };
    fetchVideos();
  }, []);

  const handleCommentSubmit = async (videoId, comment) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/comments`, {
        videoId,
        comment,
      });
      // Update the state as necessary
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <header>
        <input
          type="text"
          placeholder="Search for jobs"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="IT">IT</option>
          <option value="fashion">Fashion</option>
          <option value="hotel">Hotel</option>
          <option value="other">Other</option>
        </select>
      </header>

      <main>
        {error ? (
          <p>{error}</p>
        ) : (
          videos
            .filter(
              video =>
                video.position.includes(searchTerm) &&
                (selectedCategory === "" || video.category === selectedCategory)
            )
            .map(video => {
              if (video.videoUrl) {
                return (
                  <div key={video._id}>
                    <video
                      src={`/videos/${video._id}.mp4`}
                      controls
                    />
                    <button
                      onClick={() =>
                        handleCommentSubmit(
                          video._id,
                          prompt("Enter your comment")
                        )
                      }>
                      Comment
                    </button>
                  </div>
                );
              } else {
                return (
                  <div key={video._id}>
                    <h2>{video.position}</h2>
                    <p>{video.role}</p>
                    <button
                      onClick={() =>
                        handleCommentSubmit(
                          video._id,
                          prompt("Enter your comment")
                        )
                      }>
                      Comment
                    </button>
                  </div>
                );
              }
            })
        )}
      </main>

      <footer>
        <textarea placeholder="Write a comment..."></textarea>
        <button>Submit</button>
      </footer>
    </div>
  );
}

export default Shorts;
