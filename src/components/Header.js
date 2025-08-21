import React from "react";

export default function Header() {
  return (
    <header className="hero text-center text-white d-flex align-items-center justify-content-center">
      <div>
        <h1 className="display-4 fw-bold">Hi, I'm Firnas Fathima</h1>
        <p className="lead text-white-50">A Passionate Web and Software Developer</p>

        <section className="py-5 text-center">
  <div className="container d-flex flex-column flex-md-row justify-content-center align-items-center">
    <a
      href="https://drive.google.com/file/d/1oyRUcZBCp7ZMYffgJ2M3yTH6565xj_ed/view?usp=sharing"
      className="btn resume-btn me-md-3 mb-3 mb-md-0 text-white"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="bi bi-eye me-2"></i> View Resume
    </a>
    <a
      href="https://drive.google.com/uc?export=download&id=1oyRUcZBCp7ZMYffgJ2M3yTH6565xj_ed"
      className="btn resume-btn-secondary text-white"
      download="Firnas_Fathima_Resume.pdf"
    >
      <i className="bi bi-download me-2"></i> Download Resume
    </a>
  </div>
</section>


      </div>
    </header>
  );
}
