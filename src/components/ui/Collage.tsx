"use client";

import { motion } from "framer-motion";
import { ZoomableImage } from "./ZoomableImage";
import { Maximize2 } from "lucide-react";

interface CollageProps {
  images: string[];
  title: string;
}

interface BrowserCardProps {
  src: string;
  alt: string;
  className: string;
  rotateVal: number;
  initialX: number;
  initialY: number;
  zIndex: number;
}

function BrowserCard({ src, alt, className, rotateVal, initialX, initialY, zIndex }: BrowserCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: initialX, y: initialY, rotate: rotateVal }}
      animate={{ opacity: 1, x: 0, y: 0, rotate: rotateVal }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ 
        scale: 1.05, 
        rotate: 0,
        y: -15,
        boxShadow: "-15px 25px 55px rgba(0,0,0,0.6)",
        zIndex: 50 
      }}
      className={`absolute bg-slate-900 rounded-2xl border border-white/10 overflow-hidden shadow-[-10px_15px_40px_rgba(0,0,0,0.45)] flex flex-col group/card cursor-pointer transition-shadow duration-300 ${className}`}
      style={{ zIndex }}
    >
      {/* Browser Header Bar */}
      <div className="h-6 border-b border-white/5 bg-slate-950/60 px-2.5 flex items-center gap-1.5 shrink-0 select-none">
        <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
        <div className="flex-1 text-[8px] text-white/20 font-mono text-center truncate px-2 bg-white/5 rounded mx-4 py-0.5">
          dashboard.view
        </div>
      </div>
      
      {/* Body Viewport */}
      <div className="relative flex-1 bg-slate-950 overflow-hidden w-full h-full">
        {/* Click to Zoom Banner */}
        <div className="absolute top-2 right-2 z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none bg-black/60 backdrop-blur-sm rounded-full p-1 text-white border border-white/10 shadow-lg flex items-center gap-1 text-[8px] font-bold uppercase tracking-wider px-2">
          <Maximize2 className="w-2.5 h-2.5 text-blue-400" />
          Zoom
        </div>
        <ZoomableImage 
          src={src} 
          alt={alt} 
          className="w-full h-full [&_img]:h-full [&_img]:w-full [&_img]:object-cover" 
        />
      </div>
    </motion.div>
  );
}

export function Collage({ images, title }: CollageProps) {
  if (!images || images.length === 0) return null;

  return (
    <div className="relative h-[460px] md:h-[580px] w-full overflow-visible select-none">
      {/* Card 1: Top-Left (Upper Left Position) */}
      {images[0] && (
        <BrowserCard
          src={images[0]}
          alt={`${title} UI screen 1`}
          className="top-[-5%] left-[-15%] w-[68%] aspect-[16/10]"
          rotateVal={-18}
          initialX={-60}
          initialY={-30}
          zIndex={10}
        />
      )}

      {/* Card 2: Middle-Right (Middle Right Position) */}
      {images[1] && (
        <BrowserCard
          src={images[1]}
          alt={`${title} UI screen 2`}
          className="top-[18%] right-[-20%] w-[68%] aspect-[16/10]"
          rotateVal={-18}
          initialX={60}
          initialY={20}
          zIndex={5}
        />
      )}

      {/* Card 3: Bottom-Center/Left (Lower Left Position - Focal Foreground) */}
      {images[2] && (
        <BrowserCard
          src={images[2]}
          alt={`${title} UI screen 3`}
          className="bottom-[-5%] left-[5%] w-[75%] aspect-[16/10]"
          rotateVal={-18}
          initialX={-30}
          initialY={60}
          zIndex={20}
        />
      )}
    </div>
  );
}
