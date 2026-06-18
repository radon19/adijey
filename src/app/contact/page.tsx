"use client"

import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";



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
            <Header />

            <div className="bg-white" style={{ padding: "9rem 2.5rem 5rem", borderBottom: "1px solid #f3f4f6" }}>
                <div style={{ maxWidth: "1380px", margin: "0 auto" }}>

                    {/* Eyebrow Label */}
                    <div className="flex items-center gap-3 mb-6">
                        <div style={{ width: 30, height: 2, backgroundColor: "#5f0229" }} />
                        <span
                            className="font-sans text-xs font-bold tracking-[0.25em] uppercase"
                            style={{ color: "#5f0229" }}
                        >
                            Get In Touch
                        </span>
                    </div>

                    {/* Main Title */}
                    <h1
                        className="font-sans font-bold text-gray-900"
                        style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.05, maxWidth: 680 }}
                    >
                        Let's Build <span style={{ color: "#5f0229" }}>Together</span>
                    </h1>

                </div>
            </div>

            <section style={{ background: "#5f0229", padding: "7rem 2.5rem" }}>
                <div className="max-w-345 mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-20 items-start">

                    {/* --- LEFT COLUMN: Direct Contact Info --- */}
                    <div>

                        {/* Eyebrow Label */}
                        <div className="flex items-center gap-3 mb-8">
                            <div style={{ width: 30, height: 2, backgroundColor: "#ffffff" }} />
                            <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-white">
                                Direct Contact
                            </span>
                        </div>

                        {/* Managing Director */}
                        <div className="mb-6">
                            <div className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-gray-300 mb-1.5">
                                Managing Director
                            </div>
                            <div className="font-sans text-2xl font-bold text-white">
                                Aditya Yadav
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="mb-6">
                            <div className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-gray-300 mb-1.5">
                                Phone
                            </div>
                            <a
                                href="tel:+918169384266"
                                className="font-sans text-3xl font-bold text-white hover:text-gray-200 transition-colors inline-block"
                            >
                                +91 81693 84266
                            </a>
                        </div>

                        {/* Email */}
                        <div className="mb-10">
                            <div className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-gray-300 mb-1.5">
                                Email
                            </div>
                            {["info.adijey@gmail.com"].map(e => (
                                <a
                                    key={e}
                                    href={`mailto:${e}`}
                                    className="font-sans text-lg font-semibold text-gray-100 hover:text-white transition-colors block"
                                >
                                    {e}
                                </a>
                            ))}
                        </div>

                        {/* WhatsApp Button */}
                        <a
                            href={`https://wa.me/918169384266?text=${encodeURIComponent("Hello AdiJey Engineering Solutions, I'd like to make an enquiry.")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-6 py-4 rounded-md mb-16 transition-all duration-300 hover:opacity-90 shadow-lg hover:shadow-xl"
                            style={{ backgroundColor: "#25d366", color: "#ffffff" }}
                        >
                            <svg viewBox="0 0 32 32" width="20" height="20" fill="currentColor">
                                <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.736 5.476 2.027 7.78L0 32l8.432-2.008A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.27 20.497c-.398-.2-2.354-1.162-2.72-1.294-.365-.133-.632-.2-.898.2-.266.398-1.032 1.294-1.265 1.56-.233.267-.466.3-.864.1-.399-.2-1.682-.62-3.205-1.98-1.184-1.057-1.983-2.363-2.216-2.762-.233-.398-.025-.613.175-.81.18-.179.399-.466.598-.7.2-.233.266-.399.4-.665.133-.267.066-.5-.034-.7-.1-.2-.898-2.163-1.231-2.962-.324-.778-.654-.673-.898-.685l-.765-.013c-.266 0-.698.1-1.064.5-.365.398-1.397 1.362-1.397 3.325s1.43 3.858 1.63 4.124c.199.267 2.814 4.296 6.82 6.025.953.411 1.696.657 2.276.841.957.304 1.828.261 2.516.158.767-.114 2.354-.962 2.687-1.891.332-.93.332-1.727.232-1.892-.1-.165-.365-.265-.764-.465z" />
                            </svg>
                            <span className="font-sans text-sm font-bold tracking-[0.15em] uppercase">
                                Chat on WhatsApp
                            </span>
                        </a>

                        {/* Offices Grid */}
                        <div>
                            <div className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gray-300 mb-5">
                                Our Offices
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                {offices.map(o => (
                                    <div
                                        key={o.city}
                                        className="bg-white rounded-md p-4 shadow-md transition-transform hover:-translate-y-0.5"
                                    >
                                        <div className="font-sans text-sm font-bold text-gray-900 mb-1">
                                            {o.city}
                                        </div>
                                        <div
                                            className="font-sans text-xs font-bold uppercase tracking-widest"
                                            style={{ color: "#5f0229" }}
                                        >
                                            {o.state}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* --- RIGHT COLUMN: Form --- */}
                    {/* Wrapping the ContactForm in a white card makes it look incredibly clean against the red background */}
                    <div className="bg-white text-black rounded-xl p-8 lg:p-12 shadow-2xl">
                        <h3
                            className="font-sans text-3xl font-bold mb-8 pl-10"
                            style={{ color: "#5f0229" }}
                        >
                            Send an Enquiry
                        </h3>
                        
                        <ContactForm />
                    </div>

                </div>
            </section>

            <Footer />
            <style>{`
        @media (max-width: 900px) { .contact-layout { grid-template-columns: 1fr !important; } }
      `}</style>
        </>
    );
}