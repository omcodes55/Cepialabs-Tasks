import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const activeStyle = { fontWeight: 700, textDecoration: "underline" };

export default function Layout() {
  return (
    <div className="container">
      <header>
        <div>
          <h1 style={{ margin: 0 }}>Om Vadher</h1>
          <div style={{ fontSize: 12, color: "#666" }}>B.Tech CSE Student</div>
        </div>

        <nav>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        © {new Date().getFullYear()} Vadher Om — Built with React Router
      </footer>
    </div>
  );
}
