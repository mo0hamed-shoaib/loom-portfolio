"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContactFormModal } from "@/components/contact-form-modal"
import { Icons, type IconName } from "@/components/icons"
import { profile } from "@/data/profile"

export function SidebarPersonalCard() {
  const MapPinIcon = Icons["map-pin"]
  const FileTextIcon = Icons["file-text"]

  return (
    <div className="w-full max-w-sm space-y-3">
      {/* Profile Header */}
      <div className="text-center space-y-2">
        <div className="relative mx-auto w-20 h-20">
          <Image
            src={profile.image || "/placeholder.svg"}
            alt={profile.name}
            fill
            className="rounded-full object-cover border-2 border-border"
            priority
          />
        </div>
        <div className="space-y-0.5">
          <h1 className="text-xl font-semibold tracking-tight">{profile.name}</h1>
          <p className="text-base text-muted-foreground">{profile.title}</p>
          <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
            <MapPinIcon className="w-4 h-4" />
            <span>{profile.location}</span>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="text-center">
        <p className="text-sm text-muted-foreground leading-relaxed">{profile.bio}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
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

      {/* Social Links */}
      <div className="flex justify-center gap-2">
        {profile.socials.map((social, index) => {
          const Icon = Icons[social.icon as IconName] || Icons.user
          const isEmail = social.platform === "Email"

          return (
            <Button key={index} variant="outline" size="icon" asChild className="w-9 h-9 bg-transparent">
              <Link
                href={social.url}
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noopener noreferrer"}
                aria-label={social.platform}
              >
                <Icon className="w-4 h-4" />
              </Link>
            </Button>
          )
        })}
      </div>

      {/* Action Buttons */}
      <div className="space-y-1.5">
        <Button asChild className="w-full bg-transparent" variant="outline">
          <Link href={profile.cvUrl} target="_blank" rel="noopener noreferrer">
            <FileTextIcon className="w-4 h-4 mr-2" />
            View CV
          </Link>
        </Button>

        <ContactFormModal>
          <Button className="w-full">
            <Icons.mail className="w-4 h-4 mr-2" />
            Hire Me
          </Button>
        </ContactFormModal>
      </div>
    </div>
  )
}
