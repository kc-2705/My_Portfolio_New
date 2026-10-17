import projectPlayverse from "../assets/project-playverse.jpg";
import projectExpenso from "../assets/project-expenso.png";
import projectAskPastMe from "../assets/project-askpastme.png";
import projectOrderDesk from "../assets/project-orderdesk.png";
import projectFun from "../assets/project-fun.png";
import project2 from "../assets/handcricket.webp";
import project4 from "../assets/smarthome.jfif";
import {
  SiTypescript, SiJavascript, SiHtml5, SiCss3, SiReact, SiNextdotjs, SiRedux, SiReactquery, SiVite,
  SiTailwindcss, SiAntdesign, SiBabylondotjs, SiNodedotjs, SiExpress, SiSpringboot, SiGraphql,
  SiSocketdotio, SiApachekafka, SiPostman, SiJsonwebtokens, SiMysql, SiPostgresql, SiMongodb, SiRedis,
  SiAmazonec2, SiAmazons3, SiDocker, SiLinux, SiGithubactions, SiRender, SiJest, SiTestinglibrary,
  SiCypress, SiJunit5, SiGit, SiGithub, SiJira, SiConfluence, SiOracle, SiGoogleanalytics,
  SiGoogletagmanager, SiGithubcopilot,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import {
  TbApi, TbShieldLock, TbDatabaseCog, TbTestPipe, TbRocket, TbUsersGroup, TbFileText,
  TbDeviceMobile, TbSql, TbBolt, TbAccessible, TbTransfer, TbPlugConnected,
} from "react-icons/tb";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Kavya Chowdary Immanni",
  role: "Full-Stack Software Developer · React · Node.js · Java",
  subheading:
    "I build web applications end to end: React/TypeScript interfaces, Node.js and Java/Spring Boot APIs, SQL and NoSQL databases, integrations and cloud deployments, with clean, tested code and a focus on the people who use them.",
  highlights: [
    { value: "~5 yrs", label: "building software" },
    { value: "8", label: "internal tools shipped at DSHB" },
    { value: "15+", label: "healthcare API endpoints at Optum Rx" },
    { value: "7", label: "projects built" },
  ],
  links: {
    github: "https://github.com/kc-2705",
    linkedin: "https://www.linkedin.com/in/kavya-immanni/",
  },
};

export const PROJECTS = [
  {
    id: 1,
    title: "Playverse – 3D Game Hub",
    description:
      "Full-stack game platform with 4 realistic 3D games, accounts, leaderboards and real-time online multiplayer. Includes enemy AI (vision cones, A* path finding), procedural worlds, a server-authoritative Socket.io game server, 11 automated tests, and an installable PWA and Android app.",
    techStack: ["React", "TypeScript", "Babylon.js", "Node.js", "Express", "Socket.io", "MongoDB", "PWA"],
    imgSrc: projectPlayverse,
    link: "https://github.com/kc-2705/playverse",
    live: "https://playverse-app.onrender.com",
  },
  {
    id: 2,
    title: "Expenso – Personal Finance Tracker",
    description:
      "MERN app to track income and expenses, set monthly budgets, automate recurring payments and import bank CSVs, with charts, CSV/PDF export, dark mode and a secure API (JWT, bcrypt, Zod validation, rate limiting) backed by automated tests.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Ant Design", "React Query", "JWT"],
    imgSrc: projectExpenso,
    link: "https://github.com/kc-2705/expense-management-app",
  },
  {
    id: 3,
    title: "Ask Past Me – Voice Journal App",
    description:
      "Android voice journal built with React Native. Record your day, then search past notes or replay what you said on the same day in past years. Works fully offline with SQLite full-text search, reminders and fingerprint lock.",
    techStack: ["React Native", "Expo", "TypeScript", "SQLite"],
    imgSrc: projectAskPastMe,
    imgContain: true,
    link: "https://github.com/kc-2705/ask-past-me",
  },
  {
    id: 4,
    title: "OrderDesk – Order Management Dashboard",
    description:
      "React dashboard to create, filter and review customer orders, with validated order forms and line items, status and date filters, sorting, order history, KPI cards and a collapsible sidebar layout.",
    techStack: ["React", "Vite", "React Router", "Ant Design"],
    imgSrc: projectOrderDesk,
    link: "https://github.com/kc-2705/orders-management-app",
    live: "https://kc-2705.github.io/orders-management-app/",
  },
  {
    id: 5,
    title: "Fun Web Projects",
    description:
      "Creative front-end experiments: an interactive day-and-night flower garden, a five-game pocket arcade, a lamp-themed login and small animation pieces built with plain HTML, CSS and JavaScript.",
    techStack: ["JavaScript", "SVG", "Canvas", "CSS Animations"],
    imgSrc: projectFun,
    link: "https://github.com/kc-2705/fun-web-programming",
    live: "https://kc-2705.github.io/fun-web-programming/",
  },
  {
    id: 6,
    title: "Multiplayer Hand Cricket Game with Chat",
    description:
      "Multiplayer hand cricket game in Python using Pygame for graphics and socket programming for networking, with a server managing game sessions, player moves, scores and chat.",
    techStack: ["Python", "Pygame", "Sockets"],
    imgSrc: project2,
    link: "https://github.com/kc-2705/Hand-Cricket",
  },
  {
    id: 7,
    title: "Smart Home Monitoring (GSHAM Dataset)",
    description:
      "Energy-usage prediction with Decision Tree, Random Forest and LSTM models: EDA, Min-Max scaling, MAE/MSE evaluation and Tableau dashboards to present the insights.",
    techStack: ["Python", "Regression Models", "LSTM", "Tableau"],
    imgSrc: project4,
    link: "https://github.com/kc-2705/Smart-home-Monitoring-system-using-GSHAM-Dataset",
  },
];

export const SKILL_GROUPS = [
  {
    title: "Languages",
    skills: [
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "SQL", icon: <TbSql className="text-sky-300" /> },
      { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <SiCss3 className="text-blue-400" /> },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-stone-100" /> },
      { name: "Redux / Redux Toolkit", icon: <SiRedux className="text-purple-400" /> },
      { name: "Context API", icon: <SiReact className="text-cyan-300" /> },
      { name: "React Query", icon: <SiReactquery className="text-red-400" /> },
      { name: "Vite", icon: <SiVite className="text-violet-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "Ant Design", icon: <SiAntdesign className="text-blue-500" /> },
      { name: "Accessibility (WCAG 2.1)", icon: <TbAccessible className="text-sky-300" /> },
      { name: "Responsive Design", icon: <TbDeviceMobile className="text-pink-300" /> },
      { name: "Babylon.js (3D)", icon: <SiBabylondotjs className="text-orange-300" /> },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-stone-200" /> },
      { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
      { name: "REST API Design", icon: <TbApi className="text-orange-300" /> },
      { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
      { name: "Socket.io", icon: <SiSocketdotio className="text-stone-100" /> },
      { name: "JWT Auth", icon: <SiJsonwebtokens className="text-pink-400" /> },
      { name: "RBAC", icon: <TbShieldLock className="text-teal-300" /> },
    ],
  },
  {
    title: "Databases & Performance",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-sky-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Redis", icon: <SiRedis className="text-red-500" /> },
      { name: "Schema Design & Indexing", icon: <TbDatabaseCog className="text-purple-300" /> },
      { name: "Query Optimization", icon: <TbBolt className="text-yellow-300" /> },
    ],
  },
  {
    title: "Integration",
    skills: [
      { name: "Apache Kafka", icon: <SiApachekafka className="text-stone-100" /> },
      { name: "Third-Party APIs", icon: <TbPlugConnected className="text-lime-300" /> },
      { name: "SFTP File Exchange", icon: <TbTransfer className="text-sky-300" /> },
      { name: "NetSuite & SuiteScript", icon: <SiOracle className="text-red-500" /> },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: <FaAws className="text-orange-400" /> },
      { name: "EC2", icon: <SiAmazonec2 className="text-orange-400" /> },
      { name: "S3", icon: <SiAmazons3 className="text-red-400" /> },
      { name: "Azure Blob Storage", icon: <VscAzure className="text-sky-400" /> },
      { name: "Docker", icon: <SiDocker className="text-sky-500" /> },
      { name: "GitHub Actions", icon: <SiGithubactions className="text-sky-400" /> },
      { name: "CI/CD", icon: <TbRocket className="text-pink-300" /> },
      { name: "Render", icon: <SiRender className="text-stone-100" /> },
      { name: "Linux", icon: <SiLinux className="text-yellow-200" /> },
    ],
  },
  {
    title: "Testing",
    skills: [
      { name: "Jest", icon: <SiJest className="text-red-400" /> },
      { name: "React Testing Library", icon: <SiTestinglibrary className="text-red-500" /> },
      { name: "Cypress", icon: <SiCypress className="text-stone-100" /> },
      { name: "JUnit", icon: <SiJunit5 className="text-green-400" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "API & Integration Testing", icon: <TbTestPipe className="text-lime-300" /> },
    ],
  },
  {
    title: "Collaboration & Tools",
    skills: [
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
      { name: "GitHub", icon: <SiGithub className="text-stone-100" /> },
      { name: "Jira", icon: <SiJira className="text-blue-400" /> },
      { name: "Confluence", icon: <SiConfluence className="text-blue-300" /> },
      { name: "Agile / Scrum", icon: <TbUsersGroup className="text-purple-300" /> },
      { name: "Technical Docs", icon: <TbFileText className="text-stone-200" /> },
      { name: "Google Analytics 4", icon: <SiGoogleanalytics className="text-amber-400" /> },
      { name: "Google Tag Manager", icon: <SiGoogletagmanager className="text-blue-400" /> },
      { name: "GitHub Copilot", icon: <SiGithubcopilot className="text-stone-100" /> },
    ],
  },
];

export const EXPERIENCES = [
  {
    yearRange: "Feb 2026 - Present",
    role: "Application Developer",
    company: "DSHB (Developmental Studies Hybridoma Bank)",
    location: "Iowa City, IA",
    description: [
      "Design and build internal and external web applications with TypeScript, React, Node.js/Express and MySQL, delivering 8 internal tools and portals used daily by ~15 staff.",
      "Built the DSHB Depositor Portal, moving external researchers’ antibody and hybridoma deposits from email to an online submit-and-track workflow that handles ~50–60 deposits a month.",
      "Secured the portal’s API with JWT authentication and role-based access control, and added indexes and connection pooling so pages that used to show long loading spinners now load noticeably faster.",
      "Managed client state with Redux Toolkit and Context API and server data with React Query; built reusable components and shared API modules used across the tools.",
      "Built and maintain 5+ integrations (Celigo, SuiteCommerce Advanced, Athos Commerce, Bioz, DocuSign) with the NetSuite ERP using SuiteScript, RESTlets and REST APIs.",
      "Automated a weekly SFTP report that saves staff about an hour of manual work every week, and built a React blog that lets non-technical staff publish website content on their own.",
      "Test with Jest, React Testing Library, Cypress and Postman, ship updates at least monthly, and mentor 2 interns.",
    ],
    techStack: ["TypeScript", "React", "Redux Toolkit", "Node.js", "Express", "MySQL", "JWT & RBAC", "NetSuite", "Docker"],
  },
  {
    yearRange: "Aug 2023 - Jan 2026",
    role: "Application Developer",
    company: "Optum Rx",
    location: "Remote",
    description: [
      "Developed full-stack healthcare applications with React, Node.js/Express, Java/Spring Boot, MongoDB, PostgreSQL and Redis, giving pharmacy fulfillment teams one view of inventory, dispatches, shipments and deliveries.",
      "Built and maintained 15+ REST and GraphQL API endpoints with validation, authorization and consistent error handling.",
      "Developed Spring Boot microservices with Spring Data JPA/Hibernate and Spring Security on PostgreSQL, using Apache Kafka for event-driven processing.",
      "Built 3+ operational dashboards used by internal fulfillment staff, with Redux Toolkit, React Query, Tailwind CSS and Ant Design.",
      "Added Redis caching and MongoDB compound indexes for fast, current dashboards, following HIPAA-focused data-handling practices.",
      "Shipped through Docker, GitHub Actions CI/CD and AWS/Azure, and resolved ~10–15 production issues a week in a 25-person Agile team.",
    ],
    techStack: ["React", "Redux Toolkit", "Node.js", "Spring Boot", "Kafka", "PostgreSQL", "MongoDB", "Redis", "AWS", "CI/CD"],
  },
  {
    yearRange: "Aug 2021 - Nov 2022",
    role: "Associate Globalization Developer",
    company: "TIBCO Software (now Cloud Software Group)",
    location: "Hyderabad, India",
    description: [
      "Developed Java/Spring Boot services for MOLEE, an internal translation-management platform supporting ~10 languages.",
      "Designed REST APIs connecting the platform with build systems and external translation vendors, handling JSON/XML payloads, validation and job status.",
      "Built Java components that validated XLIFF, .properties and JSON files before they reached product builds, and sped up processing by consolidating queries.",
      "Deployed services with Docker on AWS (EC2, S3, CloudWatch) through CI/CD, wrote JUnit tests, and resolved ~10–15 localization defects a week with QA.",
    ],
    techStack: ["Java", "Spring Boot", "Spring Data JPA", "REST APIs", "SQL", "AWS", "Docker", "JUnit", "Agile"],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "B.Tech in Computer Science",
    institution: "Gokaraju Rangaraju Institute of Engineering & Technology, Hyderabad, India",
    duration: "2017 - 2021",
    cgpa: 3.7,
    courses: "COURSES: Linear Algebra, Advanced Calculus, Probability and statistics, DBMS, Advanced Data Structures, Operating Systems, Object oriented programming through Java, Web Technologies, Cloud Computing, Data warehousing and Data mining, Unified Modeling Language ", 
  },
  {
    id: 2,
    degree: "M.S. in Computer Science",
    institution: "Saint Louis University, St. Louis, Missouri",
    duration: "2023 - 2024",
    cgpa: 3.86,
    courses:
      "COURSES: Introduction to Artificial Intelligence, Data Analytics and Internet of Things, Principles of software Development, Distributed Computing, Software Architecture, Algorithms.",
  },
];

