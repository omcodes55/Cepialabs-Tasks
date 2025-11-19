// src/components/Layout.jsx
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="brand">
          
          <div>
            <h1 className="brand-title">Portfolio</h1>
            <p className="brand-tagline">B.Tech CSE • Web Developer</p>
          </div>
        </div>

        <nav className="site-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Contact
          </NavLink>
        </nav>
      </header>

      <main className="site-main">
        <div className="container">
          <Outlet />
        </div>
      </main>

      <footer className="site-footer">
        © {new Date().getFullYear()} Om Vadher • Built with React Router
      </footer>
    </div>
  );
}
