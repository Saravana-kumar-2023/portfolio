import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setShowPortfolio(true);
    }, 100);
  };

  return (
    <div className="bg-gray-900 min-h-screen overflow-x-hidden">
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      {showPortfolio && (
        <>
          <Header />
          <Hero />
          <About />
          <Education />
          <Projects />
          <Skills />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;