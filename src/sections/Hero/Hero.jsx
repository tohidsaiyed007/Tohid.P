import React from "react";
import "./Hero.css";
import profileImage from "../../assets/images/tohiddd.jpeg";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <div className="hero-badge">
            <span className="status-dot"></span>
            Available for Opportunities
          </div>

          <p className="hero-intro">Hello, I'm</p>

          <h1>
            Tohid <span>Saiyed</span>
          </h1>

          <h2>
            Full Stack Web Developer
          </h2>

          <p className="hero-description">
            I'm a passionate Web Developer who loves creating
            modern, responsive and user-friendly websites.
            I build digital experiences using React, JavaScript
            and modern web technologies.
          </p>

          {/* SKILLS */}
          <div className="hero-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React.js</span>
            <span>Node.js</span>
          </div>

          {/* BUTTONS */}
          <div className="hero-buttons">

            <a href="#projects" className="hero-btn primary-btn">
              View My Projects <span>↗</span>
            </a>

            <a
              href="/Tohid-CV.pdf"
              className="hero-btn secondary-btn"
              target="_blank"
              rel="noreferrer"
            >
              Download CV ↓
            </a>

          </div>

          {/* SOCIAL LINKS */}
          <div className="hero-social">

            <a href="https://github.com/tohidsaiyed007" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>

            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>

          </div>

        </div>

        {/* RIGHT PROFILE IMAGE */}
        <div className="hero-image-area">

          <div className="hero-image-box">

            <div className="image-decoration"></div>

            {/* <img
              src="/profile.jpg"
              alt="Tohid Saiyed"
              className="hero-profile-image"
            /> */}
<img
  src={profileImage}
  alt=""
  className="hero-profile-image"
/>
          </div>

          <div className="hero-image-caption">
            <span>✦</span>
          </div>

        </div>

      </div>

      {/* BOTTOM SCROLL */}
      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line"></div>
      </div>

    </section>
  );
}

export default Hero;