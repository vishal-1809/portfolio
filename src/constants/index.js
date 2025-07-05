import {
  java,
  
  rgit,
  sathaye,
  tcs,
  python,
  
  icpc,
  icpcCertificate,
  gems,
  gemsCertificate, 
  javaWebDevelopment, 
  oop,  
  oopsLogo, 
  pythonDS, 
  dsa, 
  pythonWeb, 
  chatty,
  sortingAlgo,
  hci,
  dashboard,
  ser, 
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "extracurricular",
    title: "Certifications",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


const education = [
  {
    title: "Bachelor of Engineering (B.E)",
    company_name: "Rajiv Gandhi Institute of Technology, Mumbai, IN",
    icon: rgit,
    iconBg: "#fff",
    date: "2019 - 2023",
    points: [
      "CGPA: 9.15",
      "Courses undertaken: Data Structures & Algorithms, Database Management Systems, Operating Systems, Object Oriented Programming, Software Engineering.",
    ],
  },
  {
    title: "High School",
    company_name: "Sathaye Collge, Mumbai, IN",
    icon: sathaye,
    iconBg: "#fff",
    date: "2018-2019",
    points: [
      "MHT CET: 97.47 Percentile",
      "12th Grade: 72%",
      ,
    ],
  },
];


const experiences = [
  {
    title: "System Engineer - TCS",
    company_name: "Tata Consultancy Services",
    icon: tcs,
    iconBg: "#fff",
    date: "Nov. 2023 - Present",
    points: [
      "Developed and maintained a web application using Java, JSP, and SQL, enhancing database interactions and user experience.",
      "Built Java utility tools to automate tasks, boosting efficiency by 50% and reducing manual effort.",
      "Optimized workflows by identifying inefficiencies and implementing scalable solutions.",
      "Resolved application issues through root cause analysis, improving reliability by 30% and user satisfaction by 25%.",
      "Enhanced utility performance, cutting latency by 40-50% for better scalability and maintainability.",
    ],
  },
  // {
  //   title: "React JS Developer",
  //   company_name: "Ten React Dev",
  //   icon: not_found,
  //   iconBg: "#fff",
  //   date: "Oct. 2022 - Dec. 2022",
  //   points: [
  //     " I have designed and developed multiple responsive user interfaces using React.js, ensuring optimal performance through a component-based architecture. My proficiency in JSX, virtual DOM, and component lifecycle has allowed me to build scalable and maintainable applications.",
  //     "I have extensive experience with state management solutions like Redux and React Context API, which I’ve utilized to maintain efficient application state across complex React applications, ensuring seamless data flow and minimizing prop drilling.",
  //     "I have integrated a variety of RESTful APIs and GraphQL services, enabling data exchange between the front-end and back-end. My experience with handling asynchronous data fetching using Axios and Fetch ensures efficient communication and smooth user experiences.",
  //   ],
  // },
  
];


const extracurricular = [
  {
    title: "ICPC Regionals Finalist",
    type: "Achievement Certificate",
    icon: icpc,
    iconBg: "#000000",
    date: "April 2023",
    points: ["Kanpur-Mathura ICPC Regionals Finalist 2023, all over India at ICPC Kanpur-Mathura Site"],
    credential: icpcCertificate,
  },
  {
    title: "Recognized as a Star Performer of the Month",
    type: "Appreciation Certificate",
    icon: gems,
    iconBg: "#000000",
    date: "July 2024",
    points: ["Rewarded with gems for outstanding performance in July 2024."],
    credential: gemsCertificate,
  },
  {
    title: "Java Web Development",
    type: "Professional Certificate",
    icon: java,
    iconBg: "#000000",
    date: "Issued: Jan 2024",
    points: ["Core Java & OOP Concepts, Servlets & JSP, Database Integration", "RESTful APIs & Web Services, Front-end & UI Integration , Deployment & Security"],
    credential: javaWebDevelopment, 
  },
  {
    title: "Object Oriented Programming in C++",
    type: "Course Certificate",
    icon: oopsLogo,
    iconBg: "#748C7B",
    date: "May 2020",
    points: ["Fundamentals of C++ & OOP, Classes & Objects, Inheritance & Polymorphism", "Pointers & Dynamic Memory, File Handling in C++, Templates & Exception Handling, STL (Standard Template Library)"],
    credential: oop,
  },
  {
    title: "Python Data Structures",
    type: "Course Certificate",
    icon: dsa,
    iconBg: "#050C18",
    date: "June 2020",
    points: [
      "Introduction to Data Structures in Python, Lists & Tuples, Dictionaries & Sets", "Stacks & Queues, Linked Lists, Trees & Graphs, Heaps & Hash Tables, Algorithmic Applications",
    ],
    credential: pythonDS,
  },
  {
    title: "Using Databases with Python",
    type: "Course Certificate",
    icon: python,
    iconBg: "#CCCFD8",
    date: "Aug 2020",
    points: ["Introduction to Databases, Connecting Python with Databases, Executing SQL Queries, Data Retrieval & Manipulation", "Working with ORMs, Handling Transactions, Optimizing Queries, Integrating Databases with Web Applications"],
    credential: pythonWeb,
  },
];

const projects = [
  {
    name: "Chatty 🗨",
    description: 
    [ "The ultimate social platform designed to bring people closer! This platform allows users to seamlessly connect, share their thoughts, and engage with meaningful content.", "With features like posting updates, liking and commenting on posts, following other users, and real-time messaging, it fosters an interactive and dynamic online community."],
    tags: [
      {
        name: "Mongo DB",
        color: "blue-text-gradient",
      },
      {
        name: "Exress JS",
        color: "green-text-gradient",
      },
      {
        name: "React JS",
        color: "pink-text-gradient",
      },
      {
        name: "Node JS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Socket IO",
        color: "pink-text-gradient",
      },
    ],
    image: chatty,
    source_code_link: "https://github.com/vishal-1809/chatty",
    live_project_link: "https://chatty-ukv3.onrender.com/login",
  },
  {
    name: "Human Computer Interaction 🖥️",
    description:
     ["Developed a machine learning application enabling deaf and disabled individuals to communicate via hand gestures.", "Utilized Mediapipe for precise gesture detection and Python-Flask for the interface.", "Improved accessibility with an inclusive, AI-driven communication solution."],
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Mediapipe",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
    ],
    image: hci,
    source_code_link: "https://github.com/vishal-1809/HCI",
    live_project_link: "https://drive.google.com/file/d/1Sfmsgky1i5O5AQbd_Dh20IqxSswCrwqn/view?usp=sharing",
  },
  {
    name: "Sorting Algorithm Visualizer 📊",
    description:
      ["Built a Sorting Algorithm Visualizer with HTML, CSS, and JavaScript to demonstrate Bubble Sort, Selection Sort, Merge Sort, and Insertion Sort.", "This tool visually demonstrates sorting step by step in real time.", "Users can customize array sizes and speed for interactive sorting visualization."],
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: sortingAlgo,
    source_code_link: "https://github.com/vishal-1809/sorting-algo",
    live_project_link: "https://vishal-1809.github.io/sorting-algo/",
  },
  {
    name: "Speech Emotion Recognisition 🗣️",
    description:
      ["Built a Speech Emotion Recognition system using Python and Flask to analyze vocal emotions.", "Integrated machine learning models for accurate real-time emotion classification.", "Enhances human-computer interaction and sentiment analysis applications."],
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Scikit-Learn",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
    ],
    image: ser,
    source_code_link: "https://github.com/vishal-1809/speech-emotion-recognition",
    live_project_link: "https://drive.google.com/file/d/1p_MCV3fJ5xFQbYZUHrgbL3NTQHKRyDoQ/view?usp=sharing",
  },
  {
    name: "Expense Tracker Dashboard 🔍",
    description:
      ["Implemented CRUD operations to add and categorize income/expenses using Spring Boot and JDBC.", "Enhanced data visualization by creating line charts, bar charts, and pie charts to effectively illustrate spending trends.", "Optimized back-end data handling and deployed the application using Apache Tomcat for production readiness."],
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "JDBC",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
      {
        name: "Apache Tomcat",
        color: "green-text-gradient",
      },
    ],
    image: 'https://raw.githubusercontent.com/vishal-1809/expense-tracker/refs/heads/main/src/main/resources/static/assets/output/2.png',
    source_code_link: "https://github.com/vishal-1809/expense-tracker",
    live_project_link: "https://drive.google.com/file/d/1QR-iA974ngDDXWVjg4OHo3jCU2a-AUxW/view?usp=sharing",
  },
  {
    name: "Java-Based Web Chat Application 🧪",
    description:
      ["Built secure login, sign-up, and logout functionalities with session management.", "Designed and implemented one-to-one chat functionality with user-specific message storage.", "Deployed using Apache Tomcat and Maven, ensuring modularity and efficient dependency management."],
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "JSP",
        color: "green-text-gradient",
      },
      {
        name: "Servlets",
        color: "pink-text-gradient",
      },
      {
        name: "JDBC",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Apache Tomcat",
        color: "pink-text-gradient",
      },
    ],
    image: "https://raw.githubusercontent.com/vishal-1809/java-chat-application/main/src/main/webapp/output/1.png",
    source_code_link: "https://github.com/vishal-1809/java-chat-application",
    live_project_link: "https://drive.google.com/file/d/1iOPv28AYw7BxSvAq1qD9RxNpD9FjjElS/view",
  },
];


export {
  experiences,
  extracurricular,
  projects,
  education,
};
