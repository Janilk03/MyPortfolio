"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";

export function ContactExperience() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Background Blur Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-matte-black/40 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Contact Container */}
      <motion.div
        layout
        data-isopen={isOpen}
        initial={{ borderRadius: 9999 }}
        animate={{
          borderRadius: isOpen ? "2rem 0 0 0" : "9999px",
          width: isOpen ? "400px" : "64px",
          height: isOpen ? "500px" : "64px",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className={`fixed bottom-0 right-0 z-50 bg-matte-black/80 backdrop-blur-xl border-t border-l border-white/10 shadow-2xl ${
          isOpen ? "" : "bottom-6 right-6 cursor-pointer magnetic hover:scale-110 hover:bg-white/10"
        } overflow-hidden`}
        onClick={() => !isOpen && setIsOpen(true)}
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="button"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="w-full h-full flex items-center justify-center"
            >
              <MessageSquare className="w-6 h-6 text-off-white" />
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="w-full h-full p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-semibold text-off-white font-heading">Start a project</h3>
                <button 
                  onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                  className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5 text-soft-gray" />
                </button>
              </div>

              <form className="flex-1 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-off-white outline-none focus:border-electric-blue transition-colors placeholder:text-soft-gray/50"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-off-white outline-none focus:border-electric-blue transition-colors placeholder:text-soft-gray/50"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex-1"
                >
                  <textarea
                    placeholder="Tell me about your project..."
                    className="w-full h-full min-h-[120px] bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-off-white outline-none focus:border-electric-blue transition-colors resize-none placeholder:text-soft-gray/50"
                  />
                </motion.div>
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="w-full mt-auto bg-electric-blue text-white font-medium py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-500 transition-colors"
                >
                  Send Message <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
