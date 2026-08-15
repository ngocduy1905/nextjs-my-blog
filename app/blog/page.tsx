import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/app/lib/blog";
import { getLocale, pickText } from "@/app/lib/i18n";
import { pageCopy } from "@/app/lib/site-content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Engineering blog categories and technical writing topics.",
};

export default async function BlogPage() {
  const locale = await getLocale();
  const posts = await getBlogPosts(locale);

  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
          Blog
        </h1>
        <p className="mt-2 max-w-3xl text-slate-600 dark:text-slate-300">
          {pickText(pageCopy.blogIntro, locale)}
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
              {post.title}
            </h2>
            <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
              {post.subtitle}
            </p>
            <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">
              {post.excerpt}
            </p>
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
              {new Date(post.publishedAt).toLocaleDateString(locale === "vi" ? "vi-VN" : "en-US")}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-block text-sm font-semibold text-sky-700 hover:underline dark:text-sky-400"
            >
              {pickText(pageCopy.readTopic, locale)}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
