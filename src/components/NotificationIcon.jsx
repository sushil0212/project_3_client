// components/NotificationIcon.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function NotificationIcon() {
  const [unreadCount, setUnreadCount] = useState(0);
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        if (!token) {
          throw new Error("No auth token found");
        }

        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/notifications`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (Array.isArray(response.data)) {
          const unreadNotifications = response.data.filter(
            notification => !notification.isRead
          );
          setUnreadCount(unreadNotifications.length);
        } else {
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Failed to fetch notifications:", error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div>
      <Link to="/notifications">
        <i className="fas fa-bell"></i>
        {unreadCount > 0 && <span>{unreadCount}</span>}
      </Link>
    </div>
  );
}

export default NotificationIcon;
