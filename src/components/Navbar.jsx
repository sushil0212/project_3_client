/* import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";
import NotificationIcon from "./NotificationIcon";

const Navbar = () => {
  const { user, loading, logout } = useContext(AuthContext);
  return (
    <nav className="Navbar">
      <NotificationIcon />
      <p>{user ? user.username : ""}</p>
      {user && (
        <img
          src={user.profilePic}
          height={70}
          alt="Profile"
        />
      )}
      <ul>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "")}
          to="/">
          Home
        </NavLink>
        {user && (
          <NavLink
            className={({ isActive }) => (isActive ? "selected" : "")}
            to="/profile">
            Profile
          </NavLink>
        )}
        {!loading && user && (
          <>
            <button onClick={logout}>Logout</button>
          </>
        )}
        {!loading && !user && (
          <>
            <Link to="/signup">
              <button>Signup</button>
            </Link>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </>
        )}
      </ul>

      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
};
export default Navbar;
 */

import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";
import NotificationIcon from "./NotificationIcon";

const Navbar = () => {
  const { user, loading, logout } = useContext(AuthContext);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: Logo and Home link */}
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="text-xl font-bold hover:text-gray-200 transition">
            Homepage
          </Link>
          {/* Notification Icon */}
          <NotificationIcon className="hover:text-gray-200 transition" />
        </div>

        {/* Middle: Conditional User Profile and Links */}
        <ul className="flex items-center space-x-6">
          {user && (
            <>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `hover:text-gray-200 transition ${
                    isActive ? "text-gray-300" : ""
                  }`
                }>
                Profile
              </NavLink>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `hover:text-gray-200 transition ${
                    isActive ? "text-gray-300" : ""
                  }`
                }>
                Dashboard
              </NavLink>
            </>
          )}
        </ul>

        {/* Right side: Authentication buttons */}
        <div className="flex items-center space-x-4">
          {user && (
            <>
              <img
                src={user.profilePic}
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <p className="text-sm">{user.username}</p>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
                Logout
              </button>
            </>
          )}

          {!loading && !user && (
            <>
              <Link to="/signup">
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
                  Signup
                </button>
              </Link>
              <Link to="/login">
                <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
