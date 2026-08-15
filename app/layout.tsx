import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/app/components/site-header";
import { getLocale, pickText } from "@/app/lib/i18n";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Ngoc Duy | Technical Lead",
    template: "%s | Ngoc Duy",
  },
  metadataBase: new URL("https://ngocduy.dev"),
  description:
    "Technical portfolio and engineering blog by Nguyen Ngoc Duy: projects, experience, skills, and system design insights.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                const stored = localStorage.getItem("site-theme");
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                const theme = stored || (prefersDark ? "dark" : "light");
                if (theme === "dark") {
                  document.documentElement.classList.add("dark");
                } else {
                  document.documentElement.classList.remove("dark");
                }
              })();
            `,
          }}
        />
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8">
          <SiteHeader locale={locale} />

          <main className="flex-1">{children}</main>

          <footer className="mt-14 border-t border-slate-200 pt-5 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-300">
            <p>
              {pickText(
                {
                  en: "Built with Next.js and deployed on Vercel. This website shares my engineering journey and practical lessons from real projects.",
                  vi: "Xây dựng bằng Next.js và triển khai trên Vercel. Website chia sẻ hành trình kỹ thuật và các bài học thực chiến từ dự án thật.",
                },
                locale
              )}
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
