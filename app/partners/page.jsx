"use client";

import { useState } from "react";
import SiteShell from "../../components/layout/SiteShell";
import Reveal from "../../components/shared/Reveal";
import SplitTitle from "../../components/shared/SplitTitle";
import { partnerBenefits, partnerFormats, partnerSlots } from "../../data/siteData";

export default function Page() {
  const [sent, setSent] = useState(false);

  return (
    <SiteShell>
      <div className="min-h-screen bg-ink pt-20 md:pt-24">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Партнеры</span>
            <SplitTitle text="Платформа для брендов рядом с Top Team KG" as="h1" className="text-display mt-3 text-[clamp(2.5rem,8vw,7rem)] text-white" />
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ash">
              Страница партнерства должна не просто показывать логотипы, а объяснять ценность клуба для брендов: футбол, медиа, молодежная аудитория, контент и гибкие интеграции.
            </p>
          </div>
        </section>

        <section className="border-t border-ink-border py-12">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {partnerBenefits.map((item, index) => (
                <Reveal key={item.title} delay={(index % 4) * 0.08}>
                  <div className="card-gradient h-full border border-ink-border p-8">
                    <h2 className="font-display text-2xl text-white">{item.title}</h2>
                    <p className="mt-4 text-sm leading-relaxed text-ash">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-ink-border bg-ink-card py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <SplitTitle text="Форматы сотрудничества" as="h2" className="text-display mb-12 text-3xl text-white md:text-5xl" />
            <div className="grid gap-6 md:grid-cols-2">
              {partnerFormats.map((format, index) => (
                <Reveal key={format.title} delay={(index % 2) * 0.08}>
                  <div className="card-gradient h-full border border-ink-border p-8">
                    <span className="text-xs uppercase tracking-[0.3em] text-gold">Пакет</span>
                    <h3 className="mt-4 font-display text-3xl text-white">{format.title}</h3>
                    <p className="mt-4 leading-relaxed text-ash">{format.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-ink-border py-16 md:py-24">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:px-10 lg:grid-cols-[0.8fr,1.2fr]">
            <div className="space-y-6">
              {partnerSlots.map((slot, index) => (
                <Reveal key={slot.title} delay={index * 0.08}>
                  <div className="card-gradient border border-ink-border p-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-gold">{slot.title}</p>
                    <p className="mt-3 text-sm leading-relaxed text-ash">{slot.status}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.15}>
              <div className="card-gradient border border-ink-border p-8 md:p-10">
                <h2 className="mb-6 font-display text-2xl text-white">Запрос на партнерство</h2>
                {sent ? (
                  <div className="py-12 text-center">
                    <p className="font-display text-xl text-white">Запрос принят</p>
                    <p className="mt-2 text-sm text-ash">Дальше можно подключить реальную отправку в CRM или на email клуба.</p>
                  </div>
                ) : (
                  <form onSubmit={(event) => { event.preventDefault(); setSent(true); }} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-xs uppercase tracking-wide text-ash">Имя</label>
                        <input required className="w-full border border-ink-border bg-ink px-4 py-3 text-white outline-none transition-colors focus:border-gold" />
                      </div>
                      <div>
                        <label className="mb-2 block text-xs uppercase tracking-wide text-ash">Компания</label>
                        <input required className="w-full border border-ink-border bg-ink px-4 py-3 text-white outline-none transition-colors focus:border-gold" />
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-xs uppercase tracking-wide text-ash">Email</label>
                        <input required type="email" className="w-full border border-ink-border bg-ink px-4 py-3 text-white outline-none transition-colors focus:border-gold" />
                      </div>
                      <div>
                        <label className="mb-2 block text-xs uppercase tracking-wide text-ash">Телефон</label>
                        <input className="w-full border border-ink-border bg-ink px-4 py-3 text-white outline-none transition-colors focus:border-gold" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wide text-ash">Формат сотрудничества</label>
                      <input className="w-full border border-ink-border bg-ink px-4 py-3 text-white outline-none transition-colors focus:border-gold" placeholder="Например: партнер матча или видео-партнер" />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wide text-ash">Комментарий</label>
                      <textarea required rows={5} className="w-full resize-none border border-ink-border bg-ink px-4 py-3 text-white outline-none transition-colors focus:border-gold" />
                    </div>
                    <button className="accent-glow accent-glow-hover inline-flex w-full items-center justify-center gap-2 bg-gold px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-gold-light">
                      Отправить запрос
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
