"use client";

import { useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/app/lib/i18n";

type LanguageToggleProps = {
  locale: Locale;
};

export function LanguageToggle({ locale }: LanguageToggleProps) {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const router = useRouter();

  const setLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) {
      return;
    }

    document.cookie = `locale=${nextLocale}; path=/; max-age=31536000; samesite=lax`;

    startTransition(() => {
      router.replace(pathname);
      router.refresh();
    });
  };

  return (
    <div className="inline-flex items-center rounded-md border border-slate-300 p-0.5 text-xs font-semibold dark:border-slate-700">
      {(["en", "vi"] as const).map((item) => {
        const isActive = item === locale;
        return (
          <button
            key={item}
            type="button"
            disabled={isPending}
            onClick={() => setLocale(item)}
            className={`rounded px-2 py-1 transition ${
              isActive
                ? "bg-slate-900 text-white dark:bg-slate-200 dark:text-slate-900"
                : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            }`}
            aria-label={`Switch language to ${item.toUpperCase()}`}
          >
            {item.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
