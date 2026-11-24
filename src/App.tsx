
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

import PrimePhone from './pages/PrimePhone';
import RealEstate from './pages/RealEstate';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

function PrimePhonePage() {
  return (
    <>
      <Navbar />
      <PrimePhone />
    </>
  );
}

function RealEstatePage() {
  return (
    <>
      <Navbar />
      <RealEstate />
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/projects/prime-phone"
          element={<PrimePhonePage />}
        />
        <Route
          path="/projects/real-estate"
          element={<RealEstatePage />}
        />
      </Routes>
    </>
  );
}

export default App;
