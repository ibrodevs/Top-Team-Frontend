"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Flame, Play, Shield, Trophy, Users } from "lucide-react";
import SiteShell from "../components/layout/SiteShell";
import MatchCard from "../components/shared/MatchCard";
import MediaCard from "../components/shared/MediaCard";
import NewsCard from "../components/shared/NewsCard";
import PlayerCard from "../components/shared/PlayerCard";
import Reveal from "../components/shared/Reveal";
import SplitTitle from "../components/shared/SplitTitle";
import StatCard from "../components/shared/StatCard";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import {
  aboutPillars,
  clubQuote,
  communityBlock,
  getLatestFinishedMatch,
  getLatestNews,
  getNextMatch,
  homeHero,
  homeStats,
  mediaItems,
  players,
  socialLinks,
} from "../data/siteData";

// Реальные кадры клуба: матч Top Team на «Астана Арене» (1XBET MFL, 2023)
// и празднование гола в матче с Anadolu (2025). Источник: YouTube @topteamkg.
const heroImage = "/media/Hero.png";
const quoteImage = "/media/goal-celebration-2025.jpg";

const pillarIcons = { trophy: Trophy, play: Play, users: Users, flame: Flame };

export default function Page() {
  const reduceMotion = useReducedMotion();
  const lastMatch = getLatestFinishedMatch();
  const nextMatch = getNextMatch();
  const latestNews = getLatestNews(4);
  const featuredPlayers = players.slice(0, 4);
  const featuredMedia = mediaItems.slice(0, 4);

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], reduceMotion ? [0, 0] : [0, 320]);
  const contentY = useTransform(scrollY, [0, 600], reduceMotion ? [0, 0] : [0, 160]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const quoteY = useTransform(scrollY, [600, 2000], reduceMotion ? [0, 0] : [0, -160]);
  const quoteScale = useTransform(scrollY, [600, 2000], [1, 1.12]);

  return (
    <SiteShell>
      {/* ============ HERO ============ */}
      <section className="grain-overlay relative min-h-[100svh] w-full overflow-hidden bg-navy-950">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <motion.img
            src={heroImage}
            alt="Top Team KG на матче 1XBET Media Football League на «Астана Арене»"
            className="h-full w-full object-cover"
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: reduceMotion ? 1 : 1.08, opacity: 1 }}
            transition={{
              scale: { duration: 20, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" },
              opacity: { duration: 1.2, delay: 0.4 },
            }}
          />
        </motion.div>
        <div className="hero-gradient absolute inset-0 z-10" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-navy-950/85 via-navy-950/30 to-transparent" />

        <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-site flex-col justify-end px-5 pb-10 pt-28 md:px-10 md:pb-16">
          <motion.div style={{ y: contentY, opacity: contentOpacity }}>
            <motion.div
              className="mb-6 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Badge variant="accent">
                <span className="live-dot h-1.5 w-1.5 rounded-full bg-electric" />
                Media Football Club
              </Badge>
              <Badge variant="outline">Kyrgyzstan</Badge>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                className="text-display max-w-5xl text-[clamp(2.75rem,10vw,8.5rem)] uppercase text-white"
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.06, delayChildren: 1.2 }}
              >
                {homeHero.title.split(" ").map((word) => (
                  <span key={word} className="mr-3 inline-block overflow-hidden align-top md:mr-6">
                    <motion.span
                      className="inline-block"
                      variants={{ hidden: { y: "110%", opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </motion.h1>
            </div>
            <div className="mt-2 overflow-hidden">
              <motion.p
                className="gradient-text font-display text-[clamp(1.5rem,5vw,3.5rem)] font-semibold uppercase tracking-tight"
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.55 }}
              >
                {homeHero.accent}
              </motion.p>
            </div>

            <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <motion.p
                  className="text-base leading-relaxed text-electric-soft/80 md:text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.85 }}
                >
                  {homeHero.subtitle}
                </motion.p>
                <motion.div
                  className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 2.05 }}
                >
                  <Button href={homeHero.primaryCta.href}>
                    <Play size={15} className="fill-current" />
                    {homeHero.primaryCta.label}
                  </Button>
                  <Button href={homeHero.secondaryCta.href} variant="secondary">
                    <Users size={15} />
                    {homeHero.secondaryCta.label}
                  </Button>
                  <Button href={homeHero.tertiaryCta.href} variant="secondary">
                    {homeHero.tertiaryCta.label}
                    <ArrowUpRight size={15} />
                  </Button>
                </motion.div>
              </div>

              {/* Виджет матч-центра в hero */}
              {(nextMatch || lastMatch) && (
                <motion.div
                  className="w-full max-w-md lg:shrink-0"
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-heading text-[11px] uppercase tracking-[0.3em] text-electric">
                      {nextMatch ? "Следующий матч" : "Последний матч"}
                    </span>
                    <Link
                      href="/fixtures"
                      className="group inline-flex items-center gap-1.5 font-heading text-[11px] uppercase tracking-[0.2em] text-ash transition-colors hover:text-electric"
                    >
                      Матч-центр
                      <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                  <MatchCard match={nextMatch || lastMatch} featured />
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ О КЛУБЕ ============ */}
      <section className="pitch-lines relative overflow-hidden bg-navy-900 py-24 md:py-36">
        <div className="stadium-glow pointer-events-none absolute inset-x-0 top-0 h-96" />
        <Container className="relative">
          <SectionHeader
            eyebrow="О клубе"
            title="Футбол. Медиа. Команда. Победа."
            description="Top Team KG — команда, которая превращает матч в событие. Мы играем, снимаем, побеждаем и собираем вокруг клуба новую футбольную культуру Кыргызстана."
            ctaLabel="История клуба"
            ctaHref="/club"
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {aboutPillars.map((pillar, index) => {
              const Icon = pillarIcons[pillar.icon] || Trophy;
              return (
                <Reveal key={pillar.title} delay={index * 0.08}>
                  <div className="glass-card group relative h-full overflow-hidden rounded-2xl p-7 transition-all duration-500 hover:shadow-glow md:p-8">
                    <span className="pointer-events-none absolute -right-4 -top-8 font-display text-8xl font-bold text-electric/5 transition-colors duration-500 group-hover:text-electric/10">
                      0{index + 1}
                    </span>
                    <div className="relative">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-royal/15 text-electric transition-all duration-500 group-hover:bg-royal group-hover:text-white group-hover:shadow-glow">
                        <Icon size={22} />
                      </span>
                      <h3 className="mt-6 font-display text-2xl font-semibold uppercase text-white">
                        {pillar.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-ash">{pillar.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============ ЦИТАТА ============ */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: quoteY, scale: quoteScale }}>
          <img src={quoteImage} alt="Игроки Top Team KG празднуют гол" className="h-full w-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-navy-950/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950/60" />
        <div className="stadium-glow absolute inset-0" />
        <div className="relative flex h-full items-center justify-center px-5">
          <Reveal className="max-w-4xl text-center">
            <Shield className="mx-auto mb-8 text-electric" size={36} />
            <p className="text-display text-[clamp(1.75rem,5vw,3.75rem)] uppercase leading-tight text-white">
              «{clubQuote.text}»
            </p>
            <p className="mt-8 font-heading text-xs uppercase tracking-[0.4em] text-electric">
              {clubQuote.caption}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ СТАТИСТИКА ============ */}
      <section className="relative border-y border-electric/10 bg-navy-950 py-20 md:py-28">
        <div className="stadium-glow-bottom pointer-events-none absolute inset-0" />
        <Container className="relative">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {homeStats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* ============ МАТЧ-ЦЕНТР ============ */}
      <section className="relative bg-navy-900 py-24 md:py-32">
        <Container>
          <SectionHeader
            eyebrow="Матч-центр"
            title="Каждый матч — событие"
            description="Результаты, ближайшие игры и путь команды по турнирам."
            ctaLabel="Все матчи"
            ctaHref="/fixtures"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {nextMatch && (
              <Reveal>
                <MatchCard match={nextMatch} featured />
              </Reveal>
            )}
            {lastMatch && (
              <Reveal delay={0.1}>
                <MatchCard match={lastMatch} featured />
              </Reveal>
            )}
          </div>
          <Reveal delay={0.2} className="mt-8 text-center md:hidden">
            <Button href="/fixtures" variant="secondary" size="md">
              Все матчи <ArrowRight size={14} />
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* ============ СОСТАВ ============ */}
      <section className="relative overflow-hidden border-t border-electric/10 bg-navy-950 py-24 md:py-32">
        <div className="stadium-glow pointer-events-none absolute inset-x-0 top-0 h-96" />
        <Container className="relative">
          <SectionHeader
            eyebrow="Состав"
            title="Лица Top Team"
            description="Игроки и медиа-персоны, которые каждую неделю создают историю клуба."
            ctaLabel="Весь состав"
            ctaHref="/squad"
          />
        </Container>
        <div className="no-scrollbar overflow-x-auto pb-2">
          <div className="mx-auto flex max-w-site gap-5 px-5 md:grid md:grid-cols-2 md:px-10 xl:grid-cols-4">
            {featuredPlayers.map((player, index) => (
              <div key={player.id} className="w-[78vw] max-w-[320px] shrink-0 sm:w-[320px] md:w-auto md:max-w-none">
                <Reveal delay={(index % 4) * 0.08} className="h-full">
                  <PlayerCard player={player} index={index} />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
        <Container className="relative mt-10 text-center md:hidden">
          <Button href="/squad" variant="secondary" size="md">
            Весь состав <ArrowRight size={14} />
          </Button>
        </Container>
      </section>

      {/* ============ НОВОСТИ ============ */}
      <section className="border-t border-electric/10 bg-navy-900 py-24 md:py-32">
        <Container>
          <SectionHeader
            eyebrow="Новости"
            title="Жизнь клуба"
            description="Матчи, трансферы, медиа и все, что происходит внутри Top Team."
            ctaLabel="Все новости"
            ctaHref="/news"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {latestNews[0] && (
              <Reveal className="h-full">
                <NewsCard article={latestNews[0]} featured />
              </Reveal>
            )}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {latestNews.slice(1, 4).map((article, index) => (
                <Reveal key={article.id} delay={index * 0.08} className={`h-full ${index === 2 ? "sm:col-span-2 lg:col-span-1 xl:col-span-2 xl:hidden" : ""}`}>
                  <NewsCard article={article} />
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ============ МЕДИА ============ */}
      <section className="relative overflow-hidden border-t border-electric/10 bg-navy-950 py-24 md:py-32">
        <div className="stadium-glow pointer-events-none absolute inset-x-0 top-0 h-96" />
        <Container className="relative">
          <SectionHeader
            eyebrow="Медиа"
            title="Контент, который двигает клуб"
            description="Reels, хайлайты, интервью и backstage — вторая игра Top Team, которая не заканчивается финальным свистком."
            ctaLabel="Весь медиа-раздел"
            ctaHref="/media"
          />
        </Container>
        <div className="no-scrollbar overflow-x-auto pb-2">
          <div className="mx-auto flex max-w-site items-stretch gap-5 px-5 md:px-10">
            {featuredMedia.map((item, index) => (
              <div
                key={item.id}
                className={`shrink-0 ${item.format === "vertical" ? "w-[240px] md:w-[280px]" : "w-[340px] md:w-[460px]"}`}
              >
                <Reveal delay={(index % 4) * 0.08} className="h-full">
                  <MediaCard item={item} />
                </Reveal>
              </div>
            ))}
            <div className="w-[200px] shrink-0 md:w-[240px]">
              <Reveal delay={0.32} className="h-full">
                <Link
                  href="/media"
                  className="glass-card group flex h-full min-h-[300px] flex-col items-center justify-center gap-4 rounded-2xl p-6 text-center transition-all duration-500 hover:shadow-glow"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-electric/30 text-electric transition-all duration-500 group-hover:scale-110 group-hover:bg-royal group-hover:text-white">
                    <ArrowRight size={20} />
                  </span>
                  <span className="font-display text-xl font-semibold uppercase text-white">
                    Весь контент
                  </span>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ПАРТНЕРЫ CTA ============ */}
      <section className="grain-overlay relative overflow-hidden bg-club-gradient py-24 md:py-40">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/50 to-transparent" />
        <Container className="relative text-center">
          <Reveal y={16}>
            <Badge variant="outline" className="mb-6">Партнерство</Badge>
          </Reveal>
          <SplitTitle
            text="Станьте частью Top Team KG"
            as="h2"
            className="text-display mx-auto max-w-4xl text-[clamp(2rem,7vw,6rem)] uppercase text-white"
          />
          <Reveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-electric-soft/85">
              Футбол, медиа, молодежная аудитория и живой контент — площадка для брендов,
              которые хотят быть ближе к новой спортивной культуре.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/partners" className="bg-white text-navy-950 hover:bg-electric-soft hover:text-navy-950">
                Получить партнерское предложение
              </Button>
              <Button href="/contact" variant="secondary">
                Связаться с клубом
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============ КОМЬЮНИТИ ============ */}
      <section className="relative border-t border-electric/10 bg-navy-950 py-24 md:py-32">
        <div className="stadium-glow-bottom pointer-events-none absolute inset-0" />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                eyebrow={communityBlock.badge}
                title={communityBlock.title}
                description={communityBlock.text}
                className="mb-8 md:mb-8"
              />
              <Button href={communityBlock.cta.href} external>
                {communityBlock.cta.label}
                <ArrowUpRight size={15} />
              </Button>
            </div>
            <div className="grid gap-4">
              {socialLinks.map((item, index) => (
                <Reveal key={item.label} delay={index * 0.08}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="glass-card group flex items-center justify-between rounded-2xl p-6 transition-all duration-500 hover:shadow-glow"
                  >
                    <div>
                      <p className="font-heading text-[11px] uppercase tracking-[0.25em] text-electric">
                        {item.label}
                      </p>
                      <p className="mt-1 font-display text-2xl font-semibold text-white transition-colors group-hover:text-electric">
                        {item.caption}
                      </p>
                      <p className="mt-1 text-sm text-ash">{item.description}</p>
                    </div>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-500 group-hover:border-electric group-hover:bg-royal group-hover:shadow-glow">
                      <ArrowUpRight size={17} />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
