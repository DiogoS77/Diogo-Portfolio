import React, {useState} from "react";
import "../../css/Home.css";

import adInstall from "../../images/ad-install.png";
import adStructure from "../../images/ad-structure.png";
import passwordReset from "../../images/password-reset.png";
import staticIp from "../../images/static-ip.png";
import domainJoined from "../../images/domain-joined.png";
import gpoCreate from "../../images/gpo-create.png";
import gpoEdit from "../../images/gpo-edit.png";
import gpoResult from "../../images/gpo-result.png";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Active Directory Home Lab",
      shortDescription:
        "Built a virtual IT environment using Windows Server. Created users, applied Group Policies, and simulated real business IT scenarios.",
      fullDescription:
        "Built a full Active Directory home lab using Windows Server 2022 and a Windows 10 client machine in VirtualBox. Configured a domain controller, created users and Organizational Units, joined a client machine to the domain, and applied Group Policy to restrict Control Panel access. Also troubleshot DNS and connectivity issues while setting up communication between the server and client.",
      bullets: [
        "Installed and configured Windows Server 2022 in VirtualBox",
        "Set up Active Directory Domain Services and created company.local domain",
        "Created users and Organizational Units inside Active Directory",
        "Joined a Windows 10 client machine to the domain",
        "Applied Group Policy to restrict Control Panel access",
        "Troubleshot DNS and network configuration issues",
      ],
      images: [
        adInstall,
        adStructure,
        passwordReset,
        staticIp,
        domainJoined,
        gpoCreate,
        gpoEdit,
        gpoResult,
      ],
    },
    {
      id: 2,
      title: "Help Desk Ticket Simulation",
      shortDescription:
        "Simulated real-world IT tickets including password resets, software issues, and hardware troubleshooting.",
      fullDescription:
        "Created a help desk simulation project based on realistic IT support scenarios. Practised handling common issues such as password resets, application problems, printer issues, and user troubleshooting, following a structured support process similar to a real help desk environment.",
      bullets: [
        "Simulated common 1st line support tickets",
        "Practised password reset and account support scenarios",
        "Documented troubleshooting steps and issue resolution",
        "Focused on clear communication and structured support workflow",
      ],
      images: [],
    },
    {
      id: 3,
      title: "Network Troubleshooting Lab",
      shortDescription:
        "Diagnosed and resolved network issues involving DNS, DHCP, and connectivity using command-line tools.",
      fullDescription:
        "Built a basic networking lab to practise diagnosing connectivity problems using Windows command-line tools. Tested IP addressing, DNS lookup issues, and communication between machines, using commands such as ipconfig, ping, and nslookup.",
      bullets: [
        "Tested connectivity between machines",
        "Used ipconfig, ping, and nslookup for troubleshooting",
        "Worked with DNS and IP configuration issues",
        "Practised identifying and fixing network communication problems",
      ],
      images: [],
    },
  ];

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
          {projects.map((project) => (
            <div
              key={project.id}
              className="card glow-hover project-card"
              onClick={() => setSelectedProject(project)}
            >
              <h3>{project.title}</h3>
              <p>{project.shortDescription}</p>
            </div>
          ))}
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

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div
          className="project-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-modal"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>

            <h2>{selectedProject.title}</h2>
            <p className="project-full-text">
              {selectedProject.fullDescription}
            </p>

            <ul className="project-bullets">
              {selectedProject.bullets.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            {selectedProject.images.length > 0 && (
              <div className="project-images">
                {selectedProject.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${selectedProject.title} screenshot ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
