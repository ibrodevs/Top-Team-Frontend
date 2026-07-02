"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import SiteShell from "../../components/layout/SiteShell";
import Reveal from "../../components/shared/Reveal";
import SplitTitle from "../../components/shared/SplitTitle";
import { news, newsCategories } from "../../data/siteData";

export default function Page() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const filteredNews = useMemo(() => (activeCategory === "Все" ? news : news.filter((article) => article.category === activeCategory)), [activeCategory]);
  const featured = filteredNews.find((article) => article.featured) || filteredNews[0];
  const rest = filteredNews.filter((article) => article.id !== featured?.id);

  return (
    <SiteShell>
      <div className="min-h-screen bg-ink pt-20 md:pt-24">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Жизнь клуба</span>
            <SplitTitle text="Новости Top Team" as="h1" className="text-display mt-3 text-[clamp(2.5rem,8vw,7rem)] text-white" />
          </div>
        </section>
        <section className="sticky top-16 z-30 border-t border-ink-border bg-ink/90 py-6 backdrop-blur-md md:top-20">
          <div className="no-scrollbar mx-auto flex max-w-[1440px] items-center gap-3 overflow-x-auto px-5 md:px-10">
            {newsCategories.map((category) => (
              <button key={category} onClick={() => setActiveCategory(category)} className={`whitespace-nowrap border px-5 py-2 font-heading text-sm uppercase tracking-wide transition-colors ${activeCategory === category ? "border-gold bg-gold text-ink" : "border-ink-border text-ash hover:border-ash hover:text-white"}`}>
                {category}
              </button>
            ))}
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            {filteredNews.length === 0 ? (
              <div className="py-20 text-center text-ash">Новостей в этой категории пока нет.</div>
            ) : (
              <>
                {featured && (
                  <Reveal className="mb-6">
                    <Link href={`/news/${featured.id}`} className="group block">
                      <div className="relative aspect-[16/10] overflow-hidden bg-ink-soft md:aspect-[16/7]">
                        <img src={featured.cover_image_url} alt={featured.title} className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                        <div className="absolute bottom-0 left-0 max-w-2xl p-6 md:p-12">
                          <span className="mb-4 inline-block bg-gold px-2.5 py-1 font-heading text-[10px] uppercase tracking-wider text-ink">{featured.category}</span>
                          <h2 className="text-display text-3xl text-white transition-colors group-hover:text-gold md:text-5xl">{featured.title}</h2>
                          {featured.subtitle && <p className="mt-3 line-clamp-2 text-lg text-ash">{featured.subtitle}</p>}
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                )}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {rest.map((article, index) => (
                    <Reveal key={article.id} delay={(index % 3) * 0.08} className={index === 0 || index === 4 ? "md:col-span-2" : ""}>
                      <Link href={`/news/${article.id}`} className="group block h-full">
                        <div className={`relative overflow-hidden bg-ink-soft ${index === 0 || index === 4 ? "aspect-[16/9]" : "aspect-[4/5]"}`}>
                          <img src={article.cover_image_url} alt={article.title} className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                          <span className="absolute left-3 top-3 bg-ink/70 px-2.5 py-1 text-[10px] uppercase tracking-wider text-gold backdrop-blur-sm">{article.category}</span>
                        </div>
                        <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-white transition-colors group-hover:text-gold">{article.title}</h3>
                        <p className="mt-2 line-clamp-2 text-sm text-ash">{article.subtitle}</p>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
