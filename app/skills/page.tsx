import type { Metadata } from "next";
import { getLocale, pickText } from "@/app/lib/i18n";
import { pageCopy, skills } from "@/app/lib/site-content";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills across backend engineering and operations.",
};

export default async function SkillsPage() {
  const locale = await getLocale();
  const isEn = locale === "en";

  const capabilityBlocks = [
    {
      title: {
        en: "Architecture and distributed system design",
        vi: "Thiết kế kiến trúc và hệ thống phân tán",
      },
      items: [
        {
          en: "Designing bounded contexts and service responsibilities for multi-team delivery.",
          vi: "Thiết kế bounded context và ranh giới trách nhiệm service cho môi trường nhiều team.",
        },
        {
          en: "Building event-driven flows with asynchronous dispatch, retries, and status tracking.",
          vi: "Xây dựng luồng event-driven với dispatch bất đồng bộ, retry và theo dõi trạng thái.",
        },
        {
          en: "Applying idempotent processing and canonical status mapping for at-least-once delivery semantics.",
          vi: "Áp dụng xử lý idempotent và canonical status mapping cho ngữ nghĩa at-least-once delivery.",
        },
      ],
    },
    {
      title: {
        en: "Platform backend engineering",
        vi: "Kỹ thuật backend nền tảng",
      },
      items: [
        {
          en: "Advanced ASP.NET Core development on .NET 8/9/10 across API, worker, and integration services.",
          vi: "Phát triển ASP.NET Core nâng cao trên .NET 8/9/10 cho API, worker và integration service.",
        },
        {
          en: "Implementing quota-safe orchestration flows with atomic reserve/finalize patterns.",
          vi: "Triển khai luồng orchestration an toàn quota theo pattern reserve/finalize dạng atomic.",
        },
        {
          en: "Designing gateway-first APIs with header propagation, access controls, and clean service contracts.",
          vi: "Thiết kế API theo mô hình gateway-first với header propagation, kiểm soát truy cập và hợp đồng service rõ ràng.",
        },
      ],
    },
    {
      title: {
        en: "Data and integration expertise",
        vi: "Chuyên môn dữ liệu và tích hợp",
      },
      items: [
        {
          en: "Operating hybrid persistence with SQL Server + MongoDB for transactional and analytical workloads.",
          vi: "Vận hành mô hình lưu trữ kết hợp SQL Server + MongoDB cho workload giao dịch và phân tích.",
        },
        {
          en: "Integrating external channels (Zalo, ZNS, SMS, Facebook, email, Google Ads, auto-call) through adapter layers.",
          vi: "Tích hợp các kênh ngoài (Zalo, ZNS, SMS, Facebook, email, Google Ads, auto-call) qua lớp adapter.",
        },
        {
          en: "Designing webhook ingestion and normalization pipelines with strict validation and event enrichment.",
          vi: "Thiết kế pipeline webhook ingestion và chuẩn hóa dữ liệu với validation chặt chẽ và event enrichment.",
        },
      ],
    },
    {
      title: {
        en: "Security, identity, and governance",
        vi: "Bảo mật, định danh và governance",
      },
      items: [
        {
          en: "Implementing Keycloak-based authentication and RBAC patterns with permission-driven APIs.",
          vi: "Triển khai xác thực Keycloak và RBAC với mô hình API điều khiển bằng permission.",
        },
        {
          en: "Applying secure gateway ingress, JWT validation, and controlled request enrichment for downstream services.",
          vi: "Áp dụng gateway ingress an toàn, JWT validation và request enrichment có kiểm soát cho downstream services.",
        },
        {
          en: "Aligning technical implementation with partner/account provisioning and quota governance rules.",
          vi: "Đồng bộ implementation kỹ thuật với quy tắc provisioning đối tác/tài khoản và governance quota.",
        },
      ],
    },
  ];

  const deliveryStrengths = [
    {
      label: {
        en: "Technical leadership",
        vi: "Năng lực dẫn dắt kỹ thuật",
      },
      value: {
        en: "Architecture decisions, code review standards, mentoring, and technical roadmap ownership.",
        vi: "Ra quyết định kiến trúc, chuẩn review code, mentoring và sở hữu roadmap kỹ thuật.",
      },
    },
    {
      label: {
        en: "Operational excellence",
        vi: "Vận hành hệ thống",
      },
      value: {
        en: "Incident response, reliability tuning, observability-oriented thinking, and production troubleshooting.",
        vi: "Xử lý sự cố, tuning độ ổn định, tư duy observability và troubleshooting production.",
      },
    },
    {
      label: {
        en: "Product-minded engineering",
        vi: "Kỹ thuật gắn với sản phẩm",
      },
      value: {
        en: "Balancing delivery speed, maintainability, partner constraints, and business-facing outcomes.",
        vi: "Cân bằng tốc độ delivery, maintainability, ràng buộc đối tác và kết quả hướng nghiệp vụ.",
      },
    },
  ];

  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
          {locale === "en" ? "Technical Skills" : "Kỹ Năng Kỹ Thuật"}
        </h1>
        <p className="mt-2 max-w-3xl text-slate-600 dark:text-slate-300">
          {pickText(pageCopy.skillsIntro, locale)}
        </p>
      </header>

      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
          {isEn
            ? "Professional Capability Profile"
            : "Hồ sơ năng lực chuyên môn"}
        </h2>
        <p className="mt-2 text-slate-700 dark:text-slate-300">
          {isEn
            ? "This capability map is synthesized from real implementation evidence in the Channel Hub ecosystem and related production systems."
            : "Bản đồ năng lực này được tổng hợp từ bằng chứng triển khai thực tế trong hệ sinh thái Channel Hub và các hệ thống production liên quan."}
        </p>

        <div className="mt-5 grid gap-4">
          {capabilityBlocks.map((block) => (
            <section
              key={block.title.en}
              className="rounded-xl border border-slate-200 p-4 dark:border-slate-700"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {pickText(block.title, locale)}
              </h3>
              <ul className="mt-2 list-inside list-disc space-y-1 text-slate-700 dark:text-slate-300">
                {block.items.map((item) => (
                  <li key={item.en}>{pickText(item, locale)}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </article>

      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
          {isEn ? "Delivery Strengths" : "Thế mạnh triển khai"}
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {deliveryStrengths.map((item) => (
            <div
              key={item.label.en}
              className="rounded-xl border border-slate-200 p-4 dark:border-slate-700"
            >
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                {pickText(item.label, locale)}
              </p>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                {pickText(item.value, locale)}
              </p>
            </div>
          ))}
        </div>
      </article>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
          {isEn ? "Technical Stack Snapshot" : "Tổng quan tech stack"}
        </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((group) => (
          <article
            key={group.category.en}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
              {pickText(group.category, locale)}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {item}
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
