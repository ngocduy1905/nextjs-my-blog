import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllBlogSlugs,
  getBlogPostBySlug,
} from "@/app/lib/blog";
import { getLocale } from "@/app/lib/i18n";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const locale = await getLocale();
  const post = await getBlogPostBySlug(params.slug, locale);

  if (!post) {
    return {
      title: "Blog Topic",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const locale = await getLocale();
  const post = await getBlogPostBySlug(params.slug, locale);

  if (!post) {
    notFound();
  }

  return (
    <article className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
      <div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Blog / {post.slug}
        </p>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
          {post.title}
        </h1>
        <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">
          {post.subtitle}
        </p>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          {new Date(post.publishedAt).toLocaleDateString(
            locale === "vi" ? "vi-VN" : "en-US"
          )}
        </p>
      </div>

      <div
        className="blog-content space-y-4 text-slate-700 dark:text-slate-300"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      <Link
        href="/blog"
        className="inline-block text-sm font-semibold text-sky-700 hover:underline dark:text-sky-400"
      >
        {locale === "en" ? "Back to blog categories" : "Quay lại danh sách blog"}
      </Link>
    </article>
  );
}
