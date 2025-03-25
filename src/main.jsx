import React from "react";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import LandingPage from "./LandingPage.jsx";
import LoginPage from "./LoginPage.jsx";
import SignupPage from "./SignupPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/movies" element={<App />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </StrictMode>
);
