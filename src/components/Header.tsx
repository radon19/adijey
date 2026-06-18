"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { montserrat } from "@/lib/fonts";

const links = [
  { label: "ABOUT US", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "INDUSTRIES", href: "/industries" }, // Fixed typo here
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-28 bg-[#ffffff] shadow-sm">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-10">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo className="h-16 w-auto md:h-20" /> {/* Adjusted height for better mobile fit */}
        </Link>

        {/* Desktop Navigation (Hidden on mobile) */}
        <nav className={`${montserrat.className} hidden md:flex md:gap-8 lg:gap-12`}>
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[15px] font-bold text-[#202020] hover:underline underline-offset-4"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button (Hidden on mobile) */}
        <Link
          href="/contact"
          className={`${montserrat.className} hidden md:inline-flex rounded-full bg-[#760031] px-6 py-3 font-bold text-white transition hover:scale-105 hover:bg-gray-800`}
        >
          CONTACT US
        </Link>

        {/* Mobile Menu Toggle Button (Hidden on desktop) */}
        <button
          className="md:hidden p-2 text-[#202020]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? (
            // "X" Close Icon
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Menu Icon
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-28 w-full bg-white shadow-lg border-t border-gray-100 md:hidden flex flex-col items-center py-8 gap-6 z-40">
          <nav className={`${montserrat.className} flex flex-col items-center gap-6 w-full`}>
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                className="text-lg font-bold text-[#202020] hover:text-[#760031]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile CTA Button */}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`${montserrat.className} mt-4 rounded-full bg-[#760031] px-8 py-3 font-bold text-white transition active:scale-95`}
          >
            CONTACT US
          </Link>
        </div>
      )}
    </header>
  );
}