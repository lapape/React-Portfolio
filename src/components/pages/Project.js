import React from "react";
function Project() {
  return (
    <section>
      <h2 id="My-Projects">My Projects</h2>
      <section id="Horiseon">
        <header>Joke Trivia</header>
        <a href="https://chip-l.github.io/jokeTrivia/">
          <img
            id="Horiseon-image"
            src="./assets/images/JokeTrivia.png"
            alt="social media icons"
          />
        </a>
      </section>
      <section className="box-container">
        <section className="box">
          <h2 className="box-header">Weather Dashboard</h2>
          <a href="https://lapape.github.io/Weather-Dashboard/">
            <img
              src="./assets/images/weatherDashboard.png"
              alt="Screenshot of weather dashborad"
            />
          </a>
        </section>
        <section className="box">
          <h2 className="box-header">Day Planner</h2>
          <a href="https://lapape.github.io/Day-Planner/">
            <img
              src="./assets/images/dayPlanner.png"
              alt="Screenshot of Day Planner"
            />
          </a>
        </section>
        <section className="box">
          <h2 className="box-header">BandAID</h2>
          <a href="https://fierce-beach-33317.herokuapp.com/">
            <img
              src="./assets/images/BandAID.png"
              alt="Screenshot of BandAID app"
            />
          </a>
        </section>
        <section className="box">
          <h2 className="box-header">Team Profile Generator</h2>
          <a href="https://drive.google.com/file/d/1B5CWnSltnZYeOLlnkH5d5bDw4c-IYYQS/view?usp=sharing">
            {" "}
            <img src="./assets/images/Team-profile.png" alt="arcade machines" />
          </a>
        </section>
      </section>
    </section>
  );
}

export default Project;
