import React from "react";

export default function Skills() {
  const skills = [
    { name: "HTML5, CSS3, Bootstrap", percentage: "95%" },
    { name: "React.js", percentage: "85%" },
    { name: "Python", percentage: "90%" },
    { name: "Java", percentage: "80%" },
    { name: "Flask, REST APIs", percentage: "85%" },
    { name: "SQL, MySQL, MongoDB", percentage: "80%" },
    { name: "Git, GitHub", percentage: "90%" },
    {name:"C#",percentage:"70%"},
  ];

  return (
    <section id="skills" className="py-5 container">
      <h2 className="fw-bold mb-4 text-center">Skills</h2>
      <div className="row g-4">
        {skills.map((skill, idx) => (
          <div key={idx} className="col-12 col-md-6">
            <div className="d-flex justify-content-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.percentage}</span>
            </div>
            <div className="progress" style={{ height: "8px" }}>
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: skill.percentage }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
