import type { Project } from "@/lib/schemas"

export const projects: Project[] = [
  {
    slug: "service-exchange-platform",
    title: "Naafe",
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
  // ================================================================
  {
    slug: "rootly-note-management-app",
    title: "Rootly Notes",
    year: "2025",
    role: "Full-Stack Developer",
    summary: "Elegant, data-driven learning tracker to Capture Q&A notes, organize by courses, log daily study time and mood, and practice with a quick review session — all in a sleek, responsive UI.",
    stack: ["nextjs", "react", "typescript", "supabase", "tailwind"],
    media: [
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
  // ================================================================
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
  // ================================================================
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
  // ================================================================
  {
    slug: "ecommerce-platform",
    title: "MishMish Store",
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
]
