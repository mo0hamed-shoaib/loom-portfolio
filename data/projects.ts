import type { Project } from "@/lib/schemas"

export const projects: Project[] = [
    // ==============================Rootly==============================
    {
      slug: "rootly-note-management-app",
      title: "Rootly Notes Management App",
      year: "2025",
      role: "Full-Stack Developer",
      summary: "Elegant, data-driven learning tracker that centralizes note-taking, course organization, progress tracking, and active recall through structured review sessions with performance analytics.",
      stack: ["nextjs", "react", "typescript", "supabase", "tailwind"],
      media: [
        {
          src: "/projects/rootly/rootly-0.png",
          type: "image",
          alt: "Rootly Notes Home Light",
        },
        {
          src: "/projects/rootly/rootly-1.png",
          type: "image",
          alt: "Rootly Notes Home",
        },
        {
          src: "/projects/rootly/rootly-2.png",
          type: "image",
          alt: "Rootly Notes",
        },
        {
          src: "/projects/rootly/rootly-3.png",
          type: "image",
          alt: "Rootly Notes Code Snippet",
        },
        {
          src: "/projects/rootly/rootly-4.png",
          type: "image",
          alt: "Rootly Add Notes",
        },
        {
          src: "/projects/rootly/rootly-5.png",
          type: "image",
          alt: "Rootly Courses",
        },
        
        {
          src: "/projects/rootly/rootly-6.png",
          type: "image",
          alt: "Rootly Daily Entries",
        },
        {
          src: "/projects/rootly/rootly-7.png",
          type: "image",
          alt: "Rootly Review",
        },
        {
          src: "/projects/rootly/rootly-8.png",
          type: "image",
          alt: "Rootly Light Orange",
        },
        {
          src: "/projects/rootly/rootly-9.png",
          type: "image",
          alt: "Rootly Light Green",
        },
      ],
      links: {
        demo: "https://rootly-notes.vercel.app/",
        source: "https://github.com/mo0hamed-shoaib/rootly-notes-app",
      },
      highlights: ["One platform to manage everything about your learning", "Tracking your learning progress with seamless dashboard and review system", "Export your notes to PDF"],
      caseStudyDetails: {
        problem: "Students and learners struggle with fragmented learning management - scattered notes across multiple apps, no way to track study progress, and lack of systematic review mechanisms to reinforce knowledge retention.",
        solution: "Built a comprehensive learning management platform that centralizes note-taking, course organization, progress tracking, and active recall through structured review sessions with performance analytics.",
        architecture: "Next.js 14 with App Router for optimal performance, Supabase for real-time database and authentication, TypeScript for type safety, and Tailwind CSS with shadcn/ui for consistent design system.",
        challenges: [
          "Designing an intuitive interface for complex learning workflows",
          "Implementing real-time data synchronization across multiple features",
          "Creating an effective spaced repetition system for knowledge retention",
          "Optimizing performance for large datasets of notes and courses"
        ],
        results: [
          "Unified learning experience with 4 core features in one platform",
          "Real-time progress tracking with mood and time analytics",
          "Active recall system with performance metrics and review scheduling",
          "PDF export functionality for offline study materials"
        ],
      },
    },
  // ==============================Naafe==============================
  {
    slug: "service-exchange-platform",
    title: "Naafe Service Exchange Platform",
    year: "2025",
    role: "Full-Stack Developer",
    summary: "Smart platform connecting users with trusted local service providers through AI-powered matching algorithms, secure escrow payments, verified profiles, and intelligent scheduling systems.",
    stack: ["react", "typescript", "mongodb", "nodejs", "express", "tailwind"],
    media: [
      {
        src: "/projects/naafe/naafe-1.png",
        type: "image",
        alt: "Naafe homepage",
      },
      {
        src: "/projects/naafe/naafe-2.png",
        type: "image",
        alt: "Naafe Service Explore",
      },
      {
        src: "/projects/naafe/naafe-4.png",
        type: "image",
        alt: "Naafe Dashboard",
      },
      {
        src: "/projects/naafe/naafe-5.png",
        type: "image",
        alt: "Naafe Scheduler",
      },
      {
        src: "/projects/naafe/naafe-6.png",
        type: "image",
        alt: "Naafe Service Request",
      },
      {
        src: "/projects/naafe/naafe-8.png",
        type: "image",
        alt: "Naafe Service Details",
      },
      {
        src: "/projects/naafe/naafe-7.png",
        type: "image",
        alt: "Naafe Categories",
      },
    ],
    links: {
      demo: "https://ecommerce-demo.vercel.app",
      source: "https://github.com/YahyaHassan1914/Naafe",
      caseStudy: "ecommerce-platform",
    },
    highlights: ["Localized a platfrom for service exhchange", "Introduced Escrow Payment concept", "Ease of use for all age groups"],
    caseStudyDetails: {
      problem: "Local communities lack a trusted platform to connect service providers with customers, leading to unreliable service quality, payment disputes, and difficulty finding qualified professionals for specific needs.",
      solution: "Developed a comprehensive service exchange platform with AI-powered matching, verified provider profiles, secure escrow payments, and intelligent scheduling to create a trusted marketplace for local services.",
      architecture: "React frontend with TypeScript for type safety, Node.js/Express backend for API services, MongoDB for flexible data modeling, and Tailwind CSS for responsive design with real-time features.",
      challenges: [
        "Implementing secure escrow payment system for service transactions",
        "Building AI-powered matching algorithm for service provider recommendations",
        "Creating comprehensive verification system for service providers",
        "Designing intuitive interface accessible to users of all age groups"
      ],
      results: [
        "Trusted marketplace with verified provider profiles and reviews",
        "Secure escrow payment system protecting both customers and providers",
        "AI-powered service matching improving connection success rates",
        "User-friendly interface designed for all demographics"
      ],
    },
  },
  // ==============================NoirKit==============================
  {
    slug: "noirkit-portfolio-manager",
    title: "NoirKit Portfolio Manager",
    year: "2025",
    role: "Full-Stack Developer",
    summary: "Comprehensive portfolio management platform with animated canvas backgrounds, interactive setup guides, drag-and-drop reordering, and real-time synchronization between dashboard and public views.",
    stack: ["nextjs", "react", "typescript", "supabase", "tailwind"],
    media: [
      {
        src: "/projects/noirkit/noirkit-1.png",
        type: "image",
        alt: "NoirKit Portfolio",
      },
      {
        src: "/projects/noirkit/noirkit-2.png",
        type: "image",
        alt: "NoirKit Portfolio",
      },
      {
        src: "/projects/noirkit/noirkit-3.png",
        type: "image",
        alt: "NoirKit Dashboard Personal Info",
      },
      {
        src: "/projects/noirkit/noirkit-4.png",
        type: "image",
        alt: "NoirKit Dashboard Projects",
      },
      {
        src: "/projects/noirkit/noirkit-5.png",
        type: "image",
        alt: "NoirKit Dashboard Tech Stack",
      },
      {
        src: "/projects/noirkit/noirkit-6.png",
        type: "image",
        alt: "NoirKit Dashboard Contact Form",
      },
      {
        src: "/projects/noirkit/noirkit-7.png",
        type: "image",
        alt: "NoirKit Loading Screen",
      },
      {
        src: "/projects/noirkit/noirkit-8.png",
        type: "image",
        alt: "NoirKit Welcome Page",
      },
    ],
    links: {
      demo: "https://mohamedgamal-noir.vercel.app/",
      source: "https://github.com/mo0hamed-shoaib/noirkit-portfolio-manager",
    },
    highlights: ["Complete Portfolio Manager from Dashboard", "Drag & Drop Reordering", "Data Backup & Restore"],
    caseStudyDetails: {
      problem: "Developers and professionals struggle to maintain professional portfolios - manual updates are time-consuming, content management is fragmented, and there's no unified system for managing projects, skills, and contact information.",
      solution: "Created a comprehensive portfolio management platform with animated backgrounds, interactive setup guides, and real-time content management that allows users to build and maintain stunning professional portfolios effortlessly.",
      architecture: "Next.js 14 with App Router for optimal performance, Supabase for real-time database and authentication, TypeScript for type safety, and advanced animations with staggered content reveals for exceptional UX.",
      challenges: [
        "Designing animated canvas backgrounds that enhance rather than distract",
        "Creating intuitive drag-and-drop interface for content reordering",
        "Implementing real-time data synchronization across dashboard and public views",
        "Building comprehensive backup and restore functionality for user data"
      ],
      results: [
        "Complete portfolio management system with drag-and-drop reordering",
        "Stunning animated backgrounds and staggered content reveals",
        "Real-time synchronization between dashboard and public portfolio",
        "Comprehensive data backup and restore functionality"
      ],
    },
  },
  // ==============================Yolo==============================
  {
    slug: "social-media-platform",
    title: "Yolo Social Media Platform",
    year: "2025",
    role: "Full-Stack Developer",
    summary: "Full-stack social media platform built with MERN stack featuring user authentication, post creation, real-time interactions, likes, comments, and streamlined content sharing experience.",
    stack: ["react", "javascript", "nodejs", "express", "mongodb", "tailwind"],
    media: [
      {
        src: "/projects/yolo/yolo-1.png",
        type: "image",
        alt: "Yolo Landing Page",
      },
      {
        src: "/projects/yolo/yolo-2.png",
        type: "image",
        alt: "Yolo Homepage",
      },
      
      {
        src: "/projects/yolo/yolo-3.png",
        type: "image",
        alt: "Yolo Register Page",
      },
      
    ],
    links: {
      demo: "https://yolo-social-media.vercel.app/",
      source: "https://github.com/mo0hamed-shoaib/yolo-social-media",
    },
    highlights: ["Complete Authentication System with JWT", "Post and Comment System", "Image upload and storage"],
    caseStudyDetails: {
      problem: "Modern social media platforms are often complex and overwhelming, creating barriers for users who want simple, intuitive ways to connect and share content without unnecessary features and distractions.",
      solution: "Built a streamlined social media platform focusing on core features - user authentication, content sharing, and community interaction - with a clean, intuitive interface that prioritizes user experience over feature bloat.",
      architecture: "React frontend with modern JavaScript, Node.js/Express backend for RESTful APIs, MongoDB for flexible data storage, JWT for secure authentication, and Tailwind CSS for responsive design.",
      challenges: [
        "Implementing secure JWT authentication with proper token management",
        "Building real-time post and comment system with proper data relationships",
        "Creating efficient image upload and storage system",
        "Designing intuitive UI/UX that simplifies social media interaction"
      ],
      results: [
        "Complete authentication system with JWT security",
        "Streamlined post and comment system for easy content sharing",
        "Efficient image upload and storage functionality",
        "Clean, intuitive interface that reduces user friction"
      ],
    },
  },
  // ==============================GameHaven==============================
  {
    slug: "game-store-backend",
    title: "GameHaven Store Backend System",
    year: "2025",
    role: "Node.js Backend Developer",
    summary: "Comprehensive RESTful API for digital video game marketplace with user authentication, game catalog management, shopping cart functionality, order processing, and review systems.",
    stack: ["nodejs", "express", "mongodb"],
    media: [
      {
        src: "/projects/gamehaven/gamehaven-1.png",
        type: "image",
        alt: "GameHaven Enpoints",
      },
      {
        src: "/projects/gamehaven/gamehaven-2.png",
        type: "image",
        alt: "GameHaven Respnose Example",
      },
      
      {
        src: "/projects/gamehaven/gamehaven-3.png",
        type: "image",
        alt: "GameHaven Schema",
      },
    ],
    links: {
      demo: "https://gamehaven-marketplace-api.vercel.app/",
      source: "https://github.com/mo0hamed-shoaib/gamehaven-marketplace-api",
    },
    highlights: ["Clean architecture and modular code", "Full CRUD operations", "Authentication and Authorization with JWT"],
    caseStudyDetails: {
      problem: "Digital game marketplaces need robust backend systems to handle complex operations like user authentication, game catalog management, shopping cart functionality, order processing, and review systems while maintaining performance and scalability.",
      solution: "Developed a comprehensive RESTful API with clean architecture, modular design, and full CRUD operations for a digital video game marketplace, including advanced features like JWT authentication and comprehensive data validation.",
      architecture: "Node.js with Express.js for RESTful API development, MongoDB for flexible game and user data storage, JWT for secure authentication and authorization, and modular code structure for maintainability and scalability.",
      challenges: [
        "Designing scalable database schema for games, users, orders, and reviews",
        "Implementing secure JWT authentication with proper authorization levels",
        "Creating comprehensive CRUD operations with proper error handling",
        "Building modular architecture for easy maintenance and feature expansion"
      ],
      results: [
        "Complete RESTful API with full CRUD operations for all entities",
        "Secure JWT authentication and role-based authorization system",
        "Clean, modular architecture enabling easy maintenance and scaling",
        "Comprehensive error handling and data validation throughout the system"
      ],
    },
  },
  // ==============================MishMish==============================
  {
    slug: "ecommerce-platform",
    title: "MishMish Ecommerce Store",
    year: "2025",
    role: "Full-Stack Developer",
    summary: "Cutting-edge e-commerce platform built with Angular 19 and TypeScript, featuring modern web standards, Flowbite UI components, and comprehensive shopping experience with responsive design.",
    stack: ["angular", "typescript", "html", "css", "tailwind"],
    media: [
      {
        src: "/projects/mishmish/mishmish-1.png",
        type: "image",
        alt: "MishMish Store Homepage",
      },
      {
        src: "/projects/mishmish/mishmish-2.png",
        type: "image",
        alt: "MishMish Product Page",
      },
      {
        src: "/projects/mishmish/mishmish-3.png",
        type: "image",
        alt: "MishMish Light Mode",
      },
      {
        src: "/projects/mishmish/mishmish-4.png",
        type: "image",
        alt: "MishMish Categories",
      },
    ],
    links: {
      source: "https://github.com/mo0hamed-shoaib/mishmish-ecommerce-angular",
    },
    highlights: ["Clean architecture and modular code", "Best Practices with Angular 19", "Authentication and Authorization with JWT"],
    caseStudyDetails: {
      problem: "E-commerce platforms need to balance powerful functionality with excellent performance, requiring advanced features like social authentication, wishlists, and shopping carts while maintaining fast loading times and responsive design.",
      solution: "Built a cutting-edge e-commerce platform using Angular 19 with TypeScript for type safety, implementing modern web standards, best practices, and elegant UI design with Flowbite components for optimal user experience.",
      architecture: "Angular 19 with TypeScript for robust frontend development, modular component architecture for maintainability, JWT for secure authentication, and Flowbite UI components with Tailwind CSS for consistent, elegant design.",
      challenges: [
        "Implementing Angular 19 best practices and modern development patterns",
        "Creating modular component architecture for scalable e-commerce features",
        "Integrating JWT authentication with proper security measures",
        "Designing responsive UI with Flowbite components and Tailwind CSS"
      ],
      results: [
        "Modern e-commerce platform built with Angular 19 and TypeScript",
        "Clean, modular architecture following Angular best practices",
        "Secure JWT authentication system for user management",
        "Elegant, responsive design using Flowbite UI components"
      ],
    },
  },
  // ==============================Rovera==============================
  {
    slug: "rovera-dashboard",
    title: "Rovera Car Rental Management System",
    year: "2025",
    role: "Full-Stack Developer",
    summary: "Comprehensive web-based car rental management system with modern admin dashboard, booking management, vehicle tracking, customer administration, and responsive design for business operations.",
    stack: ["javascript", "html", "css", "bootstrap"],
    media: [
      {
        src: "/projects/rovera/rovera-1.png",
        type: "image",
        alt: "Rovera Dashboard Homepage",
      },
      {
        src: "/projects/rovera/rovera-2.png",
        type: "image",
        alt: "Rovera Dashboard Cars",
      },
    ],
    links: {
      demo: "https://car-rental-admin-dashboard.vercel.app/",
      source: "https://github.com/mo0hamed-shoaib/car-rental-admin-dashboard",
    },
    highlights: ["Modern UI/UX", "Responsive Design", "Admin Dashboard"],
    caseStudyDetails: {
      problem: "Car rental businesses struggle with manual management of vehicles, bookings, and customer data, leading to inefficiencies, booking conflicts, and poor customer experience due to lack of centralized management systems.",
      solution: "Developed a comprehensive web-based car rental management system with modern UI/UX, responsive design, and complete admin dashboard for managing vehicles, bookings, customers, and business operations efficiently.",
      architecture: "Vanilla JavaScript for core functionality, HTML5 for semantic structure, CSS3 for styling, and Bootstrap for responsive design and modern UI components, creating a lightweight yet powerful management system.",
      challenges: [
        "Designing intuitive admin dashboard for complex rental operations",
        "Implementing responsive design that works across all devices",
        "Creating efficient booking management system to prevent conflicts",
        "Building modern UI/UX that simplifies complex rental workflows"
      ],
      results: [
        "Complete car rental management system with modern admin dashboard",
        "Responsive design ensuring usability across all devices",
        "Efficient booking and vehicle management system",
        "Intuitive UI/UX that streamlines rental operations"
      ],
    },
  },
  // ==============================SageAI==============================
  {
    slug: "sageai-assistant",
    title: "SageAI Assistant",
    year: "2025",
    role: "Full-Stack Developer",
    summary: "Multi-modal AI assistant integrating Groq's Llama 3.3 70B for intelligent chat, Stable Diffusion for image generation, and OpenAI Assistant API for file analysis with beautiful interface.",
    stack: ["react", "javascript", "nodejs", "express", "mongodb", "tailwind"],
    media: [
      {
        src: "/projects/sageai/sage-ai-1.png",
        type: "image",
        alt: "SageAI Assistant Homepage",
      },
      {
        src: "/projects/sageai/sage-ai-2.png",
        type: "image",
        alt: "SageAI Assistant Chat Interface",
      },
      {
        src: "/projects/sageai/sage-ai-3.png",
        type: "image",
        alt: "SageAI Assistant Light Mode",
      },
      {
        src: "/projects/sageai/sage-ai-4.png",
        type: "image",
        alt: "SageAI Assistant Image Generation",
      },
      {
        src: "/projects/sageai/sage-ai-5.png",
        type: "image",
        alt: "SageAI Assistant Image Generation Result",
      },
    ],
    links: {
      demo: "https://sage-ai-assistant-eight.vercel.app/",
      source: "https://github.com/mo0hamed-shoaib/sage-ai",
    },
    highlights: ["Intelligent Chat using Groq's Llama 3.3 70B", "Image Generation using Stable Diffusion models", "File Analysis using OpenAI Assistant API"],
    caseStudyDetails: {
      problem: "Users need accessible AI assistants that combine multiple AI capabilities - text generation, image creation, and file analysis - in a single, beautiful interface that's both powerful and user-friendly.",
      solution: "Built a comprehensive AI assistant that integrates multiple AI services including Groq's Llama 3.3 70B for intelligent chat, Stable Diffusion for image generation, and OpenAI Assistant API for file analysis, all wrapped in a stunning, modern interface.",
      architecture: "React frontend with Vite for fast development, Node.js/Express backend for API integration, MongoDB for conversation history, Tailwind CSS for beautiful design, and multiple AI service integrations for comprehensive functionality.",
      challenges: [
        "Integrating multiple AI services with different APIs and response formats",
        "Creating beautiful, responsive interface that enhances AI interactions",
        "Implementing real-time chat with conversation history management",
        "Building efficient file upload and analysis system with AI processing"
      ],
      results: [
        "Multi-modal AI assistant with chat, image generation, and file analysis",
        "Beautiful, responsive interface with theme toggle functionality",
        "Real-time chat system with conversation history and context",
        "Efficient file analysis system using OpenAI Assistant API"
      ],
    },
  },
  // ==============================Grill King==============================
  {
    slug: "grill-king-homepage",
    title: "Grill King Homepage",
    year: "2025",
    role: "Frontend Developer",
    summary: "Modern, responsive restaurant website with full RTL layout support, optimized for Arabic content, featuring Bootstrap 5 components and cultural adaptation for Arabic-speaking customers.",
    stack: ["javascript", "html", "css", "bootstrap"],
    media: [
      {
        src: "/projects/grillking/grill-1.png",
        type: "image",
        alt: "Grill King Homepage",
      },
      {
        src: "/projects/grillking/grill-2.png",
        type: "image",
        alt: "Grill King About Us",
      },
    ],
    links: {
      demo: "https://grill-king-restaurant.vercel.app/",
      source: "https://github.com/mo0hamed-shoaib/Grill-King-Restaurant",
    },
    highlights: ["Modern UI/UX", "Responsive Design", "RTL Layout"],
    caseStudyDetails: {
      problem: "Restaurants serving Arabic-speaking customers need websites that not only showcase their services effectively but also provide proper RTL (Right-to-Left) layout support and cultural adaptation for Arabic content and user preferences.",
      solution: "Created a modern, responsive restaurant website with full RTL layout support, optimized for Arabic content, featuring Bootstrap 5 for responsive design and cultural adaptation for Arabic-speaking customers.",
      architecture: "HTML5 for semantic structure, CSS3 for custom styling, Bootstrap 5 for responsive design and components, JavaScript for interactivity, and specialized RTL layout implementation for Arabic content optimization.",
      challenges: [
        "Implementing proper RTL layout support for Arabic content",
        "Creating responsive design that works across all devices and orientations",
        "Designing culturally appropriate interface for Arabic-speaking customers",
        "Optimizing performance while maintaining beautiful, modern design"
      ],
      results: [
        "Fully responsive restaurant website with modern UI/UX",
        "Complete RTL layout support for Arabic content",
        "Cultural adaptation for Arabic-speaking customer base",
        "Optimized performance and accessibility across all devices"
      ],
    },
  },
  // ==============================ShopMi==============================
  {
    slug: "shopime-ecommerce",
    title: "Shopime Ecommerce Store",
    year: "2025",
    role: "Full-Stack Developer",
    summary: "Modern e-commerce platform built with Next.js 14 App Router, featuring shopping cart functionality, wishlist management, social authentication, and complete order processing system.",
    stack: ["nextjs", "react", "typescript", "tailwind"],
    media: [
      {
        src: "/projects/shopime/shopi-1.png",
        type: "image",
        alt: "Shopime Products",
      },
      {
        src: "/projects/shopime/shopi-2.png",
        type: "image",
        alt: "Shopime Cart",
      },
      {
        src: "/projects/shopime/shopi-3.png",
        type: "image",
        alt: "Shopime Wishlist",
      },
      {
        src: "/projects/shopime/shopi-4.png",
        type: "image",
        alt: "Shopime Login",
      },
      {
        src: "/projects/shopime/shopi-5.png",
        type: "image",
        alt: "Shopime Profile",
      },
    ],
    links: {
      source: "https://github.com/mo0hamed-shoaib/nextjs-shopime-ecommerce",
    },
    highlights: ["Core E-commerce Features", "Optimized Next.js 14 App Router architecture", "Full TypeScript implementation"],
    caseStudyDetails: {
      problem: "Modern e-commerce platforms need to balance powerful functionality with excellent performance, requiring advanced features like social authentication, wishlists, and shopping carts while maintaining fast loading times and responsive design.",
      solution: "Built a comprehensive e-commerce platform using Next.js 14 with App Router for optimal performance, implementing core e-commerce features, social authentication, and full TypeScript for robust development.",
      architecture: "Next.js 14 with App Router for optimal performance and SEO, React with TypeScript for type safety, Tailwind CSS for responsive design, and integration with Facebook and Google OAuth for seamless authentication.",
      challenges: [
        "Implementing Next.js 14 App Router for optimal performance and SEO",
        "Creating comprehensive e-commerce features with shopping cart and wishlist",
        "Integrating social authentication with Facebook and Google OAuth",
        "Building responsive design that works across all devices and screen sizes"
      ],
      results: [
        "Complete e-commerce platform with core shopping features",
        "Optimized performance using Next.js 14 App Router architecture",
        "Seamless social authentication with Facebook and Google OAuth",
        "Full TypeScript implementation ensuring code quality and maintainability"
      ],
    },
  },
  // ==============================Bankist==============================
  {
    slug: "bankist-dashboard",
    title: "Bankist Banking Dashboard",
    year: "2025",
    role: "Frontend Developer",
    summary: "Comprehensive banking dashboard with secure financial operations, automatic language detection, robust validation systems, and session timeout management for enhanced security.",
    stack: ["javascript", "html", "css"],
    media: [
      {
        src: "/projects/bankist/bankist-1.png",
        type: "image",
        alt: "Bankist Dashboard",
      },
      {
        src: "/projects/bankist/bankist-2.png",
        type: "image",
        alt: "Bankist Dashboard",
      },
    ],
    links: {
      demo: "https://precious-gecko-308d8b.netlify.app/",
      source: "https://github.com/mo0hamed-shoaib/Bankist-Dashboard",
    },
    highlights: ["Local Language Auto Detection", "Validation & Error Handling", "Timeout Session Handling"],
    caseStudyDetails: {
      problem: "Banking applications require secure, user-friendly interfaces that handle complex financial operations, provide proper validation, support multiple languages, and maintain session security while offering intuitive user experience.",
      solution: "Developed a comprehensive banking dashboard with advanced JavaScript functionality, implementing local language detection, robust validation systems, secure session management, and intuitive user interface for financial operations.",
      architecture: "Vanilla JavaScript for core banking functionality, HTML5 for semantic structure, CSS3 for styling and animations, with advanced features like language detection, form validation, and session timeout handling.",
      challenges: [
        "Implementing secure banking operations with proper validation",
        "Creating automatic language detection and localization",
        "Building robust error handling and user feedback systems",
        "Designing intuitive interface for complex financial operations"
      ],
      results: [
        "Complete banking dashboard with secure financial operations",
        "Automatic language detection and localization support",
        "Comprehensive validation and error handling system",
        "Secure session management with timeout functionality"
      ],
    },
  },
]
