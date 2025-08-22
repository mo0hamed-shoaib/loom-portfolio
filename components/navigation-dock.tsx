"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { Code, Award, Briefcase, FolderOpen, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface NavigationSection {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const sections: NavigationSection[] = [
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "tech-stack", label: "Tech Stack", icon: Code },
  { id: "milestones", label: "Milestones", icon: Award },
  { id: "experience", label: "Experience", icon: Briefcase },
];

export function NavigationDock() {
  const activeSection = useScrollSpy(
    sections.map((s) => s.id),
    100
  );
  const { theme, setTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Use the same offset as scroll-mt classes (96px = 24 * 4, 112px = 28 * 4)
      const offset = window.innerWidth >= 768 ? 112 : 96;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      {/* Desktop Navigation Dock - Fixed on right side */}
      <nav
        aria-label="Page sections"
        className="hidden lg:block fixed right-6 top-1/2 -translate-y-1/2 z-50"
      >
        <div className="flex flex-col gap-2 bg-card/80 backdrop-blur-sm border rounded-full p-2 shadow-lg">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;

            return (
              <Tooltip key={section.id}>
                <TooltipTrigger asChild>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="icon"
                    onClick={() => scrollToSection(section.id)}
                    className="w-10 h-10 rounded-full"
                    aria-label={section.label}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <Icon className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">{section.label}</TooltipContent>
              </Tooltip>
            );
          })}

          {/* Theme Toggle */}
          <div className="border-t border-border my-1" />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full"
                aria-label="Toggle theme"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">Toggle theme</TooltipContent>
          </Tooltip>
        </div>
      </nav>

      {/* Sub-lg Navigation Dock - Single instance, responsive positioning */}
      <nav
        aria-label="Page sections"
        className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 md:bottom-6 md:right-6 md:left-auto md:translate-x-0 z-50"
      >
        <div className="flex items-center gap-1 bg-card/90 backdrop-blur-sm border rounded-full p-1 shadow-lg">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;

            return (
              <Button
                key={section.id}
                variant={isActive ? "default" : "ghost"}
                size="icon"
                onClick={() => scrollToSection(section.id)}
                className="w-9 h-9 rounded-full"
                aria-label={section.label}
                aria-current={isActive ? "true" : undefined}
              >
                <Icon className="w-3.5 h-3.5" />
              </Button>
            );
          })}

          {/* Theme Toggle */}
          <div className="w-px h-6 bg-border mx-1" />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full"
            aria-label="Toggle theme"
          >
            <Sun className="h-3.5 w-3.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-3.5 w-3.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </nav>
    </>
  );
}
