"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-400 font-medium">
            © {currentYear} Janil K. All rights reserved.
          </p>
          
          <div className="flex gap-8">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://dribbble.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors"
            >
              Dribbble
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
