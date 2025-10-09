"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import { ContactFormModal } from "@/components/contact-form-modal";
import { Icons, type IconName } from "@/components/icons";
import { profile } from "@/data/profile";
import { Logo } from "@/components/logo";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GitHubStats } from "@/components/github-stats";

export function SidebarPersonalCard() {
  const MapPinIcon = Icons["map-pin"];
  const FileTextIcon = Icons["file-text"];

  return (
    <div className="w-full max-w-sm xl:max-w-md 2xl:max-w-lg 3xl:max-w-xl space-y-2.5 2xl:space-y-3 3xl:space-y-4">
      {/* Logo Header */}
      <div className="flex items-center justify-center">
        <Logo size="sm" className="2xl:w-14 2xl:h-14 3xl:w-16 3xl:h-16" />
      </div>

      {/* Profile Header */}
      <div className="text-center space-y-1.5 2xl:space-y-2 3xl:space-y-3">
        <Avatar className="mx-auto w-16 h-16 2xl:w-24 2xl:h-24 3xl:w-28 3xl:h-28">
          <AvatarImage
            src={profile.image || "/placeholder.svg"}
            alt={profile.name}
            className="object-cover"
          />
          <AvatarFallback className="text-base 2xl:text-xl 3xl:text-2xl font-semibold">
            {profile.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-0.5">
          <h1 className="text-xl 2xl:text-3xl 3xl:text-4xl font-bold">
            {profile.name}
          </h1>
          <p className="text-base 2xl:text-xl 3xl:text-2xl text-foreground">
            {profile.title}
          </p>
          <div className="flex items-center justify-center gap-1 text-xs 2xl:text-base 3xl:text-lg text-foreground">
            <MapPinIcon className="w-3 h-3 2xl:w-5 2xl:h-5 3xl:w-6 3xl:h-6" />
            <span>{profile.location}</span>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="text-center">
        <p className="text-sm 2xl:text-lg 3xl:text-xl text-foreground leading-relaxed">
          {profile.bio}
        </p>
      </div>

      {/* GitHub Stats */}
      <GitHubStats />

      {/* Social Links */}
      <div className="flex justify-center gap-1.5 2xl:gap-3 3xl:gap-4">
        {profile.socials.map((social, index) => {
          const Icon = Icons[social.icon as IconName] || Icons.user;
          const isEmail = social.platform === "Email";

          if (isEmail) {
            return (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-8 h-8 2xl:w-11 2xl:h-11 3xl:w-12 3xl:h-12 bg-transparent"
                    aria-label={social.platform}
                    onClick={() => {
                      navigator.clipboard.writeText(profile.email);
                      toast("Email address copied to clipboard!");
                    }}
                  >
                    <Icon className="w-3 h-3 2xl:w-5 2xl:h-5 3xl:w-6 3xl:h-6" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy email address</p>
                </TooltipContent>
              </Tooltip>
            );
          }

          return (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-8 h-8 2xl:w-11 2xl:h-11 3xl:w-12 3xl:h-12 bg-transparent"
                  asChild
                  aria-label={social.platform}
                >
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-3 h-3 2xl:w-5 2xl:h-5 3xl:w-6 3xl:h-6" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Visit my {social.platform}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-1.5 2xl:gap-3 3xl:gap-4">
        <Button
          asChild
          className="flex-1 bg-transparent h-8 2xl:h-10 3xl:h-11"
          variant="outline"
        >
          <Link href={profile.cvUrl} target="_blank" rel="noopener noreferrer">
            <FileTextIcon className="w-3 h-3 2xl:w-5 2xl:h-5 3xl:w-6 3xl:h-6 mr-1.5 2xl:mr-2" />
            View CV
          </Link>
        </Button>

        <ContactFormModal>
          <Button className="flex-1 h-8 2xl:h-10 3xl:h-11">
            <Icons.mail className="w-3 h-3 2xl:w-5 2xl:h-5 3xl:w-6 3xl:h-6 mr-1.5 2xl:mr-2" />
            Hire Me
          </Button>
        </ContactFormModal>
      </div>
    </div>
  );
}
