import React from "react";

export default function Footer() {
  return (
    <footer className="text-center py-4 bg-dark text-white-50">
      <p>© {new Date().getFullYear()} Firnas Fathima · Built with React & Bootstrap</p>
      <div className="mt-2">
        <a
          href="https://github.com/FirnasFathima"
          className="text-white-50 me-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-github fs-5"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/firnas-fathima/"
          className="text-white-50 me-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-linkedin fs-5"></i>
        </a>
        <a
          href="mailto:firnasfathima2004@gmail.com"
          className="text-white-50"
        >
          <i className="bi bi-envelope fs-5"></i>
        </a>
      </div>
    </footer>
  );
}
