import Link from "next/link";
import { getLocale, pickText } from "@/app/lib/i18n";
import { pageCopy, profile, projects } from "@/app/lib/site-content";

export default async function Home() {
  const locale = await getLocale();

  return (
    <section className="space-y-10">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          {pickText(pageCopy.aboutLabel, locale)}
        </p>
        <h1 className="mb-3 text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl">
          {profile.name}
        </h1>
        <p className="mb-2 text-lg font-medium text-slate-700 dark:text-slate-200">
          {pickText(profile.headline, locale)}
        </p>
        <p className="mb-5 max-w-3xl text-slate-600 dark:text-slate-300">
          {pickText(profile.summary, locale)}
        </p>

        <div className="grid gap-3 text-sm text-slate-700 dark:text-slate-300 sm:grid-cols-2">
          <p>
            <span className="font-semibold">
              {locale === "en" ? "Location:" : "Địa điểm:"}
            </span>{" "}
            {pickText(profile.location, locale)}
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a
              href={`mailto:${profile.email}`}
              className="text-sky-700 underline-offset-2 hover:underline dark:text-sky-400"
            >
              {profile.email}
            </a>
          </p>
          <p>
            <span className="font-semibold">
              {locale === "en" ? "Phone:" : "Điện thoại:"}
            </span>{" "}
            {profile.phone}
          </p>
          <p>
            <span className="font-semibold">CV:</span>{" "}
            <a
              href={profile.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 underline-offset-2 hover:underline dark:text-sky-400"
            >
              {locale === "en" ? "View PDF" : "Xem PDF"}
            </a>
          </p>
        </div>

        <p className="mt-5 rounded-md bg-slate-100 p-3 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300">
          {pickText(profile.note, locale)}
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
        <h2 className="mb-5 text-2xl font-semibold text-slate-900 dark:text-slate-100">
          {pickText(pageCopy.featuredProjects, locale)}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <article
              key={project.name}
              className="rounded-xl border border-slate-200 p-4 dark:border-slate-700"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{project.name}</h3>
              <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">
                {pickText(project.role, locale)}
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                {pickText(project.summary, locale)}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
        <h2 className="mb-4 text-2xl font-semibold text-slate-900 dark:text-slate-100">
          {pickText(pageCopy.exploreSite, locale)}
        </h2>
        <div className="flex flex-wrap gap-3">
          {[
            { href: "/projects", label: { en: "Projects", vi: "Dự án" } },
            { href: "/experience", label: { en: "Experience", vi: "Kinh nghiệm" } },
            { href: "/skills", label: { en: "Skills", vi: "Kỹ năng" } },
            { href: "/blog", label: pageCopy.blogCategories },
            { href: "/contact", label: { en: "Contact", vi: "Liên hệ" } },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {pickText(item.label, locale)}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
