import Link from "next/link";
import { LanguageToggle } from "@/app/components/language-toggle";
import { ThemeToggle } from "@/app/components/theme-toggle";
import type { Locale } from "@/app/lib/i18n";
import { pickText } from "@/app/lib/i18n";
import { navigationItems } from "@/app/lib/site-content";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  return (
    <header className="mb-10 border-b border-slate-200 pb-4 dark:border-slate-800">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="text-xl font-semibold text-slate-900 dark:text-slate-100"
          >
            ngocduy.dev
          </Link>

          <div className="flex items-center gap-2">
            <LanguageToggle locale={locale} />
            <ThemeToggle />
          </div>
        </div>

        <nav className="flex flex-wrap gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 transition hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {pickText(item.label, locale)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
