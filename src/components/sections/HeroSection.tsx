"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MoveRight } from "lucide-react";
import { useRef } from "react";

export function HeroSection() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Fade out text as we scroll down
  const textOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.1], ["0vh", "-20vh"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.25], [0.55, 0.15]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number],
      },
    }),
  };

  return (
    <section ref={container} className="relative h-screen w-full overflow-hidden bg-matte-black">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/video/hero-background.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-matte-black/55"
      />

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.25, 0.45, 0.25],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[15%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-electric-blue/15 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute top-[45%] -right-[20%] w-[60vw] h-[60vw] rounded-full bg-electric-blue/10 blur-[100px]"
        />
      </div>

      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center text-center"
        >
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/10 backdrop-blur-md"
          >
            <span className="text-md font-medium tracking-wide text-off-white">JANIL K | UX Engineer</span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-semibold tracking-tight text-off-white mb-6 max-w-5xl leading-[1.05]"
          >
            Designing interfaces that <span className="text-electric-blue italic">feel alive.</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-lg md:text-2xl text-off-white max-w-2xl mb-12 font-light"
          >
            I bridge UX strategy and front-end engineering to craft immersive, digital products.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button className="group magnetic relative px-8 py-4 bg-off-white text-matte-black rounded-full font-medium overflow-hidden transition-all hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                View Work <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            <button className="group magnetic px-8 py-4 border border-white/20 rounded-full font-medium text-off-white hover:bg-white/10 transition-all">
              Let&apos;s Talk
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ opacity: textOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => {
            window.scrollBy({ top: window.innerHeight * 0.5, behavior: "smooth" });
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-off-white font-medium">Scroll to explore</span>
          <div className="w-[28px] h-[46px] rounded-full border-2 border-white/20 flex justify-center p-1.5 relative bg-white/5 backdrop-blur-sm">
            <motion.div
              animate={{
                y: [0, 16],
                opacity: [1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="w-1.5 h-3 bg-electric-blue rounded-full shadow-[0_0_8px_rgba(41,151,255,0.8)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
