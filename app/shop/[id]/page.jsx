import Link from "next/link";
import SiteShell from "../../../components/layout/SiteShell";
import SplitTitle from "../../../components/shared/SplitTitle";

export default function Page() {
  return (
    <SiteShell>
      <div className="min-h-screen bg-ink pt-16 md:pt-20">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-5 text-center md:px-10">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Roadmap</span>
            <SplitTitle text="Карточки товаров пока не используются" as="h1" className="text-display mt-3 text-[clamp(2.5rem,8vw,6rem)] text-white" />
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ash">
              Маршрут сохранен технически, но витрина магазина не входит в первую версию сайта по текущему документу.
            </p>
            <Link href="/shop" className="mt-10 inline-flex bg-gold px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-gold-light">
              Назад в roadmap
            </Link>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
