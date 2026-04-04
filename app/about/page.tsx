import type { Metadata } from "next";
import Link from "next/link";
import NavClient from "../components/NavClient";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";

export const metadata: Metadata = { title: "About Us" };

const pillars = [
  { icon: "📋", title: "Strategic Sourcing",       desc: "Global & domestic procurement with deep supplier networks and e-auction capabilities." },
  { icon: "🔗", title: "Supply Chain Management",  desc: "End-to-end oversight — MRP, vendor management, contract administration." },
  { icon: "🏗️", title: "Project Execution",        desc: "Turnkey EPC services from concept to commissioning at the highest quality & safety." },
  { icon: "💡", title: "Value Engineering",         desc: "Cost optimisation through technical innovation without compromising quality." },
];

const keys = [
  "Innovative & cost-effective solutions in products and service provision",
  "Professional quality deliverables, on time — every time",
  "Follow-up strategy to gauge performance and build stakeholder trust",
  "End-to-end engineering product and services capability",
  "Transparent communication with every client and customer",
  "Highest moral principles and dedication to integrity",
];

const offices = [
  { city: "Raipur",    state: "Chhattisgarh" },
  { city: "New Delhi", state: "Delhi" },
  { city: "Nagpur",    state: "Maharashtra" },
  { city: "Hyderabad", state: "Telangana" },
  { city: "Chennai",   state: "Tamil Nadu" },
  { city: "Bangalore", state: "Karnataka" },
  { city: "Mangalore", state: "Karnataka" },
  { city: "Buxar",     state: "Bihar" },
];

export default function AboutPage() {
  return (
    <>
      <NavClient activePath="/about" />

      {/* Page header */}
      <div style={{
        background: "linear-gradient(to bottom, #181d27, var(--bg-base))",
        padding: "9rem 2.5rem 5rem",
        borderBottom: "1px solid var(--border)",
      }}>
        <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
          <div className="section-label"><span>Who We Are</span></div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.05, maxWidth: 700 }}>
            Three Decades of<br /><span style={{ color: "var(--gold)" }}>Engineering</span> Excellence
          </h1>
        </div>
      </div>

      {/* Story */}
      <section style={{ background: "var(--bg-base)", padding: "6rem 2.5rem" }}>
        <div style={{ maxWidth: "1380px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }} className="grid-2-col">
          <div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.15rem", lineHeight: 1.85, color: "var(--text-body)", marginBottom: "1.5rem" }}>
              <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>AdiJey Engineering Solutions (OPC) Private Limited</strong> is a{" "}
              <em>One Stop Engineering Solutions Provider</em>, founded by a BITS Pilani Graduate Engineer with
              over <strong style={{ color: "var(--text-primary)" }}>30 years of versatile industry experience</strong> spanning Strategic Sourcing,
              Supply Chain Management, Global/Domestic Sourcing, Estimation & Costing, Vendor Management,
              Project Management, Fabrication, Erection, Testing and Commissioning.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.15rem", lineHeight: 1.85, color: "var(--text-body)", marginBottom: "2.5rem" }}>
              AdiJey Products & Services are built around generating value, driving high performance in productivity
              and reducing costs through in-depth knowledge, expertise and value engineering. Collaborating with
              multiple OEM / OPM / Service providers, we serve clients across Manufacturing, Oil & Gas, Power,
              Cement, EPC, Fertilizers, Sugar Mills, Chemical, Pharmaceutical, Textile & Rayon industries.
            </p>

            {/* Mission */}
            <div style={{ borderLeft: "2px solid var(--gold)", paddingLeft: "1.5rem", marginBottom: "2.5rem" }}>
              <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.5rem" }}>Mission</div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.12rem", fontStyle: "italic", color: "var(--text-body)", lineHeight: 1.75 }}>
                "To build our reputation for integrity, excellence and leadership as one of the finest
                Engineering Solutions Organizations — by continuously improving standards, constantly striving
                to exceed client expectations, and maintaining the highest moral principles."
              </p>
            </div>

            {/* Ethos */}
            <div style={{ padding: "1.5rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "5px" }}>
              <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.5rem" }}>Our Ethos</div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "var(--text-body)", lineHeight: 1.7 }}>
                Being regarded by <em>all</em> our stakeholders — clients, partners, employees — as
                <strong style={{ color: "var(--text-primary)" }}> honorable and conscientious</strong>.
                Every project, every partnership, every transaction.
              </p>
            </div>
          </div>

          {/* Pillars */}
          <div>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.5rem" }}>
              Core Competencies
            </div>
            <div className="grid-2" style={{ marginBottom: "2rem" }}>
              {pillars.map((p, i) => (
                <div key={i} className="card" style={{ padding: "1.75rem" }}>
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{p.icon}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.4rem" }}>{p.title}</div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "var(--text-muted)", lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              ))}
            </div>

            {/* Keys to success */}
            <div style={{ padding: "1.75rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "6px" }}>
              <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>
                Keys to Success
              </div>
              {keys.map((k, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "0.65rem" }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--gold)", flexShrink: 0, marginTop: 9 }} />
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.65, color: "var(--text-body)" }}>{k}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section style={{ background: "var(--bg-alt)", padding: "5rem 2.5rem", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
          <div className="section-label" style={{ marginBottom: "2rem" }}><span>Pan-India Presence</span></div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "2.5rem" }}>
            Our <span style={{ color: "var(--gold)" }}>Offices</span>
          </h2>
          <div className="grid-4" style={{ gap: "1rem" }}>
            {offices.map(o => (
              <div key={o.city} style={{ padding: "1.5rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "5px" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.2rem" }}>{o.city}</div>
                <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>{o.state}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-base)", padding: "5rem 2.5rem", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1380px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>Work with us</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "var(--text-muted)" }}>Get in touch to discuss your engineering requirements.</p>
          </div>
          <Link href="/contact" className="btn-gold">Send an Enquiry</Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <style>{`.grid-2-col { @media (max-width:900px) { grid-template-columns: 1fr !important; } }`}</style>
    </>
  );
}
