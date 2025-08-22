"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, FileText } from "lucide-react"
import { ProjectImageCarousel } from "@/components/project-image-carousel"
import { CaseStudyModal } from "@/components/case-study-modal"
import type { Project } from "@/lib/schemas"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        {/* Project Image Carousel */}
        <div className="p-6 pb-4">
          <ProjectImageCarousel project={project} />
        </div>

        {/* Project Details */}
        <div className="p-6 pt-2 space-y-4">
          {/* Title and Role */}
          <div>
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="text-xl font-semibold leading-tight">{project.title}</h3>
              <span className="text-sm text-muted-foreground whitespace-nowrap">{project.year}</span>
            </div>
            <p className="text-sm font-medium text-primary">{project.role}</p>
          </div>

          {/* Summary */}
          <p className="text-muted-foreground leading-relaxed">{project.summary}</p>

          {/* Tech Stack */}
          <div>
            <h4 className="text-sm font-medium mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-sm font-medium mb-2">Key Achievements</h4>
              <ul className="space-y-1">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.links?.demo && (
              <Button variant="default" size="sm" asChild>
                <Link href={project.links.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3 h-3 mr-1.5" />
                  Live Demo
                </Link>
              </Button>
            )}

            {project.links?.source && (
              <Button variant="outline" size="sm" asChild>
                <Link href={project.links.source} target="_blank" rel="noopener noreferrer">
                  <Github className="w-3 h-3 mr-1.5" />
                  Source Code
                </Link>
              </Button>
            )}

            {project.caseStudyDetails && (
              <CaseStudyModal project={project}>
                <Button variant="outline" size="sm">
                  <FileText className="w-3 h-3 mr-1.5" />
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
