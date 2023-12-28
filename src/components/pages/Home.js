// Home.jsx
import React from "react";
import "../../css/Home.css";
import Portrait from "../../images/portrait.png";

export default function Home() {
  return (
    <div className="home-container">
      <div className="content">
        <div className="text-content">
          <h1 className="header">Front-End Web Developer</h1>
          <p className="intro-text">
            Hi, I am Diogo Sousa, a passionate front-end web developer based in
            Oldbury, England.
          </p>
        </div>
        <img className="profile-image" src={Portrait} alt="Profile" />
      </div>
    </div>
  );
}
