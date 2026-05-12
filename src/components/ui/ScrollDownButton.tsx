"use client";

import { motion } from "framer-motion";

type ScrollDownButtonProps = {
  href: string;
  className?: string;
};

export function ScrollDownButton({ href, className = "" }: ScrollDownButtonProps) {
  return (
    <motion.a
      href={href}
      className={`group inline-flex flex-col items-center gap-2 text-slate-900 outline-none transition-opacity hover:opacity-75 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-slate-400/35 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Scroll to next section"
    >
      <span className="flex flex-col items-center gap-0 select-none text-[9px] font-thin uppercase leading-none tracking-[0.42em] text-slate-900/80">
        <span>scroll</span>
        <span>down</span>
      </span>
      <motion.span
        className="text-slate-900"
        aria-hidden
        animate={{ y: [0, 6, 0] }}
        transition={{
          duration: 1.85,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="10" height="26" viewBox="0 0 10 26" fill="none" className="overflow-visible">
          <line x1="5" y1="1.5" x2="5" y2="19.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <path
            d="M1 18.5l4 5 4-5"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.span>
    </motion.a>
  );
}
