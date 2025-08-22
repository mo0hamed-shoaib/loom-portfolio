import type { Project } from "@/lib/schemas"

export const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    year: "2024",
    role: "Lead Full-Stack Developer",
    summary: "Modern e-commerce platform with advanced analytics and AI-powered recommendations",
    stack: ["nextjs", "typescript", "postgresql", "stripe", "tailwind"],
    media: [
      {
        src: "/modern-ecommerce-dashboard.png",
        type: "image",
        alt: "E-commerce dashboard",
      },
      {
        src: "/product-catalog-interface.png",
        type: "image",
        alt: "Product catalog",
      },
      {
        src: "/checkout-process.png",
        type: "image",
        alt: "Checkout process",
      },
    ],
    links: {
      demo: "https://ecommerce-demo.vercel.app",
      source: "https://github.com/johndoe/ecommerce-platform",
      caseStudy: "ecommerce-platform",
    },
    highlights: ["Increased conversion rate by 35%", "Reduced page load time by 60%", "Processed $2M+ in transactions"],
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
  {
    slug: "task-management-app",
    title: "Task Management App",
    year: "2023",
    role: "Full-Stack Developer",
    summary: "Collaborative task management application with real-time updates and team analytics",
    stack: ["react", "nodejs", "mongodb", "socketio", "tailwind"],
    media: [
      {
        src: "/task-management-dashboard.png",
        type: "image",
        alt: "Task management dashboard",
      },
      {
        src: "/team-collaboration-interface.png",
        type: "image",
        alt: "Team collaboration",
      },
    ],
    links: {
      demo: "https://taskapp-demo.vercel.app",
      source: "https://github.com/johndoe/task-management",
    },
    highlights: ["10k+ active users", "Real-time collaboration", "Advanced analytics dashboard"],
  },
  {
    slug: "ai-content-generator",
    title: "AI Content Generator",
    year: "2024",
    role: "Frontend Developer",
    summary: "AI-powered content generation tool for marketers and content creators",
    stack: ["nextjs", "openai", "typescript", "prisma", "tailwind"],
    media: [
      {
        src: "/ai-content-generator-interface.png",
        type: "image",
        alt: "AI content generator",
      },
    ],
    links: {
      demo: "https://ai-content-demo.vercel.app",
    },
    highlights: ["Generated 1M+ pieces of content", "95% user satisfaction rate", "Integrated with 10+ platforms"],
  },
]
