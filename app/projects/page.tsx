import type { Metadata } from "next";
import { getLocale, pickText } from "@/app/lib/i18n";
import { pageCopy, projects } from "@/app/lib/site-content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected engineering projects delivered by Nguyen Ngoc Duy.",
};

export default async function ProjectsPage() {
  const locale = await getLocale();

  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
          {locale === "en" ? "Projects" : "Các Dự Án"}
        </h1>
        <p className="mt-2 max-w-3xl text-slate-600 dark:text-slate-300">
          {pickText(pageCopy.projectsIntro, locale)}
        </p>
      </header>

      <div className="grid gap-5">
        {projects.map((project) => (
          <article
            key={project.name}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              {project.name}
            </h2>
            <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
              {pickText(project.role, locale)}
            </p>
            <p className="mt-3 text-slate-700 dark:text-slate-300">
              {pickText(project.summary, locale)}
            </p>

            <ul className="mt-4 list-inside list-disc space-y-1 text-slate-700 dark:text-slate-300">
              {project.impact.map((item) => (
                <li key={item.en}>{pickText(item, locale)}</li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
