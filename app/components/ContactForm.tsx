"use client";
import { useState } from "react";

const inputBase: React.CSSProperties = {
  width: "100%",
  padding: "0.85rem 1.1rem",
  background: "var(--bg-base)",
  border: "1px solid rgba(201,154,64,0.2)",
  borderRadius: "4px",
  color: "var(--text-primary)",
  fontFamily: "var(--font-body)",
  fontSize: "1.05rem",
  outline: "none",
  transition: "border-color 0.2s",
};

const label: React.CSSProperties = {
  fontFamily: "var(--font-ui)",
  fontSize: "0.7rem",
  fontWeight: 700,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  display: "block",
  marginBottom: "0.4rem",
};

export default function ContactForm() {
  const [f, setF] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const ch = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF({ ...f, [e.target.name]: e.target.value });

  const focus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    (e.currentTarget.style.borderColor = "rgba(201,154,64,0.6)");
  const blur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    (e.currentTarget.style.borderColor = "rgba(201,154,64,0.2)");

  if (sent) return (
    <div style={{ textAlign: "center", padding: "4rem 2rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "8px" }}>
      <div style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "var(--gold)" }}>✓</div>
      <div style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>Message Sent</div>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "var(--text-muted)" }}>
        Thank you for reaching out. Our team will respond to you shortly.
      </p>
    </div>
  );

  return (
    <div style={{ padding: "2.5rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "8px" }}>
      <div style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "2rem" }}>
        Send an Enquiry (NOT AVAILABLE)
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1.25rem" }} className="form-2col">
        <div>
          <label style={label}>Your Name</label>
          <input name="name" value={f.name} onChange={ch} onFocus={focus} onBlur={blur} type="text" placeholder="John Doe" style={inputBase} />
        </div>
        <div>
          <label style={label}>Company</label>
          <input name="company" value={f.company} onChange={ch} onFocus={focus} onBlur={blur} type="text" placeholder="Company Ltd." style={inputBase} />
        </div>
      </div>

      <div style={{ marginBottom: "1.25rem" }}>
        <label style={label}>Email Address</label>
        <input name="email" value={f.email} onChange={ch} onFocus={focus} onBlur={blur} type="email" placeholder="you@company.com" style={inputBase} />
      </div>

      <div style={{ marginBottom: "1.25rem" }}>
        <label style={label}>Phone Number</label>
        <input name="phone" value={f.phone} onChange={ch} onFocus={focus} onBlur={blur} type="tel" placeholder="+91 XXXXX XXXXX" style={inputBase} />
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <label style={label}>Message / Requirement</label>
        <textarea name="message" value={f.message} onChange={ch} onFocus={focus} onBlur={blur} rows={5}
          placeholder="Describe your requirement..." style={{ ...inputBase, resize: "vertical", minHeight: 120 }} />
      </div>

      <button onClick={() => setSent(true)} className="btn-gold" style={{ width: "100%", justifyContent: "center", padding: "1rem", fontSize: "0.85rem", border: "1px solid var(--gold)" }}>
        Send Enquiry →
      </button>

      <style>{`.form-2col { @media (max-width: 580px) { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
