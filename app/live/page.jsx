"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SiteShell from "../../components/layout/SiteShell";
import Reveal from "../../components/shared/Reveal";
import { liveEvents, matches } from "../../data/siteData";

export default function Page() {
  const liveMatch = matches.find((match) => match.status === "live");
  const [minute, setMinute] = useState(67);
  const [visibleEvents, setVisibleEvents] = useState([]);

  useEffect(() => {
    if (!liveMatch) return;
    const timer = window.setInterval(() => setMinute((current) => Math.min(current + 1, 90)), 60000);
    return () => window.clearInterval(timer);
  }, [liveMatch]);

  useEffect(() => {
    if (!liveMatch) return;
    let index = 0;
    setVisibleEvents([]);
    const timer = window.setInterval(() => {
      if (index < liveEvents.length) {
        setVisibleEvents((current) => [...current, liveEvents[index]]);
        index += 1;
      } else {
        window.clearInterval(timer);
      }
    }, 2000);
    return () => window.clearInterval(timer);
  }, [liveMatch]);

  return (
    <SiteShell>
      <div className="min-h-screen bg-ink pt-16 md:pt-20">
        <section className="py-10 md:py-16">
          <div className="mx-auto max-w-[1100px] px-5 md:px-10">
            <div className="mb-4 flex items-center gap-2 text-red-500"><span className="live-dot h-2 w-2 rounded-full bg-red-500" /><span className="font-heading text-xs uppercase tracking-[0.3em]">Live Center</span></div>
            {liveMatch ? (
              <>
                <Reveal>
                  <div className="card-gradient border border-ink-border p-8 md:p-12">
                    <div className="mb-8 flex items-center justify-between text-xs uppercase tracking-wide text-ash"><span>{liveMatch.competition}</span><span className="font-display text-2xl font-bold text-gold">{minute}&apos;</span></div>
                    <div className="flex items-center justify-center gap-6 md:gap-16">
                      <div className="flex-1 text-center"><div className="mx-auto flex h-16 w-16 items-center justify-center border border-gold/30 bg-gold/10 md:h-24 md:w-24"><span className="font-display text-2xl font-bold text-gold md:text-4xl">TT</span></div><h2 className="mt-4 font-display text-lg font-bold text-white md:text-2xl">Top Team</h2></div>
                      <div className="flex items-center gap-4 md:gap-8"><span className="font-display text-5xl font-bold tabular-nums text-white md:text-8xl">{liveMatch.home_score}</span><span className="text-3xl text-ash md:text-5xl">:</span><span className="font-display text-5xl font-bold tabular-nums text-white md:text-8xl">{liveMatch.away_score}</span></div>
                      <div className="flex-1 text-center"><div className="mx-auto flex h-16 w-16 items-center justify-center border border-ink-border bg-ink-soft md:h-24 md:w-24"><span className="font-display text-2xl font-bold text-ash md:text-4xl">VS</span></div><h2 className="mt-4 font-display text-lg font-bold text-white md:text-2xl">{liveMatch.opponent}</h2></div>
                    </div>
                    <div className="mt-8 h-1 overflow-hidden bg-ink-soft"><motion.div className="h-full bg-gold" animate={{ width: `${(minute / 90) * 100}%` }} transition={{ duration: 0.6 }} /></div>
                  </div>
                </Reveal>
                <div className="mt-10">
                  <h3 className="mb-6 font-display text-2xl text-white">Хроника матча</h3>
                  <div className="space-y-3">
                    {visibleEvents.map((event) => (
                      <motion.div key={`${event.minute}-${event.text}`} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className={`flex gap-4 border-l-2 p-4 ${event.type === "goal" ? "border-gold bg-gold/5" : event.type === "yellow" ? "border-yellow-500 bg-yellow-500/5" : "border-ink-border bg-ink-soft/50"}`}>
                        <span className="w-10 shrink-0 font-display font-bold tabular-nums text-white">{event.minute}&apos;</span>
                        <span className={`text-sm leading-relaxed ${event.team === "home" ? "text-white" : "text-ash"}`}>{event.type === "goal" && "⚽ "}{event.type === "yellow" && "🟨 "}{event.type === "sub" && "🔄 "}{event.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="card-gradient border border-ink-border p-16 text-center"><p className="text-lg text-ash">Сейчас нет активных матчей в прямом эфире.</p><Link href="/fixtures" className="mt-6 inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wide text-gold">Посмотреть расписание →</Link></div>
            )}
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
