"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, FileText } from "lucide-react"
import { ProjectImageCarousel } from "@/components/project-image-carousel"
import { CaseStudyModal } from "@/components/case-study-modal"
import type { Project } from "@/lib/schemas"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

interface ProjectCardProps {
  project: Project
}

// Tech stack icon mapping
const getTechIcon = (tech: string, theme: string): string | null => {
  const isDark = theme === 'dark'
  
  const iconMap: Record<string, string> = {
    // Programming Languages
    javascript: "/icons/programming-languages/javascript.svg",
    typescript: "/icons/programming-languages/typescript.svg",
    
    // Frontend
    react: "/icons/frontend/react.svg",
    angular: "/icons/frontend/angular.svg",
    nextjs: isDark ? "/icons/frontend/nextjs-light.svg" : "/icons/frontend/nextjs-dark.svg",
    redux: "/icons/frontend/redux.svg",
    html: "/icons/frontend/html.svg",
    css: "/icons/frontend/css.svg",
    tailwind: "/icons/frontend/tailwind.svg",
    bootstrap: "/icons/frontend/bootstrap.svg",
    
    // Backend
    nodejs: "/icons/backend/nodejs.svg",
    express: isDark ? "/icons/backend/express-light.svg" : "/icons/backend/express-dark.svg",
    api: "/icons/backend/api.svg",
    jwt: isDark ? "/icons/backend/jwt-light.svg" : "/icons/backend/jwt-dark.svg",
    
    // Database
    mongodb: "/icons/database/mongodb.svg",
    supabase: "/icons/database/supabase.svg",
    
    // Tools
    github: isDark ? "/icons/tools/github-light.svg" : "/icons/tools/github-dark.svg",
  }
  
  return iconMap[tech.toLowerCase()] || null
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Card className="overflow-hidden border-border/50 hover:border-border hover:shadow-sm transition-all duration-200">
      <CardContent className="p-0">
        {/* Project Image Carousel */}
        <div className="p-6 3xl:p-8 pb-4 3xl:pb-6">
          <ProjectImageCarousel project={project} />
        </div>

        {/* Project Details */}
        <div className="p-6 3xl:p-8 pt-2 3xl:pt-4 space-y-4 3xl:space-y-6">
          {/* Title and Role */}
          <div>
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="text-lg sm:text-xl 3xl:text-2xl font-semibold leading-tight">{project.title}</h3>
              <span className="text-sm 3xl:text-base text-muted-foreground whitespace-nowrap">{project.year}</span>
            </div>
            <p className="text-sm 3xl:text-base font-medium text-primary">{project.role}</p>
          </div>

          {/* Summary */}
          <p className="font-mono-technical text-sm 3xl:text-base text-muted-foreground leading-relaxed">{project.summary}</p>

          {/* Tech Stack */}
          <div>
            <h4 className="text-sm 3xl:text-base font-medium mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-1.5 3xl:gap-2">
              {project.stack.map((tech) => {
                const iconPath = mounted ? getTechIcon(tech, resolvedTheme || 'light') : null
                return (
                  <Badge key={tech} variant="secondary" className="font-mono-technical text-xs 3xl:text-sm flex items-center gap-1.5">
                    {iconPath && (
                      <Image
                        src={iconPath}
                        alt={tech}
                        width={20}
                        height={20}
                        className="w-5 h-5 3xl:w-6 3xl:h-6"
                      />
                    )}
                    {tech}
                  </Badge>
                )
              })}
            </div>
          </div>

          {/* Key Achievements */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-sm 3xl:text-base font-medium mb-2">Key Achievements</h4>
              <ul className="space-y-1 3xl:space-y-1.5">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm 3xl:text-base text-muted-foreground">
                    <span className="w-1 h-1 3xl:w-1.5 3xl:h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="font-mono-technical">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2 3xl:gap-3 pt-2">
            {project.links?.demo && (
              <Button variant="default" size="sm" asChild className="3xl:h-10">
                <Link href={project.links.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3 h-3 3xl:w-4 3xl:h-4 mr-1.5" />
                  Live Demo
                </Link>
              </Button>
            )}

            {project.links?.source && (
              <Button variant="outline" size="sm" asChild className="3xl:h-10">
                <Link href={project.links.source} target="_blank" rel="noopener noreferrer">
                  <Github className="w-3 h-3 3xl:w-4 3xl:h-4 mr-1.5" />
                  Source Code
                </Link>
              </Button>
            )}

            {project.caseStudyDetails && (
              <CaseStudyModal project={project}>
                <Button variant="outline" size="sm" className="3xl:h-10">
                  <FileText className="w-3 h-3 3xl:w-4 3xl:h-4 mr-1.5" />
                  Case Study
                </Button>
              </CaseStudyModal>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
