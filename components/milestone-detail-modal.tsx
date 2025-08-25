"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ExternalLink, Calendar } from "lucide-react"
import type { Milestone } from "@/lib/schemas"

interface MilestoneDetailModalProps {
  milestone: Milestone
  children: React.ReactNode
}

export function MilestoneDetailModal({ milestone, children }: MilestoneDetailModalProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const renderYouTubeEmbed = (videoId: string) => {
    return (
      <div className="aspect-video w-full">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={milestone.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg"
        />
      </div>
    )
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{milestone.title}</DialogTitle>
          <DialogDescription className="flex items-center gap-2 text-base">
            <Calendar className="w-4 h-4" />
            {formatDate(milestone.date)}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* YouTube Video */}
          {milestone.kind === "youtube" && milestone.videoId && (
            <div className="space-y-4">
              {renderYouTubeEmbed(milestone.videoId)}
              {milestone.description && (
                <p className="text-foreground leading-relaxed">{milestone.description}</p>
              )}
            </div>
          )}

          {/* Image */}
          {milestone.img && milestone.kind !== "youtube" && (
            <div className="relative w-full max-w-md mx-auto">
              <Image
                src={milestone.img || "/placeholder.svg"}
                alt={milestone.title}
                width={400}
                height={300}
                className="rounded-lg object-cover w-full"
              />
            </div>
          )}

          {/* Description */}
          {milestone.description && milestone.kind !== "youtube" && (
            <div>
              <p className="text-foreground leading-relaxed">{milestone.description}</p>
            </div>
          )}

          {/* Blog Content */}
          {milestone.kind === "blog" && milestone.content && (
            <>
              <Separator />
              <div>
                <h3 className="text-lg font-semibold mb-3">Article Content</h3>
                <div className="prose prose-sm max-w-none text-foreground">
                  <p className="leading-relaxed">{milestone.content}</p>
                </div>
              </div>
            </>
          )}

          {/* Key Achievements */}
          {milestone.keyAchievements && milestone.keyAchievements.length > 0 && (
            <div>
              <h4 className="typography-h4 mb-2">Key Achievements</h4>
              <ul className="space-y-2">
                {milestone.keyAchievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2 typography-small text-foreground">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Additional Note */}
          {milestone.note && (
            <>
              <Separator />
              <div>
                <h3 className="text-lg font-semibold mb-3">Additional Notes</h3>
                <p className="text-foreground leading-relaxed">{milestone.note}</p>
              </div>
            </>
          )}

          {/* Proof URL */}
          {milestone.proofUrl && (milestone.kind === "education" || milestone.kind === "oss" || milestone.kind === "cert") && (
            <div className="pt-4">
              <Button asChild>
                <Link href={milestone.proofUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {milestone.kind === "oss" ? "View Code Source" : "View Certificate / Proof"}
                </Link>
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
