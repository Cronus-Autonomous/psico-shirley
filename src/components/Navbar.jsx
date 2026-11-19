import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";
import Logo from "@/components/Logo";

const WHATSAPP = "https://wa.me/5511993420497";
const PHONE_DISPLAY = "11 99342-0497";
const EMAIL = "contato@shirleyemanuela.com.br";

const NAV_LINKS = [
  { label: "Sobre Mim", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Perguntas Frequentes", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top contact strip */}
      <div className="hidden md:block bg-emerald text-white/90">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-6 px-8 py-1.5 text-xs font-body">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blush transition-colors">
            <MessageCircle className="h-3.5 w-3.5" />
            <span>WhatsApp: {PHONE_DISPLAY}</span>
          </a>
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-blush transition-colors">
            <Mail className="h-3.5 w-3.5" />
            <span>{EMAIL}</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`transition-all duration-300 ${scrolled ? "glass shadow-soft" : "bg-white/80 backdrop-blur-sm"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 py-3">
          <a href="#top" aria-label="Início">
            <Logo />
          </a>

          <div className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-sm font-medium text-foreground/80 hover:text-emerald transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-emerald transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald px-5 py-2.5 font-body text-sm font-semibold text-white shadow-soft hover:bg-emerald-dark transition-colors"
            >
              Agende uma Consulta
            </a>
          </div>

          <button
            className="lg:hidden text-emerald p-1"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden glass border-t border-border px-5 py-4 space-y-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block font-body text-sm font-medium text-foreground/80 py-1.5"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-emerald px-5 py-3 font-body text-sm font-semibold text-white"
            >
              Agende uma Consulta
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}