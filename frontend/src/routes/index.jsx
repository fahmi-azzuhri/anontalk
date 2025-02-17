import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../auth/login";
import App from "../App";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/api/auth/login-admin" element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;
