export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Work", hash: "#work" },
  { name: "Experience", hash: "#journey" },
  { name: "Skills", hash: "#skills" },
  { name: "Contact", hash: "#contact" },
] as const;

export const profile = {
  name: "Arjun S Naruka",
  email: "singhnarukaarjun@gmail.com",
  phone: "+91 8058318556",
  location: "Jaipur, Rajasthan",
  linkedin: "https://www.linkedin.com/in/arjun-singh-naruka",
  github: "https://github.com/arjunji123",
  resume: "/Arjun-Singh-Naruka-Resume.pdf",
  roles: [
    "Full Stack Developer",
    "Frontend · Backend · Databases",
    "Mobile App Developer",
    "DevOps & Deployment",
  ],
};

export const stats = [
  { value: 2, suffix: "+", label: "Years working full-time" },
  { value: 4, suffix: "", label: "Companies, from intern to engineer" },
  { value: 7, suffix: "", label: "Projects featured here" },
] as const;

export const platforms = [
  {
    id: "web",
    label: "Frontend",
    title: "Fast, polished interfaces",
    text: "Dashboards, storefronts and AI products built with Next.js, React and TypeScript — responsive, carefully structured, with clean state management behind every screen.",
    points: [
      "AI hiring platform and analytics dashboards — LookoutAI, Wurkn",
      "Shipment management with live rates and payments — Shiplo",
      "Tailwind CSS and Framer Motion for UI that feels smooth",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind", "Redux Toolkit", "TanStack Query", "Zustand"],
  },
  {
    id: "mobile",
    label: "Mobile",
    title: "Apps in your pocket",
    text: "Cross-platform mobile apps — one codebase for iOS and Android, wired to the same APIs as the web product.",
    points: [
      "React Native apps for iOS and Android from a single codebase",
      "Shared API layer, state logic and types with the web app",
      "Auth, real-time updates and notifications with JWT, Socket.io and Firebase",
    ],
    tech: ["React Native", "TypeScript", "Redux Toolkit", "REST APIs", "Socket.io", "Firebase"],
  },
  {
    id: "backend",
    label: "Backend & Data",
    title: "APIs and data that hold up",
    text: "Secure, well-structured services behind the screens — REST APIs, authentication, caching and databases designed around how the product is actually used.",
    points: [
      "REST APIs in Node.js, NestJS and Django with JWT authentication",
      "MongoDB, PostgreSQL and MySQL, with Redis for caching",
      "Bots and integrations — Telegram, Slack, MS Teams, Stripe, ShipEngine",
    ],
    tech: ["Node.js", "NestJS", "Django", "PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    id: "devops",
    label: "DevOps",
    title: "Shipped, deployed, running",
    text: "I don't hand over code and disappear. I containerise it, deploy it and keep it running, so what I build actually reaches users.",
    points: [
      "Dockerised apps with Docker Compose for repeatable environments",
      "Deployments on AWS (EC2, RDS) and Netlify",
      "Git and GitHub workflows from first commit to production",
    ],
    tech: ["Docker", "Docker Compose", "AWS EC2", "AWS RDS", "Netlify", "Git & GitHub"],
  },
] as const;

export const journeyData = [
  {
    level: 1,
    when: "During college",
    title: "Freelance Developer",
    org: "Self-employed · about 2 years",
    story: [
      "Took on client projects alongside my B.Tech — the fastest way I know to learn how real products get built.",
      "Delivered web apps, mobile apps, backends and databases end to end, and deployed them too: whatever the project needed, I did.",
    ],
    tech: ["Frontend", "Mobile apps", "Backend", "Databases", "Deployment"],
    href: null,
  },
  {
    level: 2,
    when: "Jun — Aug 2023",
    title: "ReactJS Developer Intern",
    org: "Dotsquares Technologies India · Jaipur",
    story: [
      "My first time on a professional team. Learned React properly and built ShopHub, a frontend-only e-commerce storefront.",
      "Worked with cross-functional teams to ship responsive interfaces and improve site performance.",
    ],
    tech: ["React", "JavaScript", "CSS"],
    href: { label: "Open ShopHub", url: "https://shophubcom.netlify.app/" },
  },
  {
    level: 3,
    when: "Jul 2024 — Feb 2025",
    title: "Full Stack Developer",
    org: "Digital Future Web Solutions · Jaipur",
    story: [
      "My first full-time role. Built a Telegram bot for automated customer support and a scalable e-commerce platform.",
      "Designed the RESTful APIs and tuned the MySQL database for a secure, scalable architecture.",
    ],
    tech: ["Node.js", "React", "MySQL", "Telegram Bot"],
    href: null,
  },
  {
    level: 4,
    when: "Feb — Dec 2025",
    title: "Software Engineer",
    org: "Sturen Tech · Jaipur",
    story: [
      "Built responsive, dynamic interfaces for Shiplo, a transport management system, with Next.js, TypeScript and Tailwind CSS.",
      "Integrated REST APIs and managed client state with TanStack Query and Zustand to keep the app fast.",
    ],
    tech: ["Next.js", "TanStack Query", "Zustand", "Tailwind"],
    href: null,
  },
  {
    level: 5,
    when: "Jan 2026 — Present",
    title: "Full Stack Developer",
    org: "LookoutAI · Toronto, Canada (Remote)",
    story: [
      "Building an AI-powered talent acquisition and assessment platform that automates candidate screening and streamlines the hiring lifecycle with intelligent filters and workspace integrations.",
      "Also building Wurkn, an employee feedback and sentiment analytics platform where feedback stays anonymous.",
    ],
    tech: ["Next.js", "TypeScript", "Redux Toolkit", "Django", "OpenAI"],
    href: null,
    current: true,
  },
] as const;

export const projectsData = [
  {
    title: "LookoutAI",
    meta: "LookoutAI · 2026 — now",
    kind: "AI talent acquisition",
    description:
      "An AI-powered platform that automates candidate screening and assessment, with intelligent filters and workspace integrations like Slack and MS Teams to run the hiring process end to end.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Redux Toolkit", "Framer Motion", "Firebase"],
    href: null,
  },
  {
    title: "Wurkn",
    meta: "LookoutAI · 2026 — now",
    kind: "Employee feedback & sentiment",
    description:
      "Employees share feedback anonymously; companies see sentiment trends, cultural insights and department-level analytics on dashboards, without ever seeing who said what.",
    tags: ["React", "TypeScript", "Tailwind", "Django", "Redis", "Docker", "OpenAI"],
    href: null,
  },
  {
    title: "Shiplo & Heale",
    meta: "Sturen Tech · 2025",
    kind: "Shipment & transport management",
    description:
      "A shipment platform to manage inventory, create shipping labels and get real-time quotes. I built the interface and wired it to the REST APIs with TanStack Query and Zustand; labels and rates run on ShipEngine, payments on Stripe.",
    tags: ["Next.js", "TanStack Query", "Zustand", "NestJS", "MongoDB", "Redis", "ShipEngine", "Stripe"],
    href: null,
  },
  {
    title: "Aignite",
    meta: "",
    kind: "AI mock interviews",
    description:
      "Practise interviews with an AI interviewer and get real-time feedback, so the real one feels familiar.",
    tags: ["AI", "Real-time", "Full stack"],
    href: null,
  },
  {
    title: "Telegram Support Bot",
    meta: "Digital Future Web Solutions · 2024 — 25",
    kind: "Support automation",
    description:
      "A Telegram bot that handles customer support automatically, built alongside a scalable e-commerce platform with RESTful APIs and an optimised MySQL database.",
    tags: ["Node.js", "Telegram Bot API", "MySQL", "REST APIs"],
    href: null,
  },
  {
    title: "Freelance Mobile Apps",
    meta: "During college",
    kind: "Mobile apps",
    description:
      "Mobile apps I built during college — designed, connected to a backend and deployed end to end.",
    tags: ["React Native", "Node.js", "Databases", "Deployment"],
    href: null,
  },
  {
    title: "ShopHub",
    meta: "Dotsquares · 2023",
    kind: "E-commerce · my first React project",
    description:
      "A frontend-only e-commerce storefront I built at Dotsquares while learning React. Where it all started.",
    tags: ["React", "JavaScript", "CSS", "Netlify"],
    href: "https://shophubcom.netlify.app/",
  },
] as const;

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "Angular", "Redux Toolkit", "Zustand", "TanStack Query"],
  },
  {
    title: "Mobile",
    items: ["React Native", "iOS & Android", "REST API integration", "Firebase"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "NestJS", "Django", "Python", "REST APIs", "JWT auth", "Socket.io"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firestore", "Supabase"],
  },
  {
    title: "DevOps & deployment",
    items: ["Docker", "Docker Compose", "AWS EC2", "AWS RDS", "Netlify", "Git & GitHub"],
  },
  {
    title: "AI & integrations",
    items: ["OpenAI", "Slack bots", "MS Teams bots", "Telegram bots", "Stripe", "ShipEngine", "Postman", "Swagger"],
  },
] as const;

export const marquee = [
  "React", "React Native", "Next.js", "TypeScript", "Node.js", "NestJS", "Django", "Tailwind",
  "MongoDB", "PostgreSQL", "MySQL", "Redis", "Docker", "AWS", "OpenAI", "Firebase", "Socket.io", "Stripe",
] as const;

export const education = {
  degree: "B.Tech in Information Technology",
  school: "Govt. Engineering College, Ajmer",
  date: "2020 — 2024",
  score: "CGPA 7.5 / 10",
};
