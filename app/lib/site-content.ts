import type { Locale } from "@/app/lib/i18n";

export type LocalizedText = Record<Locale, string>;

export type Project = {
  name: string;
  role: LocalizedText;
  summary: LocalizedText;
  impact: LocalizedText[];
  stack: string[];
};

export type Experience = {
  period: string;
  title: LocalizedText;
  company: string;
  highlights: LocalizedText[];
};

export type SkillGroup = {
  category: LocalizedText;
  items: string[];
};

export type SiteNavigationItem = {
  href: string;
  label: LocalizedText;
};

export const profile = {
  name: "Nguyen Ngoc Duy",
  headline: {
    en: "Technical Lead | Senior Backend Engineer (.NET / Microservices)",
    vi: "Technical Lead | Senior Backend Engineer (.NET / Microservices)",
  },
  location: {
    en: "Ho Chi Minh City, Vietnam",
    vi: "TP. Ho Chi Minh, Viet Nam",
  },
  email: "duy1951998@gmail.com",
  phone: "+84 395 982 649",
  summary: {
    en: "I design and operate large-scale backend systems for telecom products serving millions of subscribers. My focus is dependable architecture, sustainable delivery, and practical engineering leadership.",
    vi: "Tôi thiết kế và vận hành các hệ thống backend quy mô lớn cho sản phẩm viễn thông phục vụ hàng triệu thuê bao. Trọng tâm của tôi là kiến trúc bền vững, tốc độ delivery ổn định và năng lực kỹ thuật thực chiến.",
  },
  note: {
    en: "This website is for introducing my profile and sharing engineering knowledge. I am happy in my current environment and not actively seeking a new role.",
    vi: "Website này nhằm giới thiệu hồ sơ cá nhân và chia sẻ kiến thức kỹ thuật. Tôi đang rất hài lòng với môi trường hiện tại và không có nhu cầu tìm việc mới.",
  },
  cvPath: "/CV_NguyenNgocDuy_TechLead_EN.pdf",
};

export const navigationItems: SiteNavigationItem[] = [
  { href: "/", label: { en: "About", vi: "Giới thiệu" } },
  { href: "/projects", label: { en: "Projects", vi: "Dự án" } },
  { href: "/experience", label: { en: "Experience", vi: "Kinh nghiệm" } },
  { href: "/skills", label: { en: "Skills", vi: "Kỹ năng" } },
  { href: "/blog", label: { en: "Blog", vi: "Blog" } },
  { href: "/contact", label: { en: "Contact", vi: "Liên hệ" } },
];

export const projects: Project[] = [
  {
    name: "Channel Hub",
    role: { en: "Technical Lead", vi: "Technical Lead" },
    summary: {
      en: "A marketing content distribution platform connecting internal tooling to 6 communication channels.",
      vi: "Nền tảng phân phối nội dung marketing kết nối công cụ nội bộ với 6 kênh truyền thông.",
    },
    impact: [
      {
        en: "Designed channel adapter contracts so new channels can be onboarded without changing the core service.",
        vi: "Thiết kế channel adapter contract giúp tích hợp kênh mới mà không phải sửa core service.",
      },
      {
        en: "Integrated Facebook, Zalo, ZNS, Email, SMS, and HiFPT for unified campaign execution.",
        vi: "Tích hợp Facebook, Zalo, ZNS, Email, SMS và HiFPT để đồng bộ triển khai chiến dịch.",
      },
      {
        en: "Led architecture reviews, PR quality standards, and engineering roadmap decisions.",
        vi: "Dẫn dắt review kiến trúc, chuẩn chất lượng PR và định hướng roadmap kỹ thuật.",
      },
    ],
    stack: [".NET Core", "Microservices", "Kafka", "Redis", "MongoDB", "Kubernetes", "React"],
  },
  {
    name: "Notification Hub",
    role: { en: "Team Lead", vi: "Team Lead" },
    summary: {
      en: "A centralized company-wide notification platform used by multiple internal products.",
      vi: "Nền tảng notification tập trung toàn công ty cho nhiều sản phẩm nội bộ sử dụng chung.",
    },
    impact: [
      {
        en: "Architected a system processing around 5 million messages per day.",
        vi: "Thiết kế hệ thống xử lý khoảng 5 triệu tin nhắn mỗi ngày.",
      },
      {
        en: "Applied Domain Events and Kafka to decouple producers and consumers with idempotent delivery.",
        vi: "Áp dụng Domain Events và Kafka để tách producer/consumer, đảm bảo idempotency khi gửi.",
      },
      {
        en: "Optimized Redis caching and query performance to keep throughput stable at peak traffic.",
        vi: "Tối ưu Redis cache và hiệu năng truy vấn để giữ throughput ổn định lúc tải cao.",
      },
    ],
    stack: [".NET Core", "Kafka", "Redis", "MongoDB", "SQL Server", "Kubernetes"],
  },
  {
    name: "MAS (Monitoring & Alerting System)",
    role: { en: "Backend Engineer", vi: "Backend Engineer" },
    summary: {
      en: "A proactive platform for internet service and infrastructure monitoring.",
      vi: "Nền tảng giám sát chủ động cho dịch vụ internet và hạ tầng mạng.",
    },
    impact: [
      {
        en: "Built data collection, analysis, anomaly detection, and automated alert pipelines.",
        vi: "Xây pipeline thu thập dữ liệu, phân tích hiệu năng, phát hiện bất thường và cảnh báo tự động.",
      },
      {
        en: "Improved fault detection speed and reduced MTTR for operations teams.",
        vi: "Rút ngắn thời gian phát hiện sự cố và giảm MTTR cho đội vận hành.",
      },
      {
        en: "Contributed to production reliability for critical telecom services.",
        vi: "Góp phần tăng độ ổn định production cho các hệ thống viễn thông trọng yếu.",
      },
    ],
    stack: [".NET Core", "Kafka", "Redis", "Elasticsearch", "Kubernetes"],
  },
  {
    name: "RADIUS AAA System",
    role: { en: "Backend Engineer", vi: "Backend Engineer" },
    summary: {
      en: "Critical-path authentication and accounting system for broadband subscribers.",
      vi: "Hệ thống xác thực và accounting trọng yếu cho thuê bao internet băng rộng.",
    },
    impact: [
      {
        en: "Implemented backend features and automated operations with Telegram bot tooling.",
        vi: "Phát triển tính năng backend và tự động hóa vận hành bằng công cụ Telegram bot.",
      },
      {
        en: "Participated in high-SLA incident handling where uptime directly impacts end users.",
        vi: "Tham gia xử lý incident SLA cao, nơi uptime tác động trực tiếp đến khách hàng.",
      },
      {
        en: "Improved operational confidence for day-to-day network business activities.",
        vi: "Tăng độ tin cậy vận hành cho các hoạt động mạng hằng ngày.",
      },
    ],
    stack: [".NET Core", "SQL Server", "Redis", "Telegram Bot API"],
  },
];

export const experiences: Experience[] = [
  {
    period: "2025 - Present",
    title: { en: "Technical Lead", vi: "Technical Lead" },
    company: "FPT Telecom",
    highlights: [
      {
        en: "Own end-to-end architecture and technical quality for Channel Hub.",
        vi: "Sở hữu kiến trúc end-to-end và chất lượng kỹ thuật cho Channel Hub.",
      },
      {
        en: "Mentor engineers, standardize PR reviews, and shape technical roadmap.",
        vi: "Mentor đội ngũ kỹ sư, chuẩn hóa quy trình review PR và định hình roadmap kỹ thuật.",
      },
      {
        en: "Balance product delivery with platform maintainability and operational readiness.",
        vi: "Cân bằng giữa tốc độ delivery, khả năng maintain và mức sẵn sàng vận hành.",
      },
    ],
  },
  {
    period: "2024 - 2025",
    title: { en: "Team Lead", vi: "Team Lead" },
    company: "FPT Telecom",
    highlights: [
      {
        en: "Led Notification Hub and key internal backend initiatives.",
        vi: "Dẫn dắt Notification Hub và các sáng kiến backend nội bộ quan trọng.",
      },
      {
        en: "Scaled messaging throughput and improved resilience patterns.",
        vi: "Mở rộng throughput cho hệ thống messaging và cải thiện năng lực chịu lỗi.",
      },
      {
        en: "Structured delivery process: task breakdown, code convention, and review rigor.",
        vi: "Chuẩn hóa quy trình triển khai: phân rã task, coding convention, và review chặt chẽ.",
      },
    ],
  },
  {
    period: "2022 - 2024",
    title: { en: "Software Engineer", vi: "Software Engineer" },
    company: "FPT Telecom",
    highlights: [
      {
        en: "Delivered across IAM, MAS, RADIUS, MobiMap-VN, contract and e-invoice services.",
        vi: "Triển khai nhiều hệ thống: IAM, MAS, RADIUS, MobiMap-VN, hợp đồng và hóa đơn điện tử.",
      },
      {
        en: "Worked with both legacy and modernized services through production migrations.",
        vi: "Làm việc song song với hệ thống legacy và hiện đại hóa qua các đợt migration production.",
      },
      {
        en: "Supported critical incident response and long-term performance improvements.",
        vi: "Tham gia xử lý incident trọng yếu và cải thiện hiệu năng dài hạn.",
      },
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    category: { en: "Languages", vi: "Ngôn ngữ lập trình" },
    items: ["C# (.NET 6-8)", "TypeScript", "JavaScript", "PHP", "Ruby", "SQL"],
  },
  {
    category: { en: "Backend & Architecture", vi: "Backend & Kiến trúc" },
    items: [
      "ASP.NET Core Web API",
      "Microservices",
      "Domain Events",
      "Repository Pattern",
      "Dapper",
      "EF Core",
      "REST APIs",
      "NestJS",
    ],
  },
  {
    category: { en: "Messaging, Cache, Data", vi: "Messaging, Cache, Dữ liệu" },
    items: ["Kafka", "Redis", "SQL Server", "MongoDB", "MySQL", "Elasticsearch", "MinIO"],
  },
  {
    category: { en: "DevOps & Operations", vi: "DevOps & Vận hành" },
    items: ["Kubernetes", "Docker", "API Gateway", "CI/CD", "Grafana", "Kibana", "Load Testing"],
  },
  {
    category: { en: "Engineering Focus", vi: "Trọng tâm kỹ thuật" },
    items: [
      "High-throughput backend design",
      "SLA/performance tuning",
      "Memory leak debugging",
      "Production incident response",
      "Legacy refactoring at scale",
    ],
  },
];

export const pageCopy = {
  aboutLabel: { en: "About / Profile", vi: "Giới thiệu / Hồ sơ" },
  featuredProjects: { en: "Featured Projects", vi: "Dự án nổi bật" },
  exploreSite: { en: "Explore This Site", vi: "Khám phá website" },
  blogCategories: { en: "Blog Categories", vi: "Chủ đề Blog" },
  readTopic: { en: "Read topic", vi: "Xem chủ đề" },
  contactIntro: {
    en: "Thank you for visiting my website. Feel free to connect for technical discussion, architecture exchange, and knowledge sharing.",
    vi: "Cảm ơn bạn đã ghé thăm website. Hãy kết nối nếu bạn muốn trao đổi về kỹ thuật, kiến trúc và chia sẻ kinh nghiệm thực chiến.",
  },
  projectsIntro: {
    en: "Key systems I have built and operated, focused on scale, reliability, and practical business impact.",
    vi: "Các hệ thống tiêu biểu tôi đã xây dựng và vận hành, tập trung vào quy mô, độ ổn định và hiệu quả thực tế.",
  },
  experienceIntro: {
    en: "Career journey at FPT Telecom across engineering, team leadership, and technical ownership.",
    vi: "Hành trình nghề nghiệp tại FPT Telecom qua các vai trò kỹ sư, dẫn dắt đội ngũ và sở hữu kỹ thuật.",
  },
  skillsIntro: {
    en: "Tools and capabilities applied daily in real-world telecom and high-throughput systems.",
    vi: "Công cụ và năng lực được áp dụng hằng ngày trong hệ thống viễn thông và bài toán tải lớn.",
  },
  blogIntro: {
    en: "Articles and practical lessons from backend architecture, distributed systems, and project delivery.",
    vi: "Bài viết và kinh nghiệm thực chiến về kiến trúc backend, distributed systems và triển khai dự án.",
  },
  defaultLocaleLabel: { en: "EN", vi: "EN" },
  secondaryLocaleLabel: { en: "VI", vi: "VI" },
};
