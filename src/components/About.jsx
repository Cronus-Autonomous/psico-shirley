import React from "react";
import { HeartPulse, Stethoscope, Users, Heart, BookOpen, BadgeCheck, GraduationCap } from "lucide-react";
import { Image } from "@/components/ui/image";

const PORTRAIT =
  "https://media.base44.com/images/public/user_6aa2dc87ce8b34dd8b7b05f1/b1e77d455_foto-shi.jpg";

const HIGHLIGHTS = [
  { icon: HeartPulse, label: "Clínico" },
  { icon: Stethoscope, label: "Hospitalar" },
  { icon: Users, label: "Social" },
  { icon: Heart, label: "Envelhecimento" },
  { icon: BookOpen, label: "Acadêmico" },
  { icon: BadgeCheck, label: "CRP 06/211753" },
];

const FOCUS = [
  "Ansiedade",
  "Depressão",
  "Luto",
  "Autoestima",
  "Relacionamentos",
  "Autoconhecimento",
  "Envelhecimento",
  "Dificuldades Emocionais",
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-cultured/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Photo */}
        <div className="relative order-2 lg:order-1">
          <div className="relative max-w-md mx-auto lg:max-w-none">
            <div className="absolute -inset-3 rounded-[2rem] bg-emerald/10 -z-10" />
            <div className="overflow-hidden rounded-[2rem] border border-white shadow-luxe">
              <Image
                src={PORTRAIT}
                alt="Dra. Shirley Cástro em ambiente clínico"
                fittingType="fill"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 glass rounded-2xl px-5 py-4 shadow-soft border border-white/60">
              <GraduationCap className="h-7 w-7 text-emerald" />
              <div>
                <p className="font-heading text-sm font-semibold text-emerald-dark">Especialista</p>
                <p className="font-body text-[11px] text-foreground/60">Psicanálise e Neurociência</p>
              </div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="order-1 lg:order-2">
          <span className="font-body text-xs font-semibold tracking-[0.22em] text-bubblegum uppercase">
            Sobre a Profissional
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-semibold text-emerald-dark text-balance">
            Shirley Cástro
          </h2>
          <p className="mt-2 font-body text-sm font-medium text-foreground/50 tracking-wide">
            Psicóloga Clínica · CRP 06/211753
          </p>

          <p className="mt-6 font-body text-base leading-relaxed text-foreground/70">
            Minha trajetória profissional inclui experiências nos contextos
            clínico, hospitalar e social, que contribuíram para uma compreensão
            ampla e sensível das diferentes dimensões do sofrimento humano.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-foreground/70">
            Atuo há dois anos na área clínica, realizando atendimentos a
            adolescentes, adultos e pessoas com 60 anos ou mais. Meu trabalho é
            pautado em uma escuta atenta, acolhedora e qualificada, respeitando a
            singularidade, a história e o tempo de cada pessoa.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-foreground/70">
            Sou especialista em Psicologia Clínica, com foco em questões
            relacionadas a{" "}
            <span className="text-emerald font-medium">
              ansiedade, depressão, luto, autoestima, relacionamentos,
              autoconhecimento, envelhecimento e dificuldades emocionais
            </span>
            , entre outros desafios da vida cotidiana. Minha atuação é
            fundamentada em conhecimentos da Psicanálise e da Neurociência,
            aliados a uma prática humanizada e fundamentada cientificamente.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {HIGHLIGHTS.map((h) => (
              <div
                key={h.label}
                className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-white px-3 py-4 text-center"
              >
                <h.icon className="h-5 w-5 text-emerald" />
                <span className="font-body text-[11px] font-medium text-foreground/70 leading-tight">
                  {h.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-emerald/15 bg-white/70 p-6">
            <h3 className="font-heading text-lg font-semibold text-emerald-dark">
              Meu propósito
            </h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-foreground/70">
              Acredito que a psicoterapia pode ser um espaço de acolhimento,
              autoconhecimento e transformação. Um lugar onde cada pessoa possa
              falar sobre si sem julgamentos, compreender melhor sua própria
              história e encontrar novas possibilidades diante das situações
              que vivencia.
            </p>
            <p className="mt-3 font-body text-sm leading-relaxed text-foreground/70">
              Meu compromisso é oferecer um atendimento ético, individualizado,
              humanizado e baseado em conhecimento científico, respeitando as
              necessidades e particularidades de cada paciente.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {FOCUS.map((f) => (
              <span
                key={f}
                className="rounded-full border border-blush/50 bg-blush/15 px-4 py-1.5 font-body text-xs font-medium text-bubblegum"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}