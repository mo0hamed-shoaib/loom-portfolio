"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from "sonner"
import { ContactFormModal } from "@/components/contact-form-modal"
import { Icons, type IconName } from "@/components/icons"
import { profile } from "@/data/profile"
import { Logo } from "@/components/logo"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function SidebarPersonalCard() {
  const MapPinIcon = Icons["map-pin"]
  const FileTextIcon = Icons["file-text"]

  return (
    <div className="w-full max-w-sm xl:max-w-md 2xl:max-w-lg 3xl:max-w-xl space-y-3 3xl:space-y-4">
      {/* Logo Header */}
      <div className="flex items-center justify-center">
        <Logo size="md" className="xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 3xl:w-20 3xl:h-20" />
      </div>

      {/* Profile Header */}
      <div className="text-center space-y-2 3xl:space-y-3">
        <Avatar className="mx-auto w-20 h-20 3xl:w-24 3xl:h-24">
          <AvatarImage
            src={profile.image || "/placeholder.svg"}
            alt={profile.name}
            className="object-cover"
          />
          <AvatarFallback className="text-lg 3xl:text-xl font-semibold">
            {profile.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
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

      <div className="grid grid-cols-2 gap-2 3xl:gap-3">
        {profile.summaryCards.map((card, index) => {
          return (
            <div key={index} className="flex items-center justify-center px-2 3xl:px-3 py-1 3xl:py-1.5 rounded-md bg-muted/50 min-w-0">
              <div className="flex items-baseline gap-1 min-w-0">
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

          if (isEmail) {
            return (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-9 h-9 3xl:w-11 3xl:h-11 bg-transparent"
                    aria-label={social.platform}
                    onClick={() => {
                      navigator.clipboard.writeText(profile.email)
                      toast("Email address copied to clipboard!")
                    }}
                  >
                    <Icon className="w-4 h-4 3xl:w-5 3xl:h-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy email address</p>
                </TooltipContent>
              </Tooltip>
            )
          }

          return (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-9 h-9 3xl:w-11 3xl:h-11 bg-transparent"
                  asChild
                  aria-label={social.platform}
                >
                  <Link href={social.url} target="_blank" rel="noopener noreferrer">
                    <Icon className="w-4 h-4 3xl:w-5 3xl:h-5" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Visit my {social.platform}</p>
              </TooltipContent>
            </Tooltip>
          )
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <Button asChild className="flex-1 bg-transparent h-9" variant="outline">
          <Link href={profile.cvUrl} target="_blank" rel="noopener noreferrer">
            <FileTextIcon className="w-4 h-4 3xl:w-5 3xl:h-5 mr-2" />
            View CV
          </Link>
        </Button>

        <ContactFormModal>
          <Button className="flex-1 h-9">
            <Icons.mail className="w-4 h-4 3xl:w-5 3xl:h-5 mr-2" />
            Hire Me
          </Button>
        </ContactFormModal>
      </div>
    </div>
  )
}
