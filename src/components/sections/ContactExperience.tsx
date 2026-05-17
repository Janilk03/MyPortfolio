"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";

function AnimatedInput({
  placeholder,
  value,
  onChange,
  type = "text",
  isTextArea = false,
  name,
}: {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  isTextArea?: boolean;
  name?: string;
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative p-[1px] rounded-xl overflow-hidden transition-all duration-300">
      <AnimatePresence>
        {isFocused && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.3 },
              backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" }
            }}
            className="absolute inset-0 z-0"
            style={{
              background: "linear-gradient(90deg, #2997FF, #A855F7, #2997FF)",
              backgroundSize: "200% 100%",
            }}
          />
        )}
      </AnimatePresence>

      {!isFocused && (
        <div className="absolute inset-0 border border-slate-200 rounded-xl pointer-events-none z-0" />
      )}

      {isTextArea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="relative z-10 block w-full min-h-[120px] bg-slate-50 rounded-[11px] px-4 py-3 text-slate-900 outline-none focus:bg-white transition-all resize-none placeholder:text-slate-400"
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="relative z-10 block w-full bg-slate-50 rounded-[11px] px-4 py-3 text-slate-900 outline-none focus:bg-white transition-all placeholder:text-slate-400"
        />
      )}
    </div>
  );
}

export function ContactExperience() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === "#contact") {
        setIsOpen(true);
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const closeContact = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsOpen(false);
    if (window.location.hash === "#contact") {
      window.history.pushState("", document.title, window.location.pathname + window.location.search);
    }
    // Reset submission state after a delay
    setTimeout(() => {
      setIsSubmitted(false);
      setIsSubmitting(false);
    }, 500);
  };

  const validateField = (name: string, value: string) => {
    let error = "";
    if (name === "email" && value.trim() !== "") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value.trim())) error = "Please enter a valid email address";
    }
    if (name === "phone" && value.trim() !== "") {
      const phoneRegex = /^[\d\s\+\-\(\)]{10,}$/;
      if (!phoneRegex.test(value.trim())) error = "Minimum 10 digits required";
    }
    if (name === "name" && value.trim() !== "" && value.trim().length < 2) {
      error = "Name is too short";
    }
    if (name === "message" && value.trim() !== "" && value.trim().length < 10) {
      error = "Message must be at least 10 characters";
    }
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
    let value = e.target.value;

    // Strict filtering for name: only allow letters and spaces
    if (field === "name") {
      value = value.replace(/[^a-zA-Z\s]/g, "");
    }

    // Strict filtering for phone: only allow numbers and phone symbols
    if (field === "phone") {
      value = value.replace(/[^\d\s\+\-\(\)]/g, "");
    }

    setFormData(prev => ({ ...prev, [field]: value }));
    validateField(field, value);
  };

  const isFormValid = (() => {
    const isNameValid = formData.name.trim().length >= 2;
    const isMessageValid = formData.message.trim().length >= 10;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s\+\-\(\)]{10,}$/;

    const isEmailValid = formData.email.trim() !== "" && emailRegex.test(formData.email.trim());
    const isPhoneValid = formData.phone.trim() !== "" && phoneRegex.test(formData.phone.trim());

    return isNameValid && isMessageValid && (isEmailValid || isPhoneValid) &&
      Object.values(errors).every(err => err === "");
  })();

  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    // Initial connection check
    if (!navigator.onLine) {
      e.preventDefault(); // Stop standard form submission
      setSubmitError("It seems you are offline. Please check your internet connection.");
      return;
    }

    if (!isFormValid || isSubmitting) {
      e.preventDefault(); // Stop standard form submission if invalid/submitting
      return;
    }

    setSubmitError(null);
    setIsSubmitting(true);

    // Let the standard browser form submission execute to target="hidden_iframe".
    // This successfully sends the data to Google Forms, bypassing CORS.
    // We simulate a 1.5s delay to show the sending state, then transition to success.
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });

      setTimeout(() => {
        closeContact();
      }, 3000);
    }, 1500);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/10 backdrop-blur-[2px] z-40"
            onClick={closeContact}
          />
        )}
      </AnimatePresence>

      {/* Hidden iframe to handle Google Form submission without page reload */}
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: "none" }}
      />

      <motion.div
        data-isopen={isOpen}
        initial={{ borderRadius: 9999 }}
        animate={{
          borderRadius: 16,
          width: isOpen ? "min(400px, 90vw)" : "48px",
          height: isOpen ? (isSubmitted || submitError ? "320px" : "min(570px, 95vh)") : "48px",
          bottom: isOpen ? "24px" : "24px",
          right: isOpen ? "24px" : "24px",
        }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed z-50 bg-white/90 backdrop-blur-lg border border-slate-200 shadow-xl ${isOpen
          ? "overflow-y-auto"
          : "cursor-pointer magnetic hover:scale-105 hover:bg-slate-100/50 overflow-hidden"
          }`}
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
              <MessageSquare className="w-6 h-6 text-slate-900" />
            </motion.div>
          ) : (
            <motion.div
              key="form-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="w-full h-full p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-semibold text-slate-900 font-heading">
                  Get in touch
                </h3>
                <button
                  type="button"
                  onClick={closeContact}
                  className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
                >
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>

              <form
                action="https://docs.google.com/forms/d/e/1FAIpQLSdNNqOVmH68SvWdDR5yY0USQbepy5I7VAZ98qGds5IEvFgTJQ/formResponse"
                method="POST"
                target="hidden_iframe"
                className="flex-1 flex flex-col gap-4"
                onSubmit={handleSubmit}
              >
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="w-full h-full flex flex-col items-center justify-center text-center py-8"
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                        <Send className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-semibold text-slate-900 mb-2">Message Sent!</h3>
                      <p className="text-slate-500">
                        Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                      </p>
                    </motion.div>
                  ) : submitError ? (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="w-full h-full flex flex-col items-center justify-center text-center py-8"
                    >
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                        <X className="w-8 h-8 text-red-600" />
                      </div>
                      <h3 className="text-2xl font-semibold text-slate-900 mb-2">Oops!</h3>
                      <p className="text-slate-500 text-sm">
                        {submitError}
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitError(null)}
                        className="mt-6 px-6 py-2 bg-slate-100 text-slate-900 rounded-lg text-sm font-semibold hover:bg-slate-200 transition-colors"
                      >
                        Try Again
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="fields"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex-1 flex flex-col gap-4"
                    >
                      <div className="flex flex-col gap-1">
                        <AnimatedInput
                          name="entry.2005620554"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => handleInputChange(e, 'name')}
                        />
                        {errors.name && <p className="text-[10px] text-red-500 ml-1">{errors.name}</p>}
                      </div>

                      <div className="flex flex-col gap-1">
                        <AnimatedInput
                          name="entry.1045781291"
                          placeholder="Email Address"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange(e, 'email')}
                        />
                        {errors.email && <p className="text-[10px] text-red-500 ml-1">{errors.email}</p>}
                      </div>

                      <div className="flex flex-col gap-1">
                        <AnimatedInput
                          name="entry.1166974658"
                          placeholder="Phone Number"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange(e, 'phone')}
                        />
                        {errors.phone && <p className="text-[10px] text-red-500 ml-1">{errors.phone}</p>}
                      </div>

                      <div className="flex-1 flex flex-col gap-1">
                        <AnimatedInput
                          name="entry.839337160"
                          placeholder="Write your message..."
                          isTextArea
                          value={formData.message}
                          onChange={(e) => handleInputChange(e, 'message')}
                        />
                        {errors.message && <p className="text-[10px] text-red-500 ml-1">{errors.message}</p>}
                      </div>

                      <motion.button
                        type="submit"
                        disabled={!isFormValid || isSubmitting}
                        className={`w-full mt-auto font-medium py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ${isFormValid && !isSubmitting
                          ? "bg-electric-blue text-white hover:bg-blue-500 shadow-lg shadow-blue-500/20 opacity-100"
                          : "bg-slate-200 text-slate-400 cursor-not-allowed opacity-70"
                          }`}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            Sending... <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          </span>
                        ) : (
                          <>Send Message <Send className="w-4 h-4" /></>
                        )}
                      </motion.button>

                      {!isFormValid && !isSubmitting && (formData.name !== "" || formData.message !== "" || formData.email !== "" || formData.phone !== "") && (
                        <p className="text-[10px] text-slate-400 text-center mt-2">
                          Please fix the errors above to send your message.
                        </p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
