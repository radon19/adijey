"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // <-- 1. Import usePathname
import Logo from "./Logo";
import { montserrat } from "@/lib/fonts";

const links = [
  { label: "ABOUT US", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "INDUSTRIES", href: "/industries" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // <-- 2. Get the current URL path

  return (
    <header className="sticky top-0 z-50 h-28 bg-[#ffffff] shadow-sm">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-10">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo className="h-16 w-auto md:h-20" /> 
        </Link>

        {/* Desktop Navigation */}
        <nav className={`${montserrat.className} hidden md:flex md:gap-8 lg:gap-12`}>
          {links.map((link) => {
            // 3. Check if this link is the active page
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[15px] font-bold transition-colors duration-200 
                  ${isActive 
                    ? "text-[#760031] underline decoration-2 underline-offset-[6px]" // ACTIVE STYLE
                    : "text-[#202020] hover:text-[#760031]" // INACTIVE STYLE
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <Link
          href="/contact"
          className={`${montserrat.className} hidden md:inline-flex rounded-full bg-[#760031] px-6 py-3 font-bold text-white transition hover:scale-105 hover:bg-gray-800`}
        >
          CONTACT US
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden p-2 text-[#202020]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
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
            {links.map((link) => {
              // Apply the same active check for the mobile menu
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-bold transition-colors
                    ${isActive 
                      ? "text-[#760031] underline decoration-2 underline-offset-[6px]" // ACTIVE STYLE
                      : "text-[#202020] hover:text-[#760031]" // INACTIVE STYLE
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

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