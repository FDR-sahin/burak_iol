const WHATSAPP_NUMBER = "8801XXXXXXXXX"; // ekhane real number diye replace korben
const CALL_NUMBER = "+8801XXXXXXXXX"; // ekhane real number diye replace korben

function WhatsAppButton() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Assalamu alaikum, ami sorshe-r tel niye order korte chai."
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={`tel:${CALL_NUMBER}`}
        aria-label="Call us"
        className="w-12 h-12 rounded-full bg-charcoal-800 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.21 2.2Z" />
        </svg>
      </a>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp-e message koren"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M17.6 6.32A8.86 8.86 0 0 0 12.05 3.5a8.94 8.94 0 0 0-7.73 13.4L3.5 21l4.23-1.11a8.9 8.9 0 0 0 4.31 1.1h.01a8.93 8.93 0 0 0 8.93-8.92 8.85 8.85 0 0 0-2.38-5.75ZM12.05 19.4h-.01a7.4 7.4 0 0 1-3.77-1.03l-.27-.16-2.81.74.75-2.74-.18-.28a7.41 7.41 0 0 1 11.5-9.1 7.36 7.36 0 0 1 2.17 5.23 7.43 7.43 0 0 1-7.38 7.34Zm4.06-5.55c-.22-.11-1.3-.64-1.5-.72-.2-.07-.35-.11-.5.11-.15.22-.57.72-.7.86-.13.15-.26.16-.48.06-.22-.11-1.32-.55-1.99-1.22a7.46 7.46 0 0 1-1.37-1.7c-.14-.25 0-.39.12-.5.12-.11.27-.28.4-.42.13-.14.18-.24.27-.4.09-.16.04-.3-.02-.42-.06-.11-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.31-.22.25-.86.84-.86 2.05 0 1.2.88 2.37 1 2.53.13.16 1.74 2.66 4.22 3.62 2.48.97 2.48.65 2.93.61.44-.04 1.43-.58 1.63-1.15.2-.56.2-1.04.14-1.15-.06-.1-.21-.16-.43-.27Z" />
        </svg>
      </a>
    </div>
  );
}

export default WhatsAppButton;
