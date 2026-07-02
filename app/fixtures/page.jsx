"use client";

import { CalendarDays } from "lucide-react";
import { useState } from "react";
import SiteShell from "../../components/layout/SiteShell";
import MatchCard from "../../components/shared/MatchCard";
import SplitTitle from "../../components/shared/SplitTitle";
import { matches } from "../../data/siteData";

const filters = [
  { id: "all", label: "Все" },
  { id: "upcoming", label: "Предстоящие" },
  { id: "live", label: "Live" },
  { id: "results", label: "Результаты" },
];

export default function Page() {
  const [activeFilter, setActiveFilter] = useState("all");
  const filteredMatches = matches.filter((match) => {
    if (activeFilter === "upcoming") return match.status === "upcoming";
    if (activeFilter === "live") return match.status === "live";
    if (activeFilter === "results") return match.status === "finished";
    return true;
  });

  return (
    <SiteShell>
      <div className="min-h-screen bg-ink pt-20 md:pt-24">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Календарь</span>
            <SplitTitle text="Матчи и результаты" as="h1" className="text-display mt-3 text-[clamp(2.5rem,8vw,7rem)] text-white" />
          </div>
        </section>
        <section className="sticky top-16 z-30 border-t border-ink-border bg-ink/90 py-8 backdrop-blur-md md:top-20">
          <div className="no-scrollbar mx-auto flex max-w-[1440px] items-center gap-3 overflow-x-auto px-5 md:px-10">
            {filters.map((filter) => (
              <button key={filter.id} onClick={() => setActiveFilter(filter.id)} className={`whitespace-nowrap border px-5 py-2 font-heading text-sm uppercase tracking-wide transition-colors ${activeFilter === filter.id ? "border-gold bg-gold text-ink" : "border-ink-border text-ash hover:border-ash hover:text-white"}`}>
                {filter.id === "live" && <span className="live-dot mr-2 inline-block h-1.5 w-1.5 rounded-full bg-red-500 align-middle" />}
                {filter.label}
              </button>
            ))}
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            {filteredMatches.length === 0 ? (
              <div className="py-20 text-center text-ash"><CalendarDays className="mx-auto mb-4 text-ink-border" size={40} />Матчей в этой категории пока нет.</div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filteredMatches.map((match) => <MatchCard key={match.id} match={match} />)}</div>
            )}
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
