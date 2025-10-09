"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, FileText } from "lucide-react";
import { ProjectImageCarousel } from "@/components/project-image-carousel";
import type { Project } from "@/lib/schemas";
import { useTheme } from "next-themes";
import { useState, useEffect, lazy, Suspense } from "react";

// Lazy load modals for code splitting
const CaseStudyModal = lazy(() =>
  import("./case-study-modal").then((module) => ({
    default: module.CaseStudyModal,
  }))
);

interface ProjectCardProps {
  project: Project;
}

// Tech stack icon mapping
const getTechIcon = (tech: string, theme: string): string | null => {
  const isDark = theme === "dark";

  const iconMap: Record<string, string> = {
    // Programming Languages
    javascript: "/icons/programming-languages/javascript.svg",
    typescript: "/icons/programming-languages/typescript.svg",

    // Frontend
    react: "/icons/frontend/react.svg",
    angular: "/icons/frontend/angular.svg",
    nextjs: isDark
      ? "/icons/frontend/nextjs-light.svg"
      : "/icons/frontend/nextjs-dark.svg",
    redux: "/icons/frontend/redux.svg",
    html: "/icons/frontend/html.svg",
    css: "/icons/frontend/css.svg",
    tailwind: "/icons/frontend/tailwind.svg",
    bootstrap: "/icons/frontend/bootstrap.svg",
    "shadcn/ui": isDark
      ? "/icons/frontend/shadcn-light.svg"
      : "/icons/frontend/shadcn-dark.svg",

    // Backend
    nodejs: "/icons/backend/nodejs.svg",
    express: isDark
      ? "/icons/backend/express-light.svg"
      : "/icons/backend/express-dark.svg",
    api: "/icons/backend/api.svg",
    jwt: isDark
      ? "/icons/backend/jwt-light.svg"
      : "/icons/backend/jwt-dark.svg",

    // Database
    mongodb: "/icons/database/mongodb.svg",
    supabase: "/icons/database/supabase.svg",

    // Tools
    github: isDark
      ? "/icons/tools/github-light.svg"
      : "/icons/tools/github-dark.svg",
  };

  return iconMap[tech.toLowerCase()] || null;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showFullSummary, setShowFullSummary] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSummary = () => {
    setShowFullSummary(!showFullSummary);
  };

  return (
    <Card className="overflow-hidden border-border/50 hover:border-border hover:shadow-sm transition-all duration-200 p-0 card-hover">
      <CardContent className="p-6 3xl:p-8">
        {/* Project Image Carousel */}
        <div className="pb-4 3xl:pb-6">
          <ProjectImageCarousel project={project} />
        </div>

        {/* Project Details */}
        <div className="pt-2 3xl:pt-4 space-y-4 3xl:space-y-6">
          {/* Project Header */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex-1 min-w-0">
              <h3 className="typography-h3 line-clamp-2">{project.title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="typography-small text-foreground whitespace-nowrap">
                  {project.year}
                </span>
              </div>
            </div>
          </div>

          {/* Project Summary */}
          <div className="mb-4">
            <p
              className={`font-mono-technical text-sm 3xl:text-base text-foreground leading-relaxed ${
                showFullSummary ? "" : "line-clamp-3"
              }`}
            >
              {project.summary}
            </p>
            {project.summary.length > 120 && (
              <button
                onClick={toggleSummary}
                className="text-primary hover:text-primary/80 text-sm font-medium mt-1 transition-colors"
              >
                {showFullSummary ? "See Less" : "See More"}
              </button>
            )}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.stack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="font-mono-technical text-xs 3xl:text-sm flex items-center gap-1.5 badge-hover"
              >
                {mounted && getTechIcon(tech, resolvedTheme || "light") && (
                  <Image
                    src={getTechIcon(tech, resolvedTheme || "light")!}
                    alt={`${tech} icon`}
                    width={12}
                    height={12}
                    className="w-3 h-3"
                  />
                )}
                {tech}
              </Badge>
            ))}
          </div>

          {/* Key Features */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-4">
              <h4 className="typography-small font-medium mb-2">
                Key Features
              </h4>
              <ul className="space-y-2">
                {project.highlights.slice(0, 3).map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 typography-small text-foreground"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="font-mono-technical">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2 3xl:gap-3 pt-2">
            {project.links?.demo && (
              <Button
                variant="default"
                size="sm"
                asChild
                className="3xl:h-10 btn-interactive"
              >
                <Link
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo of ${project.title}`}
                >
                  <ExternalLink
                    className="w-3 h-3 3xl:w-4 3xl:h-4 mr-1.5"
                    aria-hidden="true"
                  />
                  Live Demo
                </Link>
              </Button>
            )}

            {project.links?.source && (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="3xl:h-10 btn-interactive"
              >
                <Link
                  href={project.links.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View source code for ${project.title} on GitHub`}
                >
                  <Github
                    className="w-3 h-3 3xl:w-4 3xl:h-4 mr-1.5"
                    aria-hidden="true"
                  />
                  Source Code
                </Link>
              </Button>
            )}

            {project.caseStudyDetails && (
              <Suspense
                fallback={
                  <Button
                    variant="outline"
                    size="sm"
                    className="3xl:h-10"
                    disabled
                  >
                    Loading...
                  </Button>
                }
              >
                <CaseStudyModal project={project}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="3xl:h-10 btn-interactive"
                    aria-label={`View detailed case study for ${project.title}`}
                  >
                    <FileText
                      className="w-3 h-3 3xl:w-4 3xl:h-4 mr-1.5"
                      aria-hidden="true"
                    />
                    Case Study
                  </Button>
                </CaseStudyModal>
              </Suspense>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
