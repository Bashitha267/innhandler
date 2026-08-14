"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function AllInOneSection() {
  const benefits = [
    {
      title: "All-in-One Platform",
      description: "Everything you need, in one place.",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Save Time",
      description: "Automate daily tasks and work efficiently.",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Increase Revenue",
      description: "Insights that help you grow profitability.",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: "Secure & Reliable",
      description: "Your data is safe with us.",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  /* ── Animation state ── */
  const [headerVisible,  setHeaderVisible]  = useState(false);
  const [cardsVisible,   setCardsVisible]   = useState<boolean[]>(new Array(benefits.length).fill(false));
  const [actionsVisible, setActionsVisible] = useState(false);

  const headerRef  = useRef<HTMLDivElement>(null);
  const cardRefs   = useRef<(HTMLDivElement | null)[]>([]);
  const actionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    function observe(
      el: Element | null,
      cb: () => void,
      threshold = 0.2
    ) {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { cb(); obs.disconnect(); } },
        { threshold, rootMargin: "0px 0px -40px 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    }

    // Header
    observe(headerRef.current, () => setHeaderVisible(true), 0.2);

    // Each card — staggered via index
    cardRefs.current.forEach((el, i) => {
      observe(el, () => {
        setTimeout(() => {
          setCardsVisible(prev => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, i * 100);
      }, 0.15);
    });

    // Buttons
    observe(actionsRef.current, () => setActionsVisible(true), 0.2);

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const fadeUp = (visible: boolean, delay = 0) => ({
    opacity:    visible ? 1 : 0,
    transform:  visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  });

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/60 border-t border-slate-200/60 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">

        {/* Header */}
        <div
          ref={headerRef}
          style={fadeUp(headerVisible)}
          className="max-w-3xl mx-auto space-y-5 mb-14 sm:mb-16"
        >
          <div>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-xs font-semibold uppercase tracking-wider shadow-2xs">
              All-in-One Solution
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
            Manage Smarter<span className="text-blue-600">.</span>
            <br className="hidden sm:inline" /> Grow Faster<span className="text-blue-600">.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Inn Handler brings your bookings, guests, operations, and revenue together in one powerful platform. Save time, reduce errors, and focus on what matters most — your guests.
          </p>
        </div>

        {/* 4 Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-slate-200/80 mb-14 sm:mb-16">
          {benefits.map((item, i) => (
            <div
              key={item.title}
              ref={el => { cardRefs.current[i] = el; }}
              style={fadeUp(cardsVisible[i], i * 80)}
              className="flex flex-col items-center px-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50/90 border border-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-100/90 transition-all duration-300 shadow-xs">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-[200px] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action Buttons + Social Proof */}
        <div ref={actionsRef} style={fadeUp(actionsVisible, 60)}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="#start"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 px-7 py-3.5 rounded-full shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Get Started Free</span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>

            <Link
              href="#demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 text-sm sm:text-base font-semibold text-blue-600 hover:text-blue-700 bg-white hover:bg-slate-50 border border-slate-200/90 px-7 py-3.5 rounded-full shadow-sm hover:shadow transition-all duration-200"
            >
              <span>Book a Demo</span>
              <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-3">
            <div className="flex -space-x-2.5 overflow-hidden">
              {[
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
              ].map((src, i) => (
                <img
                  key={i}
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src={src}
                  alt="Property manager"
                  width={32}
                  height={32}
                />
              ))}
            </div>
            <span className="text-xs sm:text-sm text-slate-500 font-medium">
              Trusted by <strong className="font-bold text-blue-600">500+</strong> hotels & property owners worldwide
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
