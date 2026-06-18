"use client";
import { useState } from "react";
import Link from "next/link";

const services = [
  {
    id: "procurement",
    label: "Procurement Outsourcing",
    icon: "📋",
    headline: "Strategic Procurement & Sourcing",
    items: [
      "Specification Development for Materials & Services",
      "Supplier Selection & Qualification",
      "RFx — Order Processing & Expediting",
      "Strategic Negotiations (Quality, Delivery & Price)",
      "e-Auction Support & Bidding / Tendering",
      "Contract Formulation, Management & Administration",
      "Waste Management & MRP Support",
      "Behavioral / Technical / Motivational Training",
    ],
  },
  {
    id: "supply",
    label: "Material Supply",
    icon: "📦",
    headline: "Engineering Materials & Equipment",
    items: [
      "Mechanical, Electrical, C&I, IT Engineering Materials",
      "PPE's & Industrial Safety Equipment",
      "Structural Steel, Pipes & Fittings, Sheets",
      "IBR / Non-IBR Valves & Flanges",
      "Conveyor Belts, Idlers, Rollers & Pulleys",
      "Porta Cabins & Industrial Packaging",
      "Fly Ash & Allied Products",
      "Material Handling / Conveying Equipment",
    ],
  },
  {
    id: "engineering",
    label: "Design & Engineering",
    icon: "⚙️",
    headline: "Design, Engineering & Construction",
    items: [
      "Fans & Blowers — Axial & Radial",
      "Air Pollution Control (Bag Filter, ESP, Cyclone)",
      "Material Handling Equipments",
      "Noise Abatement (Silencers, Acoustic Enclosures)",
      "Fire Fighting Systems — Detection & Suppression",
      "Flue Gas Desulphurization (FGD) — Dry & Wet",
      "Ventilation & Fume Extraction Systems",
      "Dust Suppression & Compact Dust Collectors",
    ],
  },
  {
    id: "maintenance",
    label: "Repair & Maintenance",
    icon: "🔧",
    headline: "Repair, Overhaul & Field Services",
    items: [
      "Structure, Pipe, Duct, Chute, Hopper Fabrication",
      "RCC & Steel Silo, Chimney, Cooling Tower Repair",
      "HP/LP Valve Repair, Servicing & Refurbishment",
      "In-situ & Offline Valve Testing",
      "Ash Management — Fly / Bottom / Cenospheres",
      "Capital Equipment Repair & Overhaul",
      "Reverse Engineering — Chinese / Imported Spares",
      "Structural Coating & Painting Work",
    ],
  },
];

export default function ServicesTab() {
  const [active, setActive] = useState("procurement");
  const cur = services.find(s => s.id === active)!;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: "2.5rem" }} className="svc-grid ">
      {/* Tabs */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {services.map(s => {
          const on = active === s.id;
          return (
            <button  key={s.id} onClick={() => setActive(s.id)} className="bg-[#FFFAF3]" style={{
              padding: "1rem 1.25rem",
              textAlign: "left",
              
              border: "1px solid",
              borderColor: on ? "rgba(201,154,64,0.45)" : "var(--border)",
              borderRadius: "5px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              transition: "all 0.2s",
            }}>
              <span style={{ fontSize: "1.1rem" }}>{s.icon}</span>
              <span className="text-black" style={{
                fontFamily: "var(--font-ui)",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                
              }}>{s.label}</span>
              {on && <span style={{ marginLeft: "auto", width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", flexShrink: 0 }} />}
            </button>
          );
        })}
      </div>

      {/* Panel */}
      <div  className="bg-[#FFFAF3] text-black" style={{ padding: "2.5rem", border: "1px solid var(--border)", borderRadius: "6px" }}>
        <div className="px-0.5" style={{  fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.5rem" }}>
          {cur.label}
        </div>
        <h3 className ="text-[#5f0229]" style={{  fontSize: "1.9rem", fontWeight: 700, marginBottom: "2rem" }}>
          {cur.headline}
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem 1.5rem" }}>
          {cur.items.map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--gold)", flexShrink: 0, marginTop: "9px" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "1.02rem", lineHeight: 1.65, color: "var(--text-body)" }}>{item}</span>
            </div>
          ))}
        </div>
        <Link href="/contact" className="" style={{ marginTop: "2.5rem", display: "inline-flex", padding: "0.75rem 1.75rem", fontSize: "0.78rem" }}>
          Enquire about this service →
        </Link>
      </div>

      <style>{`
        @media (max-width: 800px) { .svc-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}