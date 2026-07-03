"use client";

import { useState } from "react";
import SiteShell from "../../components/layout/SiteShell";
import PlayerCard from "../../components/shared/PlayerCard";
import Reveal from "../../components/shared/Reveal";
import Container from "../../components/ui/Container";
import PageHero from "../../components/ui/PageHero";
import { players, squadFilters } from "../../data/siteData";

export default function Page() {
  const [activeFilter, setActiveFilter] = useState("Все");
  const filteredPlayers =
    activeFilter === "Все" ? players : players.filter((player) => player.position === activeFilter);

  return (
    <SiteShell>
      <PageHero
        eyebrow="Состав"
        title="Команда Top Team"
        description="Игроки и медиа-персоны, которые каждую неделю выходят на поле и в эфир за победой."
      />

      {/* Фильтры по позициям */}
      <section className="sticky top-14 z-30 border-b border-electric/10 bg-navy-950/90 py-5 backdrop-blur-xl md:top-16">
        <div className="no-scrollbar mx-auto flex max-w-site items-center gap-2.5 overflow-x-auto px-5 md:px-10">
          {squadFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap rounded-full border px-5 py-2 font-heading text-xs font-medium uppercase tracking-wide transition-all duration-300 ${
                activeFilter === filter
                  ? "border-royal bg-royal text-white shadow-glow"
                  : "border-white/12 text-ash hover:border-electric/40 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="relative bg-navy-900 py-14 md:py-20">
        <div className="stadium-glow pointer-events-none absolute inset-x-0 top-0 h-96" />
        <Container className="relative">
          {filteredPlayers.length === 0 ? (
            <div className="py-24 text-center text-ash">В этой категории пока нет игроков.</div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredPlayers.map((player, index) => (
                <Reveal key={player.id} delay={(index % 4) * 0.06} className="h-full">
                  <PlayerCard player={player} index={index} />
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>
    </SiteShell>
  );
}
