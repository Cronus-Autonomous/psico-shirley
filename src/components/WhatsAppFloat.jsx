import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const WHATSAPP = "https://wa.me/5511993420497";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className={`fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-emerald px-4 py-3.5 text-white shadow-luxe transition-all duration-300 hover:bg-emerald-dark ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline font-body text-sm font-semibold pr-1">
        Fale comigo
      </span>
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bubblegum opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-bubblegum" />
      </span>
    </a>
  );
}