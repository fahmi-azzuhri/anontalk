import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../auth/login";
import App from "../App";
import Register from "../auth/register";
import Dashboard from "../auth/dashboard";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/auth/onlyadmin/login-admin" element={<Login />} />
      <Route path="/auth/onlyadmin/register-admin" element={<Register />} />
      <Route path="/onlyadmin/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default AppRoutes;
