import projectPlayverse from "../assets/project-playverse.jpg";
import projectJobHunt from "../assets/project-jobhunt.png";
import projectExpenso from "../assets/project-expenso.png";
import projectAskPastMe from "../assets/project-askpastme.jpg";
import projectOrderDesk from "../assets/project-orderdesk.png";
import projectFun from "../assets/project-fun.png";
import project2 from "../assets/handcricket.webp";
import project4 from "../assets/smarthome.jfif";
import {
  SiReact, SiTypescript, SiJavascript, SiHtml5, SiRedux, SiNextdotjs, SiNodedotjs, SiExpress,
  SiSpringboot, SiApachekafka, SiRedis, SiSocketdotio, SiPostgresql, SiMysql, SiMongodb, SiOracle,
  SiJest, SiJunit5, SiDocker, SiGit, SiJenkins, SiGithubactions, SiSplunk, SiAntdesign,
} from "react-icons/si";
import { FaJava, FaAws, FaDatabase } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { TbBrain, TbTestPipe, TbShieldLock, TbApi } from "react-icons/tb";

export const NAVIGATION_LINKS = [
  { label: "Experience", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Kavya Chowdary Immanni",
  role: "Full Stack Engineer · React · Node.js · TypeScript · Java",
  status: "Open to full stack roles in the US · Remote, hybrid or on-site",
  subheading:
    "I build web applications end to end: React and TypeScript front ends, Node.js and Spring Boot APIs, SQL data layers, automated tests and production support. Lately I also build AI features with LLM tool calling and RAG.",
  highlights: [
    { value: "5 yrs", label: "building software" },
    { value: "60", label: "secured API endpoints I own" },
    { value: "72", label: "automated tests on my portal" },
    { value: "3", label: "live apps you can try" },
  ],
  links: {
    github: "https://github.com/kc-2705",
    linkedin: "https://www.linkedin.com/in/kavya-immanni/",
    email: "ikavyach@gmail.com",
  },
};

export const PROJECTS = [
  {
    id: 1,
    title: "Playverse – 3D Game Hub",
    category: "Full stack",
    description:
      "Full stack game platform with 4 playable 3D games, accounts, leaderboards and saved progress. Real-time multiplayer hide-and-seek runs on a server-authoritative Socket.IO game server with 11 tests, enemy AI (vision cones, A* path finding) and 5 themed worlds. Installs as a mobile PWA and Android app.",
    techStack: ["React", "TypeScript", "Babylon.js", "Node.js", "Express", "Socket.IO", "MongoDB", "PWA"],
    imgSrc: projectPlayverse,
    link: "https://github.com/kc-2705/playverse",
    live: "https://playverse-app.onrender.com",
  },
  {
    id: 2,
    title: "Job Hunt Copilot – AI Web App",
    category: "AI",
    description:
      "Shows job seekers how well they fit a role. An LLM pipeline pulls a posting's requirements and matches each one to resume bullets with hybrid search (embeddings plus keywords), and every model output is checked in code. 39 automated tests. DEV Hacktoberfest 2026 challenge entry with a published article.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "LLM APIs", "RAG", "Transformers.js"],
    imgSrc: projectJobHunt,
    link: "https://github.com/kc-2705/job-hunt-copilot",
    live: "https://job-hunt-copilot-web.onrender.com",
    article: "https://dev.to/kavyachowdary_immanni/job-hunt-copilot-stop-reading-job-posts-you-cant-apply-to-4a3j",
  },
  {
    id: 3,
    title: "Expenso – Personal Finance Tracker",
    category: "Full stack",
    description:
      "MERN app for income, expenses, budgets, recurring payments and bank CSV import, with charts, CSV/PDF export and a secure API (JWT, bcrypt, Zod validation, rate limiting) covered by automated tests and CI.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Ant Design", "React Query"],
    imgSrc: projectExpenso,
    link: "https://github.com/kc-2705/expense-management-app",
  },
  {
    id: 4,
    title: "Ask Past Me – Voice Journal",
    category: "Mobile",
    description:
      "Android voice journal: record your day, search past notes, or replay what you said on this day in past years. Works offline with SQLite full-text search, reminders and fingerprint lock.",
    techStack: ["React Native", "Expo", "TypeScript", "SQLite"],
    imgSrc: projectAskPastMe,
    link: "https://github.com/kc-2705/ask-past-me",
  },
  {
    id: 5,
    title: "OrderDesk – Order Dashboard",
    category: "Frontend",
    description:
      "React dashboard to create, filter and review orders, with validated forms and line items, status and date filters, sorting, order history and KPI cards.",
    techStack: ["React", "Vite", "React Router", "Ant Design"],
    imgSrc: projectOrderDesk,
    link: "https://github.com/kc-2705/orders-management-app",
    live: "https://kc-2705.github.io/orders-management-app/",
  },
  {
    id: 6,
    title: "Fun Web Projects",
    category: "Frontend",
    description:
      "Front-end experiments: a day-and-night flower garden, a five-game pocket arcade, a lamp-themed login and small animations in plain HTML, CSS and JavaScript.",
    techStack: ["JavaScript", "SVG", "Canvas", "CSS Animations"],
    imgSrc: projectFun,
    link: "https://github.com/kc-2705/fun-web-programming",
    live: "https://kc-2705.github.io/fun-web-programming/",
  },
  {
    id: 7,
    title: "Multiplayer Hand Cricket",
    category: "Games",
    description:
      "Networked hand cricket game in Python with Pygame graphics and a socket server that manages sessions, moves, scores and chat.",
    techStack: ["Python", "Pygame", "Sockets"],
    imgSrc: project2,
    link: "https://github.com/kc-2705/Hand-Cricket",
  },
  {
    id: 8,
    title: "Smart Home Energy Prediction",
    category: "Data",
    description:
      "Energy-use prediction on the GSHAM dataset with Decision Tree, Random Forest and LSTM models, evaluated with MAE/MSE and presented in Tableau dashboards.",
    techStack: ["Python", "LSTM", "Random Forest", "Tableau"],
    imgSrc: project4,
    imgContain: true,
    link: "https://github.com/kc-2705/Smart-home-Monitoring-system-using-GSHAM-Dataset",
  },
];

// Years of hands-on use, as confirmed by Kavya.
export const SKILL_GROUPS = [
  {
    title: "Frontend",
    items: [
      { name: "React", yrs: 5.5, icon: SiReact, color: "#149eca" },
      { name: "TypeScript", yrs: 3, icon: SiTypescript, color: "#3178c6" },
      { name: "JavaScript (ES6+)", yrs: 5.5, icon: SiJavascript, color: "#d4a20b" },
      { name: "HTML5 / CSS3 / Sass", yrs: 5.5, icon: SiHtml5, color: "#e34f26" },
      { name: "Redux Toolkit", yrs: 3, icon: SiRedux, color: "#764abc" },
      { name: "Ant Design", yrs: 3, icon: SiAntdesign, color: "#1677ff" },
    ],
    also: ["React Query", "React Router", "Next.js", "Vite", "Accessibility (WCAG 2.1)"],
  },
  {
    title: "Backend",
    items: [
      { name: "Java", yrs: 3.5, icon: FaJava, color: "#e76f00" },
      { name: "Spring Boot", yrs: 3.5, icon: SiSpringboot, color: "#6db33f" },
      { name: "Node.js", yrs: 4.5, icon: SiNodedotjs, color: "#5fa04e" },
      { name: "Express", yrs: 4.5, icon: SiExpress, color: "#1e293b" },
      { name: "Apache Kafka", yrs: 2.5, icon: SiApachekafka, color: "#1e293b" },
      { name: "Redis", yrs: 2.5, icon: SiRedis, color: "#dc382d" },
    ],
    also: ["REST API design", "OpenAPI", "Socket.IO", "TIBCO EMS/JMS"],
  },
  {
    title: "Databases",
    items: [
      { name: "SQL", yrs: 5, icon: FaDatabase, color: "#4f46e5" },
      { name: "SQL Server", yrs: 4, icon: FaDatabase, color: "#cc2927" },
      { name: "Oracle", yrs: 4, icon: SiOracle, color: "#c74634" },
      { name: "PostgreSQL", yrs: 4, icon: SiPostgresql, color: "#4169e1" },
      { name: "MongoDB", yrs: 4, icon: SiMongodb, color: "#47a248" },
    ],
    also: ["MySQL", "SuiteQL", "Schema design", "Indexing", "Query tuning"],
  },
  {
    title: "Testing & Quality",
    items: [
      { name: "JUnit 5 / Mockito", yrs: 3.5, icon: SiJunit5, color: "#25a162" },
      { name: "Jest", yrs: 3.5, icon: SiJest, color: "#c21325" },
      { name: "Playwright", yrs: 3.5, icon: TbTestPipe, color: "#2ead33" },
    ],
    also: ["React Testing Library", "Supertest", "Cypress", "axe-core", "Lighthouse", "Code reviews"],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "Git & GitHub", yrs: 5, icon: SiGit, color: "#f05032" },
      { name: "CI/CD pipelines", yrs: 4, icon: SiGithubactions, color: "#2088ff" },
      { name: "Docker", yrs: 3.5, icon: SiDocker, color: "#2496ed" },
      { name: "Azure (AKS, Key Vault)", yrs: 2.5, icon: VscAzure, color: "#0078d4" },
      { name: "AWS", yrs: 1, icon: FaAws, color: "#ff9900" },
      { name: "Splunk / Grafana", yrs: 2.5, icon: SiSplunk, color: "#1e293b" },
    ],
    also: ["Jenkins", "Maven", "Render", "Linux servers"],
  },
  {
    title: "Security & AI",
    items: [
      { name: "Auth (JWT, RBAC, OTP)", yrs: 3, icon: TbShieldLock, color: "#0f766e" },
      { name: "REST API security", yrs: 3, icon: TbApi, color: "#7c3aed" },
      { name: "LLM tool calling & RAG", yrs: 3, icon: TbBrain, color: "#db2777" },
    ],
    also: ["bcrypt", "Rate limiting", "Helmet / CORS", "HIPAA / PHI", "Claude Code", "GitHub Copilot"],
  },
];

export const EXPERIENCES = [
  {
    yearRange: "Feb 2026 – Present",
    role: "Software Developer, Full Stack",
    company: "Developmental Studies Hybridoma Bank (DSHB), University of Iowa",
    location: "Iowa City, IA",
    groups: [
      { title: "Frontend", points: [
        "Built the Depositor Portal in React, replacing email-and-spreadsheet submissions from labs worldwide.",
        "Wrote 30 reusable React components: deposit form, bulk CSV upload, admin dashboard, pricing editor.",
        "Built a 9-module admin platform (React, TypeScript, Ant Design, Recharts) for operations staff.",
        "Built a rule-based audience builder with live counts across 57,229 customers.",
        "Route guards in React that match the API's role-based access.",
      ]},
      { title: "Backend", points: [
        "Designed 60 Node.js/Express REST endpoints on SQL Server.",
        "Added real-time admin notifications with Socket.IO.",
        "Shipped an AI shopping assistant over 4,684 products with LLM tool calling and model fallback.",
        "Export engine turns approved deposits into NetSuite-ready catalog CSVs with SEO fields.",
        "SuiteQL to Google Sheets to Looker Studio reporting pipeline for leadership.",
      ]},
      { title: "Performance", points: [
        "Export engine runs at ~41,000 rows/second (1,000 products in 98 ms).",
        "Lighthouse desktop performance 97, with a 1.2 s largest contentful paint.",
        "Fixed a 12x revenue-reporting bug across 190,200 orders and $36.0M.",
        "Planned cuts of 202 KiB unused JavaScript and ~519 KiB of images for mobile.",
      ]},
      { title: "Testing & Security", points: [
        "50 Jest unit tests (82% coverage) and 22 Playwright end-to-end tests.",
        "WCAG 2.1 accessibility scans with axe-core.",
        "JWT, bcrypt, email OTP, role-based access and rate limiting on every endpoint.",
        "Caught a breaking CORS change in sandbox and patched production before go-live.",
      ]},
    ],
    techStack: ["React", "TypeScript", "Node.js", "Express", "SQL Server", "Socket.IO", "Jest", "Playwright", "NetSuite", "LLM APIs"],
  },
  {
    yearRange: "Aug 2023 – Jan 2026",
    role: "Software Engineer, Healthcare Claims Platform",
    company: "Optum, Inc.",
    location: "Remote",
    groups: [
      { title: "Frontend", points: [
        "Built React/TypeScript screens for claim search, claim history and work queues.",
        "Sped up large claim tables with list virtualization and memoization.",
      ]},
      { title: "Backend", points: [
        "Built Java 17/Spring Boot microservices for EDI 837 claims processing.",
        "Built claim status and history REST APIs with OpenAPI docs.",
        "Validation rules for ICD-10, CPT/HCPCS and NPI codes.",
        "Kafka producers and consumers with Avro schemas and backward-compatible changes.",
      ]},
      { title: "Performance", points: [
        "Redis caching for eligibility and reference-data lookups.",
        "Kafka retry topics and dead-letter handling to cut manual reprocessing.",
        "Tuned Kafka consumers to reduce lag at peak intake.",
        "Helped move a nightly batch claims workflow to event-driven processing.",
      ]},
      { title: "Testing, Security & Delivery", points: [
        "JUnit 5 and Mockito unit and integration tests.",
        "HIPAA data protection: log masking, encryption, audit logging, Key Vault secrets.",
        "Docker and Azure Kubernetes Service through CI/CD; on-call with Splunk and Grafana.",
        "Two-week Agile sprints, pull-request reviews and API docs in Confluence.",
      ]},
    ],
    techStack: ["Java 17", "Spring Boot", "React", "TypeScript", "Kafka", "Redis", "Docker", "AKS", "Splunk"],
  },
  {
    yearRange: "Aug 2021 – Nov 2022",
    role: "Associate Globalization Developer",
    company: "TIBCO Software Inc.",
    location: "Hyderabad, India",
    groups: [
      { title: "Backend", points: [
        "Java/Spring Boot services and REST APIs for a translation platform across ~10 languages.",
        "TIBCO EMS/JMS messaging with error queues and replay, so failed jobs recovered.",
        "Configured webhooks and vendor connectors for the translation management system.",
      ]},
      { title: "Frontend & i18n", points: [
        "AST scanners (JavaParser, ESLint) that catch hard-coded strings in Java and React.",
        "Arabic right-to-left layouts and locale-aware date and number formats.",
        "Code reviews for internationalization issues before translation.",
      ]},
      { title: "Performance & Quality", points: [
        "Faster translation jobs with thread pools, JVM tuning and fewer JPA queries.",
        "File validators for XLIFF, JSON and .properties; fixed ~10-15 defects a week.",
        "Builds and deploys with Maven, Jenkins and Docker on AWS.",
      ]},
    ],
    techStack: ["Java", "Spring Boot", "Spring Data JPA", "Oracle", "TIBCO EMS/JMS", "Jenkins", "AWS"],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "M.S. in Computer Science",
    institution: "Saint Louis University, St. Louis, Missouri",
    duration: "2023 – Dec 2024",
    gpa: "GPA 3.86 / 4.0",
    courses: "Artificial Intelligence, Distributed Computing, Software Architecture, Algorithms, Principles of Software Development, Data Analytics and IoT",
  },
  {
    id: 2,
    degree: "B.Tech in Computer Science",
    institution: "Gokaraju Rangaraju Institute of Engineering & Technology, Hyderabad",
    duration: "2017 – Jul 2021",
    gpa: "GPA 3.68 / 4.0 (9.2 / 10)",
    courses: "Data Structures, DBMS, Operating Systems, OOP with Java, Web Technologies, Cloud Computing, Data Mining",
  },
];

export const CERTIFICATIONS = [
  "AI Application Development with Gemini & Claude (Udemy, 2026)",
  "Advanced Design Patterns: Design Principles and SOLID (LinkedIn Learning, 2026)",
  "Hacktoberfest 2026 Challenge Completion, DEV Community (Oct 2026)",
];

export const INTERNSHIPS = [
  {
    yearRange: "Feb 2023 – Aug 2023", role: "Software Developer", company: "Join Hands ESL", location: "USA",
    groups: [
      { title: "Website (WordPress)", points: [
        "Handled website changes and content updates on the organization's WordPress site.",
        "Customized the theme and page layouts with PHP, HTML, CSS and jQuery, using the WPBakery page builder.",
        "Installed, configured and updated plugins (Contact Form 7, Revolution Slider, Essential Grid, reCAPTCHA).",
        "Used WordPress hooks and filters in PHP to change how pages and forms behave without editing core files.",
      ]},
      { title: "Online admissions", points: [
        "Replaced paper admission forms for new students (boys' and girls' programs) with an online form built on Contact Form 7.",
        "Added field validation and Google reCAPTCHA spam protection.",
        "Set up email notifications to staff and confirmation emails to applicants for every submitted form.",
        "Mapped the paper admission steps with staff and turned them into a simpler online flow families finish in one go.",
      ]},
    ],
    techStack: ["WordPress", "PHP", "Theme customization", "Plugins", "Hooks & filters", "Contact Form 7", "WPBakery", "jQuery", "HTML/CSS", "reCAPTCHA"],
  },
  {
    yearRange: "Jan 2021 – Aug 2021", role: "Graduate Engineer Trainee", company: "NPCI", location: "India",
    groups: [
      { title: "Development", points: [
        "Supported the development team on fintech and payments applications.",
        "Built and fixed features with React and JavaScript on the front end and Java/Spring Boot services on the back end.",
        "Worked with Kafka messaging during development and support.",
      ]},
      { title: "Bank support & automation", points: [
        "Investigated transaction issues raised by partner banks with SQL queries on Linux servers, tracing what happened and why.",
        "Wrote shell scripts that run the full set of transaction-lookup queries with one command, so every bank request was checked faster and the same way.",
      ]},
    ],
    techStack: ["React", "JavaScript", "Java", "Spring Boot", "SQL", "Linux", "Shell scripting", "Kafka", "Fintech"],
  },
];
