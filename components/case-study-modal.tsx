"use client"

import type React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import type { Project } from "@/lib/schemas"

interface CaseStudyModalProps {
  project: Project
  children: React.ReactNode
}

export function CaseStudyModal({ project, children }: CaseStudyModalProps) {
  if (!project.caseStudyDetails) {
    return null
  }

  const { caseStudyDetails } = project

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
                  <DialogTitle className="text-2xl sm:text-3xl 3xl:text-4xl">{project.title} - Case Study</DialogTitle>
        <DialogDescription className="text-base 3xl:text-lg">{project.summary}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Tech Stack */}
          <div>
            <h3 className="text-lg sm:text-xl 3xl:text-2xl font-semibold mb-3">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Problem */}
          <div>
            <h3 className="text-lg sm:text-xl 3xl:text-2xl font-semibold mb-3">Problem</h3>
            <p className="text-sm 3xl:text-base text-muted-foreground leading-relaxed">{caseStudyDetails.problem}</p>
          </div>

          <Separator />

          {/* Solution */}
          <div>
            <h3 className="text-lg sm:text-xl 3xl:text-2xl font-semibold mb-3">Solution</h3>
            <p className="text-sm 3xl:text-base text-muted-foreground leading-relaxed">{caseStudyDetails.solution}</p>
          </div>

          <Separator />

          {/* Architecture */}
          <div>
            <h3 className="text-lg sm:text-xl 3xl:text-2xl font-semibold mb-3">Architecture</h3>
            <p className="text-sm 3xl:text-base text-muted-foreground leading-relaxed">{caseStudyDetails.architecture}</p>
          </div>

          {/* Challenges */}
          {caseStudyDetails.challenges && caseStudyDetails.challenges.length > 0 && (
            <>
              <Separator />
              <div>
                <h3 className="text-lg sm:text-xl 3xl:text-2xl font-semibold mb-3">Key Challenges</h3>
                <ul className="space-y-2">
                  {caseStudyDetails.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm 3xl:text-base text-muted-foreground">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* Results */}
          {caseStudyDetails.results && caseStudyDetails.results.length > 0 && (
            <>
              <Separator />
              <div>
                <h3 className="text-lg sm:text-xl 3xl:text-2xl font-semibold mb-3">Results & Impact</h3>
                <ul className="space-y-2">
                  {caseStudyDetails.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm 3xl:text-base text-muted-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <>
              <Separator />
              <div>
                <h3 className="text-lg sm:text-xl 3xl:text-2xl font-semibold mb-3">Key Achievements</h3>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm 3xl:text-base text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
