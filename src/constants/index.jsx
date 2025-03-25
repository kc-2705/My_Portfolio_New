import project1 from "../assets/project-expense.png";
import project2 from "../assets/handcricket.webp";
import project3 from "../assets/portfolio1.jpg";
import project4 from "../assets/smarthome.jfif";

import { 
  RiHtml5Line, RiCss3Line, RiJavascriptLine, RiReactjsLine, RiCodeSSlashLine, RiNodeTree, 
  RiDatabaseLine, RiGitBranchLine, RiAmazonLine, RiTerminalBoxLine, RiShieldUserLine, 
  RiLockPasswordLine, RiToolsLine, RiServerLine 
} from "react-icons/ri";

import { 
  FaBootstrap, FaJava, FaPython, FaGitAlt, FaGithub, FaAws, FaDocker, FaJenkins, FaJira, 
  FaNetworkWired 
} from "react-icons/fa";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Kavya Chowdary Immanni",
  role: "Software Developer / Frontend Developer / Java Developer / Full-Stack Developer",
  subheading:
    "Skilled front-end developer and software engineer with expertise in building dynamic, responsive web applications using React.js, JavaScript, HTML5, CSS3, and in developing robust back-end solutions with Java, Spring boot and Nodejs."
};

export const PROJECTS = [
  {
    id: 1,
    title: "Expense Management Website",
    description:
      "Developed a full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application focused on personal finance management. Designed a responsive user interface with React.js, allowing users to filter transactions by type and frequency. Integrated interactive charts using libraries like Chart.js to visualize expenses and income trends.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
    imgSrc: project1,
    link: "https://github.com/kc-2705/expense-management-app",
  },
  {
    id: 2,
    title: "Multiplayer Hand Cricket Game with Chat Application ",
    description:
      "Developed a multiplayer hand cricket game in Python using Pygame for graphics and socket programming for networking. Managed game sessions, player moves, and scores through a server, providing a graphical interface for player input and game information.",
    techStack: ["Python", "Pygames", "Socket"],
    imgSrc: project2,
    link: "https://github.com/kc-2705/Hand-Cricket",
  },
  {
    id: 3,
    title: "Smart Home Monitoring System using GSHAM Dataset ",
    description:
      "Designed and implemented a Smart Home Monitoring System using the GSHAM dataset with Decision Tree regression, Random Forest regression, and LSTM models. Conducted EDA and data preprocessing with Min-Max scaling. Achieved high performance metrics like MAE and MSE through effective data splitting for training and testing. Created Tableau visualizations to present insights, demonstrating proficiency in big data analytics and data science algorithms",
    techStack: ["Python", "Regression Model", "LSTM", "Tableau"],
    imgSrc: project4,
    link: "https://github.com/kc-2705/Smart-home-Monitoring-system-using-GSHAM-Dataset",
  },
];

export const SKILLS = [
  { name: "HTML5", icon: <RiHtml5Line className="text-orange-600" /> },
  { name: "CSS3", icon: <RiCss3Line className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <RiCodeSSlashLine className="text-teal-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
  { name: "JavaScript (ES6+)", icon: <RiJavascriptLine className="text-yellow-500" /> },
  { name: "React.js", icon: <RiReactjsLine className="text-blue-400" /> },
  { name: "TypeScript", icon: <RiCodeSSlashLine className="text-blue-600" /> },
  { name: "Next.js", icon: <RiReactjsLine className="text-blue-900" /> },
  { name: "Node.js", icon: <RiNodeTree className="text-green-500" /> },
  { name: "Express.js", icon: <RiServerLine className="text-green-700" /> },
  { name: "Java", icon: <FaJava className="text-red-600" /> },
  { name: "Spring Boot", icon: <RiServerLine className="text-green-700" /> },
  { name: "Python", icon: <FaPython className="text-blue-400" /> },
  { name: "SQL", icon: <RiDatabaseLine className="text-blue-600" /> },
  { name: "MySQL", icon: <RiDatabaseLine className="text-blue-500" /> },
  { name: "PostgreSQL", icon: <RiDatabaseLine className="text-blue-800" /> },
  { name: "MongoDB", icon: <RiDatabaseLine className="text-green-600" /> },
  { name: "REST APIs", icon: <RiServerLine className="text-orange-800" /> },
  { name: "Postman", icon: <RiToolsLine className="text-orange-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-green" /> },
  { name: "AWS", icon: <FaAws className="text-yellow-500" /> },
  { name: "Jenkins", icon: <FaJenkins className="text-red-600" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
  { name: "Kubernetes", icon: <FaNetworkWired className="text-blue-600" /> },
  { name: "Microservices Architecture", icon: <RiServerLine className="text-blue-700" /> },
  { name: "OAuth", icon: <RiShieldUserLine className="text-teal-500" /> },
  { name: "JWT", icon: <RiLockPasswordLine className="text-yellow-500" /> },
  { name: "Agile", icon: <RiToolsLine className="text-orange-700" /> },
  { name: "Scrum", icon: <RiToolsLine className="text-orange-700" /> },
  { name: "Kanban", icon: <RiToolsLine className="text-orange-700" /> },
  { name: "Jira", icon: <FaJira className="text-blue-600" /> },
];

export const EXPERIENCES = [
  {
    yearRange: "Apr 2024 - Nov 2024",
    role: "Software Engineer",
    company: "Capital One",
    description: [
      "Designed and developed microservices-based backend applications using Java (Spring Boot), Hibernate, and RESTful APIs, enabling seamless financial transactions for banking clients and efficient order processing for ecommerce platforms.",
      "Optimized database queries & implemented strategies in PostgreSQL & MongoDB, improving query time by 20%, ensuring faster payment processing in banking applications & real-time inventory updates in e-commerce.",
      "Integrated secure authentication and authorization mechanisms using OAuth2, JWT, and Spring Security, enhancing fraud prevention in banking transactions and securing user data for e-commerce platforms.",
      "Enhanced API performance by implementing caching mechanisms & asynchronous processing using Java Concurrency, reducing response times by 30% for loan approvals in banking and checkout flows in e-commerce.", 
      "Developed event-driven architecture using Kafka and RabbitMQ, enabling real-time transaction monitoring for banking firms and improving order tracking systems for e-commerce clients." ,
      "Collaborated with DevOps teams to automate CI/CD pipelines using Jenkins, Docker, & Kubernetes, reducing deployment time by 40%, ensuring high availability for banking & smooth seasonal scaling for e-commerce traffic.",
    ],
    techStack: ["Javascript ES6", "React.js", "RESTful APIs", "Jira", "Java (Spring boot)", "Hibernate", "PostgreSQL", "MongoDB", "Query Optimization", "OAuth2, JWT", "Caching Mechanisms", "Asynchronous Processing", "CI/CD Pipelines", "Docker & Kubernetes"],
  },
  {
    yearRange: "Jan 2022 - Dec 2022",
    role: "Software Engineer",
    company: "Cloud Software Group",
    description: [
      "Developed highly responsive web applications using React.js, JavaScript (ES6), HTML5, CSS3, and Material UI, ensuring cross-browser compatibility and optimal user experience.",
      "Designed and implemented reusable, modular UI components, improving code maintainability and reducing development time by 40% for dynamic content-driven applications.", 
      "Integrated RESTful APIs with frontend components, optimizing data fetching and state management using React Query and Redux, leading to a 25% improvement in page load speed.", 
      "Developed and optimized server-side components in Java (Spring Boot) for backend integration, enhancing system scalability and reducing API response time by 30%.", 
      "Enhanced localization support by implementing an automated i18n framework, reducing translation deployment time from 3-4 weeks to 4-5 days, improving global accessibility.",
      "Implemented unit and integration testing using Jest, React Testing Library, and JUnit, ensuring high code coverage and minimizing production defects by 50%.", 
      "Utilized JIRA and Agile methodologies for sprint planning, issue tracking, and feature prioritization, accelerating development cycles and ensuring on-time project delivery. ",
    ],
    techStack: ["React.js (JavaScript ES6)", "HTML5, CSS3, Material UI (UI Design & Styling)", "React Query, Redux (State Management)", "Jest, JUnit, React Testing Library (Unit & Integration Testing)", "Java (Spring Boot) ", "RESTful APIs (API Development & Integration),", "JIRA", "Agile Methodologies(Scrum/Kanban)"],
  },
  {
    yearRange: "Aug 2021 - Dec 2021",
    role: "Associate Software Engineer",
    company: "NPCI",
    description: [
      "Developed and optimized dynamic SQL queries using Java JDBC, enhancing database interaction efficiency and reducing query execution time by 15%, ensuring faster transaction processing for banking clients.",
      "Built and maintained responsive UI dashboards and data entry forms using React.js, JavaScript (ES6), HTML5, CSS3, and Java, streamlining internal workflows and improving data entry efficiency by 30%." ,
      " Integrated email notifications using Java and Spring Boot, automating transactional alerts for banking clients, reducing manual intervention and improving customer engagement.",
      "Collaborated with UX teams to improve UI/UX of internal banking applications, ensuring accessibility and seamless navigation, leading to a 20% reduction in user-reported issues.",
      "Designed and implemented a real-time fraud detection dashboard for an E-commerce client, leveraging Java and React.js, reducing fraudulent transactions by 25% through enhanced visibility and monitoring.",
      "Resolved high-priority performance issues for a banking client’s loan processing system, optimizing Java-based backend services and reducing API response time by 35%, ensuring faster loan approvals.",
      "Enhanced checkout flow for a leading E-commerce platform by optimizing frontend state management & integrating secure payment APIs, reducing checkout errors by 40% & boosting successful transactions.", 
      "Led the migration of legacy JSP pages to React.js, modernizing UI components for banking portals and improving page load times by 50%, ensuring a smoother customer experience.",
    ],
    techStack: ["React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Java (JDBC, Spring Boot)", "SQL (Dynamic SQL Queries, Query Optimization) ", "API Optimization (Java-based Backend Services)", "PostgreSQL, MySQL", "REST APIs", "OAuth & JWT", "AWS", "Docker & Kubernetes"],
  },
];


export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "GRIET, India",
    duration: "2017 - 2021",
    cgpa: 3.7,
    courses: "COURSES: Linear Algebra, Advanced Calculus, Probability and statistics, DBMS, Advanced Data Structures, Operating Systems, Object oriented programming through Java, Web Technologies, Cloud Computing, Data warehousing and Data mining, Unified Modeling Language ", 
  },
  {
    id: 2,
    degree: "Master of Science in Computer Science",
    institution: "Saint Louis University, MO",
    duration: "2023 - 2024",
    cgpa: 3.86,
    courses:
      "COURSES: Introduction to Artificial Intelligence, Data Analytics and Internet of Things, Principles of software Development, Distributed Computing, Software Architecture, Algorithms.",
  },
];

