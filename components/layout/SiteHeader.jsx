"use client";

import Link from "next/link";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, socialLinks } from "../../data/siteData";

function Logo({ compact = false }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="Top Team KG — на главную">
      <img
        src="/logo.jpg"
        alt=""
        className={`object-contain transition-all duration-500 ${compact ? "h-8 w-8" : "h-9 w-9 md:h-10 md:w-10"}`}
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-tight text-white transition-colors group-hover:text-electric md:text-xl">
          TOP<span className="text-electric">TEAM</span>
        </span>
        <span className="mt-0.5 font-heading text-[9px] uppercase tracking-[0.35em] text-ash">
          Kyrgyzstan
        </span>
      </span>
    </Link>
  );
}

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
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-electric/10 bg-navy-950/85 shadow-[0_8px_32px_rgba(4,9,20,0.5)] backdrop-blur-xl"
            : "bg-gradient-to-b from-navy-950/70 to-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-site items-center justify-between px-5 transition-all duration-500 md:px-10 ${
            scrolled ? "h-14 md:h-16" : "h-16 md:h-20"
          }`}
        >
          <Logo compact={scrolled} />

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Главное меню">
            {navItems.map((item) => {
              const active = pathname === item.path || pathname.startsWith(`${item.path}/`);
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`group relative py-1.5 font-heading text-[13px] font-medium uppercase tracking-wide transition-colors duration-300 ${
                    active ? "text-electric" : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-gradient-to-r from-electric to-royal transition-all duration-300 ${
                      active ? "w-full shadow-glow" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/partners"
              className="accent-glow-hover hidden items-center gap-1.5 rounded-full bg-royal px-5 py-2.5 font-heading text-xs font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-electric hover:text-navy-950 md:inline-flex"
            >
              Стать партнером
              <ArrowUpRight size={13} />
            </Link>
            <button
              className="rounded-full border border-white/15 p-2.5 text-white transition-colors hover:border-electric hover:text-electric lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Открыть меню"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col bg-navy-950/97 backdrop-blur-2xl lg:hidden"
          >
            <div className="stadium-glow pointer-events-none absolute inset-x-0 top-0 h-64" />
            <div className="relative flex h-16 items-center justify-between px-5">
              <Logo />
              <button
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/15 p-2.5 text-white transition-colors hover:border-electric hover:text-electric"
                aria-label="Закрыть меню"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="relative flex flex-1 flex-col justify-center px-6" aria-label="Мобильное меню">
              {navItems.map((item, index) => {
                const active = pathname === item.path || pathname.startsWith(`${item.path}/`);
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={item.path}
                      className={`flex items-center justify-between border-b border-white/10 py-4 font-display text-3xl font-semibold uppercase transition-colors ${
                        active ? "text-electric" : "text-white/90 hover:text-electric"
                      }`}
                    >
                      {item.label}
                      <ArrowUpRight size={20} className="text-electric/50" />
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-8 space-y-4"
              >
                <Link
                  href="/partners"
                  className="accent-glow flex items-center justify-center gap-2 rounded-full bg-royal px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wide text-white"
                >
                  Стать партнером <ArrowUpRight size={15} />
                </Link>
                <div className="flex justify-center gap-5 pt-2">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-heading text-xs uppercase tracking-[0.2em] text-ash transition-colors hover:text-electric"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
