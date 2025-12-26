export const PORTFOLIO_DATA = {
  name: "Alex Rivera",
  title: "Full-Stack Designer & Developer",
  bio: "I create beautiful, functional digital experiences that solve real problems. Specializing in web design and development with a passion for clean code and thoughtful UX.",

  about: {
    description:
      "With 5+ years of experience, I've worked with startups and established brands to create digital solutions that drive results. I believe in combining design thinking with technical excellence.",
    highlights: [
      "Modern web design & development",
      "UI/UX optimization",
      "Performance & accessibility focused",
      "Creative problem solving",
    ],
  },

  skills: [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
    { category: "Design", items: ["Figma", "UI/UX Design", "Prototyping", "Design Systems"] },
    { category: "Backend", items: ["Node.js", "PostgreSQL", "API Design", "Database Design"] },
    { category: "Tools", items: ["Git", "VS Code", "Vercel", "AWS"] },
  ],

  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management",
      image: "/ecommerce-dashboard.png",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Design System UI Kit",
      description: "Comprehensive component library with 50+ reusable components",
      image: "/design-system-components.png",
      tech: ["React", "Storybook", "TypeScript", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "SaaS Analytics Dashboard",
      description: "Real-time analytics platform with interactive data visualizations",
      image: "/analytics-dashboard.png",
      tech: ["Next.js", "D3.js", "PostgreSQL", "WebSocket"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Mobile App Design",
      description: "iOS and Android app design with comprehensive user flows",
      image: "/mobile-app-interface.png",
      tech: ["Figma", "Design", "Prototyping", "User Research"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ],

  experience: [
    {
      role: "Senior Full-Stack Developer",
      company: "TechStart Inc.",
      period: "2022 - Present",
      description: "Leading frontend development and mentoring junior developers",
    },
    {
      role: "UI/UX Designer & Developer",
      company: "Creative Agency",
      period: "2020 - 2022",
      description: "Designing and building web experiences for Fortune 500 clients",
    },
    {
      role: "Junior Developer",
      company: "StartUp Hub",
      period: "2019 - 2020",
      description: "Full-stack development on MVP projects and feature development",
    },
  ],

  socialLinks: [
    { platform: "GitHub", url: "#", icon: "FiGithub" },
    { platform: "LinkedIn", url: "#", icon: "FiLinkedin" },
    { platform: "Twitter", url: "#", icon: "FiTwitter" },
    { platform: "Email", url: "mailto:hello@alexrivera.dev", icon: "FiMail" },
  ],
}
