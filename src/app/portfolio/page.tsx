"use client";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



const products = [
    { letter: "A", title: "Industrial Safety PPE", desc: "Respiratory protection, eye & face protection, head protection, high-visibility apparel, hand & hearing protection, safety shoes, fall protection." },
    { letter: "B", title: "Consumables", desc: "Welding electrodes & accessories, filler wires, industrial gases, gaskets, fasteners, sealants, adhesives, cutting tools, abrasive items and office stationeries." },
    { letter: "C", title: "Electrical Products", desc: "All types of cable & wire (Polycab/KEC/KEI), glands & lugs, MCCB, RCCB, flame-proof junction boxes, aviation lamps, energy meters, micro drives, AC/DC motors." },
    { letter: "D", title: "Control & Instrumentation", desc: "Authorized representative of Pune Techtrol Pvt. Ltd. — level gauges, switches & transmitters for liquids & solids, ultrasonic/radar/laser transmitters, temperature sensing systems, AWLR, TCGS." },
    { letter: "E", title: "Chemicals", desc: "RO antiscalants & maintenance chemicals, polyelectrolytes, activated carbon, ion exchange resins, biocides, boiler chemicals, corrosion inhibitors, cooling tower & fire retardant chemicals." },
    { letter: "F", title: "IT Hardware & Networking", desc: "Desktops, laptops, printers, licensed software, CCTVs, RFID, biometric machines, LAN & switches, servers, hardware & networking components, data storage devices." },
    { letter: "G", title: "Tools, Valves & Fittings", desc: "Power & hand tools, HP/LP valves, flanges & pipe fittings, small pumps & motors, steam traps, pressure reducing stations, actuators, compressors, blowers, fans." },
    { letter: "H", title: "Structural Steel & Pipes", desc: "Tubes, pipes & fittings in MS, stainless steel, titanium — seamless & welded, carbon & alloy steel bright-annealed products per Indian and international standards." },
    { letter: "I", title: "Porta Cabins & Bunkhouses", desc: "Fully furnished movable bunkhouses — kitchen, dining, recreation, site office, toilet, store. Available in 20×10 and 40×10 ft & customised sizes." },
    { letter: "J", title: "Pre-Coated Profile Sheets", desc: "Galvalume & galvanized pre-coated sheets, tile/curve profile, decking sheets, polycarbonate, FRP, aluminum, embossed sheets, Z & C purlins, turbo ventilator fans." },
    { letter: "K", title: "Industrial Packaging", desc: "Corrugated & duplex boxes, rolls and sheets in 3-ply to 9-ply. Creative design support — custom box specifications. Corrugation machines, sheet cutters, rotary slotters." },
    { letter: "L", title: "Fly Ash & Cenospheres", desc: "Fly ash, bottom ash, pond ash and cenospheres management and supply — expert understanding to maximise client value from industrial by-products." },
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
            <Header />

            <div className="bg-white" style={{ padding: "9rem 2.5rem 5rem", borderBottom: "1px solid #f3f4f6" }}>
                <div style={{ maxWidth: "1380px", margin: "0 auto" }}>

                    {/* Eyebrow Label */}
                    <div className="flex items-center gap-3 mb-6">
                        <div style={{ width: 30, height: 2, backgroundColor: "#5f0229" }} />
                        <span
                            className="font-sans text-xs font-bold tracking-[0.25em] uppercase"
                            style={{ color: "#5f0229" }}
                        >
                            Product Portfolio
                        </span>
                    </div>

                    {/* Main Title */}
                    <h1
                        className="font-sans font-bold text-gray-900"
                        style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.05, maxWidth: 680 }}
                    >
                        Comprehensive <span style={{ color: "#5f0229" }}>Product Range</span>
                    </h1>

                    {/* Subtitle Description */}
                    <p
                        className="font-sans text-lg text-gray-600"
                        style={{ maxWidth: 560, marginTop: "1.25rem", lineHeight: 1.8 }}
                    >
                        Collaborating with multiple OEM/OPM partners across 12 product categories to serve every industrial need under one roof.
                    </p>

                </div>
            </div>

            {/* Main grid */}
            <section style={{ background: "#5f0229", padding: "6rem 2.5rem" }}>
  <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
    
    {/* Responsive Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      
      {products.map((p) => (
        <div 
          key={p.letter} 
          className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden border border-gray-100 group"
        >
          {/* Giant Letter Watermark (Top Right - Faint Red) */}
          <div 
            className="absolute -top-2 right-4 font-sans font-extrabold pointer-events-none transition-transform duration-500 group-hover:scale-110 select-none" 
            style={{ 
              fontSize: "6rem", 
              color: "rgba(95, 2, 41, 0.04)", // 4% opacity of your #5f0229 red
              lineHeight: 1 
            }}
          >
            {p.letter}
          </div>

          {/* Crisp Letter Accent (Top Left) */}
          <div 
            className="font-sans font-bold text-3xl mb-4 relative z-10" 
            style={{ color: "#5f0229" }}
          >
            {p.letter}
          </div>

          {/* Card Title */}
          <h3 className="font-sans text-lg font-bold text-gray-900 mb-3 relative z-10">
            {p.title}
          </h3>
          
          {/* Card Description */}
          <p className="font-sans text-sm text-gray-600 leading-relaxed relative z-10">
            {p.desc}
          </p>
        </div>
      ))}
      
    </div>
  </div>
</section>

            {/* C&I Spotlight */}
            <section className="bg-[#FFFAF3]" style={{ padding: "6rem 2.5rem", borderTop: "1px solid #f3f4f6" }}>
  <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
    
    {/* --- HEADER AREA --- */}
    {/* Eyebrow Label */}
    <div className="flex items-center gap-3 mb-6">
      <div style={{ width: 30, height: 2, backgroundColor: "#5f0229" }} />
      <span 
        className="font-sans text-xs font-bold tracking-[0.25em] uppercase" 
        style={{ color: "#5f0229" }}
      >
        C&amp;I Spotlight
      </span>
    </div>

    {/* Main Title */}
    <h2 className="font-sans text-4xl md:text-5xl font-bold text-gray-900 mb-4">
      Pune Techtrol <span style={{ color: "#5f0229" }}>Authorised Representative</span>
    </h2>
    
    {/* Subtitle / Description */}
    <p className="font-sans text-lg text-gray-600 max-w-3xl leading-relaxed mb-10">
      AdiJey is the authorised representative of M/s Pune Techtrol Private Limited — approved by MECON, PDIL, Avant Garde, Desein, EIL, TCE, Toyo, NPCIL, DAE, BHEL, NTPC and IRS.
    </p>

    {/* --- GRID OF DETAILS --- */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {ciDetails.map((d, i) => (
        <div 
          key={i} 
          className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm flex items-start gap-4 hover:shadow-md hover:border-gray-200 transition-all duration-200"
        >
          {/* Red Bullet Point */}
          <span 
            className="w-2 h-2 rounded-full shrink-0 mt-2" 
            style={{ backgroundColor: "#5f0229" }} 
          />
          {/* Detail Text */}
          <span className="font-sans text-base text-gray-700 leading-relaxed">
            {d}
          </span>
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
                    <Link
                        href="/contact"
                        className="bg-white text-black border border-gray-200 px-8 py-3 rounded-full font-sans font-bold shadow-sm hover:shadow-md transition-all hover:scale-115"
                    >
                        Request a Quote
                    </Link>

                </div>
            </section>

            <Footer />

        </>
    );
}