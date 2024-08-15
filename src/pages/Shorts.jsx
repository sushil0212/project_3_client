import React, { useState, useEffect } from "react";
import axios from "axios";

function Shorts() {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [error, setError] = useState(null);
  const [uploadCvMessage, setUploadCvMessage] = useState("");
  const [editingComment, setEditingComment] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const token = localStorage.getItem("authToken");

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
      }
    };
    fetchVideos();
  }, []);

  const handleCommentSubmit = async () => {
    if (!selectedVideoId || commentText.trim() === "") return;

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/shorts/comment/${selectedVideoId}`,
        {
          userId,
          comment: commentText,
        }
      );

      // Update the state with the new comment
      const updatedVideos = videos.map(video =>
        video._id === selectedVideoId
          ? {
              ...video,
              comments: [
                ...video.comments,
                { userId, text: commentText, _id: Date.now() },
              ],
            }
          : video
      );
      setVideos(updatedVideos);
      setCommentText("");
      setSelectedVideoId(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCommentEdit = async (videoId, commentId) => {
    if (commentText.trim() === "") return;

    try {
      await axios.put(
        `${
          import.meta.env.VITE_API_URL
        }/api/shorts/comment/${videoId}/${commentId}`,
        {
          comment: commentText,
        }
      );

      const updatedVideos = videos.map(video =>
        video._id === videoId
          ? {
              ...video,
              comments: video.comments.map(comment =>
                comment._id === commentId
                  ? { ...comment, text: commentText }
                  : comment
              ),
            }
          : video
      );
      setVideos(updatedVideos);
      setCommentText("");
      setEditingComment(null);
      setSelectedVideoId(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCommentDelete = async (videoId, commentId) => {
    try {
      await axios.delete(
        `${
          import.meta.env.VITE_API_URL
        }/api/shorts/comment/${videoId}/${commentId}`
      );

      const updatedVideos = videos.map(video =>
        video._id === videoId
          ? {
              ...video,
              comments: video.comments.filter(
                comment => comment._id !== commentId
              ),
            }
          : video
      );
      setVideos(updatedVideos);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCvUpload = async e => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("cv", file);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/upload/cv`,
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
            .map(video => (
              <div key={video._id}>
                {video.shortVideoUrl ? (
                  <video
                    src={video.shortVideoUrl}
                    controls
                  />
                ) : (
                  <div>
                    <h1>Job Description</h1>
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
                  </div>
                )}

                <div>
                  <textarea
                    value={commentText}
                    onChange={e => setCommentText(e.target.value)}
                    placeholder="Write a comment..."
                  />
                  {editingComment ? (
                    <button
                      onClick={() =>
                        handleCommentEdit(video._id, editingComment)
                      }>
                      Update Comment
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setSelectedVideoId(video._id);
                        handleCommentSubmit();
                      }}>
                      Submit Comment
                    </button>
                  )}
                </div>

                <div>
                  {video.comments.map(comment => (
                    <div key={comment._id}>
                      <p>{comment.text}</p>
                      <button
                        onClick={() => {
                          setEditingComment(comment._id);
                          setCommentText(comment.text);
                          setSelectedVideoId(video._id);
                        }}>
                        Edit
                      </button>
                      <button
                        onClick={() =>
                          handleCommentDelete(video._id, comment._id)
                        }>
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))
        )}
      </main>

      <div>
        <input
          type="file"
          accept=".pdf"
          onChange={handleCvUpload}
        />
        {uploadCvMessage && <p>{uploadCvMessage}</p>}
      </div>
    </div>
  );
}

export default Shorts;
