import type { Metadata } from "next";
import { getLocale, pickText } from "@/app/lib/i18n";
import { pageCopy, skills } from "@/app/lib/site-content";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills across backend engineering and operations.",
};

export default async function SkillsPage() {
  const locale = await getLocale();

  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
          {locale === "en" ? "Technical Skills" : "Kỹ Năng Kỹ Thuật"}
        </h1>
        <p className="mt-2 max-w-3xl text-slate-600 dark:text-slate-300">
          {pickText(pageCopy.skillsIntro, locale)}
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((group) => (
          <article
            key={group.category.en}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
              {pickText(group.category, locale)}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
