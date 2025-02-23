import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="bg-green-700 p-4 shadow-md text-white flex justify-between items-center w-full fixed top-0 left-0">
      <div>
      <div className="text-2xl font-bold">PlantPulse AI</div>
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
        <li><Link to="/disease-info" className="hover:text-gray-300">Disease Info</Link></li>
      </ul>
      <ul className="flex space-x-4">
        {!user ? (
          <>
            <li><Link to="/login" className="hover:text-gray-300">Login</Link></li>
            <li><Link to="/register" className="hover:text-gray-300">Register</Link></li>
          </>
        ) : (
          <li><button onClick={onLogout} className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">Logout</button></li>
        )}
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
