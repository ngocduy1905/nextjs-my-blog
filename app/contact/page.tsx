import type { Metadata } from "next";
import { getLocale, pickText } from "@/app/lib/i18n";
import { pageCopy } from "@/app/lib/site-content";
import { profile } from "@/app/lib/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact details for Nguyen Ngoc Duy.",
};

export default async function ContactPage() {
  const locale = await getLocale();

  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
          {locale === "en" ? "Contact" : "Liên Hệ"}
        </h1>
        <p className="mt-2 max-w-3xl text-slate-600 dark:text-slate-300">
          {pickText(pageCopy.contactIntro, locale)}
        </p>
      </header>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
        <dl className="space-y-4 text-slate-700 dark:text-slate-300">
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {locale === "en" ? "Full Name" : "Họ và tên"}
            </dt>
            <dd className="mt-1 text-lg text-slate-900 dark:text-slate-100">
              {profile.name}
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Email
            </dt>
            <dd className="mt-1">
              <a
                href={`mailto:${profile.email}`}
                className="text-sky-700 underline-offset-2 hover:underline dark:text-sky-400"
              >
                {profile.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {locale === "en" ? "Phone" : "Điện thoại"}
            </dt>
            <dd className="mt-1">{profile.phone}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {locale === "en" ? "Location" : "Địa điểm"}
            </dt>
            <dd className="mt-1">{pickText(profile.location, locale)}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
