import Link from "next/link";
import SiteShell from "../../components/layout/SiteShell";
import Reveal from "../../components/shared/Reveal";
import SplitTitle from "../../components/shared/SplitTitle";

export default function Page() {
  return (
    <SiteShell>
      <div className="min-h-screen bg-ink pt-20 md:pt-24">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-5 text-center md:px-10">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Roadmap</span>
            <SplitTitle text="Академия появится после подтверждения клуба" as="h1" className="text-display mt-3 text-[clamp(2.5rem,8vw,6rem)] text-white" />
            <Reveal delay={0.2}>
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ash">
                Клуб уже проводил открытые отборы в состав — следите за анонсами в Instagram. Отдельный раздел академии откроется, когда клуб подтвердит программу, наборы и возрастные группы.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Link href="/contact" className="mt-10 inline-flex bg-gold px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-gold-light">
                Запросить материалы
              </Link>
            </Reveal>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
