import SiteShell from "../../components/layout/SiteShell";
import Reveal from "../../components/shared/Reveal";
import SplitTitle from "../../components/shared/SplitTitle";
import { mediaItems, socialLinks } from "../../data/siteData";

export default function Page() {
  return (
    <SiteShell>
      <div className="min-h-screen bg-ink pt-20 md:pt-24">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Медиа</span>
            <SplitTitle text="Контентная площадка Top Team KG" as="h1" className="text-display mt-3 text-[clamp(2.5rem,8vw,7rem)] text-white" />
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ash">
              Для медиа-футбольного клуба медиа-раздел должен быть одним из главных. Здесь собраны ключевые форматы: Reels, YouTube, фотоархив и backstage.
            </p>
          </div>
        </section>

        <section className="border-t border-ink-border py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {mediaItems.map((item, index) => (
                <Reveal key={item.id} delay={(index % 4) * 0.08}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group block"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-ink-soft">
                      <img src={item.image_url} alt={item.title} className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                      <span className="absolute left-3 top-3 bg-ink/70 px-2.5 py-1 text-[10px] uppercase tracking-wider text-gold backdrop-blur-sm">{item.type}</span>
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h2 className="font-display text-2xl text-white transition-colors group-hover:text-gold">{item.title}</h2>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-ash">{item.description}</p>
                    <p className="mt-3 font-heading text-xs uppercase tracking-[0.2em] text-gold">{item.link_label}</p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-ink-border bg-ink-card py-16 pb-32 md:py-24">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <SplitTitle text="Основные платформы" as="h2" className="text-display mb-12 text-3xl text-white md:text-5xl" />
            <div className="grid gap-6 md:grid-cols-2">
              {socialLinks.map((item, index) => (
                <Reveal key={item.label} delay={index * 0.08}>
                  <a href={item.href} target="_blank" rel="noreferrer" className="card-gradient block border border-ink-border p-8 transition-colors hover:border-gold/30">
                    <p className="text-xs uppercase tracking-[0.3em] text-gold">{item.label}</p>
                    <h3 className="mt-4 font-display text-3xl text-white">{item.caption}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ash">
                      Используем как внешний трафик-канал для матчей, хайлайтов, интервью и короткого вертикального контента.
                    </p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
