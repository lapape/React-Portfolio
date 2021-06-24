import React from "react";

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <a href="../assets/Resume.pdf" download>
        Download my Resume
      </a>
      <h2>Front-end Proficiencies:</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>React</li>
      </ul>
      <h2>Back-end Proficiencies:</h2>
      <ul>
        <li>Javascript</li>
        <li>NodeJS</li>
        <li>SQL</li>
        <li>MongoDB</li>
      </ul>
    </div>
  );
}
