
import { motion } from 'motion/react';
import {
  GraduationCap,
  BriefcaseBusiness,
  Code2,
  Landmark,
  Award,
  CalendarDays,
  Clock3,
} from 'lucide-react';

const credentials = [
  {
    title: 'Odoo Technical Bootcamp',
    organization: 'Education Certificates Technical Team',
    date: 'February 2026',
    description:
      'Successfully completed an 8-hour intensive technical bootcamp focused on the Odoo ERP system.',
    icon: GraduationCap,
    type: 'Technical Bootcamp',
  },
  {
    title: 'PHP / Laravel Training Program',
    organization: 'Findo Group',
    date: 'August 2025',
    description:
      'Completed the training program with distinction.',
    icon: Code2,
    type: 'Training Program',
    achievement: 'Grade A+',
  },
  {
    title: 'The Green Leap — CIB Summer Program',
    organization: 'Commercial International Bank',
    date: 'July 2025',
    description:
      'Participated in the summer program and received a certificate of attendance.',
    icon: Landmark,
    type: 'Summer Program',
  },
];

function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">

        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">
            04 — EXPERIENCE & CREDENTIALS
          </span>

          <h2 className="experience-title">
            My journey of
            <br />
            <span>learning and growth.</span>
          </h2>

          <p className="experience-intro">
            A combination of practical experience,
            professional training, and academic learning
            that continues to shape my development.
          </p>
        </motion.div>

        <div className="experience-content">

          <div className="experience-column">
            <div className="experience-column-heading">
              <Award size={19} />
              <h3>Training & Certifications</h3>
            </div>

            <div className="experience-timeline">
              {credentials.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    className="experience-card"
                    key={item.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.1,
                    }}
                  >
                    <div className="experience-card-icon">
                      <Icon size={20} />
                    </div>

                    <div className="experience-card-content">
                      <div className="experience-card-top">
                        <span className="experience-type">
                          {item.type}
                        </span>

                        {item.achievement && (
                          <span className="experience-achievement">
                            {item.achievement}
                          </span>
                        )}
                      </div>

                      <h4>{item.title}</h4>

                      <p className="experience-organization">
                        {item.organization}
                      </p>

                      <p className="experience-description">
                        {item.description}
                      </p>

                      <div className="experience-date">
                        <CalendarDays size={14} />
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>

          <div className="experience-column">
            <div className="experience-column-heading">
              <BriefcaseBusiness size={19} />
              <h3>Work Experience</h3>
            </div>

            <motion.article
              className="experience-card work-experience-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
            >
              <div className="experience-card-icon">
                <BriefcaseBusiness size={20} />
              </div>

              <div className="experience-card-content">
                <div className="experience-card-top">
                  <span className="experience-type">
                    Work Experience
                  </span>
                </div>

                <h4>Real Estate Sales Representative</h4>

                <p className="experience-organization">
                  Real Estate Brokerage Company
                </p>

                <p className="experience-description">
                  Professional experience in the real estate
                  brokerage field.
                </p>

                <div className="experience-date">
                  <CalendarDays size={14} />
                  <span>July – September 2026</span>
                </div>

                <div className="experience-duration">
                  <Clock3 size={14} />
                  <span>3 Months</span>
                </div>
              </div>
            </motion.article>
          </div>

        </div>

        <motion.div
          className="education-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <div className="education-icon">
            <GraduationCap size={25} />
          </div>

          <div className="education-content">
            <span className="experience-type">
              EDUCATION
            </span>

            <h3>
              Bachelor of Computer Science
            </h3>

            <p className="education-specialization">
              Information Systems
            </p>

            <p className="experience-organization">
              Arab Academy for Science, Technology and
              Maritime Transport
            </p>

            <div className="experience-date">
              <CalendarDays size={14} />
              <span>September 2022 – July 2026</span>
            </div>

            <div className="coursework">
              <span>Relevant Coursework</span>

              <div className="coursework-tags">
                {[
                  'Data Structures',
                  'Software Engineering',
                  'Systems Analysis',
                  'Database Systems',
                  'Artificial Intelligence',
                  'Web Programming',
                  'ERP',
                ].map((course) => (
                  <span key={course}>{course}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Experience;
