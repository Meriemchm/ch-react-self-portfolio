import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Projects from './components/Projects'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;