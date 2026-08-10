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

      {/* ----------------------------------------------------
          STATE 1: HAND HOLDING PHONE IMAGE (DEFAULT NON-HOVER STATE)
          Seamless blending & larger scale
      ----------------------------------------------------- */}
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

      {/* ----------------------------------------------------
          STATE 2: DESKTOP MONITOR & WEB DASHBOARD VIEW (HOVER STATE)
          Scales up smoothly on hover over the visual container
      ----------------------------------------------------- */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out transform-gpu ${
          isHovered
            ? "opacity-100 scale-105 sm:scale-110 translate-y-0 z-30"
            : "opacity-0 scale-95 translate-y-6 pointer-events-none"
        }`}
      >
        <div className="w-full max-w-xl lg:max-w-2xl bg-slate-900 rounded-2xl p-3 sm:p-4 shadow-2xl shadow-blue-900/40 border border-slate-700/80">
          {/* Top Browser Window Header */}
          <div className="flex items-center justify-between px-3 py-1.5 bg-slate-800 rounded-t-xl border-b border-slate-700 mb-1">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            </div>
            <div className="bg-slate-900 px-3 py-0.5 rounded text-[10px] font-mono text-slate-300 flex items-center gap-1.5">
              <span className="text-emerald-400">🔒</span> https://app.innhandler.com
            </div>
            <div className="text-[10px] font-bold text-blue-400">Desktop Web Dashboard</div>
          </div>

          {/* Full Web Dashboard UI */}
          <div className="bg-slate-950 rounded-b-xl text-slate-100 p-3.5 sm:p-4 text-xs">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                  IH
                </div>
                <div>
                  <div className="font-bold text-white leading-tight">Villa Resort Manager</div>
                  <div className="text-[9px] text-slate-400">12 Villas Connected • Real-time OTA Sync</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-semibold">
                ● Live Syncing
              </span>
            </div>

            {/* Content Cards */}
            <div className="grid grid-cols-3 gap-2.5 mb-3">
              <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                <div className="text-[9px] text-slate-400 font-semibold uppercase">Total Revenue</div>
                <div className="text-sm font-extrabold text-white mt-0.5">$24,850.00</div>
                <div className="text-[8px] text-emerald-400 font-medium">↑ +18.4% this month</div>
              </div>
              <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                <div className="text-[9px] text-slate-400 font-semibold uppercase">Occupancy</div>
                <div className="text-sm font-extrabold text-blue-400 mt-0.5">92.5%</div>
                <div className="text-[8px] text-emerald-400 font-medium">11/12 Villas Booked</div>
              </div>
              <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                <div className="text-[9px] text-slate-400 font-semibold uppercase">Direct Channel</div>
                <div className="text-sm font-extrabold text-purple-400 mt-0.5">64%</div>
                <div className="text-[8px] text-purple-300 font-medium">0% OTA Fee</div>
              </div>
            </div>

            {/* Connected Channels */}
            <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
              <div className="text-[10px] font-bold text-slate-200 mb-2">Connected Channels</div>
              <div className="grid grid-cols-4 gap-1.5 text-[9px] text-center">
                <div className="bg-slate-950 p-1.5 rounded border border-slate-800 text-rose-400 font-bold">Airbnb</div>
                <div className="bg-slate-950 p-1.5 rounded border border-slate-800 text-blue-400 font-bold">Booking.com</div>
                <div className="bg-slate-950 p-1.5 rounded border border-slate-800 text-amber-400 font-bold">Vrbo</div>
                <div className="bg-slate-950 p-1.5 rounded border border-slate-800 text-emerald-400 font-bold">Direct Engine</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
