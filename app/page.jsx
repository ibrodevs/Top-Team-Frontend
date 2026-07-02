"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Camera, Shield, Trophy, Users } from "lucide-react";
import SiteShell from "../components/layout/SiteShell";
import CountUp from "../components/shared/CountUp";
import MatchCard from "../components/shared/MatchCard";
import Reveal from "../components/shared/Reveal";
import SplitTitle from "../components/shared/SplitTitle";
import {
  getFeaturedMatch,
  getLatestNews,
  homeHero,
  homeStats,
  mediaItems,
  players,
} from "../data/siteData";

const heroImage = "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=1920&q=80&auto=format&fit=crop";
const quoteImage = "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80&auto=format&fit=crop";

export default function Page() {
  const reduceMotion = useReducedMotion();
  const featuredMatch = getFeaturedMatch();
  const latestNews = getLatestNews(3);
  const featuredPlayers = players.slice(0, 6);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], reduceMotion ? [0, 0] : [0, 400]);
  const contentY = useTransform(scrollY, [0, 600], reduceMotion ? [0, 0] : [0, 200]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const quoteY = useTransform(scrollY, [600, 1600], reduceMotion ? [0, 0] : [0, -200]);
  const quoteScale = useTransform(scrollY, [600, 1600], [1, 1.1]);

  return (
    <SiteShell>
      <section className="grain-overlay relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <motion.img
            src={heroImage}
            alt="Top Team KG"
            className="h-full w-full object-cover"
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: reduceMotion ? 1 : 1.08, opacity: 1 }}
            transition={{ scale: { duration: 18, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }, opacity: { duration: 1, delay: 0.6 } }}
          />
        </motion.div>
        <div className="hero-gradient absolute inset-0 z-10" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-ink/80 via-ink/20 to-transparent" />
        <motion.div className="relative z-20 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-5 pb-16 md:px-10 md:pb-24" style={{ y: contentY, opacity: contentOpacity }}>
          <div className="overflow-hidden">
            <motion.h1 className="text-display text-[clamp(2.5rem,10vw,9rem)] uppercase text-white" initial="hidden" animate="visible" transition={{ staggerChildren: 0.06, delayChildren: 1.4 }}>
              {homeHero.title.split(" ").map((word) => (
                <span key={word} className="mr-3 inline-block overflow-hidden align-top md:mr-6">
                  <motion.span className="inline-block" variants={{ hidden: { y: "110%", opacity: 0 }, visible: { y: 0, opacity: 1 } }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.h1>
          </div>
          <div className="mt-2 overflow-hidden">
            <motion.p className="font-display text-[clamp(1.5rem,5vw,3.5rem)] uppercase tracking-tight text-gold" initial={{ y: "110%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.7 }}>
              {homeHero.accent}
            </motion.p>
          </div>
          <motion.p className="mt-6 max-w-xl text-base leading-relaxed text-ash md:text-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 2 }}>
            {homeHero.subtitle}
          </motion.p>
          <motion.div className="mt-8 flex flex-col gap-4 sm:flex-row" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 2.2 }}>
            <Link href={homeHero.primaryCta.href} className="accent-glow accent-glow-hover inline-flex items-center justify-center gap-2 bg-gold px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-gold-light">
              <Trophy size={16} />
              {homeHero.primaryCta.label}
            </Link>
            <Link href={homeHero.secondaryCta.href} className="inline-flex items-center justify-center gap-2 border border-ink-border px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-gold hover:text-gold">
              <Users size={16} />
              {homeHero.secondaryCta.label}
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="relative overflow-hidden bg-ink py-24 md:py-40">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <SplitTitle text="Футбол. Медиа. Команда. Победа." as="h2" className="text-display max-w-5xl text-[clamp(1.75rem,5.5vw,4.5rem)] text-white" />
          <Reveal delay={0.3}>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ash">
              Top Team KG - это футбольный медиа-проект, созданный для побед, эмоций и развития футбольной культуры. Команда объединяет игроков, медийных личностей и болельщиков, превращая каждый матч в событие.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <Link href="/club" className="mt-8 inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wide text-gold transition-all hover:gap-4">
              История клуба <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: quoteY, scale: quoteScale }}>
          <img src={quoteImage} alt="Атмосфера клуба" className="h-full w-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative flex h-full items-center justify-center px-5">
          <Reveal className="max-w-3xl text-center">
            <Shield className="mx-auto mb-6 text-gold" size={32} />
            <p className="text-display text-[clamp(1.5rem,4vw,3rem)] leading-tight text-white">«Мы не играем, чтобы участвовать. Мы играем, чтобы побеждать.»</p>
            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-ash">Позиционирование Top Team KG</p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-ink-border bg-ink-card py-20 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {homeStats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.1} className="text-center md:text-left">
                <Trophy className="mx-auto mb-6 text-gold md:mx-0" size={28} />
                <CountUp value={stat.value} className="font-display block text-6xl font-bold text-white md:text-7xl" />
                <p className="mt-3 text-sm uppercase tracking-wide text-ash">{stat.label}</p>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-ash/80">{stat.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Матч-центр</span>
              <SplitTitle text="Последний подтвержденный матч" as="h2" className="text-display mt-3 text-4xl text-white md:text-6xl" />
            </div>
            <Link href="/fixtures" className="hidden items-center gap-2 font-heading text-sm uppercase tracking-wide text-ash transition-colors hover:text-gold md:inline-flex">
              Все матчи <ArrowRight size={16} />
            </Link>
          </div>
          {featuredMatch ? (
            <div className="max-w-xl">
              <MatchCard match={featuredMatch} />
            </div>
          ) : (
            <div className="card-gradient border border-ink-border p-10 text-center text-ash">Подтвержденные матчи скоро будут опубликованы.</div>
          )}
        </div>
      </section>

      <section className="border-t border-ink-border bg-ink-card py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Состав</span>
              <SplitTitle text="Лица Top Team KG" as="h2" className="text-display mt-3 text-4xl text-white md:text-6xl" />
            </div>
            <Link href="/squad" className="hidden items-center gap-2 font-heading text-sm uppercase tracking-wide text-ash transition-colors hover:text-gold md:inline-flex">
              Весь состав <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mb-8 max-w-2xl text-lg leading-relaxed text-ash">
            Игроки и медиа-персоны собраны по открытым источникам и помечены как требующие подтверждения, пока клуб не передаст финальный roster.
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {featuredPlayers.map((player, index) => (
              <Reveal key={player.id} delay={(index % 3) * 0.08}>
                <Link href={`/squad/${player.id}`} className="group block">
                  <div className="card-gradient relative overflow-hidden border border-ink-border p-6 transition-colors hover:border-gold/30">
                    <span className="absolute -right-3 -top-6 font-display text-8xl text-gold/10">{String(index + 1).padStart(2, "0")}</span>
                    <div className="mb-8 flex items-start justify-between gap-4">
                      <span className="font-display text-4xl font-bold text-gold">{player.number ?? "--"}</span>
                      <span className="border border-gold/20 bg-gold/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold">
                        {player.status}
                      </span>
                    </div>
                    <div className="rounded-2xl border border-ink-border bg-ink/40 p-5">
                      <img src="/logo.png" alt="" className="mb-5 h-12 w-12 object-contain opacity-70" />
                      <p className="text-xs uppercase tracking-[0.2em] text-ash">{player.position}</p>
                      <h3 className="mt-2 font-display text-2xl text-white transition-colors group-hover:text-gold">{player.name}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-ash">{player.role}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink-border bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Жизнь клуба</span>
              <SplitTitle text="Последние новости" as="h2" className="text-display mt-3 text-4xl text-white md:text-6xl" />
            </div>
            <Link href="/news" className="hidden items-center gap-2 font-heading text-sm uppercase tracking-wide text-ash transition-colors hover:text-gold md:inline-flex">
              Все новости <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {latestNews.map((article, index) => (
              <Reveal key={article.id} delay={index * 0.08}>
                <Link href={`/news/${article.id}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-ink-soft">
                    <img src={article.cover_image_url} alt={article.title} className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                    <span className="absolute left-3 top-3 bg-ink/70 px-2.5 py-1 text-[10px] uppercase tracking-wider text-gold backdrop-blur-sm">{article.category}</span>
                  </div>
                  <h3 className="mt-4 line-clamp-2 font-display text-lg font-semibold leading-snug text-white transition-colors group-hover:text-gold">{article.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-ash">{article.subtitle}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink-border bg-ink-card py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Медиа</span>
              <SplitTitle text="Контент, который двигает клуб" as="h2" className="text-display mt-3 text-4xl text-white md:text-6xl" />
            </div>
            <Link href="/media" className="hidden items-center gap-2 font-heading text-sm uppercase tracking-wide text-ash transition-colors hover:text-gold md:inline-flex">
              Весь медиа-раздел <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {mediaItems.map((item, index) => (
              <Reveal key={item.id} delay={(index % 4) * 0.08}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-ink-soft">
                    <img src={item.image_url} alt={item.title} className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                    <span className="absolute left-3 top-3 bg-ink/70 px-2.5 py-1 text-[10px] uppercase tracking-wider text-gold backdrop-blur-sm">{item.type}</span>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <Camera className="mb-3 text-gold" size={18} />
                      <h3 className="font-display text-2xl text-white transition-colors group-hover:text-gold">{item.title}</h3>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ash">{item.description}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-24 md:py-40">
        <div className="mx-auto max-w-[1440px] px-5 text-center md:px-10">
          <SplitTitle text="Станьте партнером Top Team KG" as="h2" className="text-display mx-auto max-w-4xl text-[clamp(2rem,8vw,7rem)] text-white" />
          <Reveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-ash">
              Клубу нужен не просто спонсорский блок, а сильная коммерческая страница для брендов: спорт, медиа, молодежная аудитория и контентные интеграции.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/partners" className="accent-glow accent-glow-hover bg-gold px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-gold-light">Форматы сотрудничества</Link>
              <Link href="/contact" className="border border-ink-border px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-gold hover:text-gold">Связаться с клубом</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
