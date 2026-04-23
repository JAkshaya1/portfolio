import React from "react";

function Home() {
  return (
    <div className="page">
      <h1>My Portfolio</h1>
      <img
        className="profile-image"
        src="https://picsum.photos/220"
        alt="Profile"
      />

      <h2>About Me</h2>
      <p>
        I am a student developer who enjoys building web apps and learning how
        AI can solve real-world problems.
      </p>

      <h2>Research Interests</h2>
      <p>Machine Learning, Medical Imaging, and Human-Computer Interaction.</p>

      <h2>Personal Details</h2>
      <ul>
        <li>Name: Akshaya Jupalli</li>
        <li>Phone: 1234567890</li>
        <li>Email: akshaya365@gmail.com</li>
        <li>College Email: mahindrauniversity.edu.in</li>
      </ul>

      <h2>Skills</h2>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    </div>
  );
}

export default Home;