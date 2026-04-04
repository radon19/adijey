"use client"
import type { Metadata } from "next";
import NavClient from "../components/NavClient";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";



const offices = [
  { city: "Raipur", state: "Chhattisgarh" },
  { city: "New Delhi", state: "Delhi" },
  { city: "Nagpur", state: "Maharashtra" },
  { city: "Hyderabad", state: "Telangana" },
  { city: "Chennai", state: "Tamil Nadu" },
  { city: "Bangalore", state: "Karnataka" },
  { city: "Mangalore", state: "Karnataka" },
  { city: "Buxar", state: "Bihar" },
];

export default function ContactPage() {
  return (
    <>
      <NavClient activePath="/contact" />

      <div style={{ background: "linear-gradient(to bottom, #181d27, var(--bg-base))", padding: "9rem 2.5rem 5rem", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
          <div className="section-label"><span>Get In Touch</span></div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.05, maxWidth: 680 }}>
            Let's Build <span style={{ color: "var(--gold)" }}>Together</span>
          </h1>
        </div>
      </div>

      <section style={{ background: "var(--bg-base)", padding: "6rem 2.5rem" }}>
        <div style={{ maxWidth: "1380px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "5rem", alignItems: "start" }} className="contact-layout">

          {/* Left */}
          <div>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.5rem" }}>
              Direct Contact
            </div>

            <div style={{ marginBottom: "0.5rem" }}>
              <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: "0.25rem" }}>Managing Director</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 600, color: "var(--text-primary)" }}>Aditya Yadav</div>
            </div>

            <div style={{ marginBottom: "1.25rem", marginTop: "1.25rem" }}>
              <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: "0.25rem" }}>Phone</div>
              <a href="tel:+918169384266" style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 600, color: "var(--gold-light)", textDecoration: "none" }}>
                +91 81693 84266
              </a>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: "0.5rem" }}>Email</div>
              {["info.adijey@gmail.com"].map(e => (
                <a key={e} href={`mailto:${e}`} style={{ display: "block", fontFamily: "var(--font-ui)", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-muted)", textDecoration: "none", marginBottom: "0.3rem", transition: "color 0.2s" }}
                  onMouseEnter={ev => (ev.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={ev => (ev.currentTarget.style.color = "var(--text-muted)")}
                >{e}</a>
              ))}
            </div>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/918169384266?text=${encodeURIComponent("Hello AdiJey Engineering Solutions, I'd like to make an enquiry.")}`}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                padding: "0.8rem 1.5rem", background: "#25d366", color: "#fff",
                fontFamily: "var(--font-ui)", fontSize: "0.8rem", fontWeight: 700,
                letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none",
                borderRadius: "4px", marginBottom: "3rem", transition: "opacity 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              <svg viewBox="0 0 32 32" width="16" height="16" fill="white">
                <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.736 5.476 2.027 7.78L0 32l8.432-2.008A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.27 20.497c-.398-.2-2.354-1.162-2.72-1.294-.365-.133-.632-.2-.898.2-.266.398-1.032 1.294-1.265 1.56-.233.267-.466.3-.864.1-.399-.2-1.682-.62-3.205-1.98-1.184-1.057-1.983-2.363-2.216-2.762-.233-.398-.025-.613.175-.81.18-.179.399-.466.598-.7.2-.233.266-.399.4-.665.133-.267.066-.5-.034-.7-.1-.2-.898-2.163-1.231-2.962-.324-.778-.654-.673-.898-.685l-.765-.013c-.266 0-.698.1-1.064.5-.365.398-1.397 1.362-1.397 3.325s1.43 3.858 1.63 4.124c.199.267 2.814 4.296 6.82 6.025.953.411 1.696.657 2.276.841.957.304 1.828.261 2.516.158.767-.114 2.354-.962 2.687-1.891.332-.93.332-1.727.232-1.892-.1-.165-.365-.265-.764-.465z" />
              </svg>
              Chat on WhatsApp
            </a>

            {/* Offices */}
            <div>
              <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>
                Our Offices
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                {offices.map(o => (
                  <div key={o.city} style={{ padding: "0.75rem 1rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "4px" }}>
                    <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.82rem", fontWeight: 700, color: "var(--text-primary)" }}>{o.city}</div>
                    <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.7rem", fontWeight: 600, color: "var(--text-faint)", letterSpacing: "0.08em" }}>{o.state}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <ContactForm />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <style>{`
        @media (max-width: 900px) { .contact-layout { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
