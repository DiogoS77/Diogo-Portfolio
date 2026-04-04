import React, {useEffect, useState, useCallback} from "react";
import "../../css/Home.css";

import adInstall from "../../images/ad-install.png";
import adStructure from "../../images/ad-structure.png";
import passwordReset from "../../images/password-reset.png";
import staticIp from "../../images/static-ip.png";
import domainJoined from "../../images/domain-joined.png";
import gpoCreate from "../../images/gpo-create.png";
import gpoEdit from "../../images/gpo-edit.png";
import gpoResult from "../../images/gpo-result.png";

import ticketBefore from "../../images/ticket-before.png";
import ticketAfter from "../../images/ticket-after.png";
import hdPasswordReset from "../../images/hd-password-reset.png";
import teamsRepair from "../../images/teams-repair.png";
import printSpooler from "../../images/print-spooler.png";
import networkCmdBefore from "../../images/network-cmd-before.png";
import networkCmdAfter from "../../images/network-cmd-after.png";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
        {
          src: adInstall,
          caption:
            "Installing Active Directory Domain Services (AD DS) role on Windows Server.",
        },
        {
          src: adStructure,
          caption:
            "Created the Active Directory structure with organisational units and users.",
        },
        {
          src: passwordReset,
          caption:
            "Managed user accounts and performed password reset tasks inside Active Directory.",
        },
        {
          src: staticIp,
          caption:
            "Configured static IP and DNS settings so the server could act as the domain controller.",
        },
        {
          src: domainJoined,
          caption:
            "Successfully joined the Windows 10 client machine to the company.local domain.",
        },
        {
          src: gpoCreate,
          caption: "Created a new Group Policy Object (GPO) in the domain.",
        },
        {
          src: gpoEdit,
          caption:
            "Edited Group Policy settings to restrict Control Panel access for users.",
        },
        {
          src: gpoResult,
          caption:
            "Verified that the Group Policy was applied successfully on the client machine.",
        },
      ],
    },
    {
      id: 2,
      title: "Help Desk Ticket Simulation",
      shortDescription:
        "Simulated realistic 1st and 2nd line support tickets involving Active Directory, software troubleshooting, printer support, and network diagnostics.",
      fullDescription:
        "Built a help desk ticket simulation project to demonstrate a structured IT support workflow similar to a real service desk environment. Worked through common support scenarios including account access issues, Microsoft Teams launch problems, printer faults, and network connectivity troubleshooting. Documented each issue, carried out the relevant fix, and updated the ticket log with final resolutions to reflect a professional help desk process.",
      bullets: [
        "Simulated realistic 1st line and 2nd line support tickets",
        "Reset user passwords and unlocked accounts in Active Directory",
        "Troubleshot Microsoft Teams launch issues through installed application checks",
        "Restarted Print Spooler service to resolve printer availability problems",
        "Used Command Prompt tools such as ipconfig and ping to troubleshoot connectivity",
        "Updated ticket records with clear status changes and resolution notes",
      ],
      images: [
        {
          src: ticketBefore,
          caption:
            "Initial help desk ticket log showing open support tickets before troubleshooting and resolution work began.",
        },
        {
          src: hdPasswordReset,
          caption:
            "Reset a user password and reviewed account lockout status in Active Directory as part of a typical account access support task.",
        },
        {
          src: teamsRepair,
          caption:
            "Investigated a Microsoft Teams application issue through Programs and Features to simulate software troubleshooting steps in a help desk environment.",
        },
        {
          src: printSpooler,
          caption:
            "Restarted the Print Spooler service to resolve a printer issue and restore printing functionality.",
        },
        {
          src: networkCmdBefore,
          caption:
            "Ran Command Prompt troubleshooting commands including ipconfig and ping while diagnosing a network connectivity issue. Sensitive network details were removed.",
        },
        {
          src: networkCmdAfter,
          caption:
            "Verified successful connectivity after troubleshooting by repeating ping tests and confirming network communication. Sensitive network details were removed.",
        },
        {
          src: ticketAfter,
          caption:
            "Final ticket log after all issues were resolved, showing updated statuses and documented resolution notes.",
        },
      ],
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

  const closeProjectModal = () => {
    setSelectedProject(null);
    setSelectedImage(null);
    setCurrentImageIndex(0);
  };

  const openImageLightbox = (imageSrc, index) => {
    setSelectedImage(imageSrc);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const showPreviousImage = useCallback(() => {
    if (!selectedProject || selectedProject.images.length === 0) return;

    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1,
    );
  }, [selectedProject]);

  const showNextImage = useCallback(() => {
    if (!selectedProject || selectedProject.images.length === 0) return;

    setCurrentImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1,
    );
  }, [selectedProject]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage || !selectedProject) return;

      if (e.key === "ArrowLeft") {
        showPreviousImage();
      } else if (e.key === "ArrowRight") {
        showNextImage();
      } else if (e.key === "Escape") {
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, selectedProject, showNextImage, showPreviousImage]);

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
        <div className="project-modal-overlay" onClick={closeProjectModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeProjectModal}>
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
                    src={image.src}
                    alt={image.caption}
                    onClick={() => openImageLightbox(image.src, index)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* IMAGE LIGHTBOX */}
      {selectedImage && selectedProject && (
        <div className="image-lightbox-overlay" onClick={closeLightbox}>
          <div className="image-lightbox" onClick={(e) => e.stopPropagation()}>
            <button className="close-lightbox" onClick={closeLightbox}>
              ×
            </button>

            {selectedProject.images.length > 1 && (
              <>
                <button className="arrow left" onClick={showPreviousImage}>
                  ‹
                </button>

                <button className="arrow right" onClick={showNextImage}>
                  ›
                </button>
              </>
            )}

            <div className="lightbox-image-wrapper">
              <img
                src={selectedProject.images[currentImageIndex].src}
                alt={selectedProject.images[currentImageIndex].caption}
              />
              <p className="image-caption">
                {selectedProject.images[currentImageIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
