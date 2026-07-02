import Link from "next/link";
import { Camera, CirclePlay, Mail, MessageCircle } from "lucide-react";
import { socialLinks } from "../../data/siteData";

const socialIcons = {
  Instagram: Camera,
  YouTube: CirclePlay,
  Email: Mail,
  Telegram: MessageCircle,
};

export default function SiteFooter() {
  return (
    <footer className="border-t border-ink-border bg-ink">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:grid-cols-6">
          <div className="md:col-span-2 lg:col-span-2">
            <span className="font-display text-3xl font-bold text-white">
              TOP<span className="text-gold">TEAM</span>
            </span>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ash">
              Top Team KG - медиа-футбольный клуб Кыргызстана. Сайт объединяет матчи,
              состав, новости, медиа и партнерские возможности без шаблонных заглушек.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const Icon = socialIcons[item.label] || MessageCircle;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-border text-ash transition-colors hover:border-gold hover:text-gold"
                    aria-label={item.label}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-heading text-xs uppercase tracking-[0.2em] text-gold">Разделы</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/club" className="text-ash transition-colors hover:text-white">О клубе</Link></li>
              <li><Link href="/squad" className="text-ash transition-colors hover:text-white">Состав</Link></li>
              <li><Link href="/fixtures" className="text-ash transition-colors hover:text-white">Матчи</Link></li>
              <li><Link href="/news" className="text-ash transition-colors hover:text-white">Новости</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-heading text-xs uppercase tracking-[0.2em] text-gold">Медиа</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/media" className="text-ash transition-colors hover:text-white">Видео и Reels</Link></li>
              <li><Link href="/partners" className="text-ash transition-colors hover:text-white">Партнеры</Link></li>
              <li><Link href="/contact" className="text-ash transition-colors hover:text-white">Контакты</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-heading text-xs uppercase tracking-[0.2em] text-gold">Контакты</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="https://www.instagram.com/topteam.kg/" target="_blank" rel="noreferrer" className="text-ash transition-colors hover:text-white">@topteam.kg</a></li>
              <li><span className="text-ash">Email публикуется после подтверждения клуба</span></li>
              <li><span className="text-ash">Телефон публикуется после подтверждения клуба</span></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-heading text-xs uppercase tracking-[0.2em] text-gold">Статус данных</h4>
            <p className="text-sm leading-relaxed text-ash">
              Состав, контакты и часть достижений собраны из открытых источников и помечены
              как требующие финального согласования с клубом.
            </p>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ink-border pt-8 md:flex-row">
          <p className="text-xs text-ash">© 2026 Top Team KG. Официальная цифровая площадка клуба.</p>
          <div className="flex gap-6 text-xs text-ash">
            <Link href="/contact" className="transition-colors hover:text-white">Связаться</Link>
            <Link href="/partners" className="transition-colors hover:text-white">Стать партнером</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
