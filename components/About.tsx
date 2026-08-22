"use client";

import React from "react";
import { motion } from "motion/react";

export default function About() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Modern dark bathroom interior",
      shiftClass: "translate-y-[15px] lg:translate-y-[35px]",
    },
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Bright modern kitchen hallway",
      shiftClass: "-translate-y-[15px] lg:-translate-y-[35px]",
    },
    {
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Modern wooden house exterior",
      shiftClass: "translate-y-[15px] lg:translate-y-[35px]",
    },
    {
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "White exterior patio with cactus",
      shiftClass: "-translate-y-[15px] lg:-translate-y-[35px]",
    },
  ];

  const stats = [
    {
      value: "8",
      label: "Years experience",
      desc: "Improving homes with expert craftsmanship for years",
    },
    {
      value: "26+",
      label: "Projects completed",
      desc: "Over 250 successful projects delivered with quality and care",
    },
    {
      value: "30",
      label: "Skilled Tradespeople",
      desc: "Our team of 30 experts ensures top-quality results",
    },
    {
      value: "100%",
      label: "Client satisfaction",
      desc: "All of our clients are satisfied with our work and service",
    },
  ];

  return (
    <section
      id="about"
      className="w-full bg-[#ffffff] text-[#111111] font-sans overflow-hidden py-20 lg:py-32"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* --- TOP ROW: HEADER & DESCRIPTION --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-12 mb-20 lg:mb-28">
          {/* Left Column: Badge & Headline */}
          <div className="w-full lg:w-[48%]">
            <motion.div
              initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
              className="inline-flex items-center justify-center px-3.5 py-1 rounded-full bg-[#18181a] text-white text-[12px] font-medium tracking-wide mb-6"
            >
              About us
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 22, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-[44px] sm:text-[54px] lg:text-[62px] font-normal leading-[1.04] tracking-[-0.035em] text-[#111111]"
            >
              home
              <br />
              improvement
              <br />
              specialists
            </motion.h2>
          </div>

          {/* Right Column: Paragraph */}
          <div className="w-full lg:w-[48%] lg:pt-10">
            <motion.p
              initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
              className="text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.65] text-[#52525b] font-normal"
            >
              Welcome to Refit, your trusted home improvement experts, dedicated
              to transforming homes with precision and care. With years of
              experience in building kitchens, bathrooms, garages, and more, we
              take pride in delivering top-quality craftsmanship and a seamless
              customer experience. Our mission is to bring your vision to life
              while ensuring clear communication and expert guidance at every
              step. Let&apos;s create a home you&apos;ll love!
            </motion.p>
          </div>
        </div>

        {/* --- MIDDLE ROW: STAGGERED GALLERY --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-24 lg:mb-32">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 28, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.85,
                delay: 0.15 + idx * 0.1,
                ease: "easeOut",
              }}
              className={`w-full h-[280px] sm:h-[380px] lg:h-[460px] rounded-[18px] sm:rounded-[22px] lg:rounded-[24px] overflow-hidden group bg-zinc-100 ${img.shiftClass}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM ROW: STATS --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 lg:gap-x-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.75,
                delay: 0.1 + idx * 0.08,
                ease: "easeOut",
              }}
              className="flex flex-col"
            >
              <div className="text-[52px] sm:text-[62px] lg:text-[72px] font-light leading-none tracking-tight text-[#111111] mb-4">
                {stat.value}
              </div>
              <div className="text-[15px] font-normal text-[#111111] mb-1.5">
                {stat.label}
              </div>
              <div className="text-[12px] sm:text-[13px] leading-[1.5] text-[#71717a] max-w-[210px] font-normal">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
