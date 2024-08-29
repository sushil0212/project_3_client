/* // components/NotificationIcon.jsx
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
 */

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
    <div className="relative">
      <Link
        to="/notifications"
        className="text-gray-700 hover:text-gray-900">
        <i className="fas fa-bell text-2xl"></i>
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 inline-block w-4 h-4 bg-red-500 text-white text-xs font-bold leading-tight text-center rounded-full transform translate-x-1/2 -translate-y-1/2">
            {unreadCount}
          </span>
        )}
      </Link>
    </div>
  );
}

export default NotificationIcon;
