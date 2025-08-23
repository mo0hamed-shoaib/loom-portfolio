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
    // Programming Languages
    { name: "JavaScript", category: "Programming Languages", icon: "javascript" },
    { name: "TypeScript", category: "Programming Languages", icon: "typescript" },

    // Frontend
    { name: "React", category: "Frontend", icon: "react" },
    { name: "Redux", category: "Frontend", icon: "redux" },
    { name: "HTML5", category: "Frontend", icon: "html" },
    { name: "CSS3", category: "Frontend", icon: "css" },
    { name: "Tailwind CSS", category: "Frontend", icon: "tailwind" },
    { name: "Bootstrap", category: "Frontend", icon: "bootstrap" },

    // Backend
    { name: "Node.js", category: "Backend", icon: "nodejs" },
    { name: "Express", category: "Backend", icon: "express" },
    { name: "REST API", category: "Backend", icon: "api" },
    { name: "JWT", category: "Backend", icon: "jwt" },

    // Database
    { name: "MongoDB", category: "Database", icon: "mongodb" },
    { name: "Mongoose", category: "Database", icon: "mongoose" },

    // Tools & Workflow
    { name: "Git", category: "Tools & Workflow", icon: "git" },
    { name: "GitHub", category: "Tools & Workflow", icon: "github" },
    { name: "Postman", category: "Tools & Workflow", icon: "postman" },
    { name: "npm", category: "Tools & Workflow", icon: "npm" },

    // Soft Skills
    { name: "Communication", category: "Soft Skills", icon: "communication" },
    { name: "Teamwork", category: "Soft Skills", icon: "teamwork" },
    { name: "Problem Solving", category: "Soft Skills", icon: "problem-solving" },
    { name: "Time Management", category: "Soft Skills", icon: "time-management" },

    // Concepts
    { name: "Data Structures", category: "Concepts", icon: "data-structures" },
    { name: "Algorithms", category: "Concepts", icon: "algorithms" },
    { name: "OOP", category: "Concepts", icon: "oop" },
    { name: "Software Engineering", category: "Concepts", icon: "software-engineering" },
    { name: "Clean Code", category: "Concepts", icon: "clean-code" },
  ],
}
