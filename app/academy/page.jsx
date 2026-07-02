import Link from "next/link";
import { ArrowRight, GraduationCap, Medal, Trophy, Users } from "lucide-react";
import SiteShell from "../../components/layout/SiteShell";
import CountUp from "../../components/shared/CountUp";
import Reveal from "../../components/shared/Reveal";
import SplitTitle from "../../components/shared/SplitTitle";
import { academyJourney } from "../../data/siteData";

const academyImage = "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1920&q=80&auto=format&fit=crop";

export default function Page() {
  const stats = [
    { value: 240, label: "Воспитанников", icon: Users },
    { value: 15, label: "Тренеров-профи", icon: GraduationCap },
    { value: 8, label: "Чемпионских медалей", icon: Medal },
    { value: 12, label: "Лет работы", icon: Trophy },
  ];
  return (
    <SiteShell>
      <div className="min-h-screen bg-ink pt-20 md:pt-24">
        <section className="py-16 md:py-24"><div className="mx-auto max-w-[1440px] px-5 md:px-10"><span className="text-xs uppercase tracking-[0.3em] text-gold">Академия</span><SplitTitle text="Звёзды рождаются здесь" as="h1" className="text-display mt-3 text-[clamp(2.5rem,8vw,7rem)] text-white" /></div></section>
        <section className="relative min-h-[360px] h-[50vh] overflow-hidden"><img src={academyImage} alt="Академия Top Team" className="h-full w-full object-cover" /><div className="absolute inset-0 bg-ink/50" /></section>
        <section className="border-y border-ink-border bg-ink-card py-16 md:py-24">
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-8 px-5 text-center md:grid-cols-4 md:px-10">
            {stats.map((stat, index) => { const Icon = stat.icon; return <Reveal key={stat.label} delay={index * 0.1}><Icon className="mx-auto mb-4 text-gold" size={26} /><CountUp value={stat.value} className="font-display block text-4xl font-bold text-white md:text-5xl" /><p className="mt-2 text-xs uppercase tracking-wide text-ash">{stat.label}</p></Reveal>; })}
          </div>
        </section>
        <section className="py-16 md:py-24"><div className="mx-auto max-w-[1440px] px-5 md:px-10"><SplitTitle text="Путь игрока" as="h2" className="text-display mb-12 text-3xl text-white md:text-5xl" /><div className="space-y-4">{academyJourney.map((step, index) => <Reveal key={step.stage} delay={index * 0.08}><div className="card-gradient group flex flex-col gap-6 border border-ink-border p-6 transition-colors hover:border-gold/30 md:flex-row md:items-center md:p-8"><span className="gold-text font-display w-48 shrink-0 text-3xl font-bold md:text-5xl">{step.stage}</span><div className="flex-1"><h3 className="font-display text-xl text-white transition-colors group-hover:text-gold md:text-2xl">{step.title}</h3><p className="mt-2 leading-relaxed text-ash">{step.text}</p></div><span className="font-display text-2xl text-ash">0{index + 1}</span></div></Reveal>)}</div></div></section>
        <section className="border-t border-ink-border py-16 md:py-24"><div className="mx-auto max-w-[1440px] px-5 text-center md:px-10"><Reveal><h2 className="text-display mx-auto max-w-2xl text-3xl text-white md:text-5xl">Хочешь, чтобы твой ребёнок стал частью Top Team?</h2><Link href="/contact" className="accent-glow accent-glow-hover mt-8 inline-flex items-center gap-2 bg-gold px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-gold-light">Записаться на отбор <ArrowRight size={16} /></Link></Reveal></div></section>
      </div>
    </SiteShell>
  );
}
