"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, MapPin, Calendar } from "lucide-react"
import type { Experience } from "@/lib/schemas"

interface ExperienceTimelineItemProps {
  experience: Experience
  isLast?: boolean
}

export function ExperienceTimelineItem({ experience, isLast = false }: ExperienceTimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)

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

  return (
    <div className="relative flex gap-6">
      {/* Timeline Line */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="w-6 h-6 bg-gradient-to-br from-primary to-primary/70 rounded-full border-4 border-background shadow-lg z-10 relative">
            <div className="absolute inset-1 bg-background rounded-full opacity-20" />
          </div>
          <div className="absolute inset-0 w-6 h-6 bg-primary/20 rounded-full animate-pulse" />
        </div>
        {!isLast && (
          <div className="w-1 bg-gradient-to-b from-primary/60 via-border to-border/40 flex-1 mt-3 rounded-full shadow-sm" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <Card className="hover:shadow-sm transition-shadow">
          <CardContent className="p-6">
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
              {/* Company Logo */}
              {experience.logo && (
                <div className="w-12 h-12 relative flex-shrink-0">
                  <Image
                    src={experience.logo || "/placeholder.svg"}
                    alt={`${experience.org} logo`}
                    fill
                    className="rounded-lg object-cover border border-border"
                  />
                </div>
              )}

              {/* Main Info */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-semibold leading-tight">{experience.role}</h3>
                    <p className="text-primary font-medium">{experience.org}</p>
                  </div>
                  <div className="text-sm text-muted-foreground text-right">
                    <div className="flex items-center gap-1 justify-end">
                      <Calendar className="w-3 h-3" />
                      <span>
                        {formatDate(experience.start)} - {experience.end ? formatDate(experience.end) : "Present"}
                      </span>
                    </div>
                    <p className="mt-1">{calculateDuration(experience.start, experience.end)}</p>
                  </div>
                </div>

                {/* Location */}
                {experience.location && (
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                    <MapPin className="w-3 h-3" />
                    <span>{experience.location}</span>
                  </div>
                )}

                {/* Main Responsibilities */}
                <ul className="space-y-1 mb-4">
                  {experience.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {experience.stack.slice(0, 6).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {experience.stack.length > 6 && (
                      <Badge variant="outline" className="text-xs">
                        +{experience.stack.length - 6} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Expand/Collapse Button */}
                {(experience.keyAchievements || experience.technologies) && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="h-8 px-2 text-xs"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="w-3 h-3 mr-1" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-3 h-3 mr-1" />
                        Show More
                      </>
                    )}
                  </Button>
                )}

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t space-y-4">
                    {/* Key Achievements */}
                    {experience.keyAchievements && experience.keyAchievements.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium mb-2">Key Achievements</h4>
                        <ul className="space-y-1">
                          {experience.keyAchievements.map((achievement, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="w-1 h-1 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies Used */}
                    {experience.technologies && experience.technologies.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {experience.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* All Tech Stack (if expanded) */}
                    {experience.stack.length > 6 && (
                      <div>
                        <h4 className="text-sm font-medium mb-2">Complete Tech Stack</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {experience.stack.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
