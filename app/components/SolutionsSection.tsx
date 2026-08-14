"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SolutionsSection() {
  const solutions = [
    {
      id: "responsive-design",
      badge: "Design Excellence",
      title: "Modern & Responsive Design",
      description: "Clean, elegant, and mobile-friendly websites that provide a seamless experience on all devices.",
      linkText: "Learn More",
      linkHref: "/contact",
      // Visual Card Top Content
      visual: (
        <div className="relative w-full h-48 sm:h-52 bg-slate-900 rounded-2xl overflow-hidden p-4 flex items-center justify-center border border-slate-800 shadow-inner group-hover:scale-[1.02] transition-transform duration-300">
          {/* Background Ocean Villa Dark Web Preview */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-slate-900 p-4 flex flex-col justify-between">
            {/* Nav Header */}
            <div className="flex items-center justify-between text-[9px] text-slate-300 border-b border-slate-800 pb-2">
              <span className="font-bold text-white">Ocean View Villas</span>
              <div className="flex items-center gap-2 text-slate-400">
                <span>Home</span>
                <span>Rooms</span>
                <span>About Us</span>
                <span>Gallery</span>
                <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-[8px] font-bold">Book Now</span>
              </div>
            </div>
            {/* Hero Copy */}
            <div className="my-auto space-y-1">
              <h4 className="text-sm font-extrabold text-white leading-tight max-w-[170px]">
                Luxury Villa By The Ocean
              </h4>
              <p className="text-[9px] text-slate-300 max-w-[160px] leading-tight">
                Experience pure comfort with breathtaking ocean views.
              </p>
              <div className="pt-1">
                <span className="bg-blue-600 text-white px-2.5 py-1 rounded-md text-[9px] font-bold inline-block shadow-xs">
                  Book Now
                </span>
              </div>
            </div>
          </div>

          {/* Overlaid Mobile Smartphone View on right */}
          <div className="absolute right-3 bottom-2 w-24 h-36 bg-slate-950 rounded-2xl border-2 border-slate-700 shadow-2xl p-1 overflow-hidden transform rotate-[-4deg] group-hover:rotate-0 transition-transform duration-300">
            <div className="bg-slate-900 rounded-xl h-full p-1.5 text-white flex flex-col justify-between text-[7px]">
              <span className="font-bold text-slate-200">Ocean View</span>
              <div className="my-auto space-y-0.5">
                <div className="font-bold text-[8px] text-white">Luxury Villa</div>
                <div className="text-slate-400 text-[6px]">By The Ocean</div>
                <div className="bg-blue-600 text-white py-0.5 rounded text-[6px] text-center font-bold mt-1">Book Now</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "direct-booking",
      badge: "Engine Sync",
      title: "Direct Booking Integration",
      description: "Integrated booking engine that allows guests to book directly from your website with ease.",
      linkText: "Learn More",
      linkHref: "/contact",
      // Visual Card Top Content
      visual: (
        <div className="relative w-full h-48 sm:h-52 bg-slate-50 rounded-2xl overflow-hidden p-3.5 border border-slate-200/80 flex items-center justify-between gap-3 group-hover:scale-[1.02] transition-transform duration-300">
          {/* Check Availability Widget Box */}
          <div className="flex-1 bg-white p-3 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between h-full">
            <div className="text-xs font-bold text-slate-900 mb-1">Check Availability</div>

            <div className="grid grid-cols-2 gap-1.5">
              <div className="bg-slate-50 p-1.5 rounded-lg border border-slate-100">
                <div className="text-[8px] text-slate-400 font-bold uppercase">Check-In</div>
                <div className="text-[10px] font-bold text-slate-800">12 May 2026</div>
              </div>
              <div className="bg-slate-50 p-1.5 rounded-lg border border-slate-100">
                <div className="text-[8px] text-slate-400 font-bold uppercase">Check-Out</div>
                <div className="text-[10px] font-bold text-slate-800">15 May 2026</div>
              </div>
            </div>

            <div className="bg-slate-50 p-1.5 rounded-lg border border-slate-100 my-1">
              <div className="text-[8px] text-slate-400 font-bold uppercase">Guests & Rooms</div>
              <div className="text-[10px] font-bold text-slate-800">2 Guests, 1 Room</div>
            </div>

            <button type="button" className="w-full bg-slate-950 text-white text-[10px] font-bold py-1.5 rounded-lg hover:bg-blue-600 transition-colors">
              Check Availability
            </button>
          </div>

          {/* Villa Room Photo Preview */}
          <div className="w-28 h-full rounded-xl overflow-hidden relative shrink-0 shadow-xs border border-slate-200/60">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80"
              alt="Luxury Hotel Villa Suite"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      ),
    },
    {
      id: "seo-optimization",
      badge: "Google Ranking",
      title: "Fast & SEO Optimized",
      description: "Lightning-fast websites built with best practices to rank higher and drive more organic traffic.",
      linkText: "Learn More",
      linkHref: "/contact",
      // Visual Card Top Content (Lighthouse Performance Score Widget)
      visual: (
        <div className="relative w-full h-48 sm:h-52 bg-white rounded-2xl overflow-hidden p-3.5 border border-slate-200/80 flex items-center justify-between gap-3 group-hover:scale-[1.02] transition-transform duration-300">
          {/* Left Circle Performance Score Gauge */}
          <div className="flex flex-col items-center justify-center p-2">
            <div className="relative w-24 h-24 rounded-full border-8 border-emerald-500 flex items-center justify-center bg-emerald-50/40">
              <span className="text-2xl font-black text-slate-900">96</span>
            </div>
            <span className="text-[10px] font-bold text-slate-500 mt-2">Performance Score</span>
          </div>

          {/* Right Metrics Checklist */}
          <div className="flex-1 space-y-2 text-xs pr-1">
            <div className="flex items-center justify-between py-1 border-b border-slate-100">
              <span className="text-[11px] font-medium text-slate-600">Page Speed</span>
              <span className="font-bold text-slate-900 flex items-center gap-1 text-[11px]">
                0.8s <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 text-white text-[9px] flex items-center justify-center">✓</span>
              </span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-slate-100">
              <span className="text-[11px] font-medium text-slate-600">Best Practices</span>
              <span className="font-bold text-slate-900 flex items-center gap-1 text-[11px]">
                100% <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 text-white text-[9px] flex items-center justify-center">✓</span>
              </span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-slate-100">
              <span className="text-[11px] font-medium text-slate-600">SEO</span>
              <span className="font-bold text-slate-900 flex items-center gap-1 text-[11px]">
                100% <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 text-white text-[9px] flex items-center justify-center">✓</span>
              </span>
            </div>

            <div className="flex items-center justify-between py-1">
              <span className="text-[11px] font-medium text-slate-600">Mobile Friendly</span>
              <span className="font-bold text-slate-900 flex items-center gap-1 text-[11px]">
                100% <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 text-white text-[9px] flex items-center justify-center">✓</span>
              </span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="solutions" className="py-16 sm:py-24 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Centered Solutions Section Header matching reference image */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-xs font-semibold uppercase tracking-wider">
            Solutions
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
            Hotel Web Development
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            We design and build modern, fast, and conversion-focused hotel websites that attract guests and increase direct bookings.
          </p>
        </div>

        {/* 3 Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {solutions.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Visual Graphic Showcase Container */}
                {item.visual}

                {/* Card Text Content */}
                <div className="space-y-2 pt-2">
                  <h3 className="text-lg font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Learn More Link with Arrow */}
              <div className="pt-6">
                <Link
                  href={item.linkHref}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group/link"
                >
                  <span>{item.linkText}</span>
                  <svg
                    className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
