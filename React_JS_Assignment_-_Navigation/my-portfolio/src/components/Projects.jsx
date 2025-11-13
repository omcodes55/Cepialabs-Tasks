import React from "react";

export default function Projects() {
  const projects = [
    { id: 1, title: "Leet-Stats Tracker", desc: "HTML + CSS + JavaScript" },
    { id: 2, title: "Movie Recommandation System", desc: "Machine Learning" },
  ];

  return (
    <section>
      <h2>Projects — Recent work</h2>
      {projects.map(p => (
        <div key={p.id} className="card">
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
        </div>
      ))}
    </section>
  );
}
