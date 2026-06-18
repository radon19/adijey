// app/contact/page.tsx (or wherever your form component lives)
"use client";
import { useState } from "react";
import axios, { AxiosError } from "axios";

const RATE_LIMIT_KEY = "adijey_last_enquiry";
const RATE_LIMIT_MS = 30 * 60 * 1000; // 30 minutes

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  honeypot: string; // <-- Added honeypot
};

type Status = "idle" | "loading" | "success" | "error" | "rate_limited";

export default function ContactForm() {
  const [f, setF] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    honeypot: "", // <-- Initialize honeypot
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const ch = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF({ ...f, [e.target.name]: e.target.value });

  const getRemainingMinutes = (): number => {
    const last = localStorage.getItem(RATE_LIMIT_KEY);
    if (!last) return 0;
    const elapsed = Date.now() - parseInt(last, 10);
    if (elapsed >= RATE_LIMIT_MS) return 0;
    return Math.ceil((RATE_LIMIT_MS - elapsed) / 60000);
  };

  const handleSubmit = async () => {
    // ── 1. Client-side rate limit check ──────────────────────────────────────
    const remaining = getRemainingMinutes();
    if (remaining > 0) {
      setStatus("rate_limited");
      setErrorMsg(
        `You've already sent an enquiry. Please wait ${remaining} minute${remaining !== 1 ? "s" : ""} before sending another.`
      );
      return;
    }

    // ── 2. Basic validation ───────────────────────────────────────────────────
    if (!f.name.trim() || !f.email.trim() || !f.message.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in your name, email, and message.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      // ── 3. POST to our secure Next.js API Route using Axios ─────────────────
      await axios.post("/api/contact", f);

      // ── 4. Success — stamp the timestamp in localStorage ───────────────────
      localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString());
      setStatus("success");
      
    } catch (err) {
      console.error(err);
      
      if (err instanceof AxiosError && err.response) {
        if (err.response.status === 429) {
          setStatus("rate_limited");
          setErrorMsg("Too many requests. Please wait before trying again.");
          return;
        }
        
        setStatus("error");
        setErrorMsg(err.response.data?.error || `Server error: ${err.response.status}`);
        return;
      }

      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email us directly.");
    }
  };

  // Success State
  if (status === "success") {
    return (
      <div className="text-center py-16 px-6 bg-white border border-gray-100 rounded-xl shadow-sm">
        <div className="text-6xl mb-4" style={{ color: "#5f0229" }}>✓</div>
        <div className="font-sans text-3xl font-bold text-gray-900 mb-3">
          Message Sent
        </div>
        <p className="font-sans text-lg text-gray-600">
          Thank you for reaching out. Our team will respond to you shortly.
        </p>
      </div>
    );
  }

  const inputStyles =
    "w-full px-4 py-3.5 bg-gray-50 border border-gray-300 rounded-md text-gray-900 font-sans text-lg outline-none focus:border-[#5f0229] focus:ring-1 focus:ring-[#5f0229] transition-all";
  const labelStyles =
    "block font-sans text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-2";

  //  Form State 
  return (
    <div className="bg-white">
      {/* ── Hidden Honeypot Field for Bot Protection ── */}
      <div style={{ display: "none" }} aria-hidden="true">
        <input
          name="honeypot"
          value={f.honeypot}
          onChange={ch}
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className={labelStyles}>Your Name *</label>
          <input
            name="name"
            value={f.name}
            onChange={ch}
            type="text"
            placeholder="John Doe"
            className={inputStyles}
            disabled={status === "loading"}
          />
        </div>
        <div>
          <label className={labelStyles}>Company</label>
          <input
            name="company"
            value={f.company}
            onChange={ch}
            type="text"
            placeholder="Company Ltd."
            className={inputStyles}
            disabled={status === "loading"}
          />
        </div>
      </div>

      <div className="mb-6">
        <label className={labelStyles}>Email Address *</label>
        <input
          name="email"
          value={f.email}
          onChange={ch}
          type="email"
          placeholder="you@company.com"
          className={inputStyles}
          disabled={status === "loading"}
        />
      </div>

      <div className="mb-6">
        <label className={labelStyles}>Phone Number</label>
        <input
          name="phone"
          value={f.phone}
          onChange={ch}
          type="tel"
          placeholder="+91 XXXXX XXXXX"
          className={inputStyles}
          disabled={status === "loading"}
        />
      </div>

      <div className="mb-8">
        <label className={labelStyles}>Message / Requirement *</label>
        <textarea
          name="message"
          value={f.message}
          onChange={ch}
          rows={5}
          placeholder="Describe your requirement..."
          className={`${inputStyles} resize-y min-h-30`}
          disabled={status === "loading"}
        />
      </div>

      {(status === "error" || status === "rate_limited") && (
        <div
          className="mb-6 px-4 py-3 rounded-md text-sm font-sans font-medium"
          style={{
            backgroundColor: status === "rate_limited" ? "#fff7ed" : "#fef2f2",
            color: status === "rate_limited" ? "#92400e" : "#991b1b",
            border: `1px solid ${status === "rate_limited" ? "#fed7aa" : "#fecaca"}`,
          }}
        >
          {status === "rate_limited" ? "⏳ " : "⚠️ "}
          {errorMsg}
        </div>
      )}

      <button
        onClick={handleSubmit}
        disabled={status === "loading" || status === "rate_limited"}
        className="w-full flex justify-center items-center py-4 rounded-md font-sans text-sm font-bold tracking-[0.2em] uppercase text-white shadow-md hover:shadow-lg transition-all duration-300 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ backgroundColor: "#5f0229" }}
      >
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Sending...
          </span>
        ) : (
          "Send Enquiry →"
        )}
      </button>
    </div>
  );
}