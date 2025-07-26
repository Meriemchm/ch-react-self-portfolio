import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
