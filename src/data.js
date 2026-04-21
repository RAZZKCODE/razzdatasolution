export const PORTFOLIO_DATA = {
  identity: {
    name: "Rajveer Kushwah",
    title: "Data Automation & Full-Stack Developer",
    company: "RazzDataSolution",
    motto: "Turning Manual Complexity into Automated Simplicity.",
    bio: "Expert in Python, Node.js, and Web Automation. Building tools that save time and optimize data."
  },
  tech_stack: [
    { category: "Backend & Automation", tools: ["Python", "Node.js", "n8n", "Selenium", "Playwright", "Django", "Google Apps Script"] },
    { category: "Frontend", tools: ["React", "Tailwind CSS", "Framer Motion"] },
    { category: "Database", tools: ["MongoDB", "PostgreSQL", "Firebase"] }
  ],
  projects: [
    {
      name: "CreatorPulse",
      description: "Full-stack platform for brand-creator collaborations.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      highlight: "Premium UI with seamless workflow management."
    },
    {
      name: "Instagram Reels Checker",
      description: "Automated tool to detect live vs deleted reels in bulk.",
      tech: ["Python", "Selenium", "API Integration"],
      logic_feature: "URL-bar monitoring for accurate status detection."
    },
    {
      name: "AutoPhotoPrint",
      description: "SaaS that converts images into A4-ready passport/ID sheets.",
      tech: ["Python", "Django", "Pillow/OpenCV"],
      status: "In Development"
    },
    {
      name: "Google Sheet Data Management",
      description: "Automated workflows to sync, clean, and manage large datasets seamlessly.",
      tech: ["Python", "Google Apps Script", "API"],
      highlight: "Real-time data synchronization and automation."
    }
  ],
  services: [
    {
      title: "Social Media Scraping",
      details: "High-speed data extraction from Instagram and Facebook."
    },
    {
      title: "Custom Automation Workflows",
      details: "Complex API integrations using n8n and custom scripts."
    },
    {
      title: "Full-Stack SaaS",
      details: "MERN stack tool development like CreatorPulse."
    }
  ],
  cta: {
    primary: "Discuss Your Project",
    secondary: "View Source Code"
  }
};
