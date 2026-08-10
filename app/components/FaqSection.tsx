"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("01");

  const faqs: FaqItem[] = [
    {
      id: "01",
      number: "01",
      question: "What is Inn Handler?",
      answer:
        "Inn Handler is an all-in-one hotel & villa management system that helps you manage bookings, guests, housekeeping, payments, and reports — all from a single dashboard.",
    },
    {
      id: "02",
      number: "02",
      question: "Who is Inn Handler for?",
      answer:
        "Inn Handler is built specifically for boutique hotels, luxury villa managers, vacation rental hosts, and resort operators managing anywhere from 1 to 50+ properties.",
    },
    {
      id: "03",
      number: "03",
      question: "What features does Inn Handler offer?",
      answer:
        "Inn Handler includes multi-channel OTA calendar sync (Airbnb, Booking.com, Vrbo), direct booking engine, housekeeping task assignment, guest messaging, and real-time revenue analytics.",
    },
    {
      id: "04",
      number: "04",
      question: "Can I try Inn Handler before subscribing?",
      answer:
        "Yes! We offer a 14-day free trial with full access to all premium features — no credit card required to get started.",
    },
    {
      id: "05",
      number: "05",
      question: "Is my data safe with Inn Handler?",
      answer:
        "Absolutely. We enforce bank-grade SSL encryption, automated daily backups, and strict role-based permissions to guarantee your property data remains 100% secure.",
    },
    {
      id: "06",
      number: "06",
      question: "How do I get started?",
      answer:
        "Getting started takes less than 5 minutes. Click 'Start Free Trial', add your property details, and link your booking channels with our automated setup wizard.",
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-slate-50/70 border-t border-slate-200/60 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Centered Header Section matching reference image */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-xs font-semibold uppercase tracking-wider shadow-2xs">
              FAQ
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
            Frequently Asked Questions
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Find answers to the most common questions about Inn Handler and how it can help your hotel business.
          </p>
        </div>

        {/* Accordion Cards Stack */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-blue-300 shadow-md ring-2 ring-blue-500/10"
                    : "border-slate-200/80 shadow-xs hover:border-slate-300 hover:shadow-sm"
                }`}
              >
                {/* Accordion Header Bar */}
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between text-left gap-4 select-none focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="text-xs sm:text-sm font-extrabold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">
                      {faq.number}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-950">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-blue-600 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 bg-blue-50" : ""
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Animated Accordion Body Content */}
                {isOpen && (
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 mt-1 animate-fadeIn">
                    <p className="pl-11 sm:pl-14 pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Callout Box */}
        <div className="bg-blue-50/80 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-11 h-11 rounded-2xl bg-white text-blue-600 flex items-center justify-center shrink-0 shadow-xs border border-blue-100">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Still have questions?</h4>
              <p className="text-xs text-slate-500">Our support team is here to help you.</p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 bg-white hover:bg-blue-600 hover:text-white px-5 py-2.5 rounded-full shadow-xs border border-blue-200/80 transition-all duration-200"
          >
            <span>Contact Us</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
