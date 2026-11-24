
import { motion } from 'motion/react';
import {
  Building2,
  Smartphone,
  Sofa,
  Clock3,
} from 'lucide-react';

const projects = [
  {
    title: 'Real Estate Sales Intelligence',
    subtitle: 'Sales & Management System',
    description:
      'A real estate management platform designed to organize sales operations, property information, deals, and brokerage activities.',
    technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL'],
    icon: Building2,
    status: 'Completed',
    comingSoon: false,
  },
  {
    title: 'Prime Phone',
    subtitle: 'Mobile Store Management System',
    description:
      'A management system built for a mobile store to handle products, inventory, purchases, sales, and daily business operations.',
    technologies: ['React', 'JavaScript', 'Python', 'FastAPI', 'SQLite'],
    icon: Smartphone,
    status: 'Completed',
    comingSoon: false,
  },
  {
    title: 'AI Interior Design',
    subtitle: 'Graduation Project',
    description:
      'An interior design platform that helps users explore room design ideas based on their preferences and requirements.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python'],
    icon: Sofa,
    status: 'Completed',
    comingSoon: false,
  },
  {
    title: 'Coming Soon',
    subtitle: 'New Project',
    description:
      'A new project is currently in the works. More details will be shared soon.',
    technologies: [],
    icon: Clock3,
    status: 'Coming Soon',
    comingSoon: true,
  },
  {
    title: 'Coming Soon',
    subtitle: 'New Project',
    description:
      'Another project is on the way. Stay tuned for the upcoming details.',
    technologies: [],
    icon: Clock3,
    status: 'Coming Soon',
    comingSoon: true,
  },
];

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">

        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">
            04 — SELECTED PROJECTS
          </span>

          <h2 className="projects-title">
            Things I've
            <br />
            <span>built with purpose.</span>
          </h2>

          <p className="projects-intro">
            A selection of projects that reflect my
            approach to solving problems, building
            useful applications, and turning ideas
            into working solutions.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                className={`project-card ${
                  project.comingSoon ? 'coming-soon-card' : ''
                }`}
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.55,
                  delay: (index % 2) * 0.1,
                }}
              >
                <div className="project-preview">
                  <div
                    className={`project-placeholder ${
                      project.comingSoon
                        ? 'coming-soon-placeholder'
                        : ''
                    }`}
                  >
                    <div className="project-placeholder-icon">
                      <Icon size={32} />
                    </div>

                    <span>
                      {project.comingSoon
                        ? 'PREVIEW COMING SOON'
                        : 'PROJECT SCREENSHOT'}
                    </span>
                  </div>
                </div>

                <div className="project-details">
                  <div className="project-card-top">
                    <span className="project-subtitle">
                      {project.subtitle}
                    </span>

                    <span
                      className={`project-status ${
                        project.comingSoon ? 'status-upcoming' : ''
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h3 className="project-name">
                    {project.title}
                  </h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  {!project.comingSoon && (
                    <div className="project-technologies">
                      {project.technologies.map((technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Projects;
