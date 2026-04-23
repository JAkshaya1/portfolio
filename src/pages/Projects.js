import React from "react";

function Projects() {
  return (
    <div className="page">
      <h1>My Projects</h1>
      <h3>Project 1: Student Portfolio</h3>
      <p>
        A personal portfolio website built using React and React Router with
        separate Home and Projects pages.
      </p>
      <a href="https://github.com/facebook/react" target="_blank" rel="noreferrer">
        View Project on GitHub
      </a>

      <h3>Project 2: To-Do App</h3>
      <p>
        A simple to-do list app with task add/remove features and clean UI
        built using JavaScript and CSS.
      </p>
      <a href="https://github.com/tastejs/todomvc" target="_blank" rel="noreferrer">
        View Project on GitHub
      </a>
    </div>
  );
}

export default Projects;