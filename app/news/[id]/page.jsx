import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, CalendarDays, UserCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import SiteShell from "../../../components/layout/SiteShell";
import NewsCard from "../../../components/shared/NewsCard";
import Reveal from "../../../components/shared/Reveal";
import Container from "../../../components/ui/Container";
import { getNewsById, getRelatedNews } from "../../../data/siteData";

export default function Page({ params }) {
  const article = getNewsById(params.id);
  if (!article) notFound();

  const related = getRelatedNews(article.id, 3);

  return (
    <SiteShell>
      <article className="bg-navy-900">
        {/* Cover */}
        <section className="relative h-[65vh] min-h-[460px] overflow-hidden">
          <img
            src={article.cover_image_url}
            alt={article.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-950/55 to-navy-950/40" />
          <div className="relative mx-auto flex h-full max-w-4xl flex-col justify-end px-5 pb-12 md:px-10 md:pb-20">
            <span className="mb-4 w-fit rounded-full bg-royal px-4 py-1.5 font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
              {article.category}
            </span>
            <h1 className="text-display text-3xl uppercase leading-[0.98] text-white md:text-6xl">
              {article.title}
            </h1>
            {article.subtitle && <p className="mt-5 text-lg text-ash md:text-xl">{article.subtitle}</p>}
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-ash">
              <span className="flex items-center gap-1.5">
                <UserCircle2 size={14} className="text-electric" /> {article.author || "Пресс-служба"}
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarDays size={14} className="text-electric" />
                {new Date(article.created_date).toLocaleDateString("ru-RU", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </section>

        {/* Текст */}
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-3xl px-5 md:px-10">
            <Link
              href="/news"
              className="mb-10 inline-flex items-center gap-2 font-heading text-xs uppercase tracking-[0.2em] text-ash transition-colors hover:text-electric"
            >
              <ArrowLeft size={14} /> Все новости
            </Link>
            <Reveal>
              <div className="article-body">
                <ReactMarkdown>{article.body || "Текст статьи скоро появится."}</ReactMarkdown>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="border-t border-electric/10 bg-navy-950 py-16 md:py-24">
            <Container>
              <h2 className="text-display mb-10 text-3xl uppercase text-white md:text-4xl">
                Читайте также
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {related.map((item, index) => (
                  <Reveal key={item.id} delay={index * 0.06} className="h-full">
                    <NewsCard article={item} />
                  </Reveal>
                ))}
              </div>
            </Container>
          </section>
        )}
      </article>
    </SiteShell>
  );
}
