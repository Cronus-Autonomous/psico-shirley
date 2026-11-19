import React, { useState } from "react";
import { MessageCircle, User, Mail, Phone, Send } from "lucide-react";

const WHATSAPP = "https://wa.me/5511993420497";

export default function ContactForm() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Olá, Dra. Shirley! Meu nome é ${form.nome || "(nome)"}.\nEmail: ${form.email || "(email)"}\nTelefone/WhatsApp: ${form.telefone || "(telefone)"}\n\nMotivo da consulta: ${form.mensagem || "(mensagem)"}`;
    window.open(`${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="agendar" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center">
          {/* Left copy */}
          <div className="lg:col-span-2">
            <span className="font-body text-xs font-semibold tracking-[0.22em] text-bubblegum uppercase">
              Agendamento
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-semibold text-emerald-dark text-balance">
              Vamos conversar sobre o seu cuidado
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed text-foreground/65">
              Preencha os campos ao lado e sua mensagem será encaminhada
              diretamente para o WhatsApp da Dra. Shirley. Um primeiro contato
              acolhedor para começarmos quando você se sentir pronto.
            </p>
            <div className="mt-8 space-y-3 font-body text-sm text-foreground/70">
              <p className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald/10 text-emerald">
                  <Phone className="h-4 w-4" />
                </span>
                11 99342-0497
              </p>
              <p className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald/10 text-emerald">
                  <MessageCircle className="h-4 w-4" />
                </span>
                Atendimento online e presencial
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-white p-6 sm:p-8 shadow-luxe space-y-5"
            >
              <Field icon={User} label="Nome Completo">
                <input
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome completo"
                  className="w-full bg-transparent font-body text-sm text-foreground placeholder:text-foreground/35 focus:outline-none"
                />
              </Field>

              <Field icon={Mail} label="E-mail">
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                  className="w-full bg-transparent font-body text-sm text-foreground placeholder:text-foreground/35 focus:outline-none"
                />
              </Field>

              <Field icon={Phone} label="Telefone / WhatsApp">
                <input
                  name="telefone"
                  value={form.telefone}
                  onChange={handleChange}
                  required
                  placeholder="(11) 90000-0000"
                  className="w-full bg-transparent font-body text-sm text-foreground placeholder:text-foreground/35 focus:outline-none"
                />
              </Field>

              <div>
                <label className="font-body text-xs font-semibold tracking-wide text-foreground/50 uppercase">
                  Mensagem / Motivo da Consulta
                </label>
                <textarea
                  name="mensagem"
                  value={form.mensagem}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Conte um pouco sobre o que te trouxe até aqui..."
                  className="mt-2 w-full rounded-xl border border-border bg-cultured/40 px-4 py-3 font-body text-sm text-foreground placeholder:text-foreground/35 focus:border-emerald/50 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-full bg-emerald px-6 py-4 font-body text-sm font-semibold text-white shadow-luxe hover:bg-emerald-dark transition-all"
              >
                <MessageCircle className="h-5 w-5" />
                Falar diretamente no WhatsApp
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-center font-body text-[11px] text-foreground/40">
                Seus dados são tratados com sigilo profissional.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ icon: Icon, label, children }) {
  return (
    <div>
      <label className="font-body text-xs font-semibold tracking-wide text-foreground/50 uppercase">
        {label}
      </label>
      <div className="mt-2 flex items-center gap-3 rounded-xl border border-border bg-cultured/40 px-4 py-3 focus-within:border-emerald/50 transition-colors">
        <Icon className="h-4 w-4 text-emerald/70 shrink-0" />
        {children}
      </div>
    </div>
  );
}