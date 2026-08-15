import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getLocale } from "@/app/lib/i18n";

export const metadata: Metadata = {
  title: "C-Level Visual",
  description:
    "A one-slide infographic summarizing Channel Hub architecture and KPI signals for executive audiences.",
};

export default async function CLevelVisualPage() {
  const locale = await getLocale();
  const isEn = locale === "en";

  return (
    <section className="space-y-5">
      <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-xs font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-300">
          {isEn ? "C-Level Visual" : "C-Level Visual"}
        </p>
        <h1 className="mt-1 text-3xl font-bold text-slate-900 dark:text-slate-100">
          {isEn
            ? "Executive Infographic (Single-Slide)"
            : "Infographic Executive (1 slide)"}
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          {isEn
            ? "Designed for meetings and slide sharing: minimal text, high signal, architecture and KPI at a glance."
            : "Thiết kế cho họp và chia sẻ slide: ít chữ, tín hiệu cao, nhìn nhanh được kiến trúc và KPI."}
        </p>
      </header>

      <article className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-sm dark:border-slate-800">
        <Image
          src="/infographics/channel-hub-c-level.svg"
          alt="Channel Hub C-Level Executive Infographic"
          width={1600}
          height={900}
          className="h-auto w-full"
        />
      </article>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/projects/executive"
          className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          {isEn ? "Open Executive One-Page" : "Mở Executive One-Page"}
        </Link>
        <Link
          href="/projects"
          className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          {isEn ? "Back to Projects" : "Quay lại Projects"}
        </Link>
      </div>
    </section>
  );
}
