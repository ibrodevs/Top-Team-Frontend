import Link from "next/link";
import { ArrowUpRight, Camera, CirclePlay, Music2 } from "lucide-react";
import { navItems, socialLinks } from "../../data/siteData";

const socialIcons = {
  Instagram: Camera,
  YouTube: CirclePlay,
  TikTok: Music2,
};

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-electric/10 bg-navy-950">
      <div className="stadium-glow-bottom pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent" />

      <div className="relative mx-auto max-w-site px-5 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img src="/logo.jpg" alt="Top Team KG" className="h-12 w-12 object-contain" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-3xl font-bold text-white">
                  TOP<span className="text-electric">TEAM</span>
                </span>
                <span className="mt-1 font-heading text-[10px] uppercase tracking-[0.35em] text-ash">
                  Media Football Club
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ash">
              Top Team KG — медиа-футбольный клуб Кыргызстана. Футбол, контент и болельщики —
              одна команда, которая играет, чтобы побеждать.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const Icon = socialIcons[item.label] || Camera;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-ash transition-all duration-300 hover:border-electric hover:text-electric hover:shadow-glow"
                    aria-label={item.label}
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="mb-5 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-electric">
              Разделы
            </h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm md:grid-cols-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link href={item.path} className="text-ash transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="mb-5 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-electric">
              Партнерство
            </h4>
            <p className="text-sm leading-relaxed text-ash">
              Футбол, медиа и молодая аудитория — площадка для брендов, которые хотят быть ближе
              к новой спортивной культуре.
            </p>
            <Link
              href="/partners"
              className="group mt-5 inline-flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:text-electric"
            >
              Получить предложение
              <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <div className="mt-6 border-t border-white/10 pt-5 text-sm text-ash">
              <a href="https://www.instagram.com/topteam.kg/" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
                @topteam.kg
              </a>
              <span className="mx-2 text-white/20">·</span>
              <span>Бишкек, Кыргызстан</span>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-ash">
            © 2026 Top Team KG. Официальная цифровая платформа клуба.
          </p>
          <div className="flex gap-6 text-xs text-ash">
            <Link href="/contact" className="transition-colors hover:text-white">Связаться</Link>
            <Link href="/partners" className="transition-colors hover:text-white">Стать партнером</Link>
            <Link href="/media" className="transition-colors hover:text-white">Медиа</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
