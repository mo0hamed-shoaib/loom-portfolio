import type { Profile } from "@/lib/schemas"

export const profile: Profile = {
  name: "John Doe",
  title: "Senior Full-Stack Developer",
  location: "San Francisco, CA",
  bio: "Passionate full-stack developer with 8+ years of experience building scalable web applications. I love creating exceptional user experiences and solving complex technical challenges.",
  image: "/developer-headshot.png",
  cvUrl: "/john-doe-cv.pdf",
  email: "john@johndoe.dev",
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/johndoe",
      icon: "github",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/johndoe",
      icon: "linkedin",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/johndoe",
      icon: "twitter",
    },
    {
      platform: "Email",
      url: "mailto:john@johndoe.dev",
      icon: "mail",
    },
  ],
  summaryCards: [
    {
      label: "Years Experience",
      value: "8+",
      icon: "calendar",
    },
    {
      label: "Projects Completed",
      value: "50+",
      icon: "code",
    },
    {
      label: "GitHub Commits",
      value: "2.5k+",
      icon: "git-commit",
    },
    {
      label: "Coffee Consumed",
      value: "∞",
      icon: "coffee",
    },
  ],
  techStack: [
    // Frontend
    { name: "React", category: "Frontend", icon: "react", proficiency: 5 },
    { name: "Next.js", category: "Frontend", icon: "nextjs", proficiency: 5 },
    { name: "TypeScript", category: "Frontend", icon: "typescript", proficiency: 5 },
    { name: "Tailwind CSS", category: "Frontend", icon: "tailwind", proficiency: 5 },

    // Backend
    { name: "Node.js", category: "Backend", icon: "nodejs", proficiency: 5 },
    { name: "Python", category: "Backend", icon: "python", proficiency: 4 },
    { name: "PostgreSQL", category: "Backend", icon: "postgresql", proficiency: 4 },
    { name: "MongoDB", category: "Backend", icon: "mongodb", proficiency: 4 },

    // DevOps
    { name: "Docker", category: "DevOps", icon: "docker", proficiency: 4 },
    { name: "AWS", category: "DevOps", icon: "aws", proficiency: 4 },
    { name: "Vercel", category: "DevOps", icon: "vercel", proficiency: 5 },
    { name: "GitHub Actions", category: "DevOps", icon: "github", proficiency: 4 },
  ],
}
