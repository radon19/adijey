"use client";
import { useState } from "react";

export default function ContactForm() {
  const [f, setF] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const ch = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF({ ...f, [e.target.name]: e.target.value });

  // Success State View
  if (sent) {
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

  // Common input classes for a unified look
  const inputStyles = "w-full px-4 py-3.5 bg-gray-50 border border-gray-300 rounded-md text-gray-900 font-sans text-lg outline-none focus:border-[#5f0229] focus:ring-1 focus:ring-[#5f0229] transition-all";
  const labelStyles = "block font-sans text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-2";

  // Form View
  return (
    <div className="bg-white">
      {/* 2-Column Grid for Name & Company */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className={labelStyles}>Your Name</label>
          <input 
            name="name" 
            value={f.name} 
            onChange={ch} 
            type="text" 
            placeholder="John Doe" 
            className={inputStyles} 
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
          />
        </div>
      </div>

      <div className="mb-6">
        <label className={labelStyles}>Email Address</label>
        <input 
          name="email" 
          value={f.email} 
          onChange={ch} 
          type="email" 
          placeholder="you@company.com" 
          className={inputStyles} 
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
        />
      </div>

      <div className="mb-8">
        <label className={labelStyles}>Message / Requirement</label>
        <textarea 
          name="message" 
          value={f.message} 
          onChange={ch} 
          rows={5}
          placeholder="Describe your requirement..." 
          className={`${inputStyles} resize-y min-h-30`} 
        />
      </div>

      <button 
        onClick={() => setSent(true)} 
        className="w-full flex justify-center items-center py-4 rounded-md font-sans text-sm font-bold tracking-[0.2em] uppercase text-white shadow-md hover:shadow-lg transition-all duration-300 hover:opacity-90"
        style={{ backgroundColor: "#5f0229" }}
      >
        Send Enquiry →
      </button>
    </div>
  );
}