import Link from "next/link";
import Logo from "./Logo";
import { montserrat } from "@/lib/fonts";

const links = [
  { label: "ABOUT US", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "INDUSTIRES", href: "/industries" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-28 bg-[#ffffff] shadow-sm">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center ">
          <Logo className="h-35 w-auto" />
        </Link>

        {/* Navigation */}
        <nav className={`${montserrat.className} flex gap-12`}>
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[15px] font-bold   text-[#202020] hover:underline text-underline-offset-5px"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <button className={`${montserrat.className} flex gap-12 rounded-full bg-[#760031] px-6 py-3 text-bold font-medium text-white transition hover:scale-105 hover:bg-gray-800`}>
          CONTACT US
        </button>
      </div>
    </header>
  );
}
