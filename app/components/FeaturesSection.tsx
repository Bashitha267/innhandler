"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FeatureData {
  id: string;
  tabLabel: string;
  heroTitle: string;
  heroDesc: string;
  imageSrc: string;
  weeklyGoalText: string;
  weeklyGoalProgress: number;
  statBox1: { label: string; value: string };
  statBox2: { label: string; value: string };
  card1Title: string;
  card1Desc: string;
  card1Total: string;
  card1Breakdown: { label: string; count: number; color: string }[];
  card2Title: string;
  card2Desc: string;
  card2Summary: string;
  card2Stat: string;
}

export default function FeaturesSection() {
  const features: FeatureData[] = [
    {
      id: "booking",
      tabLabel: "Villa Booking & Calendar",
      heroTitle: "Smart Reservation & Calendar Management",
      heroDesc: "InnHandler streamlines all villa bookings, instant reservation sync, and guest check-ins in one unified interactive calendar view.",
      imageSrc: "/feature_booking.jpg",
      weeklyGoalText: "24 of 25 Villas Booked",
      weeklyGoalProgress: 96,
      statBox1: { label: "Task Streak", value: "14 Days" },
      statBox2: { label: "New Record", value: "96% Occupancy" },
      card1Title: "Track Booking Progress",
      card1Desc: "Track your reservation lifecycle with full visual status cues every step of the way.",
      card1Total: "105 Reservations",
      card1Breakdown: [
        { label: "Confirmed", count: 64, color: "bg-blue-600" },
        { label: "Checked-in", count: 28, color: "bg-emerald-500" },
        { label: "Pending Payment", count: 13, color: "bg-amber-500" },
      ],
      card2Title: "AI-Powered Booking Analytics",
      card2Desc: "Receive real-time forecasting and occupancy trend analyses for your luxury properties.",
      card2Summary: "96% Occupancy Rate",
      card2Stat: "+14.2% vs last month",
    },
    {
      id: "reporting",
      tabLabel: "Reporting & Insights",
      heroTitle: "Activity Tracking & Financial Insights",
      heroDesc: "InnHandler is built to work seamlessly on mobile and desktop devices, ensuring you stay connected to revenue performance from anywhere.",
      imageSrc: "/feature_insights.jpg",
      weeklyGoalText: "Weekly Task Goal (18 of 20 tasks complete)",
      weeklyGoalProgress: 90,
      statBox1: { label: "Task Streak", value: "12 Days" },
      statBox2: { label: "New Record", value: "5 Tasks in a day" },
      card1Title: "Track Task Progress",
      card1Desc: "Track your villa housekeeping & maintenance progress with visual cues at every step.",
      card1Total: "105 Tasks",
      card1Breakdown: [
        { label: "Not started", count: 14, color: "bg-blue-500" },
        { label: "In progress", count: 22, color: "bg-purple-500" },
        { label: "On Review", count: 11, color: "bg-amber-500" },
        { label: "Completed", count: 58, color: "bg-emerald-500" },
      ],
      card2Title: "AI-Powered Weekly Insights",
      card2Desc: "Receive a weekly summary of your team's villa operations progress and revenue consistency.",
      card2Summary: "47 Tasks Completed",
      card2Stat: "+12% vs last week",
    },
    {
      id: "operations",
      tabLabel: "Security & Operations",
      heroTitle: "Housekeeping & Staff Control",
      heroDesc: "Assign tasks to villa staff, set automated room inspection checklists, and restrict staff permissions securely.",
      imageSrc: "/feature_insights.jpg",
      weeklyGoalText: "Cleanliness Rating (9.9 of 10)",
      weeklyGoalProgress: 99,
      statBox1: { label: "Staff Active", value: "8 Members" },
      statBox2: { label: "Avg Turnaround", value: "32 Mins" },
      card1Title: "Staff Operations Progress",
      card1Desc: "Monitor room cleaning status and inventory restocking across all property units.",
      card1Total: "48 Rooms Cleaned",
      card1Breakdown: [
        { label: "Deep Clean", count: 18, color: "bg-emerald-500" },
        { label: "Standard Inspection", count: 24, color: "bg-blue-500" },
        { label: "Pending Restock", count: 6, color: "bg-amber-500" },
      ],
      card2Title: "Staff Efficiency Insights",
      card2Desc: "Track staff response times and maintenance resolution speeds in real-time.",
      card2Summary: "99.2% On-Time Completion",
      card2Stat: "+8% efficiency gain",
    },
    {
      id: "integrations",
      tabLabel: "Multi-Channel Integrations",
      heroTitle: "Instant 2-Way OTA Channel Synchronization",
      heroDesc: "Automatically sync calendars, rates, and guest messaging with Airbnb, Booking.com, Vrbo, and your direct booking engine.",
      imageSrc: "/feature_booking.jpg",
      weeklyGoalText: "Channel Sync Rate (100%)",
      weeklyGoalProgress: 100,
      statBox1: { label: "Channels Connected", value: "4 Major OTAs" },
      statBox2: { label: "Double Bookings", value: "0 Incidents" },
      card1Title: "Channel Revenue Distribution",
      card1Desc: "View direct bookings vs third-party OTA booking channel performance breakdown.",
      card1Total: "LKR 2.4M Direct",
      card1Breakdown: [
        { label: "Direct Engine", count: 64, color: "bg-blue-600" },
        { label: "Airbnb", count: 22, color: "bg-rose-500" },
        { label: "Booking.com", count: 14, color: "bg-sky-500" },
      ],
      card2Title: "Commission Savings Insights",
      card2Desc: "Calculate total commission saved by driving direct guest bookings through InnHandler.",
      card2Summary: "LKR 380,000 Saved",
      card2Stat: "Zero OTA Commission",
    },
    {
      id: "crossplatform",
      tabLabel: "Cross-Platform Mobile Access",
      heroTitle: "Manage Properties Anywhere on Any Device",
      heroDesc: "Full native mobile experience on iOS & Android. Receive push notifications for new guest reservations and urgent tasks.",
      imageSrc: "/feature_insights.jpg",
      weeklyGoalText: "Mobile Uptime (99.99%)",
      weeklyGoalProgress: 100,
      statBox1: { label: "Device Sync", value: "Instant" },
      statBox2: { label: "Push Alerts", value: "Real-Time" },
      card1Title: "Mobile Activity Log",
      card1Desc: "Track manager check-ins and quick actions executed from mobile phones.",
      card1Total: "142 Mobile Actions",
      card1Breakdown: [
        { label: "Guest Messaging", count: 72, color: "bg-purple-600" },
        { label: "Payment Approval", count: 48, color: "bg-emerald-500" },
        { label: "Price Adjustments", count: 22, color: "bg-blue-500" },
      ],
      card2Title: "Remote Management Efficiency",
      card2Desc: "Property managers save an average of 14 hours per week using mobile quick controls.",
      card2Summary: "14 Hours Saved / Wk",
      card2Stat: "Manage From Anywhere",
    },
  ];

  const [activeTabId, setActiveTabId] = useState<string>("reporting");
  const activeFeature = features.find((f) => f.id === activeTabId) || features[1];

  return (
    <section id="features" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Header Row matching reference image */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-slate-400">
              Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              One Platform to Manage All Your Work
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed font-normal">
            Keep your team organized, aligned, and productive with one powerful workspace that boosts collaboration and efficiency across all your villa properties.
          </p>
        </div>

        {/* 2-Column Main Layout: Left Vertical Sidebar & Right Feature Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Vertical Sidebar Menu */}
          <div className="lg:col-span-4 flex flex-col space-y-2 border-l border-slate-200/80 pl-2">
            {features.map((feature) => {
              const isActive = feature.id === activeTabId;
              return (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => setActiveTabId(feature.id)}
                  className={`group relative flex items-center justify-between px-5 py-4 rounded-2xl text-left text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-white text-slate-950 shadow-sm border border-slate-200/80"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-100/60"
                  }`}
                >
                  <span className="leading-snug">{feature.tabLabel}</span>

                  {/* Active Indicator Orange/Blue Circle Arrow Icon */}
                  {isActive && (
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/30 animate-pulse-subtle">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Feature Display Area (Animated transition on tab change) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Top Large Feature Hero Card */}
            <div
              key={activeFeature.id}
              className="relative rounded-3xl overflow-hidden bg-slate-900 text-white shadow-2xl min-h-[360px] sm:min-h-[400px] flex flex-col justify-end p-6 sm:p-8 transition-all duration-500 transform-gpu animate-fadeIn"
            >
              {/* Background Feature Image */}
              <Image
                src={activeFeature.imageSrc}
                alt={activeFeature.heroTitle}
                fill
                className="object-cover object-center opacity-70 transition-transform duration-700 hover:scale-105"
              />
              {/* Gradient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              {/* Overlaid Floating Widget Cards on top right */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 max-w-xs space-y-2.5 z-20">
                {/* Goal Widget Card */}
                <div className="bg-white/90 backdrop-blur-md text-slate-900 p-3 rounded-2xl shadow-lg border border-white/40">
                  <div className="flex items-center justify-between text-xs font-bold mb-1">
                    <span>{activeFeature.weeklyGoalText}</span>
                    <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full text-[10px]">On Track</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full transition-all duration-700"
                      style={{ width: `${activeFeature.weeklyGoalProgress}%` }}
                    />
                  </div>
                </div>

                {/* 2 Stat Boxes */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white/90 backdrop-blur-md p-2.5 rounded-2xl shadow-lg border border-white/40 text-center">
                    <div className="text-[10px] text-slate-500 font-bold uppercase">{activeFeature.statBox1.label}</div>
                    <div className="text-xs sm:text-sm font-extrabold text-slate-900 mt-0.5">{activeFeature.statBox1.value}</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-md p-2.5 rounded-2xl shadow-lg border border-white/40 text-center">
                    <div className="text-[10px] text-slate-500 font-bold uppercase">{activeFeature.statBox2.label}</div>
                    <div className="text-xs sm:text-sm font-extrabold text-blue-600 mt-0.5">{activeFeature.statBox2.value}</div>
                  </div>
                </div>
              </div>

              {/* Bottom Left Hero Overlay Text */}
              <div className="relative z-20 max-w-lg space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {activeFeature.heroTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                  {activeFeature.heroDesc}
                </p>
              </div>
            </div>

            {/* Bottom 2 Grid Detail Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 1: Track Task Progress */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-slate-900">{activeFeature.card1Title}</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{activeFeature.card1Desc}</p>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-extrabold text-slate-900">
                    <span>Total Activity</span>
                    <span className="text-blue-600">{activeFeature.card1Total}</span>
                  </div>

                  {/* Multi-color Progress Strip */}
                  <div className="w-full h-2 rounded-full overflow-hidden flex gap-0.5 mt-2 bg-slate-100">
                    {activeFeature.card1Breakdown.map((item) => (
                      <div
                        key={item.label}
                        className={`h-full ${item.color}`}
                        style={{ width: `${(item.count / 105) * 100}%` }}
                      />
                    ))}
                  </div>

                  {/* Breakdown List */}
                  <div className="grid grid-cols-2 gap-2 mt-3 text-[11px] text-slate-600 font-medium">
                    {activeFeature.card1Breakdown.map((item) => (
                      <div key={item.label} className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${item.color}`} />
                        <span>{item.label}: <strong>{item.count}</strong></span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card 2: AI-Powered Weekly Insights */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-slate-900">{activeFeature.card2Title}</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{activeFeature.card2Desc}</p>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-900">{activeFeature.card2Summary}</span>
                    <span className="text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full text-[10px]">
                      ↗ {activeFeature.card2Stat}
                    </span>
                  </div>

                  {/* Line Chart Visual Representation */}
                  <div className="mt-4 h-24 w-full bg-slate-50/80 rounded-2xl p-2 border border-slate-100 flex items-end justify-between gap-1">
                    {[35, 50, 42, 68, 85, 96, 70].map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                        <div
                          className="w-full bg-gradient-to-t from-blue-500 to-sky-400 rounded-t transition-all duration-500"
                          style={{ height: `${val}%` }}
                        />
                        <span className="text-[8px] font-semibold text-slate-400">
                          {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"][idx]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
