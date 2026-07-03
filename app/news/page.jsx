"use client";

import { useState } from "react";
import SiteShell from "../../components/layout/SiteShell";
import NewsCard from "../../components/shared/NewsCard";
import Reveal from "../../components/shared/Reveal";
import Container from "../../components/ui/Container";
import PageHero from "../../components/ui/PageHero";
import { news, newsCategories } from "../../data/siteData";

export default function Page() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const filteredNews =
    activeCategory === "Все" ? news : news.filter((article) => article.category === activeCategory);
  const featured = filteredNews.find((article) => article.featured) || filteredNews[0];
  const rest = filteredNews.filter((article) => article.id !== featured?.id);

  return (
    <SiteShell>
      <PageHero
        eyebrow="Новости"
        title="Медиа-лента клуба"
        description="Матчи, игроки, партнерства и жизнь Top Team — все главное в одном месте."
      />

      {/* Категории */}
      <section className="sticky top-14 z-30 border-b border-electric/10 bg-navy-950/90 py-5 backdrop-blur-xl md:top-16">
        <div className="no-scrollbar mx-auto flex max-w-site items-center gap-2.5 overflow-x-auto px-5 md:px-10">
          {newsCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap rounded-full border px-5 py-2 font-heading text-xs font-medium uppercase tracking-wide transition-all duration-300 ${
                activeCategory === category
                  ? "border-royal bg-royal text-white shadow-glow"
                  : "border-white/12 text-ash hover:border-electric/40 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="relative bg-navy-900 py-14 md:py-20">
        <div className="stadium-glow pointer-events-none absolute inset-x-0 top-0 h-96" />
        <Container className="relative">
          {filteredNews.length === 0 ? (
            <div className="py-24 text-center text-ash">Новостей в этой категории пока нет.</div>
          ) : (
            <>
              {featured && (
                <Reveal className="mb-6">
                  <NewsCard article={featured} featured />
                </Reveal>
              )}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {rest.map((article, index) => (
                  <Reveal key={article.id} delay={(index % 3) * 0.06} className="h-full">
                    <NewsCard article={article} />
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </Container>
      </section>
    </SiteShell>
  );
}
