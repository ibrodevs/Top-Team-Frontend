"use client";

import { useState } from "react";
import SiteShell from "../../components/layout/SiteShell";
import Reveal from "../../components/shared/Reveal";
import SplitTitle from "../../components/shared/SplitTitle";
import { partnerTiers, partners } from "../../data/siteData";

export default function Page() {
  const [activeTier, setActiveTier] = useState("Все");
  const filteredPartners = activeTier === "Все" ? partners : partners.filter((partner) => partner.tier === activeTier);
  return (
    <SiteShell>
      <div className="min-h-screen bg-ink pt-20 md:pt-24">
        <section className="py-16 md:py-24"><div className="mx-auto max-w-[1440px] px-5 md:px-10"><span className="text-xs uppercase tracking-[0.3em] text-gold">Партнёры клуба</span><SplitTitle text="Рядом с лучшими" as="h1" className="text-display mt-3 text-[clamp(2.5rem,8vw,7rem)] text-white" /></div></section>
        <section className="border-t border-ink-border py-8"><div className="no-scrollbar mx-auto flex max-w-[1440px] items-center gap-3 overflow-x-auto px-5 md:px-10">{partnerTiers.map((tier) => <button key={tier} onClick={() => setActiveTier(tier)} className={`whitespace-nowrap border px-5 py-2 font-heading text-sm uppercase tracking-wide transition-colors ${activeTier === tier ? "border-gold bg-gold text-ink" : "border-ink-border text-ash hover:border-ash hover:text-white"}`}>{tier}</button>)}</div></section>
        <section className="py-12 pb-32 md:py-20"><div className="mx-auto max-w-[1440px] px-5 md:px-10"><div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">{filteredPartners.map((partner, index) => <Reveal key={partner.name} delay={(index % 4) * 0.06}><div className={`card-gradient group flex h-full flex-col items-center justify-center border p-8 text-center transition-colors hover:border-gold/30 ${partner.tier === "Главный партнёр" ? "md:col-span-2 lg:col-span-1" : "border-ink-border"}`}><span className={`mb-4 text-[10px] uppercase tracking-wider ${partner.tier === "Главный партнёр" ? "text-gold" : "text-ash"}`}>{partner.tier}</span><span className="font-display text-2xl font-bold text-white transition-colors group-hover:text-gold md:text-3xl">{partner.name}</span><span className="mt-2 text-xs text-ash">{partner.category}</span></div></Reveal>)}</div></div></section>
      </div>
    </SiteShell>
  );
}
