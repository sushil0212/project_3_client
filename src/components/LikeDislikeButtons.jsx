/* import React, { useState } from "react";
import axios from "axios";

function LikeDislikeButtons({
  shortId,
  userId,
  isLiked,
  isDisliked,
  likeCount,
  dislikeCount,
  likesList,
  dislikesList,
}) {
  const [liked, setLiked] = useState(isLiked);
  const [disliked, setDisliked] = useState(isDisliked);
  const [likesCount, setLikesCount] = useState(likeCount);
  const [dislikesCount, setDislikesCount] = useState(dislikeCount);
  const [likes, setLikes] = useState(likesList);
  const [dislikes, setDislikes] = useState(dislikesList);

  const handleLike = async () => {
    try {
      const { data } = liked
        ? await axios.post(
            `${import.meta.env.VITE_API_URL}/api/shorts/removeLike/${shortId}`,
            { userId }
          )
        : await axios.post(
            `${import.meta.env.VITE_API_URL}/api/shorts/like/${shortId}`,
            { userId }
          );

      setLiked(!liked);
      setDisliked(false);
      setLikesCount(data.likesCount);
      setDislikesCount(data.dislikesCount);
      setLikes(data.short.likes); // Update likes with the populated user list
      setDislikes(data.short.dislikes); // Update dislikes with the populated user list
    } catch (error) {
      console.error(error);
    }
  };

  const handleDislike = async () => {
    try {
      const { data } = disliked
        ? await axios.post(
            `${
              import.meta.env.VITE_API_URL
            }/api/shorts/removeDislike/${shortId}`,
            { userId }
          )
        : await axios.post(
            `${import.meta.env.VITE_API_URL}/api/shorts/dislike/${shortId}`,
            { userId }
          );

      setDisliked(!disliked);
      setLiked(false);
      setLikesCount(data.likesCount);
      setDislikesCount(data.dislikesCount);
      setLikes(data.short.likes); // Update likes with the populated user list
      setDislikes(data.short.dislikes); // Update dislikes with the populated user list
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button
        style={{ color: liked ? "green" : "black" }}
        onClick={handleLike}>
        {liked ? `Unlike (${likesCount})` : `Like (${likesCount})`}
      </button>
      <button
        style={{ color: disliked ? "red" : "black" }}
        onClick={handleDislike}>
        {disliked
          ? `Undislike (${dislikesCount})`
          : `Dislike (${dislikesCount})`}
      </button> 
      <div>
        <h4>Liked by:</h4>
        <ul>
          {likes.map(user => (
            <li key={user._id}>{user.username}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4>Disliked by:</h4>
        <ul>
          {dislikes.map(user => (
            <li key={user._id}>{user.username}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LikeDislikeButtons;
 */

import React, { useState } from "react";
import axios from "axios";

function LikeDislikeButtons({
  shortId,
  userId,
  isLiked,
  isDisliked,
  likeCount,
  dislikeCount,
  likesList,
  dislikesList,
}) {
  const [liked, setLiked] = useState(isLiked);
  const [disliked, setDisliked] = useState(isDisliked);
  const [likesCount, setLikesCount] = useState(likeCount);
  const [dislikesCount, setDislikesCount] = useState(dislikeCount);
  const [likes, setLikes] = useState(likesList);
  const [dislikes, setDislikes] = useState(dislikesList);

  const handleLike = async () => {
    try {
      const { data } = liked
        ? await axios.post(
            `${import.meta.env.VITE_API_URL}/api/shorts/removeLike/${shortId}`,
            { userId }
          )
        : await axios.post(
            `${import.meta.env.VITE_API_URL}/api/shorts/like/${shortId}`,
            { userId }
          );

      setLiked(!liked);
      setDisliked(false);
      setLikesCount(data.likesCount);
      setDislikesCount(data.dislikesCount);
      setLikes(data.short.likes); // Update likes with the populated user list
      setDislikes(data.short.dislikes); // Update dislikes with the populated user list
    } catch (error) {
      console.error(error);
    }
  };

  const handleDislike = async () => {
    try {
      const { data } = disliked
        ? await axios.post(
            `${
              import.meta.env.VITE_API_URL
            }/api/shorts/removeDislike/${shortId}`,
            { userId }
          )
        : await axios.post(
            `${import.meta.env.VITE_API_URL}/api/shorts/dislike/${shortId}`,
            { userId }
          );

      setDisliked(!disliked);
      setLiked(false);
      setLikesCount(data.likesCount);
      setDislikesCount(data.dislikesCount);
      setLikes(data.short.likes); // Update likes with the populated user list
      setDislikes(data.short.dislikes); // Update dislikes with the populated user list
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="flex items-center space-x-4 mb-4">
        <button
          onClick={handleLike}
          className={`px-4 py-2 rounded-lg text-white ${
            liked ? "bg-green-500" : "bg-gray-400 hover:bg-gray-500"
          }`}>
          {liked ? `Unlike (${likesCount})` : `Like (${likesCount})`}
        </button>
        <button
          onClick={handleDislike}
          className={`px-4 py-2 rounded-lg text-white ${
            disliked ? "bg-red-500" : "bg-gray-400 hover:bg-gray-500"
          }`}>
          {disliked
            ? `Undislike (${dislikesCount})`
            : `Dislike (${dislikesCount})`}
        </button>
      </div>

      <div className="mb-4">
        <h4 className="text-lg font-semibold text-gray-700">Liked by:</h4>
        <ul className="list-disc pl-5 text-gray-600">
          {likes.map(user => (
            <li key={user._id}>{user.username}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-700">Disliked by:</h4>
        <ul className="list-disc pl-5 text-gray-600">
          {dislikes.map(user => (
            <li key={user._id}>{user.username}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LikeDislikeButtons;
