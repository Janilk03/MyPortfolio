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
      className={`group inline-flex flex-col items-center gap-2.5 text-slate-900 outline-none transition-opacity hover:opacity-80 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-slate-400/35 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Scroll to next section"
    >
      <span className="select-none text-[10px] font-light uppercase tracking-[0.26em] text-slate-900/70">
        Scroll
      </span>
      <motion.span
        className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-900/35 bg-white/35 text-slate-900 backdrop-blur-[1px]"
        aria-hidden
        animate={{ y: [0, 4, 0] }}
        transition={{
          duration: 1.65,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M2.5 4.25L6 7.75l3.5-3.5"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.span>
    </motion.a>
  );
}
