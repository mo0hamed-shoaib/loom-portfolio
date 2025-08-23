"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MilestoneCard } from "@/components/milestone-card"
import { milestones } from "@/data/milestones"
import type { Milestone } from "@/lib/schemas"
import {
  LayoutGrid,
  Award,
  Trophy,
  GraduationCap,
  FileText,
  Youtube,
  Calendar,
} from "lucide-react"
import { Icons } from "@/components/icons"

type MilestoneKind = "all" | "cert" | "award" | "education" | "blog" | "youtube" | "oss" | "other"

const tabIcons: Record<MilestoneKind, React.ElementType> = {
  all: LayoutGrid,
  cert: Award,
  award: Trophy,
  education: GraduationCap,
  blog: FileText,
  youtube: Youtube,
  oss: Icons.github,
  other: Calendar,
}

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
        <h2 className="text-3xl 3xl:text-4xl font-bold tracking-tight">Milestones & Achievements</h2>
        <p className="text-muted-foreground 3xl:text-lg">A collection of my professional achievements and contributions</p>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as MilestoneKind)} className="w-full">
        <TabsList className="grid w-full grid-cols-4 md:grid-cols-7 h-auto p-1">
          {tabOptions.map((kind) => {
            const Icon = tabIcons[kind]
            const count = getTabCount(kind)
            if (count === 0) return null // Don't show tab if there are no items

            return (
              <TabsTrigger
                key={kind}
                value={kind}
                className="text-xs px-2 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center justify-center gap-1.5"
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{getTabLabel(kind)}</span>
                <Badge
                  variant={activeTab === kind ? "default" : "secondary"}
                  className="px-1.5 py-0.5 text-xs h-4"
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
                <p className="text-muted-foreground">No {getTabLabel(kind).toLowerCase()} found</p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}