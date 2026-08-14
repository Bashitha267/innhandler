"use client";

import React from "react";
import Link from "next/link";
import DeviceShowcase from "./DeviceShowcase";

export default function HeroSection() {
  const bottomHighlights = [
    {
      title: "Smart Bookings",
      description: "Sync all bookings from multiple channels in real time.",
      bgColor: "bg-blue-100/70 text-blue-600",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Easy Operations",
      description: "Manage tasks, housekeeping, and staff effortlessly.",
      bgColor: "bg-emerald-100/70 text-emerald-600",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      title: "Secure Payments",
      description: "Track payments and generate reports in seconds.",
      bgColor: "bg-amber-100/70 text-amber-600",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Business Insights",
      description: "Get real-time insights and grow your revenue.",
      bgColor: "bg-purple-100/70 text-purple-600",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative flex-1 flex flex-col justify-between max-w-7xl mx-auto px-6 lg:px-12 py-3 lg:py-4 w-full">
      {/* 2-Column Split Hero Layout: Left Content & Right Phone Image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-10 items-center flex-1">
        {/* Left Column Content */}
        <div className="lg:col-span-6 space-y-4 lg:space-y-5 text-center lg:text-left">
          {/* Soft Blue Pill Badge */}
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-xs font-semibold tracking-wide shadow-xs">
              All-in-One Villa Management System
            </span>
          </div>

          {/* Reduced H1 Headline Size */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
            Run Your Property Business Smarter{" "}
            <span className="text-blue-600 block sm:inline">All in One Place</span>
          </h1>

          {/* Subtitle Paragraph */}
          <p className="text-xs sm:text-sm lg:text-base text-slate-500 max-w-lg leading-relaxed font-normal">
            Inn Handler helps you manage bookings, guests, payments, and operations effortlessly — so you can focus on delivering unforgettable stays.
          </p>

          {/* CTA Buttons Row */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <Link
              href="#start"
              className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-full shadow-md shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Start Your Free Trial</span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>

            <Link
              href="#demo"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 hover:text-blue-600 px-3 py-2.5 transition-colors group"
            >
              <span>Book a Demo</span>
              <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="pt-1 flex items-center gap-2.5">
            <div className="flex -space-x-2 overflow-hidden">
              <img
                className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                alt="Property Manager avatar"
                width={28}
                height={28}
              />
              <img
                className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                alt="Villa owner avatar"
                width={28}
                height={28}
              />
              <img
                className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                alt="Hotel operator avatar"
                width={28}
                height={28}
              />
            </div>
            <span className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight">
              Trusted by <strong className="font-bold text-slate-900">1,000+</strong> property managers worldwide
            </span>
          </div>
        </div>

        {/* Right Column: Hand Image & Phone Interactive Showcase */}
        <div className="lg:col-span-6 relative flex justify-center items-center">
          <DeviceShowcase />
        </div>
      </div>

      {/* Bottom Feature Strip */}
      <div className="mt-4 mb-1 bg-white rounded-2xl p-4 lg:p-5 border border-slate-200/70 shadow-xs">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {bottomHighlights.map((item) => (
            <div key={item.title} className="flex items-start gap-3 group">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${item.bgColor} shrink-0 group-hover:scale-105 transition-transform duration-200`}>
                {item.icon}
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
