"use client";

import { motion } from "framer-motion";

function StatCard({ 
  number, 
  label, 
  sub, 
  delay 
}: { 
  number: string; 
  label: string; 
  sub: string; 
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02, borderColor: "rgba(41, 151, 255, 0.4)" }}
      className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col justify-center transition-all duration-300 relative overflow-hidden group"
    >
      {/* Background Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-2 tracking-tight">
          {number}
        </div>
        <div className="text-electric-blue font-medium mb-1 text-lg">{label}</div>
        <div className="text-slate-400 text-sm">{sub}</div>
      </div>
    </motion.div>
  );
}

export function AboutMe() {
  return (
    <section id="about-me" className="py-24 md:py-32 bg-[#0a0a0a] text-white relative overflow-hidden border-t border-white/5">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-electric-blue/10 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 text-white leading-tight">
                The Architect <br/> Behind the Pixels.
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-slate-400 text-lg md:text-xl leading-relaxed"
            >
              <p>
                I am a hybrid UI/UX Designer and Front-End Developer with <strong className="text-white">11+ years of experience</strong> crafting intuitive digital experiences.
              </p>
              <p>
                Over the last <strong className="text-white">5 years</strong>, my core focus has been architecting complex, enterprise-grade <strong className="text-white">B2B SaaS platforms</strong>, ensuring they are both powerful and user-friendly.
              </p>
              <p>
                Embracing the modern era of development, I leverage <strong className="text-white">vibe coding</strong> to rapidly orchestrate and complete entire front-end applications. I build with the latest technical stacks including <strong className="text-electric-blue">React.js, Next.js, and @mui</strong> to deliver premium, production-ready interfaces without compromising on aesthetics.
              </p>
            </motion.div>
          </div>
          
          {/* Right: Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            <StatCard 
              number="11+" 
              label="Years Experience" 
              sub="UI/UX Design & UI Development" 
              delay={0.1} 
            />
            <StatCard 
              number="5+" 
              label="Years in B2B" 
              sub="SaaS Platform Architecture" 
              delay={0.2} 
            />
            <StatCard 
              number="100%" 
              label="Vibe Coding" 
              sub="React, Next.js, @mui" 
              delay={0.3} 
            />
            <StatCard 
              number="∞" 
              label="Passion" 
              sub="For pixel-perfect engineering" 
              delay={0.4} 
            />
          </div>

        </div>
      </div>
    </section>
  );
}
