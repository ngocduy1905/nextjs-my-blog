---
title: "Ghi chú System Design từ nền tảng viễn thông"
subtitle: "Throughput, SLA và khả năng chịu lỗi"
excerpt: "Checklist thiết kế thực tế cho các hệ thống quan trọng phục vụ lượng người dùng lớn."
publishedAt: "2026-08-15"
---

## Tư duy throughput trước

Tôi thường mô hình hóa dạng tải, hành vi peak và kịch bản lỗi trước khi quyết định chi tiết implementation. Xác định bottleneck sớm giúp tiết kiệm rất nhiều chi phí sửa sai.

## Checklist ra quyết định

- Cách degrade service khi dependency lỗi
- Phần nào retry an toàn, phần nào không
- Metric nào báo sớm rủi ro ảnh hưởng người dùng

## Khả năng duy trì dài hạn

Kiến trúc tốt không chỉ ổn định runtime mà còn hỗ trợ team phát triển lâu dài. Thiết kế cần dễ hiểu cho cả kỹ sư tương lai, không chỉ người đang sở hữu hệ thống.
