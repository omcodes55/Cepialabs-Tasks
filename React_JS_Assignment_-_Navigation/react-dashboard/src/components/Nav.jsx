import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  return (
    <nav style={{ display: "flex", gap: 12, marginBottom: 16 }}>
      <NavLink to="/dashboard" end>
        Home
      </NavLink>
      <NavLink to="/dashboard/profile">Profile</NavLink>
      <NavLink to="/dashboard/settings">Settings</NavLink>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </nav>
  );
}
