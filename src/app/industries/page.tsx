import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import Link from "next/link";

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
        <Header/>
      <div className="bg-white" style={{ padding: "9rem 2.5rem 5rem", borderBottom: "1px solid #f3f4f6" }}>
  <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
    
    {/* Eyebrow Label */}
    <div className="flex items-center gap-3 mb-6">
      <div style={{ width: 30, height: 2, backgroundColor: "#5f0229" }} />
      <span 
        className="font-sans text-xs font-bold tracking-[0.25em] uppercase" 
        style={{ color: "#5f0229" }}
      >
        Sectors We Serve
      </span>
    </div>

    {/* Main Title */}
    <h1 
      className="font-sans font-bold text-gray-900" 
      style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.05, maxWidth: 680 }}
    >
      Sectors We <span style={{ color: "#5f0229" }}>Power</span>
    </h1>

    {/* Subtitle Description */}
    <p 
      className="font-sans text-lg text-gray-600" 
      style={{ maxWidth: 560, marginTop: "1.25rem", lineHeight: 1.8 }}
    >
      Our multi-sector expertise lets us serve a broad spectrum of industries — each with tailored, cost-effective solutions.
    </p>
    
  </div>
</div>

      <section style={{ background: "#5f0229", padding: "6rem 2.5rem" }}>
  <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
    
    {/* Tailwind Grid for Responsive Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {industries.map((ind, i) => (
        <div 
          key={i} 
          className="bg-white rounded-xl p-8 shadow-xl transition-transform hover:-translate-y-1 relative overflow-hidden border border-gray-100"
        >
          {/* Oversized Watermark Number */}
          <div style={{
            position: "absolute", top: "-10px", right: "10px",
            fontFamily: "var(--font-display)", fontSize: "6rem", fontWeight: 800,
            color: "rgba(95, 2, 41, 0.05)", // Faint version of your #5f0229 red
            lineHeight: 1, pointerEvents: "none", userSelect: "none"
          }}>
            {String(i + 1).padStart(2, "0")}
          </div>

          {/* Icon */}
          <div style={{ fontSize: "2rem", marginBottom: "1.25rem", position: "relative", zIndex: 2 }}>
            {ind.icon}
          </div>

          {/* Industry Name */}
          <h3 className="font-sans text-xl font-bold text-gray-900 mb-3 relative z-2">
            {ind.name}
          </h3>

          {/* Industry Description */}
          <p className="font-sans text-base text-gray-600 leading-relaxed mb-6 relative z-2">
            {ind.desc}
          </p>

          {/* Services List */}
          <div className="flex flex-col gap-2 relative z-2">
            {ind.services.map((s, j) => (
              <div key={j} className="flex gap-3 items-center">
                {/* Red Bullet Point */}
                <span 
                  className="w-1.5 h-1.5 rounded-full shrink-0" 
                  style={{ background: "#5f0229" }} 
                />
                {/* Service Name */}
                <span className="font-sans text-sm font-semibold tracking-wide text-gray-700">
                  {s}
                </span>
              </div>
            ))}
          </div>
          
        </div>
      ))}
    </div>
    
  </div>
</section>

      {/* "Not listed?" CTA */}
      <section style={{ background: "black", padding: "5rem 2.5rem", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
          <div style={{ padding: "3rem", background: "rgba(201,154,64,0.05)", border: "1px solid var(--border)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                Don't see your industry?
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "var(--text-muted)", maxWidth: 500, lineHeight: 1.75 }}>
                We customise solutions for any industrial sector. Our team has experience across a broad range of operational environments — tell us about your requirement.
              </p>
            </div >
<Link 
        href="/contact" 
        className="bg-white text-black border border-gray-200 px-8 py-3 rounded-full font-sans font-bold shadow-sm hover:shadow-md transition-all hover:scale-115"
      >
         Talk to our team → </Link>
          </div>
        </div>
      </section>

    <Footer/>
    </>
  );
}