import React from "react";
import { useNavigate } from "react-router-dom";

const DiseaseInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <h1 className="text-4xl font-bold text-green-600">Plant Diseases</h1>
      <div className="mt-4 w-full max-w-2xl bg-gray-100 p-6 rounded-lg shadow-md">
        <details className="mb-2">
          <summary className="cursor-pointer text-lg font-semibold text-gray-700">Leaf Spot Disease</summary>
          <p className="text-gray-600">Caused by fungi or bacteria leading to spots on leaves.</p>
        </details>
        <details className="mb-2">
          <summary className="cursor-pointer text-lg font-semibold text-gray-700">Powdery Mildew</summary>
          <p className="text-gray-600">White powdery growth affecting plant leaves.</p>
        </details>
        <details>
          <summary className="cursor-pointer text-lg font-semibold text-gray-700">Root Rot</summary>
          <p className="text-gray-600">Overwatering causes fungal infections leading to root decay.</p>
        </details>
      </div>
      <button onClick={() => navigate("/")} className="mt-6 px-6 py-2 bg-green-500 text-white rounded">Back to Home</button>
    </div>
  );
};

export default DiseaseInfo;