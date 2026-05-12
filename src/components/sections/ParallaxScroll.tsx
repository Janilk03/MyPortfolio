"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const parallaxImages = [
  "/images/AI_era_UX_design_evolution_202605121049_001.jpg",
  "/images/AI_era_UX_design_evolution_202605121049_005.jpg",
  "/images/AI_era_UX_design_evolution_202605121049_010.jpg",
  "/images/AI_era_UX_design_evolution_202605121049_015.jpg",
  "/images/AI_era_UX_design_evolution_202605121049_020.jpg",
  "/images/AI_era_UX_design_evolution_202605121049_025.jpg",
  "/images/AI_era_UX_design_evolution_202605121049_030.jpg",
];

export function ParallaxScroll() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container} className="relative bg-matte-black">
      {parallaxImages.map((image, index) => {
        const yOffset = useTransform(
          scrollYProgress,
          [0, 1],
          [0, (index % 2 === 0 ? 1 : -1) * (80 + index * 30)]
        );

        const scale = useTransform(
          scrollYProgress,
          [index / parallaxImages.length - 0.1, index / parallaxImages.length + 0.1],
          [0.8, 1.2]
        );

        const opacity = useTransform(
          scrollYProgress,
          [
            Math.max(0, index / parallaxImages.length - 0.15),
            index / parallaxImages.length,
            (index + 1) / parallaxImages.length,
            Math.min(1, (index + 1) / parallaxImages.length + 0.15),
          ],
          [0, 1, 1, 0]
        );

        return (
          <motion.div
            key={index}
            className="relative h-screen w-full overflow-hidden flex items-center justify-center"
            style={{
              opacity,
            }}
          >
            <motion.div
              className="absolute inset-0 w-full h-full"
              style={{
                y: yOffset,
                scale,
              }}
            >
              <img
                src={image}
                alt={`Parallax layer ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        );
      })}

      {/* Total scrollable height based on number of images */}
      <div className="relative h-[200vh] bg-matte-black" />
    </section>
  );
}
