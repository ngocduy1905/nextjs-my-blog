import type { Metadata } from "next";
import Link from "next/link";
import { getLocale } from "@/app/lib/i18n";

export const metadata: Metadata = {
  title: "Executive Project Snapshot",
  description:
    "One-page executive summary of Channel Hub for CTO and Engineering Manager audiences.",
};

export default async function ExecutiveProjectsPage() {
  const locale = await getLocale();
  const isEn = locale === "en";

  const kpis = [
    {
      label: { en: "Platform Scale", vi: "Quy mô nền tảng" },
      value: "20+",
      detail: {
        en: "Deployable services",
        vi: "Service triển khai độc lập",
      },
    },
    {
      label: { en: "Channel Coverage", vi: "Độ phủ kênh" },
      value: "14",
      detail: {
        en: "8 outbound + 6 inbound",
        vi: "8 outbound + 6 inbound",
      },
    },
    {
      label: { en: "Throughput Baseline", vi: "Throughput baseline" },
      value: "~5M",
      detail: {
        en: "Messages/day experience",
        vi: "Kinh nghiệm messages/ngày",
      },
    },
    {
      label: { en: "Core Runtime", vi: "Runtime cốt lõi" },
      value: ".NET",
      detail: {
        en: "8/9/10 ecosystem",
        vi: "Hệ sinh thái 8/9/10",
      },
    },
  ];

  const leadershipSignals = [
    {
      title: {
        en: "Architecture Ownership",
        vi: "Sở hữu kiến trúc",
      },
      value: {
        en: "Gateway-first + event-driven + quota-safe orchestration",
        vi: "Gateway-first + event-driven + orchestration an toàn quota",
      },
    },
    {
      title: {
        en: "Engineering Governance",
        vi: "Governance kỹ thuật",
      },
      value: {
        en: "Service boundaries, contracts, review standards, operational runbooks",
        vi: "Ranh giới service, hợp đồng tích hợp, chuẩn review, runbook vận hành",
      },
    },
    {
      title: {
        en: "Business Impact",
        vi: "Tác động nghiệp vụ",
      },
      value: {
        en: "Reliable multi-channel campaign delivery with traceable status visibility",
        vi: "Triển khai chiến dịch đa kênh ổn định với khả năng truy vết trạng thái rõ ràng",
      },
    },
  ];

  const sloTargets = [
    {
      metric: "Latency",
      target: {
        en: "p95 < 250ms (sync gateway paths)",
        vi: "p95 < 250ms (luồng đồng bộ qua gateway)",
      },
    },
    {
      metric: "Reliability",
      target: {
        en: ">= 99.95% on critical paths",
        vi: ">= 99,95% cho critical paths",
      },
    },
    {
      metric: "SLA",
      target: {
        en: "P1 < 15m, P2 < 30m acknowledgement",
        vi: "P1 < 15 phút, P2 < 30 phút xác nhận",
      },
    },
    {
      metric: "MTTR",
      target: {
        en: "Runbook + observability reduction strategy",
        vi: "Giảm MTTR bằng runbook + observability",
      },
    },
  ];

  return (
    <section className="space-y-6">
      <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-xs font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-300">
          {isEn ? "Executive One-Page" : "Executive One-Page"}
        </p>
        <h1 className="mt-1 text-3xl font-bold text-slate-900 dark:text-slate-100">
          {isEn
            ? "Channel Hub - CTO 30-Second Snapshot"
            : "Channel Hub - Bản tóm tắt 30 giây cho CTO"}
        </h1>
        <p className="mt-2 max-w-4xl text-slate-600 dark:text-slate-300">
          {isEn
            ? "A compact leadership view of architecture scale, technical strategy, and delivery signals."
            : "Góc nhìn lãnh đạo cô đọng về quy mô kiến trúc, chiến lược kỹ thuật và tín hiệu năng lực triển khai."}
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((item) => (
          <article
            key={item.label.en}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {isEn ? item.label.en : item.label.vi}
            </p>
            <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
              {item.value}
            </p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              {isEn ? item.detail.en : item.detail.vi}
            </p>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
          {isEn ? "Architecture Diagram" : "Sơ đồ kiến trúc"}
        </h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
          {isEn
            ? "High-level flow from ingress to channel execution and reporting."
            : "Luồng high-level từ ingress tới thực thi kênh và reporting."}
        </p>

        <div className="mt-4 grid gap-3 text-sm sm:grid-cols-5">
          <div className="rounded-lg border border-slate-300 bg-slate-50 p-3 text-center font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
            Gateway
          </div>
          <div className="rounded-lg border border-slate-300 bg-slate-50 p-3 text-center font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
            Identity / RBAC
          </div>
          <div className="rounded-lg border border-sky-300 bg-sky-50 p-3 text-center font-semibold text-sky-800 dark:border-sky-800 dark:bg-sky-900/30 dark:text-sky-200">
            Delivery Orchestration
          </div>
          <div className="rounded-lg border border-slate-300 bg-slate-50 p-3 text-center font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
            Kafka + Adapters
          </div>
          <div className="rounded-lg border border-slate-300 bg-slate-50 p-3 text-center font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
            Tracker + Report
          </div>
        </div>

        <div className="mt-3 text-center text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Gateway {"->"} Auth {"->"} Quota-safe orchestration {"->"} Async
          dispatch {"->"} Canonical tracking
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {leadershipSignals.map((signal) => (
          <article
            key={signal.title.en}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {isEn ? signal.title.en : signal.title.vi}
            </h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              {isEn ? signal.value.en : signal.value.vi}
            </p>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
          {isEn ? "Reliability Targets" : "Mục tiêu độ tin cậy"}
        </h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {sloTargets.map((item) => (
            <article
              key={item.metric}
              className="rounded-lg border border-dashed border-slate-300 p-4 dark:border-slate-700"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {item.metric}
              </p>
              <p className="mt-1 text-sm text-slate-800 dark:text-slate-200">
                {isEn ? item.target.en : item.target.vi}
              </p>
            </article>
          ))}
        </div>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/projects/c-level"
          className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          {isEn ? "Open C-Level Visual Slide" : "Mở C-Level Visual Slide"}
        </Link>
        <Link
          href="/projects"
          className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          {isEn ? "Back to full project page" : "Quay lại trang projects đầy đủ"}
        </Link>
      </div>
    </section>
  );
}
