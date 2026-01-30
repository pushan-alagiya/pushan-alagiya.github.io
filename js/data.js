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
    period: "Jan 2024 - Present",
    role: "SE L2",
    companyName: "Crest Infosystems",
    companyUrl: "https://www.crestinfosystems.com/",
    location: "Surat, Gujarat",
    techStack: "MERN Stack, NextJS & NestJS",
    description:
      "As a Full Stack Developer, I design and build scalable web applications, working across both frontend and backend. My skills include developing robust APIs, optimizing databases, and architecting cloud-based solutions. I focus on performance, security, and maintainability, collaborating with teams to deliver reliable products. My experience spans modern frameworks and tools, enabling me to create efficient, user-friendly solutions that meet evolving business needs. Additionally, I specialize in AI development, building intelligent solutions using LangChain, LangGraph, and Python to create agentic AI systems that automate complex workflows and enhance user experiences.",
    modalId: "crestModal",
    technologies: [
      "MERN Stack",
      "Next.js",
      "NestJS",
      "Node.js",
      "Cloud Tools",
      "AI/ML",
      "LangChain",
      "LangGraph",
      "Python",
    ],
    projects: [
      {
        name: "Chores for Me",
        desc: "Developed robust backend systems and APIs using Node.js, managed databases, and leveraged cloud tools to ensure scalability and reliability.",
      },
      {
        name: "Adbox Marketing Platform",
        desc: "Worked on a comprehensive marketing platform, crafting complex queries, integrating Image.LY for image editing, and optimizing SEO for better reach.",
      },
      {
        name: "DigiFama Real Estate",
        desc: "Led the development of a real estate platform, implementing whitelabeling, user emulation features, and seamless payment integration.",
      },
      {
        name: "Pikhaul Logistics",
        desc: "Engineered real-time logistics solutions, focusing on performance and scalability for large-scale user applications.",
      },
      {
        name: "Wakabay 3PL Platform",
        desc: "Contributed to a Third-Party Logistics platform, designing scalable architectures and optimizing system performance.",
      },
    ],
    impact:
      "These experiences have strengthened my expertise in designing, developing, and deploying full stack applications, while collaborating across the entire software development lifecycle to deliver reliable, scalable products. My work in AI development, particularly with LangChain and LangGraph, has enabled me to create intelligent, agentic solutions that automate complex workflows and enhance user experiences through advanced AI capabilities.",
    websiteUrl: "https://www.crestinfosystems.com/",
  },
  {
    period: "July 2023",
    role: "Full Stack Developer",
    companyName: "Wholetex Pvt. Ltd.",
    companyUrl: "https://www.wholetex.com/",
    location: "Surat, Gujarat",
    techStack: "MERN Stack",
    description:
      'During my tenure at Wholetex Pvt. Ltd., I delved into MERN stack development, focusing on my project "<b class="text-primary">Admin Panel QR Code Product Tracking.</b>" Building an efficient system to track products via QR codes was both challenging and rewarding. This hands-on experience not only honed my coding skills but also provided invaluable insights into real-world web development.',
    modalId: "wholetexModal",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "QR Code"],
    projects: [
      {
        name: "Admin Panel QR Code Product Tracking",
        desc: "Developed a comprehensive QR code-based product tracking system with dynamic QR code generation for supply chain management.",
      },
      {
        name: "Real-time Inventory Management",
        desc: "Built responsive admin panel for managing products, tracking inventory, and monitoring product movement with MongoDB integration.",
      },
      {
        name: "RESTful API Development",
        desc: "Created robust APIs using Express.js and Node.js for product operations, user authentication, and comprehensive data management.",
      },
      {
        name: "Database Architecture",
        desc: "Designed efficient database schemas for storing product information, tracking history, and user management in industrial settings.",
      },
    ],
    websiteUrl: "https://www.wholetex.com/",
  },
  {
    period: "July 2023",
    role: "Web Dev Intern",
    companyName: "Technohacks",
    companyUrl: "https://technohacks.co.in/",
    location: "Virtual Internship",
    techStack: "HTML, CSS & JavaScript",
    description:
      'During my internship at Technohacks, I dove into the realm of web development, concentrating on sculpting a lively <b class="text-primary">"Product Page"</b> for a website. Through refining my skills in HTML, CSS, and JavaScript, I infused captivating visuals and seamless navigation into the project.',
    modalId: "technohacksModal",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"],
    projects: [
      {
        name: "Dynamic Product Page Development",
        desc: "Created fully responsive product page with seamless adaptation across desktop, tablet, and mobile devices using modern CSS techniques.",
      },
      {
        name: "Interactive UI Elements",
        desc: "Implemented engaging features including image galleries, product zoom functionality, and dynamic content updates with vanilla JavaScript.",
      },
      {
        name: "Performance Optimization",
        desc: "Applied CSS and JavaScript optimization techniques to ensure fast loading times and smooth user experience across all devices.",
      },
      {
        name: "Cross-browser Compatibility",
        desc: "Ensured consistent functionality and appearance across different browsers while maintaining clean, well-documented code standards.",
      },
    ],
    websiteUrl: "https://technohacks.co.in/",
  },
  {
    period: "Jan 2023",
    role: "Full Stack Web Dev Intern",
    companyName: "EDXL",
    companyUrl: "https://www.edxl.in/",
    location: "Virtual Internship",
    techStack: "Healthcare Management System",
    description:
      'During my internship at EDXL, I immersed myself in full stack web development, spearheading the creation of a <b class="text-primary">"Clinic Management System."</b> This hands-on journey honed not only my front-end and back-end skills but also offered practical solutions for a critical healthcare project.',
    modalId: "edxlModal",
    technologies: [
      "Full Stack",
      "Healthcare Tech",
      "Web Development",
      "Database Design",
      "UI/UX",
    ],
    projects: [
      {
        name: "Clinic Management System",
        desc: "Developed comprehensive healthcare management solution with patient registration, profile management, and medical history tracking.",
      },
      {
        name: "Appointment Scheduling System",
        desc: "Implemented intuitive booking system with calendar integration, automated reminders, and real-time availability management.",
      },
      {
        name: "Digital Medical Records",
        desc: "Designed secure medical record storage with easy retrieval, update functionality, and comprehensive doctor dashboard integration.",
      },
      {
        name: "Billing & Analytics System",
        desc: "Integrated payment processing features and developed analytics tools for clinic administration and performance tracking.",
      },
    ],
    websiteUrl: "https://www.edxl.in/",
  },
];

const EDUCATION_DATA = [
  {
    period: "2020 - 2024",
    schoolName: "Shantilal Shah Engineering College",
    schoolUrl: "http://www.ssgec.ac.in/",
    board: "GTU",
    degree: "BE in Information Technology",
    details: "CGPA: 9.45 | College Topper",
    description:
      "In my college study of Information Technology, I gained a comprehensive understanding of computer systems, programming languages, network administration, and database management. Through practical projects and theoretical coursework, I developed the skills to analyze complex problems, design innovative solutions, and implement cutting-edge technologies. I graduated as the college topper with a CGPA of 9.45, demonstrating excellence in both theoretical knowledge and practical application.",
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

const PROFESSIONAL_SKILLS = [
  "Full Stack Development",
  "Backend Development",
  "Frontend Development",
  "Cloud Architecture",
  "Blockchain Development",
  "Smart Contract Development",
  "AI Development",
  "Agentic AI Solutions",
  "LangChain",
  "LangGraph",
  "API Development",
  "Database Design",
  "DevOps & Deployment",
];

const LANGUAGES_LIST = [
  "Node.js",
  "React.js",
  "Next.js",
  "TypeScript",
  "NestJS",
  "Express.js",
  "Python",
  "Solidity",
  "LangChain",
  "LangGraph",
  "GraphQL",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "AWS",
  "Docker",
  "Kubernetes",
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
