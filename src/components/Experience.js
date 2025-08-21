import React from "react";

const experience = [
  {
    title: "Python Intern",
    company: "Triplem Infotech Solutions",
    duration: "Jun 2024 - Aug 2024",
    responsibilities: [
      "Built an AI-based essay generator bot using Python Flask, HTML, and CSS.",
      "Implemented grammar checks, topic suggestions, and formatting logic.",
      "Streamlined automation efficiency by 70%.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Encryptix",
    duration: "Jun 2024 - Jul 2024",
    responsibilities: [
      "Developed responsive, SEO-friendly websites (portfolio, calculator, landing page).",
      "Improved UI/UX by following modern design principles.",
      "Delivered 3+ production-ready components, reducing page load time by 20%.",
    ],
  },
  {
    title: "Web Design Intern",
    company: "Internship Studio",
    duration: "Jun 2024 - Jul 2024",
    responsibilities: [
      "Designed interactive and visually appealing educational web pages.",
      "Implemented responsive layouts for improved UX.",
      "Collaborated with team members to meet project deadlines.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-5 container text-white">
      <h2 className="fw-bold mb-4 text-white-50">Experience</h2>
      <div className="row">
        {experience.map((exp, idx) => (
          <div key={idx} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{exp.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{exp.company}</h6>
                <p className="card-text">{exp.duration}</p>
                <ul className="text-white">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
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
