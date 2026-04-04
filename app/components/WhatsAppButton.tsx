"use client";

export default function WhatsAppButton() {
  const phone = "918169384266";
  const msg = encodeURIComponent("Hello AdiJey Engineering Solutions, I'd like to know more about your services.");
  return (
    <a
      href={`https://wa.me/${phone}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 9999,
        width: "54px",
        height: "54px",
        borderRadius: "50%",
        background: "#25d366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "scale(1.12) translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 8px 28px rgba(37,211,102,0.6)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,211,102,0.4)";
      }}
    >
      <svg viewBox="0 0 32 32" width="26" height="26" fill="white">
        <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.736 5.476 2.027 7.78L0 32l8.432-2.008A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.77-1.853l-.485-.289-5.004 1.192 1.274-4.866-.316-.5A13.226 13.226 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.836c-.398-.2-2.354-1.162-2.72-1.294-.365-.133-.632-.2-.898.2-.266.398-1.032 1.294-1.265 1.56-.233.267-.466.3-.864.1-.399-.2-1.682-.62-3.205-1.98-1.184-1.057-1.983-2.363-2.216-2.762-.233-.398-.025-.613.175-.81.18-.179.399-.466.598-.7.2-.233.266-.399.4-.665.133-.267.066-.5-.034-.7-.1-.2-.898-2.163-1.231-2.962-.324-.778-.654-.673-.898-.685l-.765-.013c-.266 0-.698.1-1.064.5-.365.398-1.397 1.362-1.397 3.325s1.43 3.858 1.63 4.124c.199.267 2.814 4.296 6.82 6.025.953.411 1.696.657 2.276.841.957.304 1.828.261 2.516.158.767-.114 2.354-.962 2.687-1.891.332-.93.332-1.727.232-1.892-.1-.165-.365-.265-.764-.465z"/>
      </svg>
    </a>
  );
}
