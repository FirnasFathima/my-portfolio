import React from "react";

export default function Navbar({ theme, toggleTheme, showNavbar }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-transparent fixed-top ${!showNavbar && 'navbar-hidden'}`}>
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#">My Portfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            <li className="nav-item ms-3">
              <button className="theme-toggle-btn" onClick={toggleTheme}>
                {theme === "day" ? <i className="bi bi-moon-stars-fill"></i> : <i className="bi bi-sun-fill"></i>}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
