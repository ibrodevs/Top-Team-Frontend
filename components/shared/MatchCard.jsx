"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";

const formatMatchDate = (match) => {
  if (match.date_label) return match.date_label;
  return new Date(match.date).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export default function MatchCard({ match }) {
  const reduceMotion = useReducedMotion();
  const isLive = match.status === "live";
  const isFinished = match.status === "finished";

  return (
    <motion.div
      whileHover={reduceMotion ? {} : { y: -6 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="card-gradient group border border-ink-border transition-colors duration-500 hover:border-gold/40"
    >
      <div className="flex items-center justify-between border-b border-ink-border px-5 py-3">
        <span className="text-[10px] uppercase tracking-[0.2em] text-ash">{match.competition}</span>
        <span className={`text-[10px] uppercase tracking-[0.2em] ${match.venue === "home" ? "text-gold" : "text-ash"}`}>
          {match.stage || (match.venue === "home" ? "Дома" : "В гостях")}
        </span>
      </div>
      <div className="px-5 py-6">
        <div className="flex items-center justify-between gap-4">
          <span className="font-display text-2xl font-bold text-white md:text-3xl">TOP TEAM</span>
          <span className="mx-2 text-sm text-ash">{isLive || isFinished ? "— : —" : "VS"}</span>
          <span className="text-right font-display text-2xl font-bold text-white/70 transition-colors group-hover:text-gold md:text-3xl">{match.opponent}</span>
        </div>
        {(isLive || isFinished) && (
          <div className="mt-4 flex items-center justify-center gap-4">
            <span className="font-display text-4xl text-white">{match.team_score}</span>
            <span className="text-ash">:</span>
            <span className="font-display text-4xl text-white">{match.opponent_score}</span>
          </div>
        )}
      </div>
      <div className="border-t border-ink-border px-5 py-4">
        {isLive ? (
          <div className="flex items-center justify-center gap-2 font-heading text-sm uppercase tracking-wide text-red-500">
            <span className="live-dot h-2 w-2 rounded-full bg-red-500" />
            Матч идет
          </div>
        ) : isFinished ? (
          <div className="text-center text-sm uppercase tracking-wide text-ash">Матч завершен</div>
        ) : (
          <div className="text-center text-sm uppercase tracking-wide text-ash">
            Ближайший матч будет опубликован после подтверждения клуба
          </div>
        )}
      </div>
      <div className="border-t border-ink-border px-5 py-4">
        <p className="text-sm leading-relaxed text-ash">{match.summary}</p>
      </div>
      <div className="flex items-center justify-between border-t border-ink-border px-5 py-3 text-xs text-ash">
        <span className="flex items-center gap-1.5">
          <CalendarDays size={12} />
          {formatMatchDate(match)}
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin size={12} />
          {match.stadium || "уточняется"}
        </span>
      </div>
      <div className="flex items-center justify-between border-t border-ink-border px-5 py-3 text-xs text-ash">
        <span>Источник: {match.source}</span>
        {match.cta_href && (
          match.cta_href.startsWith("/") ? (
            <a href={match.cta_href} className="font-heading uppercase tracking-wide text-gold transition-colors hover:text-gold-light">
              {match.cta_label}
            </a>
          ) : (
            <a href={match.cta_href} target="_blank" rel="noreferrer" className="font-heading uppercase tracking-wide text-gold transition-colors hover:text-gold-light">
              {match.cta_label}
            </a>
          )
        )}
      </div>
    </motion.div>
  );
}
