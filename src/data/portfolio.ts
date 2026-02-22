export const personalInfo = {
  name: "Rasal kv",
  role: "Software Engineer",
  tagline: "I build things for the web.",
  bio: `Self-taught MERN stack developer with a strong foundation in JavaScript, TypeScript, and backend development. I
  enjoy building real-time, scalable web applications and have hands-on experience creating full-stack projects using
  React, Node.js, MongoDB, Redis, and Socket.IO. I am passionate about learning modern technologies, improving
  problem-solving skills, and building efficient systems that solve real-world problems.`,
  // bio2: `When I'm not pushing code, you'll find me exploring open-source projects, writing about software architecture, or hiking trails in the Pacific Northwest.`,
  email: "rasalkv21@gmail.com",
  github: "https://github.com/MuhammadRazalkv",
  linkedin: "https://www.linkedin.com/in/rasal-kv/",
  // twitter: 'https://twitter.com',
  location: "Malappuram, Kerala",
  availability: "Open to opportunities",
};
export const projects = [
  {
    id: 1,
    title: "NexaRide — Real-Time Taxi Booking Platform",
    description:
      "Built a full-stack real-time taxi booking system using the MERN stack. Implemented live ride updates with Socket.IO, Stripe wallet payments with webhooks, Redis-based socket management, and Geoapify map integration for routing and autocomplete.",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "Stripe",
      "Geoapify",
    ],
    liveUrl: "https://nexaride.rasal.sbs/",
    githubUrl: "https://github.com/MuhammadRazalkv/NexaRide-Backend",
    featured: true,
    // year: "2025",
  },
  {
    id: 2,
    title: "Coza Store — MERN E-Commerce Platform",
    description:
      "Developed a full-featured fashion e-commerce application with secure JWT authentication, product and category management, cart and order workflows, and responsive UI. Designed scalable REST APIs and implemented role-based access control.",
    tags: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST API",
      "Tailwind CSS",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/MuhammadRazalkv/Coza-store-Ecom", // replace
    featured: true,
    // year: "2024",
  },
  {
    id: 3,
    title: "PDFslice — PDF Processing Service",
    description:
      "Built a high-performance PDF processing tool using Node.js and TypeScript. Implemented Redis-based session storage, efficient PDF extraction using pdf-lib, and file upload handling optimized for cloud deployment.",
    tags: [
      "Node.js",
      "TypeScript",
      "Redis",
      "pdf-lib",
      "REST API",
      "File Upload",
    ],
    liveUrl: "https://bw-2-frontend.vercel.app/",
    githubUrl: "https://github.com/MuhammadRazalkv/BW2_backend",
    featured: false,
    // year: "2026",
  },
  {
    id: 4,
    title: "ArticleFeed — Blogging Platform",
    description:
      "Built a Medium-inspired article publishing platform where users can create, edit, like, and manage articles. Implemented secure authentication, profile management, and responsive UI with clean content reading experience.",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST API",
      "Tailwind CSS",
    ],
    liveUrl: "https://nexaread.vercel.app",
    githubUrl: "https://github.com/MuhammadRazalkv/BW1_backend",
    featured: false,
    // year: "2024",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "SQL"],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "Redux Toolkit",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Framer Motion",
      "Vite",
      "EJS",
      "Responsive Design",
      "shadcn/ui",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST API Development",
      "JWT Authentication",
      "Role-based Authorization",
      "Socket.IO",
      "Stripe Webhooks",
      "Rate Limiting",
      "Middleware Architecture",
    ],
  },
  {
    category: "Database & Cache",
    items: ["MongoDB", "Mongoose", "PostgreSQL", "Redis", "Data Modeling"],
  },
  {
    category: "Tools & Services",
    items: [
      "Git",
      "GitHub",
      "AWS",
      "Stripe",
      "Geoapify",
      "Firebase Authentication",
      "Railway",
      "Render",
      "Vercel",
      "Supabase Storage",
      "Postman",
      "Nginx",
    ],
  },
  {
    category: "Architecture & Practices",
    items: [
      "MVC Architecture",
      "Repository Pattern",
      "API Integration",
      "Performance Optimization",
      "Clean Code Principles",
    ],
  },
];

export const experience = [
  {
    company: "Acme Corp",
    role: "Senior Software Engineer",
    period: "2022 — Present",
    description:
      "Led migration of monolith to microservices, improving system reliability by 60%. Mentored a team of 4 engineers.",
  },
  {
    company: "StartupXYZ",
    role: "Full Stack Engineer",
    period: "2020 — 2022",
    description:
      "Built core product features from scratch, including real-time notifications and a custom analytics pipeline processing 10M events/day.",
  },
  {
    company: "Freelance",
    role: "Software Consultant",
    period: "2019 — 2020",
    description:
      "Delivered MVPs and technical audits for early-stage startups across fintech and edtech verticals.",
  },
];
