// src/components/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/profile.jpg"; // <-- image import
import resumePDF from "../assets/resume.pdf"; // <-- resume import

export default function Home() {
  return (
    <section className="hero">
      {/* PROFILE IMAGE */}
      <img src={profileImg} alt="Profile" className="profile-img" />

      <p className="hero-eyebrow">👋 Hi, I’m</p>
      <h2 className="hero-title">OM VADHER</h2>

      <p className="hero-subtitle">
        A dedicated Computer Science student focused on developing
        <strong> efficient, user-friendly web apps</strong> and strengthening
        skills in DSA & problem solving.
      </p>

      <p className="hero-text">
        I mainly work with{" "}
        <strong>React, JavaScript, Java, Python, Machine Learning</strong>. I love
        turning ideas into real projects and constantly learning new
        technologies.
      </p>

      {/* ACTION BUTTONS */}
      <div className="hero-actions">
        <Link to="/projects" className="btn primary">
          View Projects
        </Link>

        {/* RESUME DOWNLOAD */}
        <a href={resumePDF} download className="btn ghost">
          📄 Download Resume
        </a>
      </div>

      {/* HIGHLIGHTS SECTION */}
      <ul className="hero-highlights">
        <li>🎓 B.Tech CSE • Parul University</li>
        <li>💻 Focus: Web Development & Problem Solving</li>
        <li>🧠 Practicing LeetCode & Data Structures</li>
      </ul>
    </section>
  );
}
