# Backend Hệ Thống Rạp Chiếu Phim - Spring Boot

## Tổng Quan
Cinema System là ứng dụng backend được xây dựng bằng **Spring Boot** để quản lý các chức năng liên quan đến rạp chiếu phim như phim, rạp chiếu, đặt vé, thanh toán và quản lý người dùng. Ứng dụng này bao gồm các tính năng như quản lý lịch chiếu phim, đặt vé của khách hàng, thanh toán, đánh giá phim và nhiều chức năng khác.

## Tính Năng
- **Quản lý Phim**: Thêm, sửa, xóa thông tin phim bao gồm tên, thể loại, đạo diễn, diễn viên, v.v.
- **Hệ Thống Đặt Vé**: Khách hàng có thể đặt vé cho các suất chiếu phim tại các rạp khác nhau.
- **Tích Hợp Thanh Toán**: Hỗ trợ nhiều phương thức thanh toán như thẻ tín dụng, PayPal, v.v.
- **Quản lý Khách Hàng**: Quản lý thông tin khách hàng, đăng ký, xác thực và quản lý hồ sơ.
- **Đánh Giá Phim**: Khách hàng có thể đánh giá và bình luận về các bộ phim.
- **Giảm Giá và Khuyến Mãi**: Quản lý các chương trình khuyến mãi và giảm giá cho các bộ phim.
- **Bảng Điều Khiển Admin**: Admin có thể quản lý phim, đặt vé, khách hàng, thanh toán, v.v.

## Công Nghệ Sử Dụng
- **Backend**: Spring Boot, Spring Data JPA, Spring Security
- **Cơ Sở Dữ Liệu**: MySQL
- **Xác Thực**: JWT (JSON Web Token)
- **Công Cụ Xây Dựng**: Maven
- **Tài Liệu API**: Swagger/OpenAPI

## Yêu Cầu
Trước khi bắt đầu, bạn cần đảm bảo đã cài đặt các công cụ sau:
- Java 17 hoặc phiên bản mới hơn
- Maven 3.6 hoặc phiên bản mới hơn
- MySQL hoặc cơ sở dữ liệu quan hệ tương thích
- Một IDE (ví dụ: IntelliJ IDEA, VSCode)

## Cài Đặt

### 1. Clone kho chứa mã nguồn

```bash
git clone https://github.com/yourusername/cinema-system-backend.git
cd cinema-system-backend
