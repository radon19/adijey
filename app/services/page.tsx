import type { Metadata } from "next";
import Link from "next/link";
import NavClient from "../components/NavClient";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";
import ServicesTab from "../components/ServicesTab";

export const metadata: Metadata = { title: "Services" };

const extras = [
  {
    title: "Turnkey EPC Projects",
    desc: "From Concept to Commissioning — Air pollution control, noise abatement, fans & blowers, FGD systems, fire-fighting systems and material handling equipment for cement, sugar, power, chemical and captive power projects.",
  },
  {
    title: "Valve Servicing & Refurbishment",
    desc: "Complete HP/LP pressure, steam/water/air, gate, globe, butterfly, NRV, safety valves and actuators. In-situ servicing, online safety valve testing, offline test bench, and containerized workshop for turnarounds.",
  },
  {
    title: "Reverse Engineering",
    desc: "Spare development through reverse engineering — specialising in high-speed rotating machines: TG sets, centrifugal pumps, gearboxes, white metal bearings. Chinese and imported equipment spares developed domestically.",
  },
  {
    title: "Fabrication & Erection",
    desc: "Structural steel, PEB/tank/vessel, HP/LP pipeline, duct/chute/hopper/bunker fabrication and erection. Mechanical maintenance, annual overhauling, shutdown/breakdown work and manpower supply.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <NavClient activePath="/services" />

      <div style={{ background: "linear-gradient(to bottom, #181d27, var(--bg-base))", padding: "9rem 2.5rem 5rem", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
          <div className="section-label"><span>What We Offer</span></div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.05, maxWidth: 680 }}>
            Our <span style={{ color: "var(--gold)" }}>Service</span> Capabilities
          </h1>
        </div>
      </div>

      {/* Tabbed services */}
      <section style={{ background: "var(--bg-base)", padding: "6rem 2.5rem" }}>
        <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
          <ServicesTab />
        </div>
      </section>

      {/* Additional services */}
      <section style={{ background: "var(--bg-alt)", padding: "6rem 2.5rem", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
          <div className="section-label" style={{ marginBottom: "2rem" }}><span>Additionally</span></div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "2.5rem" }}>
            Specialised <span style={{ color: "var(--gold)" }}>Capabilities</span>
          </h2>
          <div className="grid-2" style={{ gap: "1.5rem" }}>
            {extras.map((e, i) => (
              <div key={i} className="card" style={{ padding: "2rem" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.75rem" }}>{e.title}</div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", lineHeight: 1.75, color: "var(--text-body)" }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-base)", padding: "5rem 2.5rem", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1380px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>Have a specific requirement?</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "var(--text-muted)" }}>Reach out and we'll find the right solution together.</p>
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link href="/contact" className="btn-gold">Send Enquiry</Link>
            <Link href="/products" className="btn-outline">Browse Products</Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
