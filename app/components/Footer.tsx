import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200/80 pt-16 pb-0 text-slate-600 shrink-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-14">
        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 items-start">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group" aria-label="InnHandler Home">
              <Image
                src="/logo.png"
                alt="InnHandler Logo"
                width={240}
                height={80}
                className="h-12 sm:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </Link>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
              Inn Handler is an all-in-one hotel &amp; villa management system that helps you manage operations, guests, bookings, and revenue from a single platform.
            </p>
          </div>

          {/* Column 2: Company Navigation */}
          <div className="space-y-4">
            <div className="space-y-1">
              <h4 className="text-base font-bold text-slate-900">Company</h4>
              <div className="w-8 h-0.5 bg-blue-600 rounded-full" />
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-600">
              <li>
                <Link href="/" prefetch={true} className="hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" prefetch={true} className="hover:text-blue-600 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/solutions" prefetch={true} className="hover:text-blue-600 transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/contact" prefetch={true} className="hover:text-blue-600 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Get in Touch */}
          <div className="space-y-4">
            <div className="space-y-1">
              <h4 className="text-base font-bold text-slate-900">Get in Touch</h4>
              <div className="w-8 h-0.5 bg-blue-600 rounded-full" />
            </div>
            <ul className="space-y-3 text-xs sm:text-sm font-medium text-slate-600">
              <li className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="leading-snug">No. 123, Galle Road, Colombo 03, Sri Lanka</span>
              </li>

              <li className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex flex-wrap gap-x-1.5 leading-snug">
                  <a href="tel:+94112345678" className="hover:text-blue-600 transition-colors">+94 11 2 345 678</a>
                  <span className="text-slate-300">/</span>
                  <a href="tel:+94771234567" className="hover:text-blue-600 transition-colors">+94 77 123 4567</a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="space-y-0.5">
                  <a href="mailto:hello@innhandler.com" className="hover:text-blue-600 transition-colors block">
                    hello@innhandler.com
                  </a>
                  <a href="mailto:support@innhandler.com" className="hover:text-blue-600 transition-colors block text-slate-500">
                    support@innhandler.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect With Us */}
          <div className="space-y-4">
            <div className="space-y-1">
              <h4 className="text-base font-bold text-slate-900">Connect With Us</h4>
              <div className="w-8 h-0.5 bg-blue-600 rounded-full" />
            </div>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Follow our channels for the latest hospitality tips, feature releases, and system updates.
            </p>

            {/* Social Media Buttons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-blue-50/90 hover:bg-blue-600 text-blue-600 hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105 hover:-translate-y-0.5"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-blue-50/90 hover:bg-blue-600 text-blue-600 hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105 hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-blue-50/90 hover:bg-blue-600 text-blue-600 hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105 hover:-translate-y-0.5"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-blue-50/90 hover:bg-blue-600 text-blue-600 hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105 hover:-translate-y-0.5"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="bg-slate-50/90 border-t border-slate-200/80 py-5 px-6 lg:px-12 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Inn Handler. All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6 font-medium text-slate-600">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <span className="text-slate-300">|</span>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
            <span className="text-slate-300">|</span>
            <a href="#" className="hover:text-blue-600 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
