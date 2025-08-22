"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Link from "next/link"
import { Icons, type IconName } from "@/components/icons"
import { profile } from "@/data/profile"
import { MapPin } from "lucide-react"

interface ProfileInfoModalProps {
  children?: React.ReactNode
}

export function ProfileInfoModal({ children }: ProfileInfoModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children || (
          <Button variant="ghost" size="sm" className="h-8 px-3 text-xs">
            More
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Profile Details</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Location</h4>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{profile.location}</span>
            </div>
          </div>

          {/* Summary Stats */}
          <div>
            <h4 className="text-sm font-medium mb-2">Summary</h4>
            <div className="flex flex-wrap gap-2">
              {profile.summaryCards.map((card, index) => {
                const Icon = Icons[card.icon as IconName] || Icons.user
                return (
                  <div key={index} className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-muted/50">
                    <Icon className="w-3.5 h-3.5 text-muted-foreground" />
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-semibold">{card.value}</span>
                      <span className="text-xs text-muted-foreground">{card.label}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-medium mb-2">Connect</h4>
            <div className="flex flex-wrap gap-2">
              {profile.socials.map((social, index) => {
                const Icon = Icons[social.icon as IconName] || Icons.user
                const isEmail = social.platform === "Email"
                return (
                  <Button key={index} variant="outline" size="sm" asChild>
                    <Link
                      href={social.url}
                      target={isEmail ? undefined : "_blank"}
                      rel={isEmail ? undefined : "noopener noreferrer"}
                      className="flex items-center gap-2"
                    >
                      <Icon className="w-4 h-4" />
                      {social.platform}
                    </Link>
                  </Button>
                )
              })}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
