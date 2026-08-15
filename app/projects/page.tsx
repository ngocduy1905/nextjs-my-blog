import type { Metadata } from "next";
import Link from "next/link";
import { getLocale, pickText } from "@/app/lib/i18n";
import { pageCopy, projects } from "@/app/lib/site-content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected engineering projects delivered by Nguyen Ngoc Duy.",
};

export default async function ProjectsPage() {
  const locale = await getLocale();
  const isEn = locale === "en";

  const starNarrative = [
    {
      phase: { en: "Situation", vi: "Situation (Bối cảnh)" },
      title: {
        en: "Multi-channel growth created architectural and operational complexity.",
        vi: "Tăng trưởng đa kênh tạo ra độ phức tạp lớn về kiến trúc và vận hành.",
      },
      points: [
        {
          en: "The platform had to coordinate many services across gateway, identity, partner, reporting, orchestration, adapters, webhooks, and workers.",
          vi: "Nền tảng cần điều phối nhiều service trải rộng từ gateway, identity, partner, reporting, orchestration đến adapter, webhook và worker.",
        },
        {
          en: "Business needed reliable campaign delivery while preserving partner governance, quota safety, and clear status visibility.",
          vi: "Nghiệp vụ cần khả năng gửi chiến dịch ổn định nhưng vẫn phải giữ được governance đối tác, an toàn quota và quan sát trạng thái rõ ràng.",
        },
      ],
    },
    {
      phase: { en: "Task", vi: "Task (Nhiệm vụ)" },
      title: {
        en: "Build a scalable, governable communication platform with clear ownership boundaries.",
        vi: "Xây nền tảng giao tiếp có khả năng mở rộng, dễ quản trị và ranh giới sở hữu rõ ràng.",
      },
      points: [
        {
          en: "Design service contracts and integration boundaries so new channels could be added without rewriting the core.",
          vi: "Thiết kế contract service và ranh giới tích hợp để thêm kênh mới mà không phải viết lại core.",
        },
        {
          en: "Establish technical standards for security, quota control, asynchronous dispatch, and cross-channel delivery tracking.",
          vi: "Thiết lập chuẩn kỹ thuật cho bảo mật, kiểm soát quota, dispatch bất đồng bộ và theo dõi delivery đa kênh.",
        },
      ],
    },
    {
      phase: { en: "Action", vi: "Action (Hành động)" },
      title: {
        en: "Implemented a gateway-first, event-driven architecture with strong runtime controls.",
        vi: "Triển khai kiến trúc gateway-first, event-driven với kiểm soát runtime chặt chẽ.",
      },
      points: [
        {
          en: "Built orchestration flow per channel/action: validate input, check quota, claim quota atomically, and dispatch async events through Kafka.",
          vi: "Xây flow orchestration theo channel/action: validate input, check quota, reserve quota atomic và dispatch event bất đồng bộ qua Kafka.",
        },
        {
          en: "Standardized ingress with Ocelot gateway, JWT passthrough, enriched request headers, and optional client/channel rate limiting.",
          vi: "Chuẩn hóa ingress với Ocelot gateway, JWT passthrough, request header enrichment và rate limiting theo client/channel.",
        },
        {
          en: "Implemented tracker-consumer and reporting patterns: canonical status mapping, idempotent Mongo upsert, and analytics-ready message reporting.",
          vi: "Triển khai tracker-consumer và reporting pattern: canonical status mapping, Mongo upsert idempotent và báo cáo message sẵn sàng cho phân tích.",
        },
      ],
    },
    {
      phase: { en: "Result", vi: "Result (Kết quả)" },
      title: {
        en: "The platform became easier to scale, operate, and reason about for leadership and engineering teams.",
        vi: "Nền tảng trở nên dễ mở rộng, dễ vận hành và dễ kiểm soát hơn cho cả quản lý kỹ thuật lẫn team triển khai.",
      },
      points: [
        {
          en: "Service ownership and integration contracts were clarified, reducing coupling risk during channel expansion.",
          vi: "Ranh giới sở hữu service và contract tích hợp được làm rõ, giảm rủi ro coupling khi mở rộng kênh.",
        },
        {
          en: "Operational visibility improved with unified delivery tracking and reportable status models across channels.",
          vi: "Khả năng quan sát vận hành được cải thiện nhờ tracking delivery thống nhất và mô hình trạng thái có thể báo cáo xuyên kênh.",
        },
        {
          en: "Architecture and governance patterns aligned well with high-throughput experience from previous platforms.",
          vi: "Pattern kiến trúc và governance phù hợp với kinh nghiệm xử lý hệ thống tải lớn từ các nền tảng trước đó.",
        },
      ],
    },
  ];

  const measuredMetrics = [
    {
      metric: { en: "Service Scale", vi: "Quy mô service" },
      value: { en: "20+ deployable services", vi: "Hơn 20 service triển khai độc lập" },
      note: {
        en: "Gateway, identity, partner, reporting, orchestration, adapters, webhooks, and workers.",
        vi: "Bao gồm gateway, identity, partner, reporting, orchestration, adapters, webhooks và workers.",
      },
    },
    {
      metric: { en: "Channel Coverage", vi: "Độ phủ kênh" },
      value: { en: "8 outbound + 6 inbound pipelines", vi: "8 luồng outbound + 6 luồng inbound" },
      note: {
        en: "Facebook, Zalo OA, ZNS, ZBS, SMS, Email, Google Ads, Auto Call + webhook ecosystem.",
        vi: "Facebook, Zalo OA, ZNS, ZBS, SMS, Email, Google Ads, Auto Call và hệ webhook liên quan.",
      },
    },
    {
      metric: { en: "Throughput Experience", vi: "Kinh nghiệm throughput" },
      value: { en: "~5,000,000 messages/day baseline", vi: "Baseline khoảng 5.000.000 messages/ngày" },
      note: {
        en: "Proven in Notification Hub and carried into Channel Hub design decisions for scaling and resilience.",
        vi: "Đã chứng minh ở Notification Hub và được kế thừa vào các quyết định thiết kế scaling/resilience của Channel Hub.",
      },
    },
  ];

  const sloMetrics = [
    {
      metric: { en: "Latency", vi: "Latency" },
      target: { en: "p95 < 250ms for synchronous gateway APIs", vi: "p95 < 250ms cho API đồng bộ qua gateway" },
    },
    {
      metric: { en: "Reliability", vi: "Reliability" },
      target: { en: ">= 99.95% availability on critical paths", vi: ">= 99,95% availability cho critical path" },
    },
    {
      metric: { en: "SLA Response", vi: "SLA phản hồi" },
      target: { en: "P1 < 15m, P2 < 30m incident acknowledgement", vi: "P1 < 15 phút, P2 < 30 phút cho bước xác nhận incident" },
    },
    {
      metric: { en: "MTTR", vi: "MTTR" },
      target: { en: "Runbook + observability-driven reduction strategy", vi: "Chiến lược giảm MTTR dựa trên runbook và observability" },
    },
  ];

  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
          {locale === "en" ? "Projects" : "Các Dự Án"}
        </h1>
        <p className="mt-2 max-w-3xl text-slate-600 dark:text-slate-300">
          {pickText(pageCopy.projectsIntro, locale)}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/projects/executive"
            className="inline-flex rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {isEn
              ? "Open Executive One-Page (30s)"
              : "Mở bản Executive One-Page (30s)"}
          </Link>
          <Link
            href="/projects/c-level"
            className="inline-flex rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {isEn
              ? "Open C-Level Visual (Slide)"
              : "Mở C-Level Visual (Slide)"}
          </Link>
        </div>
      </header>

      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
            {isEn
              ? "Channel Hub - Multi-channel Communication Platform"
              : "Channel Hub - Nền tảng giao tiếp đa kênh"}
          </h2>
          <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800 dark:bg-sky-900/40 dark:text-sky-200">
            {isEn ? "Flagship Project" : "Dự án trọng tâm"}
          </span>
        </div>

        <p className="mb-5 text-slate-700 dark:text-slate-300">
          {isEn
            ? "A production platform for campaign delivery and customer communication across multiple channels, with strong focus on scalability, quota safety, partner governance, and operational visibility."
            : "Nền tảng production phục vụ chiến dịch truyền thông và tương tác khách hàng đa kênh, tập trung vào khả năng mở rộng, an toàn quota, quản trị đối tác và khả năng quan sát vận hành."}
        </p>

        <section>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            {isEn
              ? "Executive Narrative (STAR)"
              : "Executive Narrative theo STAR"}
          </h3>
          <div className="mt-3 grid gap-4">
            {starNarrative.map((section) => (
              <article
                key={section.phase.en}
                className="rounded-xl border border-slate-200 p-4 dark:border-slate-700"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-300">
                  {pickText(section.phase, locale)}
                </p>
                <h4 className="mt-1 text-base font-semibold text-slate-900 dark:text-slate-100">
                  {pickText(section.title, locale)}
                </h4>
                <ul className="mt-2 list-inside list-disc space-y-1 text-slate-700 dark:text-slate-300">
                  {section.points.map((point) => (
                    <li key={point.en}>{pickText(point, locale)}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            {isEn
              ? "Metrics and Engineering Signals"
              : "Metrics và chỉ số kỹ thuật"}
          </h3>

          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            {isEn
              ? "Public-safe performance indicators and operational standards used to manage platform quality."
              : "Các chỉ số có thể chia sẻ công khai và chuẩn vận hành dùng để quản trị chất lượng nền tảng."}
          </p>

          <div className="mt-3 grid gap-4 sm:grid-cols-3">
            {measuredMetrics.map((item) => (
              <article
                key={item.metric.en}
                className="rounded-xl border border-slate-200 p-4 dark:border-slate-700"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {pickText(item.metric, locale)}
                </p>
                <p className="mt-2 text-base font-semibold text-slate-900 dark:text-slate-100">
                  {pickText(item.value, locale)}
                </p>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                  {pickText(item.note, locale)}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {sloMetrics.map((item) => (
              <article
                key={item.metric.en}
                className="rounded-xl border border-dashed border-slate-300 p-4 dark:border-slate-700"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {pickText(item.metric, locale)}
                </p>
                <p className="mt-1 text-sm text-slate-800 dark:text-slate-200">
                  {pickText(item.target, locale)}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            {isEn ? "Platform Landscape" : "Bản đồ nền tảng"}
          </h3>
          <div className="mt-3 grid gap-4 sm:grid-cols-3">
            {[
              {
                label: { en: "Core Services", vi: "Service cốt lõi" },
                items: [
                  "API Gateway (Ocelot)",
                  "Identity API",
                  "Partner API",
                  "Report API",
                  "Delivery Orchestration",
                ],
              },
              {
                label: { en: "Adapters", vi: "Adapters" },
                items: [
                  "Facebook",
                  "Zalo OA",
                  "ZNS",
                  "ZBS",
                  "SMS",
                  "Infobip Email",
                  "Google Ads",
                  "Auto Call",
                ],
              },
              {
                label: { en: "Operational Pipelines", vi: "Pipelines vận hành" },
                items: [
                  "Inbound webhooks",
                  "Tracker consumer",
                  "Monitor worker",
                  "Delivery status reporting",
                  "Runbook-oriented incident flow",
                ],
              },
            ].map((group) => (
              <div
                key={group.label.en}
                className="rounded-xl border border-slate-200 p-4 dark:border-slate-700"
              >
                <p className="mb-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {pickText(group.label, locale)}
                </p>
                <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                  {group.items.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </article>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
          {isEn ? "Other Major Projects" : "Các dự án trọng điểm khác"}
        </h2>
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
    </section>
  );
}
