---
title: "MongoDB trong hệ thống production thực tế"
subtitle: "Bài học về mô hình dữ liệu và độ ổn định"
excerpt: "Cách tôi thiết kế collection, tối ưu index và giữ MongoDB ổn định dưới tải viễn thông lớn."
publishedAt: "2026-08-15"
---

## Vì sao MongoDB phù hợp

MongoDB phù hợp với các payload notification/campaign thay đổi nhanh. Ở bài toán viễn thông, cấu trúc message theo từng kênh thay đổi liên tục nên tính linh hoạt schema giúp đội ngũ phát hành nhanh hơn.

## Những điểm ưu tiên tối ưu

- Thiết kế schema theo truy vấn thực tế
- Index tổng hợp cho các luồng đọc quan trọng
- TTL rõ ràng cho dữ liệu vận hành ngắn hạn

## Nguyên tắc vận hành

1. Luôn theo dõi slow query và mức sử dụng index.
2. Phân tách collection ghi lớn theo ranh giới nghiệp vụ hợp lý.
3. Diễn tập backup/restore sớm, không đợi khi có sự cố.
