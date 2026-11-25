
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  BrainCircuit,
  Image as ImageIcon,
  ScanSearch,
  ShoppingBag,
  Palette,
  WandSparkles,
  Database,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

const technologies = [
  'Stable Diffusion',
  'YOLO',
  'Web Scraping',
  'AI Image Generation',
  'Visual Product Matching',
];

const features = [
  {
    number: '01',
    title: 'AI Interior Design Generation',
    description:
      'Generate interior design concepts using Stable Diffusion, guided by the user’s room requirements and design preferences.',
    icon: WandSparkles,
  },
  {
    number: '02',
    title: 'Custom Design Preferences',
    description:
      'Allow users to provide design preferences and room information to guide the generated interior concept.',
    icon: Palette,
  },
  {
    number: '03',
    title: 'YOLO Furniture Detection',
    description:
      'Analyze generated room images using YOLO to detect furniture items such as beds, chairs, and tables.',
    icon: ScanSearch,
  },
  {
    number: '04',
    title: 'Visual Furniture Matching',
    description:
      'Match detected furniture with real products based on visual characteristics, including shape and color.',
    icon: ImageIcon,
  },
  {
    number: '05',
    title: 'Furniture Data Collection',
    description:
      'Use web scraping to collect furniture product information from furniture stores and online retailers.',
    icon: Database,
  },
  {
    number: '06',
    title: 'Product Discovery & Shopping',
    description:
      'Display product images, prices, store names, and direct product links so users can continue shopping on the retailer’s website.',
    icon: ShoppingBag,
  },
];

const gallery = [
  {
    title: 'Main Dashboard',
    description: 'The main interface of the interior design platform.',
    image: '/images/ai-interior/Dashboard.png',
  },
  {
    title: 'User Login',
    description: 'The authentication interface for platform users.',
    image: '/images/ai-interior/login.png',
  },
  {
    title: 'Design Preferences',
    description: 'The input interface for defining the design requirements.',
    image: '/images/ai-interior/input.png',
  },
  {
    title: 'Room Image Upload',
    description: 'Uploading an image to provide additional room context.',
    image: '/images/ai-interior/uploading image.png',
  },
  {
    title: 'AI Prompt Generation',
    description: 'Preparing the prompt used to guide AI design generation.',
    image: '/images/ai-interior/generated prompt.png',
  },
  {
    title: 'AI Generated Design',
    description: 'A generated interior design shown alongside the original.',
    image: '/images/ai-interior/generated before and after.jpeg',
  },
  {
    title: 'Design Editing',
    description: 'Reviewing the edited result and comparing the changes.',
    image: '/images/ai-interior/edited before and after.png',
  },
  {
    title: 'Prompt-Based Editing',
    description: 'Refining a design using additional text instructions.',
    image: '/images/ai-interior/edit by prompt.png',
  },
  {
    title: 'Editing Process',
    description: 'The interface displayed while a design edit is processing.',
    image: '/images/ai-interior/edit loading page.png',
  },
  {
    title: 'Saved Designs',
    description: 'Accessing previously saved design results.',
    image: '/images/ai-interior/saved design.png',
  },
  {
    title: 'AI Processing Interface',
    description: 'The loading interface during the design generation process.',
    image: '/images/ai-interior/loading page.jpeg',
  },
];

function AIInterior() {
  return (
    <main className="ai-interior-case-study">
      <section className="ai-interior-hero">
        <div className="container">
          <Link to="/#projects" className="ai-interior-back-link">
            <ArrowLeft size={17} />
            Back to Projects
          </Link>

          <div className="ai-interior-hero-content">
            <span className="ai-interior-eyebrow">
              AI-POWERED PROJECT / CASE STUDY
            </span>

            <h1>
              AI INTERIOR
              <br />
              <span>DESIGN.</span>
            </h1>

            <p className="ai-interior-hero-subtitle">
              From AI-Generated Spaces to Real Furniture
            </p>

            <p className="ai-interior-hero-description">
              An AI-powered interior design platform that transforms
              user preferences into interior design concepts, detects
              furniture in generated images, and connects visual
              results with real furniture products available online.
            </p>

            <div className="ai-interior-tech-list">
              {technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>

          <div className="ai-interior-cover-image">
            <img
              src="/images/ai-interior/Dashboard.png"
              alt="AI Interior Design platform dashboard"
            />
          </div>
        </div>
      </section>

      <section className="ai-interior-section">
        <div className="container ai-interior-overview-grid">
          <div>
            <span className="ai-interior-section-label">
              01 — PROJECT OVERVIEW
            </span>
            <h2>
              Design with AI.
              <br />
              <span>Discover real products.</span>
            </h2>
          </div>

          <div className="ai-interior-overview-text">
            <p>
              The AI Interior Design platform was developed as a
              graduation project to help users explore interior
              design ideas through artificial intelligence.
            </p>
            <p>
              Users can provide their design preferences and room
              information to generate interior concepts using
              Stable Diffusion. The platform also connects generated
              designs with real furniture products through object
              detection, visual matching, and web scraping.
            </p>
            <p>
              This creates a bridge between visual inspiration and
              products users can actually explore and purchase.
            </p>
          </div>
        </div>
      </section>

      <section className="ai-interior-section ai-interior-features-section">
        <div className="container">
          <div className="ai-interior-section-heading">
            <span className="ai-interior-section-label">
              02 — CORE FEATURES
            </span>
            <h2>
              More than an
              <br />
              <span>interior design generator.</span>
            </h2>
            <p>
              Combining AI-generated design, computer vision,
              product discovery, and real-world shopping links.
            </p>
          </div>

          <div className="ai-interior-features-grid">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  className="ai-interior-feature-card"
                  key={feature.number}
                >
                  <div className="ai-interior-feature-top">
                    <span>{feature.number}</span>
                    <Icon size={23} />
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ai-interior-section">
        <div className="container ai-interior-workflow-grid">
          <div>
            <span className="ai-interior-section-label">
              03 — AI WORKFLOW
            </span>
            <h2>
              From a room idea
              <br />
              <span>to a shopping journey.</span>
            </h2>
            <p className="ai-interior-workflow-intro">
              The platform connects several stages to turn an
              AI-generated interior concept into a product discovery
              experience.
            </p>
          </div>

          <div className="ai-interior-workflow">
            <div className="ai-interior-workflow-step">
              <span>01</span>
              <div>
                <h3>User Inputs</h3>
                <p>
                  The user provides room details and design preferences.
                </p>
              </div>
            </div>

            <div className="ai-interior-workflow-step">
              <span>02</span>
              <div>
                <h3>Stable Diffusion</h3>
                <p>
                  The AI model generates an interior design based on
                  the provided requirements.
                </p>
              </div>
            </div>

            <div className="ai-interior-workflow-step">
              <span>03</span>
              <div>
                <h3>YOLO Detection</h3>
                <p>
                  Furniture objects are detected within the generated
                  design image.
                </p>
              </div>
            </div>

            <div className="ai-interior-workflow-step">
              <span>04</span>
              <div>
                <h3>Visual Matching</h3>
                <p>
                  Detected furniture is matched with real products
                  based on shape and color.
                </p>
              </div>
            </div>

            <div className="ai-interior-workflow-step">
              <span>05</span>
              <div>
                <h3>Product Discovery</h3>
                <p>
                  Scraped product information is displayed with
                  prices, store names, images, and direct links.
                </p>
              </div>
            </div>

            <div className="ai-interior-workflow-step">
              <span>06</span>
              <div>
                <h3>Visit the Store</h3>
                <p>
                  Users can open the retailer’s product page and
                  continue the purchase on the store website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ai-interior-section ai-interior-intelligence-section">
        <div className="container ai-interior-intelligence-grid">
          <div>
            <span className="ai-interior-section-label">
              04 — THE AI & PRODUCT DISCOVERY LAYER
            </span>
            <h2>
              Connecting
              <br />
              <span>AI with reality.</span>
            </h2>
            <p className="ai-interior-intelligence-description">
              The project combines image generation and computer
              vision with product data collection, making the
              generated room more actionable for users.
            </p>
          </div>

          <div className="ai-interior-intelligence-points">
            <div>
              <BrainCircuit size={22} />
              <span>Stable Diffusion for interior image generation</span>
            </div>
            <div>
              <ScanSearch size={22} />
              <span>YOLO for furniture object detection</span>
            </div>
            <div>
              <Palette size={22} />
              <span>Shape and color-based visual matching</span>
            </div>
            <div>
              <Database size={22} />
              <span>Web scraping for real furniture product data</span>
            </div>
            <div>
              <ExternalLink size={22} />
              <span>Direct links to retailer product pages</span>
            </div>
          </div>
        </div>
      </section>

      <section className="ai-interior-section">
        <div className="container">
          <div className="ai-interior-section-heading">
            <span className="ai-interior-section-label">
              05 — PROJECT GALLERY
            </span>
            <h2>
              Explore the
              <br />
              <span>platform experience.</span>
            </h2>
            <p>
              A look at the platform interfaces, design generation,
              editing experience, and saved results.
            </p>
          </div>

          <div className="ai-interior-gallery">
            {gallery.map((item, index) => (
              <figure
                className="ai-interior-gallery-item"
                key={item.image}
              >
                <div className="ai-interior-gallery-image">
                  <img
                    src={item.image}
                    alt={`AI Interior Design - ${item.title}`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>

                <figcaption>
                  <div className="ai-interior-gallery-caption-top">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-interior-closing">
        <div className="container">
          <span className="ai-interior-section-label">
            AI-POWERED INTERIOR DESIGN
          </span>
          <Sparkles
            className="ai-interior-closing-icon"
            size={28}
          />
          <h2>
            Turning ideas
            <br />
            <span>into real spaces.</span>
          </h2>
          <Link
            to="/#contact"
            className="ai-interior-contact-link"
          >
            Get in touch
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default AIInterior;
