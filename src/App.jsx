import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import DiseaseInfo from "./components/DiseaseInfo";
import Login from "./components/Login";
import Register from "./components/Register";
import PlantHealthApp from "./components/PlantHealthApp";
import "./styles.css";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-200 flex flex-col">
        <Navbar user={user} onLogout={() => setUser(null)} />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={user ? <Home /> : <Login onLogin={setUser} />} />
            <Route path="/register" element={<Register onRegister={() => setUser(null)} />} />
            <Route path="/disease-info" element={<DiseaseInfo />} />
            <Route path="/analyze" element={<PlantHealthApp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;