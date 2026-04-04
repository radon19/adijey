"use client";
import type { Metadata } from "next";
import Link from "next/link";
import NavClient from "../components/NavClient";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";



const products = [
  { letter: "A", title: "Industrial Safety PPE",       desc: "Respiratory protection, eye & face protection, head protection, high-visibility apparel, hand & hearing protection, safety shoes, fall protection." },
  { letter: "B", title: "Consumables",                 desc: "Welding electrodes & accessories, filler wires, industrial gases, gaskets, fasteners, sealants, adhesives, cutting tools, abrasive items and office stationeries." },
  { letter: "C", title: "Electrical Products",         desc: "All types of cable & wire (Polycab/KEC/KEI), glands & lugs, MCCB, RCCB, flame-proof junction boxes, aviation lamps, energy meters, micro drives, AC/DC motors." },
  { letter: "D", title: "Control & Instrumentation",   desc: "Authorized representative of Pune Techtrol Pvt. Ltd. — level gauges, switches & transmitters for liquids & solids, ultrasonic/radar/laser transmitters, temperature sensing systems, AWLR, TCGS." },
  { letter: "E", title: "Chemicals",                   desc: "RO antiscalants & maintenance chemicals, polyelectrolytes, activated carbon, ion exchange resins, biocides, boiler chemicals, corrosion inhibitors, cooling tower & fire retardant chemicals." },
  { letter: "F", title: "IT Hardware & Networking",    desc: "Desktops, laptops, printers, licensed software, CCTVs, RFID, biometric machines, LAN & switches, servers, hardware & networking components, data storage devices." },
  { letter: "G", title: "Tools, Valves & Fittings",    desc: "Power & hand tools, HP/LP valves, flanges & pipe fittings, small pumps & motors, steam traps, pressure reducing stations, actuators, compressors, blowers, fans." },
  { letter: "H", title: "Structural Steel & Pipes",    desc: "Tubes, pipes & fittings in MS, stainless steel, titanium — seamless & welded, carbon & alloy steel bright-annealed products per Indian and international standards." },
  { letter: "I", title: "Porta Cabins & Bunkhouses",   desc: "Fully furnished movable bunkhouses — kitchen, dining, recreation, site office, toilet, store. Available in 20×10 and 40×10 ft & customised sizes." },
  { letter: "J", title: "Pre-Coated Profile Sheets",   desc: "Galvalume & galvanized pre-coated sheets, tile/curve profile, decking sheets, polycarbonate, FRP, aluminum, embossed sheets, Z & C purlins, turbo ventilator fans." },
  { letter: "K", title: "Industrial Packaging",        desc: "Corrugated & duplex boxes, rolls and sheets in 3-ply to 9-ply. Creative design support — custom box specifications. Corrugation machines, sheet cutters, rotary slotters." },
  { letter: "L", title: "Fly Ash & Cenospheres",       desc: "Fly ash, bottom ash, pond ash and cenospheres management and supply — expert understanding to maximise client value from industrial by-products." },
];

const ciDetails = [
  "Level Gauges for Liquids: Tubular, Reflex, Transparent, Magnetic, Float & Board, Float & Dial, Float & Tape",
  "Level Switches for Liquids: Float, Conductivity, Capacitance, Displacer, Vibrating, Diaphragm",
  "Level Switches for Solids: RF Admittance, Vibrating, Rotary Paddle",
  "Level Transmitters for Liquids: Float, Capacitance & Hydrostatic",
  "Temperature Systems: Thermocouples, RTDs, Thermowells, Indicators, Controllers & Transmitters",
  "Ultrasonic & Radar Level Transmitters",
  "Cable Suspended Float Switches",
  "Laser Level Transmitters",
  "Conductivity-based Drum Level Indication",
];

export default function ProductsPage() {
  return (
    <>
      <NavClient activePath="/products" />

      <div style={{ background: "linear-gradient(to bottom, #181d27, var(--bg-base))", padding: "9rem 2.5rem 5rem", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
          <div className="section-label"><span>Product Portfolio</span></div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.05, maxWidth: 680 }}>
            Comprehensive <span style={{ color: "var(--gold)" }}>Product Range</span>
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", color: "var(--text-body)", maxWidth: 560, marginTop: "1.25rem", lineHeight: 1.8 }}>
            Collaborating with multiple OEM/OPM partners across 12 product categories to serve every industrial need under one roof.
          </p>
        </div>
      </div>

      {/* Main grid */}
      <section style={{ background: "var(--bg-base)", padding: "6rem 2.5rem" }}>
        <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1px",
            background: "rgba(201,154,64,0.08)",
            border: "1px solid rgba(201,154,64,0.08)",
            borderRadius: "8px",
            overflow: "hidden",
          }}>
            {products.map(p => (
              <div key={p.letter} style={{ padding: "2rem", background: "var(--bg-base)", transition: "background 0.2s" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "var(--bg-card)")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "var(--bg-base)")}
              >
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 700, color: "rgba(201,154,64,0.18)", lineHeight: 1, marginBottom: "0.4rem" }}>{p.letter}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.5rem" }}>{p.title}</div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.98rem", color: "var(--text-muted)", lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* C&I Spotlight */}
      <section style={{ background: "var(--bg-alt)", padding: "6rem 2.5rem", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
          <div className="section-label" style={{ marginBottom: "1.5rem" }}><span>C&amp;I Spotlight</span></div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
            Pune Techtrol <span style={{ color: "var(--gold)" }}>Authorised Representative</span>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "var(--text-body)", maxWidth: 620, lineHeight: 1.8, marginBottom: "2.5rem" }}>
            AdiJey is the authorised representative of M/s Pune Techtrol Private Limited — approved by MECON, PDIL, Avant Garde, Desein, EIL, TCE, Toyo, NPCIL, DAE, BHEL, NTPC and IRS.
          </p>
          <div className="grid-3" style={{ gap: "0.75rem" }}>
            {ciDetails.map((d, i) => (
              <div key={i} style={{ padding: "1.1rem 1.25rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "4px", display: "flex", gap: "10px" }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--gold)", flexShrink: 0, marginTop: 9 }} />
                <span style={{ fontFamily: "var(--font-body)", fontSize: "0.98rem", lineHeight: 1.6, color: "var(--text-body)" }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-base)", padding: "5rem 2.5rem", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1380px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>Need a specific product?</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "var(--text-muted)" }}>Send us your specifications and we'll source it.</p>
          </div>
          <Link href="/contact" className="btn-gold">Request a Quote</Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
