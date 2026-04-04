import type { Metadata } from "next";
import Link from "next/link";
import NavClient from "../components/NavClient";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";

export const metadata: Metadata = { title: "Industries" };

const industries = [
  {
    icon: "🏭",
    name: "Manufacturing",
    services: ["Procurement outsourcing", "PPE supply", "Electrical & C&I products", "Structural fabrication"],
    desc: "End-to-end supply and engineering services for heavy manufacturing facilities across India.",
  },
  {
    icon: "🛢️",
    name: "Oil & Gas",
    services: ["Valve servicing & refurbishment", "Pipeline supply", "Instrumentation", "Safety equipment"],
    desc: "Specialised valve, pipeline and instrumentation solutions for upstream and downstream operations.",
  },
  {
    icon: "⚡",
    name: "Power Plants",
    services: ["FGD systems", "Fans & blowers", "Ash handling", "Maintenance services"],
    desc: "Air pollution control, fly ash management, FD/ID fans and complete maintenance partnerships.",
  },
  {
    icon: "🏗️",
    name: "Cement Industry",
    services: ["Bag filters & cyclones", "ESP systems", "Bulk material procurement", "EPC projects"],
    desc: "Air pollution control, conveying equipment and bulk material supply for cement plants.",
  },
  {
    icon: "🔩",
    name: "EPC Projects",
    services: ["Turnkey project management", "Concept to commissioning", "Procurement outsourcing", "Manpower supply"],
    desc: "Full EPC capability — engineering, procurement, construction and commissioning for any scale.",
  },
  {
    icon: "🌿",
    name: "Fertilizer Plants",
    services: ["Specialty chemicals", "Instrumentation", "Equipment supply", "Valve servicing"],
    desc: "Chemicals, C&I instrumentation and equipment supply for fertilizer and agro-chemical plants.",
  },
  {
    icon: "🍬",
    name: "Sugar Mills",
    services: ["Conveying equipment", "Structural fabrication", "Maintenance", "Seasonal shutdowns"],
    desc: "Conveying equipment, structural work and seasonal shutdown support for sugar processing plants.",
  },
  {
    icon: "⚗️",
    name: "Chemical & Pharma",
    services: ["Specialty chemicals", "PPE & safety", "Instrumentation", "Compliance support"],
    desc: "Specialty chemicals, PPE and instrumentation for chemical and pharmaceutical manufacturing.",
  },
  {
    icon: "🧵",
    name: "Textile & Rayon",
    services: ["Industrial equipment", "Maintenance services", "Procurement", "Spare development"],
    desc: "Industrial equipment supply, maintenance services and spare development for textile plants.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <NavClient activePath="/industries" />

      <div style={{ background: "linear-gradient(to bottom, #181d27, var(--bg-base))", padding: "9rem 2.5rem 5rem", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
          <div className="section-label"><span>Sectors We Serve</span></div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.05, maxWidth: 680 }}>
            Sectors We <span style={{ color: "var(--gold)" }}>Power</span>
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", color: "var(--text-body)", maxWidth: 560, marginTop: "1.25rem", lineHeight: 1.8 }}>
            Our multi-sector expertise lets us serve a broad spectrum of industries — each with tailored, cost-effective solutions.
          </p>
        </div>
      </div>

      <section style={{ background: "var(--bg-base)", padding: "6rem 2.5rem" }}>
        <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
          <div className="grid-3" style={{ gap: "1.5rem" }}>
            {industries.map((ind, i) => (
              <div key={i} className="card" style={{ padding: "2.25rem", position: "relative", overflow: "hidden" }}>
                {/* watermark number */}
                <div style={{
                  position: "absolute", top: 10, right: 18,
                  fontFamily: "var(--font-display)", fontSize: "3.5rem", fontWeight: 700,
                  color: "rgba(201,154,64,0.07)", lineHeight: 1, pointerEvents: "none",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>{ind.icon}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.6rem" }}>{ind.name}</div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.25rem" }}>{ind.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                  {ind.services.map((s, j) => (
                    <div key={j} style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--gold-dim)", flexShrink: 0 }} />
                      <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.06em", color: "var(--text-muted)" }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "Not listed?" CTA */}
      <section style={{ background: "var(--bg-alt)", padding: "5rem 2.5rem", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
          <div style={{ padding: "3rem", background: "rgba(201,154,64,0.05)", border: "1px solid var(--border)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                Don't see your industry?
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "var(--text-muted)", maxWidth: 500, lineHeight: 1.75 }}>
                We customise solutions for any industrial sector. Our team has experience across a broad range of operational environments — tell us about your requirement.
              </p>
            </div>
            <Link href="/contact" className="btn-gold">Talk to Our Team →</Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
