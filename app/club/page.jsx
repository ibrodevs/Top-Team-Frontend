import SiteShell from "../../components/layout/SiteShell";
import Reveal from "../../components/shared/Reveal";
import SplitTitle from "../../components/shared/SplitTitle";
import { clubTimeline, clubValues } from "../../data/siteData";

export default function Page() {
  return (
    <SiteShell>
      <div className="min-h-screen bg-ink pt-20 md:pt-24">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">О клубе</span>
            <SplitTitle text="История Top Team" as="h1" className="text-display mt-3 text-[clamp(2.5rem,8vw,7rem)] text-white" />
            <Reveal delay={0.3}><p className="mt-8 max-w-2xl text-lg leading-relaxed text-ash">От региональных матчей до еврокубков — путь клуба, который не знал лёгких дорог, но всегда шёл вперёд.</p></Reveal>
          </div>
        </section>
        <section className="border-t border-ink-border py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <div className="relative">
              <div className="absolute bottom-0 left-4 top-0 w-px bg-ink-border md:left-1/2" />
              <div className="space-y-12 md:space-y-20">
                {clubTimeline.map((item, index) => (
                  <Reveal key={item.year}>
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
            <SplitTitle text="Ценности клуба" as="h2" className="text-display mb-12 text-3xl text-white md:text-5xl" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {clubValues.map((value, index) => (
                <Reveal key={value.title} delay={index * 0.1}>
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
      </div>
    </SiteShell>
  );
}
