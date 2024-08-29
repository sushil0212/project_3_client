/* // pages/Notifications.jsx
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
 */

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
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Notifications</h1>
      <div className="space-y-4">
        {notifications.map(notification => (
          <div
            key={notification._id}
            className={`p-4 rounded-lg shadow-md ${
              notification.isRead
                ? "bg-gray-200 text-gray-700"
                : "bg-white text-gray-900"
            }`}>
            <p>{notification.message}</p>
            {notification.cvId && (
              <a
                href={notification.cvId}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline">
                View CV
              </a>
            )}
            <button
              onClick={() => markAsRead(notification._id)}
              className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded-lg">
              Mark as Read
            </button>
            {notification.type === "cv_uploaded" && (
              <div className="mt-4">
                <input
                  type="text"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Send a message to the user"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
                <button
                  onClick={() => sendMessage(notification._id)}
                  className="mt-2 bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-4 rounded-lg">
                  Send Message
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;
