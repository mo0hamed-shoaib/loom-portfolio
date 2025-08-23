import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"
import { siteConfig } from "@/data/site.config"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: siteConfig.name,
    description: siteConfig.description,
    generator: "v0.app",
    icons: {
      icon: [
        { 
          url: "/favicon-dark.svg", 
          type: "image/svg+xml", 
          media: "(prefers-color-scheme: light)" 
        },
        { 
          url: "/favicon-light.svg", 
          type: "image/svg+xml", 
          media: "(prefers-color-scheme: dark)" 
        },
      ],
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
