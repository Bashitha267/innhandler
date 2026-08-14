"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    propertyName: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const supportBullets = [
    {
      title: "Expert Support",
      description: "Get expert advice from our hospitality technology specialists.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
      ),
    },
    {
      title: "Quick Response",
      description: "We respond to all inquiries within one business day.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      title: "Trusted by Hotels",
      description: "Join hundreds of hotels already growing their business with Inn Handler.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFD] font-sans">
      <Navbar />

      <main className="flex-1 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12 lg:space-y-14">
          
          {/* ── TOP SECTION: 2-COLUMN SPLIT ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column Content */}
            <div className="lg:col-span-5 space-y-6 pt-2">
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    CONTACT US
                  </span>
                  <span className="w-6 h-0.5 bg-blue-600 rounded-full" />
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
                  We&apos;d Love to <br className="hidden sm:inline" />
                  Hear From You
                </h1>

                <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal pt-1">
                  Have a question, need a demo, or want to learn more about Inn Handler? Our team is here to help you find the right solution for your hotel business.
                </p>
              </div>

              {/* 3 Support Feature Bullets */}
              <div className="space-y-4 pt-2">
                {supportBullets.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100/60 shadow-2xs">
                      {item.icon}
                    </div>
                    <div className="pt-0.5 space-y-0.5">
                      <h3 className="text-sm font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl shadow-slate-200/40">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto text-xl font-bold shadow-xs">
                      ✓
                    </div>
                    <h3 className="text-2xl font-bold text-slate-950">Thank You!</h3>
                    <p className="text-slate-500 max-w-md mx-auto text-xs sm:text-sm leading-relaxed">
                      Your message has been received. Our hospitality specialist will get back to you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: "",
                          email: "",
                          phone: "",
                          propertyName: "",
                          message: "",
                        });
                      }}
                      className="inline-flex items-center px-6 py-2.5 rounded-full bg-blue-600 text-white font-semibold text-xs sm:text-sm hover:bg-blue-700 shadow-md transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
                        Send Us a Message
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Fill out the form and we&apos;ll get back to you soon.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Row 1: Full Name & Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label
                            htmlFor="fullName"
                            className="block text-xs font-semibold text-slate-700"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 transition-all"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label
                            htmlFor="email"
                            className="block text-xs font-semibold text-slate-700"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 transition-all"
                          />
                        </div>
                      </div>

                      {/* Row 2: Phone & Hotel/Property Name */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label
                            htmlFor="phone"
                            className="block text-xs font-semibold text-slate-700"
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 transition-all"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label
                            htmlFor="propertyName"
                            className="block text-xs font-semibold text-slate-700"
                          >
                            Your Hotel / Property Name
                          </label>
                          <input
                            type="text"
                            id="propertyName"
                            name="propertyName"
                            value={formData.propertyName}
                            onChange={handleChange}
                            placeholder="Enter your hotel or property name"
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 transition-all"
                          />
                        </div>
                      </div>

                      {/* Row 3: Message Textarea */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="message"
                          className="block text-xs font-semibold text-slate-700"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us more about your requirements..."
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 transition-all resize-y"
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-xs sm:text-sm hover:bg-blue-700 shadow-md shadow-blue-600/25 hover:shadow-blue-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                        >
                          <svg
                            className="w-4 h-4 text-white -rotate-45 -mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                          </svg>
                          <span>Send Message</span>
                        </button>
                      </div>

                      {/* Privacy Note */}
                      <div className="pt-2 flex items-center gap-1.5 text-[11px] text-slate-400">
                        <svg
                          className="w-3.5 h-3.5 text-slate-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                        <span>We respect your privacy. Your information is secure with us.</span>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* ── BOTTOM SECTION: 4 INDIVIDUAL CONTACT INFO CARDS ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Card 1: Location */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between items-center text-center">
              <div className="space-y-3.5 flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100/60 shadow-2xs mx-auto">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-950">Our Location</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1.5">
                    No. 123, Galle Road,<br />
                    Colombo 03, Sri Lanka
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-2 border-t border-slate-100 w-full flex justify-center">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <span>View on Map</span>
                  <span className="text-sm leading-none">→</span>
                </a>
              </div>
            </div>

            {/* Card 2: Email Us */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between items-center text-center">
              <div className="space-y-3.5 flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100/60 shadow-2xs mx-auto">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-950">Email Us</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1.5">
                    hello@innhandler.com<br />
                    support@innhandler.com
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-2 border-t border-slate-100 w-full flex justify-center">
                <a
                  href="mailto:hello@innhandler.com"
                  className="inline-flex items-center justify-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <span>Send an Email</span>
                  <span className="text-sm leading-none">→</span>
                </a>
              </div>
            </div>

            {/* Card 3: Call Us */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between items-center text-center">
              <div className="space-y-3.5 flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100/60 shadow-2xs mx-auto">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-950">Call Us</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1.5">
                    +94 11 2 345 678<br />
                    +94 77 123 4567
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-2 border-t border-slate-100 w-full flex justify-center">
                <a
                  href="tel:+94112345678"
                  className="inline-flex items-center justify-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <span>Call Now</span>
                  <span className="text-sm leading-none">→</span>
                </a>
              </div>
            </div>

            {/* Card 4: Business Hours */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between items-center text-center">
              <div className="space-y-3.5 flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100/60 shadow-2xs mx-auto">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-950">Business Hours</h3>
                  <div className="text-xs text-slate-500 leading-relaxed mt-1.5 space-y-0.5">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-slate-400">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 mt-2 border-t border-slate-100 w-full flex items-center justify-center gap-1.5 text-xs font-semibold text-emerald-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Support Desk Active</span>
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
