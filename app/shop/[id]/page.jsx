"use client";

import Link from "next/link";
import { ArrowLeft, Check, Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";
import SiteShell from "../../../components/layout/SiteShell";
import { getProductById } from "../../../data/siteData";
import { notFound } from "next/navigation";

export default function Page({ params }) {
  const product = getProductById(params.id);
  const [selectedSize, setSelectedSize] = useState(null);
  const [added, setAdded] = useState(false);
  if (!product) notFound();
  return (
    <SiteShell>
      <div className="min-h-screen bg-ink pt-16 md:pt-20">
        <section className="py-12 md:py-20"><div className="mx-auto max-w-[1440px] px-5 md:px-10"><Link href="/shop" className="mb-10 inline-flex items-center gap-2 font-heading text-xs uppercase tracking-wide text-ash transition-colors hover:text-gold"><ArrowLeft size={14} /> В магазин</Link><div className="grid gap-10 lg:grid-cols-2 lg:gap-20"><div className="group relative aspect-[4/5] overflow-hidden bg-ink-soft"><img src={product.image_url} alt={product.name} className="h-full w-full object-cover" />{product.badge && <span className={`absolute left-4 top-4 px-3 py-1.5 text-xs font-heading uppercase tracking-wider ${product.badge === "Новинка" ? "bg-gold text-ink" : product.badge === "Sale" ? "bg-red-500 text-white" : "bg-white text-ink"}`}>{product.badge}</span>}</div><div><span className="text-xs uppercase tracking-[0.3em] text-gold">{product.category}</span><h1 className="text-display mt-3 text-3xl leading-[0.95] text-white md:text-5xl">{product.name}</h1><p className="font-display mt-4 text-3xl font-bold text-gold">{product.price.toLocaleString("ru-RU")} ₽</p><p className="mt-6 leading-relaxed text-ash">{product.description}</p>{product.sizes?.length > 0 && <div className="mt-8"><span className="mb-3 block text-xs uppercase tracking-wide text-ash">Размер</span><div className="flex flex-wrap gap-3">{product.sizes.map((size) => <button key={size} onClick={() => setSelectedSize(size)} className={`h-12 w-12 border font-heading text-sm font-medium transition-colors ${selectedSize === size ? "border-gold bg-gold text-ink" : "border-ink-border text-white hover:border-ash"}`}>{size}</button>)}</div></div>}<div className="mt-8 flex flex-col gap-4 sm:flex-row"><button onClick={() => { if (!product.sizes?.length || selectedSize) { setAdded(true); window.setTimeout(() => setAdded(false), 2500); } }} disabled={Boolean(product.sizes?.length) && !selectedSize} className="accent-glow accent-glow-hover inline-flex flex-1 items-center justify-center gap-2 bg-gold px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-40">{added ? <><Check size={16} /> Добавлено</> : <><ShoppingBag size={16} /> В корзину</>}</button><button className="border border-ink-border px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-gold hover:text-gold"><Heart size={16} className="inline-block align-text-bottom" /> В избранное</button></div><div className="mt-10 grid grid-cols-3 gap-4 border-t border-ink-border pt-8 text-center"><div><p className="font-display text-lg font-bold text-gold">100%</p><p className="mt-1 text-xs text-ash">Оригинал</p></div><div><p className="font-display text-lg font-bold text-gold">14 дней</p><p className="mt-1 text-xs text-ash">Возврат</p></div><div><p className="font-display text-lg font-bold text-gold">Бесплатно</p><p className="mt-1 text-xs text-ash">Доставка от 5000₽</p></div></div></div></div></div></section>
      </div>
    </SiteShell>
  );
}
