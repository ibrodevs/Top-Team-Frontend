"use client";

import { ArrowUpRight, Camera, Check, CirclePlay, Handshake, Mail } from "lucide-react";
import { useState } from "react";
import SiteShell from "../../components/layout/SiteShell";
import Reveal from "../../components/shared/Reveal";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import PageHero from "../../components/ui/PageHero";
import { contactCards, contactTopics } from "../../data/siteData";

const iconMap = {
  Instagram: Camera,
  YouTube: CirclePlay,
  Email: Mail,
  "Партнерства": Handshake,
};

const inputClasses =
  "w-full rounded-xl border border-white/12 bg-navy-950/60 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-ash/50 focus:border-electric focus:shadow-glow";

export default function Page() {
  const [sent, setSent] = useState(false);

  return (
    <SiteShell>
      <PageHero
        eyebrow="Контакты"
        title="Свяжись с Top Team"
        description="Партнерства, медиа, матчи или просто поддержка команды — напиши нам, мы на связи."
      />

      <section className="relative bg-navy-900 py-14 md:py-24">
        <div className="stadium-glow pointer-events-none absolute inset-x-0 top-0 h-96" />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:gap-14">
            <div>
              <div className="grid gap-4 sm:grid-cols-2">
                {contactCards.map((item, index) => {
                  const Icon = iconMap[item.label] || Mail;
                  return (
                    <Reveal key={item.label} delay={index * 0.06}>
                      <a
                        href={item.href}
                        target={item.href?.startsWith("http") ? "_blank" : undefined}
                        rel={item.href?.startsWith("http") ? "noreferrer" : undefined}
                        className="glass-card group flex h-full flex-col rounded-2xl p-6 transition-all duration-500 hover:shadow-glow"
                      >
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-royal/15 text-electric transition-all duration-500 group-hover:bg-royal group-hover:text-white">
                          <Icon size={19} />
                        </span>
                        <h3 className="mt-4 font-heading text-[11px] uppercase tracking-[0.2em] text-ash">
                          {item.label}
                        </h3>
                        <p className="mt-1.5 flex items-center gap-1.5 font-medium text-white transition-colors group-hover:text-electric">
                          {item.value}
                          <ArrowUpRight size={13} className="opacity-0 transition-opacity group-hover:opacity-100" />
                        </p>
                      </a>
                    </Reveal>
                  );
                })}
              </div>
              <Reveal delay={0.25}>
                <div className="animated-border mt-6 rounded-2xl p-8">
                  <h3 className="font-display text-2xl font-semibold uppercase text-white">
                    Быстрее всего — Instagram
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ash">
                    Клуб живет в соцсетях: анонсы матчей, контент и обратная связь. Напиши в Direct — ответим быстро.
                  </p>
                  <Button href="https://www.instagram.com/topteam.kg/" size="md" className="mt-5" external>
                    @topteam.kg <ArrowUpRight size={13} />
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="glass-card rounded-3xl p-8 md:p-10">
                <h2 className="text-display text-3xl uppercase text-white">Форма связи</h2>
                {sent ? (
                  <div className="py-14 text-center">
                    <div className="accent-glow mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-royal">
                      <Check className="text-white" size={24} />
                    </div>
                    <p className="font-display text-2xl uppercase text-white">Сообщение отправлено</p>
                    <p className="mt-2 text-sm text-ash">Спасибо! Мы ответим в ближайшее время.</p>
                  </div>
                ) : (
                  <form onSubmit={(event) => { event.preventDefault(); setSent(true); }} className="mt-7 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block font-heading text-xs uppercase tracking-wide text-ash">Имя</label>
                        <input required className={inputClasses} placeholder="Ваше имя" />
                      </div>
                      <div>
                        <label className="mb-2 block font-heading text-xs uppercase tracking-wide text-ash">Email</label>
                        <input required type="email" className={inputClasses} placeholder="you@mail.com" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block font-heading text-xs uppercase tracking-wide text-ash">Тема обращения</label>
                      <select className={inputClasses}>
                        {contactTopics.map((topic) => (
                          <option key={topic}>{topic}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 block font-heading text-xs uppercase tracking-wide text-ash">Сообщение</label>
                      <textarea required rows={5} className={`${inputClasses} resize-none`} placeholder="Ваше сообщение" />
                    </div>
                    <Button className="w-full">Отправить</Button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
