---
title: ".NET cho API tải cao"
subtitle: "Cân bằng hiệu năng và khả năng maintain"
excerpt: "Các lựa chọn kiến trúc .NET thực tế cho hệ thống backend lưu lượng lớn."
publishedAt: "2026-08-15"
---

## Ưu tiên kiến trúc

Khi hệ thống phát triển lớn, maintainability và throughput phải cùng tiến. Tôi ưu tiên boundary rõ, contract minh bạch và quy tắc phụ thuộc dễ kiểm soát.

## Kỹ thuật áp dụng

- Dùng Dapper cho truy vấn nhạy hiệu năng, EF Core cho domain cần rõ ràng
- Giữ API contract ổn định và có version
- Bổ sung benchmark cho endpoint lưu lượng cao

## Tác động tới team

Boundary rõ và chuẩn review tốt giúp giảm regression và rút ngắn thời gian onboarding trong môi trường nhiều team.
