import React from "react";
import "../../css/Home.css";

export default function Home() {
  return (
    <div className="home">
      {/* TOP SECTION */}
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

      {/* WORK EXPERIENCE */}
      <section className="section" id="experience">
        <h2>Work Experience</h2>

        {/* Orange Toys */}
        <div className="card glow-hover">
          <h3>Customer Service & Helpdesk Support</h3>
          <p>Orange Toys, Birmingham / Remote — 2023–2024</p>
          <ul>
            <li>
              Provided IT helpdesk support alongside customer service tasks
            </li>
            <li>
              Assisted users with software installation, account setup, and
              troubleshooting
            </li>
            <li>
              Maintained records of IT issues and followed up for resolution
            </li>
            <li>Handled calls, emails, live chat, and social media support</li>
            <li>
              Generated sales leads while providing technical guidance to
              internal users
            </li>
          </ul>
        </div>

        {/* Capita / Tesco Mobile */}
        <div className="card glow-hover">
          <h3>Customer Service Representative</h3>
          <p>Capita (Tesco Mobile, Birmingham / Remote) — 2022–2023</p>
          <ul>
            <li>
              High-volume customer support via calls, email, and live chat
            </li>
            <li>
              Assisted customers with technical queries and troubleshooting
              guidance
            </li>
            <li>
              Maintained accurate records and escalated technical issues when
              required
            </li>
            <li>Focused on achieving high customer satisfaction levels</li>
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
          <p>
            📧 Email:{" "}
            <a href="mailto:diogo.messi.18@hotmail.com">
              diogo.messi.18@hotmail.com
            </a>
          </p>
          <p>
            💼 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/diogo-desousa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/diogo-desousa
            </a>
          </p>
          <p>
            💻 GitHub:{" "}
            <a
              href="https://github.com/DiogoS77"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/DiogoS77
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
