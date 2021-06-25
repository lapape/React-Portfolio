import React from "react";
function Navbar({ currentPage, handlePageChange }) {
  return (
    <header id="main-header">
      <h1>Lacey Pape</h1>
      <nav>
        <ul>
          <li>
            <a href="#about" onClick={() => handlePageChange("About")}>
              About Me
            </a>
          </li>
          <li>
            <a href="#project" onClick={() => handlePageChange("Project")}>
              My Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => handlePageChange("Contact")}>
              Contact Me
            </a>
          </li>
          <li>
            <a href="#resume" onClick={() => handlePageChange("Resume")}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
