"use client";

import { Calendar, Check, Clapperboard, Megaphone, Play, Shirt, Trophy } from "lucide-react";
import { useState } from "react";
import SiteShell from "../../components/layout/SiteShell";
import Reveal from "../../components/shared/Reveal";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import PageHero from "../../components/ui/PageHero";
import SectionHeader from "../../components/ui/SectionHeader";
import { partnerBenefits, partnerFormats, partnerSlots } from "../../data/siteData";

const formatIcons = {
  shirt: Shirt,
  clapperboard: Clapperboard,
  calendar: Calendar,
  play: Play,
  trophy: Trophy,
  megaphone: Megaphone,
};

const inputClasses =
  "w-full rounded-xl border border-white/12 bg-navy-950/60 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-ash/50 focus:border-electric focus:shadow-glow";

export default function Page() {
  const [sent, setSent] = useState(false);

  return (
    <SiteShell>
      <PageHero
        eyebrow="Партнерство"
        title="Станьте частью Top Team KG"
        description="Футбол, медиа, молодежная аудитория и живой контент — площадка для брендов, которые хотят быть ближе к новой спортивной культуре."
      >
        <Reveal delay={0.35}>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#partner-form">Получить партнерское предложение</Button>
            <Button href="/contact" variant="secondary">Связаться с клубом</Button>
          </div>
        </Reveal>
      </PageHero>

      {/* Почему Top Team */}
      <section className="bg-navy-900 py-16 md:py-24">
        <Container>
          <SectionHeader
            eyebrow="Ценность"
            title="Почему бренды выбирают нас"
          />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {partnerBenefits.map((item, index) => (
              <Reveal key={item.title} delay={(index % 4) * 0.06}>
                <div className="glass-card group h-full rounded-2xl p-7 transition-all duration-500 hover:shadow-glow">
                  <span className="gradient-text font-display text-4xl font-bold">0{index + 1}</span>
                  <h3 className="mt-4 font-display text-xl font-semibold uppercase text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ash">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Форматы сотрудничества */}
      <section className="relative border-t border-electric/10 bg-navy-950 py-16 md:py-24">
        <div className="stadium-glow pointer-events-none absolute inset-x-0 top-0 h-96" />
        <Container className="relative">
          <SectionHeader
            eyebrow="Форматы"
            title="Форматы сотрудничества"
            description="От логотипа на форме до полноценных медиа-кампаний — собираем пакет под задачи бренда."
          />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {partnerFormats.map((format, index) => {
              const Icon = formatIcons[format.icon] || Trophy;
              return (
                <Reveal key={format.title} delay={(index % 3) * 0.06}>
                  <div className="glass-card group h-full rounded-2xl p-8 transition-all duration-500 hover:shadow-glow">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-royal/15 text-electric transition-all duration-500 group-hover:bg-royal group-hover:text-white group-hover:shadow-glow">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-semibold uppercase text-white">{format.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ash">{format.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Слоты логотипов */}
      <section className="border-t border-electric/10 bg-navy-900 py-16 md:py-20">
        <Container>
          <SectionHeader
            eyebrow="Партнеры клуба"
            title="Здесь может быть ваш бренд"
          />
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {partnerSlots.map((slot, index) => (
              <Reveal key={`${slot.title}-${index}`} delay={index * 0.06}>
                <div className="glass-card flex aspect-[16/9] flex-col items-center justify-center gap-2 rounded-2xl border-dashed transition-all duration-500 hover:shadow-glow">
                  <span className="font-display text-lg font-semibold uppercase text-white/35">{slot.title}</span>
                  <span className="font-heading text-[10px] uppercase tracking-[0.2em] text-electric/60">
                    {slot.status}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Форма запроса */}
      <section id="partner-form" className="grain-overlay relative overflow-hidden bg-club-gradient py-16 md:py-28">
        <Container className="relative">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="glass-card rounded-3xl p-8 md:p-12">
                <h2 className="text-display text-3xl uppercase text-white md:text-4xl">
                  Запрос на партнерство
                </h2>
                <p className="mt-3 text-ash">
                  Оставьте контакты — коммерческая команда клуба вернется с предложением под ваш бренд.
                </p>
                {sent ? (
                  <div className="py-14 text-center">
                    <div className="accent-glow mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-royal">
                      <Check className="text-white" size={24} />
                    </div>
                    <p className="font-display text-2xl uppercase text-white">Запрос принят</p>
                    <p className="mt-2 text-sm text-ash">Мы свяжемся с вами в ближайшее время.</p>
                  </div>
                ) : (
                  <form onSubmit={(event) => { event.preventDefault(); setSent(true); }} className="mt-8 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block font-heading text-xs uppercase tracking-wide text-ash">Имя</label>
                        <input required className={inputClasses} placeholder="Ваше имя" />
                      </div>
                      <div>
                        <label className="mb-2 block font-heading text-xs uppercase tracking-wide text-ash">Компания</label>
                        <input required className={inputClasses} placeholder="Название бренда" />
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block font-heading text-xs uppercase tracking-wide text-ash">Email</label>
                        <input required type="email" className={inputClasses} placeholder="you@brand.com" />
                      </div>
                      <div>
                        <label className="mb-2 block font-heading text-xs uppercase tracking-wide text-ash">Телефон</label>
                        <input className={inputClasses} placeholder="+996 ..." />
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block font-heading text-xs uppercase tracking-wide text-ash">Формат сотрудничества</label>
                      <input className={inputClasses} placeholder="Например: логотип на форме или интеграции в Reels" />
                    </div>
                    <div>
                      <label className="mb-2 block font-heading text-xs uppercase tracking-wide text-ash">Комментарий</label>
                      <textarea required rows={5} className={`${inputClasses} resize-none`} placeholder="Расскажите о задачах бренда" />
                    </div>
                    <Button className="w-full">Отправить запрос</Button>
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
