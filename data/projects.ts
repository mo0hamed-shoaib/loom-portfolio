import type { Project } from "@/lib/schemas"

export const projects: Project[] = [
    // ==============================Rootly==============================
    {
      slug: "rootly-note-management-app",
      title: "Rootly Notes Management App",
      year: "2025",
      role: "Full-Stack Developer",
      summary: "Elegant, data-driven learning tracker to Capture Q&A notes, organize by courses, log daily study time and mood, and practice with a review session & result system.",
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
    },
  // ==============================Naafe==============================
  {
    slug: "service-exchange-platform",
    title: "Naafe Service Exchange Platform",
    year: "2025",
    role: "Full-Stack Developer",
    summary: "Nafee’ is a smart platform connecting users with trusted local service providers through AI-powered matching, schedules, and verified profiles.",
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
      problem:
        "Client needed a scalable e-commerce solution that could handle high traffic and provide personalized shopping experiences.",
      solution:
        "Built a modern platform using Next.js with server-side rendering, implemented AI-powered product recommendations, and optimized for performance.",
      architecture:
        "Microservices architecture with Next.js frontend, Node.js APIs, PostgreSQL database, and Redis caching layer.",
      challenges: [
        "Handling high concurrent users during flash sales",
        "Implementing real-time inventory management",
        "Creating personalized recommendation engine",
      ],
      results: [
        "35% increase in conversion rate",
        "60% reduction in page load time",
        "99.9% uptime during peak traffic",
      ],
    },
  },
  // ==============================NoirKit==============================
  {
    slug: "noirkit-portfolio-manager",
    title: "NoirKit Portfolio Manager",
    year: "2025",
    role: "Full-Stack Developer",
    summary: "Manage your complete professional presence through an intuitive dashboard, from projects and tech stacks to achievements and custom contact forms, and mobile-optimized experience.",
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
  },
  // ==============================Yolo==============================
  {
    slug: "social-media-platform",
    title: "Yolo Social Media Platform",
    year: "2025",
    role: "Full-Stack Developer",
    summary: "Yolo is a cutting-edge social media platform that brings people together through seamless UI/UX and ease of use. Built as part of a comprehensive bootcamp assignment at ITI.",
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
  },
  // ==============================GameHaven==============================
  {
    slug: "game-store-backend",
    title: "GameHaven Store Backend System",
    year: "2025",
    role: "Node.js Backend Developer",
    summary: "A RESTful API for GameHaven marketplace, a digital video game marketplace. Features include user authentication, game management, shopping cart functionality, order processing, and review system.",
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
  },
  // ==============================MishMish==============================
  {
    slug: "ecommerce-platform",
    title: "MishMish Ecommerce Store",
    year: "2025",
    role: "Full-Stack Developer",
    summary: "A cutting-edge e-commerce platform that combines the power of Angular 19 with the elegant design of Flowbite UI components. Built with modern web standards and best practices.",
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
  },
  // ==============================Rovera==============================
  {
    slug: "rovera-dashboard",
    title: "Rovera Car Rental Management System",
    year: "2025",
    role: "Full-Stack Developer",
    summary: "A modern web-based car rental management system that provides a comprehensive solution for managing car rentals, bookings, and user administration.",
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
  },
  // ==============================SageAI==============================
  {
    slug: "sageai-assistant",
    title: "SageAI Assistant",
    year: "2025",
    role: "Full-Stack Developer",
    summary: "A stunning, modern AI assistant built with React, Vite, and Tailwind CSS. Features a beautiful theme toggle, image generation, and file attachments.",
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
  },
  // ==============================Grill King==============================
  {
    slug: "grill-king-homepage",
    title: "Grill King Homepage",
    year: "2025",
    role: "Frontend Developer",
    summary: "A modern, responsive website for Grill King restaurant built with HTML, CSS, and Bootstrap 5. The website features an RTL (Right-to-Left) layout and is optimized for Arabic content.",
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
  },
  // ==============================ShopMi==============================
  {
    slug: "shopime-ecommerce",
    title: "Shopime Ecommerce Store",
    year: "2025",
    role: "Full-Stack Developer",
    summary: "A modern e-commerce platform built with Next.js, featuring shopping cart, wishlist, Facebook & Google OAuth authentication, and complete order management with responsive design.",
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
  },
  // ==============================Bankist==============================
  {
    slug: "bankist-dashboard",
    title: "Bankist Banking Dashboard",
    year: "2025",
    role: "Frontend Developer",
    summary: "A Bank dashboard management interface built during Jonas Schmedtmann's JavaScript course. To login use: jd | 2222 (User & Pass)",
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
  },
]
