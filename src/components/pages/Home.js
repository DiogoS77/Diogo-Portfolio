// Home.jsx

import React from "react";
import "../../css/Home.css";
export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="left">
          <p className="tag">IT SUPPORT ENGINEER</p>
          <h1>
            Hi, I'm <span>Diogo Sousa</span>
          </h1>

          <p className="description">
            Aspiring 1st / 2nd Line IT Support Engineer based in Oldbury, UK.
            Passionate about troubleshooting, networking, and helping users
            solve technical issues efficiently.
          </p>

          <div className="skills">
            <span>Active Directory</span>
            <span>Windows</span>
            <span>Networking</span>
            <span>Hardware</span>
            <span>Ticketing Systems</span>
          </div>

          <div className="buttons">
            <a href="#projects" className="btn primary">
              View Projects
            </a>
            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>

          <div className="socials">
            <a
              href="https://github.com/DiogoS77"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/diogo-desousa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="right">
          <div className="card">
            <h3>Quick Info</h3>
            <ul>
              <li>📍 Oldbury, UK</li>
              <li>💻 IT Support Focus</li>
              <li>🛠️ Troubleshooting</li>
              <li>📞 Help Desk Ready</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
