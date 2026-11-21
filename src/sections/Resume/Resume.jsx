import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <section className="resume-section" id="resume">
      <div className="resume-container">

        <div className="resume-heading">
          <span className="resume-label">MY QUALIFICATION</span>
          <h2>
            Resume & <span>Education</span>
          </h2>
          <p>
            Explore my professional resume and Full Stack Web Development diploma.
          </p>
        </div>

        <div className="resume-grid">

          {/* Resume Card */}
          <div className="resume-card">
            <div className="resume-icon">📄</div>

            <h3>My Professional Resume</h3>

            <p>
              Check my skills, technical knowledge, education and web development
              projects in my professional resume.
            </p>

            <div className="resume-details">
              <span>✓ Technical Skills</span>
              <span>✓ Professional Projects</span>
              <span>✓ Educational Background</span>
            </div>

            <div className="resume-buttons">
              <a
                href="/Tohid-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn primary"
              >
                View Resume ↗
              </a>

              <a
                href="/Tohid-CV.pdf"
                download
                className="resume-btn secondary"
              >
                Download CV ↓
              </a>
            </div>
          </div>

          {/* Diploma Card */}
          <div className="resume-card diploma-card">
            <div className="resume-icon">🎓</div>

            <h3>Full Stack Web Development</h3>

            <p>
              Diploma in Full Stack Web Development from CADDESK Centre,
              Sikar, Rajasthan.
            </p>

            <div className="diploma-info">
              <div>
                <span>Institute</span>
                <strong>CADDESK Centre</strong>
              </div>

              <div>
                <span>Course</span>
                <strong>Full Stack Web Development</strong>
              </div>

              <div>
                <span>Duration</span>
                <strong>June 2025 – June 2026</strong>
              </div>
            </div>

            <div className="resume-buttons">
              <a
                href="/diploma-front.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn primary"
              >
                View Diploma ↗
              </a>

              <a
                href="/diploma-front.jpg"
                download
                className="resume-btn secondary"
              >
                Download Diploma ↓
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Resume;