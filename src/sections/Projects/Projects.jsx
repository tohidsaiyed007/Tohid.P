// import React from "react";
// import "./Projects.css";

// const projects = [
//   {
//     number: "01",
//     title: "Saiyed Travels",
//     category: "Travel Booking Website",
//     description:
//       "A responsive travel booking website with flight search, booking flow, customer details, payment integration and an admin dashboard.",
//     technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS"],
//     link: "https://saiyedtravels.com",
//     button: "Visit Website",
//   },
//   {
//     number: "02",
//     title: "Dewan El Emran Engineering",
//     category: "Business Website",
//     description:
//       "A professional and responsive engineering consultancy website presenting company information, services, projects and business details.",
//     technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
//     link: "https://dewan-el-emara-engineering-consulta.vercel.app/",
//     button: "View Project",
//   },
//   {
//     number: "03",
//     title: "Customer Management System",
//     category: "MERN Stack Practice Project",
//     description:
//       "A customer management application with customer records, data listing, add customer, edit and delete functionality.",
//     technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Axios"],
//     link: "https://github.com/tohidsaiyed007",
//     button: "View GitHub",
//   },
// ];

// function Projects() {
//   return (
//     <section className="projects-section" id="projects">
//       <div className="projects-container">
//         <div className="projects-heading">
//           <span className="section-label">MY WORK</span>
//           <h2>
//             Featured <span>Projects</span>
//           </h2>
//           <p>
//             Some of the projects I have developed using modern web
//             technologies.
//           </p>
//         </div>

//         <div className="projects-grid">
//           {projects.map((project) => (
//             <div className="project-card" key={project.number}>
//               <div className="project-top">
//                 <span className="project-number">{project.number}</span>
//                 <span className="project-category">{project.category}</span>
//               </div>

//               <div className="project-content">
//                 <h3>{project.title}</h3>
//                 <p>{project.description}</p>

//                 <div className="project-tech">
//                   {project.technologies.map((tech) => (
//                     <span key={tech}>{tech}</span>
//                   ))}
//                 </div>

//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="project-button"
//                 >
//                   {project.button} <span>↗</span>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;














import React from "react";
import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "Saiyed Travels",
    subtitle: "Travel Booking Platform",
    description:
      "A modern and responsive travel booking website where customers can search flights, view available options, complete booking details and make payments. It also includes booking management and an admin dashboard.",
    technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "CSS3",
    ],
    type: "Full Stack Project",
    liveLink: "https://saiyedtravels.com",
    githubLink: "https://github.com/tohidsaiyed007",
  },
  {
    number: "02",
    title: "Dewan El Emran Engineering",
    subtitle: "Engineering Consultancy Website",
    description:
      "A professional business website for an engineering consultancy, designed to present company information, engineering services, projects and business details through a responsive user interface.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "UI Design",
    ],
    type: "Frontend Project",
    liveLink:
      "https://dewan-el-emara-engineering-consulta.vercel.app/",
    githubLink: "https://github.com/tohidsaiyed007",
  },
  {
    number: "03",
    title: "Customer Management System",
    subtitle: "MERN Stack CRUD Application",
    description:
      "A customer management application with functionality to add, display, update and delete customer records using a React frontend and Node.js backend connected to MongoDB.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Axios",
      "CRUD",
    ],
    type: "Practice Project",
    liveLink: "",
    githubLink: "https://github.com/tohidsaiyed007",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        {/* Section Heading */}
        <div className="projects-heading">
          <span className="projects-label">MY PORTFOLIO</span>

          <h2>
            My Featured <span>Projects</span>
          </h2>

          <p>
            Here are some of my web development projects,
            showcasing my technical skills and practical experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">

          {projects.map((project) => (
            <article className="project-card" key={project.number}>

              {/* Card Top */}
              <div className="project-top">

                <div className="project-number">
                  {project.number}
                </div>

                <span className="project-type">
                  {project.type}
                </span>

              </div>

              {/* Project Content */}
              <div className="project-content">

                <span className="project-subtitle">
                  {project.subtitle}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                {/* Technologies */}
                <div className="project-tech-heading">
                  Technologies Used
                </div>

                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="project-actions">

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-live-btn"
                    >
                      Live Preview <span>↗</span>
                    </a>
                  )}

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github-btn"
                  >
                    GitHub <span>↗</span>
                  </a>

                </div>

              </div>

              <div className="project-card-bottom"></div>

            </article>
          ))}

        </div>

        {/* Bottom Note */}
        <div className="projects-bottom">
          <p>
            Want to explore more of my work?
          </p>

          <a
            href="https://github.com/tohidsaiyed007"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit My GitHub Profile ↗
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;