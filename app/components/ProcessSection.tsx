"use client";

import React, { useState } from "react";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-slate-200/60 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header Section matching reference image */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-xs font-semibold uppercase tracking-wider shadow-2xs">
              THE PROCESS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
            How We Get You There
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-xl mx-auto">
            A simple, proven process to help you manage your property smarter and grow your business.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Central Connecting Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-0.5 border-r-2 border-dashed border-blue-200 hidden md:block" />

          <div className="space-y-16 sm:space-y-24">
            {/* STEP 01 */}
            <div
              onMouseEnter={() => setActiveStep(1)}
              className="relative flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 group"
            >
              {/* Left Side: Graphic Illustration Card */}
              <div className="w-full md:w-[44%]">
                <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex items-center justify-center group-hover:-translate-y-1">
                  <div className="relative w-48 h-36 flex items-center justify-center">
                    {/* Hotel Building SVG Graphic */}
                    <svg className="w-44 h-36" viewBox="0 0 200 160" fill="none">
                      <rect x="40" y="30" width="120" height="120" rx="12" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="2" />
                      <rect x="60" y="45" width="16" height="16" rx="4" fill="#3B82F6" />
                      <rect x="92" y="45" width="16" height="16" rx="4" fill="#3B82F6" />
                      <rect x="124" y="45" width="16" height="16" rx="4" fill="#3B82F6" />
                      <rect x="60" y="75" width="16" height="16" rx="4" fill="#3B82F6" />
                      <rect x="92" y="75" width="16" height="16" rx="4" fill="#3B82F6" />
                      <rect x="124" y="75" width="16" height="16" rx="4" fill="#3B82F6" />
                      <rect x="85" y="110" width="30" height="40" rx="4" fill="#1D4ED8" />
                      <circle cx="25" cy="120" r="10" fill="#34D399" />
                      <circle cx="175" cy="120" r="10" fill="#34D399" />
                      <rect x="23" y="128" width="4" height="22" fill="#059669" />
                      <rect x="173" y="128" width="4" height="22" fill="#059669" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Central Step Circle Node 01 */}
              <div className="absolute left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center justify-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-extrabold transition-all duration-300 cursor-pointer ${
                    activeStep === 1
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/40 scale-110 ring-4 ring-blue-100"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  01
                </div>
              </div>

              {/* Right Side: Text Description */}
              <div className="w-full md:w-[44%] space-y-2 text-left">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 group-hover:text-blue-600 transition-colors">
                  Setup Your Property
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-md">
                  Add your property details, rooms, rates, policies, and services. We'll help you get everything set up quickly and easily.
                </p>
              </div>
            </div>

            {/* STEP 02 */}
            <div
              onMouseEnter={() => setActiveStep(2)}
              className="relative flex flex-col md:flex-row-reverse items-center justify-between gap-8 sm:gap-12 group"
            >
              {/* Right Side: Graphic Illustration Card */}
              <div className="w-full md:w-[44%]">
                <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex items-center justify-center group-hover:-translate-y-1">
                  <div className="relative w-48 h-36 flex items-center justify-center">
                    {/* Calendar & ID Badge Graphic */}
                    <svg className="w-48 h-36" viewBox="0 0 200 160" fill="none">
                      <rect x="30" y="25" width="110" height="95" rx="12" fill="#3B82F6" />
                      <rect x="30" y="45" width="110" height="75" rx="4" fill="#EFF6FF" />
                      <circle cx="55" cy="65" r="5" fill="#BFDBFE" />
                      <circle cx="85" cy="65" r="5" fill="#BFDBFE" />
                      <circle cx="115" cy="65" r="5" fill="#BFDBFE" />
                      <circle cx="55" cy="90" r="5" fill="#BFDBFE" />
                      <circle cx="85" cy="90" r="5" fill="#BFDBFE" />
                      {/* ID Badge Overlay */}
                      <rect x="95" y="70" width="80" height="55" rx="10" fill="#FFFFFF" stroke="#DBEAFE" strokeWidth="2" />
                      <circle cx="120" cy="92" r="10" fill="#60A5FA" />
                      <rect x="136" y="86" width="30" height="5" rx="2" fill="#93C5FD" />
                      <rect x="136" y="96" width="22" height="4" rx="2" fill="#CBD5E1" />
                      {/* Green Check Badge */}
                      <circle cx="165" cy="115" r="10" fill="#10B981" />
                      <path d="M160 115l3.5 3.5 6.5-6.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Central Step Circle Node 02 */}
              <div className="absolute left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center justify-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-extrabold transition-all duration-300 cursor-pointer ${
                    activeStep === 2
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/40 scale-110 ring-4 ring-blue-100"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  02
                </div>
              </div>

              {/* Left Side: Text Description */}
              <div className="w-full md:w-[44%] space-y-2 text-left">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 group-hover:text-blue-600 transition-colors">
                  Manage Bookings & Guests
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-md">
                  Handle all bookings, guest profiles, check-ins, communications, and requests in one centralized dashboard.
                </p>
              </div>
            </div>

            {/* STEP 03 */}
            <div
              onMouseEnter={() => setActiveStep(3)}
              className="relative flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 group"
            >
              {/* Left Side: Graphic Illustration Card */}
              <div className="w-full md:w-[44%]">
                <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex items-center justify-center group-hover:-translate-y-1">
                  <div className="relative w-48 h-36 flex items-center justify-center">
                    {/* Checklist & Bell Notification Graphic */}
                    <svg className="w-48 h-36" viewBox="0 0 200 160" fill="none">
                      <rect x="40" y="25" width="110" height="105" rx="14" fill="#FFFFFF" stroke="#DBEAFE" strokeWidth="2" />
                      <rect x="40" y="25" width="110" height="22" rx="4" fill="#EFF6FF" />
                      {/* Check items */}
                      <path d="M55 60l3 3 6-6" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
                      <rect x="70" y="59" width="60" height="5" rx="2" fill="#E2E8F0" />
                      <path d="M55 85l3 3 6-6" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
                      <rect x="70" y="84" width="50" height="5" rx="2" fill="#E2E8F0" />
                      <path d="M55 110l3 3 6-6" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
                      <rect x="70" y="109" width="55" height="5" rx="2" fill="#E2E8F0" />
                      {/* Bell Notification Circle */}
                      <circle cx="145" cy="115" r="18" fill="#2563EB" />
                      <path d="M145 106a4 4 0 00-4 4v3.5l-1.5 1.5h11l-1.5-1.5V110a4 4 0 00-4-4zm-2 10a2 2 0 004 0" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Central Step Circle Node 03 */}
              <div className="absolute left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center justify-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-extrabold transition-all duration-300 cursor-pointer ${
                    activeStep === 3
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/40 scale-110 ring-4 ring-blue-100"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  03
                </div>
              </div>

              {/* Right Side: Text Description */}
              <div className="w-full md:w-[44%] space-y-2 text-left">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 group-hover:text-blue-600 transition-colors">
                  Streamline Operations
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-md">
                  Automate housekeeping, tasks, payments, and reports to save time, reduce errors, and keep everything running smoothly.
                </p>
              </div>
            </div>

            {/* STEP 04 */}
            <div
              onMouseEnter={() => setActiveStep(4)}
              className="relative flex flex-col md:flex-row-reverse items-center justify-between gap-8 sm:gap-12 group"
            >
              {/* Right Side: Graphic Illustration Card */}
              <div className="w-full md:w-[44%]">
                <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex items-center justify-center group-hover:-translate-y-1">
                  <div className="relative w-48 h-36 flex items-center justify-center">
                    {/* Growth Chart Graphic */}
                    <svg className="w-48 h-36" viewBox="0 0 200 160" fill="none">
                      <rect x="30" y="25" width="140" height="105" rx="14" fill="#FFFFFF" stroke="#DBEAFE" strokeWidth="2" />
                      {/* Bar chart bars */}
                      <rect x="50" y="95" width="16" height="25" rx="3" fill="#BFDBFE" />
                      <rect x="75" y="80" width="16" height="40" rx="3" fill="#93C5FD" />
                      <rect x="100" y="65" width="16" height="55" rx="3" fill="#60A5FA" />
                      <rect x="125" y="45" width="16" height="75" rx="3" fill="#3B82F6" />
                      {/* Green Growth Trend Arrow */}
                      <path d="M45 95L80 75L110 82L150 40" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M138 40H150V52" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      {/* $ Coin */}
                      <circle cx="150" cy="115" r="12" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1.5" />
                      <text x="150" y="119" textAnchor="middle" fill="#2563EB" fontSize="12" fontWeight="bold">$</text>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Central Step Circle Node 04 */}
              <div className="absolute left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center justify-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-extrabold transition-all duration-300 cursor-pointer ${
                    activeStep === 4
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/40 scale-110 ring-4 ring-blue-100"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  04
                </div>
              </div>

              {/* Left Side: Text Description */}
              <div className="w-full md:w-[44%] space-y-2 text-left">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 group-hover:text-blue-600 transition-colors">
                  Grow Revenue
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-md">
                  Get real-time insights, optimize performance, and increase direct bookings & profitability with smarter decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
