"use client";

import { motion } from "framer-motion";

const skills = [
  "UX Design",
  "React",
  "Next.js",
  "Framer Motion",
  "Figma",
  "Design Systems",
  "Accessibility",
  "Motion Design",
  "TypeScript",
  "User Research",
];

export function SkillsSection() {
  return (
    <section className="py-32 bg-matte-black text-off-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-heading font-semibold mb-16"
        >
          Tools & Capabilities
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, type: "spring", stiffness: 200, damping: 20 }}
              whileHover={{ 
                scale: 1.1, 
                rotate: Math.random() * 6 - 3, // Random slight rotation between -3 and 3 degrees
                backgroundColor: "rgba(41, 151, 255, 0.1)",
                borderColor: "rgba(41, 151, 255, 0.5)",
                boxShadow: "0 0 20px rgba(41, 151, 255, 0.3)"
              }}
              className="magnetic cursor-pointer px-6 py-3 bg-white/5 border border-white/10 rounded-full font-medium text-lg transition-colors backdrop-blur-md"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
