import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Carousel } from 'react-bootstrap';

const HomePage: React.FC = () => {
    const [index, setIndex] = useState(0); // State để quản lý slide hiện tại

    // Hàm để xử lý khi người dùng chọn slide
    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    // Mảng chứa thông tin các banner
    const banners = [
        { src: '../assets/banner1.jpg', alt: 'Banner 1', title: 'Banner 1', description: 'Đây là nội dung của Banner 1.' },
        { src: '../assets/banner2.jpg', alt: 'Banner 2', title: 'Banner 2', description: 'Đây là nội dung của Banner 2.' },
        { src: '../assets/banner3.jpg', alt: 'Banner 3', title: 'Banner 3', description: 'Đây là nội dung của Banner 3.' },
    ];

    return (
        <Layout>
            <div className="container">
                <section className="carousel-section">
                    <Carousel
                        activeIndex={index}
                        onSelect={handleSelect}
                        controls={false}
                        indicators={true} // Hiển thị các dots chỉ báo
                        interval={5000} // Thời gian chuyển slide tự động (5 giây)
                        fade
                    >
                        {/* Lặp qua mảng banners để tạo các slide */}
                        {banners.map((banner, idx) => (
                            <Carousel.Item key={idx}>
                                <img
                                    className="d-block w-100"
                                    src={banner.src} // Sử dụng src từ mảng
                                    alt={banner.alt} // Sử dụng alt từ mảng
                                />
                                <Carousel.Caption className="carousel-caption">
                                    <h3>{banner.title}</h3> {/* Hiển thị tiêu đề */}
                                    <p>{banner.description}</p> {/* Hiển thị mô tả */}
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </section>
            </div>
        </Layout>
    );
};

export default HomePage;