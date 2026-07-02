"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";
import SiteShell from "../../components/layout/SiteShell";
import Reveal from "../../components/shared/Reveal";
import SplitTitle from "../../components/shared/SplitTitle";
import { productCategories, products } from "../../data/siteData";

export default function Page() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const filteredProducts = activeCategory === "Все" ? products : products.filter((product) => product.category === activeCategory);
  return (
    <SiteShell>
      <div className="min-h-screen bg-ink pt-20 md:pt-24">
        <section className="py-16 md:py-24"><div className="mx-auto max-w-[1440px] px-5 md:px-10"><span className="text-xs uppercase tracking-[0.3em] text-gold">Витрина клуба</span><SplitTitle text="Магазин Top Team" as="h1" className="text-display mt-3 text-[clamp(2.5rem,8vw,7rem)] text-white" /><p className="mt-6 max-w-lg text-lg leading-relaxed text-ash">Эксклюзивный мерч. Носи цвета клуба с гордостью.</p></div></section>
        <section className="sticky top-16 z-30 border-t border-ink-border bg-ink/90 py-8 backdrop-blur-md md:top-20"><div className="no-scrollbar mx-auto flex max-w-[1440px] items-center gap-3 overflow-x-auto px-5 md:px-10">{productCategories.map((category) => <button key={category} onClick={() => setActiveCategory(category)} className={`whitespace-nowrap border px-5 py-2 font-heading text-sm uppercase tracking-wide transition-colors ${activeCategory === category ? "border-gold bg-gold text-ink" : "border-ink-border text-ash hover:border-ash hover:text-white"}`}>{category}</button>)}</div></section>
        <section className="py-12 pb-24 md:py-20"><div className="mx-auto max-w-[1440px] px-5 md:px-10">{filteredProducts.length === 0 ? <div className="py-20 text-center text-ash"><ShoppingBag className="mx-auto mb-4 text-ink-border" size={40} />Товары в этой категории скоро появятся.</div> : <div className="grid grid-cols-2 gap-6 md:gap-8 lg:grid-cols-3">{filteredProducts.map((product, index) => <Reveal key={product.id} delay={(index % 3) * 0.08}><Link href={`/shop/${product.id}`} className="group block"><div className="relative aspect-[4/5] overflow-hidden bg-ink-soft"><img src={product.image_url} alt={product.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />{product.badge && <span className={`absolute left-3 top-3 px-2.5 py-1 text-[10px] font-heading uppercase tracking-wider ${product.badge === "Новинка" ? "bg-gold text-ink" : product.badge === "Sale" ? "bg-red-500 text-white" : "bg-white text-ink"}`}>{product.badge}</span>}</div><div className="mt-4 flex items-start justify-between gap-4"><div><h3 className="font-display text-lg font-semibold leading-snug text-white transition-colors group-hover:text-gold">{product.name}</h3><p className="mt-1 text-sm text-ash">{product.category}</p></div><span className="whitespace-nowrap font-display text-lg font-bold text-gold">{product.price.toLocaleString("ru-RU")} ₽</span></div></Link></Reveal>)}</div>}</div></section>
      </div>
    </SiteShell>
  );
}
