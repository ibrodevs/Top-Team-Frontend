"use client";

import Link from "next/link";
import { Car, ChevronRight, UtensilsCrossed, Wifi } from "lucide-react";
import { useState } from "react";
import SiteShell from "../../components/layout/SiteShell";
import CountUp from "../../components/shared/CountUp";
import Reveal from "../../components/shared/Reveal";
import SplitTitle from "../../components/shared/SplitTitle";
import { stadiumZones } from "../../data/siteData";

const stadiumImage = "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1920&q=80&auto=format&fit=crop";
const comfortItems = [
  { icon: null, title: "45 000 мест", text: "Один из крупнейших стадионов лиги" },
  { icon: Car, title: "3 000 парковок", text: "Удобный подъезд с трёх сторон" },
  { icon: Wifi, title: "Бесплатный Wi-Fi", text: "Бесшовное покрытие по всей арене" },
  { icon: UtensilsCrossed, title: "40 баров и кафе", text: "Фирменная кухня и закуски клуба" },
];
const layoutClasses = ["top-0 left-1/4 right-1/4 h-1/4", "bottom-0 left-1/4 right-1/4 h-1/4", "left-0 top-1/4 bottom-1/4 w-1/4", "right-0 top-1/4 bottom-1/4 w-1/4", "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"];

export default function Page() {
  const [activeZone, setActiveZone] = useState("vip");
  return (
    <SiteShell>
      <div className="min-h-screen bg-ink pt-20 md:pt-24">
        <section className="py-16 md:py-24"><div className="mx-auto max-w-[1440px] px-5 md:px-10"><span className="text-xs uppercase tracking-[0.3em] text-gold">Дом клуба</span><SplitTitle text="Top Team Arena" as="h1" className="text-display mt-3 text-[clamp(2.5rem,8vw,7rem)] text-white" /><Reveal delay={0.3}><p className="mt-8 max-w-xl text-lg leading-relaxed text-ash">Современная арена, где каждый матч становится событием. 45 000 голосов сливаются в один рёв.</p></Reveal></div></section>
        <section className="relative min-h-[420px] h-[60vh] overflow-hidden"><img src={stadiumImage} alt="Top Team Arena" className="h-full w-full object-cover" /><div className="absolute inset-0 bg-ink/40" /></section>
        <section className="border-t border-ink-border py-16 md:py-24"><div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-8 px-5 md:grid-cols-4 md:px-10">{[{ value: 45000, label: "Вместимость" }, { value: 2017, label: "Год открытия" }, { value: 4, label: "Трибуны" }, { value: 90, label: "Гектаров" }].map((item, index) => <Reveal key={item.label} delay={index * 0.1} className="text-center"><CountUp value={item.value} className="font-display block text-4xl font-bold text-gold md:text-5xl" /><p className="mt-2 text-xs uppercase tracking-wide text-ash">{item.label}</p></Reveal>)}</div></section>
        <section className="border-t border-ink-border bg-ink-card py-16 md:py-24"><div className="mx-auto max-w-[1440px] px-5 md:px-10"><SplitTitle text="Карта секторов" as="h2" className="text-display mb-12 text-3xl text-white md:text-5xl" /><div className="grid gap-12 lg:grid-cols-2"><div className="relative mx-auto aspect-square max-w-md"><div className="absolute inset-0 rounded-full border-2 border-ink-border" /><div className="absolute inset-8 rounded-full border-2 border-ink-border" /><div className="absolute inset-[30%] border border-gold/20 bg-ink-soft" />{stadiumZones.map((zone, index) => <button key={zone.id} onClick={() => setActiveZone(zone.id)} style={{ backgroundColor: activeZone === zone.id ? "#C8A84B" : zone.color }} className={`absolute transition-all hover:opacity-80 ${layoutClasses[index]} ${activeZone === zone.id ? "ring-2 ring-gold ring-offset-2 ring-offset-ink-card" : ""}`} aria-label={zone.name} />)}</div><div>{stadiumZones.map((zone) => <div key={zone.id} onClick={() => setActiveZone(zone.id)} className={`cursor-pointer border-l-2 p-6 transition-all ${activeZone === zone.id ? "border-gold bg-gold/5" : "border-ink-border"}`}><div className="flex items-center justify-between"><h3 className="font-display text-xl text-white">{zone.name}</h3><span className="font-display text-2xl font-bold text-gold">{zone.capacity.toLocaleString("ru-RU")}</span></div></div>)}<Link href="/tickets" className="accent-glow accent-glow-hover mt-8 inline-flex items-center gap-2 bg-gold px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-gold-light">Купить билеты <ChevronRight size={14} /></Link></div></div></div></section>
        <section className="border-t border-ink-border py-16 md:py-24"><div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-6 px-5 md:grid-cols-4 md:px-10">{comfortItems.map((item, index) => { const Icon = item.icon; return <Reveal key={item.title} delay={index * 0.1}><div className="card-gradient h-full border border-ink-border p-6">{Icon ? <Icon className="mb-4 text-gold" size={24} /> : <span className="mb-4 block font-display text-lg font-bold text-gold">{item.title}</span>}<h3 className="font-display text-lg text-white">{item.title}</h3><p className="mt-2 text-sm text-ash">{item.text}</p></div></Reveal>; })}</div></section>
      </div>
    </SiteShell>
  );
}
