import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, CalendarDays, UserCircle2 } from "lucide-react";
import SiteShell from "../../../components/layout/SiteShell";
import Reveal from "../../../components/shared/Reveal";
import { getNewsById } from "../../../data/siteData";
import { notFound } from "next/navigation";

export default function Page({ params }) {
  const article = getNewsById(params.id);
  if (!article) notFound();

  return (
    <SiteShell>
      <article className="min-h-screen bg-ink pt-16 md:pt-20">
        <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <img src={article.cover_image_url} alt={article.title} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/30" />
          <div className="relative mx-auto flex h-full max-w-4xl flex-col justify-end px-5 pb-12 md:px-10 md:pb-20">
            <span className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">{article.category}</span>
            <h1 className="text-display text-3xl leading-[0.95] text-white md:text-6xl">{article.title}</h1>
            {article.subtitle && <p className="mt-4 text-lg text-ash md:text-xl">{article.subtitle}</p>}
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-ash">
              <span className="flex items-center gap-1.5"><UserCircle2 size={14} /> {article.author || "Редакция"}</span>
              <span className="flex items-center gap-1.5"><CalendarDays size={14} /> {new Date(article.created_date).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })}</span>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-10">
            <Link href="/news" className="mb-10 inline-flex items-center gap-2 font-heading text-xs uppercase tracking-wide text-ash transition-colors hover:text-gold"><ArrowLeft size={14} /> Все новости</Link>
            <Reveal>
              <div className="article-body">
                <ReactMarkdown>{article.body || "Текст статьи скоро появится."}</ReactMarkdown>
              </div>
            </Reveal>
          </div>
        </section>
      </article>
    </SiteShell>
  );
}
