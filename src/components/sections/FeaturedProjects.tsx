"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "SynergICE",
    category: "UX/UI & Front-end",
    img: "/images/synergice-project.jpg",
    url: "https://www.synergice.co/",
    tags: ["Adobe XD", "Next jS", "React JS", "Tailwind", "Faster", "Scalable"],
    color: "bg-blue-900/20",
  },
  {
    id: 2,
    title: "Arcolab",
    category: "Product Design",
    img: "/images/arcolab-project.jpg",
    url: "https://www.arcolab.com/",
    tags: ["Adobe XD", "Next jS", "React JS", "Tailwind", "Faster", "Scalable"],
    color: "bg-emerald-900/20",
  },
];

export function FeaturedProjects() {
  return (
    <section id="works" className="py-24 md:py-32 bg-matte-black scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <h2 className="text-4xl md:text-5xl font-heading font-semibold text-off-white">
          Publicly Shareable Work
        </h2>
      </div>

      <div className="flex gap-8 px-6 md:px-12 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover="hover"
            className="relative w-[85vw] md:w-[600px] h-[50vh] md:h-[600px] rounded-3xl overflow-hidden shrink-0 group border border-white/5 bg-white snap-center"
          >
            {/* Image Container with Hover Zoom */}
            <motion.div
              className="absolute inset-0 z-0 h-[70%]"
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

            {/* Content Area with White Background */}
            <div className="absolute inset-x-0 bottom-0 h-[30%] bg-white p-8 flex flex-col justify-center z-20">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-electric-blue text-sm font-medium mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-slate-50 text-slate-500 rounded-md text-[10px] font-bold uppercase tracking-wider border border-slate-100"
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
                  className="relative group/link"
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
                    className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 transition-colors"
                  >
                    <ArrowUpRight className="w-5 h-5" />
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
