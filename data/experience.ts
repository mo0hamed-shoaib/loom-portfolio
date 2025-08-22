import type { Experience } from "@/lib/schemas"

export const experience: Experience[] = [
  {
    org: "TechCorp Inc.",
    role: "Senior Full-Stack Developer",
    start: "2022-01",
    location: "San Francisco, CA",
    stack: ["nextjs", "typescript", "postgresql", "aws", "docker"],
    bullets: [
      "Led development of core product features serving 100k+ users",
      "Architected and implemented microservices infrastructure",
      "Mentored team of 5 junior developers",
      "Reduced application load time by 60% through optimization",
    ],
    logo: "/abstract-tech-logo.png",
    keyAchievements: [
      "Promoted to Senior Developer within 18 months",
      "Led migration to microservices architecture",
      "Implemented CI/CD pipeline reducing deployment time by 80%",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "Kubernetes"],
  },
  {
    org: "StartupXYZ",
    role: "Full-Stack Developer",
    start: "2020-03",
    end: "2021-12",
    location: "Remote",
    stack: ["react", "nodejs", "mongodb", "gcp"],
    bullets: [
      "Built MVP from scratch using React and Node.js",
      "Implemented real-time features using WebSocket",
      "Designed and developed RESTful APIs",
      "Collaborated with design team on user experience",
    ],
    logo: "/abstract-startup-logo.png",
    keyAchievements: [
      "Delivered MVP 2 weeks ahead of schedule",
      "Achieved 99.9% uptime in production",
      "Implemented features that increased user engagement by 45%",
    ],
  },
  {
    org: "Digital Agency Pro",
    role: "Frontend Developer",
    start: "2018-06",
    end: "2020-02",
    location: "New York, NY",
    stack: ["react", "javascript", "sass", "webpack"],
    bullets: [
      "Developed responsive websites for 20+ clients",
      "Collaborated with designers to implement pixel-perfect UIs",
      "Optimized websites for performance and SEO",
      "Maintained and updated existing client projects",
    ],
    logo: "/digital-agency-logo.png",
    keyAchievements: [
      "Improved average page load speed by 40%",
      "Maintained 98% client satisfaction rate",
      "Led frontend development for 3 major client projects",
    ],
  },
]
