import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  Code2,
  Package,
  Printer,
  ShoppingCart,
  Truck,
  Wallet,
} from 'lucide-react';

const features = [
  {
    number: '01',
    title: 'Products & Inventory',
    description:
      'Manage store products and keep inventory information organized.',
    icon: Package,
  },
  {
    number: '02',
    title: 'Sales & Sales History',
    description:
      'Record sales transactions and review previous sales activity.',
    icon: ShoppingCart,
  },
  {
    number: '03',
    title: 'Sales Reports',
    description:
      'Review sales information through organized reports.',
    icon: BarChart3,
  },
  {
    number: '04',
    title: 'Purchases & Traders',
    description:
      'Manage purchase operations and trader-related records.',
    icon: Truck,
  },
  {
    number: '05',
    title: 'Business Day Management',
    description:
      'Control the opening and closing of the store business day.',
    icon: CalendarDays,
  },
  {
    number: '06',
    title: 'Cash & Accounting',
    description:
      'Keep track of cash and accounting activities within the system.',
    icon: Wallet,
  },
  {
    number: '07',
    title: 'Receipt Printing',
    description:
      'Print receipts for completed sales transactions.',
    icon: Printer,
  },
];

const screenshots = [
  {
    title: 'Dashboard',
    image: '/images/prime-phone/prime-phone-dashboard-1600x900.png',
  },
  {
    title: 'Add Product',
    image: '/images/prime-phone/prime-phone-add-product-1600x900.png',
  },
  {
    title: 'Inventory',
    image: '/images/prime-phone/prime-phone-inventory-1600x900.png',
  },
  {
    title: 'Sales Reports',
    image: '/images/prime-phone/prime-phone-sales-reports-1600x900.png',
  },
  {
    title: 'Sales History & Receipt',
    image:
      '/images/prime-phone/prime-phone-sales-history-receipt-1600x900.png',
  },
];

function PrimePhone() {
  return (
    <main className="prime-case-study">
      <section className="prime-hero">
        <div className="container">
          <Link to="/#projects" className="prime-back-link">
            <ArrowLeft size={17} />
            Back to Projects
          </Link>

          <div className="prime-hero-content">
            <span className="prime-eyebrow">
              FULL-STACK PROJECT / CASE STUDY
            </span>

            <h1>
              PRIME <span>PHONE.</span>
            </h1>

            <p className="prime-hero-subtitle">
              Mobile Store Management System
            </p>

            <p className="prime-hero-description">
              A management system built to support the daily operations
              of a mobile phone and accessories store, bringing essential
              store activities together in one application.
            </p>

            <div className="prime-tech-list">
              {['React', 'JavaScript', 'Python', 'FastAPI', 'SQLite'].map(
                (technology) => (
                  <span key={technology}>{technology}</span>
                )
              )}
            </div>
          </div>

          <div className="prime-cover-image">
            <img
              src={screenshots[0].image}
              alt="Prime Phone dashboard"
            />
          </div>
        </div>
      </section>

      <section className="prime-section">
        <div className="container prime-overview-grid">
          <div>
            <span className="prime-section-label">
              01 — PROJECT OVERVIEW
            </span>
            <h2>
              One system.
              <br />
              <span>Daily store operations.</span>
            </h2>
          </div>

          <div className="prime-overview-text">
            <p>
              PRIME PHONE is a store management application designed
              for a mobile phone and accessories business. It brings
              together product and inventory management, sales,
              purchases, reporting, cash and accounting activities,
              business day control, and receipt printing.
            </p>

            <p>
              The goal is to make everyday store operations easier to
              manage through a clear and organized digital system.
            </p>
          </div>
        </div>
      </section>

      <section className="prime-section prime-features-section">
        <div className="container">
          <div className="prime-section-heading">
            <span className="prime-section-label">
              02 — CORE FEATURES
            </span>
            <h2>
              Built around
              <br />
              <span>real store operations.</span>
            </h2>
            <p>
              The system includes the following implemented features:
            </p>
          </div>

          <div className="prime-features-grid">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article className="prime-feature-card" key={feature.number}>
                  <div className="prime-feature-top">
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

      <section className="prime-section">
        <div className="container prime-business-grid">
          <div>
            <span className="prime-section-label">
              03 — BUSINESS LOGIC
            </span>
            <h2>
              Business day
              <br />
              <span>management.</span>
            </h2>
          </div>

          <div className="prime-business-content">
            <p>
              The system follows a controlled business day workflow.
              Only one business day can remain open at a time, and
              opening or closing the day is handled manually.
            </p>

            <ul>
              <li>
                A business day is opened manually by the user.
              </li>
              <li>
                Only one open business day is allowed at a time.
              </li>
              <li>
                Sales after midnight remain assigned to the currently
                open business day.
              </li>
              <li>
                Restarting the application does not automatically
                close the open business day.
              </li>
              <li>
                New sales cannot be assigned to a closed business day.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="prime-section prime-tech-section">
        <div className="container prime-tech-grid">
          <div>
            <span className="prime-section-label">
              04 — TECHNOLOGIES
            </span>
            <h2>
              The technology
              <br />
              <span>behind the system.</span>
            </h2>
          </div>

          <div className="prime-tech-cards">
            {[
              'React',
              'JavaScript',
              'Python',
              'FastAPI',
              'SQLite',
            ].map((technology) => (
              <div className="prime-tech-card" key={technology}>
                <Code2 size={18} />
                <span>{technology}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="prime-section">
        <div className="container">
          <div className="prime-section-heading">
            <span className="prime-section-label">
              05 — PROJECT GALLERY
            </span>
            <h2>
              A closer look
              <br />
              <span>at PRIME PHONE.</span>
            </h2>
            <p>
              Screenshots from the implemented application.
            </p>
          </div>

          <div className="prime-gallery">
            {screenshots.map((screenshot, index) => (
              <figure className="prime-gallery-item" key={screenshot.title}>
                <div className="prime-gallery-image">
                  <img
                    src={screenshot.image}
                    alt={`Prime Phone ${screenshot.title} screen`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>

                <figcaption>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {screenshot.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="prime-closing">
        <div className="container">
          <span className="prime-section-label">
            HAVE A PROJECT IN MIND?
          </span>

          <h2>
            Let's build something
            <br />
            <span>meaningful.</span>
          </h2>

          <Link to="/#contact" className="prime-contact-link">
            Get in touch
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default PrimePhone;