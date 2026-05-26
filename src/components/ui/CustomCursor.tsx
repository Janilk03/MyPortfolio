"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

type Ripple = { id: number; x: number; y: number; colorIndex: number };

/** Violet → indigo → blue cycle */
const RIPPLE_COLORS = [
  { rgb: "139, 92, 246" }, // violet
  { rgb: "79, 70, 229" }, // indigo
  { rgb: "59, 130, 246" }, // blue
];

const MAX_RIPPLES = 10;
const MIN_MOVE_PX = 28;
const MIN_INTERVAL_MS = 48;
const RIPPLE_BLOCK_SELECTOR =
  "a, img, p, span, h1, h2, h3, h4, h5, h6, li, label, small, strong, em, b, i";

export function CustomCursor() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const nextId = useRef(0);
  const colorCycle = useRef(0);
  const lastPos = useRef<{ x: number; y: number } | null>(null);
  const lastSpawn = useRef(0);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const spawnRipple = useCallback((clientX: number, clientY: number) => {
    const now = performance.now();
    const prev = lastPos.current;

    if (prev) {
      const dist = Math.hypot(clientX - prev.x, clientY - prev.y);
      if (dist < MIN_MOVE_PX && now - lastSpawn.current < MIN_INTERVAL_MS * 2) {
        lastPos.current = { x: clientX, y: clientY };
        return;
      }
    }

    if (now - lastSpawn.current < MIN_INTERVAL_MS) {
      lastPos.current = { x: clientX, y: clientY };
      return;
    }

    lastSpawn.current = now;
    lastPos.current = { x: clientX, y: clientY };

    const id = nextId.current++;
    const colorIndex = colorCycle.current % RIPPLE_COLORS.length;
    colorCycle.current += 1;
    setRipples((prev) => {
      const next = [...prev, { id, x: clientX, y: clientY, colorIndex }];
      return next.length > MAX_RIPPLES ? next.slice(-MAX_RIPPLES) : next;
    });
  }, []);

  const removeRipple = useCallback((id: number) => {
    setRipples((prev) => prev.filter((r) => r.id !== id));
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const onMove = (e: MouseEvent) => {
      // Don't spawn ripples over links, images, or text elements.
      const el = e.target as HTMLElement | null;
      if (el?.closest?.(RIPPLE_BLOCK_SELECTOR)) return;

      // Only spawn ripples when hovering inside the Hero section
      if (!el?.closest?.("#home")) return;

      spawnRipple(e.clientX, e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [isTouchDevice, spawnRipple]);

  if (isTouchDevice) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden hidden md:block"
      aria-hidden
    >
      {ripples.map((r) => {
        const { rgb } = RIPPLE_COLORS[r.colorIndex];
        const innerStyle = {
          borderColor: `rgba(${rgb}, 0.65)`,
          backgroundImage: `radial-gradient(circle, rgba(${rgb}, 0.35) 0%, transparent 68%)`,
          boxShadow: `0 0 52px rgba(${rgb}, 0.45)`,
        };
        const outerStyle = {
          borderColor: `rgba(${rgb}, 0.4)`,
          boxShadow: `0 0 36px rgba(${rgb}, 0.25)`,
        };
        return (
          <div
            key={r.id}
            className="absolute"
            style={{
              left: r.x,
              top: r.y,
              transform: "translate(-50%, -50%)",
            }}
          >
            <motion.span
              className="pointer-events-none absolute left-1/2 top-1/2 block size-14 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-solid bg-transparent"
              style={innerStyle}
              initial={{ scale: 0.08, opacity: 0.72 }}
              animate={{ scale: 3.2, opacity: 0 }}
              transition={{
                duration: 1.35,
                ease: [0.22, 0.61, 0.36, 1],
              }}
            />
            <motion.span
              className="pointer-events-none absolute left-1/2 top-1/2 block size-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-solid bg-transparent"
              style={outerStyle}
              initial={{ scale: 0.08, opacity: 0.45 }}
              animate={{ scale: 4.4, opacity: 0 }}
              transition={{
                duration: 1.65,
                delay: 0.06,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              onAnimationComplete={() => removeRipple(r.id)}
            />
          </div>
        );
      })}
    </div>
  );
}
