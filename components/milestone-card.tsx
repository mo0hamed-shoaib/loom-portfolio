"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MilestoneDetailModal } from "@/components/milestone-detail-modal"
import { Icons } from "@/components/icons"
import { Calendar, Award, GraduationCap, FileText, Youtube, Trophy } from "lucide-react"
import type { Milestone } from "@/lib/schemas"

interface MilestoneCardProps {
  milestone: Milestone
}

const milestoneIcons = {
  cert: Award,
  award: Trophy,
  education: GraduationCap,
  blog: FileText,
  youtube: Youtube,
  oss: Icons.github,
  other: Calendar,
}

const milestoneColors = {
  cert: "bg-blue-500/10 text-blue-600 border-blue-200",
  award: "bg-yellow-500/10 text-yellow-600 border-yellow-200",
  education: "bg-green-500/10 text-green-600 border-green-200",
  blog: "bg-purple-500/10 text-purple-600 border-purple-200",
  youtube: "bg-red-500/10 text-red-600 border-red-200",
  oss: "bg-gray-500/10 text-gray-600 border-gray-200",
  other: "bg-gray-500/10 text-gray-600 border-gray-200",
}

export function MilestoneCard({ milestone }: MilestoneCardProps) {
  const Icon = milestoneIcons[milestone.kind]
  const colorClass = milestoneColors[milestone.kind]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    })
  }

  return (
    <MilestoneDetailModal milestone={milestone}>
      <Card className="cursor-pointer border-border/50 hover:border-border hover:shadow-sm transition-all duration-200 h-full p-0">
        <CardContent className="p-4 space-y-3">
          <div className="flex items-start justify-between gap-3">
            <div className={`p-2 rounded-lg ${colorClass}`}>
              <Icon className="w-4 h-4" />
            </div>
                    <div className="text-right">
          <p className="text-xs sm:text-sm 3xl:text-base text-foreground">{formatDate(milestone.date)}</p>
        </div>
          </div>

          {/* Title */}
          <div>
            <h3 className="typography-h4 leading-tight line-clamp-2">{milestone.title}</h3>
          </div>

          {/* Description */}
          {milestone.description && (
            <p className="font-mono-technical text-xs sm:text-sm 3xl:text-base text-foreground line-clamp-3 leading-relaxed">{milestone.description}</p>
          )}

          {/* Key achievements preview */}
          {milestone.keyAchievements && milestone.keyAchievements.length > 0 && (
            <div className="pt-1">
              <p className="font-mono-technical text-xs text-foreground">
                {milestone.keyAchievements[0]}
                {milestone.keyAchievements.length > 1 && ` +${milestone.keyAchievements.length - 1} more`}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </MilestoneDetailModal>
  )
}
