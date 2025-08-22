import { z } from "zod"

// Tech stack identifier
export const TechIdSchema = z.string()
export type TechId = z.infer<typeof TechIdSchema>

// Project schema
export const ProjectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  year: z.string(),
  role: z.string(),
  summary: z.string(),
  stack: z.array(TechIdSchema),
  media: z.array(
    z.object({
      src: z.string(),
      type: z.enum(["image", "video"]).optional(),
      alt: z.string().optional(),
    }),
  ),
  links: z
    .object({
      demo: z.string().optional(),
      source: z.string().optional(),
      caseStudy: z.string().optional(),
    })
    .optional(),
  highlights: z.array(z.string()).optional(),
  caseStudyDetails: z
    .object({
      problem: z.string(),
      solution: z.string(),
      architecture: z.string(),
      challenges: z.array(z.string()).optional(),
      results: z.array(z.string()).optional(),
    })
    .optional(),
})

export type Project = z.infer<typeof ProjectSchema>

// Milestone schema
export const MilestoneSchema = z.object({
  title: z.string(),
  date: z.string(),
  kind: z.enum(["cert", "award", "oss", "education", "blog", "youtube", "other"]),
  proofUrl: z.string().optional(),
  img: z.string().optional(),
  note: z.string().optional(),
  description: z.string().optional(),
  content: z.string().optional(), // For blog content
  videoId: z.string().optional(), // For YouTube videos
  keyAchievements: z.array(z.string()).optional(),
})

export type Milestone = z.infer<typeof MilestoneSchema>

// Experience schema
export const ExperienceSchema = z.object({
  org: z.string(),
  role: z.string(),
  start: z.string(),
  end: z.string().optional(),
  location: z.string().optional(),
  stack: z.array(TechIdSchema),
  bullets: z.array(z.string()),
  logo: z.string().optional(),
  img: z.string().optional(),
  keyAchievements: z.array(z.string()).optional(),
  technologies: z.array(z.string()).optional(),
})

export type Experience = z.infer<typeof ExperienceSchema>

// Profile schema
export const ProfileSchema = z.object({
  name: z.string(),
  title: z.string(),
  location: z.string(),
  bio: z.string(),
  image: z.string(),
  cvUrl: z.string(),
  email: z.string(),
  socials: z.array(
    z.object({
      platform: z.string(),
      url: z.string(),
      icon: z.string(),
    }),
  ),
  summaryCards: z.array(
    z.object({
      label: z.string(),
      value: z.string(),
      icon: z.string(),
    }),
  ),
  techStack: z.array(
    z.object({
      name: z.string(),
      category: z.string(),
      icon: z.string(),
      proficiency: z.number().min(1).max(5),
    }),
  ),
})

export type Profile = z.infer<typeof ProfileSchema>

// Site config schema
export const SiteConfigSchema = z.object({
  name: z.string(),
  description: z.string(),
  url: z.string(),
  ogImage: z.string(),
  author: z.object({
    name: z.string(),
    email: z.string(),
    twitter: z.string().optional(),
  }),
})

export type SiteConfig = z.infer<typeof SiteConfigSchema>
