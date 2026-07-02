"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const getCountdown = (date) => {
  const diff = new Date(date).getTime() - Date.now();
  if (diff <= 0) return { done: true };
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
    done: false,
  };
};

export default function MatchCard({ match }) {
  const reduceMotion = useReducedMotion();
  const [countdown, setCountdown] = useState(() => getCountdown(match.date));
  const isLive = match.status === "live";
  const isFinished = match.status === "finished";

  useEffect(() => {
    setCountdown(getCountdown(match.date));
    const timer = window.setInterval(() => setCountdown(getCountdown(match.date)), 1000);
    return () => window.clearInterval(timer);
  }, [match.date]);

  return (
    <motion.div
      whileHover={reduceMotion ? {} : { y: -6 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="card-gradient group border border-ink-border transition-colors duration-500 hover:border-gold/40"
    >
      <div className="flex items-center justify-between border-b border-ink-border px-5 py-3">
        <span className="text-[10px] uppercase tracking-[0.2em] text-ash">{match.competition}</span>
        <span className={`flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] ${match.venue === "home" ? "text-gold" : "text-ash"}`}>
          {match.venue === "home" ? "Дома" : "В гостях"}
        </span>
      </div>
      <div className="px-5 py-6">
        <div className="flex items-center justify-between">
          <span className="font-display text-2xl font-bold text-white md:text-3xl">TOP TEAM</span>
          <span className="mx-3 text-sm text-ash">{isLive || isFinished ? "— : —" : "VS"}</span>
          <span className="font-display text-2xl font-bold text-white/70 transition-colors group-hover:text-gold md:text-3xl">{match.opponent}</span>
        </div>
        {(isLive || isFinished) && (
          <div className="mt-4 flex items-center justify-center gap-4">
            <span className="font-display text-4xl text-white">{match.home_score}</span>
            <span className="text-ash">:</span>
            <span className="font-display text-4xl text-white">{match.away_score}</span>
          </div>
        )}
      </div>
      <div className="border-t border-ink-border px-5 py-4">
        {isLive ? (
          <div className="flex items-center justify-center gap-2 font-heading text-sm uppercase tracking-wide text-red-500">
            <span className="live-dot h-2 w-2 rounded-full bg-red-500" />В прямом эфире
          </div>
        ) : isFinished ? (
          <div className="text-center text-sm uppercase tracking-wide text-ash">Матч окончен</div>
        ) : countdown.done ? (
          <div className="text-center text-sm uppercase tracking-wide text-ash">Скоро начнётся</div>
        ) : (
          <div className="grid grid-cols-4 gap-2 text-center">
            {[{ v: countdown.d, l: "дни" }, { v: countdown.h, l: "часы" }, { v: countdown.m, l: "мин" }, { v: countdown.s, l: "сек" }].map((item) => (
              <div key={item.l}>
                <div className="font-display text-xl font-bold tabular-nums text-gold md:text-2xl">{String(item.v).padStart(2, "0")}</div>
                <div className="mt-0.5 text-[9px] uppercase tracking-wider text-ash">{item.l}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center justify-between border-t border-ink-border px-5 py-3 text-xs text-ash">
        <span className="flex items-center gap-1.5">
          <CalendarDays size={12} />
          {new Date(match.date).toLocaleDateString("ru-RU", { day: "numeric", month: "short" })}
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin size={12} />
          {match.stadium || "Top Team Arena"}
        </span>
      </div>
      {!isLive && !isFinished && match.venue === "home" && (
        <Link href="/tickets" className="block bg-gold/10 py-3 text-center font-heading text-xs uppercase tracking-wide text-gold transition-colors hover:bg-gold hover:text-ink">
          Купить билеты →
        </Link>
      )}
    </motion.div>
  );
}
