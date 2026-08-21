import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[#0a0a0a] font-sans overflow-hidden flex flex-col lg:flex-row p-3 lg:p-4 gap-4">
      {/* Mobile Header */}
      <header className="flex lg:hidden justify-between items-center px-4 py-4 z-50">
        <span className="text-white text-[22px] font-medium tracking-tight">
          Refit
        </span>
        <button aria-label="Menu" className="text-white p-1">
          <svg
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
          </svg>
        </button>
      </header>

      {/* Left Content Column */}
      <div className="flex-1 flex flex-col justify-between px-4 py-6 sm:px-8 lg:px-12 xl:px-16 lg:py-10 relative z-10 lg:w-1/2">
        {/* Desktop Logo */}
        <div className="hidden lg:block">
          <span className="text-white text-[26px] font-medium tracking-tight">
            Refit
          </span>
        </div>

        {/* Main Text Content */}
        <div className="max-w-[540px] my-auto pt-6 lg:pt-0 pb-8 lg:pb-0">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 bg-[#18181a] backdrop-blur-md rounded-full px-3.5 py-1.5 mb-7 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span className="text-zinc-300 text-[13px] font-normal tracking-wide">
              Available for work
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-white text-[38px] leading-[44px] sm:text-[50px] sm:leading-[56px] lg:text-[58px] lg:leading-[66px] xl:text-[66px] xl:leading-[74px] tracking-[-0.03em] font-normal">
            Your trusted partner <br className="hidden sm:inline" />
            for quality home <br className="hidden sm:inline" />
            improvement
          </h1>

          {/* Description */}
          <p className="text-[#a1a1aa] mt-6 lg:mt-7 text-[16px] leading-[26px] lg:text-[18px] lg:leading-[28px] max-w-[440px] font-normal">
            Refit delivers expert home improvements, creating beautiful and
            functional spaces with quality craftsmanship.
          </p>

          {/* CTA Button */}
          <button className="mt-8 lg:mt-10 inline-flex items-center gap-4 bg-[#18181a] hover:bg-[#252528] transition-all backdrop-blur-md rounded-full pl-6 pr-2 py-2 border border-white/10 group cursor-pointer">
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

      {/* Right Column - Kitchen Image Card */}
      <div className="relative w-full lg:w-1/2 min-h-[480px] lg:min-h-[calc(100vh-32px)] rounded-[20px] lg:rounded-[24px] overflow-hidden">
        {/* Background Kitchen Image */}
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Modern Kitchen Interior"
          className="w-full h-full object-cover object-center absolute inset-0"
        />

        {/* Subtle Top & Bottom Gradients for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30 pointer-events-none" />

        {/* Desktop Top Navigation Overlay */}
        <nav className="hidden sm:flex absolute top-6 right-6 lg:top-8 lg:right-10 items-center gap-7 lg:gap-9 text-white/90 text-[15px] font-normal z-20">
          <a href="#" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Our work
          </a>
          <a href="#" className="hover:text-white transition-colors">
            FAQs
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contact
          </a>
        </nav>

        {/* Desktop Glassmorphic Testimonial Card */}
        <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 max-w-[320px] sm:max-w-[350px] bg-black/45 backdrop-blur-xl border border-white/15 p-6 rounded-[20px] z-20 text-white shadow-2xl">
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
