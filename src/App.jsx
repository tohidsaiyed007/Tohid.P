// // import React from "react";
// // import Navbar from "./components/Navbar/Navbar";
// // import "./App.css";

// // function App() {
// //   return (
// //     <div className="app">
// //       <Navbar />

// //       <main>
// //         <section
// //           id="home"
// //           style={{
// //             minHeight: "100vh",
// //             display: "flex",
// //             justifyContent: "center",
// //             alignItems: "center",
// //             padding: "100px 20px",
// //             textAlign: "center",
// //           }}
// //         >
// //           <div>
// //             <h1 style={{ fontSize: "clamp(35px, 6vw, 65px)" }}>
// //               Welcome to <span style={{ color: "#7547e8" }}>Tohid's</span> Portfolio
// //             </h1>

// //             <p style={{ marginTop: "15px", color: "#687084" }}>
// //               Full Stack Web Developer
// //             </p>
// //           </div>
// //         </section>
// //       </main>
// //     </div>
// //   );
// // }

// // export default App;










// import React from "react";

// import Navbar from "./components/Navbar/Navbar";

// import Hero from "./sections/Hero/Hero";
// import About from "./sections/About/About";

// import "./App.css";

// function App() {
//   return (
//     <div className="app">

//       <Navbar />

//       <main>
//         {/* HOME SECTION */}
//         <Hero />

//         {/* ABOUT SECTION */}
//         <About />
//       </main>

//     </div>
//   );
// }

// export default App;












import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Resume from "./sections/Resume/Resume";
import Contact from "./sections/Contact/Contact";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
          <Resume />
           <Contact />
      </main>

    </div>
  );
}

export default App;