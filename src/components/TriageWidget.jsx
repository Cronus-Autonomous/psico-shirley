import React, { useState } from "react";
import { MessageCircle, ArrowRight, RotateCcw } from "lucide-react";

const WHATSAPP = "https://wa.me/5511993420497";

const OPTIONS = [
  {
    key: "ansiedade",
    label: "Ansiedade, Estresse e Pânico",
    icon: "🌬️",
    title: "Ansiedade, Estresse e Pânico",
    desc: "Quando a ansiedade passa do limite, ela afeta seu dia a dia e seu bem-estar. Se você vive em estado de tensão constante, cansaço, desânimo ou sensação de vazio, a terapia online auxilia a compreender o que sustenta esses estados, a identificar gatilhos, reduzir sintomas e retomar o equilíbrio emocional e qualidade de vida. Mais do que “eliminar sintomas”, o trabalho é escutar o que esses afetos estão dizendo sobre sua história e seu momento de vida.",
  },
  {
    key: "depressao",
    label: "Depressão",
    icon: "🌧️",
    title: "Depressão",
    desc: "A depressão pode tornar tarefas simples mais difíceis. A terapia com psicóloga ajuda a retomar a rotina e o bem-estar, usando técnicas cognitivas e de ativação comportamental para transformar pensamentos e aliviar os sintomas.",
  },
  {
    key: "relacionamentos",
    label: "Relacionamentos e Dependência Emocional",
    icon: "💞",
    title: "Relacionamentos e Dependência Emocional",
    desc: "Quando os vínculos se tornam fonte de angústia, medo de perder, ciúme excessivo ou repetição de relações dolorosas, a terapia online auxilia a compreender padrões que se repetem nas relações, fortalecer vínculos saudáveis e desenvolver comunicação assertiva para conexões mais autênticas e sustentáveis. O trabalho é compreender por que você se encontra nessas posições e abrir espaço para outras formas de se relacionar.",
  },
  {
    key: "luto",
    label: "Luto e Angústia",
    icon: "🕊️",
    title: "Luto e Angústia",
    desc: "O luto é um processo único, profundamente pessoal e muitas vezes solitário. A angústia pode aparecer como um mal-estar sem nome, sensação de vazio ou aperto constante. Aqui na terapia online ela será elaborada, transformada em palavras e escutada com cuidado, tendo como auxílio o acolhimento profissional para processar estas perdas, atravessar momentos de profundo desânimo e reconstruir, no seu tempo, o bem-estar e o significado de seguir. A terapia oferece um espaço para elaborar a perda e as mudanças que ela impõe, permitindo reconstruir o sentido da vida diante dessa dor, no seu tempo, do seu jeito.",
  },
];

export default function TriageWidget() {
  const [selected, setSelected] = useState(null);

  const buildMessage = (opt) =>
    `${WHATSAPP}?text=${encodeURIComponent(
      `Olá, Dra. Shirley! Cheguei até você pelo site e gostaria de conversar sobre: ${opt.title}. Pode me ajudar?`
    )}`;

  const reset = () => setSelected(null);

  return (
    <section id="triagem" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="text-center mb-12">
          <span className="font-body text-xs font-semibold tracking-[0.22em] text-bubblegum uppercase">
            Triagem Digital
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-semibold text-emerald-dark text-balance">
            O que você está buscando no momento?
          </h2>
          <p className="mt-4 font-body text-base text-foreground/60 max-w-2xl mx-auto">
            Escolha a demanda que mais se aproxima do que você sente. Em seguida,
            veja como a terapia pode te ajudar — e converse sobre isso
            diretamente com a Dra. Shirley.
          </p>
        </div>

        <div className="rounded-3xl border border-mint/60 bg-white shadow-soft p-6 sm:p-10">
          {!selected ? (
            <div className="grid sm:grid-cols-2 gap-4">
              {OPTIONS.map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => setSelected(opt)}
                  className="group flex items-start gap-4 rounded-2xl border border-border bg-cultured/60 p-5 text-left hover:border-emerald/40 hover:bg-white hover:shadow-soft transition-all"
                >
                  <span className="text-2xl shrink-0">{opt.icon}</span>
                  <span className="flex flex-col">
                    <span className="font-body text-sm font-semibold text-emerald-dark leading-snug">
                      {opt.label}
                    </span>
                    <span className="mt-1 inline-flex items-center gap-1 font-body text-xs font-medium text-bubblegum opacity-0 group-hover:opacity-100 transition-opacity">
                      Ver abordagem <ArrowRight className="h-3 w-3" />
                    </span>
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="animate-[fadeIn_0.4s_ease]">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl">{selected.icon}</span>
                <h3 className="mt-3 font-heading text-2xl font-semibold text-emerald">
                  {selected.title}
                </h3>
                <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-foreground/70">
                  {selected.desc}
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href={buildMessage(selected)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-emerald px-7 py-4 font-body text-sm font-semibold text-white shadow-luxe hover:bg-emerald-dark transition-colors"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Conversar sobre essa demanda no WhatsApp
                  </a>
                  <button
                    onClick={reset}
                    className="inline-flex items-center gap-2 font-body text-sm font-medium text-foreground/60 hover:text-emerald transition-colors"
                  >
                    <RotateCcw className="h-4 w-4" /> Escolher outra demanda
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: translateY(0) } }`}</style>
    </section>
  );
}