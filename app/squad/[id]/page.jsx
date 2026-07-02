import Link from "next/link";
import { ArrowLeft, CircleAlert } from "lucide-react";
import SiteShell from "../../../components/layout/SiteShell";
import Reveal from "../../../components/shared/Reveal";
import { getPlayerById } from "../../../data/siteData";
import { notFound } from "next/navigation";

export default function Page({ params }) {
  const player = getPlayerById(params.id);
  if (!player) notFound();

  const profile = [
    { label: "Позиция", value: player.position },
    { label: "Номер", value: player.number ?? "Ожидает подтверждения" },
    { label: "Страна", value: player.nationality || "Ожидает подтверждения" },
    { label: "Статус", value: player.status },
  ];

  return (
    <SiteShell>
      <div className="min-h-screen bg-ink pt-16 md:pt-20">
        <section className="border-b border-ink-border bg-ink-card py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <Link href="/squad" className="mb-8 inline-flex w-fit items-center gap-2 font-heading text-xs uppercase tracking-wide text-ash transition-colors hover:text-gold">
              <ArrowLeft size={14} /> Состав команды
            </Link>
            <div className="grid gap-10 lg:grid-cols-[0.8fr,1.2fr] lg:items-end">
              <div className="card-gradient flex aspect-square items-center justify-center border border-ink-border p-10">
                <img src="/logo.png" alt="Top Team KG" className="h-44 w-44 object-contain opacity-80 md:h-56 md:w-56" />
              </div>
              <div>
                <span className="border border-gold/20 bg-gold/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold">{player.status}</span>
                <h1 className="text-display mt-6 text-4xl uppercase text-white md:text-7xl">{player.name}</h1>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ash">{player.bio}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:px-10 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Профиль</span>
              <h2 className="text-display mb-8 mt-3 text-3xl text-white md:text-4xl">Что уже можно показывать</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {profile.map((item) => (
                  <div key={item.label} className="card-gradient border border-ink-border p-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-ash">{item.label}</p>
                    <p className="mt-3 font-display text-2xl text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Верификация</span>
              <h2 className="text-display mb-8 mt-3 text-3xl text-white md:text-4xl">Что нужно подтвердить</h2>
              <div className="card-gradient border border-ink-border p-8">
                <div className="mb-6 flex items-center gap-3 text-gold">
                  <CircleAlert size={18} />
                  <span className="font-heading text-xs uppercase tracking-[0.2em]">Источник</span>
                </div>
                <p className="leading-relaxed text-ash">{player.source_note}</p>
                <div className="mt-8 space-y-4">
                  {player.pending_fields.map((field) => (
                    <div key={field} className="border-l border-gold/30 pl-4 text-sm leading-relaxed text-ash">
                      {field}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
