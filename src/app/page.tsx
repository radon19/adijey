"use client"; // Required for state and interval timers

import { useState, useEffect } from "react";
import Header from '@/components/Header';
import Logo from '@/components/Logo';
import Link from "next/link";
import HighlightCard from "@/components/HighlightCard";

// Import your background images here
import Back1 from '@/lib/background/bg1.jpg';
import Back2 from '@/lib/background/bg2.jpg';
import Back3 from '@/lib/background/bg3.jpg';
import Footer from "@/components/Footer";

const stats = [
  { val: "30+", label: "Years Expertise" },
  { val: "8+", label: "Cities Pan-India" },
  { val: "18", label: "Service Verticals" },
  { val: "100+", label: "Industry Clients" },
];

const clients = [
  { name: "Bharat Petroleum", abbr: "BPCL", sector: "Oil & Gas" },
  { name: "Air Products", abbr: "AP", sector: "Chemicals" },
  { name: "Samsung", abbr: "SEC", sector: "Manufacturing" },
  { name: "Acuro", abbr: "ACR", sector: "Water Treatment" },
  { name: "Bullows EPC Pvt. Ltd.", abbr: "BEPC", sector: "EPC" },
  { name: "Cairn Energy", abbr: "CAIRN", sector: "Oil & Gas" },
  { name: "CMG", abbr: "CMG", sector: "Engineering" },
  { name: "Bud Software Consultants", abbr: "BSC", sector: "IT / Consulting" },
];

const approvals = ["MECON", "PDIL", "Avant Garde", "Desein", "EIL", "TCE", "Toyo", "NPCIL", "DAE", "BHEL", "NTPC", "IRS"];

const highlights = [
  { icon: "⚙️", title: "Procurement Outsourcing", href: "/services", desc: "Strategic sourcing, e-auctions, contract management and vendor qualification." },
  { icon: "📦", title: "Material Supply", href: "/portfolio", desc: "18+ product categories — PPE, electrical, C&I, chemicals, structural steel." },
  { icon: "🏗️", title: "Design & EPC", href: "/services", desc: "Turnkey projects: fans, FGD systems, pollution control, material handling." },
  { icon: "🔧", title: "Repair & Overhaul", href: "/services", desc: "Valve servicing, reverse engineering, capital equipment repair across India." },
];

export default function Home() {
  // Array of your images
  const backgrounds = [Back1.src, Back2.src, Back3.src];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Change image every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <div>
      <Header />

      {/* ── HERO ── */}
      <section style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}>

        {/* BACKGROUND LAYERS FOR TRANSITION */}
        {backgrounds.map((bgSrc, index) => (
          <div
            key={bgSrc}
            style={{
              position: "absolute",
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundImage: `url(${bgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transition: "all 1s ease-in-out",
              opacity: index === currentIndex ? 1 : 0,
              filter: index === currentIndex ? "blur(0px)" : "blur(12px)",
              zIndex: index === currentIndex ? 1 : 0,
            }}
          />
        ))}

        {/* OVERLAY FOR TEXT READABILITY */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 2
        }} />

        {/* CONTENT WRAPPER */}
        <div style={{ position: "relative", zIndex: 10, maxWidth: "1380px", margin: "0 auto", padding: "0 5rem", paddingTop: "80px", paddingBottom: "80px" }}>

          {/* Eyebrow */}
          <div className="fade-up" style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
            <div style={{ width: 30, height: 1, background: "var(--gold)" }} />
            <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)" }}>
              Driven by Knowledge &amp; Creating Value
            </span>
          </div>

          <h1 className="fade-up-1 font-sans" style={{
            fontSize: "clamp(3rem, 7vw, 6.5rem)",
            fontWeight: 700, lineHeight: 1.05,
            color: "var(--text-primary)",
            marginBottom: "1.5rem", maxWidth: 1500,
          }}>
            One Stop <br></br>
            Engineering Solutions
          </h1>

          <p className="fade-up-2  tracking-wide font-sans" style={{
            fontSize: "clamp(1rem, 1.4vw, 1.22rem)",
            color: "var(--text-body)",
            lineHeight: 1.8, maxWidth: 710, marginBottom: "1.5rem",
          }}>
            Serving Manufacturing, Oil &amp; Gas, Power, Cement, EPC, Fertilizers,
            Chemical, Pharmaceutical and Textile industries across India
            with quality, reliability and precision.
          </p>

          <div className="fade-up-3" style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", marginBottom: "2rem" }}>
            <Link href="/services" className="font-semibold hover:underline">Explore Services</Link>
            <Link href="/contact" className="font-semibold hover:underline" >Get In Touch</Link>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }} className="fade-up-3">
            {stats.map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2.8rem", fontWeight: 700, color: "var(--gold)", lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--text-faint)", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      {/* Background set to white, text defaults to black */}
      <section className="bg-[#FFFAF3] text-black" style={{ padding: "6rem 2.5rem" }}>
        <div style={{ maxWidth: "1380px", margin: "0 auto" }}>

          {/* Grid setup keeps them side-by-side on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <HighlightCard
                key={i}
                href={h.href}
                icon={h.icon}
                title={h.title}
                desc={h.desc}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ── CLIENTS ── */}
      <section style={{ background: "#5f0229", padding: "7rem 2.5rem" }}>
  <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
    
    {/* --- HEADER AREA --- */}
    <div style={{ textAlign: "center", marginBottom: "4rem" }}>
      {/* Eyebrow */}
      <div className="inline-flex items-center gap-3 mb-5">
        <div style={{ width: 30, height: 1, background: "var(--gold)" }} />
        <span className="font-sans text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "var(--gold)" }}>
          Trusted Partners
        </span>
        <div style={{ width: 30, height: 1, background: "var(--gold)" }} />
      </div>
      
      {/* Main Title - Text white to pop on red background */}
      <h2 className="font-sans text-4xl md:text-5xl font-bold text-white mb-4">
        Clients Who <span style={{ color: "var(--gold)" }}>Trust</span> Us
      </h2>
      
      {/* Subtitle - Light gray for readability on red */}
      <p className="font-sans text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
        From India's leading PSUs to global multinationals — consistent value across the board.
      </p>
    </div>

    {/* --- CLIENT CARDS GRID --- */}
    {/* --- CLIENT CARDS GRID --- */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {clients.map((c, i) => (
        <div 
          key={i} 
          className="bg-white rounded-xl p-8 flex flex-col items-center text-center shadow-xl transition-transform hover:-translate-y-1"
        >
          {/* Circular Abbreviation - Now themed to match the red vibe */}
          <div 
            className="w-16 h-16 rounded-full border-2 flex items-center justify-center mb-6"
            style={{ 
              borderColor: "#5f0229", 
              color: "#5f0229", 
              backgroundColor: "rgba(95, 2, 41, 0.05)" // A very faint 5% opacity of your red
            }}
          >
            <span className="font-sans text-sm font-bold tracking-widest">{c.abbr.slice(0, 4)}</span>
          </div>
          
          {/* Company Name */}
          <h3 className="font-sans text-xl font-bold text-gray-900 mb-6">
            {c.name}
          </h3>
          
          {/* Sector Tag */}
          <div className="mt-auto">
            <span className="font-sans text-xs font-bold tracking-[0.15em] uppercase border border-gray-300 rounded px-3 py-1.5 text-gray-500">
              {c.sector}
            </span>
          </div>
        </div>
      ))}
    </div>

    {/* --- APPROVALS BOX --- */}
    <div className="bg-white rounded-xl p-8 md:p-10 shadow-xl border border-gray-100">
      <div 
        className="font-sans text-black font-bold tracking-[0.25em] uppercase text-center mb-6" 
      >
        Approved & Recognised By
      </div>
      
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {approvals.map(a => (
          <span 
            key={a} 
            className="font-sans text-xs font-bold tracking-widest uppercase border border-gray-300 rounded px-4 py-2 text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-colors"
          >
            {a}
          </span>
        ))}
      </div>
    </div>

  </div>
</section>

      {/* ── CTA BAND ── */}
      <section style={{ background: "var(--bg-alt)", padding: "5rem 2.5rem", borderTop: "1px solid var(--border)" }}>
  <div style={{ maxWidth: "1380px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
    
    <div>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
        Ready to work with us?
      </h2>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "1.08rem", color: "var(--text-muted)" }}>
        Tell us your requirement — we'll tailor the right solution.
      </p>
    </div>

    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {/* Primary Action: White box with theme-red text */}
      <Link 
        href="/contact" 
        className="bg-white text-black px-8 py-3 rounded-full font-sans font-bold shadow-md hover:shadow-lg transition-all hover:scale-115"    >
        Send Enquiry
      </Link>
      
      {/* Secondary Action: White box with dark gray text and a subtle border */}
      <Link 
        href="/services" 
        className="bg-white text-black border border-gray-200 px-8 py-3 rounded-full font-sans font-bold shadow-sm hover:shadow-md transition-all hover:scale-115"
      >
        View Services
      </Link>
    </div>

  </div>
</section>
      <Footer />
    </div>
  );
}