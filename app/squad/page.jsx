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
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Состав клуба</span>
            <SplitTitle text="Игроки и медиа-персоны Top Team KG" as="h1" className="text-display mt-3 text-[clamp(2.5rem,8vw,7rem)] text-white" />
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ash">
              В этом разделе собраны имена, которые упоминаются в открытых источниках в контексте Top Team KG. Все карточки помечены как требующие подтверждения до получения финального состава от клуба.
            </p>
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
            <div className="mb-10 grid gap-6 lg:grid-cols-3">
              <div className="card-gradient border border-ink-border p-6 text-sm leading-relaxed text-ash">
                Не публикуем неподтвержденные номера, возраст и статистику как официальные.
              </div>
              <div className="card-gradient border border-ink-border p-6 text-sm leading-relaxed text-ash">
                Для медиа-игроков важны роль в контенте, аудитория и связь с брендом клуба.
              </div>
              <div className="card-gradient border border-ink-border p-6 text-sm leading-relaxed text-ash">
                После передачи roster от клуба здесь можно включить фото, соцсети и полную статистику.
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredPlayers.map((player, index) => (
                <Reveal key={player.id} delay={(index % 3) * 0.08}>
                  <Link href={`/squad/${player.id}`} className="group block h-full">
                    <div className="card-gradient relative flex h-full flex-col overflow-hidden border border-ink-border p-6 transition-colors hover:border-gold/30">
                      <span className="absolute -right-4 -top-8 font-display text-8xl text-gold/10">{String(index + 1).padStart(2, "0")}</span>
                      <div className="mb-8 flex items-start justify-between gap-4">
                        <img src="/logo.png" alt="" className="h-14 w-14 object-contain opacity-75" />
                        <span className="border border-gold/20 bg-gold/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold">
                          {player.status}
                        </span>
                      </div>
                      <p className="text-xs uppercase tracking-[0.2em] text-ash">{player.position}</p>
                      <h3 className="mt-2 font-display text-3xl text-white transition-colors group-hover:text-gold">{player.name}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-ash">{player.role}</p>
                      <div className="mt-6 border-t border-ink-border pt-4 text-xs uppercase tracking-wide text-ash">
                        Источник: {player.source_note}
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
