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
    <section className="space-y-8 3xl:space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-2 3xl:space-y-3">
        <h2 className="typography-h2">Experience</h2>
        <p className="text-xl text-secondary-foreground">My career journey and professional growth</p>
      </div>

      {/* Timeline */}
      {sortedExperience.length > 0 ? (
        <div className="relative">
          <div className="space-y-8">
            {sortedExperience.map((experience, index) => (
              <ExperienceTimelineItem
                key={`${experience.role}-${experience.org}-${index}`}
                experience={experience}
                isLast={index === sortedExperience.length - 1}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="typography-muted">No experience data available</p>
        </div>
      )}
    </section>
  )
}
