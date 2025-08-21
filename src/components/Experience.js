import React from "react";

export default function Experience() {
  const experience = [
    {
      title: "Python Intern",
      company: "Triplem Infotech Solutions",
      duration: "Jun 2024 - Aug 2024",
      responsibilities: [
        "Built an AI-based essay generator bot using Python Flask, HTML, and CSS.",
        "Implemented grammar checks, topic suggestions, and formatting logic.",
        "Boosted automation efficiency by streamlining essay generation by 70%.",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "Encryptix",
      duration: "Jun 2024 - Jul 2024",
      responsibilities: [
        "Developed responsive, SEO-friendly websites with HTML, CSS, and JavaScript.",
        "Enhanced UI/UX using modern design and accessibility standards.",
        "Delivered 3+ production-ready components, reducing load time by 20%.",
      ],
    },
    {
      title: "Web Design Intern",
      company: "Internship Studio",
      duration: "Jun 2024 - Jul 2024",
      responsibilities: [
        "Designed interactive and visually appealing educational web pages.",
        "Ensured cross-browser compatibility and responsive layouts.",
        "Collaborated with the team to enhance design quality and meet deadlines.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-5 container">
      <h2 className="fw-bold mb-4 text-center text-white-50">Experience</h2>
      <div className="row g-4">
        {experience.map((exp, idx) => (
          <div key={idx} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{exp.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{exp.company}</h6>
                <p className="small text-muted">{exp.duration}</p>
                <ul className="mt-2 flex-grow-1">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="small mb-1">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
