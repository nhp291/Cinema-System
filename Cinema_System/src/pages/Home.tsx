import React, { useState } from 'react';
import Layout from '../containers/Layout_User';
import { Carousel, Card, Button } from 'react-bootstrap';
import '../styles/user/Home.scss';
import { movies, news } from '../mock/mockData';

import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';

const HomePage: React.FC = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    const banners = [
        { src: banner1, alt: 'Banner 1', title: 'Banner 1', description: 'Đây là nội dung của Banner 1.' },
        { src: banner2, alt: 'Banner 2', title: 'Banner 2', description: 'Đây là nội dung của Banner 2.' },
        { src: banner3, alt: 'Banner 3', title: 'Banner 3', description: 'Đây là nội dung của Banner 3.' },
    ];

    // Hàm giới hạn số ký tự của title
    const truncateText = (text: string, charLimit: number): string => {
        return text.length > charLimit ? text.slice(0, charLimit) + '...' : text;
    };

    // Hàm giới hạn số từ của description
    const truncateDescription = (text: string, wordLimit: number): string => {
        const words = text.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
    };

    return (
        <Layout>
            <div className="container">
                <section className="carousel-section">
                    <Carousel
                        activeIndex={index}
                        onSelect={handleSelect}
                        controls={false}
                        indicators={true}
                        interval={5000}
                        fade
                    >
                        {banners.map((banner, idx) => (
                            <Carousel.Item key={idx}>
                                <img
                                    className="d-block w-100"
                                    src={banner.src}
                                    alt={banner.alt}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </section>

                <section className="movies-section mt-5">
                    <h4 className="text-center title-section"><strong>PHIM ĐANG CHIẾU</strong></h4>
                    <div className="row mt-3">
                        {movies
                            .filter(movie => {
                                // Lọc phim có release_date từ thời điểm hiện tại trở về trước
                                const releaseDate = new Date(movie.release_date);
                                return releaseDate <= new Date();
                            })
                            .slice(0, 8) // Giới hạn hiển thị 8 phim
                            .map(movie => (
                                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 mb-4 my-4" key={movie.id}>
                                    <div className="cinema-card">
                                        <img className="card-img-top" src={movie.image} alt={movie.title} />
                                        <div className="card-body text-center mx-auto">
                                            <h6 className="card-title">{truncateText(movie.title, 15)}</h6>
                                            <p className="card-text">{truncateDescription(movie.description, 10)}</p>

                                            {/* Chỉ hiển thị nút Trailer nếu có link trailer */}
                                            {movie.trailer_url && (
                                                <button
                                                    className="btn-primary"
                                                    onClick={() => window.open(movie.trailer_url, '_blank')}
                                                >
                                                    Trailer
                                                </button>
                                            )}
                                            <button className="btn-details">Chi tiết</button>
                                            <button className="btn-book">Đặt ngay</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <a href="/movie" className="bg-light mx-auto d-flex justify-content-center btn button-XT">
                        <strong>Xem thêm</strong>
                    </a>
                </section>

                <section className="movies-section mt-5">
                    <h4 className="text-center title-section"><strong>PHIM SẮP CHIẾU</strong></h4>
                    <div className="row mt-3">
                        {movies
                            .filter(movie => {
                                // Lọc phim có release_date từ thời điểm hiện tại trở về trước
                                const releaseDate = new Date(movie.release_date);
                                return releaseDate >= new Date();
                            })
                            .slice(0, 8) // Giới hạn hiển thị 8 phim
                            .map(movie => (
                                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 mb-4 my-4" key={movie.id}>
                                    <div className="cinema-card">
                                        <img className="card-img-top" src={movie.image} alt={movie.title} />
                                        <div className="card-body text-center mx-auto">
                                            <h6 className="card-title">{truncateText(movie.title, 15)}</h6>
                                            <p className="card-text">{truncateDescription(movie.description, 10)}</p>

                                            {/* Chỉ hiển thị nút Trailer nếu có link trailer */}
                                            {movie.trailer_url && (
                                                <button
                                                    className="btn-primary"
                                                    onClick={() => window.open(movie.trailer_url, '_blank')}
                                                >
                                                    Trailer
                                                </button>
                                            )}
                                            <button className="btn-details">Chi tiết</button>
                                            <button className="btn-book">Đặt ngay</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <a href="/movie" className="bg-light mx-auto d-flex justify-content-center btn button-XT">
                        <strong>Xem thêm</strong>
                    </a>
                </section>

                <section className="news-carousel mt-5 me-3">
                    <h4 className="text-center title-section mb-4"><strong>TIN TỨC</strong></h4>
                    <Carousel indicators={true} interval={1000} pause="hover" slide>
                        {news.map((item, index) => (
                            index % 1 === 0 ? (
                                <Carousel.Item key={index}>
                                    <div className="carousel-item-content d-flex justify-content-between">
                                        <div className="card news-card">
                                            <img
                                                className="card-img-top"
                                                src={item.image_url}
                                                alt={item.title}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    {truncateText(item.title, 30)}
                                                </h5>
                                                <a href="" className="btn btn-primary">Đọc thêm</a>
                                            </div>
                                        </div>

                                        {news[index + 1] && (
                                            <div className="card news-card">
                                                <img
                                                    className="card-img-top"
                                                    src={news[index + 1]?.image_url}
                                                    alt={news[index + 1]?.title}
                                                />
                                                <div className="card-body">
                                                    <h5 className="card-title">
                                                        {truncateText(news[index + 1]?.title ?? '', 30)}
                                                    </h5>
                                                    <a href="" className="btn btn-primary">Đọc thêm</a>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </Carousel.Item>
                            ) : null
                        ))}
                    </Carousel>
                </section>
            </div>
        </Layout>
    );
};

export default HomePage;
