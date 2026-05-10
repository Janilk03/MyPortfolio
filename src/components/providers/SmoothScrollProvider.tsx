"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // More responsive settings: higher lerp (snappier), lower duration (faster)
  // Mobile gets even faster settings for better UX on touch devices
  const options = isMobile 
    ? { lerp: 0.15, duration: 0.6, smoothWheel: true }
    : { lerp: 0.12, duration: 0.7, smoothWheel: true };

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}
