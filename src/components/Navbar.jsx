import { Link, NavLink } from "react-router-dom";
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
