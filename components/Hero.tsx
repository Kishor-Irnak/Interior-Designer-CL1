"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      
      videoRef.current.play().catch(() => {
        // Autoplay policies
      });
    }
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Our work", href: "#work" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <section className="relative min-h-[100dvh] w-full font-sans overflow-hidden flex flex-col justify-between bg-[#0a0a0a]">
      {/* --- FULLSCREEN BACKGROUND VIDEO & ATMOSPHERIC GRADIENTS --- */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        {/* Background Video Only */}
        <video
          ref={videoRef}
          src="https://res.cloudinary.com/jryvzsx4/video/upload/v1787394271/house.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Top gradient for navbar clarity */}
        <div className="absolute top-0 left-0 right-0 h-44 bg-gradient-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/50 to-transparent pointer-events-none z-10" />

        {/* Dynamic side & bottom gradient for text contrast across mobile & desktop */}
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/80 lg:via-[#0a0a0a]/65 to-black/35 pointer-events-none z-10" />

        {/* Bottom edge fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent pointer-events-none z-10" />
      </div>

      {/* --- TOP HEADER / NAVBAR --- */}
      <header className="relative z-40 flex justify-between items-center px-6 sm:px-10 lg:px-16 py-6 lg:py-8 w-full max-w-[1440px] mx-auto">
        {/* Brand Logo */}
        <motion.div
          initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          <span className="text-white text-[24px] sm:text-[26px] font-medium tracking-tight">
            dps
          </span>
        </motion.div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-10 text-white/90 text-[15px] font-normal">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -10, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2 + idx * 0.05,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="text-white p-2 hover:bg-white/10 rounded-full transition-colors relative z-50 lg:hidden"
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
                exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
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

      {/* --- MOBILE FULLSCREEN MENU OVERLAY --- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-[#0a0a0a]/98 backdrop-blur-2xl z-50 flex flex-col justify-between px-6 py-6 lg:hidden"
          >
            {/* Top Bar inside Overlay: Brand Logo + Prominent Close (X) Button */}
            <div className="flex items-center justify-between w-full pt-2 pb-4 border-b border-white/10">
              <span className="text-white text-[24px] font-medium tracking-tight">
                dps
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer flex items-center justify-center"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 flex flex-col justify-center py-6">
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
                    className="text-white text-[28px] font-medium tracking-tight hover:text-zinc-400 transition-colors flex items-center justify-between group cursor-pointer"
                  >
                    <span>{link.label}</span>
                    <span className="text-zinc-600 group-hover:text-white transition-colors transform group-hover:translate-x-1 duration-200">
                      →
                    </span>
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Bottom CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              className="border-t border-white/10 pt-5 pb-2"
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="w-full py-3.5 bg-white text-black font-medium text-[16px] rounded-full flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors cursor-pointer"
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

      {/* --- HERO MAIN CONTENT CONTAINER --- */}
      <div className="relative z-20 flex-1 flex flex-col justify-end lg:justify-center px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto w-full pb-14 sm:pb-16 lg:pb-0 pt-[25vh] lg:pt-0">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          {/* Left Column: Headline, Badge, Subtitle, CTA */}
          <div className="max-w-[620px]">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 bg-[#18181a]/80 backdrop-blur-md rounded-full px-3.5 py-1.5 mb-6 lg:mb-7 border border-white/10 shadow-lg"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              <span className="text-zinc-300 text-[13px] font-normal tracking-wide">
                Available for work
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.35, ease: "easeOut" }}
              className="text-white text-[34px] leading-[40px] sm:text-[44px] sm:leading-[50px] lg:text-[54px] lg:leading-[62px] xl:text-[62px] xl:leading-[70px] tracking-[-0.035em] font-normal"
            >
              Your trusted partner <br className="hidden sm:inline" />
              for quality home <br className="hidden sm:inline" />
              improvement
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.5, ease: "easeOut" }}
              className="text-[#d4d4d8] mt-5 lg:mt-7 text-[16px] leading-[26px] lg:text-[18px] lg:leading-[28px] max-w-[480px] font-normal"
            >
              dps delivers expert home improvements, creating beautiful and
              functional spaces with quality craftsmanship.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
            >
              <button className="mt-8 lg:mt-10 inline-flex items-center gap-4 bg-[#18181a]/85 hover:bg-[#27272a] transition-all backdrop-blur-md rounded-full pl-6 pr-2 py-2 border border-white/15 group cursor-pointer shadow-xl">
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
            </motion.div>
          </div>

          {/* Right Side: Desktop Glassmorphic Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="hidden lg:block max-w-[360px] bg-black/45 backdrop-blur-xl border border-white/15 p-6 rounded-[22px] text-white shadow-2xl mb-4"
          >
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
              &quot;dps has been a game-changer for my home. Their ability to blend
              functionality with exquisite design is unparalleled.&quot;
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom spacer for balance on desktop */}
      <div className="hidden lg:block pb-10" />
    </section>
  );
}

