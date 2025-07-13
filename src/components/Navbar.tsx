import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { UserAuth } from "../context/AuthContext";

function NavBar() {
  const { user, signOut } = UserAuth();

  return (
    <nav className="navbar flex p-10 justify-between">
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} alt="logo" width={120} height={30} />
        </Link>
      </div>
      <div className="navbar-links flex gap-2 items-center">
        {user ? (
          <>
            <span className="mr-4">Hello, {user.email}</span>
            <button onClick={signOut} className="nav-link">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <span>//</span>
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
