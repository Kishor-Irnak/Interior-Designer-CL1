"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// --- Data & SVG Icons ---
const servicesData = [
  {
    title: "Kitchens",
    description:
      "At Refit, we design and build stunning kitchens tailored to your style and needs. Whether you're after a sleek modern space or a classic, timeless look, our expert team delivers high-quality craftsmanship, functionality, and attention to detail to create the heart of your home.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="4" width="7" height="16" rx="1" />
        <rect x="13" y="10" width="7" height="10" rx="1" />
        <path d="M13 4h7v4h-7z" />
        <path d="M6 10h3" />
        <path d="M15 14h3" />
      </svg>
    ),
  },
  {
    title: "Loft Conversions",
    description:
      "Unlock the hidden potential of your home by transforming your unused loft into a beautiful, functional living space.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 21h18" />
        <path d="M3 21l9-18 9 18" />
        <path d="M9 21v-6h6v6" />
        <path d="M10 11h4" />
      </svg>
    ),
  },
  {
    title: "Bathrooms",
    description:
      "Create your perfect sanctuary with our bespoke bathroom design and installation services.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 11v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6" />
        <path d="M4 11h16" />
        <path d="M8 19v2" />
        <path d="M16 19v2" />
        <path d="M19 11V5a2 2 0 0 0-2-2H7" />
        <path d="M7 3v2" />
      </svg>
    ),
  },
  {
    title: "Extensions",
    description:
      "Expand your living space seamlessly with our expert home extension services.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 10l9-7 9 7v11H3V10z" />
        <path d="M9 21v-6h6v6" />
        <path d="M21 14h3" />
        <path d="M21 10v8" />
      </svg>
    ),
  },
  {
    title: "Restorations",
    description:
      "Breathe new life into your property with our careful and precise restoration craftsmanship.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 12h18" />
        <path d="M8 5v7" />
        <path d="M16 12v7" />
        <path d="M12 5v14" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    title: "External Works",
    description:
      "Enhance your home's curb appeal with our comprehensive external improvement services.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 20h16" />
        <path d="M4 16h16" />
        <path d="M7 20v-4" />
        <path d="M17 20v-4" />
        <path d="M12 16v-6" />
        <path d="M8 10l4-6 4 6" />
      </svg>
    ),
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      id="services"
      className="w-full bg-[#fafafa] text-[#111111] font-sans py-20 lg:py-32"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* --- Header Section --- */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            className="inline-flex items-center justify-center px-3.5 py-1 rounded-full bg-[#18181a] text-white text-[12px] font-medium tracking-wide mb-5"
          >
            Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-[38px] sm:text-[46px] lg:text-[52px] font-normal leading-[1.08] tracking-[-0.035em] text-[#111111] mb-4"
          >
            What we do
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="text-[15px] sm:text-[16px] text-[#71717a] font-normal tracking-[-0.01em] max-w-[500px]"
          >
            Find out which one of our services fit the needs of your project
          </motion.p>
        </div>

        {/* --- Content Layout --- */}
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.85, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-[48%] relative"
          >
            <div className="w-full aspect-[4/3] sm:aspect-[4/5] lg:aspect-[4.5/5] overflow-hidden rounded-[20px] lg:rounded-[24px] bg-[#f4f4f5] group shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Rustic modern kitchen interior with warm tones"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right Column: Accordion */}
          <div className="w-full lg:w-[52%] flex flex-col">
            {servicesData.map((service, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15 + index * 0.06,
                    ease: "easeOut",
                  }}
                  className={`border-b border-[#e5e7eb] ${
                    index === 0 ? "border-t-0" : ""
                  }`}
                >
                  {/* Accordion Header (Trigger) */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between py-5 lg:py-6 text-left cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-5">
                      <div className="text-[#52525b] group-hover:text-[#111111] transition-colors">
                        {service.icon}
                      </div>
                      <span className="text-[16px] lg:text-[17px] font-medium text-[#111111] tracking-[-0.01em]">
                        {service.title}
                      </span>
                    </div>

                    {/* Toggle Icon (+ / x) */}
                    <div className="text-[#a1a1aa] group-hover:text-[#111111] transition-colors flex-shrink-0 ml-4">
                      {isOpen ? (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      ) : (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        >
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      )}
                    </div>
                  </button>

                  {/* Accordion Content with smooth animate presence */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pr-4 sm:pr-8">
                          <p className="text-[14px] sm:text-[15px] leading-[1.65] text-[#52525b] font-normal">
                            {service.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
