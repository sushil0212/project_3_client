// src/pages/Preview.jsx
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Preview() {
  const { videoId } = useParams();
  const navigate = useNavigate();

  const handlePost = () => {
    navigate("/payment");
  };

  const handleDelete = () => {
    alert("Post deleted");
    navigate("/activity");
  };

  return (
    <div>
      <h2>Preview Video</h2>
      <video src={`/videos/${videoId}.mp4`} controls />
      <button onClick={handlePost}>Post</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Preview;
