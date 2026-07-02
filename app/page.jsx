"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Shield, Ticket, Trophy, Users } from "lucide-react";
import SiteShell from "../components/layout/SiteShell";
import CountUp from "../components/shared/CountUp";
import MatchCard from "../components/shared/MatchCard";
import Reveal from "../components/shared/Reveal";
import SplitTitle from "../components/shared/SplitTitle";
import { getLatestNews, getUpcomingMatches } from "../data/siteData";

const heroImage = "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=1920&q=80&auto=format&fit=crop";
const quoteImage = "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80&auto=format&fit=crop";

export default function Page() {
  const reduceMotion = useReducedMotion();
  const upcomingMatch = getUpcomingMatches()[0];
  const latestNews = getLatestNews(4);
  const stats = [
    { value: 48, label: "Матчей в сезоне", icon: Trophy },
    { value: 32, label: "Игроков в составе", icon: Users },
    { value: 16, label: "Трофеев за историю", icon: Shield },
  ];
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], reduceMotion ? [0, 0] : [0, 400]);
  const contentY = useTransform(scrollY, [0, 600], reduceMotion ? [0, 0] : [0, 200]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const quoteY = useTransform(scrollY, [600, 1600], reduceMotion ? [0, 0] : [0, -200]);
  const quoteScale = useTransform(scrollY, [600, 1600], [1, 1.1]);

  return (
    <SiteShell>
      <section className="grain-overlay relative min-h-[640px] w-full overflow-hidden bg-ink h-[100svh]">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <motion.img
            src={heroImage}
            alt="Top Team FC — стадион"
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
              {["Больше", "чем", "игра"].map((word) => (
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
              Это — Top Team
            </motion.p>
          </div>
          <motion.p className="mt-6 max-w-md text-base leading-relaxed text-ash md:text-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 2 }}>
            Клуб, созданный для побед. Сезон 2026 — каждый матч на стадионе становится легендой.
          </motion.p>
          <motion.div className="mt-8 flex flex-col gap-4 sm:flex-row" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 2.2 }}>
            <Link href="/tickets" className="accent-glow accent-glow-hover group inline-flex items-center justify-center gap-2 bg-gold px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-gold-light">
              <Ticket size={16} />
              Купить билеты
            </Link>
            <Link href="/live" className="group inline-flex items-center justify-center gap-2 border border-ink-border px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-gold hover:text-gold">
              <span className="live-dot h-2 w-2 rounded-full bg-red-500" />
              Live Center
            </Link>
          </motion.div>
        </motion.div>
        <motion.div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-ash" initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: 2.8 }} style={{ opacity: contentOpacity }}>
          <span className="text-[10px] uppercase tracking-[0.3em]">Листай</span>
          <motion.div animate={reduceMotion ? {} : { y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>
      </section>

      <section className="relative overflow-hidden bg-ink py-24 md:py-40">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <SplitTitle text="Мы не играем, чтобы участвовать. Мы играем, чтобы побеждать." as="h2" className="text-display max-w-5xl text-[clamp(1.75rem,5.5vw,4.5rem)] text-white" />
          <Reveal delay={0.3}><p className="mt-10 max-w-xl text-lg leading-relaxed text-ash">Клуб «Top Team» был создан с одной целью — писать историю. Каждый игрок, каждый матч, каждый фанат — часть чего-то большего, чем просто футбол.</p></Reveal>
          <Reveal delay={0.4}><Link href="/club" className="mt-8 inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wide text-gold transition-all hover:gap-4">История клуба <ArrowRight size={16} /></Link></Reveal>
        </div>
      </section>

      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: quoteY, scale: quoteScale }}>
          <img src={quoteImage} alt="Атмосфера стадиона" className="h-full w-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative flex h-full items-center justify-center px-5">
          <Reveal className="max-w-3xl text-center">
            <Shield className="mx-auto mb-6 text-gold" size={32} />
            <p className="text-display text-[clamp(1.5rem,4vw,3rem)] leading-tight text-white">«Стадион — наш дом. 90 минут — наша вечность.»</p>
            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-ash">Капитан команды</p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-ink-border bg-ink-card py-20 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Reveal key={stat.label} delay={index * 0.1} className="text-center md:text-left">
                  <Icon className="mx-auto mb-6 text-gold md:mx-0" size={28} />
                  <CountUp value={stat.value} className="font-display block text-6xl font-bold text-white md:text-7xl" />
                  <p className="mt-3 text-sm uppercase tracking-wide text-ash">{stat.label}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Ближайший матч</span>
              <SplitTitle text="Не пропусти" as="h2" className="text-display mt-3 text-4xl text-white md:text-6xl" />
            </div>
            <Link href="/fixtures" className="hidden items-center gap-2 font-heading text-sm uppercase tracking-wide text-ash transition-colors hover:text-gold md:inline-flex">Все матчи <ArrowRight size={16} /></Link>
          </div>
          {upcomingMatch ? <div className="max-w-md"><MatchCard match={upcomingMatch} /></div> : <div className="card-gradient border border-ink-border p-10 text-center text-ash">Расписание матчей скоро будет опубликовано.</div>}
        </div>
      </section>

      <section className="border-t border-ink-border bg-ink-card py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Жизнь клуба</span>
              <SplitTitle text="Свежие новости" as="h2" className="text-display mt-3 text-4xl text-white md:text-6xl" />
            </div>
            <Link href="/news" className="hidden items-center gap-2 font-heading text-sm uppercase tracking-wide text-ash transition-colors hover:text-gold md:inline-flex">Все новости <ArrowRight size={16} /></Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {latestNews.map((article, index) => (
              <Reveal key={article.id} delay={index * 0.08}>
                <Link href={`/news/${article.id}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-ink-soft">
                    <img src={article.cover_image_url} alt={article.title} className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                    <span className="absolute left-3 top-3 bg-ink/70 px-2.5 py-1 text-[10px] uppercase tracking-wider text-gold backdrop-blur-sm">{article.category}</span>
                  </div>
                  <h3 className="mt-4 line-clamp-2 font-display text-lg font-semibold leading-snug text-white transition-colors group-hover:text-gold">{article.title}</h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-24 md:py-40">
        <div className="mx-auto max-w-[1440px] px-5 text-center md:px-10">
          <SplitTitle text="Стань частью Top Team" as="h2" className="text-display mx-auto max-w-4xl text-[clamp(2rem,8vw,7rem)] text-white" />
          <Reveal delay={0.2}><p className="mx-auto mt-8 max-w-xl text-lg text-ash">Билеты на матчи, эксклюзивный мерч, программы лояльности — всё для настоящих болельщиков.</p></Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/tickets" className="accent-glow accent-glow-hover bg-gold px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-gold-light">Купить билеты</Link>
              <Link href="/membership" className="border border-ink-border px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-gold hover:text-gold">Членство клуба</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
