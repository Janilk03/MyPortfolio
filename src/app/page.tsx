import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsStrip } from "@/components/sections/SkillsStrip";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { AppleScrollStory } from "@/components/sections/AppleScrollStory";
import { UXProcessTimeline } from "@/components/sections/UXProcessTimeline";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { AboutMe } from "@/components/sections/AboutMe";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactExperience } from "@/components/sections/ContactExperience";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-matte-black selection:bg-electric-blue selection:text-white relative">
      <HeroSection />
      <SkillsStrip />
      <CaseStudySection />
      <UXProcessTimeline />
      <FeaturedProjects />
      <AboutMe />
      <SkillsSection />
      <Footer />
      <ContactExperience />
    </main>
  );
}
