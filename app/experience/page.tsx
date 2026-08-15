import type { Metadata } from "next";
import { getLocale, pickText } from "@/app/lib/i18n";
import { experiences, pageCopy } from "@/app/lib/site-content";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience and engineering leadership journey.",
};

export default async function ExperiencePage() {
  const locale = await getLocale();

  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
          {locale === "en" ? "Experience" : "Kinh Nghiệm"}
        </h1>
        <p className="mt-2 max-w-3xl text-slate-600 dark:text-slate-300">
          {pickText(pageCopy.experienceIntro, locale)}
        </p>
      </header>

      <div className="relative ml-4 border-l border-slate-300 pl-8 dark:border-slate-700">
        {experiences.map((experience) => (
          <article key={`${experience.period}-${experience.title.en}`} className="relative mb-6">
            <span className="absolute -left-[2.2rem] top-2 h-3 w-3 rounded-full bg-slate-900 dark:bg-slate-200" />
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {experience.period}
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">
                {pickText(experience.title, locale)}
              </h2>
              <p className="text-slate-600 dark:text-slate-300">{experience.company}</p>

              <ul className="mt-4 list-inside list-disc space-y-1 text-slate-700 dark:text-slate-300">
                {experience.highlights.map((item) => (
                  <li key={item.en}>{pickText(item, locale)}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
