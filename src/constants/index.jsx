import projectExpenso from "../assets/project-expenso.png";
import projectAskPastMe from "../assets/project-askpastme.png";
import projectOrderDesk from "../assets/project-orderdesk.png";
import projectFun from "../assets/project-fun.png";
import project2 from "../assets/handcricket.webp";
import project4 from "../assets/smarthome.jfif";
import {
  SiTypescript, SiJavascript, SiHtml5, SiCss3, SiReact, SiTailwindcss, SiAntdesign, SiJquery,
  SiNodedotjs, SiExpress, SiSpringboot, SiPostman, SiJsonwebtokens, SiMysql, SiPostgresql,
  SiMongodb, SiRedis, SiAmazonec2, SiAmazons3, SiDocker, SiLinux, SiJest, SiJunit5, SiGit,
  SiGithub, SiGitlab, SiJira, SiConfluence, SiOracle, SiGoogleanalytics, SiGoogletagmanager,
  SiGooglesearchconsole, SiGithubcopilot,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import {
  TbApi, TbShieldLock, TbDatabaseCog, TbTestPipe, TbRocket, TbUsersGroup, TbFileText,
  TbChartBar, TbDeviceMobile, TbSql, TbBolt,
} from "react-icons/tb";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Kavya Chowdary Immanni",
  role: "Full-Stack Software Developer · React · Node.js · Java",
  subheading:
    "Full-stack developer with 5 years of experience building web applications, REST APIs and business systems with TypeScript, React, Node.js/Express, Java/Spring Boot and SQL/NoSQL databases, from requirements and design through testing, deployment and production support.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Expenso – Personal Finance Tracker",
    description:
      "Full-stack MERN app to track income and expenses, set monthly budgets per category, automate recurring payments and import bank CSVs. Dashboard with monthly comparisons and charts, CSV and PDF export, dark mode, and a secure API with JWT, bcrypt, Zod validation, rate limiting and automated API tests.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Ant Design", "React Query", "JWT"],
    imgSrc: projectExpenso,
    link: "https://github.com/kc-2705/expense-management-app",
  },
  {
    id: 2,
    title: "Ask Past Me – Voice Journal App",
    description:
      "Android voice journal built with React Native. Speak about your day and the app transcribes it, tags people, places, moods and to-dos, and answers plain-English questions about your past notes. Works fully offline with SQLite full-text search, reminders and fingerprint lock.",
    techStack: ["React Native", "Expo", "TypeScript", "SQLite"],
    imgSrc: projectAskPastMe,
    imgContain: true,
    link: "https://github.com/kc-2705/ask-past-me",
  },
  {
    id: 3,
    title: "OrderDesk – Order Management Dashboard",
    description:
      "React dashboard to create, filter and review customer orders. Includes order forms with validation and line items, status and date filters, sorting, order history, KPI cards and a collapsible sidebar layout.",
    techStack: ["React", "Vite", "React Router", "Ant Design"],
    imgSrc: projectOrderDesk,
    link: "https://github.com/kc-2705/orders-management-app",
  },
  {
    id: 4,
    title: "Multiplayer Hand Cricket Game with Chat Application",
    description:
      "Developed a multiplayer hand cricket game in Python using Pygame for graphics and socket programming for networking. Managed game sessions, player moves, and scores through a server, providing a graphical interface for player input and game information.",
    techStack: ["Python", "Pygame", "Sockets"],
    imgSrc: project2,
    link: "https://github.com/kc-2705/Hand-Cricket",
  },
  {
    id: 5,
    title: "Smart Home Monitoring System using GSHAM Dataset",
    description:
      "Designed and implemented a Smart Home Monitoring System using the GSHAM dataset with Decision Tree regression, Random Forest regression, and LSTM models. Conducted EDA and data preprocessing with Min-Max scaling, measured results with MAE and MSE, and created Tableau visualizations to present insights.",
    techStack: ["Python", "Regression Models", "LSTM", "Tableau"],
    imgSrc: project4,
    link: "https://github.com/kc-2705/Smart-home-Monitoring-system-using-GSHAM-Dataset",
  },
  {
    id: 6,
    title: "Fun Web Projects",
    description:
      "A collection of creative front-end experiments: a three.js 3D endless runner, an interactive day-and-night flower garden, a five-game pocket arcade, and small animation pieces built with plain HTML, CSS and JavaScript.",
    techStack: ["JavaScript", "three.js", "Canvas", "CSS Animations"],
    imgSrc: projectFun,
    link: "https://github.com/kc-2705/fun-web-programming",
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
      { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "Ant Design", icon: <SiAntdesign className="text-blue-500" /> },
      { name: "jQuery / AJAX", icon: <SiJquery className="text-blue-300" /> },
      { name: "Responsive Design", icon: <TbDeviceMobile className="text-pink-300" /> },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-stone-200" /> },
      { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
      { name: "REST API Design", icon: <TbApi className="text-orange-300" /> },
      { name: "JWT Auth", icon: <SiJsonwebtokens className="text-pink-400" /> },
      { name: "RBAC", icon: <TbShieldLock className="text-teal-300" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    ],
  },
  {
    title: "Databases & Performance",
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-sky-400" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Redis", icon: <SiRedis className="text-red-500" /> },
      { name: "Schema Design & Indexing", icon: <TbDatabaseCog className="text-purple-300" /> },
      { name: "Query Optimization", icon: <TbBolt className="text-yellow-300" /> },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      { name: "AWS", icon: <FaAws className="text-orange-400" /> },
      { name: "EC2", icon: <SiAmazonec2 className="text-orange-400" /> },
      { name: "S3", icon: <SiAmazons3 className="text-red-400" /> },
      { name: "Azure Blob Storage", icon: <VscAzure className="text-sky-400" /> },
      { name: "Docker", icon: <SiDocker className="text-sky-500" /> },
      { name: "Linux", icon: <SiLinux className="text-yellow-200" /> },
    ],
  },
  {
    title: "Testing & DevOps",
    skills: [
      { name: "Jest", icon: <SiJest className="text-red-400" /> },
      { name: "JUnit", icon: <SiJunit5 className="text-green-400" /> },
      { name: "API & Integration Testing", icon: <TbTestPipe className="text-lime-300" /> },
      { name: "CI/CD", icon: <TbRocket className="text-pink-300" /> },
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
      { name: "GitHub", icon: <SiGithub className="text-stone-100" /> },
      { name: "GitLab", icon: <SiGitlab className="text-orange-400" /> },
    ],
  },
  {
    title: "Collaboration",
    skills: [
      { name: "Jira", icon: <SiJira className="text-blue-400" /> },
      { name: "Confluence", icon: <SiConfluence className="text-blue-300" /> },
      { name: "Agile / Scrum", icon: <TbUsersGroup className="text-purple-300" /> },
      { name: "Technical Docs", icon: <TbFileText className="text-stone-200" /> },
    ],
  },
  {
    title: "Enterprise, Analytics & AI Tools",
    skills: [
      { name: "NetSuite & SuiteScript 2.x", icon: <SiOracle className="text-red-500" /> },
      { name: "SuiteAnalytics & Saved Searches", icon: <TbChartBar className="text-red-300" /> },
      { name: "Google Analytics 4", icon: <SiGoogleanalytics className="text-amber-400" /> },
      { name: "Google Tag Manager", icon: <SiGoogletagmanager className="text-blue-400" /> },
      { name: "Search Console", icon: <SiGooglesearchconsole className="text-sky-300" /> },
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
      "Design and build internal and external web applications with TypeScript, React, Node.js/Express and MySQL, taking features from requirements and database design through testing, deployment and production support.",
      "Developed the DSHB Depositor Portal (TypeScript/React frontend, layered Node.js/Express REST API, MySQL), letting external researchers submit antibody and hybridoma deposits and track review status online.",
      "Designed REST endpoints with JWT authentication and role-based access control, using Express middleware to scope researchers to their own records while authorized staff manage broader datasets.",
      "Normalized researcher, institution, antibody/antigen and review data into related MySQL tables with foreign keys and indexes, and added connection pooling to keep search and status pages responsive.",
      "Built internal React/TypeScript tools that turned manual, spreadsheet-based processes into web forms, dashboards and data-management workflows for staff.",
      "Developed NetSuite integrations with SuiteScript, jQuery, AJAX and RESTlets, and a React blog interface that reads NetSuite records so non-technical staff can publish website content without code changes.",
      "Administer NetSuite users, roles, permissions, custom fields, forms, saved searches and scheduled reports supporting orders, deposits and fulfillment.",
      "Deployed a self-hosted NocoDB environment with Docker, giving staff a filterable interface to operational data without ad hoc developer queries.",
    ],
    techStack: ["TypeScript", "React", "Node.js", "Express", "MySQL", "JWT & RBAC", "NetSuite", "SuiteScript", "Docker"],
  },
  {
    yearRange: "Aug 2023 - Jan 2026",
    role: "Application Developer",
    company: "Optum Rx",
    location: "Remote",
    description: [
      "Developed and supported full-stack healthcare applications with React, Tailwind CSS, Ant Design, Node.js/Express, MongoDB and Redis, giving pharmacy fulfillment teams one view of medication inventory, prescription dispatches, shipments and home-delivery status.",
      "Built REST APIs for medication intake, inventory updates, prescription dispatch, shipment tracking and delivery status, with request validation, authentication, authorization and consistent error handling.",
      "Followed HIPAA-focused data handling and access-control practices, limiting access by user responsibility and minimizing exposure of sensitive information.",
      "Designed MongoDB collections for medications, inventory transactions, dispatch orders and delivery history, with compound indexes on frequently filtered fields.",
      "Added Redis caching for frequently requested inventory and dispatch metrics, with explicit cache invalidation after updates to keep dashboards current.",
      "Containerized Node.js services and MongoDB/Redis with Docker and supported deployments on AWS (EC2, S3, CloudWatch, IAM) through CI/CD pipelines across dev, test and production.",
      "Investigated production issues by tracing requests across React, Node.js, MongoDB and Redis using application and CloudWatch logs, then shipped verified fixes with automated API tests to prevent regressions.",
    ],
    techStack: ["React", "Tailwind CSS", "Ant Design", "Node.js", "Express", "MongoDB", "Redis", "Docker", "AWS", "CI/CD"],
  },
  {
    yearRange: "Aug 2021 - Nov 2022",
    role: "Associate Globalization Developer",
    company: "TIBCO Software (now Cloud Software Group)",
    location: "Hyderabad, India",
    description: [
      "Developed backend services in Java and Spring Boot for MOLEE, an internal translation-management platform, with separate service, business and data-access layers.",
      "Designed and maintained REST APIs connecting the platform with internal build systems and external translation vendors, handling JSON/XML payloads, validation, errors and job status updates.",
      "Built Java processing components for XLIFF, .properties and JSON files that validated structure, required keys and character encoding before files moved downstream.",
      "Used Spring Data JPA and SQL to track translation records and project/language status, and improved processing performance by consolidating queries and removing repeated work.",
      "Developed and tested services in AWS (EC2, S3, CloudWatch), containerized them with Docker, and supported CI/CD builds through development and staging.",
      "Wrote unit and integration tests for Spring Boot services and APIs, and worked with QA to reproduce and fix localization, encoding, date/number formatting and UI text defects.",
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

