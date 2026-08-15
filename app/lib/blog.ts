import path from "node:path";
import { promises as fs } from "node:fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { defaultLocale, type Locale } from "@/app/lib/i18n";

type BlogFrontmatter = {
  title: string;
  subtitle: string;
  excerpt: string;
  publishedAt: string;
};

export type BlogPostSummary = BlogFrontmatter & {
  slug: string;
  locale: Locale;
};

export type BlogPostDetail = BlogPostSummary & {
  contentHtml: string;
};

function getBlogDirectory(locale: Locale): string {
  return path.join(process.cwd(), "content", "blog", locale);
}

function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.md$/, "");
}

async function readBlogFile(
  slug: string,
  locale: Locale
): Promise<{ fileContent: string; localeUsed: Locale } | null> {
  const preferredPath = path.join(getBlogDirectory(locale), `${slug}.md`);

  try {
    const fileContent = await fs.readFile(preferredPath, "utf8");
    return { fileContent, localeUsed: locale };
  } catch {
    if (locale === defaultLocale) {
      return null;
    }
  }

  const fallbackPath = path.join(getBlogDirectory(defaultLocale), `${slug}.md`);

  try {
    const fileContent = await fs.readFile(fallbackPath, "utf8");
    return { fileContent, localeUsed: defaultLocale };
  } catch {
    return null;
  }
}

export async function getBlogPosts(locale: Locale): Promise<BlogPostSummary[]> {
  const localeDir = getBlogDirectory(locale);
  const fallbackDir = getBlogDirectory(defaultLocale);
  const sourceDir = (await fs.stat(localeDir).catch(() => null))
    ? localeDir
    : fallbackDir;

  const fileNames = await fs.readdir(sourceDir);
  const markdownFiles = fileNames.filter((fileName) => fileName.endsWith(".md"));

  const posts = await Promise.all(
    markdownFiles.map(async (fileName) => {
      const slug = getSlugFromFilename(fileName);
      const postData = await readBlogFile(slug, locale);

      if (!postData) {
        return null;
      }

      const { data } = matter(postData.fileContent);
      const frontmatter = data as BlogFrontmatter;

      return {
        slug,
        locale: postData.localeUsed,
        title: frontmatter.title,
        subtitle: frontmatter.subtitle,
        excerpt: frontmatter.excerpt,
        publishedAt: frontmatter.publishedAt,
      };
    })
  );

  return posts
    .filter((post): post is BlogPostSummary => post !== null)
    .sort((first, second) => second.publishedAt.localeCompare(first.publishedAt));
}

export async function getBlogPostBySlug(
  slug: string,
  locale: Locale
): Promise<BlogPostDetail | null> {
  const postData = await readBlogFile(slug, locale);

  if (!postData) {
    return null;
  }

  const parsed = matter(postData.fileContent);
  const frontmatter = parsed.data as BlogFrontmatter;
  const processed = await remark().use(html).process(parsed.content);

  return {
    slug,
    locale: postData.localeUsed,
    title: frontmatter.title,
    subtitle: frontmatter.subtitle,
    excerpt: frontmatter.excerpt,
    publishedAt: frontmatter.publishedAt,
    contentHtml: processed.toString(),
  };
}

export async function getAllBlogSlugs(): Promise<string[]> {
  const sourceDir = getBlogDirectory(defaultLocale);
  const fileNames = await fs.readdir(sourceDir);

  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => getSlugFromFilename(fileName));
}
