import React from "react";

const skills = [
  { name: "HTML5, CSS3, Bootstrap,JavaScript", percentage: "95%" },
  { name: "React.js", percentage: "85%" },
  { name: "Python", percentage: "90%" },
  { name: "Java", percentage: "80%" },
  { name: "Flask, RESTful APIs", percentage: "85%" },
  { name: "SQL, MySQL, MongoDB", percentage: "80%" },
  { name: "Git, GitHub", percentage: "90%" },
  {name:"C#",percentage:"70%"}
];

export default function Skills() {
  return (
    <section id="skills" className="py-5 container text-white-50">
      <h2 className="fw-bold mb-4">Skills</h2>
      <div className="row">
        {skills.map((skill, idx) => (
          <div key={idx} className="col-md-6 mb-3">
            <div className="d-flex justify-content-between">
              <span>{skill.name}</span>
              <span>{skill.percentage}</span>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width: skill.percentage }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
