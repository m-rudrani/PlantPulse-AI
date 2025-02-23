import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PlantHealthApp = () => {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleImageUpload = () => {
    if (!image) return;
    setLoading(true);
    setTimeout(() => {
      setResult({ plant: "Rose", health: "Healthy", recommendation: "No action needed" });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-green-600">Analyze Plant Health</h1>
      <div className="mt-4 bg-white p-6 rounded-lg shadow-md w-full max-w-lg text-center">
        <input type="file" onChange={handleImageChange} className="w-full p-2 border rounded mb-4" />
        {previewUrl && <img src={previewUrl} alt="Preview" className="w-40 h-40 object-cover rounded-lg mx-auto" />}
        <button onClick={handleImageUpload} className="mt-4 px-6 py-2 bg-blue-500 text-white rounded">
          {loading ? "Analyzing..." : "Upload & Analyze"}
        </button>
        {result && (
          <div className="mt-4 p-4 bg-gray-200 rounded">
            <p><strong>Plant:</strong> {result.plant}</p>
            <p><strong>Health:</strong> {result.health}</p>
            <p><strong>Recommendation:</strong> {result.recommendation}</p>
          </div>
        )}
      </div>
      <button onClick={() => navigate("/")} className="mt-6 px-6 py-2 bg-green-500 text-white rounded">Back to Home</button>
    </div>
  );
};

export default PlantHealthApp;
