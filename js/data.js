/**
 * Central data for the portfolio - arrays of objects for reuse across pages
 */

const NAV_LINKS = [
  { href: "index.html", label: "Home" },
  { href: "resume.html", label: "Resume" },
  { href: "certificates.html", label: "Achievements" },
  { href: "projects.html", label: "Featured Work" },
  { href: "contact.html", label: "Contact" },
];

const SOCIAL_LINKS = [
  { href: "https://devfolio.co/@pushan_alagiya", icon: "bi-file-code-fill" },
  {
    href: "https://www.linkedin.com/in/pushan-alagiya-7a332220b",
    icon: "bi-linkedin",
  },
  { href: "https://github.com/pushan-alagiya", icon: "bi-github" },
  { href: "https://twitter.com/alagiyapushan", icon: "bi-twitter" },
  {
    href: "https://www.youtube.com/channel/UCC6XM-0RirW0uYAafl0o6Wg",
    icon: "bi-youtube",
  },
];

const TECH_BACKEND = [
  { src: "assets/svg/Node.js.svg", alt: "Node.js", label: "Node.js" },
  { src: "assets/svg/Nest.js.svg", alt: "NestJS", label: "NestJS" },
  { src: "assets/svg/Express.svg", alt: "Express", label: "Express" },
  { src: "assets/svg/Socket.io.svg", alt: "WebSocket", label: "WebSocket" },
  { src: "assets/svg/Laravel.svg", alt: "Laravel", label: "Laravel" },
  { src: "assets/svg/GraphQL.svg", alt: "GraphQL", label: "GraphQL" },
  { src: "assets/svg/Solidity.svg", alt: "Solidity", label: "Solidity" },
  { src: "assets/svg/Deno.svg", alt: "Deno", label: "Deno" },
  { src: "assets/svg/grpc.svg", alt: "gRPC", label: "gRPC" },
  { src: "assets/svg/Apache-Kafka.svg", alt: "Kafka", label: "Kafka" },
];

const TECH_FRONTEND = [
  { src: "assets/svg/Next.js.svg", alt: "Next.js", label: "Next.js" },
  { src: "assets/svg/React.svg", alt: "React", label: "React" },
  { src: "assets/svg/Redux.svg", alt: "Redux", label: "Redux" },
  { src: "assets/svg/TypeScript.svg", alt: "TypeScript", label: "TypeScript" },
  { src: "assets/svg/Material-UI.svg", alt: "Material-UI", label: "MUI" },
  { src: "assets/svg/Bootstrap.svg", alt: "Bootstrap", label: "Bootstrap" },
  { src: "assets/svg/Socket.io.svg", alt: "WebSockets", label: "WebSocket" },
  { src: "assets/svg/ESLint.svg", alt: "ESLint", label: "ESLint" },
  { src: "assets/svg/CSS3.svg", alt: "CSS3", label: "CSS3" },
  { src: "assets/svg/HTML5.svg", alt: "HTML5", label: "HTML5" },
  { src: "assets/svg/JavaScript.svg", alt: "JavaScript", label: "JavaScript" },
  { src: "assets/svg/Tailwind-CSS.svg", alt: "TailwindCSS", label: "Tailwind" },
];

const TECH_CLOUD = [
  { src: "assets/svg/AWS.svg", alt: "AWS", label: "AWS" },
  { src: "assets/svg/Azure.svg", alt: "Azure", label: "Azure" },
  {
    src: "assets/svg/Google-Cloud.svg",
    alt: "Google Cloud",
    label: "Google Cloud",
  },
  { src: "assets/svg/Docker.svg", alt: "Docker", label: "Docker" },
  { src: "assets/svg/Kubernetes.svg", alt: "Kubernetes", label: "Kubernetes" },
  {
    src: "assets/svg/Digital-Ocean.svg",
    alt: "DigitalOcean",
    label: "DigitalOcean",
  },
  { src: "assets/svg/Heroku.svg", alt: "Heroku", label: "Heroku" },
  { src: "assets/svg/Vercel.svg", alt: "Vercel", label: "Vercel" },
];

const TECH_BLOCKCHAIN = [
  { src: "assets/svg/Solidity.svg", alt: "Solidity", label: "Solidity" },
  { src: "assets/svg/Hardhat.svg", alt: "Hardhat", label: "Hardhat" },
  { src: "assets/svg/JavaScript.svg", alt: "Ethers.js", label: "Ethers.js" },
  { src: "assets/svg/JavaScript.svg", alt: "Web3.js", label: "Web3.js" },
  { src: "assets/svg/Polygon.svg", alt: "Polygon", label: "Polygon" },
  { src: "assets/svg/WebAssembly.svg", alt: "Ethereum", label: "Ethereum" },
  { src: "assets/svg/Rust.svg", alt: "Solana", label: "Solana" },
  { src: "assets/svg/Vyper.svg", alt: "Vyper", label: "Vyper" },
];

const TECH_AI = [
  { src: "assets/svg/LangGraph.svg", alt: "LangGraph", label: "LangGraph" },
  { src: "assets/svg/LangChain.svg", alt: "LangChain", label: "LangChain" },
  {
    src: "assets/svg/Google-Gemini.svg",
    alt: "Google AI SDK",
    label: "Google AI SDK",
  },
  { src: "assets/svg/n8n.svg", alt: "n8n", label: "n8n" },
  { src: "assets/svg/Flowise.svg", alt: "Flowise", label: "Flowise" },
  { src: "assets/svg/ChatGPT.svg", alt: "ChatGPT", label: "ChatGPT" },
  { src: "assets/svg/Gemini.svg", alt: "Gemini", label: "Gemini" },
  { src: "assets/svg/Claude.svg", alt: "Claude", label: "Claude" },
  { src: "assets/svg/Anthropic.svg", alt: "Anthropic", label: "Anthropic" },
];

const STATS = [
  { value: "18+", label: "Projects Completed", colorClass: "text-primary" },
  { value: "3+", label: "Years Experience", colorClass: "text-success" },
  { value: "15+", label: "Technologies Mastered", colorClass: "text-warning" },
  { value: "100%", label: "Commitment", colorClass: "text-info" },
];

const PROJECTS_DATA = [
  {
    title: "Invity",
    description:
      "An innovative event invitation and management platform. Invity provides a seamless experience for creating, managing, and sharing event invitations with modern features and intuitive design.",
    image: "assets/invity.png",
    githubUrl: "https://github.com/pushan-alagiya/Invitly",
    imageClass: "rounded-4 noinverseimgage project-images",
  },
  {
    title: "BlockchainViz",
    description:
      "Built an exploration platform designed to help developers truly understand how blockchain works; not just at a conceptual level, but through interactive visualization and hands-on experience. The goal is simple: break down complex Web3 concepts into clear, visual, and practical modules. What you'll find inside: Cryptography Fundamentals (Encodings, Hashing, Encryption, Signatures), Blockchain Core (How blockchain & transactions work, HD wallets), Smart Contracts & Platforms (Solidity fundamentals, Solana deep dive), Solana Ecosystem (Accounts, CLI, environments, Web3 data model), Tokens & DeFi (Token launchpads, liquidity pools, PoS, liquid staking), Dev Tools & Wallets (Alchemy API, wallet demos & adapters), Security & MPC (Key storage methods, MPC wallet architecture). If you're learning blockchain and want a clear mental model of what's happening under the hood, this should help. This is built with NextJS and has integration of some of the most prominent Web3 Libraries in JS.",
    image: "assets/blockchain.png",
    githubUrl: "https://blockchain-viz-seven.vercel.app/",
    imageClass: "rounded-4 noinverseimgage project-images",
  },
  {
    title: "SabhaSthal V2",
    description:
      "SabhaSthal is an upgraded, peer-to-peer video conferencing and collaboration platform, now with additional real-time interactive features. This new version (V2) introduces a collaborative drawing board with customizable strokes and colors, enhanced chat functionality, optimized screen sharing, and user control toggles for camera and microphone. SabhaSthal V2 also includes login and sign-up functionality and a refreshed UI, creating a seamless and versatile experience for virtual meetings and collaboration. Features include real-time collaborative drawing board with live updates, customizable strokes and colors, enhanced chat functionality with optimized messaging, improved screen sharing for smoother streaming, camera and microphone toggles for privacy control, user authentication with secure login and sign-up, and updated responsive UI for intuitive user experience.",
    image: "assets/Sabhathal-v2-1.webp",
    githubUrl: "https://github.com/pushan-alagiya/SabhaSthal-V2",
    imageClass: "rounded-4 noinverseimgage project-images",
  },
  {
    title: "SabhaSthal V1",
    description:
      "SabhaSthal is a peer-to-peer video conferencing web application that enables real-time video communication and chat among users. This initial version (V1) is built with Node.js, Socket.IO, and React, using WebRTC for seamless, high-quality video streaming. The app supports video calls, direct chat, and an interactive UI for connecting users effortlessly. Features include real-time video conferencing with WebRTC for smooth, low-latency video and audio calls, instant messaging integrated with video calls, peer-to-peer communication managed by Socket.IO, and responsive design optimized for both desktop and mobile devices.",
    image: "assets/Sabhasthal-v1.webp",
    githubUrl: "https://github.com/pushan-alagiya/SabhaSthal-V1",
    imageClass: "rounded-4 noinverseimgage project-images",
  },
  {
    title: "Terminal AI Agent",
    description:
      "Terminal AI Agent is a terminal-based conversational AI assistant built using the LangChain framework. It leverages the power of large language models (LLMs) to provide intelligent responses and perform real-time web searches using tools like TavilySearch. The assistant is designed to handle user queries interactively in the terminal, with support for tool calls and token limitations for optimized performance.",
    image: "assets/terminal-ai-agent.png",
    githubUrl: "https://github.com/pushan-alagiya/Terminal-AI-Agent",
    imageClass: "rounded-4 noinverseimgage project-images",
  },
  {
    title: "DScrap",
    description:
      "The innovative waste recycling platform, built with React and React Router DOM, ensures a smooth user experience. It allows a user to book a hassle-free sale, pick-up and call for any type of scrap. You can schedule a pick-up call through our website at a time and date that is convenient for you. Utilizing Axios for efficient data fetching and Bootstrap icons for an appealing UI, we prioritize user convenience. On the backend, we employ Express.js and MongoDB for seamless data management, with bcrypt for enhanced security.",
    image: "assets/Admin Sequence.webp",
    githubUrl: "https://github.com/pushan-alagiya/DScrap",
    imageClass: "noinverseimgages rounded-4 project-images",
  },
  {
    title: "AI Chatbot",
    description:
      "This project is an AI-powered chatbot built using React.js, Node.js, Express.js, and the OpenAI API. The chatbot is capable of understanding and responding to user inputs naturally, making it ideal for applications such as customer support, virtual assistance, or just general conversation. Features include natural language understanding powered by OpenAI's advanced language models, interactive chat interface with real-time dynamic responses, customizable behavior to suit specific use cases, and scalable modular architecture for easy expansion and integration.",
    image: "assets/Chat.webp",
    githubUrl: "https://github.com/pushan-alagiya/ai-chat-bot",
    imageClass: "noinverseimgages rounded-4 project-images",
  },
  {
    title: "NextJS Boilerplate CLI",
    description:
      "BE-CLI - Enterprise NestJS Application Generator. A production-grade interactive CLI tool that generates enterprise-ready NestJS backend applications with zero configuration hassle. BE-CLI is an enterprise-grade CLI tool that extends the official NestJS CLI to generate production-ready, scalable backend applications. It provides an interactive wizard to configure your project with best practices, security, logging, and modern architecture patterns built-in. Why BE-CLI? Zero Manual Configuration - All dependencies and configurations are automatically handled. Production-Ready - Security, error handling, logging, and monitoring out of the box. Interactive & Intuitive - Beautiful TUI with section-based editing and progress tracking. Feature-Rich - Database, Auth, AWS, Background Jobs, Realtime, and more. TypeScript-First - Full TypeScript support with strict mode. Cross-Platform - Works on Windows, macOS, and Linux. Auto-Documentation - Swagger/OpenAPI, README, and architecture docs generated automatically.",
    image: "assets/backend-cli.png",
    githubUrl: "https://github.com/pushan-alagiya/be-cli",
    imageClass: "noinverseimgages rounded-4 project-images",
  },
  {
    title: "Full Stack Netflix Clone",
    description:
      "Currently, I'm creating a captivating full-stack Netflix clone using the power-packed MERN stack (MongoDB, Express.js, React, Node.js). On the surface, the journey might appear straightforward, but as I delve deeper, I'm uncovering layers of complexity that truly challenge and invigorate.",
    image: "assets/netflix.webp",
    githubUrl: "https://github.com/pushan-alagiya/Netflix-Clone",
    imageClass: "rounded-4 noinverseimgages project-images",
  },
  {
    title: "Social App Backend",
    description:
      "My social app, crafted with Express.js and MongoDB, offers seamless connections and engaging interactions. Leveraging JWT for secure authentication and bcrypt for password encryption, I have ensured user privacy. CORS facilitates smooth cross-origin communication, while multer enables effortless file uploads. The robust backend promise a seamless and secure social networking experience.",
    image: "assets/social-app.webp",
    githubUrl:
      "https://github.com/pushan-alagiya/Celestial-Social-Nexus-Backend",
    imageClass: "rounded-4 noinverseimgage project-images",
  },
  {
    title: "Elect 3.0",
    description:
      "The Elect 3.0 is developed to overcome the flaws of EVM system. So directly EVM will be replaced by touch screen interface having the great user interface and high security. The project is based on an emerging tech of web3 - The Blockchain.",
    image: "assets/5.webp",
    githubUrl: "https://github.com/pushan-alagiya/Elect-3.0",
    imageClass: "rounded-4 noinverseimgages project-images",
  },
  {
    title: "Cwrite",
    description:
      "The Simple React Blog App is a web application that allows users to read and delete blog posts. Developed using React, this user-friendly app provides a seamless and interactive experience for both blog readers and administrators. By leveraging the power of React components and state management, the app offers an efficient way to browse through blog posts and manage content easily.",
    image: "assets/cwrite.webp",
    githubUrl: "https://github.com/pushan-alagiya/cwrite",
    imageClass: "rounded-4 noinverseimgage project-images",
  },
  {
    title: "Recipy",
    description:
      "A fully-featured, JavaScript-based recipe website offering users a seamless experience to discover, search, and save recipes. The platform includes authentication, recipe bookmarking, cart management, pagination, and more—all managed entirely on the frontend. Features include user authentication with credentials stored in local storage, powerful recipe search and filtering by keywords, categories, ingredients, or dietary preferences, bookmarking functionality for favorite recipes, recipe cart for meal planning and shopping list export, pagination for improved performance, and responsive UI optimized for mobile, tablet, and desktop views.",
    image: "assets/Recipy.webp",
    githubUrl: "https://github.com/pushan-alagiya/Recipy",
    imageClass: "rounded-4 noinverseimgage project-images",
  },
];

const AWARDS_DATA = [
  {
    title: "Devang Mehta IT Awards - 2022",
    image: "assets/Awards/DMIA - 2022.webp",
    link: "https://dewangmehtafoundation.org/",
    subtitle: "College Topper 2022",
  },
  {
    title: "Devang Mehta IT Awards - 2023",
    image: "assets/Awards/DM.webp",
    link: "https://dewangmehtafoundation.org/",
    subtitle: "College Topper 2023",
  },
];

const CERTIFICATIONS_DATA = [
  {
    name: "AWS Certified Developer - Associate",
    image: "assets/Certifications/AWS-dev.webp",
    link: "https://www.credly.com/badges/7ffb95b2-5688-4b16-8ec4-7ad2c9be4aa1",
    description:
      'Earning the <b class="text-gradient">AWS Certified Developer - Associate</b> certification demonstrates comprehensive knowledge in developing, deploying, and debugging cloud-based applications using AWS services, showcasing expertise in modern cloud development practices.',
    skills: [
      "AWS core services and cloud architecture patterns",
      "Serverless application development with Lambda",
      "CI/CD pipelines and deployment automation",
      "Monitoring, logging, and troubleshooting applications",
    ],
  },
  {
    name: "MongoDB NodeJS",
    image: "assets/Certifications/mongodb.webp",
    link: "https://drive.google.com/file/d/1DPr9l6IebIHeSC-fqfnh9xCpGBl1vTsP/view?usp=drivesdk",
    description:
      'Earning the <b class="text-gradient">MongoDB Node.js Developer Certification</b> demonstrates proficiency in building applications using MongoDB and Node.js, along with strong problem-solving and database management skills.',
    skills: [
      "Advanced data modeling Concepts",
      "Aggregation pipeline",
      "Production deployment and scaling of Node.js apps",
    ],
  },
  {
    name: "Postman Student Expert",
    image: "assets/Certifications/Postman.webp",
    link: "https://badgr.com/public/assertions/ieiKNkNNS_e8ZV_d00Av3g",
    description:
      'Earning the <b class="text-gradient">Postman Student Expert badge</b> showcases proficiency in creating, managing, and executing API tests, along with effective communication and teamwork skills.',
    skills: [
      "API testing with Postman.",
      "Collaborative communication.",
      "Efficient API test management.",
    ],
  },
  {
    name: "Introduction to MongoDB",
    image: "assets/Certifications/mongodb.webp",
    link: "https://badgr.com/public/assertions/ieiKNkNNS_e8ZV_d00Av3g",
    description:
      'Upon completing the <b class="text-gradient">Introduction to MongoDB Course</b>, I possesd a solid foundation in leveraging MongoDB. I gained insights into advanced topics such as performance optimization through indexing strategies.',
    skills: [
      "Database operations",
      "Data modeling principles and indexing",
      "Querying and aggregation techniques",
    ],
  },
  {
    name: "NPTEL - Java",
    image: "assets/Certifications/NPTEL-Java.webp",
    link: "https://drive.google.com/file/d/1l7wiB3xTyJJJWpb3Hf29risnsFYhI-LV/view?usp=sharing",
    description:
      'Earning the <b class="text-gradient">Certificate for the Completion of Java Training</b> signifies proficiency in Java programming, demonstrating skills in problem-solving, software development, and understanding fundamental concepts with an outstanding score of 97.50%.',
    skills: [
      "Java syntax and language features.",
      "Object-oriented programming principles.",
      "Data structures and algorithms implementation.",
    ],
  },
];

const EXPERIENCE_DATA = [
  {
    period: "January 2024 – July 2026",
    role: "SDE L2 / Software Engineer",
    companyName: "Crest Infosystems / NuVista AI",
    companyUrl: "https://www.crestinfosystems.com/",
    location: "Surat, Gujarat, India",
    techStack: "Full Stack, Microservices, Real-Time Systems & Agentic AI",
    description:
      "As an SDE L2 / Software Engineer, I architected and engineered scalable enterprise backend systems, cloud-native microservices, real-time event pipelines, and production Agentic AI workflows. Led the technical development and cloud deployment across multi-tenant platforms, implementing autonomous AI agents, high-precision RAG pipelines, and automated business workflows on AWS. Drove end-to-end architecture, API design, database modeling, and performance optimization across distributed systems with complete production ownership.",
    modalId: "crestModal",
    metrics: [
      { value: "5+", label: "Enterprise Applications", subtext: "Delivered scalable platforms" },
      { value: "60%+", label: "Manual Time Reduced", subtext: "Automated workflow pipelines" },
      { value: "~30%", label: "Performance Gain", subtext: "Backend & query optimization" },
      { value: "Thousands", label: "Daily Real-Time Events", subtext: "Low-latency WebSocket streaming" }
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "MUI",
      "Node.js",
      "NestJS",
      "Express.js",
      "REST APIs",
      "Microservices",
      "Serverless Architecture",
      "WebSockets",
      "Socket.IO",
      "BullMQ",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "DynamoDB",
      "AWS Lambda",
      "EC2",
      "S3",
      "RDS",
      "SQS",
      "SES",
      "API Gateway",
      "Docker",
      "CI/CD",
      "GCP",
      "Python",
      "Agentic AI",
      "LLMs",
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "RAG",
      "AI Agents",
      "Tool Calling",
      "Prompt Engineering",
      "Vector Databases",
      "pgvector",
      "Pinecone",
    ],
    projects: [
      {
        name: "Digifama — AI-Powered Environmental Data & Reporting Platform",
        tech: [
          "Node.js",
          "Express",
          "PostgreSQL",
          "AWS S3",
          "AWS Lambda",
          "Agentic AI",
          "RAG",
        ],
        desc: "Architected an AI-powered enterprise platform for large-scale environmental data ingestion, contextual retrieval, and automated multi-standard reporting.",
        highlights: [
          "Built AI-assisted workflows for large-scale environmental data ingestion, automated validation, and schema compliance.",
          "Implemented RAG and autonomous AI-agent workflows for contextual retrieval and dynamic, audit-ready report generation.",
          "Drastically reduced report-generation workflows from days to minutes, accelerating stakeholder decision-making.",
          "Improved overall report accuracy by approximately 25% through multi-source contextual verification.",
        ],
      },
      {
        name: "Intarp — AI Resume & Job Hunt Platform",
        tech: [
          "NestJS",
          "Next.js",
          "PostgreSQL",
          "LLM APIs",
          "Agentic AI",
          "AWS/GCP",
        ],
        desc: "Engineered an intelligent career platform leveraging LLMs, autonomous agents, and automated workflow orchestration.",
        highlights: [
          "Built an AI-powered platform leveraging state-of-the-art LLMs and intelligent workflow orchestration.",
          "Implemented autonomous AI agents for deep resume parsing, multi-dimensional skill extraction, and candidate/job matching.",
          "Designed resilient LLM orchestration pipelines with automated prompt evaluations and tool calling capabilities.",
        ],
      },
      {
        name: "Adbox — AI-Assisted Marketing & Analytics Platform",
        tech: [
          "Node.js",
          "Express",
          "PostgreSQL",
          "Redis",
          "AWS",
          "AI-assisted analytics",
        ],
        desc: "Developed high-throughput analytics backend services, AI-assisted campaign intelligence, and real-time marketing reporting.",
        highlights: [
          "Built scalable backend services for complex marketing campaign analytics, metric aggregation, and executive business reporting.",
          "Implemented AI-assisted analytics workflows delivering actionable performance insights and campaign recommendations.",
          "Crafted high-performance database queries, integrated Image.LY for interactive creative editing, and optimized SEO.",
          "Implemented monitoring, granular Role-Based Access Control (RBAC), and reduced data-processing latency by ~25%.",
        ],
      },
      {
        name: "Kindertales — Enterprise Childcare Management Platform",
        tech: ["NestJS", "React.js", "Serverless", "AWS", "Microservices"],
        desc: "Architected enterprise childcare management microservices and frontend portals handling multi-center operations.",
        highlights: [
          "Built scalable NestJS microservices powering mission-critical childcare management, attendance tracking, and scheduling workflows.",
          "Developed responsive React.js functionality for seamless student enrollment, real-time attendance, billing, and administration.",
          "Managed cloud deployments, serverless architecture, and CI/CD pipelines across AWS environments.",
        ],
      },
      {
        name: "Pikhaul — Real-Time Logistics Platform",
        tech: [
          "Next.js",
          "Node.js",
          "WebSockets/Socket.IO",
          "PostgreSQL",
          "Redis",
          "AWS",
        ],
        desc: "Engineered low-latency real-time shipment telemetry, fleet operations management, and event-driven logistics systems.",
        highlights: [
          "Built real-time shipment tracking, fleet operations telemetry, and live dispatcher interfaces.",
          "Implemented scalable event-driven architecture using WebSockets and Socket.IO backed by Redis pub/sub.",
          "Integrated intelligent ETA prediction and dynamic route optimization workflows for large-scale operations.",
          "Reduced event propagation latency by approximately 40% under concurrent high-load logistics spikes.",
        ],
      },
      {
        name: "DigiFama Real Estate",
        tech: [
          "Node.js",
          "React.js",
          "PostgreSQL",
          "Payment Gateways",
          "REST APIs",
        ],
        desc: "Engineered multi-tenant real estate platform architecture featuring white-labeling, client impersonation, and payment workflows.",
        highlights: [
          "Led platform architecture for multi-tenant real estate solutions with complete white-label customization support.",
          "Implemented secure administrative user emulation/impersonation features for streamlined customer support and auditability.",
          "Engineered end-to-end payment gateway integrations, subscription billing workflows, and automated invoice processing.",
        ],
      },
      {
        name: "Wakabay 3PL Platform",
        tech: [
          "Node.js",
          "Microservices",
          "REST APIs",
          "Logistics Architecture",
          "AWS",
        ],
        desc: "Designed scalable microservices architecture and high-reliability integrations for third-party logistics fulfillment.",
        highlights: [
          "Designed and implemented scalable backend microservices and high-throughput REST APIs for Third-Party Logistics (3PL).",
          "Architected complex supply-chain logistics workflows, order routing pipelines, and third-party warehouse system integrations.",
          "Performed rigorous database indexing and query optimization, significantly boosting overall system throughput and reliability.",
        ],
      },
      {
        name: "Chores for Me",
        tech: [
          "Node.js",
          "Express.js",
          "PostgreSQL",
          "REST APIs",
          "Cloud Infrastructure",
        ],
        desc: "Built resilient on-demand service backend systems, REST APIs, and scalable database architecture.",
        highlights: [
          "Developed robust Node.js backend services and high-availability RESTful APIs powering on-demand task coordination.",
          "Designed relational database schemas, managed transactional integrity, and optimized data access layers.",
          "Leveraged cloud infrastructure and modern DevOps practices to ensure high scalability, reliability, and production resilience.",
        ],
      },
    ],
    impact:
      "Engineered and deployed robust, cloud-native enterprise backend architectures, scalable microservices, and high-throughput real-time systems supporting mission-critical operations. Led the design and production integration of advanced AI/LLM solutions, including autonomous Agentic AI workflows, high-precision Retrieval-Augmented Generation (RAG) pipelines, and intelligent automated orchestration using LangChain, LangGraph, and Python. Drove end-to-end cloud infrastructure on AWS, implementing containerized microservices, serverless workloads, event-driven queues, and automated CI/CD deployment pipelines. Maintained full production ownership, leading systematic backend performance tuning, query optimization, and latency reduction across distributed multi-tenant environments.",
    websiteUrl: "https://www.crestinfosystems.com/",
  },
  {
    period: "July 2023 – December 2023",
    role: "Software Engineer",
    companyName: "Wholetax Pvt. Ltd.",
    companyUrl: "https://www.wholetex.com/",
    location: "Surat, Gujarat, India",
    techStack: "Full Stack, Supply Chain Platforms & Workflow Automation",
    description:
      "As a Software Engineer on enterprise digital platforms supporting supply-chain, logistics, and operational workflows, I designed and developed scalable backend services, REST APIs, business automation workflows, QR-based tracking systems, and operational dashboards. Translated complex operational processes into reliable, high-throughput software solutions, achieving a ~60% reduction in reconciliation time and 50%+ reduction in manual operational effort.",
    modalId: "wholetexModal",
    metrics: [
      { value: "~60%", label: "Reconciliation Time Reduced", subtext: "Automated verification workflows" },
      { value: "50%+", label: "Manual Effort Reduced", subtext: "Software-driven pipeline automation" },
      { value: "Enterprise", label: "Supply Chain & Logistics", subtext: "Centralized operational platforms" }
    ],
    techCategories: {
      "Frontend": ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "MUI", "Redux", "Responsive UI", "Operational Dashboards"],
      "Backend": ["Node.js", "Express.js", "REST APIs", "Microservices", "API Integration", "Authentication", "Authorization", "Workflow Automation"],
      "Databases": ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
      "Infrastructure": ["AWS", "Docker", "Git", "CI/CD", "Cloud-native Development"],
      "Business Systems": ["Supply Chain Management", "Logistics", "QR Tracking", "Operational Automation", "Reporting & Analytics", "Enterprise Workflows"]
    },
    technologies: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "MUI",
      "Redux",
      "Responsive UI",
      "Operational Dashboards",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Microservices",
      "API Integration",
      "Authentication",
      "Authorization",
      "Workflow Automation",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "AWS",
      "Docker",
      "Git",
      "CI/CD",
      "Cloud-native Development",
      "Supply Chain Management",
      "Logistics",
      "QR Tracking",
      "Operational Automation",
      "Reporting & Analytics",
      "Enterprise Workflows"
    ],
    engineeringAreas: [
      "Backend Engineering",
      "REST APIs",
      "Full-Stack Development",
      "Workflow Automation",
      "Supply Chain",
      "Logistics",
      "QR Tracking",
      "Operational Dashboards",
      "Database Optimization",
      "Business Process Automation",
      "System Integration",
      "Production Support"
    ],
    projects: [
      {
        name: "QR-Based Tracking & Reconciliation Platform",
        prominent: true,
        tech: [
          "Node.js",
          "Express.js",
          "MongoDB",
          "QR Tracking",
          "REST APIs",
          "Workflow Automation",
        ],
        desc: "Designed and developed a QR-based tracking solution to digitize operational tracking and reconciliation workflows across enterprise logistics processes. Replaced manual identification and reconciliation steps with a centralized digital workflow, improving data accuracy and operational visibility.",
        technicalContribution:
          "Developed backend APIs and database workflows for QR generation, scanning, entity tracking, status management, reconciliation, and operational reporting. Implemented validation and role-based workflows to ensure secure and reliable processing of operational data.",
        impact:
          "~60% reduction in reconciliation time through automation of manual tracking and verification workflows.",
        highlights: [
          "Engineered end-to-end QR code generation and real-time scanner verification pipelines for warehouse intake and dispatch.",
          "Digitized entity reconciliation, replacing paper-based manual audits with automated database integrity validations.",
          "Implemented strict Role-Based Access Control (RBAC) and validation workflows ensuring tamper-proof operational logs.",
          "Delivered automated reconciliation status reporting dashboards with instant discrepancy detection."
        ],
      },
      {
        name: "Supply Chain & Logistics Management Platform",
        tech: [
          "Node.js",
          "REST APIs",
          "React.js",
          "PostgreSQL",
          "Supply Chain",
          "Authentication",
        ],
        desc: "Contributed to enterprise platforms supporting supply-chain and logistics operations, building digital workflows for operational teams to manage and monitor business processes through centralized systems.",
        technicalContribution:
          "Developed REST APIs and backend services for operational workflows, integrated data across business modules, and implemented frontend functionality and dashboards for operational visibility. Highlighted API architecture, database design, business logic, authentication, validation, integrations, and performance optimization.",
        highlights: [
          "Architected multi-module REST API endpoints connecting supplier catalog, order dispatch, and freight consignment records.",
          "Designed relational schemas and data consistency constraints handling high-concurrency order state transitions.",
          "Integrated secure token-based authentication and granular permission layers across operational user tiers.",
          "Conducted targeted query tuning and indexing, reducing API response times across core fulfillment endpoints."
        ],
      },
      {
        name: "Business Workflow Automation",
        tech: [
          "Workflow Automation",
          "Express.js",
          "Node.js",
          "Redis",
          "Validation Rules",
        ],
        desc: "Engineered automated workflows to replace repetitive manual operational processes with structured, software-driven execution pipelines.",
        technicalContribution:
          "Designed backend services and API-driven workflows for automated data processing, status transitions, notifications, validation, and business-rule execution.",
        impact:
          "Reduced manual operational effort by more than 50% through workflow automation and streamlined digital processes.",
        highlights: [
          "Replaced multi-step manual operational paperwork with automated backend event-triggered execution pipelines.",
          "Implemented background validation queues and status transition listeners for instant task routing.",
          "Integrated automated notification alerts keeping dispatchers and warehouse leads synchronized in real time.",
          "Achieved 50%+ reduction in recurring manual operational handling time."
        ],
      },
      {
        name: "Operational Dashboards & Reporting",
        tech: [
          "React.js",
          "Next.js",
          "MUI",
          "REST APIs",
          "MongoDB",
          "Dashboards",
        ],
        desc: "Developed operational dashboards and reporting functionality providing business teams with centralized visibility into logistics activities, workflow status, tracking information, and operational performance.",
        technicalContribution:
          "Built frontend components and supporting REST APIs for search, filtering, pagination, reporting, status monitoring, and role-based access. Optimized database queries and API responses for dashboard workloads.",
        highlights: [
          "Developed responsive React/MUI analytics dashboards delivering real-time status visibility across logistical nodes.",
          "Engineered high-performance backend filtering, cursor-based pagination, and aggregation pipelines in MongoDB.",
          "Built custom export tools for automated periodic compliance and performance reporting.",
          "Optimized UI render cycles and server response times for seamless operational interaction."
        ],
      },
    ],
    impact:
      "Worked as a Software Engineer on enterprise digital platforms supporting supply-chain, logistics, and operational workflows. Designed and developed scalable backend services, REST APIs, business automation workflows, tracking systems, and operational dashboards, translating complex business processes into reliable software solutions. Focused on improving operational efficiency through workflow automation, data-driven systems, and production-ready full-stack development.",
    websiteUrl: "https://www.wholetex.com/",
  },
  {
    period: "June 2020 – July 2023",
    role: "Software Engineer",
    companyName: "TudeDude",
    companyUrl: "https://tudedude.com/",
    location: "India",
    techStack: "Full Stack, Video Streaming Architecture & EdTech Infrastructure",
    description:
      "Worked as a Software Engineer on the development and evolution of a production EdTech platform for online course delivery. Contributed across the full software development lifecycle, including frontend applications, backend services, REST APIs, database architecture, video-streaming infrastructure, administrative dashboards, authentication, content management, and production deployments. Took ownership of core platform functionality and worked across multiple layers of the system to build scalable and maintainable learning infrastructure.",
    modalId: "tudedudeModal",
    metricsTitle: "Key Engineering Impact & Capabilities",
    metrics: [
      {
        value: "Full-Stack Ownership",
        label: "End-to-End Delivery",
        subtext: "Frontend • Backend • APIs • Database",
      },
      {
        value: "Video Platform",
        label: "Media Engineering",
        subtext: "Streaming • Processing • Content Delivery",
      },
      {
        value: "Platform Admin",
        label: "Operational Tooling",
        subtext: "Dashboards • APIs • RBAC • Analytics",
      },
      {
        value: "Production Ready",
        label: "Systems Engineering",
        subtext: "Architecture • Deployment • Optimization",
      },
    ],
    techCategories: {
      "Frontend": [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Responsive UI",
        "Admin Dashboards",
        "Data Visualization",
      ],
      "Backend": [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Microservices",
        "Authentication & Authorization",
        "API Integration",
        "Background Processing",
      ],
      "Database": [
        "MongoDB",
        "Database Design",
        "Indexing",
        "Aggregation Pipelines",
        "Query Optimization",
      ],
      "Video / Media Engineering": [
        "Video Streaming",
        "Video Processing",
        "Media Asset Management",
        "Video Upload & Ingestion",
        "Secure Content Delivery",
        "Streaming APIs",
        "CDN-based Media Delivery",
      ],
      "Cloud / Infrastructure": [
        "AWS",
        "Object Storage",
        "CDN",
        "Cloud Deployment",
        "Docker",
        "Git",
        "CI/CD",
      ],
      "Engineering": [
        "Full-Stack Development",
        "Microservice Architecture",
        "RESTful Architecture",
        "System Design",
        "API Design",
        "Performance Optimization",
        "Role-Based Access Control",
        "Production Support",
      ],
    },
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Microservices",
      "Video Streaming",
      "Video Processing",
      "Media Asset Management",
      "AWS",
      "CDN",
      "Docker",
      "CI/CD",
      "Git",
      "Authentication & Authorization",
      "RBAC",
      "Admin Dashboards",
      "Data Visualization",
      "Database Design",
      "Query Optimization",
      "System Design",
      "Performance Engineering",
    ],
    engineeringAreas: [
      "MERN Stack",
      "Full-Stack Development",
      "Node.js",
      "Express.js",
      "React.js",
      "MongoDB",
      "REST APIs",
      "Microservices",
      "Video Streaming",
      "Media Processing",
      "Cloud Storage",
      "CDN",
      "Admin Dashboards",
      "Authentication",
      "RBAC",
      "API Design",
      "Database Optimization",
      "System Design",
      "Performance Engineering",
      "Production Support",
      "CI/CD",
      "Docker",
    ],
    projects: [
      {
        name: "Online Course Streaming Platform",
        prominent: true,
        prominentBadgeText: "Key Technical Highlight",
        tech: [
          "Node.js",
          "Express.js",
          "React.js",
          "MongoDB",
          "REST APIs",
          "Video Streaming",
          "Cloud Storage",
          "CDN",
        ],
        desc: "Contributed to the engineering of the core online course-streaming platform used to deliver video-based educational content to learners. Worked across the complete content-delivery lifecycle, from video ingestion and content management to secure access and playback.",
        technicalContribution:
          "Engineered end-to-end video delivery architecture: Video Ingestion → Processing → Storage → Secure Access → Streaming → Learner Playback. Built video ingestion pipelines, metadata indexing, streaming APIs, and authorization middleware connecting cloud object storage with CDN distribution.",
        highlights: [
          "Engineered the complete content delivery lifecycle: Ingestion → Processing → Object Storage → Secure Access → Streaming → Learner Playback.",
          "Developed core video ingestion workflows, automated metadata extraction, and hierarchical course/module/lesson content mapping.",
          "Implemented secure streaming APIs with time-limited authorization tokens, protecting copyrighted course media from unauthorized access.",
          "Integrated cloud object storage with edge CDN delivery, optimizing buffer caching, error recovery, and low-latency playback across learner devices."
        ],
      },
      {
        name: "Video Streaming Microservice",
        prominent: true,
        prominentBadgeText: "Key Technical Highlight",
        tech: [
          "Node.js",
          "Express.js",
          "REST APIs",
          "Microservices",
          "MongoDB",
          "Cloud Storage",
          "CDN",
        ],
        desc: "Worked extensively on the backend video-streaming microservice responsible for managing educational media assets and supporting scalable course-content delivery.",
        technicalContribution:
          "Architected media-oriented distributed microservice: Client → API → Streaming Service → Media Processing → Object Storage → CDN → Learner. Implemented upload chunking, metadata management, course-to-video relational schemas, content authorization, and stream resolution handling.",
        highlights: [
          "Architected distributed media microservice pipeline: Client → API → Streaming Service → Media Processing → Object Storage → CDN → Learner.",
          "Designed high-performance REST APIs for multi-part video uploads, asset metadata management, and dynamic course-to-video relationships.",
          "Built content authorization and validation middleware to enforce enrollment validation prior to stream token generation.",
          "Optimized database schema indexing and streaming server throughput to support concurrent high-bandwidth video playback."
        ],
      },
      {
        name: "Admin & Content Management Dashboard",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "RBAC"],
        desc: "Designed and developed a comprehensive administrative dashboard for managing the operational and content-management requirements of the EdTech platform.",
        technicalContribution:
          "Developed both the responsive React dashboard and the backend REST APIs powering administrative operations, role-based access control, state management, search, filtering, pagination, and platform analytics.",
        highlights: [
          "Built administrative operations tooling for managing users, instructors, students, courses, modules, lessons, and media assets.",
          "Engineered content publishing workflows, student enrollment tracking, subscription governance, and platform configuration panels.",
          "Developed reusable React UI components with robust client-side state management, form validation, and error boundaries.",
          "Enforced granular Role-Based Access Control (RBAC) protecting administrative endpoints and sensitive operational datasets."
        ],
      },
      {
        name: "Course & Content Management System",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
        desc: "Developed platform functionality for creating, organizing, publishing, and maintaining digital learning content across courses, modules, lessons, and video assets.",
        technicalContribution:
          "Implemented end-to-end content authoring workflows across frontend and backend layers, supporting structured hierarchical curriculum trees, publishing states, and instructor ownership.",
        highlights: [
          "Built intuitive course creation and editing interfaces supporting multi-tier course → module → lesson hierarchies.",
          "Implemented draft, review, and published lifecycle state transitions ensuring content quality prior to learner availability.",
          "Engineered video-to-lesson association mapping, instructor ownership rules, and access control policies across database records."
        ],
      },
      {
        name: "Learner & Course Access Platform",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Authentication"],
        desc: "Developed learner-facing functionality enabling users to discover courses, access authorized content, consume video lessons, and maintain learning progress.",
        technicalContribution:
          "Built learner portal features including student onboarding, catalog discovery, enrollment verification, integrated video playback, and persistent progress tracking.",
        highlights: [
          "Developed responsive course discovery interfaces, categorized catalogs, and intuitive syllabus previews.",
          "Implemented enrollment verification gates ensuring smooth transition from course registration to video lesson playback.",
          "Engineered learning progress persistence, tracking completed lessons, watch progress, and course completion milestones."
        ],
      },
      {
        name: "Authentication & Authorization",
        tech: ["Node.js", "Express.js", "JWT", "REST APIs", "RBAC"],
        desc: "Implemented secure authentication and authorization workflows across learner, instructor, and administrative applications.",
        technicalContribution:
          "Designed secure JWT authentication, session handling, token validation, and middleware-based role checks enforcing strict boundary separation across user tiers.",
        highlights: [
          "Implemented JWT authentication architecture with secure HTTP-only cookies, token expiration handling, and refresh strategies.",
          "Engineered middleware-based authorization enforcing role-specific permission checks for students, instructors, and platform admins.",
          "Protected sensitive platform routes, preventing privilege escalation and enforcing input sanitization across all public and private endpoints."
        ],
      },
      {
        name: "Analytics & Administrative Reporting",
        tech: ["React.js", "Node.js", "MongoDB", "REST APIs", "Data Visualization"],
        desc: "Developed data-driven administrative views and reporting functionality to provide visibility into platform activity, learner engagement, course performance, and operational metrics.",
        technicalContribution:
          "Built backend aggregation pipelines in MongoDB and frontend data visualization views for tracking student engagement, course completion rates, and enrollment trends.",
        highlights: [
          "Designed efficient MongoDB aggregation pipelines computing course enrollment metrics, retention curves, and learner engagement stats.",
          "Built interactive reporting views with date-range filtering, custom export tools, and operational metric summaries.",
          "Provided actionable platform visibility to administrative stakeholders for curriculum evaluation and business decisions."
        ],
      },
      {
        name: "Backend API & Platform Architecture",
        tech: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Microservices"],
        desc: "Designed and implemented backend APIs supporting core platform functionality and integrations across learner, administrative, content, and media services.",
        technicalContribution:
          "Engineered maintainable RESTful services with clear service-layer abstractions, centralized request validation, structured error logging, and modular database access layers.",
        highlights: [
          "Architected decoupled service boundaries isolating authentication, course catalog, user management, and media streaming domains.",
          "Implemented standardized API request validation, consistent error responses, and centralized logging middleware.",
          "Constructed reusable database access abstractions in MongoDB ensuring clean transactional boundaries and high testability."
        ],
      },
      {
        name: "Performance & Production Engineering",
        tech: ["Node.js", "MongoDB", "AWS", "Docker", "Git", "CI/CD"],
        desc: "Contributed to the reliability and performance of production applications through database optimization, API optimization, debugging, deployment, monitoring, and production support.",
        technicalContribution:
          "Conducted systematic query tuning, compound indexing, response caching, containerized deployment orchestration with Docker, and continuous integration on AWS.",
        highlights: [
          "Implemented compound indexing and query optimization on high-volume MongoDB collections, reducing database read latency.",
          "Engineered asynchronous background processing and lightweight API responses to maximize server throughput.",
          "Configured containerized application environments with Docker and assisted in automated CI/CD pipeline deployments on AWS."
        ],
      },
    ],
    impact:
      "Worked as a Software Engineer on the development and evolution of a production EdTech platform for online course delivery. Contributed across the full software development lifecycle, including frontend applications, backend services, REST APIs, database architecture, video-streaming infrastructure, administrative dashboards, authentication, content management, and production deployments. Took ownership of core platform functionality and worked across multiple layers of the system to build scalable and maintainable learning infrastructure.",
    websiteUrl: "https://tudedude.com/",
  },
];

const RESUME_SUMMARY =
  "Software Engineer with 6+ years of experience building scalable full-stack, backend, cloud-native, and AI-powered applications. Experienced in Node.js, NestJS, React, Next.js, TypeScript, microservices, REST APIs, AWS, and real-time systems, with expertise in designing production-grade architectures and automating complex business workflows. Hands-on experience building Agentic AI and LLM-powered applications using LangChain, LangGraph, RAG, and intelligent workflow orchestration. Currently pursuing an M.Sc. in Computer Science at the University of Helsinki, focusing on AI, Machine Learning, Distributed Systems, Cloud Computing, and Software Engineering.";

const EDUCATION_DATA = [
  {
    isCurrent: true,
    period: "August 2026 – Present",
    schoolName: "University of Helsinki",
    schoolUrl: "https://www.helsinki.fi/",
    board: "Helsinki, Finland",
    location: "Helsinki, Finland",
    status: "Ongoing",
    degree: "Master of Science (M.Sc.) in Computer Science",
    focusHighlight:
      "Software Development • Agentic Systems",
    description:
      "Currently pursuing a Master of Science in Computer Science at the University of Helsinki. Core area of study is a mix of software development and Agentic systems.",
    coreAreas: [
      "Software Development",
      "Agentic Systems",
      "Software Engineering",
      "Agentic AI & LLM Systems",
      "Distributed Systems",
      "Cloud-Native Architecture",
    ],
    scholarship: {
      title: "100% Merit-Based Tuition Scholarship",
      organization: "University of Helsinki — 2026",
    },
  },
  {
    period: "2020 - 2024",
    schoolName: "GTU - Gujarat Technological University",
    schoolUrl: "https://www.gtu.ac.in/",
    board: "Gujarat, India",
    degree: "BE in Information Technology",
    details: "CGPA: 9.45 / 10.0",
    description:
      "Completed Bachelor of Engineering in Information Technology at Gujarat Technological University (GTU), gaining comprehensive expertise across software engineering, data structures, database systems, and distributed networks. Graduated as College Topper with a CGPA of 9.45, demonstrating outstanding academic performance and practical engineering capability.",
    achievement: {
      title: "College Topper — CGPA: 9.45",
      organization: "GTU - Gujarat Technological University",
      icon: "bi-trophy-fill",
    },
  },
  {
    period: "2018 - 2020",
    schoolName: "Shree Naimisharanaya Gurukul",
    schoolUrl: "https://naimisharanya.edu.in/",
    board: "GSEB",
    degree: "HSE",
    details: "",
    description:
      "During my HSE, I delved into subjects like Physics, Chemistry, and Mathematics. Through rigorous coursework and engaging experiments, I honed my analytical and problem-solving skills. This educational journey provided a strong foundation for pursuing further studies in STEM disciplines and equipped me with the knowledge to excel in scientific pursuits.",
  },
];

const SKILLS_DATA = [
  {
    category: "AI & LLM Engineering",
    icon: "bi-robot",
    emoji: "🤖",
    skills: [
      "Agentic AI",
      "AI Agents",
      "LLM Applications",
      "RAG",
      "LLM Orchestration",
      "AI Workflow Automation",
      "Tool Calling",
      "Prompt Engineering",
      "Context Engineering",
      "Multi-Agent Systems",
      "Vector Search",
      "AI Solution Architecture",
    ],
  },
  {
    category: "AI Frameworks",
    icon: "bi-cpu",
    emoji: "🧠",
    skills: [
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "pgvector",
      "Pinecone",
      "LLM APIs",
    ],
  },
  {
    category: "Software Engineering",
    icon: "bi-gear-wide-connected",
    emoji: "⚙️",
    skills: [
      "Backend",
      "Full Stack",
      "Microservices",
      "Distributed Systems",
      "APIs",
      "Real-Time Systems",
      "Architecture",
      "Performance Engineering",
      "Automation",
    ],
  },
  {
    category: "Cloud & Infrastructure",
    icon: "bi-cloud-check",
    emoji: "☁️",
    skills: [
      "AWS",
      "Docker",
      "CI/CD",
      "Serverless",
      "Cloud-Native Architecture",
    ],
  },
  {
    category: "Programming Languages",
    icon: "bi-code-slash",
    emoji: "💻",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "SQL",
      "Go",
      "C/C++",
      "Solidity",
    ],
  },
  {
    category: "Frameworks",
    icon: "bi-boxes",
    emoji: "🧩",
    skills: [
      "Node.js",
      "NestJS",
      "Express",
      "React",
      "Next.js",
      "Socket.IO",
      "BullMQ",
      "Tailwind",
      "MUI",
    ],
  },
  {
    category: "Databases",
    icon: "bi-database",
    emoji: "🗄️",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "MySQL",
      "DynamoDB",
      "pgvector",
      "Pinecone",
    ],
  },
  {
    category: "Additional",
    icon: "bi-link-45deg",
    emoji: "⛓️",
    skills: [
      "Ethereum",
      "Solidity",
      "Ethers.js",
      "Web3",
    ],
  },
];

const PROFESSIONAL_SKILLS = [
  "Agentic AI",
  "AI Agents",
  "LLM Applications",
  "RAG",
  "Multi-Agent Systems",
  "Backend Development",
  "Full Stack Development",
  "Microservices",
  "Distributed Systems",
  "Cloud Architecture",
  "API Development",
  "System Architecture",
];

const LANGUAGES_LIST = [
  "TypeScript",
  "JavaScript",
  "Python",
  "Go",
  "C/C++",
  "Solidity",
  "SQL",
  "Node.js",
  "React.js",
  "Next.js",
  "NestJS",
  "Docker",
  "AWS",
  "PostgreSQL",
  "MongoDB",
  "Redis",
];

const EXTRACURRICULAR_DATA = [
  {
    title: "Youtube Channel",
    image: "assets/LIWP(1).webp",
    link: "https://www.youtube.com/channel/UCC6XM-0RirW0uYAafl0o6Wg",
    description:
      "I'm passionate about helping others learn new skills, and I believe that everyone has the potential to be a great programmer or IT professional. My videos are designed to be easy to follow and understand, even for those with no prior experience. I cover a wide range of topics, including programming languages, web development, data science, and more. Whether you're a beginner or an experienced IT professional, I'm sure you'll find something useful on my channel.",
  },
  {
    title: "NCC",
    image: "assets/WhatsApp Image 2023-05-22 at 2.03.46 PM.webp",
    link: null,
    description:
      "Among the memorable experiences during my time in the <b>NCC</b> was the Air Force Attachment Camp held at the esteemed Air Force Station Hyderabad and All India Vayu Sainik Camp held at Jodhpur. This camps offered a diverse range of activities, such as flying, shooting, and hiking, allowing us to fully immerse ourselves in the Air Force experience. Furthermore, the opportunity to meet and learn from Air Force officers was invaluable in shaping my perspective.",
  },
];
