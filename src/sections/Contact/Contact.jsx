import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <span>GET IN TOUCH</span>
          <h2>
            Let's Work <span>Together</span>
          </h2>
          <p>
            I am open to entry-level opportunities, internships and
            exciting web development projects.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info">
            <h3>Contact Information</h3>
            <p className="contact-description">
              Have a job opportunity or a project in mind?
              Feel free to contact me.
            </p>

            <a href="mailto:tohidsaiyed007@gmail.com" className="contact-item">
              <div className="contact-icon">✉</div>
              <div>
                <span>Email</span>
                <strong>tohidsaiyed007@gmail.com</strong>
              </div>
            </a>

            <a href="tel:+919928649857" className="contact-item">
              <div className="contact-icon">☎</div>
              <div>
                <span>Phone</span>
                <strong>+91 99286 49857</strong>
              </div>
            </a>

            <a
              href="https://wa.me/919928649857"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-icon">◉</div>
              <div>
                <span>WhatsApp</span>
                <strong>Chat with me</strong>
              </div>
            </a>

            <a
              href="https://github.com/tohidsaiyed007"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-icon">⌘</div>
              <div>
                <span>GitHub</span>
                <strong>View my projects</strong>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-icon">in</div>
              <div>
                <span>LinkedIn</span>
                <strong>Connect with me</strong>
              </div>
            </a>
          </div>

          <div className="contact-message">
            <div className="message-decoration">"</div>
            <h3>Let's Build Something Great!</h3>
            <p>
              I enjoy creating responsive, user-friendly websites
              and learning new technologies. I am ready to contribute
              my skills and grow as a Full Stack Web Developer.
            </p>

            <a
              href="mailto:tohidsaiyed007@gmail.com?subject=Job%20Opportunity"
              className="contact-main-btn"
            >
              Send Me an Email ↗
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;