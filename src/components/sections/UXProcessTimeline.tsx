"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Map, Layout, PenTool, Play, Code, LineChart } from "lucide-react";

const processes = [
  {
    id: 1,
    title: "Research",
    desc: "User interviews, competitor analysis, data gathering, and persona creation to identify the real problems.",
    icon: Search,
  },
  {
    id: 2,
    title: "Information Architecture",
    desc: "Structuring content hierarchy, user flows, and navigation systems for seamless journeys.",
    icon: Map,
  },
  {
    id: 3,
    title: "Wireframing",
    desc: "Low fidelity exploration, layout testing, and rapid iteration of core concepts.",
    icon: Layout,
  },
  {
    id: 4,
    title: "UI Design",
    desc: "Crafting design systems, typography, color palettes, and accessible components.",
    icon: PenTool,
  },
  {
    id: 5,
    title: "Prototyping",
    desc: "Building interactive prototypes with motion design and micro-interactions for user testing.",
    icon: Play,
  },
  {
    id: 6,
    title: "Front-End Engineering",
    desc: "Developing robust React architectures, optimized performance, and responsive layouts.",
    icon: Code,
  },
  {
    id: 7,
    title: "Testing & Iteration",
    desc: "Usability testing, A/B testing, and analytics to drive continuous improvements.",
    icon: LineChart,
  },
];

function TimelineItem({ item, index }: { item: typeof processes[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll for this specific item entering the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-8 md:mb-16 last:mb-0 ${isEven ? "md:flex-row-reverse" : ""
        }`}
    >
      {/* Timeline Dot */}
      <motion.div
        style={{ scale, opacity }}
        className="absolute left-6 md:left-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-slate-900 flex items-center justify-center -translate-x-1/2 z-10 shadow-sm"
      >
        <item.icon className="w-4 h-4 md:w-5 md:h-5 text-slate-900" />
      </motion.div>

      {/* Content Card */}
      <div className={`ml-14 md:ml-0 md:w-1/2 flex ${isEven ? "md:justify-start pl-0 md:pl-16" : "md:justify-end pr-0 md:pr-16"}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="magnetic bg-white border border-slate-100 p-6 md:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full max-w-md transition-all duration-300 hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:border-slate-200"
        >
          <div className="text-slate-400 text-sm font-mono mb-2 md:mb-3 font-medium">0{item.id}</div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-slate-900">{item.title}</h3>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
        </motion.div>
      </div>
    </div>
  );
}

export function UXProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section ref={containerRef} id="process" className="py-24 md:py-24 bg-slate-50 text-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold md:font-semibold mb-4 text-slate-900"
          >
            The Engineering Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg max-w-2xl mx-auto"
          >
            A systematic approach bridging the gap between human needs and technical constraints.
          </motion.p>
        </div>

        <div className="relative pb-16">
          {/* Background Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2" />

          {/* Animated Scrolling Line */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-900 -translate-x-1/2 origin-top"
            style={{ scaleY: scrollYProgress }}
          />

          {processes.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
