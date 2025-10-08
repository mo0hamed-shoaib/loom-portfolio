import type { Profile } from "@/lib/schemas";

export const profile: Profile = {
  name: "Mohamed Gamal",
  title: "Full-Stack Developer",
  location: "Cairo, Egypt",
  bio: "Frontend Developer focused on building responsive, accessible, and scalable web applications using React.js and modern JavaScript. Trained at the Information Technology Institute (ITI) as a Full-Stack MEARN Developer, with a good foundation in backend development. Skilled in component-driven design and clean code practices.",
  image: "/pfp.jpg",
  cvUrl:
    "https://drive.google.com/file/d/1CJhC5Ku8wie4-CDmyyIMqc4qGEo2Pg6j/view?usp=sharing",
  email: "mohamed.g.shoaib@gmail.com",
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/mo0hamed-shoaib",
      icon: "github",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/mohamed-g-shoaib/",
      icon: "linkedin",
    },
    {
      platform: "Twitter",
      url: "https://x.com/mo0hamed_gamal",
      icon: "twitter",
    },
    {
      platform: "Email",
      url: "mailto:mohamed.g.shoaib@gmail.com",
      icon: "mail",
    },
  ],
  summaryCards: [
    {
      label: "Years Experience",
      value: "1+",
      icon: "calendar",
    },
    {
      label: "Projects Completed",
      value: "10+",
      icon: "code",
    },
    {
      label: "GitHub Commits",
      value: "700+",
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
    {
      name: "JavaScript",
      category: "Programming Languages",
      icon: "javascript",
    },
    {
      name: "TypeScript",
      category: "Programming Languages",
      icon: "typescript",
    },

    // Frontend
    { name: "React", category: "Frontend", icon: "react" },
    { name: "Next.js", category: "Frontend", icon: "nextjs" },
    { name: "Angular", category: "Frontend", icon: "angular" },
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
    { name: "Supabase", category: "Database", icon: "supabase" },

    // Tools & Workflow
    { name: "Git", category: "Tools & Workflow", icon: "git" },
    { name: "GitHub", category: "Tools & Workflow", icon: "github" },
    { name: "Postman", category: "Tools & Workflow", icon: "postman" },
    { name: "npm", category: "Tools & Workflow", icon: "npm" },

    // Soft Skills
    { name: "Communication", category: "Soft Skills", icon: "communication" },
    { name: "Teamwork", category: "Soft Skills", icon: "teamwork" },
    {
      name: "Problem Solving",
      category: "Soft Skills",
      icon: "problem-solving",
    },
    {
      name: "Time Management",
      category: "Soft Skills",
      icon: "time-management",
    },

    // Concepts
    { name: "Data Structures", category: "Concepts", icon: "data-structures" },
    { name: "Algorithms", category: "Concepts", icon: "algorithms" },
    { name: "OOP", category: "Concepts", icon: "oop" },
    {
      name: "Software Engineering",
      category: "Concepts",
      icon: "software-engineering",
    },
    { name: "Clean Code", category: "Concepts", icon: "clean-code" },
  ],
};
