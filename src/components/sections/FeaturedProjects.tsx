"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Fintech Dashboard",
    category: "UX/UI & Front-end",
    img: "/images/project-1.jpg",
    tags: ["React", "Tailwind", "Framer Motion", "Recharts"],
    color: "bg-blue-900/20",
  },
  {
    id: 2,
    title: "Healthcare App",
    category: "Product Design",
    img: "/images/project-2.jpg",
    tags: ["Figma", "Design System", "User Research"],
    color: "bg-emerald-900/20",
  },
  {
    id: 3,
    title: "E-Commerce Experience",
    category: "Full-stack Engineering",
    img: "/images/project-3.jpg",
    tags: ["Next.js", "Stripe", "GSAP"],
    color: "bg-purple-900/20",
  },
  {
    id: 4,
    title: "AI Writing Assistant",
    category: "UX Strategy",
    img: "/images/project-4.jpg",
    tags: ["OpenAI", "React", "Prototyping"],
    color: "bg-orange-900/20",
  },
];

export function FeaturedProjects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]); // Adjust based on number of cards

  return (
    <section id="works" ref={targetRef} className="relative h-[400vh] bg-matte-black scroll-mt-24">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-off-white">Featured Work</h2>
        </div>
        
        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12 w-max">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover="hover"
              className="relative w-[85vw] md:w-[600px] h-[50vh] md:h-[600px] rounded-3xl overflow-hidden shrink-0 group cursor-pointer border border-white/5 bg-white/5"
            >
              {/* Image Container with Hover Zoom */}
              <motion.div 
                className={`absolute inset-0 ${project.color} flex items-center justify-center`}
                variants={{
                  hover: { scale: 1.05 },
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                 <div className="text-soft-gray/50 font-mono text-sm z-0">
                    Placeholder: {project.img}
                 </div>
              </motion.div>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-matte-black/90 via-matte-black/20 to-transparent opacity-80" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-electric-blue text-sm font-medium mb-2">{project.category}</p>
                    <h3 className="text-3xl font-semibold text-off-white mb-4">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs text-soft-gray">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <motion.div 
                    variants={{
                      hover: { scale: 1.2, rotate: 45, backgroundColor: "rgba(41, 151, 255, 1)", color: "#fff" },
                    }}
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white transition-colors"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
