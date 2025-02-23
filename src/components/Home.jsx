import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6 text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-green-600">Welcome to PlantPulse</h1>
      <p className="text-lg text-gray-600 mt-2">AI-powered plant health detection and disease analysis.</p>
      <h3 className="mt-4 text-xl font-medium text-gray-700">Upload → Analyze → Get Results</h3>
      <div className="mt-6 space-y-4">
        <button onClick={() => navigate("/analyze")} className="primary-btn">Analyze Plant</button>
        <button onClick={() => navigate("/disease-info")} className="primary-btn">View Disease Info</button>
      </div>
      <p className="text-sm text-gray-400 mt-4">Ensure the plant is well-lit and clear for accurate analysis.</p>
    </div>
  );
};

export default Home;
