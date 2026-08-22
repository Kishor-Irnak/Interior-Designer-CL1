"use client";

import React from "react";
import { motion } from "motion/react";

// --- Testimonial Data ---
const testimonials = [
  {
    id: 1,
    text: "Refit did an incredible job on our kitchen. The craftsmanship was top-notch, and the team was professional from start to finish. Highly recommend!",
    author: "Emily Carter",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    theme: "white",
  },
  {
    id: 2,
    text: "Brilliant service from start to finish. The team was professional, communicative, and the results exceeded my expectations. My new bathroom looks amazing!",
    author: "James Richardson",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    theme: "light",
  },
  {
    id: 3,
    text: "I couldn't be happier with my loft conversion. The attention to detail and quality of work were outstanding. Refit made the whole process smooth and stress-free!",
    author: "Sophie Williams",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    theme: "white",
  },
  {
    id: 4,
    text: "Refit transformed our outdoor space with a beautiful garden path. The work was completed on time, and the finish is excellent. A great team to work with!",
    author: "Daniel Foster",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    theme: "light",
  },
  {
    id: 5,
    text: "Fantastic workmanship! The team renovated our bathroom with precision and care. It now feels like a luxury space. Would definitely use Refit again.",
    author: "Oliver Bennett",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    theme: "light",
  },
  {
    id: 6,
    text: "From the first consultation to the final touches, Refit delivered on every promise. Our home extension is exactly what we wanted—spacious, modern, and beautifully finished!",
    author: "Charlotte Harris",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    theme: "white",
  },
];

// Reusable Star Component
const Stars = () => (
  <div className="flex items-center gap-[2px] mb-4">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#111111">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div
      className={`flex-shrink-0 w-[280px] sm:w-[350px] lg:w-[380px] rounded-[18px] sm:rounded-[20px] p-5 sm:p-8 flex flex-col justify-between select-none ${
        testimonial.theme === "white"
          ? "bg-white border border-[#e5e7eb] shadow-[0_4px_16px_rgba(0,0,0,0.03)]"
          : "bg-[#eff2f6]"
      }`}
    >
      <div>
        <Stars />
        <p className="text-[13px] sm:text-[14.5px] leading-[1.6] text-[#52525b] font-normal">
          {testimonial.text}
        </p>
      </div>
      <div className="flex items-center gap-3 mt-6 sm:mt-8">
        <img
          src={testimonial.avatar}
          alt={testimonial.author}
          className="w-8 h-8 rounded-full object-cover border border-black/10"
        />
        <span className="text-[12.5px] sm:text-[13px] font-medium text-[#111111] tracking-[-0.01em]">
          {testimonial.author}
        </span>
      </div>
    </div>
  );
}

export default function Testimonial() {
  const row1Duplicated = [...testimonials, ...testimonials];
  const row2Duplicated = [
    ...testimonials.slice().reverse(),
    ...testimonials.slice().reverse(),
  ];

  return (
    <section
      id="testimonials"
      className="w-full bg-[#ffffff] text-[#111111] font-sans py-16 sm:py-20 lg:py-28 overflow-hidden relative"
    >
      {/* Pure CSS hardware-accelerated GPU keyframe animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marquee-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-marquee-left {
          animation: marquee-left 38s linear infinite;
          will-change: transform;
        }
        .animate-marquee-right {
          animation: marquee-right 42s linear infinite;
          will-change: transform;
        }
        @media (max-width: 640px) {
          .animate-marquee-left {
            animation-duration: 28s;
          }
          .animate-marquee-right {
            animation-duration: 32s;
          }
        }
      `,
        }}
      />

      {/* Side edge subtle fade gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-24 lg:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-24 lg:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto relative z-0">
        {/* --- Header Section --- */}
        <div className="flex flex-col items-center text-center px-5 mb-10 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center justify-center px-3.5 py-1 rounded-full bg-[#27272a] text-white text-[11px] font-medium tracking-wide mb-4 sm:mb-5"
          >
            Testimonials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="text-[32px] sm:text-[42px] lg:text-[46px] font-normal leading-[1.1] tracking-[-0.03em] text-[#111111] mb-3 sm:mb-4"
          >
            Hear from our clients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
            className="text-[14px] sm:text-[15px] text-[#52525b] font-normal tracking-[-0.01em] max-w-[460px] leading-[1.6]"
          >
            Hear from our happy clients about their experience working with
            Refit and the quality of our craftsmanship.
          </motion.p>
        </div>

        {/* --- Infinite Marquee Container --- */}
        <div className="flex flex-col gap-4 sm:gap-6 w-full overflow-hidden py-1">
          {/* Row 1: Hardware-Accelerated Marquee Left */}
          <div className="flex w-full overflow-hidden">
            <div className="flex gap-3 sm:gap-6 w-max animate-marquee-left">
              {row1Duplicated.map((testimonial, idx) => (
                <TestimonialCard
                  key={`row1-${idx}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>

          {/* Row 2: Hardware-Accelerated Marquee Right */}
          <div className="flex w-full overflow-hidden">
            <div className="flex gap-3 sm:gap-6 w-max animate-marquee-right">
              {row2Duplicated.map((testimonial, idx) => (
                <TestimonialCard
                  key={`row2-${idx}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


