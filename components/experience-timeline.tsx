"use client"

import { ExperienceTimelineItem } from "@/components/experience-timeline-item"
import { experience } from "@/data/experience"

export function ExperienceTimeline() {
  // Sort experience by start date (most recent first)
  const sortedExperience = [...experience].sort((a, b) => {
    const dateA = new Date(a.start)
    const dateB = new Date(b.start)
    return dateB.getTime() - dateA.getTime()
  })

  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Professional Experience</h2>
        <p className="text-muted-foreground">My career journey and professional growth</p>
      </div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto">
        {sortedExperience.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No experience data available</p>
          </div>
        ) : (
          <div className="space-y-0">
            {sortedExperience.map((exp, index) => (
              <ExperienceTimelineItem
                key={`${exp.org}-${exp.role}-${index}`}
                experience={exp}
                isLast={index === sortedExperience.length - 1}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
