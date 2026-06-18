import React from 'react';

export default function WhatsAppButton() {
  const phoneNumber = "918169384266";
  const message = "Hello AdiJey Engineering Solutions, I'd like to make an enquiry.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Pill-shaped Button with Icon and Text */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-5 py-3 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
        style={{ backgroundColor: "#25D366", color: "white" }}
        aria-label="Chat with us on WhatsApp"
      >
        {/* WhatsApp Icon */}
        <svg viewBox="0 0 32 32" width="24" height="24" fill="currentColor">
          <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.736 5.476 2.027 7.78L0 32l8.432-2.008A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.27 20.497c-.398-.2-2.354-1.162-2.72-1.294-.365-.133-.632-.2-.898.2-.266.398-1.032 1.294-1.265 1.56-.233.267-.466.3-.864.1-.399-.2-1.682-.62-3.205-1.98-1.184-1.057-1.983-2.363-2.216-2.762-.233-.398-.025-.613.175-.81.18-.179.399-.466.598-.7.2-.233.266-.399.4-.665.133-.267.066-.5-.034-.7-.1-.2-.898-2.163-1.231-2.962-.324-.778-.654-.673-.898-.685l-.765-.013c-.266 0-.698.1-1.064.5-.365.398-1.397 1.362-1.397 3.325s1.43 3.858 1.63 4.124c.199.267 2.814 4.296 6.82 6.025.953.411 1.696.657 2.276.841.957.304 1.828.261 2.516.158.767-.114 2.354-.962 2.687-1.891.332-.93.332-1.727.232-1.892-.1-.165-.365-.265-.764-.465z" />
        </svg>

        {/* Text Label */}
        <span className="font-sans font-bold text-sm tracking-wide whitespace-nowrap">
          Chat
        </span>
      </a>
      
    </div>
  );
}