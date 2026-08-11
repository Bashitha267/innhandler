"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function DeviceShowcase() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full h-[440px] sm:h-[500px] lg:h-[540px] flex items-center justify-center cursor-pointer select-none perspective-container"
      aria-label="InnHandler Mobile and Desktop Interface Showcase."
    >
      {/* Soft Blue Radial Glow */}
      <div className="absolute w-[440px] sm:w-[540px] h-[440px] sm:h-[540px] bg-blue-100/40 rounded-full blur-3xl -z-10 pointer-events-none transition-all duration-700 group-hover:bg-blue-200/50 group-hover:scale-110" />

      {/* STATE 1: HAND HOLDING PHONE */}
      <div
        className={`relative w-full h-full flex items-center justify-center transition-all duration-700 ease-out transform-gpu ${
          isHovered
            ? "opacity-0 scale-90 rotate-y-12 translate-y-8 pointer-events-none"
            : "opacity-100 scale-100 hover:scale-105 rotate-0 translate-y-0 z-20"
        }`}
      >
        <div className="relative w-[440px] sm:w-[520px] lg:w-[580px] h-full flex items-center justify-center">
          <Image
            src="/hand_holding_phone.jpg"
            alt="Hand holding smartphone with InnHandler Villa Management App"
            fill
            className="object-contain object-center mix-blend-multiply transition-transform duration-500 hover:scale-105"
            priority
          />
        </div>
      </div>

      {/* STATE 2: DESKTOP DASHBOARD WITH SLIGHTLY REDUCED OPACITY DATES UNDER BOOKING BARS */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out transform-gpu ${
          isHovered
            ? "opacity-100 scale-105 sm:scale-110 translate-y-0 z-30"
            : "opacity-0 scale-95 translate-y-6 pointer-events-none"
        }`}
      >
        <div className="w-full max-w-2xl lg:max-w-3xl bg-slate-900 rounded-2xl p-2.5 sm:p-3 shadow-2xl shadow-blue-900/40 border border-slate-700/80">
          {/* Top Browser Header */}
          <div className="flex items-center justify-between px-3 py-1.5 bg-slate-800 rounded-t-xl border-b border-slate-700 mb-1">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            </div>
            <div className="bg-slate-900 px-3 py-0.5 rounded text-[10px] font-mono text-slate-300 flex items-center gap-1.5">
              <span className="text-emerald-400">🔒</span> https://app.innhandler.com/dashboard
            </div>
            <div className="text-[10px] font-bold text-blue-400">Desktop Web App</div>
          </div>

          {/* InnHandler App UI */}
          <div className="bg-slate-50 rounded-b-xl text-slate-900 p-3 sm:p-4 text-xs overflow-hidden border border-slate-200">
            {/* Header Controls */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2 mb-2 border-b border-slate-200/80">
              <div>
                <h3 className="text-base font-extrabold text-slate-950 leading-tight">Dashboard</h3>
                <p className="text-[10px] text-slate-500 font-medium">Monitoring 44 rooms and current occupancy.</p>
              </div>

              <div className="flex items-center gap-1.5">
                <div className="bg-slate-200/70 p-0.5 rounded-lg flex items-center text-[9px] font-bold">
                  <span className="bg-white text-blue-600 px-2 py-0.5 rounded-md shadow-xs">Calendar</span>
                  <span className="text-slate-600 px-2 py-0.5">Timeline</span>
                </div>
                <button type="button" className="bg-amber-500 hover:bg-amber-600 text-white px-2 py-0.5 rounded-lg text-[9px] font-bold flex items-center gap-1">
                  ✓ Availability
                </button>
                <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-0.5 rounded-lg text-[9px] font-bold flex items-center gap-1">
                  + Add Booking
                </button>
              </div>
            </div>

            {/* 6 Metric Strip */}
            <div className="grid grid-cols-6 gap-1.5 mb-2">
              <div className="bg-white p-1.5 rounded-xl border border-slate-200/70 shadow-2xs flex flex-col justify-between">
                <div className="text-[6.5px] text-slate-400 font-bold uppercase truncate">OCCUPANCY RATE</div>
                <div className="text-xs font-black text-slate-900">78%</div>
                <div className="text-[6px] text-emerald-600 font-bold">↗ +8.2% vs yesterday</div>
              </div>

              <div className="bg-white p-1.5 rounded-xl border border-slate-200/70 shadow-2xs flex flex-col justify-between">
                <div className="text-[6.5px] text-slate-400 font-bold uppercase truncate">CHECK-IN</div>
                <div className="text-xs font-black text-slate-900">14</div>
                <div className="text-[6px] text-emerald-600 font-bold">↗ +3 from yesterday</div>
              </div>

              <div className="bg-white p-1.5 rounded-xl border border-slate-200/70 shadow-2xs flex flex-col justify-between">
                <div className="text-[6.5px] text-slate-400 font-bold uppercase truncate">CHECK-OUT</div>
                <div className="text-xs font-black text-slate-900">8</div>
                <div className="text-[6px] text-emerald-600 font-bold">↗ +2 from yesterday</div>
              </div>

              <div className="bg-white p-1.5 rounded-xl border border-slate-200/70 shadow-2xs flex flex-col justify-between">
                <div className="text-[6.5px] text-slate-400 font-bold uppercase truncate">REVENUE</div>
                <div className="text-[9px] font-black text-slate-900">Rs. 312.5k</div>
                <div className="text-[6px] text-emerald-600 font-bold">↗ +18.4% vs last month</div>
              </div>

              <div className="bg-white p-1.5 rounded-xl border border-slate-200/70 shadow-2xs flex flex-col justify-between">
                <div className="text-[6.5px] text-slate-400 font-bold uppercase truncate">PENDING</div>
                <div className="text-[9px] font-black text-slate-900">Rs. 42.0k</div>
                <div className="text-[6px] text-emerald-600 font-bold">↗ +12.0% vs last month</div>
              </div>

              <div className="bg-white p-1.5 rounded-xl border border-slate-200/70 shadow-2xs flex flex-col justify-between">
                <div className="text-[6.5px] text-slate-400 font-bold uppercase truncate">AVAILABLE</div>
                <div className="text-xs font-black text-slate-900">36</div>
                <div className="text-[6px] text-emerald-600 font-bold">↗ +4 from yesterday</div>
              </div>
            </div>

            {/* 30-Day Month Booking Calendar Grid (Dates under booking have slightly reduced opacity) */}
            <div className="grid grid-cols-12 gap-2 relative">
              <div className="col-span-8 bg-white p-2.5 rounded-2xl border border-slate-200/80 shadow-2xs">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-slate-900">Booking Overview (May 2026)</span>
                  <span className="text-[8px] text-blue-600 font-bold bg-blue-50 px-1.5 py-0.5 rounded">All Properties ▾</span>
                </div>

                {/* Days Header */}
                <div className="grid grid-cols-7 gap-1 text-center text-[7px] font-bold text-slate-400 pb-1 border-b border-slate-100">
                  <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
                </div>

                {/* Relative Layer Container for Date Matrix & Overlay Booking Bars */}
                <div className="relative pt-2 pb-1">
                  {/* BASE LAYER: Continuous 30 Date Grid (Dates under bookings have slightly reduced opacity) */}
                  <div className="grid grid-cols-7 gap-x-1 gap-y-7 text-center font-black text-slate-900 text-[8.5px] z-10 relative">
                    {/* Row 1 (Under Bookings 1 & 2 - Slightly reduced opacity for cleaner text contrast) */}
                    <span className="bg-blue-50/90 text-blue-700 py-0.5 rounded opacity-75">1</span>
                    <span className="py-0.5 opacity-75">2</span>
                    <span className="py-0.5 opacity-75">3</span>
                    <span className="py-0.5 opacity-75">4</span>
                    <span className="py-0.5 opacity-75">5</span>
                    <span className="py-0.5 opacity-75">6</span>
                    <span className="py-0.5 opacity-75">7</span>
                    {/* Row 2 (Dates 9-12 under Booking 3 have slightly reduced opacity) */}
                    <span className="py-0.5">8</span>
                    <span className="py-0.5 opacity-75">9</span>
                    <span className="py-0.5 opacity-75">10</span>
                    <span className="py-0.5 opacity-75">11</span>
                    <span className="py-0.5 opacity-75">12</span>
                    <span className="py-0.5">13</span>
                    <span className="py-0.5">14</span>
                    {/* Row 3 */}
                    <span className="py-0.5">15</span>
                    <span className="py-0.5">16</span>
                    <span className="py-0.5">17</span>
                    <span className="py-0.5">18</span>
                    <span className="py-0.5">19</span>
                    <span className="py-0.5">20</span>
                    <span className="py-0.5">21</span>
                    {/* Row 4 */}
                    <span className="py-2">22</span>
                    <span className="py-2">23</span>
                    <span className="py-2">24</span>
                    <span className="py-2">25</span>
                    <span className="py-2">26</span>
                    <span className="py-2">27</span>
                    <span className="py-2">28</span>
                    {/* Row 5 */}
                    <span className="py-1">29</span>
                    <span className="py-1">30</span>
                    <span className="text-slate-300 py-1 font-normal">31</span>
                  </div>

                  {/* OVERLAY LAYER: Semi-Transparent Connected Booking Bars */}
                  <div className="absolute inset-0 pt-1 pointer-events-none z-20">
                    {/* Row 1 Booking Bars */}
                    <div className="grid grid-cols-7 gap-1 text-[6.5px] font-extrabold mt-0">
                      <div className="col-start-1 col-span-3 bg-emerald-400/35 border border-emerald-500/70 text-emerald-950 rounded-md px-2 py-1 flex items-center truncate shadow-2xs">
                        Alex Morgan - Rm 101
                      </div>
                      <div className="col-start-4 col-span-4 bg-amber-400/35 border border-amber-500/70 text-amber-950 rounded-md px-2 py-1 flex items-center truncate shadow-2xs">
                        Sarah Jenkins - Rm 104
                      </div>
                    </div>

                    {/* Row 2 Booking Bar */}
                    <div className="grid grid-cols-7 gap-1 text-[6.5px] font-extrabold mt-[1.72rem]">
                      <div className="col-start-2 col-span-4 bg-blue-400/35 border border-blue-500/70 text-blue-950 rounded-md px-2 py-1 flex items-center truncate shadow-2xs">
                        David Miller - Rm 202
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Summary */}
              <div className="col-span-4 bg-white p-2.5 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900 mb-1">Payment Summary</div>

                  <div className="flex items-center justify-center my-1.5">
                    <div className="w-14 h-14 rounded-full border-4 border-emerald-500 border-t-amber-400 border-r-blue-500 flex items-center justify-center bg-slate-50">
                      <span className="text-[7.5px] font-bold text-slate-600">82% Paid</span>
                    </div>
                  </div>

                  <div className="space-y-1 text-[7.5px] font-semibold mt-1.5">
                    <div className="flex items-center justify-between text-slate-700">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Total Paid
                      </span>
                      <span className="font-bold text-slate-900">Rs. 248,500</span>
                    </div>

                    <div className="flex items-center justify-between text-slate-700">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Pending
                      </span>
                      <span className="font-bold text-slate-900">Rs. 42,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
