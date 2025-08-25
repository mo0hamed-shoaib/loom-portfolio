import type { Milestone } from "@/lib/schemas"

export const milestones: Milestone[] = [
  // Certifications
  {
    title: "Military Service Completion",
    date: "2022-12",
    kind: "cert",
    proofUrl: "https://drive.google.com/file/d/181ihs2dl6uRAu1HZ9urP7BovlKVBOA4_/view",
    description: "Completed my military service as a soldier in the Egyptian Armed Forces (Dec 2021 - Dec 2022).",
  },
  {
    title: "Graduation Certificate",
    date: "2021-06",
    kind: "cert",
    proofUrl: "https://drive.google.com/file/d/18-7fbodbrCyFqutgqZncntsCsTH68HnV/view",
    description: "Certificate of graduation from Misr University for Science and Technology for my Bachelor's degree in Computer Science (Oct 2017 – Jun 2021).",
  },

  // Awards
  {
    title: "Designer of the month",
    date: "2025-05",
    kind: "award",
    description:
      "Recognized as Designer of the month at Naafe for outstanding contributions to product design.",
    keyAchievements: [
      "Designed all the UI/UX for the Naafe app",
      "Designed the Naafe logo",
      "Created the branding guidelines",
    ],
  },

  // Education
  {
    title: "Full-Stack MERN Developer Training",
    date: "2025-07",
    kind: "education",
    proofUrl: "https://drive.google.com/file/d/18-7fbodbrCyFqutgqZncntsCsTH68HnV/view",
    img: "/iti-image.jpg",
    description: "Trained as a Full-Stack MERN Developer at Information Technology Institute (ITI) in Egypt for 5 months. I learned about the MERN stack, and how to build a full-stack application from scratch.",
    keyAchievements: ["Learned a lot of new technologies and frameworks", "Developed a business mindset and problem-solving skills", "Made new friends and built a strong network"],
  },
  {
    title: "Bachelor of Computer Science",
    date: "2021-06",
    kind: "education",
    proofUrl: "https://drive.google.com/file/d/18-7fbodbrCyFqutgqZncntsCsTH68HnV/view",
    img: "/grad-image.jpg",
    description: "Graduated from Misr University for Science and Technology, Specialized in Computer Science",
    keyAchievements: ["GPA: 3.11/4.0", "Research in Artificial Intelligence impact on developers", "Graduation project was about Apartments and Hotels Management System"],
  },

  // Open Source
  {
    title: "Rootly Notes Manager",
    date: "2025-08",
    kind: "oss",
    proofUrl: "https://github.com/mo0hamed-shoaib/rootly-notes-app",
    description: "Track your learning journey with an elegant, data-driven dashboard, capture notes, organize courses, log study time and moods, and reinforce knowledge through quick practice sessions, all wrapped in a responsive, beautifully designed interface with shad/cn ui.",
    keyAchievements: ["Deployed and published on LinkedIn", "Applied a new concept in notes management", "Fully built with shadcn/ui"],
  },
  {
    title: "NoirKit Portfolio Manager",
    date: "2025-07",
    kind: "oss",
    proofUrl: "https://github.com/mo0hamed-shoaib/noirkit-portfolio-manager",
    description: "Manage your complete professional presence through an intuitive dashboard, from projects and tech stacks to achievements and custom contact forms, while visitors enjoy a lightning-fast, mobile-optimized experience with smooth animations throughout.",
    keyAchievements: ["Deployed and published on LinkedIn", "Fully built with shadcn/ui", "Applied a new concept in portfolio management"],
  },
  {
    title: "HTML Design for a Restaurant Homepage",
    date: "2025-04",
    kind: "oss",
    proofUrl: "https://github.com/mo0hamed-shoaib/Grill-King-Restaurant",
    description: "A modern, responsive restaurant homepage template with RTL Arabic support, interactive menu cards, customer reviews, and smooth navigation, optimized for mobile and ready to customize for any dining brand.",
    keyAchievements: ["Got a compliment from the client", "Fully built with HTML, CSS, and JavaScript", "Full RTL support"],
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
    title: "How to organize your studying with AI by markmaps and tables",
    date: "2025-06",
    kind: "youtube",
    videoId: "Ucc-8YV65JI",
    description: "A practical guide for how to organize your studying with AI by using markmaps and tables to generate your own study plan and materials.",
    keyAchievements: ["Increasing likes and engagement", "Viewers are happy with the content", "Demonstrated the power of AI in studying"],
  },
  {
    title: "Comparison between ChatGPT, Claude, and Grok",
    date: "2025-06",
    kind: "youtube",
    videoId: "IDjzIFWQEpk",
    description: "A practical comparison and guide for developers to choose the best AI tool for their projects while showing the best use cases for each assistant.",
    keyAchievements: ["Built an audience", "Growing views", "Recorded and Edited the video"],
  },
]
