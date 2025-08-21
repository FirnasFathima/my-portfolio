import React from "react";

const projects = [
  {
    name: "Handtalk Assistive Technology",
    description: "Real-time sign language recognition system with gesture-to-text and speech output.",
  },
  {
    name: "Chatbot Application",
    description: "AI-powered essay drafting bot with topic suggestions and grammar checking.",
  },
  {
    name: "To-Do List App",
    description: "Dynamic task manager with add/delete features and real-time updates.",
    githubLink: "https://github.com/FirnasFathima/todo-list-app",
    liveDemoLink: "https://firnasfathima.github.io/todo-list-app/",
  },
  {
    name: "Weather App",
    description: "Responsive app showing real-time weather conditions for any city.",
    githubLink: "https://github.com/FirnasFathima/Weather_app",
    liveDemoLink: "https://firnasfathima.github.io/Weather_app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-5 container text-white">
      <h2 className="fw-bold mb-4 text-white-50">Projects</h2>
      <div className="row">
        {projects.map((project, idx) => (
          <div key={idx} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
                <div className="d-flex justify-content-between mt-3">
                  {project.githubLink && (
                    <a href={project.githubLink} className="btn btn-dark" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-github me-2"></i> GitHub
                    </a>
                  )}
                  {project.liveDemoLink && (
                    <a href={project.liveDemoLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-box-arrow-up-right me-2"></i> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
