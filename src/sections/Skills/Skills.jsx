import React from "react";
import "./Skills.css";

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building modern and responsive user interfaces.",
    skills: [
      { name: "HTML5", level: "Advanced", percentage: 90 },
      { name: "CSS3", level: "Advanced", percentage: 85 },
      { name: "JavaScript", level: "Intermediate", percentage: 75 },
      { name: "React.js", level: "Intermediate", percentage: 75 },
      { name: "Bootstrap", level: "Intermediate", percentage: 70 },
    ],
  },
  {
    title: "Backend Development",
    description: "Developing server-side applications and APIs.",
    skills: [
      { name: "Node.js", level: "Intermediate", percentage: 70 },
      { name: "Express.js", level: "Intermediate", percentage: 70 },
      { name: "REST APIs", level: "Intermediate", percentage: 70 },
    ],
  },
  {
    title: "Database & Tools",
    description: "Managing databases and development workflow.",
    skills: [
      { name: "MongoDB", level: "Intermediate", percentage: 70 },
      { name: "Git & GitHub", level: "Intermediate", percentage: 75 },
      { name: "JSON", level: "Intermediate", percentage: 75 },
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        <div className="skills-heading">
          <span>MY EXPERTISE</span>
          <h2>
            Technical <strong>Skills</strong>
          </h2>
          <p>
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        <div className="skills-grid">

          {skillCategories.map((category, index) => (
            <div className="skill-card" key={index}>

              <div className="skill-card-heading">
                <div className="skill-card-number">
                  0{index + 1}
                </div>

                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>

              <div className="skill-list">

                {category.skills.map((skill, i) => (
                  <div className="skill-item" key={i}>

                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <small>{skill.level}</small>
                    </div>

                    <div
                      className="skill-progress"
                      role="progressbar"
                      aria-valuenow={skill.percentage}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label={skill.name}
                    >
                      <div
                        className="skill-progress-fill"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

        <div className="skills-bottom">
          <h3>Always Learning. Always Building.</h3>
          <p>
            I continuously improve my development skills by learning
            new technologies and building practical projects.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Skills;