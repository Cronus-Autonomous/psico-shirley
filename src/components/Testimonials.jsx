import React from "react";
import { Quote, MessageCircle } from "lucide-react";

const WHATSAPP = "https://wa.me/5511993420497";

// Em breve: adicione aqui os depoimentos dos pacientes (com consentimento).
// Cada item: { name: "...", text: "..." }
const TESTIMONIALS = [];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="text-center mb-12">
          <span className="font-body text-xs font-semibold tracking-[0.22em] text-bubblegum uppercase">
            Depoimentos
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-semibold text-emerald-dark text-balance">
            Histórias de quem decidiu cuidar de si
          </h2>
        </div>

        {TESTIMONIALS.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <figure
                key={i}
                className="flex flex-col rounded-3xl border border-border bg-white p-7 shadow-soft"
              >
                <Quote className="h-7 w-7 text-blush" />
                <blockquote className="mt-4 flex-1 font-body text-sm leading-relaxed text-foreground/70">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-5 font-heading text-sm font-semibold text-emerald-dark">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-emerald/30 bg-white/70 px-6 py-14 text-center">
            <Quote className="mx-auto h-9 w-9 text-blush/70" />
            <p className="mt-5 font-body text-base text-foreground/60 max-w-md mx-auto">
              Em breve, este espaço vai reunir relatos de pacientes que confiaram
              no processo terapêutico. Cada história é única — e será
              compartilhada com respeito e consentimento.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-emerald px-6 py-3 font-body text-sm font-semibold text-white shadow-soft hover:bg-emerald-dark transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> Iniciar minha história
            </a>
          </div>
        )}
      </div>
    </section>
  );
}