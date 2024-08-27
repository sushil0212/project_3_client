// pages/Notifications.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/notifications`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (Array.isArray(response.data)) {
          setNotifications(response.data);
        } else {
         /*  console.error("Unexpected response format:", response.data); */
          setNotifications([]);
        }
      } catch (error) {
        console.error("Failed to fetch notifications:", error);
        setNotifications([]);
      }
    };

    fetchNotifications();
  }, []);

  const markAsRead = async notificationId => {
    try {
      await axios.post(
        `${
          import.meta.env.VITE_API_URL
        }/api/notifications/${notificationId}/read`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setNotifications(prevNotifications =>
        prevNotifications.map(notification =>
          notification._id === notificationId
            ? { ...notification, isRead: true }
            : notification
        )
      );
    } catch (error) {
      console.error("Failed to mark notification as read", error);
    }
  };

  const sendMessage = async notificationId => {
    try {
      await axios.post(
        `${
          import.meta.env.VITE_API_URL
        }/api/notifications/${notificationId}/message`,
        { message },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Message sent to the user successfully!");
      setMessage("");
    } catch (error) {
      console.error("Failed to send message", error);
    }
  };

  return (
    <div>
      <h1>Notifications</h1>
      {notifications.map(notification => (
        <div
          key={notification._id}
          className={`notification ${notification.isRead ? "read" : "unread"}`}>
          <p>{notification.message}</p>
          {notification.cvId && (
            <a
              href={notification.cvId}
              target="_blank"
              rel="noopener noreferrer">
              View CV
            </a>
          )}
          <button onClick={() => markAsRead(notification._id)}>
            Mark as Read
          </button>
          {notification.type === "cv_uploaded" && (
            <>
              <input
                type="text"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Send a message to the user"
              />
              <button onClick={() => sendMessage(notification._id)}>
                Send Message
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Notifications;
