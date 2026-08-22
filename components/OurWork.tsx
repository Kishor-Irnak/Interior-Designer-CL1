"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

// --- Data & Content ---
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  quote: string;
  authorName: string;
  authorAvatar: string;
  image: string;
  theme: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern kitchen refit",
    description:
      "This kitchen transformation brought sleek, modern design and enhanced functionality to our client's home. We installed custom cabinetry, high-quality worktops, and state-of-the-art appliances, creating a stylish yet practical space perfect for cooking and entertaining. With attention to every detail, we delivered a kitchen that balances aesthetics and usability.",
    tags: ["Kitchen", "4 weeks"],
    quote:
      "Refit completely transformed our kitchen, making it both beautiful and highly functional. The craftsmanship was outstanding, and the team was professional and communicative throughout. We couldn't be happier with the result!",
    authorName: "Rachel Morgan",
    authorAvatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    theme: "light",
  },
  {
    id: 2,
    title: "External garden path build",
    description:
      "Our team designed and built a durable, visually appealing garden path to enhance the outdoor space. Using premium materials, we created a seamless walkway that blends naturally with the landscape, providing both functionality and aesthetic charm. The result is a stylish, well-crafted path that elevates the overall garden design.",
    tags: ["External Works", "1 month"],
    quote:
      "The team at Refit did an amazing job on our garden path. It's sturdy, looks fantastic, and has completely transformed our outdoor space. They listened to our vision and delivered exactly what we wanted - highly recommended!",
    authorName: "Michael Turner",
    authorAvatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    theme: "dark",
  },
  {
    id: 3,
    title: "Bathroom renovation",
    description:
      "We revitalized this bathroom with a fresh, modern design, incorporating high-end tiling, sleek fixtures, and efficient lighting. The layout was optimized to maximize space, creating a luxurious and relaxing atmosphere. The final result is a beautifully crafted bathroom that enhances both comfort and functionality.",
    tags: ["Bathroom", "6 weeks"],
    quote:
      "Refit turned our outdated bathroom into a stunning modern space. The quality of work was excellent, and the team was incredibly professional from start to finish. We love our new bathroom and would definitely use Refit again!",
    authorName: "Laura Davies",
    authorAvatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    theme: "light",
  },
];

function ProjectCard({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position of this specific card container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Calculate dynamic scaling as subsequent cards stack over this card
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1 - (total - index) * 0.025]
  );
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.88]);

  const isLast = index === total - 1;

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${
        isLast
          ? "pb-12 lg:pb-20"
          : "min-h-[65vh] sm:min-h-[75vh] lg:min-h-[85vh]"
      }`}
    >
      <motion.div
        style={{
          scale: isLast ? 1 : scale,
          opacity: isLast ? 1 : opacity,
          top: `calc(70px + ${index * 20}px)`,
        }}
        initial={{ opacity: 0, y: 32, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className={`sticky rounded-[18px] lg:rounded-[24px] p-4 sm:p-7 lg:p-10 flex flex-col lg:flex-row-reverse items-stretch gap-5 sm:gap-7 lg:gap-12 shadow-[0_-8px_30px_rgba(0,0,0,0.07)] border border-black/5 transform-gpu will-change-transform ${
          project.theme === "light"
            ? "bg-[#eff1f5] text-[#111111]"
            : "bg-[#151517] text-white"
        }`}
      >
        {/* --- Image Section --- */}
        {/* Rendered first in mobile flex column so full image is visible immediately upon scroll */}
        <div className="relative w-full lg:w-[45%] h-[200px] sm:h-[260px] lg:h-auto min-h-[200px] sm:min-h-[260px] flex-shrink-0 overflow-hidden rounded-[12px] sm:rounded-[14px] lg:rounded-[16px] group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent lg:hidden pointer-events-none" />
        </div>

        {/* --- Text Content Section --- */}
        <div className="flex flex-col w-full lg:w-[55%] justify-between flex-1">
          <div>
            <h3
              className={`text-[21px] sm:text-[25px] lg:text-[28px] font-medium tracking-[-0.02em] mb-2 sm:mb-3 leading-[1.25] ${
                project.theme === "light"
                  ? "text-[#111111]"
                  : "text-[#ffffff]"
              }`}
            >
              {project.title}
            </h3>

            <p
              className={`text-[13px] sm:text-[14px] lg:text-[14.5px] leading-[1.6] mb-4 sm:mb-6 font-normal ${
                project.theme === "light"
                  ? "text-[#52525b]"
                  : "text-[#a1a1aa]"
              }`}
            >
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 sm:px-3 py-0.5 sm:py-1 bg-[#27272a] text-white text-[10px] sm:text-[10.5px] font-medium tracking-wide rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Testimonial Quote & Author */}
          <div className="pt-3 sm:pt-4 border-t border-black/5 dark:border-white/10 mt-auto">
            <div className="flex items-start gap-2.5 sm:gap-3 mb-3">
              <svg
                className={`mt-0.5 flex-shrink-0 ${
                  project.theme === "light"
                    ? "text-[#111111]"
                    : "text-[#ffffff]"
                }`}
                width="14"
                height="12"
                viewBox="0 0 24 20"
                fill="currentColor"
              >
                <path d="M6.864 19.36H0L6.432 0h6.144l-5.712 19.36zm11.136 0H11.136L17.568 0h6.144l-5.712 19.36z" />
              </svg>
              <p
                className={`text-[12px] sm:text-[13px] lg:text-[13.5px] leading-[1.55] font-normal ${
                  project.theme === "light"
                    ? "text-[#3f3f46]"
                    : "text-[#d4d4d8]"
                }`}
              >
                {project.quote}
              </p>
            </div>

            {/* Author Avatar & Name */}
            <div className="flex items-center gap-2.5 sm:gap-3 pl-6">
              <img
                src={project.authorAvatar}
                alt={project.authorName}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border border-black/10 dark:border-white/20"
              />
              <span
                className={`text-[11.5px] sm:text-[12.5px] lg:text-[13px] font-medium tracking-[-0.01em] ${
                  project.theme === "light"
                    ? "text-[#111111]"
                    : "text-[#ffffff]"
                }`}
              >
                {project.authorName}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function OurWork() {
  return (
    <section
      id="work"
      className="w-full bg-[#ffffff] text-[#111111] font-sans py-16 lg:py-24 relative"
    >
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        {/* --- Header Section --- */}
        <div className="flex flex-col items-center text-center mb-12 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center justify-center px-3.5 py-1 rounded-full bg-[#27272a] text-white text-[11px] font-medium tracking-wide mb-5"
          >
            Our work
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-[34px] sm:text-[42px] lg:text-[46px] font-normal leading-[1.05] tracking-[-0.03em] text-[#111111] mb-4 max-w-[400px] lg:max-w-none"
          >
            Get inspired by our
            <br className="lg:hidden" /> work
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-[14px] sm:text-[15px] text-[#52525b] font-normal tracking-[-0.01em] max-w-[480px] leading-[1.6]"
          >
            See how we've transformed homes with our expert craftsmanship and
            attention to detail.
          </motion.p>
        </div>

        {/* --- Projects List (Stacked Scroll) --- */}
        <div className="flex flex-col relative">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              total={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

