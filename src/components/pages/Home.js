// Home.jsx

import React from "react";
import "../../css/Home.css";

export default function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="section hero" id="home">
        <div className="container">
          <div className="left">
            <p className="tag">IT SUPPORT ENGINEER</p>
            <h1>
              Hi, I'm <span>Diogo Sousa</span>
            </h1>

            <p className="description">
              Aspiring 1st / 2nd Line IT Support Engineer with hands-on
              experience in troubleshooting, Active Directory, and networking.
              Passionate about resolving technical issues and delivering
              efficient user support.
            </p>

            <div className="buttons">
              <a href="#projects" className="btn primary">
                View Projects
              </a>
              <a href="#contact" className="btn secondary">
                Contact Me
              </a>
            </div>
          </div>

          <div className="right">
            <div className="card glow">
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
      </section>

      {/* SKILLS */}
      <section className="section" id="skills">
        <h2>Skills</h2>

        <div className="grid">
          {[
            "Active Directory",
            "Windows 10/11",
            "Office 365",
            "Ticketing Systems",
            "TCP/IP, DNS, DHCP",
            "Hardware Troubleshooting",
            "Remote Desktop",
            "User Account Management",
            "Group Policy (GPO)",
            "Printer Support",
            "Basic Cybersecurity",
            "VPN & Connectivity Issues",
          ].map((skill, i) => (
            <div key={i} className="skill-box glow-hover">
              💻 {skill}
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <h2>Work Experience</h2>

        <div className="card glow-hover">
          <h3>IT Support Experience (Home Lab / Practice)</h3>
          <p>2024 - Present</p>
          <ul>
            <li>
              Resolved simulated IT support tickets using structured
              troubleshooting methods
            </li>
            <li>Managed users, groups, and permissions in Active Directory</li>
            <li>Configured Windows environments and user profiles</li>
            <li>
              Diagnosed networking issues including DNS and connectivity
              problems
            </li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <h2>Projects</h2>

        <div className="grid cards">
          <div className="card glow-hover">
            <h3>Active Directory Home Lab</h3>
            <p>
              Built a virtual IT environment using Windows Server. Created
              users, applied Group Policies, and simulated real business IT
              scenarios.
            </p>
          </div>

          <div className="card glow-hover">
            <h3>Help Desk Ticket Simulation</h3>
            <p>
              Simulated real-world IT tickets including password resets,
              software issues, and hardware troubleshooting.
            </p>
          </div>

          <div className="card glow-hover">
            <h3>Network Troubleshooting Lab</h3>
            <p>
              Diagnosed and resolved network issues involving DNS, DHCP, and
              connectivity using command-line tools.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <h2>Contact</h2>

        <div className="card glow">
          <p>📧 Email: </p>
          <p>💼 LinkedIn: </p>
          <p>💻 GitHub: </p>
        </div>
      </section>
    </div>
  );
}
