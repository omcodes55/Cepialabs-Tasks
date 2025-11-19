// src/components/Projects.jsx
import React from "react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Leet-Stats Tracker",
      desc: "A simple UI to track LeetCode progress and problem stats.",
      stack: ["HTML", "CSS", "JavaScript"],
      status: "Personal Project",
      github: "https://github.com/omcodes55/-LeetStat-A-LeetCode-Stats-Tracker-",
    },
    {
      id: 2,
      title: "Movie Recommendation System",
      desc: "Recommends movies using ML similarity and viewing history.",
      stack: ["Python", "Machine Learning"],
      status: "Academic Project",
      github: "https://github.com/omcodes55/Movies-Recommdation-System_Project",
    },
    {
      id: 3,
      title: "Basic Funny Calculator",
      desc: "Funny UI calculator with simple logic & creative UX.",
      stack: ["Servlet", "JSP"],
      status: "Mini Project",
      github: "https://github.com/omcodes55/Basic-Funny-Calc",
    },
    {
      id: 4,
      title: "Login Authentication System",
      desc: "Secure login system using JS + validation.",
      stack: ["Servlet", "JSP"],
      status: "Practice Project",
      github: "https://github.com/omcodes55/Login-Authentication-System",
    },
  ];

  return (
    <section>
      <h2>Projects</h2>
      <p className="section-intro">
        Here are some of my recent projects. I keep learning and building every day 🚀
      </p>

      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.id} className="card project-card">
            <h3>{p.title}</h3>
            <p className="project-desc">{p.desc}</p>

            {/* 🔗 GitHub Button with Icon */}
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              <span className="github-icon">🐙</span> View Code
            </a>

            {/* Meta Info */}
            <div className="project-meta">
              <span className="badge">{p.status}</span>
              <div className="stack">
                {p.stack.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
