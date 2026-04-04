"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "About",      href: "/about" },
  { label: "Services",   href: "/services" },
  { label: "Portfolio",   href: "/products" },
  { label: "Industries", href: "/industries" },
];

// SVG Logo
export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="7" fill="#1c2130"/>
      <rect x="1" y="1" width="42" height="42" rx="6" stroke="#C99A40" strokeWidth="1.5"/>
      <path d="M22 7L34 36H29L22 17.5L15 36H10L22 7Z" fill="#C99A40"/>
      <line x1="13.5" y1="27.5" x2="30.5" y2="27.5" stroke="#1c2130" strokeWidth="2.8"/>
      <circle cx="35" cy="10" r="3.5" fill="#EDD99A"/>
    </svg>
  );
}

export default function NavClient({ activePath }: { activePath?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const headerBg = scrolled
    ? "rgba(20, 24, 32, 0.97)"
    : "transparent";
  const headerBorder = scrolled ? "1px solid rgba(201,154,64,0.18)" : "1px solid transparent";

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: headerBg,
      borderBottom: headerBorder,
      backdropFilter: scrolled ? "blur(18px)" : "none",
      transition: "background 0.3s, border-color 0.3s",
      padding: "0 2.5rem",
    }}>
      <nav style={{
        maxWidth: "1380px", margin: "0 auto",
        height: "68px", display: "flex",
        alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "11px" }}>
          <LogoMark />
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 700, color: "var(--gold-light)", lineHeight: 1, letterSpacing: "0.06em" }}>
              AdiJey
            </div>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--gold-dim)", marginTop: "2px" }}>
              Engineering Solutions
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.15rem" }} className="desktop-nav">
          {links.map(l => {
            const active = activePath === l.href;
            return (
              <Link key={l.href} href={l.href} style={{
                padding: "0.5rem 1rem",
                fontFamily: "var(--font-ui)",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: active ? "var(--gold-light)" : "var(--text-muted)",
                textDecoration: "none",
                borderRadius: "3px",
                borderBottom: active ? "1px solid var(--gold)" : "1px solid transparent",
                transition: "color 0.2s",
              }}
                onMouseEnter={e => !active && (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={e => !active && (e.currentTarget.style.color = "var(--text-muted)")}
              >{l.label}</Link>
            );
          })}
          <Link href="/contact" className="btn-gold" style={{ marginLeft: "1rem", padding: "0.5rem 1.3rem", fontSize: "0.75rem" }}>
            Enquire
          </Link>
        </div>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} aria-label="Menu"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "6px", flexDirection: "column", gap: "5px" }}
          className="burger"
        >
          {[0,1,2].map(i => (
            <span key={i} style={{ display: "block", width: i === 2 ? 16 : 24, height: 2, background: "var(--gold)", borderRadius: 2 }} />
          ))}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div style={{ background: "rgba(20,24,32,0.99)", padding: "0.5rem 2.5rem 1.5rem", borderTop: "1px solid var(--border)" }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              display: "block", padding: "0.85rem 0",
              fontFamily: "var(--font-ui)", fontSize: "0.9rem", fontWeight: 600,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "var(--text-muted)", textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.04)",
            }}>{l.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .burger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
