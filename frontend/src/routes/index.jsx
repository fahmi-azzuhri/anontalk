import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../auth/login";
import App from "../App";
import Register from "../auth/register";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/auth/onlyadmin/login-admin" element={<Login />} />
      <Route path="/auth/onlyadmin/register-admin" element={<Register />} />
    </Routes>
  );
}

export default AppRoutes;
