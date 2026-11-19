import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ_ITEMS = [
  {
    q: "Para que serve a psicoterapia?",
    a: "A psicoterapia comportamental para adultos é direcionada para a resolução de problemas e desafios do cotidiano. Todos nós em algum momento da vida já passamos por algum incômodo que persiste e não sabemos como resolver. E seja qual incômodo for, o tratamento psicológico vai te ajudar a minimizá-lo, encontrando novos caminhos e possibilidades, restabelecendo seu bem-estar e te fortalecendo para a trajetória.",
  },
  {
    q: "Como funciona o atendimento online?",
    a: "A terapia online acontece em dia e horário previamente agendado, por meio de vídeo chamadas em plataformas criptografadas, o que te permite ter acesso ao processo terapêutico com segurança e qualidade em qualquer lugar do mundo. Tem duração de 1 hora, são 60 minutos para olhar para si. Na primeira consulta online você irá falar sobre suas queixas, sintomas ou razões pelas quais busca a psicoterapia, bem como irei te explicar como funciona o tratamento e qual a conduta terapêutica mais recomendada conforme o seu caso.",
  },
  {
    q: "Como funciona a avaliação psicológica?",
    a: "O processo de avaliação psicológica pode ser iniciado quando uma pessoa é encaminhada por algum especialista com quem faz acompanhamento clínico, ou quando a própria pessoa percebe em si a necessidade de compreensão aprofundada e deseja realizar uma investigação de forma segura e individualizada. A avaliação psicológica ajuda na compreensão diagnóstica de diferentes tipos de transtornos, além de auxiliar no tratamento adequado para cada pessoa.",
  },
  {
    q: "É possível te convidar para palestras e rodas de conversas?",
    a: "Sim! Ao longo da minha trajetória profissional, somei experiências no ambiente organizacional, hospitalar, clínico e acadêmico. Sou especialista em Psicologia Clínica Hospitalar, além de formações em temas como ansiedade, depressão, luto, obesidade, autoestima, relacionamentos, saúde mental e outros. Realizo palestras e rodas de conversa, a respeito de temas que envolvem a saúde mental e o bem-estar.",
  },
  {
    q: "A terapia online é sigilosa?",
    a: "Sim. Todo o conteúdo que você compartilha em sessão é protegido pelo sigilo profissional, conforme o código de ética da psicologia.",
  },
  {
    q: "Quanto tempo dura cada sessão?",
    a: "Cada sessão tem duração de 1 hora.",
  },
  {
    q: "Qual a frequência dos atendimentos?",
    a: "As sessões são semanais. Mas isso pode ser ajustado conforme sua demanda e disponibilidade.",
  },
  {
    q: "Os atendimentos são particulares?",
    a: "Sim, os atendimentos são particulares. Caso tenha dúvidas sobre valores ou reembolso pelo plano de saúde, podemos conversar melhor pelo WhatsApp.",
  },
  {
    q: "Atendimentos por plano de saúde são aceitos?",
    a: "Não, o atendimento é particular. No entanto, posso emitir recibos para que você solicite reembolso junto ao seu plano, se ele oferecer essa possibilidade.",
  },
  {
    q: "Preciso ter um motivo muito grave para começar a terapia?",
    a: "Não. A terapia acolhe desde incômodos cotidianos até situações mais profundas. Você pode iniciar mesmo que não saiba exatamente o que está sentindo. O processo terapêutico muitas vezes ajuda exatamente isto: a nomear, entender e transformar.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-cultured/50">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center mb-12">
          <span className="font-body text-xs font-semibold tracking-[0.22em] text-bubblegum uppercase">
            Dúvidas Frequentes
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-semibold text-emerald-dark text-balance">
            Perguntas que podem te ajudar
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border bg-white transition-all ${
                  isOpen ? "border-emerald/30 shadow-soft" : "border-border"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base sm:text-lg font-medium text-emerald-dark">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen ? "bg-emerald text-white" : "bg-cultured text-emerald"
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-6 font-body text-sm leading-relaxed text-foreground/70">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}