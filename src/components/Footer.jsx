import React from "react";
import { MessageCircle, Phone, Mail, AlertCircle } from "lucide-react";
import Logo from "@/components/Logo";

const WHATSAPP = "https://wa.me/5511993420497";
const PHONE_DISPLAY = "11 99342-0497";
const EMAIL = "contato@shirleyemanuela.com.br";

export default function Footer() {
  return (
    <footer className="bg-emerald-dark text-white/80">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <Logo variant="light" />
            <p className="mt-5 font-body text-sm leading-relaxed text-white/60 max-w-xs">
              Atendimento clínico comportamental para adultos — online e
              presencial. Um espaço seguro para o seu autoconhecimento e bem-estar.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-base font-semibold text-white">Contato</h4>
            <ul className="mt-4 space-y-3 font-body text-sm">
              <li>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-blush transition-colors">
                  <MessageCircle className="h-4 w-4" /> WhatsApp: {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`tel:+5511993420497`} className="flex items-center gap-3 hover:text-blush transition-colors">
                  <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 hover:text-blush transition-colors">
                  <Mail className="h-4 w-4" /> {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-base font-semibold text-white">Registro Profissional</h4>
            <p className="mt-4 font-body text-sm leading-relaxed text-white/60">
              Shirley Cástro<br />
              Psicóloga · CRP 06/211753<br />
              Inscrição de 21/10/2024
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-blush shrink-0 mt-0.5" />
          <p className="font-body text-xs leading-relaxed text-white/70">
            Este site segue estritamente o Código de Ética Profissional do
            Psicólogo. Em caso de crise ou urgência psicológica, ligue para o{" "}
            <a href="tel:188" className="font-semibold text-blush underline-offset-2 hover:underline">CVV (188)</a>{" "}
            ou procure o hospital mais próximo.
          </p>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center font-body text-xs text-white/40">
          © {new Date().getFullYear()} Shirley Cástro · Psicóloga. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}