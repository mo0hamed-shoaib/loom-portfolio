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
          <DialogTitle className="typography-h1">{project.title} - Case Study</DialogTitle>
          <DialogDescription className="typography-lead">{project.summary}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Tech Stack */}
          <div>
            <h3 className="typography-h3 mb-3">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="secondary" className="font-mono-technical">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Problem */}
          <div>
            <h3 className="typography-h3 mb-3">Problem</h3>
            <p className="font-mono-technical typography-p text-muted-foreground">{caseStudyDetails.problem}</p>
          </div>

          <Separator />

          {/* Solution */}
          <div>
            <h3 className="typography-h3 mb-3">Solution</h3>
            <p className="font-mono-technical typography-p text-muted-foreground">{caseStudyDetails.solution}</p>
          </div>

          <Separator />

          {/* Architecture */}
          <div>
            <h3 className="typography-h3 mb-3">Architecture</h3>
            <p className="font-mono-technical typography-p text-muted-foreground">{caseStudyDetails.architecture}</p>
          </div>

          <Separator />

          {/* Challenges */}
          {caseStudyDetails.challenges && caseStudyDetails.challenges.length > 0 && (
            <>
              <div>
                <h3 className="typography-h3 mb-3">Challenges</h3>
                <ul className="space-y-2">
                  {caseStudyDetails.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-2 typography-small text-muted-foreground">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="font-mono-technical">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Separator />
            </>
          )}

          {/* Results */}
          {caseStudyDetails.results && caseStudyDetails.results.length > 0 && (
            <>
              <div>
                <h3 className="typography-h3 mb-3">Results</h3>
                <ul className="space-y-2">
                  {caseStudyDetails.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-2 typography-small text-muted-foreground">
                      <span className="w-1 h-1 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="font-mono-technical">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Separator />
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
