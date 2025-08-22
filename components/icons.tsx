import {
  Calendar,
  Code,
  Coffee,
  ExternalLink,
  FileText,
  GitCommit,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Sun,
  Twitter,
  User,
  X,
} from "lucide-react"

export const Icons = {
  calendar: Calendar,
  code: Code,
  coffee: Coffee,
  "external-link": ExternalLink,
  "file-text": FileText,
  "git-commit": GitCommit,
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  "map-pin": MapPin,
  moon: Moon,
  sun: Sun,
  twitter: Twitter,
  user: User,
  x: X,
} as const

export type IconName = keyof typeof Icons
