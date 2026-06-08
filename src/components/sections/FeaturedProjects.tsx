"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Arcolab",
    category: "Product Design",
    img: "/images/arcolab-project.jpg",
    url: "https://www.arcolab.com/",
    tags: ["Adobe XD", "Next jS", "React JS", "Tailwind", "Faster", "Scalable"],
    color: "bg-emerald-900/20",
  },
  {
    id: 2,
    title: "SynergICE",
    category: "UX/UI & Front-end",
    img: "/images/synergice-project.jpg",
    url: "https://www.synergice.co/",
    tags: ["Adobe XD", "Next jS", "React JS", "Tailwind", "Faster", "Scalable"],
    color: "bg-blue-900/20",
  }
];



export function FeaturedProjects() {
  return (
    <section id="works" className="bg-matte-black scroll-mt-24">
      <div className="container px-6 md:px-12 mb-12 mt-12">
        <h2 className="text-4xl md:text-4xl font-heading font-bold text-off-white">
          Public-Facing Works
        </h2>
      </div>

      <div className="flex gap-6 md:gap-8 px-6 md:px-12 scroll-pl-6 md:scroll-pl-12 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover="hover"
            className="relative w-[82vw] md:w-[600px] h-[480px] md:h-[600px] flex flex-col rounded-3xl overflow-hidden shrink-0 group border border-white/5 bg-white snap-start"
          >
            {/* Image Container with Hover Zoom */}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex-1 overflow-hidden cursor-pointer"
            >
              <motion.div
                className="w-full h-full"
                variants={{
                  hover: { scale: 1.05 },
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </a>

            {/* Content Area with White Background */}
            <div className="bg-white p-6 md:p-8 flex flex-col justify-center border-t border-slate-100 z-20">
              <div className="flex justify-between items-center">
                <div className="flex-1 pr-4">
                  <p className="text-electric-blue text-xs md:text-sm font-medium mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-slate-50 text-slate-500 rounded-md text-[9px] md:text-[10px] font-bold uppercase tracking-wider border border-slate-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group/link shrink-0"
                >
                  <motion.div
                    variants={{
                      hover: {
                        scale: 1.1,
                        rotate: 45,
                        backgroundColor: "rgba(41, 151, 255, 1)",
                        color: "#fff",
                      },
                    }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 transition-colors"
                  >
                    <ArrowUpRight className="w-4.5 h-4.5 md:w-5 md:h-5" />
                  </motion.div>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
