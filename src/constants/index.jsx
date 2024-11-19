import project1 from "../assets/project-expense.png";
import project2 from "../assets/handcricket.webp";
import project3 from "../assets/portfolio1.jpg";
import project4 from "../assets/smarthome.jfif";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Kavya Chowdary Immanni",
  role: "Software Developer / Frontend Developer",
  subheading:
    "Skilled front-end developer and software engineer with expertise in building dynamic, responsive web applications using React.js, JavaScript, HTML5, CSS3, and in developing robust back-end solutions with Java and Python."
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
    title: "Portfolio Website",
    description:
      "A portfolio website built with React.js and GSAP animation offers a dynamic, interactive platform to showcase skills and projects, featuring smooth animations and a responsive, modern design.",
    techStack: ["Next.js", "Tailwind CSS"],
    imgSrc: project3,
    link: "",
  },
  {
    id: 4,
    title: "Smart Home Monitoring System using GSHAM Dataset ",
    description:
      "Designed and implemented a Smart Home Monitoring System using the GSHAM dataset with Decision Tree regression, Random Forest regression, and LSTM models. Conducted EDA and data preprocessing with Min-Max scaling. Achieved high performance metrics like MAE and MSE through effective data splitting for training and testing. Created Tableau visualizations to present insights, demonstrating proficiency in big data analytics and data science algorithms",
    techStack: ["Python", "Regression Model", "LSTM", "Tableau"],
    imgSrc: project4,
    link: "https://github.com/kc-2705/Smart-home-Monitoring-system-using-GSHAM-Dataset",
  },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript(ES6)",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Node.js",
    icon: <RiNodeTree className="text-green-500" />,
  },
  {
    name: "MongoDB",
    icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "Python",
    icon: <RiGitBranchLine className="text-pink-400" />,
  },
  {
    name: "Java",
    icon: <RiGitBranchLine className="text-pink-400" />,
  },
  {
    name: "SQL",
    icon: <RiDatabaseLine className="text-pink-400" />,
  },
  {
    name: "Git",
    icon: <RiGitBranchLine className="text-pink-400" />,
  },
  {
    name: "Postman",
    icon: <RiCodeSSlashLine className="text-pink-400" />,
  },{
    name: "Bootstrap",
    icon: <RiCss3Line className="text-pink-400" />,
  },{
    name: "REST API",
    icon: <RiCodeSSlashLine className="text-pink-400" />,
  },{
    name: "WordPress",
    icon: <RiCodeSSlashLine className="text-pink-400" />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "Jan 2022 - Dec 2022",
    role: "Software Engineer",
    company: "Cloud Software Group",
    description: [
      "Developed responsive dashboards using React.js, ES6 JavaScript, HTML5, CSS3, enhancing user experience and interface accessibility. Built modular, reusable components for Tibco’s web editor, leading to a 30% increase in user productivity by improving content searchability and navigation.",
      "Collaborated closely with designers and back-end teams to ensure seamless REST API integration and optimized performance across multiple devices.",
      "Contributed to the development of a localization framework named Molee, automating the localization process for Tibco software products. Reduced average localization turnaround time from 3-4 weeks to 4-5 days by implementing efficient automation strategies within the Molee framework.",
      "Utilized JIRA for issue tracking and team coordination, ensuring quick resolution of bugs and feature enhancements.",
      "Automated UI testing using Selenium WebDriver (Java), ensuring a smooth release process.",
    ],
    techStack: ["Javascript ES6", "React.js", "REST API", "Jira", "Selenium WebDriver(Java)"],
  },
  {
    yearRange: "Aug 2021 - Dec 2021",
    role: "Associate Engineer",
    company: "NPCI",
    description: [
      "Developed and executed complex SQL queries to enhance data extraction efficiency, resulting in a 15% improvement in database performance. Additionally, implemented a dynamic SQL query using Java JDBC, further optimizing database interactions for streamlined data retrieval.",
      "Developed and maintained user-friendly front-end forms and dashboards using HTML5, CSS3, and Java, streamlining data entry workflows. Added email notification functionality using Java, automating processes to improve productivity and reduce manual efforts.",
      "Collaborated with UX teams to improve front-end usability and create clean, responsive layouts for internal applications.",
    ],
    techStack: ["SQL", "JDBC", "Java", "MySQL"],
  },
];


export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "GRIET, India",
    duration: "2017 - 2021",
    cgpa: 3.8,
    courses: "COURSES: Linear Algebra, Advanced Calculus, Probability and statistics, DBMS, Advanced Data Structures, Operating Systems, Object oriented programming through Java, Web Technologies, Cloud Computing, Data warehousing and Data mining, Unified Modeling Language t", 
  },
  {
    id: 2,
    degree: "Master of Science in Software Engineering",
    institution: "Saint Louis University, MO",
    duration: "2023 - 2024",
    cgpa: 3.88,
    courses:
      "COURSES: Introduction to Artificial Intelligence, Data Analytics and Internet of Things, Principles of software Development, Distributed Computing, Software Architecture, Algorithms.",
  },
];

