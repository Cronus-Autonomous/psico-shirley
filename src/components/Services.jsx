import React from "react";
import { MessageSquare, Video, ClipboardCheck, Mic, ArrowRight } from "lucide-react";

const WHATSAPP = "https://wa.me/5511993420497";

const SERVICES = [
  {
    icon: MessageSquare,
    title: "Psicoterapia Comportamental para Adolescentes, Adultos e Adultos 60+",
    desc: "Foco na resolução de problemas, desenvolvimento de autonomia e restabelecimento do bem-estar, com uma escuta atenta e acolhedora.",
  },
  {
    icon: Video,
    title: "Atendimento Online (Nacional e Internacional)",
    desc: "Sessões de 60 minutos por videochamada criptografada, com total sigilo — acesso à terapia de qualquer lugar do mundo.",
  },
  {
    icon: ClipboardCheck,
    title: "Avaliação Psicológica",
    desc: "Investigação segura para a compreensão diagnóstica de transtornos e direcionamento do tratamento mais adequado ao seu caso.",
  },
  {
    icon: Mic,
    title: "Palestras e Rodas de Conversa",
    desc: "Eventos corporativos e acadêmicos sobre saúde mental e bem-estar, com temas como ansiedade, luto, autoestima e relacionamentos.",
  },
];

export default function Services() {
  return (
    <section id="especialidades" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="font-body text-xs font-semibold tracking-[0.22em] text-bubblegum uppercase">
            Áreas de Atuação
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-semibold text-emerald-dark text-balance">
            Serviços pensados para o seu cuidado
          </h2>
          <p className="mt-4 font-body text-base text-foreground/60 max-w-2xl mx-auto">
            Cada modalidade de atendimento é conduzida com ética, sigilo e uma
            abordagem analítico-comportamental centrada em você.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group flex flex-col rounded-3xl border border-border bg-cultured/40 p-7 hover:bg-white hover:shadow-luxe transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald/10 text-emerald transition-colors group-hover:bg-emerald group-hover:text-white">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-emerald-dark leading-snug">
                {s.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-foreground/60 flex-1">
                {s.desc}
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 font-body text-xs font-semibold text-bubblegum hover:text-emerald transition-colors"
              >
                Saber mais <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}