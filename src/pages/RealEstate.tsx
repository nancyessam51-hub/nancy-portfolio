
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  Building2,
  CalendarCheck,
  Code2,
  FileText,
  Handshake,
  Layers,
  Search,
  ShieldCheck,
  TrendingUp,
  Users,
  Wallet,
  Wrench,
} from 'lucide-react';

const features = [
  {
    number: '01',
    title: 'Project & Property Management',
    description:
      'Organize real estate projects, buildings, floors, units, and property information in one centralized system.',
    icon: Building2,
  },
  {
    number: '02',
    title: 'Sales & Deal Management',
    description:
      'Manage customers, leads, reservations, deals, and contracts throughout the sales process.',
    icon: FileText,
  },
  {
    number: '03',
    title: 'Brokerage Network',
    description:
      'Manage brokerage companies, their agreements, assigned projects, and sales activities.',
    icon: Handshake,
  },
  {
    number: '04',
    title: 'Configurable Payment Plans',
    description:
      'Create project-specific payment plans, support down-payment discounts, and handle client-specific exceptions.',
    icon: CalendarCheck,
  },
  {
    number: '05',
    title: 'Commission Intelligence',
    description:
      'Track brokerage commissions due, paid, and overdue, with rules linked to agreements and sold units.',
    icon: Wallet,
  },
  {
    number: '06',
    title: 'Lead Conflict Detection',
    description:
      'Identify duplicate leads submitted by different brokerage companies and support lead ownership policies.',
    icon: Search,
  },
  {
    number: '07',
    title: 'Vacancy & Revenue Intelligence',
    description:
      'Support visibility into unit availability, sales performance, and revenue-related information.',
    icon: BarChart3,
  },
  {
    number: '08',
    title: 'Maintenance Impact & Prevention',
    description:
      'Connect property maintenance information with its potential impact on availability and revenue.',
    icon: Wrench,
  },
  {
    number: '09',
    title: 'Owner & Portfolio Insights',
    description:
      'Support portfolio-level visibility across company-owned properties and properties belonging to other owners.',
    icon: TrendingUp,
  },
];

const screenshots = [
  {
    title: 'Dashboard',
    image: '/images/real-estate/Dashboard.png',
  },
  {
    title: 'Login',
    image: '/images/real-estate/Login.png',
  },
  {
    title: 'Building Management',
    image: '/images/real-estate/Edit building.png',
  },
  {
    title: 'Deals',
    image: '/images/real-estate/deals.png',
  },
  {
    title: 'Create Reservation',
    image: '/images/real-estate/create reservation.png',
  },
  {
    title: 'Payment Plans',
    image: '/images/real-estate/payment plans.png',
  },
  {
    title: 'Commission Management',
    image: '/images/real-estate/commission.png',
  },
  {
    title: 'Brokerage Network',
    image: '/images/real-estate/Brokerage network.png',
  },
  {
    title: 'Intelligence',
    image: '/images/real-estate/intilgente.png',
  },
];

const technologies = [
  'React',
  'TypeScript',
  'Python',
  'FastAPI',
  'PostgreSQL',
];

function RealEstate() {
  return (
    <main className="real-estate-case-study">
      <section className="real-estate-hero">
        <div className="container">
          <Link to="/#projects" className="real-estate-back-link">
            <ArrowLeft size={17} />
            Back to Projects
          </Link>

          <div className="real-estate-hero-content">
            <span className="real-estate-eyebrow">
              FULL-STACK PROJECT / CASE STUDY
            </span>

            <h1>
              REAL ESTATE
              <br />
              <span>INTELLIGENCE.</span>
            </h1>

            <p className="real-estate-hero-subtitle">
              Sales Intelligence & Management System
            </p>

            <p className="real-estate-hero-description">
              A real estate sales management platform designed for
              developers and brokerage networks, bringing property
              management, sales operations, payment plans, and
              commission tracking together in one system.
            </p>

            <div className="real-estate-tech-list">
              {technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>

          <div className="real-estate-cover-image">
            <img
              src={screenshots[0].image}
              alt="Real Estate Intelligence dashboard"
            />
          </div>
        </div>
      </section>

      <section className="real-estate-section">
        <div className="container real-estate-overview-grid">
          <div>
            <span className="real-estate-section-label">
              01 — PROJECT OVERVIEW
            </span>

            <h2>
              One platform.
              <br />
              <span>Connected sales operations.</span>
            </h2>
          </div>

          <div className="real-estate-overview-text">
            <p>
              The Real Estate Sales Intelligence & Management System
              is designed for a real estate developer managing both
              company-owned properties and properties belonging to
              other owners.
            </p>

            <p>
              It brings the internal sales team and brokerage
              companies into one coordinated workflow, helping
              organize projects, properties, leads, reservations,
              deals, contracts, payment plans, and commissions.
            </p>
          </div>
        </div>
      </section>

      <section className="real-estate-section real-estate-features-section">
        <div className="container">
          <div className="real-estate-section-heading">
            <span className="real-estate-section-label">
              02 — KEY CAPABILITIES
            </span>

            <h2>
              Designed for
              <br />
              <span>real estate operations.</span>
            </h2>

            <p>
              A connected set of capabilities supporting property
              sales, brokerage relationships, and portfolio visibility.
            </p>
          </div>

          <div className="real-estate-features-grid">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  className="real-estate-feature-card"
                  key={feature.number}
                >
                  <div className="real-estate-feature-top">
                    <span>{feature.number}</span>
                    <Icon size={22} />
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="real-estate-section">
        <div className="container real-estate-business-grid">
          <div>
            <span className="real-estate-section-label">
              03 — BUSINESS RULES
            </span>

            <h2>
              Flexible rules.
              <br />
              <span>Controlled sales processes.</span>
            </h2>
          </div>

          <div className="real-estate-business-content">
            <p>
              The system is designed around configurable business
              rules rather than fixed sales assumptions.
            </p>

            <ul>
              <li>
                Internal sales employees and brokerage companies
                can sell the same projects and units.
              </li>
              <li>
                Brokerage commission rules can differ by project
                and sold unit.
              </li>
              <li>
                Tiered commission rates are applied to the entire
                sale price using the applicable tier.
              </li>
              <li>
                Payment plans can be configured for each project,
                including down-payment discounts.
              </li>
              <li>
                Client-specific payment plan exceptions can be
                created when required.
              </li>
              <li>
                Duplicate leads submitted by different brokerage
                companies can be identified for conflict review.
              </li>
              <li>
                The developer and customer sign on the same date
                when a purchase transaction takes place.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="real-estate-section real-estate-intelligence-section">
        <div className="container real-estate-intelligence-grid">
          <div>
            <span className="real-estate-section-label">
              04 — INTELLIGENCE & CONTROL
            </span>

            <h2>
              Beyond basic
              <br />
              <span>sales management.</span>
            </h2>

            <p className="real-estate-intelligence-description">
              The project focuses on providing management with
              meaningful visibility into sales activity, brokerage
              performance, commission obligations, and property
              portfolio information.
            </p>
          </div>

          <div className="real-estate-intelligence-points">
            <div>
              <ShieldCheck size={21} />
              <span>Lead ownership and conflict visibility</span>
            </div>

            <div>
              <Wallet size={21} />
              <span>Commission due, paid, and overdue tracking</span>
            </div>

            <div>
              <Layers size={21} />
              <span>Project and property portfolio visibility</span>
            </div>

            <div>
              <Users size={21} />
              <span>Brokerage relationship management</span>
            </div>
          </div>
        </div>
      </section>

      <section className="real-estate-section real-estate-tech-section">
        <div className="container real-estate-tech-grid">
          <div>
            <span className="real-estate-section-label">
              05 — TECHNOLOGIES
            </span>

            <h2>
              The technology
              <br />
              <span>behind the system.</span>
            </h2>
          </div>

          <div className="real-estate-tech-cards">
            {technologies.map((technology) => (
              <div className="real-estate-tech-card" key={technology}>
                <Code2 size={18} />
                <span>{technology}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="real-estate-section">
        <div className="container">
          <div className="real-estate-section-heading">
            <span className="real-estate-section-label">
              06 — PROJECT GALLERY
            </span>

            <h2>
              A closer look
              <br />
              <span>at the platform.</span>
            </h2>

            <p>
              Screenshots from the Real Estate Sales Intelligence
              & Management System.
            </p>
          </div>

          <div className="real-estate-gallery">
            {screenshots.map((screenshot, index) => (
              <figure
                className="real-estate-gallery-item"
                key={screenshot.title}
              >
                <div className="real-estate-gallery-image">
                  <img
                    src={screenshot.image}
                    alt={`Real Estate ${screenshot.title} screen`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>

                <figcaption>
                  <span>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {screenshot.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="real-estate-closing">
        <div className="container">
          <span className="real-estate-section-label">
            HAVE A PROJECT IN MIND?
          </span>

          <h2>
            Let's build something
            <br />
            <span>meaningful.</span>
          </h2>

          <Link
            to="/#contact"
            className="real-estate-contact-link"
          >
            Get in touch
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default RealEstate;
