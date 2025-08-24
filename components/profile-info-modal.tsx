"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { toast } from "sonner"
import Link from "next/link"
import { Icons, type IconName } from "@/components/icons"
import { profile } from "@/data/profile"
import { MapPin, FileText, Mail } from "lucide-react"
import { ContactFormModal } from "@/components/contact-form-modal"

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
            <div className="grid grid-cols-2 gap-2">
              {profile.summaryCards.map((card, index) => {
                return (
                  <div key={index} className="flex items-center justify-center px-2 py-1 rounded-md bg-muted/50">
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

                if (isEmail) {
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                      onClick={() => {
                        navigator.clipboard.writeText(profile.email)
                        toast("Email address copied to clipboard!")
                      }}
                    >
                      <Icon className="w-4 h-4" />
                      {social.platform}
                    </Button>
                  )
                }

                return (
                  <Button key={index} variant="outline" size="sm" asChild>
                    <Link
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {social.platform}
                    </Link>
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div>
            <h4 className="text-sm font-medium mb-2">Actions</h4>
            <div className="flex gap-2">
              <Button asChild variant="outline" className="flex-1">
                <Link href={profile.cvUrl} target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4 mr-2" />
                  View CV
                </Link>
              </Button>
              
              <ContactFormModal>
                <Button className="flex-1">
                  <Mail className="w-4 h-4 mr-2" />
                  Hire Me
                </Button>
              </ContactFormModal>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
