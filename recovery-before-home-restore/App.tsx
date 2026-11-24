import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

import PrimePhone from './pages/PrimePhone';

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

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/projects/prime-phone"
        element={
          <>
            <Navbar />
            <PrimePhone />
          </>
        }
      />
    </Routes>
  );
}

export default App;