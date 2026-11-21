// // import React from "react";
// // import "./About.css";

// // function About() {
// //   return (
// //     <section className="about-section" id="about">

// //       <div className="about-container">

// //         {/* SECTION HEADING */}
// //         <div className="about-heading">
// //           <span className="section-tag">GET TO KNOW ME</span>

// //           <h2>
// //             About <span>Me</span>
// //           </h2>

// //           <p>
// //             A little introduction about who I am and what I do.
// //           </p>
// //         </div>

// //         {/* ABOUT CONTENT */}
// //         <div className="about-content">

// //           {/* LEFT SIDE */}
// //           <div className="about-image">
// //             <div className="about-image-frame">
// //               <img
// //                 src="/profile.jpg"
// //                 alt="Tohid Saiyed"
// //               />
// //             </div>

// //             <div className="about-experience-card">
// //               <h3>Web Developer</h3>
// //               <p>Creative Mind • Clean Code</p>
// //             </div>
// //           </div>

// //           {/* RIGHT SIDE */}
// //           <div className="about-info">

// //             <h3>
// //               I'm Tohid Saiyed, a passionate
// //               <span> Web Developer.</span>
// //             </h3>

// //             <p>
// //               I am a passionate Web Developer interested in
// //               creating modern, responsive and user-friendly
// //               websites. I enjoy learning new technologies
// //               and turning creative ideas into real projects.
// //             </p>

// //             <p>
// //               I have completed my Web Development Diploma
// //               and have practical experience working with
// //               HTML, CSS, JavaScript, React.js, Node.js
// //               and MongoDB.
// //             </p>

// //             <p>
// //               I am currently looking for an opportunity
// //               where I can improve my skills, learn from
// //               experienced developers and contribute to
// //               real-world projects.
// //             </p>

// //             {/* PERSONAL DETAILS */}
// //             <div className="about-details">

// //               <div className="detail-item">
// //                 <span>Name:</span>
// //                 <strong>Tohid Saiyed</strong>
// //               </div>

// //               <div className="detail-item">
// //                 <span>Profession:</span>
// //                 <strong>Web Developer</strong>
// //               </div>

// //               <div className="detail-item">
// //                 <span>Qualification:</span>
// //                 <strong>Web Development Diploma</strong>
// //               </div>

// //               <div className="detail-item">
// //                 <span>Location:</span>
// //                 <strong>Rajasthan, India</strong>
// //               </div>

// //               <div className="detail-item">
// //                 <span>Experience:</span>
// //                 <strong>Fresher</strong>
// //               </div>

// //               <div className="detail-item">
// //                 <span>Availability:</span>
// //                 <strong className="available">Open to Work</strong>
// //               </div>

// //             </div>

// //             <a href="#contact" className="about-contact-btn">
// //               Let's Work Together ↗
// //             </a>

// //           </div>

// //         </div>

// //       </div>

// //     </section>
// //   );
// // }

// // export default About;











// import React from "react";
// import "./About.css";

// import profileImage from "../../assets/images/tohiddd.jpeg";
// import diplomaFront from "../../assets/images/diploma-front.jpeg";
// import diplomaBack from "../../assets/images/diploma-back.jpeg";

// function About() {
//   return (
//     <section className="about-section" id="about">
//       <div className="about-container">

//         {/* Heading */}
//         <div className="about-heading">
//           <span>GET TO KNOW ME</span>
//           <h2>
//             About <span>Me</span>
//           </h2>
//           <p>Learn more about my background and education.</p>
//         </div>

//         {/* About Content */}
//         <div className="about-main">

//           {/* Profile Image */}
//           <div className="about-image-box">
//             <img src={profileImage} alt="Tohid Saiyed" />
//             <div className="about-image-label">
//               <h3>Tohid Saiyed</h3>
//               <p>Full Stack Web Developer</p>
//             </div>
//           </div>

//           {/* About Details */}
//           <div className="about-details">
//             <h3>
//               Hello! I'm <span>Tohid Saiyed</span>
//             </h3>

//             <p className="about-description">
//               I am a passionate Full Stack Web Developer and a fresher
//               with knowledge of modern web technologies. I enjoy creating
//               responsive, user-friendly websites and web applications.
//               I am continuously improving my development skills and
//               looking for opportunities to grow professionally.
//             </p>

//             <div className="about-info-grid">

//               <div className="about-info-item">
//                 <span>Name</span>
//                 <strong>Tohid Saiyed</strong>
//               </div>

//               <div className="about-info-item">
//                 <span>Profession</span>
//                 <strong>Full Stack Developer</strong>
//               </div>

//               <div className="about-info-item">
//                 <span>Location</span>
//                 <strong>Jhunjhunu, Rajasthan</strong>
//               </div>

//               <div className="about-info-item">
//                 <span>Email</span>
//                 <strong>tohidsaiyed007@gmail.com</strong>
//               </div>

//               <div className="about-info-item">
//                 <span>Education</span>
//                 <strong>Full Stack Web Development</strong>
//               </div>

//               <div className="about-info-item">
//                 <span>Experience</span>
//                 <strong>Fresher</strong>
//               </div>

//             </div>

//             <a href="#contact" className="about-contact-btn">
//               Contact Me →
//             </a>
//           </div>
//         </div>

//         {/* Diploma Section */}
//         <div className="about-diploma">

//           <div className="diploma-heading">
//             <span>MY EDUCATION</span>
//             <h3>
//               Diploma <span>Certificate</span>
//             </h3>
//             <p>
//               Full Stack Web Development Diploma - CADDESK Centre,
//               Sikar, Rajasthan.
//             </p>
//           </div>

//           <div className="diploma-images">

//             {/* Front Image */}
//             <div className="diploma-image-card">
//               <div className="diploma-image">
//                 <a href={diplomaFront} target="_blank" rel="noreferrer">
//                   <img src={diplomaFront} alt="Diploma Front Side" />
//                 </a>
//               </div>

//               <div className="diploma-image-info">
//                 <h4>Certificate - Front Side</h4>
//                 <span>Full Stack Web Development</span>
//               </div>
//             </div>

//             {/* Back Image */}
//             <div className="diploma-image-card">
//               <div className="diploma-image">
//                 <a href={diplomaBack} target="_blank" rel="noreferrer">
//                   <img src={diplomaBack} alt="Diploma Back Side" />
//                 </a>
//               </div>

//               <div className="diploma-image-info">
//                 <h4>Certificate - Back Side</h4>
//                 <span>Course Details & Curriculum</span>
//               </div>
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

// export default About;













import React from "react";
import "./About.css";

import profileImage from "../../assets/images/tohiddd.jpeg";

import diplomaFront from "../../assets/images/Tohid-Diploma-Front-Final.png";

import diplomaBack from "../../assets/images/Tohid-Diploma-Back-Final.png";

function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        {/* Section Heading */}
        <div className="about-heading">
          <span>GET TO KNOW ME</span>

          <h2>
            About <span>Me</span>
          </h2>

          <p>
            A little introduction about myself, my skills and education.
          </p>
        </div>

        {/* Main About Section */}
        <div className="about-main">

          {/* Profile Image */}
          <div className="about-image-box">

            <img
              src={profileImage}
              alt="Tohid Saiyed"
              className="about-profile-image"
            />

            <div className="about-image-label">
              <h3>Tohid Saiyed</h3>
              <p>Full Stack Web Developer</p>
            </div>

          </div>

          {/* Personal Details */}
          <div className="about-details">

            <h3>
              Hello! I'm <span>Tohid Saiyed</span>
            </h3>

            <p className="about-description">
              I am a passionate Full Stack Web Developer and a fresher
              with knowledge of modern web technologies. I enjoy building
              responsive websites and web applications. I have experience
              working with React.js, JavaScript, Node.js, Express.js and
              MongoDB. I am continuously learning new technologies and
              looking for opportunities to grow as a developer.
            </p>

            {/* Information */}
            <div className="about-info-grid">

              <div className="about-info-item">
                <span>Full Name</span>
                <strong>Tohid Saiyed</strong>
              </div>

              <div className="about-info-item">
                <span>Profession</span>
                <strong>Full Stack Developer</strong>
              </div>

              <div className="about-info-item">
                <span>Location</span>
                <strong>Jhunjhunu, Rajasthan</strong>
              </div>

              <div className="about-info-item">
                <span>Email</span>
                <strong>tohidsaiyed007@gmail.com</strong>
              </div>

              <div className="about-info-item">
                <span>Qualification</span>
                <strong>Full Stack Web Development Diploma</strong>
              </div>

              <div className="about-info-item">
                <span>Experience</span>
                <strong>Fresher</strong>
              </div>

            </div>

            <a href="#contact" className="about-contact-btn">
              Contact Me <span>→</span>
            </a>

          </div>

        </div>

        {/* Diploma Certificate Section */}
        <div className="about-diploma">

          <div className="diploma-heading">

            <span>MY EDUCATION</span>

            <h3>
              My <span>Diploma Certificate</span>
            </h3>

            <p>
              Full Stack Web Development Diploma from CADDESK Centre, Sikar.
            </p>

          </div>

          {/* Diploma Details */}
          <div className="diploma-course-info">

            <div>
              <span>Institute</span>
              <strong>CADDESK Centre, Sikar</strong>
            </div>

            <div>
              <span>Course</span>
              <strong>Full Stack Web Development</strong>
            </div>

            <div>
              <span>Course Duration</span>
              <strong>03 June 2025 – 04 June 2026</strong>
            </div>

            <div>
              <span>Date of Issue</span>
              <strong>23 June 2026</strong>
            </div>

          </div>

          {/* Certificate Images */}
          <div className="diploma-images">

            {/* Front Side */}
            <div className="diploma-image-card">

              <div className="diploma-image">
                <a
                  href={diplomaFront}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={diplomaFront}
                    alt="Tohid Saiyed Diploma Front Side"
                  />
                </a>
              </div>

              <div className="diploma-image-info">
                <h4>Certificate Front Side</h4>
                <span>Certificate of Completion</span>
              </div>

            </div>

            {/* Back Side */}
            <div className="diploma-image-card">

              <div className="diploma-image">
                <a
                  href={diplomaBack}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={diplomaBack}
                    alt="Tohid Saiyed Diploma Back Side"
                  />
                </a>
              </div>

              <div className="diploma-image-info">
                <h4>Certificate Back Side</h4>
                <span>Course Curriculum & Verification</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;