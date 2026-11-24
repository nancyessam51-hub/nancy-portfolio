
import { motion } from 'motion/react';

import {
  ArrowDown,
  ArrowUpRight,
} from 'lucide-react';

import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-container">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="hero-eyebrow">
            <span className="status-dot" />
            FULL-STACK DEVELOPER
          </div>

          <h1 className="hero-title">
            Turning ideas into
            <span> powerful</span>
            <br />
            digital solutions.
          </h1>

          <p className="hero-description">
            I design and develop modern web applications
            that solve real-world business problems.
            From intuitive user interfaces to reliable
            backend systems, I focus on building
            practical and meaningful software.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button-primary">
              Explore My Work
              <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="button-secondary">
              Get In Touch
            </a>
          </div>

          <div className="hero-bottom">

            <div className="hero-socials">
              <span>CONNECT WITH ME</span>

              <a
                href="https://github.com/nancyessam51-hub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/nancy-essam-60b18a362/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
            </div>

            <a href="#about" className="scroll-indicator">
              SCROLL TO EXPLORE
              <ArrowDown size={15} />
            </a>

          </div>
        </motion.div>

        <motion.div
          className="hero-decoration"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-orbit orbit-three" />

          <div className="hero-center">
            <span>BUILD.</span>
            <span>CREATE.</span>
            <span className="accent-word">SOLVE.</span>
          </div>

          <span className="orbit-label label-top">
            LOGIC
          </span>

          <span className="orbit-label label-bottom">
            INNOVATION
          </span>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
