"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { Code, Award, Briefcase, FolderOpen, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const navigationItems = [
  {
    id: "projects",
    icon: FolderOpen,
    label: "Projects",
  },
  {
    id: "tech-stack",
    icon: Code,
    label: "Tech Stack",
  },
  {
    id: "milestones",
    icon: Award,
    label: "Milestones",
  },
  {
    id: "experience",
    icon: Briefcase,
    label: "Experience",
  },
];

export const NavigationDock = () => {
  const sectionIds = navigationItems.map((item) => item.id);
  const { activeSection, scrollToSection } = useScrollSpy(sectionIds);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Debug: Log active section changes
  React.useEffect(() => {
    console.log("Active section changed to:", activeSection);
  }, [activeSection]);

  // Prevent hydration mismatch by only rendering theme-dependent content after mount
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleNavClick = (sectionId: string) => {
    console.log("Clicking section:", sectionId); // Debug log
    scrollToSection(sectionId);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Use resolvedTheme for consistent aria-label, fallback to "light" for SSR
  const currentTheme = mounted ? resolvedTheme : "light";

  return (
    <>
      {/* Desktop Dock - Right side (≥1280px) */}
      <div className="hidden xl:block fixed right-6 3xl:right-8 top-1/2 -translate-y-1/2 z-50">
        <nav className="flex flex-col gap-3 p-3 bg-background/95 backdrop-blur-sm border rounded-2xl shadow-lg animate-slide-in-from-right">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <Tooltip key={item.id} delayDuration={300}>
                <TooltipTrigger asChild>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="icon"
                    onClick={() => handleNavClick(item.id)}
                    aria-label={`Navigate to ${item.label} section`}
                    aria-current={isActive ? "page" : undefined}
                    className={`
                      relative transition-all duration-200 ease-in-out h-10 w-10
                      ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-md scale-110"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      }
                    `}
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">{item.label}</TooltipContent>
              </Tooltip>
            );
          })}

          <Separator orientation="horizontal" className="my-2" />

          <Tooltip delayDuration={300}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="h-10 w-10 transition-all duration-200"
                aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} theme`}
              >
                <Sun className="h-4 w-4 sm:h-5 sm:w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 sm:h-5 sm:w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">Toggle theme</TooltipContent>
          </Tooltip>
        </nav>
      </div>

      {/* Mobile/Tablet Dock - Bottom (<1280px) */}
      <div className="block xl:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <nav className="flex items-center gap-2 p-3 bg-background/95 backdrop-blur-sm border rounded-2xl shadow-lg animate-slide-in-from-bottom">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <Button
                key={item.id}
                variant={isActive ? "default" : "ghost"}
                size="icon"
                onClick={() => handleNavClick(item.id)}
                aria-label={`Navigate to ${item.label} section`}
                aria-current={isActive ? "page" : undefined}
                className={`
                  relative transition-all duration-200 ease-in-out h-10 w-10
                  ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md scale-110"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }
                `}
              >
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            );
          })}

          <Separator orientation="vertical" className="h-8 mx-2" />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-10 w-10 transition-all duration-200"
            aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} theme`}
          >
            <Sun className="h-4 w-4 sm:h-5 sm:w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 sm:h-5 sm:w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </nav>
      </div>
    </>
  );
};

export default NavigationDock;
