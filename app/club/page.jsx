import SiteShell from "../../components/layout/SiteShell";
import Reveal from "../../components/shared/Reveal";
import SplitTitle from "../../components/shared/SplitTitle";
import {
  achievements,
  clubFacts,
  clubTimeline,
  clubValues,
  missionVision,
  partnerSlots,
} from "../../data/siteData";

export default function Page() {
  return (
    <SiteShell>
      <div className="min-h-screen bg-ink pt-20 md:pt-24">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">О клубе</span>
            <SplitTitle text="Top Team KG как медиа-футбольный бренд" as="h1" className="text-display mt-3 text-[clamp(2.5rem,8vw,7rem)] text-white" />
            <Reveal delay={0.3}>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ash">
                Top Team KG лучше позиционировать не как обычный футбольный клуб, а как медиа-футбольный проект. На одной платформе должны работать состав, матчи, достижения, контент и комьюнити.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-ink-border py-16 md:py-24">
          <div className="mx-auto grid max-w-[1440px] gap-6 px-5 md:px-10 lg:grid-cols-3">
            {clubFacts.map((fact, index) => (
              <Reveal key={fact.label} delay={index * 0.08}>
                <div className="card-gradient h-full border border-ink-border p-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold">{fact.label}</p>
                  <h2 className="mt-4 font-display text-2xl text-white">{fact.value}</h2>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="border-t border-ink-border py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <SplitTitle text="История проекта" as="h2" className="text-display mb-12 text-3xl text-white md:text-5xl" />
            <div className="relative">
              <div className="absolute bottom-0 left-4 top-0 w-px bg-ink-border md:left-1/2" />
              <div className="space-y-12 md:space-y-20">
                {clubTimeline.map((item, index) => (
                  <Reveal key={`${item.year}-${item.title}`}>
                    <div className={`relative flex flex-col gap-6 md:flex-row md:gap-12 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                      <div className="pl-12 md:w-1/2 md:px-12 md:pl-0">
                        <span className="gold-text font-display text-5xl font-bold md:text-7xl">{item.year}</span>
                        <h3 className="mt-2 font-display text-2xl text-white">{item.title}</h3>
                        <p className="mt-3 leading-relaxed text-ash">{item.text}</p>
                      </div>
                      <div className="md:w-1/2" />
                      <div className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-gold ring-4 ring-ink md:left-1/2" />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-ink-border bg-ink-card py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <SplitTitle text="Миссия, ценности и тон" as="h2" className="text-display mb-12 text-3xl text-white md:text-5xl" />
            <div className="grid gap-6 lg:grid-cols-3">
              {missionVision.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.08}>
                  <div className="card-gradient h-full border border-ink-border p-8">
                    <h3 className="font-display text-2xl text-white">{item.title}</h3>
                    <p className="mt-4 leading-relaxed text-ash">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {clubValues.map((value, index) => (
                <Reveal key={value.title} delay={0.1 + index * 0.08}>
                  <div className="card-gradient h-full border border-ink-border p-8 transition-colors hover:border-gold/30">
                    <span className="font-display text-4xl font-bold text-gold/30">0{index + 1}</span>
                    <h3 className="mt-4 font-display text-2xl text-white">{value.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ash">{value.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-ink-border py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <SplitTitle text="Достижения и верификация" as="h2" className="text-display mb-12 text-3xl text-white md:text-5xl" />
            <div className="grid gap-6 md:grid-cols-2">
              {achievements.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.08}>
                  <div className="card-gradient h-full border border-ink-border p-8">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <h3 className="font-display text-2xl text-white">{item.title}</h3>
                      <span className="border border-gold/20 bg-gold/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold">{item.year}</span>
                    </div>
                    <p className="mt-4 leading-relaxed text-ash">{item.description}</p>
                    <p className="mt-4 text-sm uppercase tracking-wide text-ash">Статус: {item.status}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-ink-border bg-ink-card py-16 pb-32 md:py-24">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <SplitTitle text="Партнеры и руководство" as="h2" className="text-display mb-12 text-3xl text-white md:text-5xl" />
            <div className="grid gap-6 lg:grid-cols-[1.3fr,0.7fr]">
              <Reveal>
                <div className="card-gradient border border-ink-border p-8 md:p-10">
                  <h3 className="font-display text-2xl text-white">Что еще нужно от клуба</h3>
                  <p className="mt-4 max-w-2xl leading-relaxed text-ash">
                    Для полноценной страницы "О клубе" еще нужны подтвержденные данные по руководству, тренерскому штабу, логотипам партнеров, фирменным материалам и официальной истории. До этого момента лучше не публиковать вымышленные имена и должности.
                  </p>
                </div>
              </Reveal>
              <div className="grid gap-6">
                {partnerSlots.map((slot, index) => (
                  <Reveal key={slot.title} delay={index * 0.08}>
                    <div className="card-gradient border border-ink-border p-6">
                      <p className="text-xs uppercase tracking-[0.3em] text-gold">{slot.title}</p>
                      <p className="mt-3 text-sm leading-relaxed text-ash">{slot.status}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
