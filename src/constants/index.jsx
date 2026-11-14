import projectPlayverse from "../assets/project-playverse.jpg";
import projectJobHunt from "../assets/project-jobhunt.png";
import projectExpenso from "../assets/project-expenso.png";
import projectAskPastMe from "../assets/project-askpastme.jpg";
import projectOrderDesk from "../assets/project-orderdesk.png";
import projectFun from "../assets/project-fun.png";
import project2 from "../assets/handcricket.webp";
import project4 from "../assets/smarthome.jfif";
import {
  SiReact, SiTypescript, SiJavascript, SiHtml5, SiRedux, SiNodedotjs, SiExpress,
  SiSpringboot, SiApachekafka, SiRedis, SiPostgresql, SiMysql, SiMongodb, SiOracle,
  SiJest, SiJunit5, SiDocker, SiGit, SiGithubactions, SiSplunk, SiAntdesign,
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
    "Full stack engineer with 5 years of experience building production systems end to end with React, TypeScript, Node.js, Java/Spring Boot and SQL, from database design to Linux deployment. I also build NetSuite integrations and AI features with LLM tool calling.",
  highlights: [
    { value: "5 yrs", label: "building software" },
    { value: "60+", label: "API endpoints I own" },
    { value: "72", label: "automated tests on my portal" },
    { value: "$36M", label: "revenue in my dashboard" },
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
      { name: "HTML5 / CSS3 / SCSS", yrs: 5.5, icon: SiHtml5, color: "#e34f26" },
      { name: "Redux Toolkit", yrs: 3, icon: SiRedux, color: "#764abc" },
      { name: "Ant Design", yrs: 3, icon: SiAntdesign, color: "#1677ff" },
    ],
    also: ["Next.js", "React Query", "Vite", "Material-UI", "Recharts", "Backbone.js", "Handlebars", "Accessibility (WCAG 2.1)"],
  },
  {
    title: "Backend",
    items: [
      { name: "Java 17", yrs: 3.5, icon: FaJava, color: "#e76f00" },
      { name: "Spring Boot", yrs: 3.5, icon: SiSpringboot, color: "#6db33f" },
      { name: "Node.js", yrs: 4.5, icon: SiNodedotjs, color: "#5fa04e" },
      { name: "Express", yrs: 4.5, icon: SiExpress, color: "#1e293b" },
      { name: "Apache Kafka", yrs: 2.5, icon: SiApachekafka, color: "#1e293b" },
      { name: "Redis", yrs: 2.5, icon: SiRedis, color: "#dc382d" },
    ],
    also: ["REST APIs", "GraphQL", "Spring Data JPA", "Hibernate", "Spring Security", "WebSockets (Socket.IO)", "Python", "TIBCO EMS/JMS"],
  },
  {
    title: "Databases",
    items: [
      { name: "SQL Server", yrs: 4, icon: FaDatabase, color: "#cc2927" },
      { name: "PostgreSQL", yrs: 4, icon: SiPostgresql, color: "#4169e1" },
      { name: "Oracle", yrs: 4, icon: SiOracle, color: "#c74634" },
      { name: "MySQL", yrs: 4, icon: SiMysql, color: "#4479a1" },
      { name: "MongoDB", yrs: 4, icon: SiMongodb, color: "#47a248" },
    ],
    also: ["SuiteQL", "Sequelize", "Stored procedures", "Query tuning", "Schema design"],
  },
  {
    title: "Integrations",
    items: [
      { name: "NetSuite (SuiteScript 2.x)", yrs: 1, icon: TbApi, color: "#125580" },
      { name: "EDI X12 837 / HL7 / FHIR", yrs: 2.5, icon: FaDatabase, color: "#0f766e" },
      { name: "LLM APIs", yrs: 1, icon: TbBrain, color: "#db2777" },
    ],
    also: ["RESTlets", "User Event Scripts", "SuiteFlow", "DocuSign API", "Celigo", "Webhooks", "SFTP"],
  },
  {
    title: "Testing & Security",
    items: [
      { name: "Jest", yrs: 3.5, icon: SiJest, color: "#c21325" },
      { name: "Playwright", yrs: 3.5, icon: TbTestPipe, color: "#2ead33" },
      { name: "JUnit 5 / Mockito", yrs: 3.5, icon: SiJunit5, color: "#25a162" },
      { name: "OAuth2 / JWT / RBAC", yrs: 3, icon: TbShieldLock, color: "#0f766e" },
    ],
    also: ["Mocha", "Chai", "Selenium", "Postman", "axe-core", "LDAP", "bcrypt", "HIPAA"],
  },
  {
    title: "DevOps & Tools",
    items: [
      { name: "Git & GitHub", yrs: 5, icon: SiGit, color: "#f05032" },
      { name: "CI/CD (GitHub Actions, Jenkins)", yrs: 4, icon: SiGithubactions, color: "#2088ff" },
      { name: "Docker", yrs: 3.5, icon: SiDocker, color: "#2496ed" },
      { name: "Azure (AKS)", yrs: 2.5, icon: VscAzure, color: "#0078d4" },
      { name: "AWS", yrs: 1, icon: FaAws, color: "#ff9900" },
      { name: "Splunk / Grafana", yrs: 2.5, icon: SiSplunk, color: "#1e293b" },
    ],
    also: ["Linux", "systemd", "Bash", "PowerShell", "Jira", "Confluence", "GitHub Copilot", "Claude Code"],
  },
];

export const EXPERIENCES = [
  {
    yearRange: "Feb 2026 – Present",
    role: "Application Developer, Full Stack",
    company: "Developmental Studies Hybridoma Bank (DSHB), University of Iowa",
    location: "Iowa City, IA",
    groups: [
      { title: "Depositor Portal", points: [
        "Designed, built and deployed the portal research labs worldwide use to submit antibodies, and own it in production.",
        "React, Node.js/Express and SQL Server with a 60+ endpoint REST API.",
        "30 React components, including a multi-step submission form with drafts and bulk Excel/CSV upload.",
        "Real-time admin notifications over WebSockets (Socket.IO).",
        "JWT role-based access, email OTP, bcrypt (zero-downtime password migration) and API rate limiting.",
      ]},
      { title: "NetSuite & Integrations", points: [
        "Leading the intake-to-catalog modernization: portal signups create NetSuite CRM records through RESTlets.",
        "User Event scripts and SuiteFlow workflows assign catalog IDs when records are created.",
        "Weekly Descartes compliance screening over SFTP with encrypted credentials and failure alerts.",
        "DocuSign eSignature API in the storefront, and NetSuite connections to Celigo and Bioz.",
        "Maintain the storefront for ~5,000 antibodies (SuiteCommerce Advanced, Backbone.js, Handlebars, SCSS); replaced a paid search vendor with native search.",
      ]},
      { title: "Performance & Data", points: [
        "Financial dashboard over 190K+ sales orders and $36M revenue: load time cut from ~3 minutes to a few seconds.",
        "Found and fixed a caching defect that inflated reported revenue 12x.",
        "Node.js export engine writes NetSuite import files at ~45,000 rows/second, tracked by a p95 benchmark suite.",
        "Python ETL loads 1M+ ERP records into PostgreSQL in under 10 minutes.",
        "SuiteQL to Google Sheets to Looker Studio feed for leadership reports.",
      ]},
      { title: "DevOps, Testing & AI", points: [
        "On-prem Linux production with systemd, Bash/PowerShell release scripts, atomic deploys, rollback and health checks.",
        "Self-hosted NocoDB in Docker for staff data access.",
        "50 Jest unit/API tests (82% coverage), 22 Playwright end-to-end tests with axe-core, Lighthouse baselines.",
        "AI product assistant prototype with LLM APIs (Llama via Groq), tool calling and model fallback.",
      ]},
    ],
    techStack: ["React", "TypeScript", "Node.js", "Express", "SQL Server", "NetSuite", "Python", "PostgreSQL", "Linux", "LLM APIs"],
  },
  {
    yearRange: "Aug 2023 – Jan 2026",
    role: "Software Engineer, Healthcare Claims Platform",
    company: "Optum, Inc.",
    location: "Remote",
    groups: [
      { title: "Backend", points: [
        "Java 17/Spring Boot microservices that parse EDI X12 837 claims through intake, validation, eligibility and adjudication.",
        "Validation rules for ICD-10, CPT/HCPCS and NPI codes.",
        "15–25 REST and GraphQL endpoints for claim status and history, with OpenAPI docs.",
        "Kafka producers and consumers with idempotency, retry topics and dead-letter queues, so failed claims recovered automatically.",
      ]},
      { title: "Frontend", points: [
        "React and Material-UI screens for claim search, history and pended-claim work queues.",
        "Reusable tables with sorting, filtering, pagination and virtualization for large result sets.",
      ]},
      { title: "Performance & Reliability", points: [
        "Part of a team effort that cut service latency by 35%.",
        "JVM tuning, thread pools and async processing, contributing to 3x API throughput at peak load.",
        "Splunk and Grafana dashboards with alerting, contributing to a 15% uptime increase.",
        "On-call: resolved 10–15 production incidents a week.",
      ]},
      { title: "Security & Delivery", points: [
        "OAuth2, JWT and Spring Security following OWASP; HIPAA encryption, audit logging and masking.",
        "Docker on Azure Kubernetes Service through Jenkins and GitHub Actions, with health-check rollback.",
        "JUnit 5 and Mockito tests on every build.",
        "Python data-check scripts, NetSuite RESTlet integrations, HL7/FHIR mapping, Tableau dashboards.",
      ]},
    ],
    techStack: ["Java 17", "Spring Boot", "React", "TypeScript", "Node.js", "Kafka", "Redis", "EDI 837", "Docker", "AKS", "Splunk"],
  },
  {
    yearRange: "Aug 2021 – Nov 2022",
    role: "Associate Globalization Developer, i18n & Localization",
    company: "TIBCO Software Inc.",
    location: "Hyderabad, India",
    groups: [
      { title: "MOLEE localization framework", points: [
        "Built MOLEE, cutting localization turnaround from 3–4 weeks to 4–5 days.",
        "Web app from scratch in React and ES6 with a Spring Boot back end: dashboards, review editor, search, role-based routing.",
        "Node.js/Express microservices on MySQL with Sequelize; Gmail and LDAP sign-in with Passport.js.",
      ]},
      { title: "Translation & i18n", points: [
        "Google and Amazon machine translation APIs cut translation costs from thousands of dollars to a few hundred.",
        "Text-to-speech with Google Cloud TTS and Amazon Polly for tutorial videos.",
        "i18n for 6 languages (react-intl, cldr.js, moment.js), including Arabic right-to-left layouts.",
      ]},
      { title: "Reliability & Quality", points: [
        "TIBCO EMS/JMS processing with error queues and replay, plus multithreading and JVM tuning.",
        "Fixed ~10–15 i18n defects a week; builds with Maven, Jenkins and Bash to Docker on AWS.",
        "Mocha/Chai, Postman and Selenium tests; scripts that migrated thousands of documents.",
      ]},
    ],
    techStack: ["Java", "Spring Boot", "React", "Node.js", "Oracle", "SQL Server", "TIBCO EMS/JMS", "Jenkins", "AWS"],
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
