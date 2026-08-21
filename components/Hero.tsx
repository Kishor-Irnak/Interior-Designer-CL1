"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Our work", href: "#work" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <section className="relative min-h-[100dvh] w-full font-sans overflow-hidden flex flex-col lg:flex-row lg:bg-[#0a0a0a] lg:p-4 lg:gap-4">
      {/* --- MOBILE BACKGROUND IMAGE & OVERLAYS --- */}
      <div className="absolute inset-0 lg:hidden z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Modern Kitchen Interior"
          className="w-full h-full object-cover object-center"
        />
        {/* Top overlay for header readability */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0a]/90 to-transparent pointer-events-none" />
        {/* Bottom overlay for text readability pushing up from the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[70vh] bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/85 to-transparent pointer-events-none" />
      </div>

      {/* --- MOBILE HEADER --- */}
      <header className="relative z-50 flex lg:hidden justify-between items-center px-5 py-6 w-full">
        <span className="text-white text-[22px] font-medium tracking-tight">
          Refit
        </span>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="text-white p-2 hover:bg-white/10 rounded-full transition-colors relative z-50"
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.svg
                key="close"
                initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </motion.svg>
            ) : (
              <motion.svg
                key="hamburger"
                initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </motion.svg>
            )}
          </AnimatePresence>
        </button>
      </header>

      {/* --- MOBILE FULLSCREEN MENU OVERLAY WITH SMOOTH ANIMATION --- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-[#0a0a0a]/95 backdrop-blur-2xl z-40 flex flex-col justify-between px-6 py-8 lg:hidden"
          >
            {/* Nav Links Container with staggered entrance */}
            <div className="pt-20">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.25 }}
                className="text-zinc-500 text-[12px] font-semibold uppercase tracking-widest mb-6"
              >
                Navigation
              </motion.p>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + idx * 0.05, duration: 0.3 }}
                    className="text-white text-[28px] font-medium tracking-tight hover:text-zinc-400 transition-colors flex items-center justify-between group"
                  >
                    <span>{link.label}</span>
                    <span className="text-zinc-600 group-hover:text-white transition-colors transform group-hover:translate-x-1 duration-200">
                      →
                    </span>
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Bottom CTA Button in Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              className="border-t border-white/10 pt-6"
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="w-full py-3.5 bg-white text-black font-medium text-[16px] rounded-full flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors"
              >
                <span>Work with us</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- LEFT CONTENT COLUMN --- */}
      <div className="relative z-10 flex-1 flex flex-col justify-end lg:justify-between px-5 pb-10 sm:px-8 lg:px-12 xl:px-16 lg:py-10 lg:w-1/2">
        {/* Desktop Logo */}
        <div className="hidden lg:block">
          <span className="text-white text-[26px] font-medium tracking-tight">
            Refit
          </span>
        </div>

        {/* Main Text Content */}
        <div className="max-w-[540px] lg:my-auto pt-[40vh] lg:pt-0">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 bg-[#18181a]/80 backdrop-blur-md rounded-full mt-1.5 px-3.5 py-1.5 mb-6 lg:mb-7 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span className="text-zinc-300 text-[13px] font-normal tracking-wide">
              Available for work
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-white text-[32px] leading-[38px] sm:text-[40px] sm:leading-[46px] lg:text-[48px] lg:leading-[56px] xl:text-[56px] xl:leading-[64px] tracking-[-0.03em] font-normal">
            Your trusted partner <br className="hidden sm:inline" />
            for quality home <br className="hidden sm:inline" />
            improvement
          </h1>

          {/* Description */}
          <p className="text-[#a1a1aa] mt-5 lg:mt-7 text-[16px] leading-[26px] lg:text-[18px] lg:leading-[28px] max-w-[440px] font-normal">
            Refit delivers expert home improvements, creating beautiful and
            functional spaces with quality craftsmanship.
          </p>

          {/* CTA Button */}
          <button className="mt-8 lg:mt-10 inline-flex items-center gap-4 bg-[#18181a]/80 hover:bg-[#252528] transition-all backdrop-blur-md rounded-full pl-6 pr-2 py-2 border border-white/10 group cursor-pointer">
            <span className="text-white font-medium text-[15px]">
              Work with us
            </span>
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-black transform transition-transform group-hover:scale-105">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </button>
        </div>

        {/* Empty footer spacing element for desktop flex justification */}
        <div className="hidden lg:block" />
      </div>

      {/* --- RIGHT COLUMN - DESKTOP IMAGE CARD --- */}
      <div className="hidden lg:block relative w-full lg:w-1/2 lg:min-h-[calc(100vh-32px)] rounded-[24px] overflow-hidden">
        {/* Background Kitchen Image */}
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Modern Kitchen Interior"
          className="w-full h-full object-cover object-center absolute inset-0"
        />

        {/* Subtle Top & Bottom Gradients for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30 pointer-events-none" />

        {/* Desktop Top Navigation Overlay */}
        <nav className="absolute top-8 right-10 flex items-center gap-9 text-white/90 text-[15px] font-normal z-20">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Glassmorphic Testimonial Card */}
        <div className="absolute bottom-8 right-8 max-w-[350px] bg-black/45 backdrop-blur-xl border border-white/15 p-6 rounded-[20px] z-20 text-white shadow-2xl">
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="white"
                stroke="white"
                strokeWidth="1"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <p className="text-zinc-200 text-[14px] leading-[22px] font-normal">
            "Refit has been a game-changer for my home. Their ability to blend
            functionality with exquisite design is unparalleled."
          </p>
        </div>
      </div>
    </section>
  );
}
