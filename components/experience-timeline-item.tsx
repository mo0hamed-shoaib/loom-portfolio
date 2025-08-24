"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar } from "lucide-react"
import type { Experience } from "@/lib/schemas"

interface ExperienceTimelineItemProps {
  experience: Experience
  isLast?: boolean
}

export function ExperienceTimelineItem({ experience, isLast = false }: ExperienceTimelineItemProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    })
  }

  const calculateDuration = (start: string, end?: string) => {
    const startDate = new Date(start)
    const endDate = end ? new Date(end) : new Date()
    const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth())
    const years = Math.floor(months / 12)
    const remainingMonths = months % 12

    if (years === 0) {
      return `${remainingMonths} month${remainingMonths !== 1 ? "s" : ""}`
    } else if (remainingMonths === 0) {
      return `${years} year${years !== 1 ? "s" : ""}`
    } else {
      return `${years} year${years !== 1 ? "s" : ""} ${remainingMonths} month${remainingMonths !== 1 ? "s" : ""}`
    }
  }

  const isCurrentRole = !experience.end

  return (
    <div className="relative flex gap-6">
      {/* Timeline Line */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <div
            className={`w-6 h-6 rounded-full border-4 border-background shadow-lg z-10 relative ${
              isCurrentRole ? "bg-green-500" : "bg-gradient-to-br from-primary to-primary/70"
            }`}
          >
            <div className="absolute inset-1 bg-background rounded-full opacity-20" />
          </div>
          <div
            className={`absolute inset-0 w-6 h-6 rounded-full animate-pulse ${
              isCurrentRole ? "bg-green-500/30" : "bg-primary/20"
            }`}
          />
        </div>
        {!isLast && (
          <div className="w-1 bg-gradient-to-b from-primary/60 via-border to-border/40 flex-1 mt-3 rounded-full shadow-sm" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <Card className="border-border/50 hover:border-border hover:shadow-sm transition-all duration-200 p-0">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger className="p-6 hover:no-underline">
                <div className="text-left w-full">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="typography-h3">{experience.role}</h3>
                      <p className="text-xl text-foreground font-medium">{experience.org}</p>
                    </div>
                    <div className="typography-small text-foreground text-center sm:text-right flex-shrink-0">
                      <div className="flex items-center gap-1 justify-center sm:justify-end">
                        <Calendar className="w-3 h-3" />
                        <span>
                          {formatDate(experience.start)} - {experience.end ? formatDate(experience.end) : "Present"}
                        </span>
                      </div>
                      <p className="mt-1">{calculateDuration(experience.start, experience.end)}</p>
                    </div>
                  </div>
                  {experience.location && (
                    <div className="flex items-center gap-1 typography-small text-foreground justify-center sm:justify-start">
                      <MapPin className="w-3 h-3" />
                      <span>{experience.location}</span>
                    </div>
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  {/* Key Responsibilities */}
                  {experience.bullets && experience.bullets.length > 0 && (
                    <div>
                      <h4 className="typography-h4 mb-2">Key Responsibilities</h4>
                      <ul className="space-y-2">
                        {experience.bullets.map((bullet, index) => (
                          <li key={index} className="flex items-start gap-2 typography-small text-foreground">
                            <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="font-mono-technical">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Key Achievements */}
                  {experience.keyAchievements && experience.keyAchievements.length > 0 && (
                    <div>
                      <h4 className="typography-h4 mb-2">Key Achievements</h4>
                      <ul className="space-y-2">
                        {experience.keyAchievements.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-2 typography-small text-foreground">
                            <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="font-mono-technical">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack */}
                  {experience.stack && experience.stack.length > 0 && (
                    <div>
                      <h4 className="typography-h4 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.stack.map((tech) => (
                          <Badge key={tech} variant="outline" className="font-mono-technical text-xs 3xl:text-sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      </div>
    </div>
  )
}