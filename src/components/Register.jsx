import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (username && password) {
      setMessage("Registration successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);  // ✅ Redirect to login after 2 seconds
      onRegister();
    } else {
      setMessage("Please fill in both fields.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-semibold text-gray-800">Register</h2>
      <input type="text" placeholder="New Username" value={username} onChange={(e) => setUsername(e.target.value)}
        className="mt-4 p-2 border rounded w-80" />
      <input type="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)}
        className="mt-2 p-2 border rounded w-80" />
      <button onClick={handleRegister} className="mt-4 px-6 py-2 bg-blue-500 text-white rounded">Register</button>
      {message && <p className="mt-2 text-gray-700">{message}</p>}
      <p className="mt-4">Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
    </div>
  );
};

export default Register;
