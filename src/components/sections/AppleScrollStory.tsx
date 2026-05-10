"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const storyFrames = [
  {
    id: 1,
    title: "The Vision",
    text: "Every great product starts with a clear, uncompromising vision of the future.",
    img: "/images/story-1.jpg",
    color: "bg-zinc-900",
  },
  {
    id: 2,
    title: "The Architecture",
    text: "Structuring chaos into elegant, intuitive systems that users naturally understand.",
    img: "/images/story-2.jpg",
    color: "bg-zinc-800",
  },
  {
    id: 3,
    title: "The Experience",
    text: "Refining interactions until they feel like an extension of the user's mind.",
    img: "/images/story-3.jpg",
    color: "bg-zinc-900",
  },
];

export function AppleScrollStory() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section ref={container} className="relative bg-matte-black w-full" style={{ height: `${storyFrames.length * 100}vh` }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {storyFrames.map((frame, index) => {
          // Calculate individual frame progress boundaries
          const start = index / storyFrames.length;
          const end = (index + 1) / storyFrames.length;
          
          // Animations based on smooth progress
          const scale = useTransform(smoothProgress, [start, end], [0.8, 1.2]);
          const opacity = useTransform(smoothProgress, [start - 0.1, start + 0.1, end - 0.1, end + 0.1], [0, 1, 1, 0]);
          const y = useTransform(smoothProgress, [start, end], ["10vh", "-10vh"]);

          return (
            <motion.div
              key={frame.id}
              className="absolute inset-0 flex items-center justify-center p-6 md:p-12"
              style={{ opacity }}
            >
              <div className="relative w-full max-w-6xl h-[70vh] md:h-[80vh] flex flex-col md:flex-row items-center justify-between gap-12">
                <motion.div style={{ y }} className="md:w-1/2 z-10">
                  <h2 className="text-4xl md:text-6xl font-heading font-semibold text-off-white mb-6">
                    {frame.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-soft-gray font-light leading-relaxed max-w-lg">
                    {frame.text}
                  </p>
                </motion.div>

                <motion.div style={{ scale }} className={`md:w-1/2 h-[50vh] md:h-full w-full relative rounded-2xl overflow-hidden ${frame.color} shadow-2xl shadow-electric-blue/5`}>
                  {/* Assuming user will place images in /public/images/ */}
                  <div className="absolute inset-0 flex items-center justify-center text-soft-gray/50 font-mono text-sm border border-white/5 bg-gradient-to-br from-white/5 to-transparent">
                    Image Placeholder: {frame.img}
                  </div>
                  {/* Uncomment when images are added */}
                  {/* <Image src={frame.img} alt={frame.title} fill className="object-cover" /> */}
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
