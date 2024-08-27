import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/auth.context";

const DetailsPage = () => {
  const { shortId } = useParams();
  const [short, setShort] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [commentText, setCommentText] = useState("");
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("authToken");

  const fetchDetails = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/shorts/${shortId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setShort(response.data);
    } catch (error) {
      console.error("Error fetching the details page", error);
    }
  };
  useEffect(() => {
    fetchDetails();
  }, [shortId, token]);

  // Function to handle the submission of a new comment
  const handleCommentSubmit = async () => {
    if (!newComment.trim()) return;

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/shorts/comment/${shortId}`,
        {
          comment: newComment,
          userId: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setNewComment("");

      // Refresh details to show the new comment
      fetchDetails();
    } catch (error) {
      console.error("Error submitting the comment", error);
    }
  };

  const handleCommentEdit = async () => {
    if (!commentText.trim() || !editingCommentId) return;

    try {
      await axios.put(
        `${
          import.meta.env.VITE_API_URL
        }/api/shorts/comment/${editingCommentId}`,
        {
          text: commentText,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCommentText("");
      setEditingCommentId(null);
      fetchDetails();

      // Refresh details to show the updated comment
    } catch (error) {
      console.error("Error editing the comment", error);
    }
  };

  const handleCommentDelete = async commentId => {
    try {
      await axios.delete(
        `${
          import.meta.env.VITE_API_URL
        }/api/shorts/comment/${shortId}/${commentId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Refresh details to remove the deleted comment
      fetchDetails();
    } catch (error) {
      console.error("Error deleting the comment", error);
    }
  };

  return (
    <div>
      <h1>Job Description</h1>
      {!short && <h3>No details found</h3>}
      {short && (
        <div>
          <h2>Position:</h2>
          <p>{short.position}</p>
          <h2>Salary:</h2>
          <p>{short.salary}</p>
          <h2>Working Days:</h2>
          <p>{short.workingDays}</p>
          <h2>Qualification:</h2>
          <p>{short.qualification}</p>
          <h2>Role:</h2>
          <p>{short.role}</p>
          <h2>Experience:</h2>
          <p>{short.experience}</p>
          <div>
            <input
              type="text"
              value={newComment}
              onChange={e => setNewComment(e.target.value)}
              placeholder="Write a comment..."
            />

            <button onClick={handleCommentSubmit}>Add Comment</button>
          </div>
          <div>
            {short.comments.map(comment => (
              <div key={comment._id}>
                <h5>@{comment.username}</h5>

                {editingCommentId !== comment._id ? (
                  <p>{comment.text}</p>
                ) : (
                  <input
                    type="text"
                    value={commentText}
                    onChange={e => setCommentText(e.target.value)}
                  />
                )}

                {editingCommentId !== comment._id ? (
                  <button
                    onClick={() => {
                      setEditingCommentId(comment._id);
                      setCommentText(comment.text);
                    }}>
                    Edit
                  </button>
                ) : (
                  <button onClick={handleCommentEdit}>Update</button>
                )}

                <button onClick={() => handleCommentDelete(comment._id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
