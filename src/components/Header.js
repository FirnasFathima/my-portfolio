import React from "react";

export default function Header() {
  return (
    <header className="hero text-center text-white d-flex align-items-center justify-content-center">
      <div>
        <h1 className="display-4 fw-bold">Hi, I'm Firnas Fathima</h1>
        <p className="lead text-white-50">A Passionate Web and Software Developer</p>
        <section className="py-5 text-center text-white">
          <div className="container">
            <a
              href="https://drive.google.com/file/d/1oyRUcZBCp7ZMYffgJ2M3yTH6565xj_ed/view?usp=sharing"
              className="btn btn-primary btn-lg me-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-eye me-2"></i> View Resume
            </a>
            <a
              href="/Firnas_Fathima_Resume.pdf"
              className="btn btn-secondary btn-lg"
              download="Firnas_Fathima_Resume.pdf"
            >
              <i className="bi bi-file-earmark-pdf-fill me-2"></i> Download Resume
            </a>
          </div>
        </section>
      </div>
    </header>
  );
}
