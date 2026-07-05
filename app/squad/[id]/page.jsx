import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Flag, Hash, Shirt } from "lucide-react";
import SiteShell from "../../../components/layout/SiteShell";
import Reveal from "../../../components/shared/Reveal";
import PlayerCard from "../../../components/shared/PlayerCard";
import Badge from "../../../components/ui/Badge";
import Button from "../../../components/ui/Button";
import Container from "../../../components/ui/Container";
import { getPlayerById, players } from "../../../data/siteData";

export default function Page({ params }) {
  const player = getPlayerById(params.id);
  if (!player) notFound();

  const teammates = players.filter((p) => p.id !== player.id).slice(0, 4);

  return (
    <SiteShell>
      {/* Шапка игрока */}
      <section className="grain-overlay relative overflow-hidden border-b border-electric/10 bg-navy-950 pb-14 pt-28 md:pb-20 md:pt-40">
        <div className="stadium-glow pointer-events-none absolute inset-x-0 top-0 h-full" />
        {player.number != null && (
          <span className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none font-display text-[16rem] font-bold leading-none text-electric/5 md:text-[26rem]">
            {player.number}
          </span>
        )}
        <Container className="relative">
          <Link
            href="/squad"
            className="mb-10 inline-flex items-center gap-2 font-heading text-xs uppercase tracking-[0.2em] text-ash transition-colors hover:text-electric"
          >
            <ArrowLeft size={14} /> Состав команды
          </Link>
          <div className="grid gap-10 lg:grid-cols-[0.85fr,1.15fr] lg:items-end">
            <Reveal>
              <div className="player-placeholder relative aspect-[4/4.6] max-w-md overflow-hidden rounded-3xl border border-electric/15">
                {player.photo_url ? (
                  <img src={player.photo_url} alt={player.name} className="h-full w-full object-cover object-top" />
                ) : (
                  <>
                    <img
                      src="/logo.jpg"
                      alt=""
                      className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 object-contain opacity-25"
                    />
                    {player.number != null && (
                      <span className="absolute bottom-4 right-6 font-display text-8xl font-bold text-white/10">
                        {player.number}
                      </span>
                    )}
                  </>
                )}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-navy-950 to-transparent" />
              </div>
            </Reveal>
            <div>
              <Reveal delay={0.1}>
                <Badge>{player.position_label}</Badge>
                <h1 className="text-display mt-6 text-[clamp(2.5rem,7vw,6rem)] uppercase text-white">
                  {player.name}
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ash">{player.bio}</p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-8 flex flex-wrap gap-3">
                  {player.number != null && (
                    <div className="glass-card flex items-center gap-2.5 rounded-full px-5 py-2.5">
                      <Hash size={14} className="text-electric" />
                      <span className="text-sm font-medium text-white">Номер {player.number}</span>
                    </div>
                  )}
                  <div className="glass-card flex items-center gap-2.5 rounded-full px-5 py-2.5">
                    <Shirt size={14} className="text-electric" />
                    <span className="text-sm font-medium text-white">{player.position_label}</span>
                  </div>
                  {player.nationality && (
                    <div className="glass-card flex items-center gap-2.5 rounded-full px-5 py-2.5">
                      <Flag size={14} className="text-electric" />
                      <span className="text-sm font-medium text-white">{player.nationality}</span>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Статистика */}
      {player.stats && (
        <section className="border-b border-electric/10 bg-navy-900 py-14 md:py-20">
          <Container>
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {player.stats.map((stat, index) => (
                <Reveal key={stat.label} delay={index * 0.08}>
                  <div className="glass-card rounded-2xl p-6 text-center transition-all duration-500 hover:shadow-glow md:p-10">
                    <p className="gradient-text font-display text-4xl font-bold md:text-6xl">{stat.value}</p>
                    <p className="mt-3 font-heading text-[10px] uppercase tracking-[0.2em] text-ash md:text-xs">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}>
              <p className="mt-6 text-center text-xs text-ash/70">
                Сезонная статистика обновляется по ходу турниров.
              </p>
            </Reveal>
          </Container>
        </section>
      )}

      {/* Роль в команде + медиа CTA */}
      <section className="relative bg-navy-950 py-16 md:py-24">
        <div className="stadium-glow-bottom pointer-events-none absolute inset-0" />
        <Container className="relative">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="glass-card h-full rounded-2xl p-8 md:p-10">
                <span className="font-heading text-xs uppercase tracking-[0.3em] text-electric">Роль в команде</span>
                <p className="mt-5 text-xl leading-relaxed text-white md:text-2xl">{player.role}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="animated-border h-full rounded-2xl p-8 md:p-10">
                <span className="font-heading text-xs uppercase tracking-[0.3em] text-electric">Медиа</span>
                <p className="mt-5 leading-relaxed text-ash">
                  Голы, моменты и появления {player.name.split(" ")[0]} в контенте клуба — в Instagram и на YouTube Top Team.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href="https://www.instagram.com/topteam.kg/" size="md" external>
                    Instagram <ArrowUpRight size={13} />
                  </Button>
                  <Button href="/media" variant="secondary" size="md">
                    Медиа-раздел
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Другие игроки */}
      <section className="border-t border-electric/10 bg-navy-900 py-16 md:py-24">
        <Container>
          <div className="mb-10 flex items-end justify-between gap-6">
            <h2 className="text-display text-3xl uppercase text-white md:text-5xl">Другие игроки</h2>
            <Link
              href="/squad"
              className="hidden items-center gap-2 font-heading text-sm uppercase tracking-wide text-ash transition-colors hover:text-electric md:inline-flex"
            >
              Весь состав <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {teammates.map((teammate, index) => (
              <Reveal key={teammate.id} delay={index * 0.06} className="h-full">
                <PlayerCard player={teammate} index={index} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
