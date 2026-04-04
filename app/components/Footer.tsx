"use client"
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      background: "#0f1219",
      borderTop: "1px solid rgba(201,154,64,0.12)",
      padding: "3rem 2.5rem 2rem",
    }}>
      <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr 1fr 1.2fr", gap: "3rem", marginBottom: "2.5rem" }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", fontWeight: 700, color: "var(--gold-light)", marginBottom: "0.5rem" }}>
              AdiJey Engineering Solutions
            </div>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-dim)", marginBottom: "1rem" }}>
              (OPC) Private Limited
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.98rem", lineHeight: 1.75, color: "var(--text-muted)" }}>
              Driven by Knowledge & Creating Value across India's core industrial sectors since 2018.
            </p>
          </div>

          {/* Pages */}
          <div>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>
              Pages
            </div>
            {[["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Products", "/products"], ["Industries", "/industries"], ["Contact", "/contact"]].map(([l, h]) => (
              <Link key={h} href={h} style={{ display: "block", fontFamily: "var(--font-ui)", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-muted)", textDecoration: "none", marginBottom: "0.5rem", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--gold-light)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
              >{l}</Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>
              Contact
            </div>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.4rem" }}>
              Aditya — MD
            </div>
            <a href="tel:+918169384266" style={{ display: "block", fontFamily: "var(--font-ui)", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-muted)", textDecoration: "none", marginBottom: "0.5rem" }}>
              +91 81693 84266
            </a>
            {["info@adijey.com", "bd@adijey.com"].map(e => (
              <a key={e} href={`mailto:${e}`} style={{ display: "block", fontFamily: "var(--font-ui)", fontSize: "0.78rem", fontWeight: 600, color: "var(--text-faint)", textDecoration: "none", marginBottom: "0.25rem" }}>{e}</a>
            ))}
          </div>

          {/* Offices */}
          <div>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>
              Offices
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {["Raipur", "New Delhi", "Nagpur", "Chennai", "Hyderabad", "Bangalore", "Mangalore", "Buxar"].map(c => (
                <span key={c} style={{ fontFamily: "var(--font-ui)", fontSize: "0.72rem", fontWeight: 600, color: "var(--text-faint)", padding: "0.2rem 0.55rem", border: "1px solid rgba(201,154,64,0.1)", borderRadius: "2px" }}>{c}</span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ height: "1px", background: "rgba(201,154,64,0.1)", marginBottom: "1.5rem" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
          <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.72rem", fontWeight: 600, color: "var(--text-faint)", letterSpacing: "0.1em" }}>
            © {new Date().getFullYear()} AdiJey Engineering Solutions (OPC) Pvt. Ltd. · All Rights Reserved
          </span>
          <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.72rem", fontWeight: 600, color: "var(--text-faint)", letterSpacing: "0.1em" }}>
            CIN: OPC India
          </span>
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 580px)  { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
