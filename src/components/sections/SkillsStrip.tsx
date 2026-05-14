"use client";

import { motion } from "framer-motion";

const skills = [
  "UI/UX Design",
  "Visualization",
  "Front-End Development",
  "System Thinking",
  "Design Systems",
  "Interaction Motion",
  "Typography",
];

// 4 copies ensures it's wide enough for any ultra-wide screen
const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

export function SkillsStrip() {
  return (
    <div className="w-full overflow-hidden bg-white py-5 border-y border-slate-100 flex items-center z-20 relative">
      <motion.div
        className="flex w-max items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div key={index} className="flex items-center">
            <span className="px-6 text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-slate-800">
              {skill}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mx-2" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
