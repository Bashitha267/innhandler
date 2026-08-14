"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface CoreFeatureCard {
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
  icon: React.ReactNode;
}

interface KeyFeatureBullet {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  desc: string;
}

interface SidebarFeature {
  id: string;
  tabLabel: string;
  headline: string;
  description: string;
  imageSrc: string;
  keyFeatures: KeyFeatureBullet[];
}

export default function FeaturesSection() {
  // 1. The 3x2 Core Feature Cards Grid matching user's exact specification
  const coreFeatures: CoreFeatureCard[] = [
    {
      title: "Property & Room Management",
      description: "Add and manage multiple properties, rooms, rates and availability with ease and accuracy.",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: "Booking Management",
      description: "View, create and manage bookings with a real-time calendar and smart availability control.",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Guest Management",
      description: "Store guest details, track history, and build stronger relationships for repeat stays.",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: "Payment Management",
      description: "Track payments, invoices, deposits, and pending balances in one centralized system.",
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Tasks & Operations",
      description: "Assign tasks, track housekeeping, maintenance, and daily operations efficiently.",
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-600",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Reports & Insights",
      description: "Get real-time reports and insights to make smarter decisions and grow your business.",
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-600",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
        </svg>
      ),
    },
  ];

  // 2. Sidebar Interactive Features with Soft Rounded Icon Boxes
  const sidebarFeatures: SidebarFeature[] = [
    {
      id: "booking",
      tabLabel: "Villa Booking & Calendar",
      headline: "Smart Reservation Grid & Real-Time Availability",
      description:
        "View, create, and manage bookings across all your properties with a dynamic calendar, smart availability controls, and automated check-in/out tracking.",
      imageSrc: "/feature_booking.jpg",
      keyFeatures: [
        {
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          ),
          title: "Interactive Timeline Grid",
          desc: "Manage daily, weekly, and monthly reservations visually.",
        },
        {
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          ),
          title: "Multi-Property Filtering",
          desc: "Switch between individual villas or monitor your entire portfolio at once.",
        },
        {
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          ),
          title: "Flexible Booking Flow",
          desc: "Select rooms first and defer payment collection until guest arrival.",
        },
        {
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          ),
          title: "Instant PDF Invoices",
          desc: "Auto-generate branded single-page receipts upon booking confirmation.",
        },
      ],
    },
    {
      id: "payments",
      tabLabel: "Payments & Invoice Generation",
      headline: "Automated Invoicing & Instant Payment Receipts",
      description:
        "Generate branded, itemized guest invoices with automatic room charges, spa services, dining, and multi-channel payment transaction tracking.",
      imageSrc: "/feature_insights.jpg",
      keyFeatures: [
        {
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          ),
          title: "Instant PDF Invoices",
          desc: "Auto-generate branded, single-page guest receipts and itemized folios upon confirmation.",
        },
        {
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          title: "Multi-Payment Split & Logs",
          desc: "Accept cash, bank transfers, credit cards, and deposits with full audit timestamps.",
        },
        {
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          ),
          title: "Itemized Billing Folios",
          desc: "Seamlessly bundle room stays, spa treatments, food, and airport transfers into one bill.",
        },
        {
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          title: "Live Settlement Status",
          desc: "Real-time indicators for Paid in Full, Pending, and Partial balances to prevent leakage.",
        },
      ],
    },
    {
      id: "staffpayments",
      tabLabel: "Staff Payments & Payroll",
      headline: "Staff Salary Sheets, Overtime & Payout Reports",
      description:
        "Generate automated monthly staff payment reports, track base salaries, overtime allowances, service charge shares, and manage payout statuses seamlessly.",
      imageSrc: "/feature_insights.jpg",
      keyFeatures: [
        {
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          ),
          title: "Monthly Staff Salary Reports",
          desc: "Generate itemized payroll sheets, overtime logs, and single-click downloadable PDF payslips.",
        },
        {
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          title: "Allowances & Overtime Calculator",
          desc: "Automatically calculate overtime hours, tip pools, and service charge distributions.",
        },
        {
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
            </svg>
          ),
          title: "Advance & Deduction Ledger",
          desc: "Track salary advances, loans, and statutory deductions with clear receipts and balances.",
        },
        {
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          title: "Real-Time Payout Status",
          desc: "Instant live indicators for Paid in Full, Pending, and Partial salary disbursements.",
        },
      ],
    },
    {
      id: "statustracking",
      tabLabel: "Room, Maintenance & Payment Status",
      headline: "Real-Time Room Status, Maintenance & Payments",
      description:
        "Monitor live room availability, housekeeping turnovers, maintenance repairs, and guest payment statuses across your properties in real-time.",
      imageSrc: "/feature_insights.jpg",
      keyFeatures: [
        {
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          title: "Live Room & Housekeeping Status",
          desc: "Real-time indicators for Vacant Ready, Occupied, Cleaning, and Inspected rooms.",
        },
        {
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          title: "Guest Folio Payment Status",
          desc: "Live visibility of Paid in Full, Advance Collected, and Pending Balances per room.",
        },
        {
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          ),
          title: "Maintenance Work Orders",
          desc: "Track plumbing, AC, and deep cleaning repairs with instant resolution status logs.",
        },
        {
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
            </svg>
          ),
          title: "Instant Room Lock & Release",
          desc: "Lock rooms for maintenance or release them immediately once inspected.",
        },
      ],
    },
    {
      id: "reporting",
      tabLabel: "Reporting & Insights",
      headline: "Financial Analytics & Performance Insights",
      description:
        "Monitor your villa performance with interactive metrics, automated monthly revenue summaries, and real-time occupancy trends.",
      imageSrc: "/feature_insights.jpg",
      keyFeatures: [
        {
          iconBg: "bg-indigo-50",
          iconColor: "text-indigo-600",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
            </svg>
          ),
          title: "Interactive KPI Cards",
          desc: "Click on Occupancy, Check-ins, Revenue, or Pending Balances for detailed popup logs.",
        },
        {
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          title: "Compact Revenue Tracking",
          desc: "View daily, monthly, and seasonal earnings with formatted currency trends.",
        },
        {
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          ),
          title: "Pending Payment Reports",
          desc: "Easily identify outstanding balances and settled transactions.",
        },
        {
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          ),
          title: "Occupancy Forecasting",
          desc: "Track guest stay patterns to optimize pricing and maximize revenue.",
        },
      ],
    },
    {
      id: "ota",
      tabLabel: "Booking.com & OTA Integration",
      headline: "Booking.com & Unified Channel Management",
      description:
        "Connect your villa listings across Booking.com, Airbnb, Agoda, and direct booking engines with automated 2-way calendar sync to eliminate double bookings.",
      imageSrc: "/feature_booking.jpg",
      keyFeatures: [
        {
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          ),
          title: "Centralized Rate Control",
          desc: "Adjust room rates and minimum stay rules across channels from one screen.",
        },
        {
          iconBg: "bg-cyan-50",
          iconColor: "text-cyan-600",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          ),
          title: "Booking.com Channel Sync",
          desc: "Keep calendars instantly aligned across Booking.com, Airbnb, Agoda, and direct bookings.",
        },
        {
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          ),
          title: "Single Portal Management",
          desc: "View Booking.com and third-party reservations alongside your direct villa bookings.",
        },
        {
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
          ),
          title: "Seasonal Pricing Rules",
          desc: "Update peak season and off-season pricing dynamically.",
        },
      ],
    },
    {
      id: "crossplatform",
      tabLabel: "Cross-Platform Access",
      headline: "Manage Your Villas Anywhere, On Any Device",
      description:
        "Access your entire property management suite seamlessly on desktop, tablet, and mobile with a fast, responsive interface.",
      imageSrc: "/feature_insights.jpg",
      keyFeatures: [
        {
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          ),
          title: "PWA Home Screen App",
          desc: "Install directly on iOS and Android devices for one-tap access.",
        },
        {
          iconBg: "bg-emerald-50",
          iconColor: "text-emerald-600",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          ),
          title: "Adaptive Glassmorphic Interface",
          desc: "Optimized for fast touch controls on mobile and full desktop displays.",
        },
        {
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          ),
          title: "Instant Toast Notifications",
          desc: "Get immediate alerts for new bookings, check-ins, and payments.",
        },
        {
          iconBg: "bg-rose-50",
          iconColor: "text-rose-600",
          icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ),
          title: "High-Speed Performance",
          desc: "Lightweight, reliable operation even on mobile data connections.",
        },
      ],
    },
  ];

  const [activeTabId, setActiveTabId] = useState<string>("booking");
  const activeSidebarFeature = sidebarFeatures.find((f) => f.id === activeTabId) || sidebarFeatures[0];

  return (
    <section id="features" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase tracking-wider font-semibold text-blue-600">
              ALL IN ONE MANAGEMENT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
              One Platform to Manage Every Aspect
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed font-normal">
            Inn Handler brings all your property operations together in one place so you can focus on delivering great guest experiences.
          </p>
        </div>

        {/* SECTION 1: 3x2 Core Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 sm:mb-24">
          {coreFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-2xl ${feature.iconBg} ${feature.iconColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-xs`}>
                  {feature.icon}
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors group/link"
                >
                  <span>Learn more</span>
                  <svg className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* SECTION 2: Interactive Vertical Sidebar & Detailed Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Vertical Sidebar Menu */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            {sidebarFeatures.map((feature) => {
              const isActive = feature.id === activeTabId;
              return (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => setActiveTabId(feature.id)}
                  className={`group flex items-center justify-between px-6 py-4 rounded-2xl text-left text-sm sm:text-base font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-white text-slate-950 shadow-md border border-slate-200/90 ring-1 ring-blue-500/10"
                      : "bg-white/50 text-slate-600 hover:text-slate-950 hover:bg-white/80 border border-slate-200/50"
                  }`}
                >
                  <span>{feature.tabLabel}</span>

                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 scale-105"
                        : "bg-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Feature Showcase Area */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Interactive Feature Container */}
            <div
              key={activeSidebarFeature.id}
              className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-200/90 p-4 sm:p-6 animate-tab-fade transform-gpu"
            >
              {/* TAB 1: Villa Booking & Calendar */}
              {activeSidebarFeature.id === "booking" && (
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-slate-200/80">
                    <div>
                      <h3 className="text-base font-extrabold text-slate-950 leading-tight">Dashboard</h3>
                      <p className="text-[10px] text-slate-500 font-medium">Monitoring 44 rooms and current occupancy.</p>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <div className="bg-slate-100 p-0.5 rounded-lg flex items-center text-[9px] font-bold">
                        <span className="bg-white text-blue-600 px-2 py-0.5 rounded shadow-2xs">Calendar</span>
                        <span className="text-slate-600 px-2 py-0.5">Timeline</span>
                      </div>
                      <span className="bg-amber-500 text-white px-2 py-0.5 rounded text-[9px] font-bold">✓ Availability</span>
                      <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-[9px] font-bold">+ Add Booking</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
                    <div className="bg-slate-50 p-1.5 rounded-xl border border-slate-200/60 text-center">
                      <div className="text-[7px] text-slate-400 font-bold uppercase truncate">OCCUPANCY RATE</div>
                      <div className="text-xs font-black text-slate-900 mt-0.5">78%</div>
                      <div className="text-[6px] text-emerald-600 font-bold">↗ +8.2% vs yesterday</div>
                    </div>

                    <div className="bg-slate-50 p-1.5 rounded-xl border border-slate-200/60 text-center">
                      <div className="text-[7px] text-slate-400 font-bold uppercase truncate">CHECK-IN</div>
                      <div className="text-xs font-black text-slate-900 mt-0.5">14</div>
                      <div className="text-[6px] text-emerald-600 font-bold">↗ +3 from yesterday</div>
                    </div>

                    <div className="bg-slate-50 p-1.5 rounded-xl border border-slate-200/60 text-center">
                      <div className="text-[7px] text-slate-400 font-bold uppercase truncate">CHECK-OUT</div>
                      <div className="text-xs font-black text-slate-900 mt-0.5">8</div>
                      <div className="text-[6px] text-emerald-600 font-bold">↗ +2 from yesterday</div>
                    </div>

                    <div className="bg-slate-50 p-1.5 rounded-xl border border-slate-200/60 text-center">
                      <div className="text-[7px] text-slate-400 font-bold uppercase truncate">REVENUE</div>
                      <div className="text-[9px] font-black text-slate-900 mt-0.5">Rs. 312,500</div>
                      <div className="text-[6px] text-emerald-600 font-bold">↗ +18.4% vs last month</div>
                    </div>

                    <div className="bg-slate-50 p-1.5 rounded-xl border border-slate-200/60 text-center">
                      <div className="text-[7px] text-slate-400 font-bold uppercase truncate">PENDING</div>
                      <div className="text-[9px] font-black text-slate-900 mt-0.5">Rs. 42,000</div>
                      <div className="text-[6px] text-emerald-600 font-bold">↗ +12.0% vs last month</div>
                    </div>

                    <div className="bg-slate-50 p-1.5 rounded-xl border border-slate-200/60 text-center">
                      <div className="text-[7px] text-slate-400 font-bold uppercase truncate">AVAILABLE</div>
                      <div className="text-xs font-black text-slate-900 mt-0.5">36</div>
                      <div className="text-[6px] text-emerald-600 font-bold">↗ +4 from yesterday</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-2 pt-1">
                    <div className="col-span-8 bg-slate-50 p-3 rounded-2xl border border-slate-200/80">
                      <div className="flex items-center justify-between text-[10px] font-bold mb-1.5">
                        <span className="text-slate-900">Booking Overview (May 2026)</span>
                        <span className="text-blue-600">All Properties ▾</span>
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-center text-[7px] font-bold text-slate-400 pb-1 border-b border-slate-200">
                        <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
                      </div>

                      {/* Relative Layer Container for Date Matrix & Overlay Booking Bars */}
                      <div className="relative pt-2 pb-1">
                        {/* BASE LAYER: Continuous 30 Sharp Black Date Grid (Dates under bookings have slightly reduced opacity) */}
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

                        {/* OVERLAY LAYER: Balanced sweet-spot vertical alignment */}
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

                          {/* Row 2 Booking Bar (Balanced sweet spot offset: mt-[1.72rem]) */}
                          <div className="grid grid-cols-7 gap-1 text-[6.5px] font-extrabold mt-[1.72rem]">
                            <div className="col-start-2 col-span-4 bg-blue-400/35 border border-blue-500/70 text-blue-950 rounded-md px-2 py-1 flex items-center truncate shadow-2xs">
                              David Miller - Rm 202
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-4 bg-slate-50 p-3 rounded-2xl border border-slate-200/80 flex flex-col justify-between text-[9px]">
                      <div>
                        <div className="font-bold text-slate-900 mb-1">Payment Summary</div>
                        <div className="w-14 h-14 rounded-full border-4 border-emerald-500 border-t-amber-400 mx-auto flex items-center justify-center bg-white my-1 font-bold text-[7px]">
                          82% Paid
                        </div>
                        <div className="space-y-1.5 text-[8px] font-bold mt-2">
                          <div className="flex justify-between">
                            <span className="text-emerald-600">● Total Paid</span>
                            <span>Rs. 248,500</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-amber-500">● Pending</span>
                            <span>Rs. 42,000</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: Payments & Invoice Generation */}
              {activeSidebarFeature.id === "payments" && (
                <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-xs text-xs space-y-4 font-sans select-none">
                  
                  {/* Invoice Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 pb-3 border-b border-slate-200/80">
                    <div>
                      <h3 className="text-base sm:text-lg font-black tracking-tight text-slate-950">
                        VILLA SERENITY PALACE
                      </h3>
                      <p className="text-[10px] text-slate-500 mt-0.5">
                        68/17, Beach Road, Mirissa, Sri Lanka
                      </p>
                      <p className="text-[10px] text-slate-500">
                        Contact: +94 77 123 4567
                      </p>
                    </div>

                    <div className="text-right">
                      <div className="text-sm sm:text-base font-black tracking-wider text-slate-950">
                        INVOICE
                      </div>
                      <div className="text-[11px] font-bold text-slate-700 mt-0.5">
                        Booking #0034
                      </div>
                      <span className="inline-block mt-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[9px] font-extrabold px-2 py-0.5 rounded">
                        PAID
                      </span>
                    </div>
                  </div>

                  {/* 2-Column Guest & Reservation Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Guest Profile */}
                    <div className="space-y-1 bg-slate-50/70 p-2.5 rounded-xl border border-slate-100">
                      <div className="text-[8px] font-bold tracking-wider uppercase text-slate-400">
                        GUEST PROFILE
                      </div>
                      <div className="text-xs sm:text-sm font-black text-slate-950">
                        Sunil Perera
                      </div>
                      <div className="text-[10px] text-slate-600 space-y-0.5 pt-0.5">
                        <p><span className="text-slate-400">NIC/Passport:</span> 942381024V</p>
                        <p><span className="text-slate-400">Origin:</span> Sri Lanka</p>
                        <p><span className="text-slate-400">Address:</span> 68/17, Isuru Mw, Yakkala</p>
                        <p><span className="text-slate-400">Occupancy:</span> 2 Adults, 1 Child</p>
                      </div>
                    </div>

                    {/* Reservation Details */}
                    <div className="space-y-1 bg-slate-50/70 p-2.5 rounded-xl border border-slate-100">
                      <div className="text-[8px] font-bold tracking-wider uppercase text-slate-400">
                        RESERVATION DETAILS
                      </div>
                      <div className="text-xs sm:text-sm font-black text-slate-950">
                        Room 101
                      </div>
                      <div className="text-[9px] font-bold text-slate-500 uppercase">
                        COUPLE ROOM (AC)
                      </div>
                      <div className="text-[10px] text-slate-700 space-y-0.5 pt-0.5">
                        <p>Check-in: 2026-06-02 <span className="font-bold text-blue-600">at 2:00 PM</span></p>
                        <p>Check-out: 2026-06-03 <span className="font-bold text-amber-600">at 11:00 AM</span></p>
                        <p className="font-bold text-slate-900 pt-0.5">Length of Stay: 1 Night</p>
                      </div>
                    </div>
                  </div>

                  {/* Cost Breakdown Table */}
                  <div className="space-y-1.5">
                    <div className="text-[8px] font-bold tracking-wider uppercase text-slate-400">
                      COST BREAKDOWN
                    </div>
                    <div className="border border-slate-200/80 rounded-xl overflow-hidden shadow-2xs">
                      <table className="w-full text-left text-[9.5px]">
                        <thead className="bg-slate-50 text-slate-500 border-b border-slate-200/80 font-bold uppercase text-[7.5px]">
                          <tr>
                            <th className="py-1.5 px-2.5">Item Description</th>
                            <th className="py-1.5 px-2 text-right">Rate</th>
                            <th className="py-1.5 px-2 text-center">Qty/Nights</th>
                            <th className="py-1.5 px-2.5 text-right">Amount</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          <tr className="hover:bg-slate-50/50">
                            <td className="py-1.5 px-2.5 font-medium text-slate-800">
                              Room Stay Charge (Room 101 - Couple Room AC)
                            </td>
                            <td className="py-1.5 px-2 text-right text-slate-600">Rs. 25,000.00</td>
                            <td className="py-1.5 px-2 text-center text-slate-600">1</td>
                            <td className="py-1.5 px-2.5 text-right font-bold text-slate-900">Rs. 25,000.00</td>
                          </tr>
                          <tr className="hover:bg-slate-50/50">
                            <td className="py-1.5 px-2.5 font-medium text-slate-800">
                              Ayurveda Spa Package (2026-06-29)
                            </td>
                            <td className="py-1.5 px-2 text-right text-slate-600">Rs. 12,000.00</td>
                            <td className="py-1.5 px-2 text-center text-slate-600">1</td>
                            <td className="py-1.5 px-2.5 text-right font-bold text-slate-900">Rs. 12,000.00</td>
                          </tr>
                          <tr className="bg-slate-50/70 font-bold border-t border-slate-200">
                            <td colSpan={3} className="py-1.5 px-2.5 text-right uppercase text-[8px] text-slate-500">
                              TOTAL
                            </td>
                            <td className="py-1.5 px-2.5 text-right font-black text-slate-950">
                              Rs. 37,000.00
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Payment Transaction Log Table */}
                  <div className="space-y-1.5">
                    <div className="text-[8px] font-bold tracking-wider uppercase text-slate-400">
                      PAYMENT TRANSACTION LOG
                    </div>
                    <div className="border border-slate-200/80 rounded-xl overflow-hidden shadow-2xs">
                      <table className="w-full text-left text-[9.5px]">
                        <thead className="bg-slate-50 text-slate-500 border-b border-slate-200/80 font-bold uppercase text-[7.5px]">
                          <tr>
                            <th className="py-1.5 px-2.5">Payment Method</th>
                            <th className="py-1.5 px-2">Date</th>
                            <th className="py-1.5 px-2 text-center">Status</th>
                            <th className="py-1.5 px-2.5 text-right">Amount Received</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          <tr className="hover:bg-slate-50/50">
                            <td className="py-1.5 px-2.5 font-bold text-slate-900 flex items-center gap-1.5">
                              <span>CASH</span>
                              <span className="bg-slate-100 text-slate-600 text-[7px] font-bold px-1.5 py-0.5 rounded">
                                ADVANCE
                              </span>
                            </td>
                            <td className="py-1.5 px-2 text-slate-600">2026-06-29</td>
                            <td className="py-1.5 px-2 text-center">
                              <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[8px] font-bold px-1.5 py-0.5 rounded">
                                PAID
                              </span>
                            </td>
                            <td className="py-1.5 px-2.5 text-right font-bold text-emerald-600">
                              + Rs. 12,000.00
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50/50">
                            <td className="py-1.5 px-2.5 font-bold text-slate-900 flex items-center gap-1.5">
                              <span>CASH</span>
                              <span className="bg-slate-100 text-slate-600 text-[7px] font-bold px-1.5 py-0.5 rounded">
                                SETTLEMENT
                              </span>
                            </td>
                            <td className="py-1.5 px-2 text-slate-600">2026-06-29</td>
                            <td className="py-1.5 px-2 text-center">
                              <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[8px] font-bold px-1.5 py-0.5 rounded">
                                PAID
                              </span>
                            </td>
                            <td className="py-1.5 px-2.5 text-right font-bold text-emerald-600">
                              + Rs. 25,000.00
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Grand Total & Status Bar */}
                  <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                    <div className="text-[10px] font-medium text-slate-500">
                      Generated automatically by <strong className="text-blue-600 font-bold">InnHandler</strong>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="flex items-baseline justify-end gap-2">
                        <span className="text-[8px] uppercase tracking-wider font-bold text-slate-400">
                          GRAND TOTAL
                        </span>
                        <span className="text-sm sm:text-base font-black text-slate-950">
                          Rs. 37,000.00
                        </span>
                      </div>
                      <div className="flex items-center justify-end gap-1.5">
                        <span className="text-[8px] uppercase tracking-wider font-bold text-slate-400">
                          PAYMENT STATUS
                        </span>
                        <span className="bg-emerald-600 text-white font-bold text-[8.5px] px-2 py-0.5 rounded-full shadow-2xs">
                          ✓ PAID IN FULL
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              )}

              {/* TAB 3: Staff Payments & Payroll */}
              {activeSidebarFeature.id === "staffpayments" && (
                <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-xs space-y-4 font-sans select-none text-slate-900">
                  
                  {/* Top Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                        Staff Payroll &amp; Disbursements
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-950 mt-0.5">
                        Staff Payment Reports &amp; Salary Sheets
                      </h3>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="bg-blue-50 text-blue-700 border border-blue-100 text-[9px] font-bold px-2.5 py-1 rounded-full">
                        May 2026 Payroll
                      </span>
                      <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[9px] font-bold px-2.5 py-1 rounded-full">
                        92% Disbursed
                      </span>
                    </div>
                  </div>

                  {/* 4 KPI Summary Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <div className="bg-slate-50/80 p-2.5 rounded-xl border border-slate-200/70 shadow-2xs">
                      <span className="text-[7.5px] text-slate-400 font-bold uppercase tracking-wider block">TOTAL PAYROLL</span>
                      <div className="text-xs sm:text-sm font-black text-slate-950 mt-0.5">Rs. 485,000</div>
                      <span className="text-[7px] text-slate-500 font-medium">12 Staff Members</span>
                    </div>

                    <div className="bg-slate-50/80 p-2.5 rounded-xl border border-slate-200/70 shadow-2xs">
                      <span className="text-[7.5px] text-slate-400 font-bold uppercase tracking-wider block">TOTAL DISBURSED</span>
                      <div className="text-xs sm:text-sm font-black text-emerald-600 mt-0.5">Rs. 420,000</div>
                      <span className="text-[7px] text-emerald-600 font-bold">✓ 10 Settled</span>
                    </div>

                    <div className="bg-slate-50/80 p-2.5 rounded-xl border border-slate-200/70 shadow-2xs">
                      <span className="text-[7.5px] text-slate-400 font-bold uppercase tracking-wider block">PENDING PAYOUTS</span>
                      <div className="text-xs sm:text-sm font-black text-amber-600 mt-0.5">Rs. 65,000</div>
                      <span className="text-[7px] text-amber-600 font-bold">● 2 Processing</span>
                    </div>

                    <div className="bg-slate-50/80 p-2.5 rounded-xl border border-slate-200/70 shadow-2xs">
                      <span className="text-[7.5px] text-slate-400 font-bold uppercase tracking-wider block">ALLOWANCES / OT</span>
                      <div className="text-xs sm:text-sm font-black text-blue-600 mt-0.5">Rs. 50,000</div>
                      <span className="text-[7px] text-blue-600 font-bold">Service Share Incl.</span>
                    </div>
                  </div>

                  {/* Staff Payment Reports Table */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] font-bold tracking-wider uppercase text-slate-400">
                        MONTHLY STAFF SALARY &amp; PAYOUT BREAKDOWN
                      </span>
                      <span className="text-[8px] font-bold text-blue-600">Download Excel / CSV ▾</span>
                    </div>

                    <div className="border border-slate-200/80 rounded-xl overflow-hidden shadow-2xs">
                      <table className="w-full text-left text-[9.5px]">
                        <thead className="bg-slate-50 text-slate-500 border-b border-slate-200/80 font-bold uppercase text-[7.5px]">
                          <tr>
                            <th className="py-2 px-2.5">Staff &amp; Role</th>
                            <th className="py-2 px-2 text-right">Base Salary</th>
                            <th className="py-2 px-2 text-right">Allowances/OT</th>
                            <th className="py-2 px-2 text-right">Deductions</th>
                            <th className="py-2 px-2 text-right">Net Payout</th>
                            <th className="py-2 px-2.5 text-center">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 bg-white">
                          <tr className="hover:bg-slate-50/50">
                            <td className="py-2 px-2.5">
                              <div className="font-bold text-slate-950">Kamal Silva</div>
                              <div className="text-[7.5px] text-slate-500 font-medium">Head Chef • Kitchen</div>
                            </td>
                            <td className="py-2 px-2 text-right text-slate-600 font-medium">Rs. 70,000.00</td>
                            <td className="py-2 px-2 text-right text-emerald-600 font-bold">+Rs. 15,000.00</td>
                            <td className="py-2 px-2 text-right text-slate-400">Rs. 0.00</td>
                            <td className="py-2 px-2 text-right font-black text-slate-950">Rs. 85,000.00</td>
                            <td className="py-2 px-2.5 text-center">
                              <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[8px] font-bold px-2 py-0.5 rounded">
                                ✓ PAID
                              </span>
                            </td>
                          </tr>

                          <tr className="hover:bg-slate-50/50">
                            <td className="py-2 px-2.5">
                              <div className="font-bold text-slate-950">Nimal Fernando</div>
                              <div className="text-[7.5px] text-slate-500 font-medium">Lead Housekeeper</div>
                            </td>
                            <td className="py-2 px-2 text-right text-slate-600 font-medium">Rs. 55,000.00</td>
                            <td className="py-2 px-2 text-right text-emerald-600 font-bold">+Rs. 10,000.00</td>
                            <td className="py-2 px-2 text-right text-slate-400">Rs. 0.00</td>
                            <td className="py-2 px-2 text-right font-black text-slate-950">Rs. 65,000.00</td>
                            <td className="py-2 px-2.5 text-center">
                              <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[8px] font-bold px-2 py-0.5 rounded">
                                ✓ PAID
                              </span>
                            </td>
                          </tr>

                          <tr className="hover:bg-slate-50/50">
                            <td className="py-2 px-2.5">
                              <div className="font-bold text-slate-950">Ruwan Perera</div>
                              <div className="text-[7.5px] text-slate-500 font-medium">Villa Chauffeur</div>
                            </td>
                            <td className="py-2 px-2 text-right text-slate-600 font-medium">Rs. 45,000.00</td>
                            <td className="py-2 px-2 text-right text-emerald-600 font-bold">+Rs. 15,000.00</td>
                            <td className="py-2 px-2 text-right text-rose-500 font-bold">-Rs. 5,000.00</td>
                            <td className="py-2 px-2 text-right font-black text-slate-950">Rs. 55,000.00</td>
                            <td className="py-2 px-2.5 text-center">
                              <span className="bg-amber-50 text-amber-700 border border-amber-200 text-[8px] font-bold px-2 py-0.5 rounded">
                                PENDING
                              </span>
                            </td>
                          </tr>

                          <tr className="hover:bg-slate-50/50">
                            <td className="py-2 px-2.5">
                              <div className="font-bold text-slate-950">Priyani Jayasuriya</div>
                              <div className="text-[7.5px] text-slate-500 font-medium">Front Desk Specialist</div>
                            </td>
                            <td className="py-2 px-2 text-right text-slate-600 font-medium">Rs. 50,000.00</td>
                            <td className="py-2 px-2 text-right text-emerald-600 font-bold">+Rs. 10,000.00</td>
                            <td className="py-2 px-2 text-right text-slate-400">Rs. 0.00</td>
                            <td className="py-2 px-2 text-right font-black text-slate-950">Rs. 60,000.00</td>
                            <td className="py-2 px-2.5 text-center">
                              <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[8px] font-bold px-2 py-0.5 rounded">
                                ✓ PAID
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-[10px]">
                    <div className="text-slate-500 font-medium">
                      Net Payroll: <strong className="text-slate-950 font-bold">Rs. 485,000.00</strong> (Disbursed: <strong className="text-emerald-600 font-bold">Rs. 420,000.00</strong>)
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-[9px] font-bold px-3 py-1 rounded-lg transition-colors cursor-pointer">
                        Export Payslips (PDF)
                      </span>
                      <span className="bg-blue-600 hover:bg-blue-700 text-white text-[9px] font-bold px-3 py-1 rounded-lg shadow-2xs transition-colors cursor-pointer">
                        + Process Payouts
                      </span>
                    </div>
                  </div>

                </div>
              )}

              {/* TAB 4: Real-Time Room, Maintenance & Payment Status */}
              {activeSidebarFeature.id === "statustracking" && (
                <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-xs space-y-4 font-sans select-none text-slate-900">
                  
                  {/* Top Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                        Live Property Monitoring
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-950 mt-0.5">
                        Real-Time Room Status, Maintenance &amp; Payments
                      </h3>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[9px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        84% Occupancy
                      </span>
                      <span className="bg-blue-50 text-blue-700 border border-blue-100 text-[9px] font-bold px-2.5 py-1 rounded-full">
                        44 Total Rooms
                      </span>
                    </div>
                  </div>

                  {/* 4 KPI Summary Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <div className="bg-slate-50/80 p-2.5 rounded-xl border border-slate-200/70 shadow-2xs">
                      <span className="text-[7.5px] text-slate-400 font-bold uppercase tracking-wider block">AVAILABLE READY</span>
                      <div className="text-xs sm:text-sm font-black text-emerald-600 mt-0.5">11 Rooms</div>
                      <span className="text-[7px] text-emerald-600 font-bold">● Clean &amp; Inspected</span>
                    </div>

                    <div className="bg-slate-50/80 p-2.5 rounded-xl border border-slate-200/70 shadow-2xs">
                      <span className="text-[7.5px] text-slate-400 font-bold uppercase tracking-wider block">OCCUPIED</span>
                      <div className="text-xs sm:text-sm font-black text-blue-600 mt-0.5">2 Rooms</div>
                      <span className="text-[7px] text-blue-600 font-bold">● Active Guest Stays</span>
                    </div>

                    <div className="bg-slate-50/80 p-2.5 rounded-xl border border-slate-200/70 shadow-2xs">
                      <span className="text-[7.5px] text-slate-400 font-bold uppercase tracking-wider block">CLEANING</span>
                      <div className="text-xs sm:text-sm font-black text-amber-600 mt-0.5">1 Room</div>
                      <span className="text-[7px] text-amber-600 font-bold">🔄 Linen Turnaround</span>
                    </div>

                    <div className="bg-slate-50/80 p-2.5 rounded-xl border border-slate-200/70 shadow-2xs">
                      <span className="text-[7.5px] text-slate-400 font-bold uppercase tracking-wider block">MAINTENANCE</span>
                      <div className="text-xs sm:text-sm font-black text-rose-600 mt-0.5">1 Room</div>
                      <span className="text-[7px] text-rose-600 font-bold">⛔ Scheduled Service</span>
                    </div>
                  </div>

                  {/* Real-Time Room & Maintenance Status Table */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] font-bold tracking-wider uppercase text-slate-400">
                        LIVE ROOM STATUS &amp; MAINTENANCE REASON LOG
                      </span>
                      <span className="text-[8px] font-bold text-blue-600">All Wings ▾</span>
                    </div>

                    <div className="border border-slate-200/80 rounded-xl overflow-hidden shadow-2xs">
                      <table className="w-full text-left text-[9.5px]">
                        <thead className="bg-slate-50 text-slate-500 border-b border-slate-200/80 font-bold uppercase text-[7.5px]">
                          <tr>
                            <th className="py-2.5 px-3 w-1/4">Room Number</th>
                            <th className="py-2.5 px-3 w-1/4">Current Status</th>
                            <th className="py-2.5 px-3 w-1/2">Reason / Maintenance Details</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 bg-white">
                          <tr className="hover:bg-slate-50/50">
                            <td className="py-2.5 px-3">
                              <div className="font-bold text-slate-950">Room 101</div>
                              <div className="text-[7.5px] text-slate-500 font-medium">Ground Floor Deluxe</div>
                            </td>
                            <td className="py-2.5 px-3">
                              <span className="bg-blue-50 text-blue-700 border border-blue-200 text-[8px] font-bold px-2.5 py-0.5 rounded whitespace-nowrap inline-block">
                                ● OCCUPIED
                              </span>
                            </td>
                            <td className="py-2.5 px-3 text-slate-700 font-medium">
                              Guest in-house (3 Nights) • Routine pre-arrival inspection passed
                            </td>
                          </tr>

                          <tr className="hover:bg-slate-50/50">
                            <td className="py-2.5 px-3">
                              <div className="font-bold text-slate-950">Room 102</div>
                              <div className="text-[7.5px] text-slate-500 font-medium">Deluxe Ocean View</div>
                            </td>
                            <td className="py-2.5 px-3">
                              <span className="bg-amber-50 text-amber-700 border border-amber-200 text-[8px] font-bold px-2.5 py-0.5 rounded whitespace-nowrap inline-block">
                                🔄 CLEANING
                              </span>
                            </td>
                            <td className="py-2.5 px-3 text-slate-700 font-medium">
                              Guest checked out (11:00 AM) • Deep cleaning &amp; linen change in progress
                            </td>
                          </tr>

                          <tr className="hover:bg-slate-50/50">
                            <td className="py-2.5 px-3">
                              <div className="font-bold text-slate-950">Room 104</div>
                              <div className="text-[7.5px] text-slate-500 font-medium">Executive Suite</div>
                            </td>
                            <td className="py-2.5 px-3">
                              <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[8px] font-bold px-2.5 py-0.5 rounded whitespace-nowrap inline-block">
                                ✓ AVAILABLE
                              </span>
                            </td>
                            <td className="py-2.5 px-3 text-slate-700 font-medium">
                              Ready for check-in • AC servicing &amp; filter replacement completed
                            </td>
                          </tr>

                          <tr className="hover:bg-slate-50/50">
                            <td className="py-2.5 px-3">
                              <div className="font-bold text-slate-950">Room 105</div>
                              <div className="text-[7.5px] text-slate-500 font-medium">Garden Pavilion</div>
                            </td>
                            <td className="py-2.5 px-3">
                              <span className="bg-rose-50 text-rose-700 border border-rose-200 text-[8px] font-bold px-2.5 py-0.5 rounded whitespace-nowrap inline-block">
                                ⛔ MAINTENANCE
                              </span>
                            </td>
                            <td className="py-2.5 px-3 text-rose-700 font-medium">
                              Room blocked • Plumbing valve repair &amp; leak fix in progress
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-[10px]">
                    <div className="text-slate-500 font-medium">
                      Status Summary: <strong className="text-emerald-700 font-bold">11 Ready</strong> • <strong className="text-amber-700 font-bold">1 Cleaning</strong> • <strong className="text-rose-700 font-bold">1 Blocked</strong> • <strong className="text-blue-700 font-bold">1 Occupied</strong>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-[9px] font-bold px-3 py-1 rounded-lg transition-colors cursor-pointer">
                        Filter by Status ▾
                      </span>
                      <span className="bg-blue-600 hover:bg-blue-700 text-white text-[9px] font-bold px-3 py-1 rounded-lg shadow-2xs transition-colors cursor-pointer">
                        + Block Room
                      </span>
                    </div>
                  </div>

                </div>
              )}

              {/* TAB 4: Reporting & Insights */}
              {activeSidebarFeature.id === "reporting" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                    <div>
                      <h3 className="text-base font-extrabold text-slate-950 leading-tight">Reports & Analytics</h3>
                      <p className="text-[10px] text-slate-500 font-medium">Real-time revenue, performance flow, and payment breakdowns.</p>
                    </div>
                    <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2.5 py-1 rounded-md border border-blue-100">
                      Live Reports
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
                    {/* Card 1: Blue Theme */}
                    <div className="bg-white p-2.5 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col justify-between h-20">
                      <div className="text-[7.5px] text-slate-400 font-bold uppercase tracking-wider truncate">
                        GROSS REVENUE
                      </div>
                      <div className="text-xs font-black text-blue-600 mt-0.5 leading-none">
                        Rs. 312.5k <span className="text-[7.5px] text-blue-600 font-semibold">+18%</span>
                      </div>
                      <div className="w-full h-1 bg-slate-100 rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-blue-600 w-4/5" />
                      </div>
                    </div>

                    {/* Card 2: Amber Theme */}
                    <div className="bg-white p-2.5 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col justify-between h-20">
                      <div className="text-[7.5px] text-slate-400 font-bold uppercase tracking-wider truncate">
                        PENDING PAYMENTS
                      </div>
                      <div className="text-xs font-black text-amber-500 mt-0.5 leading-none">
                        Rs. 42.0k <span className="text-[7.5px] text-amber-600 font-semibold">+12%</span>
                      </div>
                      <div className="w-full h-1 bg-slate-100 rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-amber-500 w-3/5" />
                      </div>
                    </div>

                    {/* Card 3: Rose Theme */}
                    <div className="bg-white p-2.5 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col justify-between h-20">
                      <div className="text-[7.5px] text-slate-400 font-bold uppercase tracking-wider truncate">
                        REFUNDED PAYMENTS
                      </div>
                      <div className="text-xs font-black text-rose-500 mt-0.5 leading-none">
                        Rs. 8.5k <span className="text-[7.5px] text-rose-500 font-semibold">-2%</span>
                      </div>
                      <div className="w-full h-1 bg-slate-100 rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-rose-500 w-1/4" />
                      </div>
                    </div>

                    {/* Card 4: Indigo Theme */}
                    <div className="bg-white p-2.5 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col justify-between h-20">
                      <div className="text-[7.5px] text-slate-400 font-bold uppercase tracking-wider truncate">
                        TOTAL DISCOUNTS
                      </div>
                      <div className="text-xs font-black text-indigo-600 mt-0.5 leading-none">
                        Rs. 12.0k <span className="text-[7.5px] text-indigo-600 font-semibold">+5%</span>
                      </div>
                      <div className="w-full h-1 bg-slate-100 rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-indigo-600 w-1/3" />
                      </div>
                    </div>

                    {/* Card 5: Emerald Theme */}
                    <div className="bg-white p-2.5 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col justify-between h-20">
                      <div className="text-[7.5px] text-slate-400 font-bold uppercase tracking-wider truncate">
                        CURRENT OCCUPANCY
                      </div>
                      <div className="text-xs font-black text-emerald-600 mt-0.5 leading-none">
                        78% <span className="text-[7.5px] text-emerald-600 font-semibold">+8%</span>
                      </div>
                      <div className="w-full h-1 bg-slate-100 rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-emerald-600 w-4/5" />
                      </div>
                    </div>

                    {/* Card 6: Violet Theme */}
                    <div className="bg-white p-2.5 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col justify-between h-20">
                      <div className="text-[7.5px] text-slate-400 font-bold uppercase tracking-wider truncate">
                        NET PROFIT
                      </div>
                      <div className="text-xs font-black text-violet-600 mt-0.5 leading-none">
                        Rs. 250.0k <span className="text-[7.5px] text-violet-600 font-semibold">+15%</span>
                      </div>
                      <div className="w-full h-1 bg-slate-100 rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-violet-600 w-4/5" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-2 pt-1">
                    <div className="col-span-7 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs">
                      <div className="flex items-center justify-between text-[10px] font-bold mb-2">
                        <span className="text-slate-900">Performance Flow</span>
                        <span className="text-emerald-600 text-[8px] font-semibold bg-emerald-50 px-2 py-0.5 rounded">↑ +18.4% Growth</span>
                      </div>
                      <div className="h-28 w-full bg-slate-50/60 rounded-xl p-2 border border-slate-100 flex items-end justify-between gap-1 relative">
                        <svg className="absolute inset-0 w-full h-full p-2" viewBox="0 0 200 80" preserveAspectRatio="none">
                          <path d="M0 60 Q 30 50, 60 30 T 120 40 T 180 15 L 200 10" fill="none" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
                          <path d="M0 60 Q 30 50, 60 30 T 120 40 T 180 15 L 200 10 L 200 80 L 0 80 Z" fill="url(#blueGradient)" opacity="0.15" />
                          <defs>
                            <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#2563EB" />
                              <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                        </svg>

                        <div className="absolute bottom-1 left-2 right-2 flex justify-between text-[7px] font-bold text-slate-400">
                          <span>JAN</span><span>MAR</span><span>MAY</span><span>JUL</span><span>SEP</span><span>NOV</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-5 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col justify-between text-[9px]">
                      <div>
                        <div className="font-bold text-slate-900 mb-1 text-[10px]">Total & Pending Payments</div>

                        <div className="w-14 h-14 rounded-full border-4 border-emerald-500 border-t-amber-400 mx-auto flex items-center justify-center bg-slate-50 my-1 font-bold text-[7px]">
                          82% Paid
                        </div>

                        <div className="space-y-1.5 text-[8px] font-bold mt-2">
                          <div className="flex justify-between">
                            <span className="text-emerald-600">● Total Paid</span>
                            <span>Rs. 248,500</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-amber-500">● Pending</span>
                            <span>Rs. 42,000</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: Booking.com & OTA Integration (Light Theme) */}
              {activeSidebarFeature.id === "ota" && (
                <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-xs space-y-4 font-sans select-none text-slate-900">
                  
                  {/* Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                        Channel Integrations
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-950 mt-0.5">
                        Unified Channel Management
                      </h3>
                    </div>
                    <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[9px] font-bold px-2.5 py-1 rounded-full">
                      Zero Double Bookings
                    </span>
                  </div>

                  {/* Channel Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      { name: "Booking.com", sync: "Updated 1m ago", status: "Connected", bg: "bg-blue-50/70 border-blue-200/80 text-blue-950" },
                      { name: "Airbnb", sync: "Updated 2m ago", status: "Connected", bg: "bg-rose-50/60 border-rose-200/80 text-rose-950" },
                      { name: "Agoda", sync: "Updated 3m ago", status: "Connected", bg: "bg-emerald-50/60 border-emerald-200/80 text-emerald-950" },
                      { name: "Direct Engine", sync: "Real-Time", status: "Active", bg: "bg-sky-50/60 border-sky-200/80 text-sky-950" },
                    ].map((ch) => (
                      <div key={ch.name} className={`p-3 rounded-xl border ${ch.bg} flex flex-col justify-between space-y-2 shadow-2xs`}>
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-xs">{ch.name}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <div>
                          <div className="text-[7.5px] text-slate-500 font-medium">{ch.sync}</div>
                          <div className="text-[9px] font-bold text-emerald-700">● {ch.status}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Sync Table */}
                  <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-200/80 space-y-2 text-[10px]">
                    <div className="flex justify-between text-slate-400 font-bold text-[8px] uppercase tracking-wider">
                      <span>Recent Channel Activity</span>
                      <span>Status</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                        <span className="text-slate-800 font-medium">Booking.com: New Reservation (Villa Suite 102 - 3 Nights)</span>
                        <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[8px] font-bold px-2 py-0.5 rounded">
                          Blocked on Airbnb
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <span className="text-slate-800 font-medium">Direct Booking: Room 104 Rate Updated to Rs. 28,000</span>
                        <span className="bg-blue-50 text-blue-700 border border-blue-200 text-[8px] font-bold px-2 py-0.5 rounded">
                          Updated on All Channels
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 5: Cross-Platform Access (100% Light Theme) */}
              {activeSidebarFeature.id === "crossplatform" && (
                <div className="bg-white rounded-2xl p-4 sm:p-5 text-slate-900 overflow-hidden relative shadow-xs space-y-4 font-sans select-none border border-slate-200/90">
                  
                  {/* Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                        Multi-Device Experience
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-950 mt-0.5">
                        Manage Your Villas Anywhere, On Any Device
                      </h3>
                    </div>
                    <span className="bg-blue-50 text-blue-700 border border-blue-100 text-[9px] font-bold px-2.5 py-1 rounded-full">
                      Desktop • Tablet • Mobile
                    </span>
                  </div>

                  {/* Multi-Device Visual Mockup */}
                  <div className="grid grid-cols-12 gap-3 items-center py-1 relative">
                    
                    {/* 1. Desktop Screen Mockup (Left 7 Cols - Light Window) */}
                    <div className="col-span-7 bg-white rounded-xl border border-slate-200 shadow-sm p-2 space-y-2">
                      <div className="flex items-center justify-between pb-1.5 border-b border-slate-100 bg-slate-50/80 -m-2 mb-0 p-2 rounded-t-xl">
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        </div>
                        <span className="text-[7.5px] font-mono text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200 shadow-2xs">
                          🔒 innhandler.com/app
                        </span>
                        <span className="text-[7px] font-bold text-slate-500">Desktop Web</span>
                      </div>
                      
                      <div className="bg-slate-50/70 rounded-lg p-2 space-y-1.5 text-[8px] text-slate-900 border border-slate-100">
                        <div className="flex justify-between items-center font-bold">
                          <span className="text-slate-800">Villa Dashboard (44 Rooms)</span>
                          <span className="text-emerald-600 text-[7px]">● 84% Occupied</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1 text-[7px]">
                          <div className="bg-white p-1.5 rounded-lg border border-slate-200/80 shadow-2xs">
                            <span className="text-slate-400 block text-[5.5px] font-bold uppercase">TODAY IN</span>
                            <span className="font-extrabold text-slate-900 text-[8.5px]">14</span>
                          </div>
                          <div className="bg-white p-1.5 rounded-lg border border-slate-200/80 shadow-2xs">
                            <span className="text-slate-400 block text-[5.5px] font-bold uppercase">CHECK-OUT</span>
                            <span className="font-extrabold text-slate-900 text-[8.5px]">8</span>
                          </div>
                          <div className="bg-white p-1.5 rounded-lg border border-slate-200/80 shadow-2xs">
                            <span className="text-slate-400 block text-[5.5px] font-bold uppercase">REVENUE</span>
                            <span className="font-extrabold text-blue-600 text-[8.5px]">312k</span>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <div className="flex-1 bg-emerald-50 border border-emerald-200 text-emerald-800 p-1 rounded-md text-[6.5px] font-bold truncate shadow-2xs">
                            Rm 101 - Alex Morgan
                          </div>
                          <div className="flex-1 bg-amber-50 border border-amber-200 text-amber-800 p-1 rounded-md text-[6.5px] font-bold truncate shadow-2xs">
                            Rm 104 - Sarah Jenkins
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 2. Mobile Phone Mockup (Right 5 Cols - Light Theme) */}
                    <div className="col-span-5 bg-white rounded-2xl border-2 border-slate-300 p-2 shadow-lg relative space-y-1.5 -ml-2 z-10">
                      <div className="w-8 h-1 bg-slate-300 rounded-full mx-auto" />
                      
                      <div className="bg-slate-50 rounded-xl p-2 space-y-1.5 text-[8px] border border-slate-200/80">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-900 text-[8px]">Mobile PWA</span>
                          <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[6px] font-bold px-1.5 py-0.5 rounded">Active</span>
                        </div>

                        <div className="bg-blue-600 p-1.5 rounded-lg text-white space-y-0.5 shadow-2xs">
                          <div className="text-[6px] uppercase font-bold text-blue-100">Quick Check-in</div>
                          <div className="text-[8.5px] font-extrabold">Room 202 - Ready</div>
                        </div>

                        <div className="space-y-1 text-[6.5px]">
                          <div className="flex justify-between items-center bg-white p-1 rounded border border-slate-200 shadow-2xs">
                            <span className="text-slate-800 font-medium truncate">David Miller (2N)</span>
                            <span className="text-emerald-600 font-bold">Paid</span>
                          </div>
                          <div className="flex justify-between items-center bg-white p-1 rounded border border-slate-200 shadow-2xs">
                            <span className="text-slate-800 font-medium truncate">Villa Suite 105</span>
                            <span className="text-amber-600 font-bold">Cleaning</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Bottom Feature Badges */}
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100 text-[8px] sm:text-[9px] font-medium text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span>Optimized for Mobile &amp; Tablet</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      <span>Installable (iOS / Android PWA)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                      <span>Touch &amp; Keyboard Friendly</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom 4 Key Feature Bullet Cards (2x2 Grid) with Soft Rounded Icon Boxes matching Image 1 */}
            <div key={`${activeSidebarFeature.id}-features`} className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-tab-fade transform-gpu">
              {activeSidebarFeature.keyFeatures.map((item) => (
                <div
                  key={item.title}
                  className="bg-white/85 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      {/* Soft Rounded Icon Box matching reference image 1 */}
                      <div className={`w-10 h-10 rounded-xl ${item.iconBg} ${item.iconColor} flex items-center justify-center shadow-2xs`}>
                        {item.icon}
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-950">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
