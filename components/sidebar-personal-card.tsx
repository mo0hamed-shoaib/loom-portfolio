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
    <div className="w-full max-w-sm space-y-3 3xl:space-y-4">
      {/* Profile Header */}
      <div className="text-center space-y-2 3xl:space-y-3">
        <div className="relative mx-auto w-20 h-20 3xl:w-24 3xl:h-24">
          <Image
            src={profile.image || "/placeholder.svg"}
            alt={profile.name}
            fill
            className="rounded-full object-cover border-2 border-border"
            priority
          />
        </div>
        <div className="space-y-0.5">
          <h1 className="text-xl 3xl:text-2xl font-semibold tracking-tight">{profile.name}</h1>
          <p className="text-base 3xl:text-lg text-muted-foreground">{profile.title}</p>
          <div className="flex items-center justify-center gap-1 text-sm 3xl:text-base text-muted-foreground">
            <MapPinIcon className="w-4 h-4 3xl:w-5 3xl:h-5" />
            <span>{profile.location}</span>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="text-center">
        <p className="text-sm 3xl:text-base text-muted-foreground leading-relaxed">{profile.bio}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 3xl:gap-3">
        {profile.summaryCards.map((card, index) => {
          const Icon = Icons[card.icon as IconName] || Icons.user

          return (
            <div key={index} className="flex items-center gap-1.5 3xl:gap-2 px-2 3xl:px-3 py-1 3xl:py-1.5 rounded-md bg-muted/50">
              <Icon className="w-3.5 h-3.5 3xl:w-4 3xl:h-4 text-muted-foreground" />
              <div className="flex items-baseline gap-1">
                <span className="text-sm 3xl:text-base font-semibold">{card.value}</span>
                <span className="text-xs 3xl:text-sm text-muted-foreground">{card.label}</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-2 3xl:gap-3">
        {profile.socials.map((social, index) => {
          const Icon = Icons[social.icon as IconName] || Icons.user
          const isEmail = social.platform === "Email"

          return (
            <Button key={index} variant="outline" size="icon" asChild className="w-9 h-9 3xl:w-11 3xl:h-11 bg-transparent">
              <Link
                href={social.url}
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noopener noreferrer"}
                aria-label={social.platform}
              >
                <Icon className="w-4 h-4 3xl:w-5 3xl:h-5" />
              </Link>
            </Button>
          )
        })}
      </div>

      {/* Action Buttons */}
      <div className="space-y-1.5 3xl:space-y-2">
        <Button asChild className="w-full bg-transparent 3xl:h-12" variant="outline">
          <Link href={profile.cvUrl} target="_blank" rel="noopener noreferrer">
            <FileTextIcon className="w-4 h-4 3xl:w-5 3xl:h-5 mr-2" />
            View CV
          </Link>
        </Button>

        <ContactFormModal>
          <Button className="w-full 3xl:h-12">
            <Icons.mail className="w-4 h-4 3xl:w-5 3xl:h-5 mr-2" />
            Hire Me
          </Button>
        </ContactFormModal>
      </div>
    </div>
  )
}
