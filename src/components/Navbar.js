import React from "react";

export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand fw-bold fs-4" href="#home">
          My Portfolio
        </a>

        {/* Theme Toggle - Always Visible */}
        <button
          className="theme-toggle-btn d-lg-none ms-auto me-2"
          onClick={toggleTheme}
        >
          {theme === "day" ? (
            <i className="bi bi-moon-stars-fill"></i>
          ) : (
            <i className="bi bi-sun-fill"></i>
          )}
        </button>

        {/* Hamburger button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>

            {/* Theme Toggle - For Desktop */}
            <li className="nav-item ms-3 d-none d-lg-block">
              <button className="theme-toggle-btn" onClick={toggleTheme}>
                {theme === "day" ? (
                  <i className="bi bi-moon-stars-fill"></i>
                ) : (
                  <i className="bi bi-sun-fill"></i>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
