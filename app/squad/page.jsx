"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useState } from "react";
import SiteShell from "../../components/layout/SiteShell";
import Reveal from "../../components/shared/Reveal";
import SplitTitle from "../../components/shared/SplitTitle";
import { players, squadFilters } from "../../data/siteData";

export default function Page() {
  const [activeFilter, setActiveFilter] = useState("Все");
  const filteredPlayers = activeFilter === "Все" ? players : players.filter((player) => player.position === activeFilter);

  return (
    <SiteShell>
      <div className="min-h-screen bg-ink pt-20 md:pt-24">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Состав 2026</span>
            <SplitTitle text="Команда мечты" as="h1" className="text-display mt-3 text-[clamp(2.5rem,8vw,7rem)] text-white" />
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ash">Игроки, которые носят цвета Top Team. Наведите на карточку, чтобы увидеть игрока в действии.</p>
          </div>
        </section>
        <section className="sticky top-16 z-30 border-t border-ink-border bg-ink/90 py-8 backdrop-blur-md md:top-20">
          <div className="no-scrollbar mx-auto flex max-w-[1440px] items-center gap-3 overflow-x-auto px-5 md:px-10">
            <Search className="shrink-0 text-ash" size={18} />
            {squadFilters.map((filter) => (
              <button key={filter} onClick={() => setActiveFilter(filter)} className={`whitespace-nowrap border px-5 py-2 font-heading text-sm uppercase tracking-wide transition-colors ${activeFilter === filter ? "border-gold bg-gold text-ink" : "border-ink-border text-ash hover:border-ash hover:text-white"}`}>
                {filter}
              </button>
            ))}
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
              {filteredPlayers.map((player, index) => (
                <Reveal key={player.id} delay={(index % 4) * 0.08}>
                  <Link href={`/squad/${player.id}`} className="group block">
                    <div className="relative aspect-[3/4] overflow-hidden bg-ink-soft">
                      <img src={player.photo_url} alt={player.name} className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                      <span className="absolute left-4 top-4 font-display text-4xl font-bold text-gold">{player.number}</span>
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="text-xs uppercase tracking-[0.2em] text-ash">{player.position}</p>
                        <h3 className="mt-2 font-display text-2xl text-white transition-colors group-hover:text-gold">{player.name}</h3>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
