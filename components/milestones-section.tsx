"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
      cert: "Certifications",
      award: "Awards",
      education: "Education",
      blog: "Blogs",
      youtube: "YouTube",
      oss: "Open Source",
      other: "Other",
    }
    return labels[kind]
  }

  const getTabCount = (kind: MilestoneKind) => {
    return filterMilestones(kind).length
  }

  const tabOptions: MilestoneKind[] = ["all", "cert", "award", "education", "blog", "youtube", "oss"]

  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Milestones & Achievements</h2>
        <p className="text-muted-foreground">A collection of my professional achievements and contributions</p>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as MilestoneKind)} className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 h-auto p-1">
          {tabOptions.map((kind) => (
            <TabsTrigger
              key={kind}
              value={kind}
              className="text-xs px-2 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <span className="hidden sm:inline">{getTabLabel(kind)}</span>
              <span className="sm:hidden">{getTabLabel(kind).slice(0, 4)}</span>
              <span className="ml-1 text-xs opacity-70">({getTabCount(kind)})</span>
            </TabsTrigger>
          ))}
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
                <p className="text-muted-foreground">No {getTabLabel(kind).toLowerCase()} found</p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}
