"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MilestoneCard } from "@/components/milestone-card"
import { milestones } from "@/data/milestones"
import type { Milestone } from "@/lib/schemas"

type MilestoneKind = "all" | "cert" | "award" | "education" | "blog" | "youtube" | "oss" | "other"

export function MilestonesSection() {
  const [activeTab, setActiveTab] = useState<MilestoneKind>("all")

  const filterMilestones = (kind: MilestoneKind): Milestone[] => {
    if (kind === "all") return milestones
    return milestones.filter((milestone) => milestone.kind === kind)
  }

  const getTabLabel = (kind: MilestoneKind) => {
    const labels = {
      all: "All",
      cert: "Certs",
      award: "Awards",
      education: "Education",
      blog: "Blogs",
      youtube: "YouTube",
      oss: "OSS",
      other: "Other",
    }
    return labels[kind]
  }

  const getTabCount = (kind: MilestoneKind) => {
    return filterMilestones(kind).length
  }

  const tabOptions: MilestoneKind[] = ["all", "cert", "award", "education", "blog", "youtube", "oss"]

  return (
    <section className="space-y-6 3xl:space-y-8">
      {/* Section Header */}
      <div className="text-center space-y-2 3xl:space-y-3">
        <h2 className="typography-h2">Milestones & Achievements</h2>
        <p className="typography-lead">A collection of my professional achievements and contributions</p>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as MilestoneKind)} className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-7 h-auto p-1.5 gap-2 sm:gap-3 bg-muted/50">
          {tabOptions.map((kind) => {
            const count = getTabCount(kind)
            if (count === 0) return null // Don't show tab if there are no items

            return (
              <TabsTrigger
                key={kind}
                value={kind}
                className="relative text-sm sm:text-base px-2 sm:px-3 py-2.5 sm:py-3 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:border data-[state=active]:border-border/50 flex items-center justify-center gap-1.5 sm:gap-2 rounded-lg transition-all duration-200 hover:bg-muted/80 data-[state=active]:hover:bg-background min-w-0"
              >
                <span className="font-medium text-sm sm:text-base text-center leading-tight">{getTabLabel(kind)}</span>
                <Badge
                  variant={activeTab === kind ? "default" : "secondary"}
                  className="px-1.5 py-0.5 text-xs h-5 min-w-[1.25rem] flex items-center justify-center flex-shrink-0 font-medium"
                >
                  {count}
                </Badge>
              </TabsTrigger>
            )
          })}
        </TabsList>

        {tabOptions.map((kind) => (
          <TabsContent key={kind} value={kind} className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filterMilestones(kind).map((milestone, index) => (
                <MilestoneCard key={`${milestone.title}-${index}`} milestone={milestone} />
              ))}
            </div>
            {filterMilestones(kind).length === 0 && (
              <div className="text-center py-12">
                <p className="typography-muted">No {getTabLabel(kind).toLowerCase()} found</p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}