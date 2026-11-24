
import { motion } from 'motion/react';

function About() {
  const principles = [
    {
      number: '01',
      title: 'Problem Solver',
      description:
        'Understanding problems before writing code.',
    },
    {
      number: '02',
      title: 'Business Mindset',
      description:
        'Connecting technology with real business needs.',
    },
    {
      number: '03',
      title: 'Continuous Learning',
      description:
        'Always improving and exploring better solutions.',
    },
    {
      number: '04',
      title: 'Full-Stack Focus',
      description:
        'Building across frontend and backend.',
    },
  ];

  return (
    <section className="about section" id="about">
      <div className="container">

        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">
            01 — ABOUT ME
          </span>

          <h2 className="about-title">
            Building digital solutions
            <br />
            <span>with purpose.</span>
          </h2>
        </motion.div>

        <div className="about-content">

          <motion.div
            className="about-description"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p>
              I'm an Information Systems graduate
              with a strong interest in full-stack
              development and building applications
              that solve real-world problems.
            </p>

            <p>
              I enjoy working across the development
              process — from understanding business
              needs and designing user-friendly
              interfaces to developing structured
              backend systems and databases.
            </p>

            <p>
              My goal is to create software that is
              not only functional, but also practical,
              scalable, and meaningful to the people
              who use it.
            </p>
          </motion.div>

          <motion.div
            className="about-principles"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {principles.map((principle) => (
              <div
                className="principle-card"
                key={principle.number}
              >
                <span className="principle-number">
                  {principle.number}
                </span>

                <div className="principle-info">
                  <h3>{principle.title}</h3>

                  <p>{principle.description}</p>
                </div>

                <span className="principle-arrow">
                  ↗
                </span>
              </div>
            ))}
          </motion.div>

        </div>

        <motion.div
          className="about-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span>MY APPROACH</span>

          <p>
            Understand the problem. Design the solution.
            Build it with purpose.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
