import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Nav from "../components/Nav";
import Profile from "./Profile";
import Settings from "./Settings";

export default function Dashboard() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>
      <Nav />

      {/* Example quick links to dynamic users */}
      <div style={{ marginBottom: 12 }}>
        <strong>Users:</strong>
        <ul>
          <li>
            <Link to="/user/1">User 1</Link>
          </li>
          <li>
            <Link to="/user/2">User 2</Link>
          </li>
        </ul>
      </div>

      {/* Nested routes rendering area */}
      <Routes>
        <Route
          path="/"
          element={
            <div>Welcome to your dashboard. Choose Profile or Settings.</div>
          }
        />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
}
