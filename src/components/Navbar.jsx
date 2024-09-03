/* import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";
import NotificationIcon from "./NotificationIcon";

const Navbar = () => {
  const { user, loading, logout } = useContext(AuthContext);
  const showDashboardLink = user && user.companyInfo;

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="text-xl font-bold hover:text-gray-200 transition">
            Home
          </Link>
          <NotificationIcon className="hover:text-gray-200 transition" />
        </div>

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
              {showDashboardLink && (
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `hover:text-gray-200 transition ${
                      isActive ? "text-gray-300" : ""
                    }`
                  }>
                  Dashboard
                </NavLink>
              )}
              <NavLink
                to="/saved-shorts"
                className={({ isActive }) =>
                  `hover:text-gray-200 transition ${
                    isActive ? "text-gray-300" : ""
                  }`
                }>
                Saved Shorts
              </NavLink>
            </>
          )}
        </ul>

        <div className="flex items-center space-x-4">
          {user && (
            <>
              {user.profilePic && (
                <img
                  src={user.profilePic}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              )}
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
 

 */

/* import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";
import NotificationIcon from "./NotificationIcon";

const Navbar = () => {
  const { user, loading, logout } = useContext(AuthContext);
  const showDashboardLink = user && user.companyInfo;

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="text-xl font-bold hover:text-gray-200 transition">
            Home
          </Link>
          <NotificationIcon className="hover:text-gray-200 transition" />
        </div>

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
              {showDashboardLink && (
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `hover:text-gray-200 transition ${
                      isActive ? "text-gray-300" : ""
                    }`
                  }>
                  Dashboard
                </NavLink>
              )}
              <NavLink
                to="/saved-shorts"
                className={({ isActive }) =>
                  `hover:text-gray-200 transition ${
                    isActive ? "text-gray-300" : ""
                  }`
                }>
                Saved Shorts
              </NavLink>
            </>
          )}
        </ul>

        <div className="flex items-center space-x-4">
          {user ? (
            <>
              {user.profilePic && (
                <img
                  src={user.profilePic}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              )}
              <p className="text-sm">{user.username}</p>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
                Logout
              </button>
            </>
          ) : (
            !loading && (
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
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
 */

/* import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";
import NotificationIcon from "./NotificationIcon";

const Navbar = () => {
  const { user, loading, logout } = useContext(AuthContext);
  const showDashboardLink = user && user.companyInfo;

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="text-xl font-bold hover:text-gray-200 transition">
            Home
          </Link>
          <NotificationIcon className="hover:text-gray-200 transition" />
        </div>

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
              {showDashboardLink && (
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `hover:text-gray-200 transition ${
                      isActive ? "text-gray-300" : ""
                    }`
                  }>
                  Dashboard
                </NavLink>
              )}
              <NavLink
                to="/saved-shorts"
                className={({ isActive }) =>
                  `hover:text-gray-200 transition ${
                    isActive ? "text-gray-300" : ""
                  }`
                }>
                Saved Shorts
              </NavLink>
            </>
          )}
        </ul>

        <div className="flex items-center space-x-4">
          {user ? (
            <>
              {user.profilePic && (
                <img
                  src={user.profilePic}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              )}
              <p className="text-sm">{user.username}</p>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
                Logout
              </button>
            </>
          ) : (
            !loading && (
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
            )
          )}
        </div>
      </div>
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
    <nav className="bg-blue-600 text-white p-4 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="text-xl font-bold hover:text-gray-200 transition">
            Home
          </Link>
          {user && (
            <NotificationIcon className="hover:text-gray-200 transition" />
          )}
        </div>

        <ul className="flex items-center space-x-6">
          {user ? (
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
              <NavLink
                to="/saved-shorts"
                className={({ isActive }) =>
                  `hover:text-gray-200 transition ${
                    isActive ? "text-gray-300" : ""
                  }`
                }>
                Saved Shorts
              </NavLink>
            </>
          ) : null}
        </ul>

        <div className="flex items-center space-x-4">
          {user ? (
            <>
              {user.profilePic && (
                <img
                  src={user.profilePic}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              )}
              <p className="text-sm">{user.username}</p>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
                Logout
              </button>
            </>
          ) : (
            !loading && (
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
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
