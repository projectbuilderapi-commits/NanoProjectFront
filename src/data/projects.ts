export const projects = [
  {
    id: 1,
    title: "ShopFlow",
    category: "Full Stack",
    description:
      "Inventory and Order Management Platform for Small Businesses",
    longDescription:
      "ShopFlow is a business management platform designed to help small businesses manage customers, inventory, orders, expenses, and reports from a single dashboard. The application includes secure authentication, role-based access control, analytics dashboards, and financial reporting modules.",
    image: "src/assets/ShopFlow.jpg",
    screenshots: [
      "/images/shopflow-1.png",
      "/images/shopflow-2.png",
      "/images/shopflow-3.png",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    features: [
      "Customer Management",
      "Inventory Tracking",
      "Order Management",
      "Expense Tracking",
      "Sales Reports",
      "Role Based Access",
      "Authentication",
      "Dashboard Analytics",
    ],
    challenges: [
      "Implementing RBAC",
      "Optimizing MongoDB Queries",
      "Secure JWT Authentication",
      "Pagination and Filtering",
    ],
    stats: [
      { label: "Modules", value: "9+" },
      { label: "APIs", value: "20+" },
      { label: "Users", value: "1000+" },
      { label: "Roles", value: "2" },
    ],
    liveLink: "https://shop-account-manager.netlify.app/",
    githubLink: "YOUR_LINK",
  },

  {
    id: 2,


    title: "DevConnect",

    category: "Social Platform",

    description:
      "Developer Networking and Community Platform",

    longDescription:
      "DevConnect is a social networking application that allows developers to create profiles, share posts, interact with other users, and build professional connections. The platform includes authentication, profile management, likes, comments, and activity feeds.",

    image: "src/assets/DevConnect.jpg",

    screenshots: [
      "/images/devconnect-1.png",
      "/images/devconnect-2.png",
      "/images/devconnect-3.png",
    ],

    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],

    features: [
      "User Authentication",
      "Profile Management",
      "Posts and Feeds",
      "Likes and Comments",
      "Protected Routes",
      "Responsive Design",
    ],

    challenges: [
      "Authentication Flow",
      "API Integration",
      "State Management",
      "Database Relationships",
    ],

    stats: [
      { label: "APIs", value: "15+" },
      { label: "Pages", value: "10+" },
      { label: "Users", value: "500+" },
      { label: "Modules", value: "6+" },
    ],

    liveLink: "https://project-enms6.vercel.app/",
    githubLink: "YOUR_LINK",
  },

  {
    id: 3,

    title: "Expense Tracker",

    category: "Frontend Development",

    description:
      "Personal Finance and Expense Tracking Application",

    longDescription:
      "A responsive expense tracking application that allows users to manage income, expenses, and monthly budgets. Interactive charts and dashboards provide insights into spending patterns and financial health.",

    image: "src/assets/Budget_Tracker.jpg",

    screenshots: [
      "/images/expense-1.png",
      "/images/expense-2.png",
      "/images/expense-3.png",
    ],

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Chart.js",
    ],

    features: [
      "Expense Tracking",
      "Budget Planning",
      "Interactive Charts",
      "Monthly Reports",
      "Responsive UI",
    ],

    challenges: [
      "Chart Integration",
      "State Management",
      "Responsive Design",
      "Data Visualization",
    ],

    stats: [
      { label: "Charts", value: "5+" },
      { label: "Pages", value: "6+" },
      { label: "Components", value: "20+" },
      { label: "Reports", value: "10+" },
    ],

    liveLink: "https://budgettracker-72308.web.app/",
    githubLink: "YOUR_LINK",

  },

  {
    id: 4,

    title: "Student Management System",

    category: "Backend Development",

    description:
      "Spring Boot Based Student and Course Management System",

    longDescription:
      "A backend-focused application developed using Spring Boot and PostgreSQL to manage students, courses, enrollments, and academic records. The project demonstrates REST API development, database relationships, validation, and exception handling.",

    image: "/images/student-cover.png",

    screenshots: [
      "/images/student-1.png",
      "/images/student-2.png",
      "/images/student-3.png",
    ],

    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "JPA",
      "Hibernate",
    ],

    features: [
      "Student CRUD",
      "Course Management",
      "Enrollment System",
      "Many-to-Many Relationships",
      "Validation",
      "Exception Handling",
    ],

    challenges: [
      "JPA Relationships",
      "JSON Recursion Issues",
      "Database Design",
      "DTO Implementation",
    ],

    stats: [
      { label: "Entities", value: "5+" },
      { label: "Endpoints", value: "20+" },
      { label: "Relations", value: "3+" },
      { label: "Modules", value: "4+" },
    ],

    liveLink: "#",
    githubLink: "YOUR_LINK",

  },
];
