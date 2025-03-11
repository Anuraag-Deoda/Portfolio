import React from 'react';
import { ColorProvider } from '../context/ColorContext';
import ColorSwitcher from '../Components/ColorSwitcher';
import { useColors } from '../context/ColorContext';
import Navbar from '../Components/nav/NavBar';
import Hero from '../Pages/Hero';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import Skills from '../Pages/Skills';
import Contact from '../Pages/Contact';

const AppContent = () => {
  const { updateColors } = useColors();
  
  return (
    <div className="relative z-0">
      <Navbar />
      <ColorSwitcher onColorChange={updateColors} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

const App = () => {
  return (
    <ColorProvider>
      <AppContent />
    </ColorProvider>
  );
};

export default App;
