import React from 'react'
import Link from 'next/link'
import ServicesTab from '@/components/ServicesTab';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


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

function page() {
    return (
        <div>
            <Header />

            <div style={{ background: "#FFFFFF", padding: "6rem 2.5rem 6rem", borderBottom: "1px solid var(--border)" }}>
                <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
                    <div className="section-label text-black text-xl px-2"><span>What We Offer</span></div>
                    <h1 className='text-black' style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 700, lineHeight: 1.05, maxWidth: 680 }}>
                        Our <span className='text-[#5f0229]' >Service</span> Capabilities
                    </h1>
                </div>
            </div>

            {/* Tabbed services */}
            <section className='bg-[#5f0229]' style={{ padding: "6rem 2.5rem" }}>
                <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
                    <ServicesTab />
                </div>
            </section>

            {/* Additional services */}
            <section className="bg-[#FFFAF3]" style={{ padding: "6rem 2.5rem", borderTop: "1px solid #f3f4f6" }}>
  <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
    
    {/* --- HEADER AREA --- */}
    <div className="mb-12">
      {/* Eyebrow Label */}
      <div className="flex items-center gap-3 mb-4">
        <div style={{ width: 30, height: 2, backgroundColor: "#5f0229" }} />
        <span 
          className="font-sans text-xs font-bold tracking-[0.25em] uppercase" 
          style={{ color: "#5f0229" }}
        >
          Additionally
        </span>
      </div>

      {/* Main Title */}
      <h2 className="font-sans text-4xl md:text-5xl font-bold text-gray-900">
        Specialised <span style={{ color: "#5f0229" }}>Capabilities</span>
      </h2>
    </div>

    {/* --- CARDS GRID --- */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {extras.map((e, i) => (
        <div 
          key={i} 
          className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          style={{ borderLeft: "4px solid #5f0229" }} // Sleek red accent line on the left
        >
          {/* Card Title */}
          <h3 
            className="font-sans text-xl font-bold mb-3" 
            style={{ color: "#5f0229" }}
          >
            {e.title}
          </h3>
          
          {/* Card Description */}
          <p className="font-sans text-base leading-relaxed text-gray-600">
            {e.desc}
          </p>
        </div>
      ))}
    </div>
    
  </div>
</section>



            <section style={{ background: "var(--bg-alt)", padding: "5rem 2.5rem", borderTop: "1px solid var(--border)" }}>
                <div style={{ maxWidth: "1380px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>

                    <div>
                        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                            Have a specific requirement?
                        </h2>
                        <p style={{ fontFamily: "var(--font-body)", fontSize: "1.08rem", color: "var(--text-muted)" }}>
                            Reach out and we'll find the right solution together.
                        </p>
                    </div>

                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                        {/* Primary Action: White box with theme-red text */}
                        <Link
                            href="/contact"
                            className="bg-white text-black px-8 py-3 rounded-full font-sans font-bold shadow-md hover:shadow-lg transition-all hover:scale-115"    >
                            Send Enquiry
                        </Link>

                        
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    )
}

export default page