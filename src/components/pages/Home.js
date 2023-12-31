// Home.jsx
import React from "react";
import "../../css/Home.css";
import BlueLocationPin from "../../images/blueLocationPin.png";
import WavingBlueHand from "../../images/wavingBlueEmoji.png";

const LinkedInLogo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="tabler-icon tabler-icon-brand-linkedin"
  >
    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
    <path d="M8 11l0 5"></path>
    <path d="M8 8l0 .01"></path>
    <path d="M12 16l0 -5"></path>
    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
  </svg>
);

const GitHubLogo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="tabler-icon tabler-icon-brand-github"
  >
    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
  </svg>
);

export default function Home() {
  return (
    <div className="home-container">
      <div className="content">
        <div className="text-content">
          <h1 className="header">
            Front-End Web Developer{" "}
            <img
              className="waving-hand"
              src={WavingBlueHand}
              alt="Waving Hand"
            />
          </h1>
          <p className="intro-text">
            Hi, I am Diogo Sousa, a passionate front-end web developer based in
            Oldbury, England.{" "}
            <img
              src={BlueLocationPin}
              alt="Location Pin"
              className="location-pin"
            />
          </p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/diogo-desousa/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              {LinkedInLogo}
            </a>
            <a
              href="https://github.com/DiogoS77"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              {GitHubLogo}
            </a>
          </div>
        </div>
        <div class="glitch"></div>
      </div>
    </div>
  );
}
