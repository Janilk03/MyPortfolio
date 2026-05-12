import { HeroSection } from "@/components/sections/HeroSection";
import { AppleScrollStory } from "@/components/sections/AppleScrollStory";
import { UXProcessTimeline } from "@/components/sections/UXProcessTimeline";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactExperience } from "@/components/sections/ContactExperience";

export default function Home() {
  return (
    <main className="min-h-screen bg-matte-black selection:bg-electric-blue selection:text-white relative">
      <HeroSection />
      <AppleScrollStory />
      <UXProcessTimeline />
      <FeaturedProjects />
      <SkillsSection />
      <section id="contact" className="scroll-mt-24">
        <ContactExperience />
      </section>
    </main>
  );
}
