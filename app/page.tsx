import type { Metadata } from "next";
import Link from "next/link";
import NavClient from "./components/NavClient";
import HeroCanvas from "./components/HeroCanvas";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "AdiJey Engineering Solutions | One Stop Engineering Partner",
};

const stats = [
  { val: "30+",  label: "Years Expertise" },
  { val: "8+",   label: "Cities Pan-India" },
  { val: "18",   label: "Service Verticals" },
  { val: "100+", label: "Industry Clients" },
];

const clients = [
  { name: "Bharat Petroleum",       abbr: "BPCL",  sector: "Oil & Gas" },
  { name: "Air Products",           abbr: "AP",    sector: "Chemicals" },
  { name: "Samsung",                abbr: "SEC",   sector: "Manufacturing" },
  { name: "Acuro",                  abbr: "ACR",   sector: "Water Treatment" },
  { name: "Bullows EPC Pvt. Ltd.",  abbr: "BEPC",  sector: "EPC" },
  { name: "Cairn Energy",           abbr: "CAIRN", sector: "Oil & Gas" },
  { name: "CMG",                    abbr: "CMG",   sector: "Engineering" },
  { name: "Bud Software Consultants", abbr: "BSC", sector: "IT / Consulting" },
];

const approvals = ["MECON","PDIL","Avant Garde","Desein","EIL","TCE","Toyo","NPCIL","DAE","BHEL","NTPC","IRS"];

const highlights = [
  { icon: "⚙️", title: "Procurement Outsourcing", href: "/services", desc: "Strategic sourcing, e-auctions, contract management and vendor qualification." },
  { icon: "📦", title: "Material Supply",          href: "/products",  desc: "18+ product categories — PPE, electrical, C&I, chemicals, structural steel." },
  { icon: "🏗️", title: "Design & EPC",             href: "/services", desc: "Turnkey projects: fans, FGD systems, pollution control, material handling." },
  { icon: "🔧", title: "Repair & Overhaul",        href: "/services", desc: "Valve servicing, reverse engineering, capital equipment repair across India." },
];

export default function HomePage() {
  return (
    <>
      <NavClient />

      {/* ── HERO ── */}
      <section style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "linear-gradient(135deg, #141820 0%, #181d27 55%, #1a2030 100%)",
      }}>
        <HeroCanvas />

        {/* Grid overlay */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `linear-gradient(rgba(201,154,64,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,154,64,0.035) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }} />

        {/* Left accent */}
        <div style={{
          position: "absolute", left: "2.5rem", top: "50%",
          transform: "translateY(-50%)", width: 1, height: 180,
          background: "linear-gradient(to bottom, transparent, var(--gold), transparent)",
        }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: "1380px", margin: "0 auto", padding: "0 5rem", paddingTop: "88px" }}>
          {/* Eyebrow */}
          <div className="fade-up" style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "2rem" }}>
            <div style={{ width: 30, height: 1, background: "var(--gold)" }} />
            <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)" }}>
              Driven by Knowledge &amp; Creating Value
            </span>
          </div>

          <h1 className="fade-up-1" style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 7vw, 6.5rem)",
            fontWeight: 700, lineHeight: 1.05,
            color: "var(--text-primary)",
            marginBottom: "1.5rem", maxWidth: 860,
          }}>
            One Stop<br />
            <span style={{ color: "var(--gold)" }}>Engineering</span><br />
            Solutions
          </h1>

          <p className="fade-up-2" style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 1.4vw, 1.22rem)",
            color: "var(--text-body)",
            lineHeight: 1.8, maxWidth: 540, marginBottom: "2.75rem",
          }}>
            Serving Manufacturing, Oil &amp; Gas, Power, Cement, EPC, Fertilizers,
            Chemical, Pharmaceutical and Textile industries across India
            with quality, reliability and precision.
          </p>

          <div className="fade-up-3" style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", marginBottom: "4.5rem" }}>
            <Link href="/services" className="btn-gold">Explore Services</Link>
            <Link href="/contact" className="btn-outline">Get In Touch</Link>
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

        {/* Decorative ring */}
        <div style={{ position: "absolute", right: "-80px", top: "50%", transform: "translateY(-50%)", width: 540, height: 540, opacity: 0.045, pointerEvents: "none" }}>
          <svg viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="92" stroke="#C99A40" strokeWidth="1"/>
            <circle cx="100" cy="100" r="68" stroke="#C99A40" strokeWidth="0.5"/>
            <circle cx="100" cy="100" r="22" stroke="#C99A40" strokeWidth="1"/>
            {[0,30,60,90,120,150,180,210,240,270,300,330].map(a => (
              <line key={a}
                x1={100 + 68 * Math.cos(a * Math.PI/180)} y1={100 + 68 * Math.sin(a * Math.PI/180)}
                x2={100 + 92 * Math.cos(a * Math.PI/180)} y2={100 + 92 * Math.sin(a * Math.PI/180)}
                stroke="#C99A40" strokeWidth="2.5"/>
            ))}
          </svg>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section style={{ background: "var(--bg-alt)", padding: "6rem 2.5rem" }}>
        <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
          <div className="grid-4" style={{ gap: "1.25rem" }}>
            {highlights.map((h, i) => (
              <Link key={i} href={h.href} style={{ textDecoration: "none" }}>
                <div className="card" style={{ padding: "2rem", height: "100%", cursor: "pointer" }}>
                  <div style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>{h.icon}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.6rem" }}>{h.title}</div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.7, color: "var(--text-muted)" }}>{h.desc}</p>
                  <div style={{ marginTop: "1.25rem", fontFamily: "var(--font-ui)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "var(--gold)", textTransform: "uppercase" }}>
                    Learn more →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENTS ── */}
      <section style={{ background: "var(--bg-base)", padding: "7rem 2.5rem" }}>
        <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "1.25rem" }}>
              <div style={{ width: 28, height: 1, background: "var(--gold)" }} />
              <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)" }}>
                Trusted Partners
              </span>
              <div style={{ width: 28, height: 1, background: "var(--gold)" }} />
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.9rem, 3.5vw, 3rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
              Clients Who <span style={{ color: "var(--gold)" }}>Trust</span> Us
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.08rem", color: "var(--text-muted)", maxWidth: 460, margin: "0 auto", lineHeight: 1.75 }}>
              From India's leading PSUs to global multinationals — consistent value across the board.
            </p>
          </div>

          <div className="grid-4" style={{ gap: "1.25rem", marginBottom: "3rem" }}>
            {clients.map((c, i) => (
              <div key={i} className="card" style={{ padding: "1.75rem 1.5rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "0.7rem" }}>
                <div style={{
                  width: 52, height: 52, borderRadius: "50%",
                  border: "1px solid rgba(201,154,64,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-display)", fontSize: "0.85rem", fontWeight: 700,
                  color: "var(--gold)", background: "rgba(201,154,64,0.07)",
                  letterSpacing: "0.04em",
                }}>{c.abbr.slice(0, 4)}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 600, color: "var(--text-primary)" }}>{c.name}</div>
                <span className="tag">{c.sector}</span>
              </div>
            ))}
          </div>

          {/* Approvals */}
          <div style={{ padding: "2rem 2.5rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "6px" }}>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", textAlign: "center", marginBottom: "1.25rem" }}>
              Approved & Recognised By
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", justifyContent: "center" }}>
              {approvals.map(a => (
                <span key={a} className="tag" style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.15em" }}>{a}</span>
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
            <Link href="/contact" className="btn-gold">Send Enquiry</Link>
            <Link href="/services" className="btn-outline">View Services</Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
