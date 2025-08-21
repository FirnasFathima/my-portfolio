import React from "react";

export default function Projects() {
  const projects = [
    {
      name: "Handtalk Assistive Technology - Final Year Project",
      description: "Designed a real-time sign language recognition system with gesture-to-text and speech output.",
    },
    {
      name: "Chatbot Application",
      description: "Built an AI-powered essay drafting bot with topic suggestions and grammar checking.",
    },
    {
      name: "To-do List App",
      description: "Developed a dynamic to-do list app with add/delete features and real-time UI updates.",
      githubLink: "https://github.com/FirnasFathima/todo-list-app",
      liveDemoLink: "https://firnasfathima.github.io/todo-list-app/",
    },
    {
      name: "Weather App",
      description: "Responsive weather app built using HTML, CSS, and JavaScript for real-time conditions.",
      githubLink: "https://github.com/FirnasFathima/Weather_app",
      liveDemoLink: "https://firnasfathima.github.io/Weather_app/",
    },
  ];

  return (
    <section id="projects" className="py-5 container">
      <h2 className="fw-bold mb-4 text-center">Projects</h2>
      <div className="row">
        {projects.map((project, idx) => (
          <div key={idx} className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text flex-grow-1">{project.description}</p>

                <div className="d-flex gap-2 mt-3">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      className="btn btn-dark btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-github me-2"></i>GitHub
                    </a>
                  )}
                  {project.liveDemoLink && (
                    <a
                      href={project.liveDemoLink}
                      className="btn btn-primary btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-box-arrow-up-right me-2"></i>Live Demo
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
