"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function DeviceShowcase() {
  const [isActive, setIsActive] = useState(false);

  function handleMouseEnter() {
    if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
      setIsActive(true);
    }
  }

  function handleMouseLeave() {
    if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
      setIsActive(false);
    }
  }

  function handleClick() {
    setIsActive((prev) => !prev);
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="group relative w-full min-h-[380px] sm:min-h-[460px] lg:h-[530px] flex flex-col items-center justify-center cursor-pointer select-none py-2 lg:py-0"
      aria-label="InnHandler Mobile and Desktop Interface Showcase"
    >
      {/* Soft Ambient Background Glow */}
      <div className="absolute w-[280px] sm:w-[460px] lg:w-[560px] h-[280px] sm:h-[460px] lg:h-[560px] bg-blue-100/50 rounded-full blur-3xl -z-10 pointer-events-none transition-all duration-700 group-hover:bg-blue-200/60 group-hover:scale-105" />

      {/* ── STATE 1: MOBILE HAND HOLDING PHONE ── */}
      <div
        className={`w-full flex items-center justify-center transition-all duration-500 ease-out ${
          isActive
            ? "opacity-0 scale-95 pointer-events-none absolute inset-0"
            : "opacity-100 scale-100 relative z-20"
        }`}
      >
        <div className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[430px] flex items-center justify-center">
          <Image
            src="/holding.webp"
            alt="InnHandler Villa Management Mobile App"
            width={430}
            height={570}
            className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.02]"
            style={{ filter: "drop-shadow(0 20px 35px rgba(15, 23, 42, 0.12))" }}
            priority
          />
        </div>
      </div>

      {/* ── STATE 2: REALISTIC LAPTOP / DESKTOP SCREEN MOCKUP ── */}
      <div
        className={`w-full flex items-center justify-center transition-all duration-500 ease-out ${
          isActive
            ? "opacity-100 scale-100 z-30 relative lg:absolute lg:inset-0"
            : "opacity-0 scale-95 pointer-events-none absolute inset-0"
        }`}
      >
        <div className="w-full max-w-[340px] sm:max-w-[500px] lg:max-w-[620px] mx-auto flex flex-col items-center">
          
          {/* Laptop Screen Body */}
          <div className="w-full bg-slate-900 rounded-t-xl sm:rounded-t-2xl p-1.5 sm:p-2.5 pb-1 border border-slate-700/80 shadow-2xl shadow-blue-950/30">
            
            {/* Top Bezel Camera Dot */}
            <div className="flex justify-center items-center pb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-700 ring-1 ring-slate-600/80" />
            </div>

            {/* Screen Inner Container */}
            <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700/60 shadow-inner">
              
              {/* Browser Address Header */}
              <div className="flex items-center justify-between px-2.5 sm:px-3 py-1 sm:py-1.5 bg-slate-800/95 border-b border-slate-700/80">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500/90" />
                  <span className="w-2 h-2 rounded-full bg-amber-500/90" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500/90" />
                </div>
                <div className="bg-slate-950/80 px-2 sm:px-3 py-0.5 rounded text-[8px] sm:text-[10px] font-mono text-slate-300 flex items-center gap-1">
                  <span className="text-emerald-400 text-[9px]">🔒</span> www.innhandler.com/system
                </div>
                <div className="text-[7.5px] sm:text-[9px] font-bold text-blue-400">Desktop Web App</div>
              </div>

              {/* InnHandler Dashboard App Interface */}
              <div className="bg-slate-50 text-slate-900 p-2 sm:p-3 sm:text-xs">
                
                {/* Header Controls */}
                <div className="flex items-center justify-between gap-1 pb-1.5 mb-1.5 border-b border-slate-200">
                  <div>
                    <h3 className="text-xs sm:text-sm font-extrabold text-slate-950 leading-tight">Dashboard</h3>
                    <p className="text-[7.5px] sm:text-[10px] text-slate-500 font-medium">Monitoring 44 rooms & current occupancy</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="bg-slate-200/70 p-0.5 rounded flex items-center text-[7px] sm:text-[9px] font-bold">
                      <span className="bg-white text-blue-600 px-1.5 py-0.5 rounded shadow-2xs">Calendar</span>
                      <span className="text-slate-600 px-1.5 py-0.5">Timeline</span>
                    </div>
                    <span className="bg-amber-500 text-white px-1.5 sm:px-2 py-0.5 rounded text-[7px] sm:text-[9px] font-bold hidden xs:inline-block">
                      ✓ Availability
                    </span>
                    <span className="bg-blue-600 text-white px-1.5 sm:px-2 py-0.5 rounded text-[7px] sm:text-[9px] font-bold">
                      + Add Booking
                    </span>
                  </div>
                </div>

                {/* 6 Metric Stat Cards */}
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-1 sm:gap-1.5 mb-1.5">
                  {[
                    { label: "OCCUPANCY", val: "78%", tag: "+8.2%" },
                    { label: "CHECK-IN", val: "14", tag: "+3" },
                    { label: "CHECK-OUT", val: "8", tag: "+2" },
                    { label: "REVENUE", val: "312.5k", tag: "+18%" },
                    { label: "PENDING", val: "42.0k", tag: "+12%" },
                    { label: "AVAILABLE", val: "36", tag: "+4" },
                  ].map((m) => (
                    <div key={m.label} className="bg-white p-1 sm:p-1.5 rounded-lg border border-slate-200/80 shadow-2xs">
                      <div className="text-[5.5px] sm:text-[6.5px] text-slate-400 font-bold uppercase truncate">{m.label}</div>
                      <div className="text-[9px] sm:text-xs font-black text-slate-900 leading-tight">{m.val}</div>
                      <div className="text-[5.5px] sm:text-[6.5px] text-emerald-600 font-bold leading-tight">↗ {m.tag}</div>
                    </div>
                  ))}
                </div>

                {/* Calendar & Payment Grid */}
                <div className="grid grid-cols-12 gap-1.5 sm:gap-2">
                  
                  {/* Booking Calendar (8 Cols) */}
                  <div className="col-span-7 sm:col-span-8 bg-white p-1.5 sm:p-2 rounded-xl border border-slate-200/80 shadow-2xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[8px] sm:text-[10.5px] font-bold text-slate-900">May 2026</span>
                      <span className="text-[6.5px] sm:text-[8px] text-blue-600 font-bold bg-blue-50 px-1 py-0.5 rounded">All Rooms ▾</span>
                    </div>

                    {/* Day Names */}
                    <div className="grid grid-cols-7 gap-0.5 text-center text-[5.5px] sm:text-[7px] font-bold text-slate-400 pb-0.5 border-b border-slate-100">
                      <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                    </div>

                    {/* Clean Structured Calendar Rows */}
                    <div className="space-y-0.5 pt-1 text-[6.5px] sm:text-[8px]">
                      
                      {/* Row 1 with Booking Badge */}
                      <div className="space-y-0.5">
                        <div className="grid grid-cols-7 gap-0.5 text-center font-bold text-slate-700">
                          <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span>
                        </div>
                        <div className="grid grid-cols-7 gap-0.5">
                          <div className="col-span-3 bg-emerald-100 border border-emerald-300 text-emerald-800 text-[5px] sm:text-[6.5px] font-bold px-1 py-0.5 rounded truncate">
                            Alex - Rm 101
                          </div>
                          <div className="col-span-4 bg-amber-100 border border-amber-300 text-amber-800 text-[5px] sm:text-[6.5px] font-bold px-1 py-0.5 rounded truncate">
                            Sarah - Rm 104
                          </div>
                        </div>
                      </div>

                      {/* Row 2 with Booking Badge */}
                      <div className="space-y-0.5 pt-0.5">
                        <div className="grid grid-cols-7 gap-0.5 text-center font-bold text-slate-700">
                          <span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span>
                        </div>
                        <div className="grid grid-cols-7 gap-0.5">
                          <div className="col-start-2 col-span-4 bg-blue-100 border border-blue-300 text-blue-800 text-[5px] sm:text-[6.5px] font-bold px-1 py-0.5 rounded truncate">
                            David - Rm 202
                          </div>
                        </div>
                      </div>

                      {/* Row 3 Days */}
                      <div className="grid grid-cols-7 gap-0.5 text-center font-bold text-slate-700 pt-0.5">
                        <span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span>
                      </div>

                      {/* Row 4 Days */}
                      <div className="grid grid-cols-7 gap-0.5 text-center font-bold text-slate-700">
                        <span>22</span><span>23</span><span>24</span><span>25</span><span>26</span><span>27</span><span>28</span>
                      </div>
                    </div>
                  </div>

                  {/* Payment Summary (4-5 Cols) */}
                  <div className="col-span-5 sm:col-span-4 bg-white p-1.5 sm:p-2 rounded-xl border border-slate-200/80 shadow-2xs flex flex-col justify-between">
                    <div>
                      <div className="text-[7.5px] sm:text-[10px] font-bold text-slate-900 mb-0.5">Payments</div>
                      
                      {/* Donut Indicator */}
                      <div className="flex items-center justify-center my-1">
                        <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border-[3px] border-emerald-500 border-t-amber-400 border-r-blue-500 flex items-center justify-center bg-slate-50">
                          <span className="text-[5.5px] sm:text-[7.5px] font-bold text-slate-700">82%</span>
                        </div>
                      </div>

                      <div className="space-y-0.5 text-[6px] sm:text-[7.5px] font-semibold">
                        <div className="flex items-center justify-between text-slate-600">
                          <span className="flex items-center gap-0.5">
                            <span className="w-1 h-1 rounded-full bg-emerald-500" /> Paid
                          </span>
                          <span className="font-bold text-slate-900">248k</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-600">
                          <span className="flex items-center gap-0.5">
                            <span className="w-1 h-1 rounded-full bg-amber-400" /> Due
                          </span>
                          <span className="font-bold text-slate-900">42k</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* Laptop Base / Bottom Lip */}
          <div className="w-[104%] h-2 sm:h-3 bg-gradient-to-b from-slate-700 via-slate-600 to-slate-800 rounded-b-lg sm:rounded-b-xl shadow-lg border-t border-slate-600 relative flex justify-center items-center">
            <div className="w-10 sm:w-16 h-0.5 sm:h-1 bg-slate-800 rounded-b-sm" />
          </div>

        </div>
      </div>
    </div>
  );
}
