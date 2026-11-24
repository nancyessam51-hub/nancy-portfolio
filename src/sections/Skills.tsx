
import { motion } from 'motion/react';

const skillGroups = [
  {
    number: '01',
    title: 'Frontend Development',
    description:
      'Building responsive and user-friendly interfaces.',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
    ],
  },
  {
    number: '02',
    title: 'Backend Development',
    description:
      'Developing application logic and backend services.',
    skills: [
      'Python',
      'FastAPI',
      'Flask',
      'REST APIs',
    ],
  },
  {
    number: '03',
    title: 'Databases',
    description:
      'Working with relational and non-relational data.',
    skills: [
      'PostgreSQL',
      'SQLite',
      'MongoDB',
      'Firebase',
      'SQLAlchemy',
      'Alembic',
    ],
  },
  {
    number: '04',
    title: 'Tools & Workflow',
    description:
      'Tools that support development and collaboration.',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Vite',
    ],
  },
];

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">

        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">
            02 — TECHNICAL SKILLS
          </span>

          <h2 className="skills-title">
            The tools behind
            <br />
            <span>the solutions.</span>
          </h2>

          <p className="skills-intro">
            A practical toolkit for designing,
            developing, and managing modern applications.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.article
              className="skill-card"
              key={group.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <div className="skill-card-top">
                <span className="skill-number">
                  {group.number}
                </span>

                <span className="skill-card-mark">
                  ↗
                </span>
              </div>

              <h3>{group.title}</h3>

              <p className="skill-description">
                {group.description}
              </p>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="skills-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>ALWAYS EVOLVING</span>

          <p>
            Learning, experimenting, and building better
            solutions with every project.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;
