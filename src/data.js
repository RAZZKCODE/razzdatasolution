export const PORTFOLIO_DATA = {
  identity: {
    name: "RazzDataSolution",
    title: "Digital products, data systems, and automation",
    company: "RazzDataSolution",
    motto: "Software • Data • Automation",
    tagline: "Building Powerful Digital Products, Automating Data, and Turning Ideas Into Scalable Software.",
    bio: "RazzDataSolution builds full-stack applications, custom software, data automation systems, web scraping pipelines, APIs, dashboards, and scalable digital solutions."
  },
  trust: ["Full-Stack Development", "Data Automation", "Web Scraping", "Custom Software"],
  tech_stack: [
    { category: "Frontend", tools: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"] },
    { category: "Backend", tools: ["Node.js", "Express.js", "Python", "REST APIs"] },
    { category: "Database", tools: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Firebase"] },
    { category: "Data & Automation", tools: ["Python", "APIs", "JSON", "CSV", "Web Scraping", "Apify"] },
    { category: "DevOps & Tools", tools: ["Git", "GitHub", "Docker", "Cloud Platforms"] }
  ],
  services: [
    { title: "Full-Stack Development", details: "Responsive products, SaaS platforms, portals, dashboards, authentication, and reliable REST APIs." },
    { title: "Custom Software", details: "Focused internal tools, document workflows, calculators, utilities, and business-specific software." },
    { title: "Web Scraping", details: "Structured extraction pipelines for product, content, and URL-based data collection." },
    { title: "Data Automation", details: "Cleaning, transformation, synchronization, scheduled jobs, monitoring, and reporting systems." },
    { title: "API Development", details: "Secure APIs, webhooks, payment flows, third-party integrations, and automation endpoints." },
    { title: "Dashboards & Analytics", details: "Clear operational views with filters, search, charts, KPIs, tables, and exports." },
    { title: "Workflow Automation", details: "Repetitive task automation, file generation, notifications, and custom business workflows." },
    { title: "Third-Party Integrations", details: "Connect the services your team already uses into one dependable product experience." }
  ],
  projects: [
    { name: "Data Scraping Platform", description: "A URL-driven application that extracts structured data through automated scraping systems and returns it to the product.", problem: "Manual collection is slow and difficult to standardize.", solution: "A guided workflow connects URLs to repeatable extraction and JSON outputs.", tech: ["React", "Next.js", "Python", "Apify", "JSON"], features: ["URL intake", "Structured outputs", "Automation pipeline"] },
    { name: "Product Price Monitoring", description: "A platform for tracking product prices, maintaining history, surfacing highs and lows, and visualizing change over time.", problem: "Price movement is hard to understand across many products.", solution: "Scheduled collection and historical views make changes easy to monitor.", tech: ["Full-stack", "APIs", "Web Scraping", "Database", "Charts"], features: ["History tracking", "High/low signals", "Trend views"] },
    { name: "Document & ID Card Printing", description: "A browser-based tool for arranging front and back images on an A4 sheet and preparing accurate print layouts.", problem: "Manual print preparation wastes time and creates layout errors.", solution: "A visual editor turns uploaded assets into print-ready pages.", tech: ["React", "JavaScript", "Image Processing", "PDF"], features: ["A4 layout", "Front/back pairing", "Print preview"] },
    { name: "Analytics Dashboard", description: "A data-driven interface with statistics, filters, charts, tables, search, and export functionality.", problem: "Important operational data is scattered across disconnected views.", solution: "One focused dashboard turns raw records into decisions and actions.", tech: ["React", "Next.js", "APIs", "Database", "Visualization"], features: ["KPI views", "Filters and search", "Data export"] },
    { name: "Custom Automation Systems", description: "Purpose-built systems that automate repetitive business processes, collection, processing, and reporting.", problem: "Manual workflows consume attention and introduce avoidable inconsistency.", solution: "Composable automation connects each step into a dependable operational flow.", tech: ["Python", "Node.js", "APIs", "Scheduled Jobs"], features: ["Process automation", "Notifications", "Reporting"] }
  ],
  process: ["Discover", "Plan", "Build", "Test & Optimize", "Deploy & Scale"],
  capabilities: ["Full-Stack Applications", "Custom Web Tools", "Data Extraction", "API Integrations", "Automation Systems", "Analytics Dashboards", "Database Systems", "Cloud-ready Applications"],
  principles: ["Business-focused engineering", "Modern technology stack", "Automation-first approach", "Scalable architecture", "Clean and intuitive interfaces", "Data-driven solutions"],
  architecture: ["User", "Frontend", "API Layer", "Backend", "Database / External APIs", "Automation / Data Processing", "Analytics / Output"],
  cta: { primary: "Start a Project", secondary: "View Our Work" }
};
