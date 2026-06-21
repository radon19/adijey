import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#FFFAF3" }} className="text-black  py-12 px-6 font-poppins font-normal text-[16px]">
      <div style={{ maxWidth: "1640px", margin: "0 auto" }}>

        {/* Top Section: 4 Columns */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-16">

          {/* Column 1: Brand & Description */}
          <div className="text-red-500 lg:col-span-1">

            <Logo className="h-35 w-auto" />
            <p className="text-black text-base leading-relaxed ">
              Driven by Knowledge &amp; Creating Value across India's core
              industrial sectors since 2018.
            </p>
          </div>

          {/* Column 2: Pages Links */}
          <div>
            <h4 className=" font-bold tracking-[0.2em] uppercase mb-6">
              Pages
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Industries", href: "/industries" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className=" hover:underline font-semibold transition-colors font-sans text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className=" font-bold tracking-[0.2em] uppercase mb-6">
              Contact
            </h4>
            <ul className="flex flex-col gap-3 font-semibold  text-sm">
              <li>Aditya Yadav — MD</li>
              <li>+91 81693 84266</li>
              <li>
                <a href="mailto:info.adijey@gmail.com" className="hover:underline transition-colors">
                  info@adijey.com
                </a>
              </li>
              <li>
                <a href="mailto:info.adijey@gmail.com" className="hover:underline transition-colors">
                  bd@adijey.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Offices Tags */}
          <div>
            <h4 className="text-xl font-bold tracking-[0.2em] uppercase mb-6">
              Offices
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Raipur", "New Delhi", "Nagpur", "Chennai", "Hyderabad", "Bangalore", "Mangalore", "Buxar"].map((city) => (
                <span
                  key={city}
                  className="text-xs font-medium px-3 py-1.5 border border-gray-700/60 rounded"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
                >
                  {city}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 pt-10">
              <span
                className="text-xl font-bold px-3 py-1.5 border text-black border-gray-700/60 rounded"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
              >
                Proudly Recognized by Startup India
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="border-t border-gray-700/50 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className=" text-xs font-medium font-sans text-center md:text-left">
            © 2026 AdiJey Engineering Solutions (OPC) Pvt. Ltd. · All Rights Reserved
          </p>
          <p className=" text-xs font-bold tracking-wider font-sans uppercase">
            CIN: OPC India
          </p>
        </div>

      </div>
    </footer>
  );
}