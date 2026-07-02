"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import SiteShell from "../../components/layout/SiteShell";
import Reveal from "../../components/shared/Reveal";
import SplitTitle from "../../components/shared/SplitTitle";
import { memberships } from "../../data/siteData";

export default function Page() {
  const [selected, setSelected] = useState("Member");
  return (
    <SiteShell>
      <div className="min-h-screen bg-ink pt-20 md:pt-24">
        <section className="py-16 md:py-24"><div className="mx-auto max-w-[1440px] px-5 text-center md:px-10"><span className="text-xs uppercase tracking-[0.3em] text-gold">Членство</span><SplitTitle text="Стань своим" as="h1" className="text-display mt-3 text-[clamp(2.5rem,8vw,7rem)] text-white" /><Reveal delay={0.3}><p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-ash">Программы лояльности для настоящих болельщиков. Чем ближе к клубу — тем больше привилегий.</p></Reveal></div></section>
        <section className="py-12 pb-32 md:py-20"><div className="mx-auto max-w-[1440px] px-5 md:px-10"><div className="grid gap-6 md:grid-cols-3 md:gap-8">{memberships.map((tier, index) => <Reveal key={tier.name} delay={index * 0.1}><div onClick={() => setSelected(tier.name)} className={`card-gradient relative h-full cursor-pointer border p-8 transition-all duration-300 ${selected === tier.name ? "scale-[1.02] border-gold" : "border-ink-border hover:border-ash"}`}>{tier.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold px-3 py-1 font-heading text-[10px] uppercase tracking-wider text-ink">Популярный</span>}<h3 className="font-display text-3xl text-white">{tier.name}</h3><div className="mt-4 flex items-baseline gap-2"><span className="font-display text-5xl font-bold text-gold">{tier.price}</span><span className="text-sm text-ash">₽ / {tier.period}</span></div><ul className="mt-8 space-y-4">{tier.features.map((feature) => <li key={feature} className="flex items-start gap-3 text-sm text-ash"><Check size={16} className="mt-0.5 shrink-0 text-gold" /> {feature}</li>)}</ul><button className={`mt-8 w-full py-4 font-heading text-sm font-semibold uppercase tracking-wide transition-colors ${selected === tier.name ? "bg-gold text-ink hover:bg-gold-light" : "border border-ink-border text-white hover:border-gold hover:text-gold"}`}>{selected === tier.name ? "Выбрано ✓" : "Выбрать"}</button></div></Reveal>)}</div></div></section>
      </div>
    </SiteShell>
  );
}
