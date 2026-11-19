import React from "react";
import { MessageCircle, Calendar, Clock, ShieldCheck } from "lucide-react";
import { Image } from "@/components/ui/image";

const WHATSAPP = "https://wa.me/5511993420497";
const PORTRAIT =
  "https://media.base44.com/images/public/user_6aa2dc87ce8b34dd8b7b05f1/b1e77d455_foto-shi.jpg";

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      {/* Soft background wash */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-mint/40 via-blush/20 to-white" />
      <div className="absolute -top-24 -right-24 -z-10 h-96 w-96 rounded-full bg-blush/30 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 -z-10 h-96 w-96 rounded-full bg-mint/30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left: copy */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald/20 bg-white/70 px-4 py-1.5 text-xs font-body font-medium tracking-[0.18em] text-emerald uppercase">
            <ShieldCheck className="h-3.5 w-3.5" />
            CRP 06/211753
          </span>

          <p className="mt-4 font-body text-sm font-medium text-foreground/60 max-w-xl mx-auto lg:mx-0">
            Psicoterapia online particular com especialista em Psicanálise e Neurociência.
          </p>

          <h1 className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] text-emerald-dark text-balance">
            Especialista em{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-emerald">COMPORTAMENTAL</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-blush/50 -z-0 rounded" />
            </span>
          </h1>

          <p className="mt-6 max-w-xl mx-auto lg:mx-0 font-body text-base sm:text-lg leading-relaxed text-foreground/70">
            Atendimento clínico especializado para adolescentes, adultos e adultos
            60 anos ou mais. Superando desafios, ansiedade, depressão, luto,
            envelhecimento e fortalecendo sua saúde mental com abordagem
            analítico-comportamental.
          </p>

          <div className="mt-7 flex flex-wrap justify-center lg:justify-start gap-x-7 gap-y-3 font-body text-sm text-foreground/70">
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4 text-bubblegum" /> Segunda a Sexta
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-bubblegum" /> Online & Presencial
            </span>
          </div>

          <div className="mt-9 flex flex-col sm:flex-row items-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-emerald px-7 py-4 font-body text-sm font-semibold text-white shadow-luxe hover:bg-emerald-dark transition-all hover:gap-4"
            >
              <MessageCircle className="h-5 w-5" />
              Agende uma Consulta
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#triagem"
              className="font-body text-sm font-medium text-emerald underline-offset-4 hover:underline"
            >
              Faça uma triagem rápida ↓
            </a>
          </div>
        </div>

        {/* Right: portrait */}
        <div className="order-1 lg:order-2 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-emerald/15 to-blush/30 -z-10 blur-md" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 shadow-luxe">
              <Image
                src={PORTRAIT}
                alt="Dra. Shirley Cástro, psicóloga clínica"
                fittingType="fill"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/30 via-transparent to-transparent" />
            </div>

            {/* Floating credential badge */}
            <div className="absolute -bottom-5 -left-5 hidden sm:block glass rounded-2xl px-5 py-3 shadow-soft border border-white/60">
              <p className="font-heading text-sm font-semibold text-emerald">Dra. Shirley Cástro</p>
              <p className="font-body text-[11px] tracking-wide text-foreground/60 mt-0.5">
                Psicóloga Clínica · CRP 06/211753
              </p>
            </div>

            {/* Floating diamond accent */}
            <div className="absolute -top-4 -right-3 hidden sm:flex h-16 w-16 rotate-45 items-center justify-center rounded-xl bg-blush/70 shadow-soft">
              <span className="-rotate-45 font-heading text-lg text-white">S</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}