"use client";

import { SidebarPersonalCard } from "@/components/sidebar-personal-card";
import { ProjectsCarousel } from "@/components/projects-carousel";
import { TechStackSection } from "@/components/tech-stack-section";
import { MilestonesSection } from "@/components/milestones-section";
import { ExperienceTimeline } from "@/components/experience-timeline";

import { NavigationDock } from "@/components/navigation-dock";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { ContactFormModal } from "@/components/contact-form-modal";
import { Badge } from "@/components/ui/badge";
import { ProfileInfoModal } from "@/components/profile-info-modal";
import { profile } from "@/data/profile";
import { FileText, Mail, Info } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/components/logo";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Skip Navigation Link for Screen Readers */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      {/* Navigation Dock */}
      <NavigationDock />

      {/* Desktop Layout (≥1280px) */}
      <div className="hidden xl:flex">
        {/* Sidebar */}
        <aside className="fixed left-0 top-0 h-screen w-80 xl:w-[400px] 2xl:w-[480px] 3xl:w-[560px] border-r bg-card p-6 xl:p-8 overflow-y-auto">
          <SidebarPersonalCard />
        </aside>

        {/* Main Content */}
        <main id="main-content" className="ml-80 xl:ml-[400px] 2xl:ml-[480px] 3xl:ml-[560px] flex-1 p-6 xl:p-8 page-transition">
          <div className="max-w-4xl 3xl:max-w-6xl mx-auto">
            {/* Main content sections */}
            <div className="space-y-16 3xl:space-y-20 max-w-3xl 3xl:max-w-4xl mx-auto">
              <AnimatedSection animation="fade-up" delay={100}>
                <section id="projects" className="scroll-mt-24 md:scroll-mt-28 3xl:scroll-mt-32">
                  <ProjectsCarousel />
                </section>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <section
                  id="tech-stack"
                  className="scroll-mt-24 md:scroll-mt-28 3xl:scroll-mt-32"
                >
                  <TechStackSection />
                </section>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <section
                  id="milestones"
                  className="scroll-mt-24 md:scroll-mt-28 3xl:scroll-mt-32"
                >
                  <MilestonesSection />
                </section>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={400}>
                <section
                  id="experience"
                  className="scroll-mt-24 md:scroll-mt-28 3xl:scroll-mt-32"
                >
                  <ExperienceTimeline />
                </section>
              </AnimatedSection>
            </div>
          </div>
        </main>
      </div>

      {/* Tablet Layout (768-1279px) */}
      <div className="hidden md:block xl:hidden">
        <div className="border-b p-4 sticky top-0 z-40 backdrop-blur-sm bg-card/95">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Logo size="lg" />
              <div className="w-12 h-12 relative">
                <Image
                  src={profile.image || "/developer-headshot.png"}
                  alt="Profile"
                  fill
                  sizes="48px"
                  className="rounded-full object-cover border border-border"
                />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl 3xl:text-2xl font-semibold">{profile.name}</h1>
                <p className="text-sm sm:text-base 3xl:text-lg text-foreground">{profile.title}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <ProfileInfoModal>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 px-3 bg-transparent"
                >
                  <Info className="w-3 h-3 mr-1" />
                  Info
                </Button>
              </ProfileInfoModal>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="h-8 px-3 bg-transparent"
              >
                <Link
                  href={profile.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="w-3 h-3 mr-1" />
                  CV
                </Link>
              </Button>
              <ContactFormModal>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 px-3 bg-transparent"
                >
                  <Mail className="w-3 h-3 mr-1" />
                  Hire
                </Button>
              </ContactFormModal>
            </div>
          </div>
        </div>

        <main className="p-6 pb-20">
          <div className="max-w-3xl 3xl:max-w-4xl mx-auto space-y-12">
            <AnimatedSection animation="fade-up" delay={100}>
              <section id="projects" className="scroll-mt-24 md:scroll-mt-28">
                <ProjectsCarousel />
              </section>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <section id="tech-stack" className="scroll-mt-24 md:scroll-mt-28">
                <TechStackSection />
              </section>
            </AnimatedSection>



            <AnimatedSection animation="fade-up" delay={300}>
              <section id="milestones" className="scroll-mt-24 md:scroll-mt-28">
                <MilestonesSection />
              </section>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <section id="experience" className="scroll-mt-24 md:scroll-mt-28">
                <ExperienceTimeline />
              </section>
            </AnimatedSection>
          </div>
        </main>
      </div>

      {/* Mobile Layout (<768px) */}
      <div className="block md:hidden">
        <div className="border-b p-4 sticky top-0 z-40 backdrop-blur-sm bg-card/95">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Logo size="md" />
              <div className="w-10 h-10 relative">
                <Image
                  src={profile.image || "/developer-headshot.png"}
                  alt="Profile"
                  fill
                  sizes="40px"
                  className="rounded-full object-cover border border-border"
                />
              </div>
              <div>
                <h1 className="text-base sm:text-lg font-medium">{profile.name}</h1>
                <p className="text-xs sm:text-sm text-foreground">{profile.title}</p>
              </div>
            </div>

            <div className="flex gap-1">
              <ProfileInfoModal>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-7 px-3 bg-transparent"
                >
                  <Info className="w-3 h-3 mr-1" />
                  Info
                </Button>
              </ProfileInfoModal>
            </div>
          </div>
        </div>

        <main className="p-4 pb-20">
          <div className="max-w-3xl mx-auto space-y-8">
            <AnimatedSection animation="fade-up" delay={100}>
              <section id="projects" className="scroll-mt-24 md:scroll-mt-28">
                <ProjectsCarousel />
              </section>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <section id="tech-stack" className="scroll-mt-24 md:scroll-mt-28">
                <TechStackSection />
              </section>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <section id="milestones" className="scroll-mt-24 md:scroll-mt-28">
                <MilestonesSection />
              </section>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <section id="experience" className="scroll-mt-24 md:scroll-mt-28">
                <ExperienceTimeline />
              </section>
            </AnimatedSection>
          </div>
        </main>
      </div>
    </div>
  );
}
