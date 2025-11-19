// src/components/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not-found">
      <h2>404 — Page Not Found</h2>
      <p>The page you’re looking for does not exist or has been moved.</p>
      <Link to="/" className="btn ghost">
        Go back home
      </Link>
    </section>
  );
}
