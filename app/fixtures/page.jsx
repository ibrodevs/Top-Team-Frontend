"use client";

import { CalendarDays } from "lucide-react";
import { useState } from "react";
import SiteShell from "../../components/layout/SiteShell";
import MatchCard from "../../components/shared/MatchCard";
import Reveal from "../../components/shared/Reveal";
import Container from "../../components/ui/Container";
import PageHero from "../../components/ui/PageHero";
import SectionHeader from "../../components/ui/SectionHeader";
import { matches, tournaments } from "../../data/siteData";

const statusFilters = [
  { id: "all", label: "Все" },
  { id: "upcoming", label: "Предстоящие" },
  { id: "finished", label: "Завершенные" },
];

export default function Page() {
  const [activeStatus, setActiveStatus] = useState("all");
  const [activeCompetition, setActiveCompetition] = useState("Все турниры");

  const competitions = ["Все турниры", ...new Set(matches.map((match) => match.competition))];

  const filteredMatches = matches.filter((match) => {
    const statusOk = activeStatus === "all" || match.status === activeStatus;
    const competitionOk = activeCompetition === "Все турниры" || match.competition === activeCompetition;
    return statusOk && competitionOk;
  });

  return (
    <SiteShell>
      <PageHero
        eyebrow="Матч-центр"
        title="Матчи Top Team"
        description="Календарь, результаты и турнирный путь команды. Каждый матч — часть истории клуба."
      />

      {/* Фильтры */}
      <section className="sticky top-14 z-30 border-b border-electric/10 bg-navy-950/90 py-5 backdrop-blur-xl md:top-16">
        <div className="no-scrollbar mx-auto flex max-w-site items-center gap-2.5 overflow-x-auto px-5 md:px-10">
          {statusFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveStatus(filter.id)}
              className={`whitespace-nowrap rounded-full border px-5 py-2 font-heading text-xs font-medium uppercase tracking-wide transition-all duration-300 ${
                activeStatus === filter.id
                  ? "border-royal bg-royal text-white shadow-glow"
                  : "border-white/12 text-ash hover:border-electric/40 hover:text-white"
              }`}
            >
              {filter.label}
            </button>
          ))}
          <span className="mx-2 h-6 w-px shrink-0 bg-white/10" />
          {competitions.map((competition) => (
            <button
              key={competition}
              onClick={() => setActiveCompetition(competition)}
              className={`whitespace-nowrap rounded-full border px-5 py-2 font-heading text-xs font-medium uppercase tracking-wide transition-all duration-300 ${
                activeCompetition === competition
                  ? "border-electric/60 bg-electric/10 text-electric"
                  : "border-white/12 text-ash hover:border-electric/40 hover:text-white"
              }`}
            >
              {competition}
            </button>
          ))}
        </div>
      </section>

      {/* Сетка матчей */}
      <section className="relative bg-navy-900 py-14 md:py-20">
        <div className="stadium-glow pointer-events-none absolute inset-x-0 top-0 h-96" />
        <Container className="relative">
          {filteredMatches.length === 0 ? (
            <div className="py-24 text-center text-ash">
              <CalendarDays className="mx-auto mb-4 text-electric/40" size={40} />
              Матчей по выбранным фильтрам нет. Анонсы — в Instagram клуба.
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredMatches.map((match, index) => (
                <Reveal key={match.id} delay={(index % 3) * 0.06} className="h-full">
                  <MatchCard match={match} />
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Турниры */}
      <section className="border-t border-electric/10 bg-navy-950 py-16 md:py-24">
        <Container>
          <SectionHeader
            eyebrow="Турниры"
            title="Где играет Top Team"
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {tournaments.map((tournament, index) => (
              <Reveal key={tournament.name} delay={index * 0.06}>
                <div className="glass-card group h-full rounded-2xl p-7 transition-all duration-500 hover:shadow-glow">
                  <span className="font-heading text-[10px] uppercase tracking-[0.25em] text-electric">
                    {tournament.season}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-semibold uppercase text-white transition-colors group-hover:text-electric">
                    {tournament.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ash">{tournament.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
