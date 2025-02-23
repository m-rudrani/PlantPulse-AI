import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username && password) {
      onLogin(username);
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6 text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-green-600">Welcome to PlantPulse</h1>
      <p className="text-lg text-gray-600 mt-2">AI-powered plant health detection and disease analysis.</p>
      <h3 className="mt-4 text-xl font-medium text-gray-700">Upload → Analyze → Get Results</h3>
      <div className="mt-6 space-y-4">
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="mt-4 p-2 border rounded w-80" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-2 p-2 border rounded w-80" />
      <button onClick={handleLogin} className="mt-4 px-6 py-2 bg-green-500 text-white rounded">Login</button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <p className="mt-4">Don't have an account? <Link to="/register" className="text-blue-500">Register</Link></p>
      </div>
      <p className="text-sm text-gray-400 mt-4">Ensure the plant is well-lit and clear for accurate analysis.</p>
    </div>
  
  );
};

export default Login;
