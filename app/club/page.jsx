import { Flame, Play, Shield, Trophy, Users } from "lucide-react";
import SiteShell from "../../components/layout/SiteShell";
import Reveal from "../../components/shared/Reveal";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import PageHero from "../../components/ui/PageHero";
import SectionHeader from "../../components/ui/SectionHeader";
import {
  aboutPillars,
  achievements,
  clubFacts,
  clubQuote,
  clubTimeline,
  clubValues,
  missionVision,
} from "../../data/siteData";

const pillarIcons = { trophy: Trophy, play: Play, users: Users, flame: Flame };

export default function Page() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="О клубе"
        title="Больше чем футбольный клуб"
        description="Top Team KG — это команда, медиа, энергия, победы и культура нового футбола Кыргызстана. Мы объединяем игру на поле и контент за его пределами в один сильный бренд."
      >
        <Reveal delay={0.35}>
          <div className="mt-8 flex flex-wrap gap-3">
            {clubFacts.map((fact) => (
              <div key={fact.label} className="glass-card rounded-full px-5 py-2.5">
                <span className="font-heading text-[10px] uppercase tracking-[0.2em] text-electric">
                  {fact.label}:
                </span>{" "}
                <span className="text-sm font-medium text-white">{fact.value}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </PageHero>

      {/* Четыре опоры клуба */}
      <section className="bg-navy-900 py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="ДНК клуба"
            title="Футбол. Медиа. Комьюнити. Победа."
          />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
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
                      <h3 className="mt-6 font-display text-2xl font-semibold uppercase text-white">{pillar.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-ash">{pillar.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Цитата */}
      <section className="grain-overlay relative overflow-hidden bg-club-gradient py-24 md:py-32">
        <Container className="relative text-center">
          <Reveal>
            <Shield className="mx-auto mb-8 text-white" size={36} />
            <p className="text-display mx-auto max-w-4xl text-[clamp(1.75rem,4.5vw,3.5rem)] uppercase leading-tight text-white">
              «{clubQuote.text}»
            </p>
            <p className="mt-8 font-heading text-xs uppercase tracking-[0.4em] text-electric-soft">
              {clubQuote.caption}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* История */}
      <section className="pitch-lines relative bg-navy-950 py-20 md:py-32">
        <Container className="relative">
          <SectionHeader eyebrow="Путь клуба" title="История Top Team" />
          <div className="relative">
            <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-electric/50 via-electric/15 to-transparent md:left-1/2" />
            <div className="space-y-14 md:space-y-24">
              {clubTimeline.map((item, index) => (
                <Reveal key={`${item.year}-${item.title}`}>
                  <div className={`relative flex flex-col gap-6 md:flex-row md:gap-12 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                    <div className={`pl-12 md:w-1/2 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                      <span className="gradient-text font-display text-5xl font-bold md:text-7xl">{item.year}</span>
                      <h3 className="mt-3 font-display text-2xl font-semibold uppercase text-white">{item.title}</h3>
                      <p className="mt-3 leading-relaxed text-ash">{item.text}</p>
                    </div>
                    <div className="md:w-1/2" />
                    <div className="absolute left-4 top-3 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-electric shadow-glow ring-4 ring-navy-950 md:left-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Достижения */}
      <section className="border-t border-electric/10 bg-navy-900 py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Трофеи"
            title="Достижения"
            description="Титулы и матчи, которые определяют характер команды."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {achievements.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="glass-card group relative h-full overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:shadow-glow">
                  <Trophy className="absolute -bottom-6 -right-6 h-32 w-32 text-electric/5 transition-colors duration-500 group-hover:text-electric/10" />
                  <div className="relative">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <h3 className="font-display text-2xl font-semibold uppercase text-white">{item.title}</h3>
                      <Badge>{item.year}</Badge>
                    </div>
                    <p className="mt-4 leading-relaxed text-ash">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Миссия и ценности */}
      <section className="relative border-t border-electric/10 bg-navy-950 py-20 md:py-28">
        <div className="stadium-glow-bottom pointer-events-none absolute inset-0" />
        <Container className="relative">
          <SectionHeader eyebrow="Философия" title="Миссия и ценности" />
          <div className="grid gap-5 lg:grid-cols-3">
            {missionVision.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="animated-border h-full rounded-2xl p-8">
                  <h3 className="font-display text-2xl font-semibold uppercase text-white">{item.title}</h3>
                  <p className="mt-4 leading-relaxed text-ash">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {clubValues.map((value, index) => (
              <Reveal key={value.title} delay={0.1 + index * 0.08}>
                <div className="glass-card group h-full rounded-2xl p-7 transition-all duration-500 hover:shadow-glow">
                  <span className="gradient-text font-display text-4xl font-bold">0{index + 1}</span>
                  <h3 className="mt-4 font-display text-xl font-semibold uppercase text-white">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ash">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-14 text-center">
              <Button href="/squad">Познакомиться с командой</Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </SiteShell>
  );
}
