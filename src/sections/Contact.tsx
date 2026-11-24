
import { motion } from 'motion/react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">

        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">
            06 — GET IN TOUCH
          </span>

          <h2 className="contact-title">
            Let's build something
            <br />
            <span>meaningful together.</span>
          </h2>

          <p className="contact-description">
            I'm always open to discussing new opportunities,
            interesting projects, and ways to create
            something valuable through technology.
          </p>

          <div className="contact-methods">

            <a
              href="mailto:nancyessam51@gmail.com"
              className="contact-email-button"
            >
              <Mail size={19} />
              
              <ArrowUpRight size={19} />
            </a>

            <a
              href="mailto:nancyessam51@gmail.com"
              className="contact-email-card"
            >
              <div className="contact-email-icon">
                <Mail size={22} />
              </div>

              <div className="contact-email-info">
                <span>Email Address</span>
                <strong>nancyessam51@gmail.com</strong>
              </div>

              <ArrowUpRight
                size={20}
                className="contact-email-arrow"
              />
            </a>

            <a
              href="https://wa.me/201200854878"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-whatsapp-card"
            >
              <div className="contact-whatsapp-icon">
                <FaWhatsapp size={23} />
              </div>

              <div className="contact-whatsapp-info">
                <span>WhatsApp</span>
                <strong>+20 120 085 4878</strong>
              </div>

              <ArrowUpRight
                size={20}
                className="contact-whatsapp-arrow"
              />
            </a>

          </div>

          <div className="contact-socials">
            <a
              href="https://github.com/nancyessam51-hub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={19} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/nancy-essam-60b18a362/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={19} />
              LinkedIn
            </a>
          </div>

        </motion.div>

        <div className="contact-footer">
          <span>© 2026 Nancy Essam</span>
          <span>Designed & Built with purpose.</span>
        </div>

      </div>
    </section>
  );
}

export default Contact;
