"use client";

import { Camera, Check, Clock3, Globe, Phone } from "lucide-react";
import { useState } from "react";
import SiteShell from "../../components/layout/SiteShell";
import Reveal from "../../components/shared/Reveal";
import SplitTitle from "../../components/shared/SplitTitle";
import { contactCards, contactTopics } from "../../data/siteData";

const iconMap = {
  Instagram: Camera,
  YouTube: Globe,
  Email: Globe,
  "Телефон / WhatsApp": Phone,
};

export default function Page() {
  const [sent, setSent] = useState(false);

  return (
    <SiteShell>
      <div className="min-h-screen bg-ink pt-20 md:pt-24">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Контакты</span>
            <SplitTitle text="Связь с Top Team KG" as="h1" className="text-display mt-3 text-[clamp(2.5rem,8vw,7rem)] text-white" />
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ash">
              По документу важно убрать фейковые контакты. Поэтому здесь остаются только подтвержденные точки входа и форма, которую позже можно подключить к реальной отправке.
            </p>
          </div>
        </section>
        <section className="py-12 pb-32 md:py-20">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:px-10 lg:grid-cols-2">
            <div>
              <div className="grid gap-4 sm:grid-cols-2">
                {contactCards.map((item, index) => {
                  const Icon = iconMap[item.label] || Globe;
                  const content = item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer" className="text-white transition-colors hover:text-gold">{item.value}</a>
                  ) : (
                    <p className="text-white">{item.value}</p>
                  );
                  return (
                    <Reveal key={item.label} delay={index * 0.08}>
                      <div className="card-gradient h-full border border-ink-border p-6">
                        <Icon className="mb-3 text-gold" size={20} />
                        <h3 className="mb-1 font-heading text-xs uppercase tracking-wide text-ash">{item.label}</h3>
                        {content}
                      </div>
                    </Reveal>
                  );
                })}
              </div>
              <Reveal delay={0.3}>
                <div className="card-gradient mt-6 border border-ink-border p-8">
                  <div className="mb-4 flex items-center gap-3 text-gold">
                    <Clock3 size={18} />
                    <span className="font-heading text-xs uppercase tracking-[0.2em]">Что еще нужно запросить у клуба</span>
                  </div>
                  <p className="text-sm leading-relaxed text-ash">
                    Официальный email, телефон, ответственный менеджер, Telegram или WhatsApp, а также необходимость публиковать карту или адрес офиса.
                  </p>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <div className="card-gradient border border-ink-border p-8 md:p-10">
                <h2 className="mb-6 font-display text-2xl text-white">Форма связи</h2>
                {sent ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/20">
                      <Check className="text-gold" size={22} />
                    </div>
                    <p className="font-display text-xl text-white">Сообщение отправлено</p>
                    <p className="mt-2 text-sm text-ash">Форму можно подключить к почте клуба после получения официальных контактов.</p>
                  </div>
                ) : (
                  <form onSubmit={(event) => { event.preventDefault(); setSent(true); }} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-xs uppercase tracking-wide text-ash">Имя</label>
                        <input required className="w-full border border-ink-border bg-ink px-4 py-3 text-white outline-none transition-colors focus:border-gold" />
                      </div>
                      <div>
                        <label className="mb-2 block text-xs uppercase tracking-wide text-ash">Email</label>
                        <input required type="email" className="w-full border border-ink-border bg-ink px-4 py-3 text-white outline-none transition-colors focus:border-gold" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wide text-ash">Тема обращения</label>
                      <select className="w-full border border-ink-border bg-ink px-4 py-3 text-white outline-none transition-colors focus:border-gold">
                        {contactTopics.map((topic) => (
                          <option key={topic}>{topic}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wide text-ash">Сообщение</label>
                      <textarea required rows={5} className="w-full resize-none border border-ink-border bg-ink px-4 py-3 text-white outline-none transition-colors focus:border-gold" />
                    </div>
                    <button className="accent-glow accent-glow-hover inline-flex w-full items-center justify-center gap-2 bg-gold px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-gold-light">
                      Отправить
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
