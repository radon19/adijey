import Link from "next/link";
import React from "react"; // Depending on your setup, you might not need this import

// 1. Define the types for the props
interface HighlightCardProps {
  href: string;
  icon: React.ReactNode | string; // Allows a string emoji or an SVG/React Icon
  title: string;
  desc: string;
}

// 2. Apply the interface to the component parameters
export default function HighlightCard({ href, icon, title, desc }: HighlightCardProps) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      {/* Added rounded-2xl for rounded corners and a subtle border/shadow */}
      <div 
        className="border border-gray-200 rounded-2xl hover:shadow-lg hover:border-gray-300 transition-all duration-300" 
        style={{ padding: "2rem", height: "100%", cursor: "pointer", backgroundColor: "#FFFFFF" }}
      >
        <div style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>
          {icon}
        </div>
        
        {/* Title: Black text */}
        <div style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700, color: "#000000", marginBottom: "0.6rem" }}>
          {title}
        </div>
        
        {/* Description: Dark gray for better reading contrast */}
        <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.7, color: "#333333" }}>
          {desc}
        </p>
        
        {/* The Action Text: Using your custom #F62440 color */}
        <div style={{ marginTop: "1.25rem", fontFamily: "var(--font-ui)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em", color: "#F62440", textTransform: "uppercase" }}>
          Learn more →
        </div>
      </div>
    </Link>
  );
}