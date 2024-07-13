import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Presentation from "./components/Presentation/Presentation";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <div>
      <Navbar />
      <Presentation />
      <Home />
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
