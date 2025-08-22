import type { Milestone } from "@/lib/schemas"

export const milestones: Milestone[] = [
  // Certifications
  {
    title: "AWS Solutions Architect Professional",
    date: "2024-01",
    kind: "cert",
    proofUrl: "https://aws.amazon.com/verification",
    img: "/aws-certification-badge.png",
    description: "Advanced AWS certification demonstrating expertise in designing distributed systems on AWS.",
  },
  {
    title: "Google Cloud Professional Developer",
    date: "2023-08",
    kind: "cert",
    proofUrl: "https://cloud.google.com/certification",
    img: "/google-cloud-certification.png",
    description: "Professional-level certification for developing scalable applications on Google Cloud Platform.",
  },

  // Awards
  {
    title: "Developer of the Year",
    date: "2023-12",
    kind: "award",
    img: "/developer-award-trophy.png",
    description:
      "Recognized as Developer of the Year at TechCorp for outstanding contributions to product development.",
    keyAchievements: [
      "Led development of 3 major product features",
      "Mentored 5 junior developers",
      "Improved team productivity by 40%",
    ],
  },

  // Education
  {
    title: "Master of Science in Computer Science",
    date: "2018-05",
    kind: "education",
    img: "/university-graduation.png",
    description: "Stanford University - Specialized in Machine Learning and Distributed Systems",
    keyAchievements: ["GPA: 3.9/4.0", "Research in distributed computing", "Published 2 academic papers"],
  },

  // Open Source
  {
    title: "React UI Library - 10k+ Stars",
    date: "2023-06",
    kind: "oss",
    proofUrl: "https://github.com/johndoe/react-ui-lib",
    description: "Created and maintain a popular React UI component library used by thousands of developers.",
    keyAchievements: ["10,000+ GitHub stars", "500+ contributors", "1M+ weekly downloads"],
  },

  // Blog Posts
  {
    title: "Building Scalable React Applications",
    date: "2024-02",
    kind: "blog",
    proofUrl: "https://blog.johndoe.dev/scalable-react",
    description: "Comprehensive guide on building and maintaining large-scale React applications.",
    content:
      "In this article, I explore the architectural patterns and best practices for building React applications that can scale to millions of users. We'll cover component architecture, state management, performance optimization, and deployment strategies...",
  },
  {
    title: "The Future of Web Development",
    date: "2023-11",
    kind: "blog",
    proofUrl: "https://blog.johndoe.dev/future-web-dev",
    description: "Exploring emerging trends and technologies shaping the future of web development.",
    content:
      "Web development is evolving rapidly with new frameworks, tools, and paradigms emerging constantly. In this post, I discuss the key trends that will shape the next decade of web development...",
  },

  // YouTube Videos
  {
    title: "Next.js 14 Complete Tutorial",
    date: "2024-01",
    kind: "youtube",
    videoId: "dQw4w9WgXcQ",
    description:
      "Comprehensive tutorial covering all the new features in Next.js 14, including Server Components and App Router.",
    keyAchievements: ["500k+ views", "15k+ likes", "Featured by Next.js team"],
  },
  {
    title: "Building a Full-Stack App in 30 Minutes",
    date: "2023-09",
    kind: "youtube",
    videoId: "dQw4w9WgXcQ",
    description: "Speed coding session building a complete full-stack application from scratch.",
    keyAchievements: ["300k+ views", "10k+ likes", "Trending #1 in Tech"],
  },
]
