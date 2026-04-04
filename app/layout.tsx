import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AdiJey Engineering Solutions | One Stop Engineering Partner",
    template: "%s | AdiJey Engineering Solutions",
  },
  description:
    "AdiJey Engineering Solutions — driven by knowledge and creating value. Industrial PPE, C&I instruments, valves, fabrication, EPC projects and procurement outsourcing across India.",
  keywords: [
    "engineering solutions india",
    "industrial supply",
    "EPC projects",
    "procurement outsourcing",
    "valve servicing",
    "air pollution control",
    "AdiJey",
    "Raipur",
    "Nagpur",
  ],
  openGraph: {
    siteName: "AdiJey Engineering Solutions",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
