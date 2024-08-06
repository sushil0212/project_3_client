import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";

const Navbar = () => {
  const { user, loading, logout } = useContext(AuthContext);
  return (
    <nav className="Navbar">
      <p>{user ? user.username : "Nepshopy"}</p>
      {user && (
        <img
          src={user.profilePic}
          height={70}
        />
      )}
      <ul>
        <NavLink
          className={({ isAtive }) => (isAtive ? "selected" : "")}
          to="/">
          Home
        </NavLink>
        {/*         <NavLink
          className={({ isAtive }) => (isAtive ? "selected" : "")}
          to="/about">
          About
        </NavLink> */}
        {/*         {user ? (
          <Link to="/projects">
            //
            <button>
              <Projects></Projects>
            </button>
          </Link>
        ) : (
          <>
            <Link to="/signup">
            Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )} */}
        {!loading && user && (
          <>
            {/*             <Link to="/projects">
              <button>Projects</button>
            </Link> */}
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
    </nav>
  );
};
export default Navbar;
