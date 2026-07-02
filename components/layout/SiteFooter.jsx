import Link from "next/link";
import { Camera, CirclePlay, Globe, MessageCircle } from "lucide-react";

const socials = [Camera, Globe, CirclePlay, MessageCircle];

export default function SiteFooter() {
  return (
    <footer className="border-t border-ink-border bg-ink">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-6">
          <div className="col-span-2">
            <span className="font-display text-3xl font-bold text-white">TOP<span className="text-gold">TEAM</span></span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ash">Футбольный клуб «Top Team». Создан, чтобы побеждать и вдохновлять. Присоединяйся к движению.</p>
            <div className="mt-6 flex gap-3">
              {socials.map((Icon, index) => (
                <a key={index} href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-border text-ash transition-colors hover:border-gold hover:text-gold" aria-label="Соцсеть">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-heading text-xs uppercase tracking-[0.2em] text-gold">Клуб</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/club" className="text-ash transition-colors hover:text-white">О клубе</Link></li>
              <li><Link href="/academy" className="text-ash transition-colors hover:text-white">Академия</Link></li>
              <li><Link href="/stadium" className="text-ash transition-colors hover:text-white">Стадион</Link></li>
              <li><Link href="/partners" className="text-ash transition-colors hover:text-white">Партнёры</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-heading text-xs uppercase tracking-[0.2em] text-gold">Болельщикам</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/fixtures" className="text-ash transition-colors hover:text-white">Матчи</Link></li>
              <li><Link href="/tickets" className="text-ash transition-colors hover:text-white">Билеты</Link></li>
              <li><Link href="/membership" className="text-ash transition-colors hover:text-white">Членство</Link></li>
              <li><Link href="/live" className="text-ash transition-colors hover:text-white">Live Center</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-heading text-xs uppercase tracking-[0.2em] text-gold">Магазин</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/shop" className="text-ash transition-colors hover:text-white">Витрина</Link></li>
              <li><Link href="/shop" className="text-ash transition-colors hover:text-white">Форма</Link></li>
              <li><Link href="/shop" className="text-ash transition-colors hover:text-white">Аксессуары</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-heading text-xs uppercase tracking-[0.2em] text-gold">Контакты</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/contact" className="text-ash transition-colors hover:text-white">Связаться</Link></li>
              <li><span className="text-ash">info@topteam.fc</span></li>
              <li><span className="text-ash">+7 (800) 000-00-00</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ink-border pt-8 md:flex-row">
          <p className="text-xs text-ash">© 2026 Top Team FC. Все права защищены.</p>
          <div className="flex gap-6 text-xs text-ash">
            <a href="#" className="transition-colors hover:text-white">Политика конфиденциальности</a>
            <a href="#" className="transition-colors hover:text-white">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
