import React from "react";

export default function Header() {
  return (
    <header className="hero d-flex align-items-center text-center text-white">
      <div className="container">
        <h1 className="display-4 fw-bold">Hi, I'm Firnas Fathima</h1>
        <p className="lead text-light-50">
          A Passionate Web and Software Developer
        </p>
        <div className="mt-4">
          <a
            href="https://drive.google.com/file/d/1oyRUcZBCp7ZMYffgJ2M3yTH6565xj_ed/view?usp=sharing"
            className="btn btn-primary btn-lg me-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
          <a
            href="Firnas_Fathima_Resume.pdf"
            download
            className="btn btn-outline-light btn-lg"
          >
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}
