import React from "react";
import { Link } from "react-router-dom";
import "/src/styles.css"; // Ensure styles are imported

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">🌿 PlantPulse AI</Link>

        <ul className="navbar-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/disease-info" className="nav-link">Disease Info</Link></li>

          {!user ? (
            <>
              <li><Link to="/login" className="nav-link login-btn">Login</Link></li>
              <li><Link to="/register" className="nav-link register-btn">Register</Link></li>
            </>
          ) : (
            <li>
              <button onClick={onLogout} className="logout-btn">Logout</button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
