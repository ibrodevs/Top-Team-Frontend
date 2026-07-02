import Link from "next/link";
import { ArrowLeft, Flag } from "lucide-react";
import SiteShell from "../../../components/layout/SiteShell";
import CountUp from "../../../components/shared/CountUp";
import Reveal from "../../../components/shared/Reveal";
import { getPlayerById } from "../../../data/siteData";
import { notFound } from "next/navigation";

export default function Page({ params }) {
  const player = getPlayerById(params.id);
  if (!player) notFound();
  const stats = [
    { value: player.appearances || 0, label: "Матчей" },
    { value: player.goals || 0, label: "Голов" },
    { value: player.assists || 0, label: "Голевых" },
    { value: player.rating || 0, label: "Рейтинг", decimals: 1 },
  ];

  return (
    <SiteShell>
      <div className="min-h-screen bg-ink pt-16 md:pt-20">
        <section className="relative min-h-[560px] h-[80vh] overflow-hidden">
          <img src={player.photo_url} alt={player.name} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/70 to-transparent" />
          <div className="relative mx-auto flex h-full max-w-[1440px] flex-col justify-end px-5 pb-12 md:px-10 md:pb-20">
            <Link href="/squad" className="mb-6 inline-flex w-fit items-center gap-2 font-heading text-xs uppercase tracking-wide text-ash transition-colors hover:text-gold">
              <ArrowLeft size={14} /> Состав команды
            </Link>
            <div className="flex flex-wrap items-end gap-6">
              <span className="font-display text-7xl font-bold leading-none text-gold md:text-9xl">{player.number}</span>
              <div>
                <h1 className="text-display text-4xl uppercase text-white md:text-7xl">{player.name}</h1>
                <div className="mt-3 flex items-center gap-4 text-ash">
                  <span className="flex items-center gap-1.5"><Flag size={14} /> {player.nationality}</span>
                  <span>·</span>
                  <span>{player.position}</span>
                  <span>·</span>
                  <span>{player.age} лет</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:px-10 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.3em] text-gold">О игроке</span>
              <h2 className="text-display mb-6 mt-3 text-3xl text-white md:text-4xl">Личность</h2>
              <p className="text-lg leading-relaxed text-ash">{player.bio}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Статистика сезона</span>
              <h2 className="text-display mb-8 mt-3 text-3xl text-white md:text-4xl">Цифры</h2>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="card-gradient border border-ink-border p-6">
                    <CountUp value={stat.value} decimals={stat.decimals || 0} className="font-display block text-5xl font-bold text-white" />
                    <p className="mt-2 text-sm uppercase tracking-wide text-ash">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
