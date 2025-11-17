import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />

      {/* Dashboard with nested routes */}
      <Route path="/dashboard/*" element={<Dashboard />}>
        {/* Note: nested routes are rendered inside Dashboard */}
      </Route>

      {/* Dynamic user route */}
      <Route path="/user/:id" element={<UserDetails />} />

      {/* Fallback: redirect unknown to login */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
