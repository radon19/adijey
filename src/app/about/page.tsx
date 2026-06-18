import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* --- "WHO WE ARE" HERO SECTION --- */}
      <section className="bg-white" style={{ padding: "8rem 2.5rem", borderBottom: "1px solid #f3f4f6" }}>
        <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
          
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "1.5rem" }}>
            {/* Red Accent Line */}
            <div style={{ width: 45, height: 2, backgroundColor: "#5f0229" }} />
            <span 
              className="font-sans font-bold tracking-[0.3em] uppercase text-sm" 
              style={{ color: "#5f0229" }}
            >
              Who We Are
            </span>
          </div>

          {/* Main Title */}
          <h1 
            className="font-sans font-bold leading-[1.05]" 
            style={{ 
              fontSize: "clamp(3.5rem, 7vw, 6rem)", 
              color: "#000000", // Deep black for high contrast on white
              maxWidth: "1000px" 
            }}
          >
            Three Decades of <br />
            <span style={{ color: "#5f0229" }}>Engineering</span> <br />
            Excellence
          </h1>

        </div>
      </section>

      {/* The rest of your about page content will go here */}

      {/* --- COMPANY OVERVIEW & COMPETENCIES SECTION --- */}
      <section style={{ background: "#5f0229", padding: "7rem 2.5rem" }}>
        <div className="max-w-345 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* LEFT COLUMN: Description, Mission, Ethos */}
          <div>
            <div className="font-sans text-lg text-gray-100 leading-relaxed space-y-6 mb-12">
              <p>
                <strong>AdiJey Engineering Solutions (OPC) Private Limited</strong> is a <em>One Stop Engineering Solutions Provider</em>, founded by a BITS Pilani Graduate Engineer with over <strong>30 years of versatile industry experience</strong> spanning Strategic Sourcing, Supply Chain Management, Global/Domestic Sourcing, Estimation & Costing, Vendor Management, Project Management, Fabrication, Erection, Testing and Commissioning.
              </p>
              <p>
                AdiJey Products & Services are built around generating value, driving high performance in productivity and reducing costs through in-depth knowledge, expertise and value engineering. Collaborating with multiple OEM / OPM / Service providers, we serve clients across Manufacturing, Oil & Gas, Power, Cement, EPC, Fertilizers, Sugar Mills, Chemical, Pharmaceutical, Textile & Rayon industries.
              </p>
            </div>

            {/* Mission Blockquote */}
            <div className="border-l-4 pl-6 mb-12" style={{ borderColor: "var(--gold)" }}>
              <h4 className="font-sans text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--gold)" }}>
                Mission
              </h4>
              <p className="font-sans text-xl text-gray-100 italic leading-relaxed">
                "To build our reputation for integrity, excellence and leadership as one of the finest Engineering Solutions Organizations — by continuously improving standards, constantly striving to exceed client expectations, and maintaining the highest moral principles."
              </p>
            </div>

            {/* Our Ethos Card */}
            <div className="bg-white rounded-xl p-8 shadow-xl">
              <h4 className="font-sans text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: "#5f0229" }}>
                Our Ethos
              </h4>
              <p className="font-sans text-base text-gray-700 leading-relaxed">
                Being regarded by <em>all</em> our stakeholders — clients, partners, employees — as <strong>honorable and conscientious</strong>. Every project, every partnership, every transaction.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Core Competencies & Keys to Success */}
          <div>
            <h4 className="font-sans text-xs font-bold tracking-[0.2em] uppercase mb-6" style={{ color: "var(--gold)" }}>
              Core Competencies
            </h4>
            
            {/* 2x2 Grid for Competency Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Card 1 */}
              <div className="bg-white rounded-xl p-6 shadow-xl transition-transform hover:-translate-y-1">
                <div className="text-2xl mb-4">📋</div>
                <h5 className="font-sans font-bold text-gray-900 text-lg mb-2">Strategic Sourcing</h5>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">
                  Global & domestic procurement with deep supplier networks and e-auction capabilities.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl p-6 shadow-xl transition-transform hover:-translate-y-1">
                <div className="text-2xl mb-4">🔗</div>
                <h5 className="font-sans font-bold text-gray-900 text-lg mb-2">Supply Chain Management</h5>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">
                  End-to-end oversight — MRP, vendor management, contract administration.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl p-6 shadow-xl transition-transform hover:-translate-y-1">
                <div className="text-2xl mb-4">🏗️</div>
                <h5 className="font-sans font-bold text-gray-900 text-lg mb-2">Project Execution</h5>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">
                  Turnkey EPC services from concept to commissioning at the highest quality & safety.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-xl p-6 shadow-xl transition-transform hover:-translate-y-1">
                <div className="text-2xl mb-4">💡</div>
                <h5 className="font-sans font-bold text-gray-900 text-lg mb-2">Value Engineering</h5>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">
                  Cost optimisation through technical innovation without compromising quality.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-xl">
              <h4 className="font-sans text-xs font-bold tracking-[0.2em] uppercase mb-6" style={{ color: "#5f0229" }}>
                Keys to Success
              </h4>
              <ul className="font-sans text-sm text-gray-700 space-y-4">
                <li className="flex items-start gap-3">
                  <span style={{ color: "var(--gold)", fontSize: "1.2rem", lineHeight: "1" }}>•</span>
                  <span>Innovative & cost-effective solutions in products and service provision</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: "var(--gold)", fontSize: "1.2rem", lineHeight: "1" }}>•</span>
                  <span>Professional quality deliverables, on time — every time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: "var(--gold)", fontSize: "1.2rem", lineHeight: "1" }}>•</span>
                  <span>Follow-up strategy to gauge performance and build stakeholder trust</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: "var(--gold)", fontSize: "1.2rem", lineHeight: "1" }}>•</span>
                  <span>End-to-end engineering product and services capability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: "var(--gold)", fontSize: "1.2rem", lineHeight: "1" }}>•</span>
                  <span>Transparent communication with every client and customer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: "var(--gold)", fontSize: "1.2rem", lineHeight: "1" }}>•</span>
                  <span>Highest moral principles and dedication to integrity</span>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </section>

      {/* --- OUR OFFICES SECTION (Light Theme) --- */}
      <section className="bg-[#FFFAF3]" style={{ padding: "7rem 2.5rem" }}>
        <div className="max-w-345 mx-auto">
          
          {/* Header Area */}
          <div className="mb-12 text-center md:text-left">
            <h4 
              className="font-sans text-xs font-bold tracking-[0.25em] uppercase mb-4" 
              style={{ color: "#5f0229" }}
            >
              Pan-India Presence
            </h4>
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-black">
              Our <span style={{ color: "#5f0229" }}>Offices</span>
            </h2>
          </div>

          {/* Offices Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { city: "Raipur", state: "Chhattisgarh" },
              { city: "New Delhi", state: "Delhi" },
              { city: "Nagpur", state: "Maharashtra" },
              { city: "Hyderabad", state: "Telangana" },
              { city: "Chennai", state: "Tamil Nadu" },
              { city: "Bangalore", state: "Karnataka" },
              { city: "Mangalore", state: "Karnataka" },
              { city: "Buxar", state: "Bihar" },
            ].map((office, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                style={{ borderLeft: "4px solid #5f0229" }} // Red accent border on the left
              >
                <h3 className="font-sans font-bold text-xl text-gray-900 mb-2">
                  {office.city}
                </h3>
                <p 
                  className="font-sans text-xs font-bold tracking-widest uppercase" 
                  style={{ color: "#5f0229" }}
                >
                  {office.state}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    {/* Ready to work with us */}
<section style={{ background: "black", padding: "5rem 2.5rem", borderTop: "1px solid var(--border)" }}>
  <div style={{ maxWidth: "1380px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
    
    <div>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
        Work With Us
      </h2>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "1.08rem", color: "var(--text-muted)" }}>
        Tell us your requirement — we'll tailor the right solution.
      </p>
    </div>

    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {/* Primary Action: White box with theme-red text */}
      <Link 
        href="/contact" 
        className="bg-white text-black px-8 py-3 rounded-full font-sans font-bold shadow-md hover:shadow-lg transition-all hover:scale-115"
        
      >
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