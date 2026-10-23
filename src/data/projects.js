/**
 * Projects Configuration Data
 * 
 * Includes Umair Ali's 6 verified Frontend projects (with live Vercel deployments)
 * and 3 n8n AI & Automation projects with real screenshots from public/projects/.
 */

export const projectsData = [
  // ==========================================
  // FRONTEND PROJECTS (HTML, CSS, JS, REACT)
  // ==========================================
  {
    id: "weather-app",
    title: "Weather App",
    category: "Frontend",
    badge: "API & Live Data",
    description:
      "Interactive weather forecasting web application featuring real-time meteorological data fetching via REST API, dynamic weather status rendering, city-based search, and responsive design across all devices.",
    tags: ["JavaScript", "REST API", "Weather API", "CSS3", "HTML5"],
    demoUrl: "https://weather-api-eight-phi.vercel.app/",
    repoUrl: "", // Add GitHub repo URL if available (e.g. https://github.com/umairdevh7/weather-app)
    image: "/projects/weather.png",
    featured: true,
  },
  {
    id: "snake-game",
    title: "Snake Game",
    category: "Frontend",
    badge: "Interactive Canvas Game",
    description:
      "Classic arcade Snake game built with vanilla JavaScript and HTML5 Canvas. Features real-time game loop animation, directional keyboard controls, collision detection, and instant score tracking.",
    tags: ["JavaScript", "HTML5 Canvas", "Game Loop", "DOM Events", "CSS3"],
    demoUrl: "https://snake-game-mu-navy-24.vercel.app/",
    repoUrl: "",
    image: "/projects/snake.png",
    featured: true,
  },
  {
    id: "pinterest-clone",
    title: "Pinterest Clone",
    category: "Frontend",
    badge: "Masonry Layout & UI",
    description:
      "Visual discovery and media bookmarking interface inspired by Pinterest. Features an adaptive CSS masonry grid, responsive image cards, smooth hover state reveals, and modern UI interactions.",
    tags: ["JavaScript", "Masonry Grid", "Modern CSS", "Responsive UI", "HTML5"],
    demoUrl: "https://pinterest-beige.vercel.app/",
    repoUrl: "",
    image: "/projects/pinterest.png",
    featured: true,
  },
  {
    id: "responsive-site",
    title: "Responsive Site",
    category: "Frontend",
    badge: "Mobile-First Design",
    description:
      "Modern, multi-section web layout built strictly with mobile-first responsive principles. Utilizes fluid CSS Grid and Flexbox architectures for seamless viewing on phones, tablets, and large screens.",
    tags: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Responsive Design"],
    demoUrl: "https://first-responsive-site.vercel.app/",
    repoUrl: "",
    image: "/projects/responsive.png",
    featured: true,
  },
  {
    id: "flutter-clone",
    title: "Flutter Clone",
    category: "Frontend",
    badge: "UI Reproduction",
    description:
      "Web-based recreation of Flutter's clean mobile design language. Emphasizes structured UI component hierarchy, balanced padding, sleek typography, and native-feeling mobile aesthetic on the web.",
    tags: ["JavaScript", "CSS Architecture", "UI Design", "Component Layout"],
    demoUrl: "https://flutter-clone.vercel.app/",
    repoUrl: "",
    image: "/projects/flutter.png",
    featured: true,
  },
  {
    id: "movie-app",
    title: "Movie App",
    category: "Frontend",
    badge: "Media Discovery & API",
    description:
      "Movie discovery web application with poster grid layouts, live title search and filtering, dynamic modal overviews, and asynchronous data fetching from external movie database APIs.",
    tags: ["JavaScript", "REST APIs", "Movie Database API", "Async/Await", "CSS3"],
    demoUrl: "https://movie-app-one-delta-93.vercel.app/",
    repoUrl: "",
    image: "/projects/movie.png",
    featured: true,
  },

  // ==========================================
  // AI & AUTOMATION PROJECTS (n8n WORKFLOWS)
  // ==========================================
  {
    id: "lead-crm-automation",
    title: "AI-Powered Lead Qualification and CRM Automation",
    category: "AI & Automation",
    badge: "n8n Workflow",
    description:
      "Multi-step n8n automation pipeline that captures inbound leads, enriches prospect intelligence using AI agents, evaluates lead qualification criteria, and syncs scored opportunities into CRM pipelines.",
    tags: ["n8n", "AI Agents", "CRM Webhooks", "API Integration", "Process Automation"],
    demoUrl: "",
    repoUrl: "",
    image: "/projects/lead-crm-automation.png",
    featured: false,
  },
  {
    id: "support-email-agent",
    title: "AI Customer Support and Email Triage Agent",
    category: "AI & Automation",
    badge: "n8n AI Agent",
    description:
      "Intelligent n8n email triage agent that analyzes incoming support tickets, detects sentiment and customer intent, auto-drafts contextual AI responses, and escalates complex requests to human teams.",
    tags: ["n8n", "LLM Prompting", "Email APIs", "Sentiment Analysis", "Webhooks"],
    demoUrl: "",
    repoUrl: "",
    image: "/projects/support-email-agent.png",
    featured: false,
  },
  {
    id: "invoice-document-processing",
    title: "AI Invoice and Document Processing Automation",
    category: "AI & Automation",
    badge: "n8n Document AI",
    description:
      "Automated document processing workflow using n8n and vision/OCR intelligence to extract line items, vendor details, totals, and tax breakdowns from PDF invoices into structured accounting systems.",
    tags: ["n8n", "Document OCR", "Data Extraction", "Validation Pipelines", "Automation"],
    demoUrl: "",
    repoUrl: "",
    image: "/projects/invoice-document-processing.png",
    featured: false,
  },
];
