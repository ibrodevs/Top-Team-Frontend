"use client";

import Link from "next/link";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "../../data/siteData";

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => scrollY.on("change", (value) => setScrolled(value > 60)), [scrollY]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-ink-border bg-ink/85 backdrop-blur-xl" : "bg-transparent"}`}
      >
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:h-20 md:px-10">
          <Link href="/" className="group flex items-center gap-2" aria-label="Top Team FC — на главную">
            <span className="font-display text-xl font-bold tracking-tighter text-white transition-colors group-hover:text-gold md:text-2xl">
              TOP<span className="text-gold">TEAM</span>
            </span>
            <span className="mt-0.5 hidden text-[10px] uppercase tracking-[0.3em] text-ash md:block">FC</span>
          </Link>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Главное меню">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative py-1 font-heading text-[13px] font-medium uppercase tracking-wide text-white/80 transition-colors duration-300 hover:text-gold ${pathname === item.path ? "text-gold" : ""}`}
              >
                {item.label === "Live" && <span className="live-dot mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-red-500 align-middle" />}
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/tickets" className="accent-glow hidden items-center bg-gold px-5 py-2.5 font-heading text-xs font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-gold-light md:inline-flex">
              Билеты
            </Link>
            <button className="p-2 text-white lg:hidden" onClick={() => setOpen(true)} aria-label="Открыть меню">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-ink/98 backdrop-blur-xl lg:hidden">
            <div className="flex h-16 items-center justify-between px-5 md:h-20 md:px-10">
              <span className="font-display text-2xl font-bold text-white">TOP<span className="text-gold">TEAM</span></span>
              <button onClick={() => setOpen(false)} className="p-2 text-white" aria-label="Закрыть меню">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col px-5 pt-6" aria-label="Мобильное меню">
              {navItems.map((item, index) => (
                <motion.div key={item.path} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 + index * 0.04 }}>
                  <Link href={item.path} className="block border-b border-ink-border py-4 font-display text-3xl font-semibold text-white/90 hover:text-gold">
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Link href="/tickets" className="mt-8 inline-flex items-center justify-center bg-gold px-8 py-4 font-heading font-semibold uppercase tracking-wide text-ink">
                Купить билеты
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
