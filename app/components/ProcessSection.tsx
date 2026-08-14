"use client";

import React, { useEffect, useRef, useState } from "react";

/* ── SVG Illustrations ────────────────────────────────────────── */

const IllustrationProperty = () => (
  <svg viewBox="0 0 180 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Sky */}
    <rect width="180" height="130" rx="0" fill="#EFF6FF" />
    {/* Clouds */}
    <ellipse cx="30" cy="22" rx="16" ry="8" fill="white" opacity="0.9" />
    <ellipse cx="44" cy="18" rx="12" ry="7" fill="white" opacity="0.9" />
    <ellipse cx="145" cy="18" rx="13" ry="6" fill="white" opacity="0.85" />
    <ellipse cx="158" cy="15" rx="10" ry="6" fill="white" opacity="0.85" />
    {/* Ground */}
    <rect x="0" y="108" width="180" height="22" fill="#DBEAFE" opacity="0.5" />
    {/* Building body */}
    <rect x="52" y="35" width="76" height="74" rx="4" fill="#BFDBFE" />
    {/* Building facade shading */}
    <rect x="52" y="35" width="76" height="10" rx="4" fill="#93C5FD" />
    {/* Windows row 1 */}
    <rect x="63" y="52" width="12" height="10" rx="2" fill="white" opacity="0.9" />
    <rect x="84" y="52" width="12" height="10" rx="2" fill="white" opacity="0.9" />
    <rect x="105" y="52" width="12" height="10" rx="2" fill="white" opacity="0.9" />
    {/* Windows row 2 */}
    <rect x="63" y="70" width="12" height="10" rx="2" fill="white" opacity="0.9" />
    <rect x="84" y="70" width="12" height="10" rx="2" fill="white" opacity="0.9" />
    <rect x="105" y="70" width="12" height="10" rx="2" fill="white" opacity="0.9" />
    {/* Windows row 3 */}
    <rect x="63" y="88" width="12" height="10" rx="2" fill="white" opacity="0.7" />
    <rect x="105" y="88" width="12" height="10" rx="2" fill="white" opacity="0.7" />
    {/* Door */}
    <rect x="82" y="90" width="16" height="19" rx="3" fill="#3B82F6" />
    <circle cx="95" cy="100" r="1.5" fill="white" />
    {/* Left tree trunk */}
    <rect x="29" y="96" width="4" height="12" rx="1" fill="#6EE7B7" />
    <ellipse cx="31" cy="90" rx="10" ry="12" fill="#34D399" />
    <ellipse cx="31" cy="86" rx="7" ry="8" fill="#6EE7B7" />
    {/* Right tree trunk */}
    <rect x="147" y="96" width="4" height="12" rx="1" fill="#6EE7B7" />
    <ellipse cx="149" cy="90" rx="10" ry="12" fill="#34D399" />
    <ellipse cx="149" cy="86" rx="7" ry="8" fill="#6EE7B7" />
  </svg>
);

const IllustrationBookings = () => (
  <svg viewBox="0 0 180 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="180" height="130" fill="#EFF6FF" />
    {/* Calendar base */}
    <rect x="18" y="20" width="100" height="90" rx="10" fill="#3B82F6" />
    <rect x="18" y="38" width="100" height="72" rx="6" fill="#DBEAFE" />
    {/* Calendar header rings */}
    <rect x="38" y="14" width="6" height="16" rx="3" fill="#1D4ED8" />
    <rect x="96" y="14" width="6" height="16" rx="3" fill="#1D4ED8" />
    {/* Date dots */}
    {[0,1,2,3,4,5,6,7,8,9,10,11].map((j) => (
      <circle key={j} cx={34 + (j % 4) * 22} cy={56 + Math.floor(j / 4) * 18} r="4" fill={j === 5 ? "#3B82F6" : "#93C5FD"} />
    ))}
    {/* ID card overlay */}
    <rect x="88" y="60" width="74" height="52" rx="10" fill="white" stroke="#BFDBFE" strokeWidth="1.5" />
    {/* Avatar */}
    <circle cx="112" cy="80" r="11" fill="#BFDBFE" />
    <circle cx="112" cy="76" r="5" fill="#93C5FD" />
    <ellipse cx="112" cy="88" rx="7" ry="5" fill="#93C5FD" />
    {/* Text lines */}
    <rect x="128" y="74" width="26" height="4" rx="2" fill="#93C5FD" />
    <rect x="128" y="82" width="18" height="3" rx="2" fill="#CBD5E1" />
    {/* Green check */}
    <circle cx="152" cy="104" r="9" fill="#10B981" />
    <path d="M147 104l3.5 3.5 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IllustrationOps = () => (
  <svg viewBox="0 0 180 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="180" height="130" fill="#EFF6FF" />
    {/* Card */}
    <rect x="24" y="18" width="110" height="98" rx="12" fill="white" stroke="#DBEAFE" strokeWidth="1.5" />
    <rect x="24" y="18" width="110" height="22" rx="8" fill="#EFF6FF" />
    {/* Row 1 */}
    <circle cx="42" cy="57" r="5" fill="#10B981" />
    <path d="M39.5 57l2.5 2.5 4.5-4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="54" y="54" width="62" height="5" rx="2.5" fill="#E2E8F0" />
    {/* Row 2 */}
    <circle cx="42" cy="76" r="5" fill="#10B981" />
    <path d="M39.5 76l2.5 2.5 4.5-4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="54" y="73" width="50" height="5" rx="2.5" fill="#E2E8F0" />
    {/* Row 3 */}
    <circle cx="42" cy="95" r="5" fill="#10B981" />
    <path d="M39.5 95l2.5 2.5 4.5-4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="54" y="92" width="56" height="5" rx="2.5" fill="#E2E8F0" />
    {/* Bell bubble */}
    <circle cx="148" cy="88" r="20" fill="#2563EB" />
    <path d="M148 78a5 5 0 00-5 5v4l-2 2h14l-2-2v-4a5 5 0 00-5-5z" fill="white" />
    <rect x="145" y="93" width="6" height="2" rx="1" fill="white" />
    <circle cx="156" cy="76" r="5" fill="#EF4444" />
    <text x="156" y="80" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">3</text>
  </svg>
);

const IllustrationRevenue = () => (
  <svg viewBox="0 0 180 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="180" height="130" fill="#EFF6FF" />
    {/* Card */}
    <rect x="18" y="14" width="144" height="102" rx="12" fill="white" stroke="#DBEAFE" strokeWidth="1.5" />
    {/* Baseline */}
    <line x1="30" y1="98" x2="152" y2="98" stroke="#E2E8F0" strokeWidth="1.5" />
    {/* Bars */}
    <rect x="38" y="78" width="16" height="20" rx="3" fill="#BFDBFE" />
    <rect x="62" y="62" width="16" height="36" rx="3" fill="#93C5FD" />
    <rect x="86" y="48" width="16" height="50" rx="3" fill="#60A5FA" />
    <rect x="110" y="30" width="16" height="68" rx="3" fill="#3B82F6" />
    {/* Growth line */}
    <path d="M46 76 L70 60 L94 46 L118 28" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* Arrow head */}
    <path d="M112 24l6 4-6 4" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* Dollar coin */}
    <circle cx="144" cy="80" r="13" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1.5" />
    <text x="144" y="85" textAnchor="middle" fill="#2563EB" fontSize="13" fontWeight="bold">$</text>
  </svg>
);

const illustrations = [
  <IllustrationProperty key="1" />,
  <IllustrationBookings key="2" />,
  <IllustrationOps key="3" />,
  <IllustrationRevenue key="4" />,
];

/* ── Steps data ───────────────────────────────────────────────── */

const steps = [
  {
    num: "01",
    title: "Setup Your Property",
    desc: "Add your property details, rooms, rates, policies and services. We'll help you get everything set up quickly.",
  },
  {
    num: "02",
    title: "Manage Bookings & Guests",
    desc: "Handle all bookings, guest profiles, check-ins, communications and requests in one centralized dashboard.",
  },
  {
    num: "03",
    title: "Streamline Operations",
    desc: "Automate housekeeping, tasks, payments and reports to save time, reduce errors and keep things running smoothly.",
  },
  {
    num: "04",
    title: "Grow Revenue",
    desc: "Get real-time insights, optimize performance and increase direct bookings and profitability.",
  },
];

/* ── Component ────────────────────────────────────────────────── */

export default function ProcessSection() {
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(
    new Array(steps.length).fill(false)
  );
  const [lineProgress, setLineProgress] = useState<number[]>(
    new Array(steps.length - 1).fill(0)
  );

  const desktopNodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileNodeRefs  = useRef<(HTMLDivElement | null)[]>([]);

  /* Returns whichever ref array is actually visible on screen */
  function getActiveRefs() {
    const first = desktopNodeRefs.current[0];
    if (first && first.getBoundingClientRect().width > 0) {
      return desktopNodeRefs.current;
    }
    return mobileNodeRefs.current;
  }

  /* IntersectionObserver — observe BOTH layouts, shared visibleSteps state */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const allRefs = [
      ...desktopNodeRefs.current,
      ...mobileNodeRefs.current,
    ];

    // Build a map from element → step index
    const elToIndex = new Map<HTMLDivElement, number>();
    desktopNodeRefs.current.forEach((el, i) => { if (el) elToIndex.set(el, i); });
    mobileNodeRefs.current.forEach((el, i) => { if (el) elToIndex.set(el, i); });

    allRefs.forEach((el) => {
      if (!el) return;
      const i = elToIndex.get(el);
      if (i === undefined) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => {
              if (prev[i]) return prev;
              const next = [...prev];
              next[i] = true;
              return next;
            });
          }
        },
        { threshold: 0.5, rootMargin: "0px 0px -40px 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* Scroll listener — fill line using whichever layout is active */
  useEffect(() => {
    function updateLines() {
      const refs = getActiveRefs();
      setLineProgress((prev) => {
        const next = [...prev];
        let changed = false;
        for (let i = 0; i < steps.length - 1; i++) {
          const fromEl = refs[i];
          const toEl   = refs[i + 1];
          if (!fromEl || !toEl) continue;
          const fromRect = fromEl.getBoundingClientRect();
          const toRect   = toEl.getBoundingClientRect();
          // Skip hidden elements (display:none → width 0)
          if (fromRect.width === 0 || toRect.width === 0) continue;
          const trigger = window.innerHeight * 0.65;
          const raw = (trigger - fromRect.bottom) / (toRect.top - fromRect.bottom);
          const clamped = Math.max(0, Math.min(1, raw)) * 100;
          if (Math.abs(clamped - next[i]) > 0.05) {
            next[i] = clamped;
            changed = true;
          }
        }
        return changed ? next : prev;
      });
    }
    window.addEventListener("scroll", updateLines, { passive: true });
    updateLines();
    return () => window.removeEventListener("scroll", updateLines);
  }, []);

  return (
    <section className="py-20 sm:py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(239,246,255,0.9) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-[1300px] mx-auto px-6 sm:px-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-[10px] font-bold uppercase tracking-widest">
            The Process
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            How We Get You There
          </h2>
          <p className="text-base text-slate-500 leading-relaxed max-w-sm mx-auto">
            A simple, proven process to manage your property smarter.
          </p>
        </div>

        {/* ── Desktop: alternating layout ── */}
        <div className="hidden md:block relative">
          {steps.map((step, i) => {
            /* odd i (0,2) → illustration LEFT, text RIGHT
               even i (1,3) → text LEFT, illustration RIGHT */
            const illustLeft = i % 2 === 0;
            const isVisible = visibleSteps[i];

            return (
              <div key={i}>
                <div className="flex items-center gap-0" style={{ minHeight: "220px" }}>

                  {/* LEFT slot — 42% */}
                  <div className="w-[42%] flex justify-end pr-10">
                    {illustLeft ? (
                      /* Illustration card slides from left */
                      <div
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible ? "translateX(0)" : "translateX(-50px)",
                          transition: "opacity 0.65s cubic-bezier(0.16,1,0.3,1) 0.05s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.05s",
                        }}
                        className="bg-[#EFF6FF] rounded-3xl overflow-hidden w-[340px] h-[240px]"
                      >
                        {illustrations[i]}
                      </div>
                    ) : (
                      /* Text slides from left */
                      <div
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible ? "translateX(0)" : "translateX(-50px)",
                          transition: "opacity 0.65s cubic-bezier(0.16,1,0.3,1) 0.05s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.05s",
                        }}
                        className="max-w-[380px] text-left"
                      >
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug mb-3">
                          {step.title}
                        </h3>
                        <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* CENTER — 16%: node + line */}
                  <div className="w-[16%] flex flex-col items-center self-stretch">
                    {/* Step circle node */}
                    <div
                      ref={(el) => { desktopNodeRefs.current[i] = el; }}
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "scale(1)" : "scale(0.35)",
                        transition:
                          "opacity 0.4s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.34,1.56,0.64,1)",
                      }}
                      className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-base font-extrabold shadow-xl shadow-blue-500/30 z-10 relative flex-shrink-0 tracking-tight"
                    >
                      {step.num}
                    </div>

                    {/* Dashed track + animated fill */}
                    {i < steps.length - 1 && (
                      <div className="relative flex-1 mt-2" style={{ width: "2px" }}>
                        {/* Scroll-driven fill line */}
                        <div
                          className="absolute top-0 left-1/2 -translate-x-1/2 overflow-hidden"
                          style={{ width: "2px", height: "100%", background: "#E2E8F0" }}
                        >
                          <div
                            style={{
                              width: "100%",
                              height: `${lineProgress[i]}%`,
                              background: "linear-gradient(to bottom, #3b82f6, #60a5fa)",
                              transition: "none",
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* RIGHT slot — 42% */}
                  <div className="w-[42%] pl-10">
                    {illustLeft ? (
                      /* Text slides from right */
                      <div
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible ? "translateX(0)" : "translateX(50px)",
                          transition: "opacity 0.65s cubic-bezier(0.16,1,0.3,1) 0.05s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.05s",
                        }}
                        className="max-w-[380px]"
                      >
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug mb-3">
                          {step.title}
                        </h3>
                        <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    ) : (
                      /* Illustration slides from right */
                      <div
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible ? "translateX(0)" : "translateX(50px)",
                          transition: "opacity 0.65s cubic-bezier(0.16,1,0.3,1) 0.05s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.05s",
                        }}
                      >
                        <div className="bg-[#EFF6FF] rounded-3xl overflow-hidden w-[280px] h-[200px]">
                          {illustrations[i]}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Spacer between rows — gives scroll distance for the line */}
                {i < steps.length - 1 && <div style={{ height: "80px" }} aria-hidden="true" />}
              </div>
            );
          })}
        </div>

        {/* ── Mobile: single-column ── */}
        <div className="md:hidden space-y-0">
          {steps.map((step, i) => {
            const isVisible = visibleSteps[i];
            return (
              <div key={i} className="flex gap-5">
                <div className="flex flex-col items-center" style={{ minWidth: "48px" }}>
                  <div
                    ref={(el) => { mobileNodeRefs.current[i] = el; }}
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "scale(1)" : "scale(0.35)",
                      transition: "opacity 0.4s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.34,1.56,0.64,1)",
                    }}
                    className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-extrabold shadow-lg shadow-blue-500/25 flex-shrink-0 z-10 relative"
                  >
                    {step.num}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="relative flex-1 mt-1" style={{ width: "2px", minHeight: "120px", background: "#E2E8F0" }}>
                      <div className="absolute top-0 left-0 overflow-hidden" style={{ width: "2px", height: "100%" }}>
                        <div style={{ width: "100%", height: `${lineProgress[i]}%`, background: "linear-gradient(to bottom, #3b82f6, #60a5fa)" }} />
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className="pb-10 pt-0.5"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(24px)",
                    transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s",
                  }}
                >
                  <div className="bg-[#EFF6FF] rounded-xl overflow-hidden mb-3 w-full max-w-[200px] h-[120px]">
                    {illustrations[i]}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug mb-1.5">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
