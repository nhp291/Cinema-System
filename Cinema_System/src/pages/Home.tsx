import React, { useState } from 'react';
import Layout from '../containers/Layout_User';
import { Carousel, Card, Button, Row, Col, Modal } from 'react-bootstrap';
import '../styles/user/Home.scss';
import { movies, news } from '../mock/mockData';
import { useMediaQuery } from 'react-responsive';
import { Movie, NewsItem } from '../types';

import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';

const MovieSection: React.FC<{ title: string; filter: (movie: Movie) => boolean }> = ({ title, filter }) => {
    const [showTrailer, setShowTrailer] = useState(false);
    const [trailerUrl, setTrailerUrl] = useState('');

    const truncate = (text: string, limit: number, byWord: boolean = false): string => {
        if (byWord) {
            const words = text.split(' ');
            return words.length > limit ? words.slice(0, limit).join(' ') + '...' : text;
        }
        return text.length > limit ? text.slice(0, limit) + '...' : text;
    };

    const handleShowTrailer = (url: string) => {
        setTrailerUrl(url);
        setShowTrailer(true);
    };

    const handleCloseTrailer = () => {
        setShowTrailer(false);
        setTrailerUrl('');
    };

    const isYouTubeUrl = (url: string) => {
        return url.includes('youtube.com') || url.includes('youtu.be');
    };

    const getYouTubeEmbedUrl = (url: string) => {
        if (!isYouTubeUrl(url)) return url;
        const videoId = url.match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/)?.[1];
        return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : url;
    };

    return (
        <section className="movies-section mb-5">
            <h4 className="text-center title-section mb-4">{title}</h4>
            <Row xs={2} sm={3} md={4} lg={4} xl={4} xxl={4} className="g-4 justify-content-center">
                {(movies as Movie[]).filter(filter).slice(0, 8).map(movie => (
                    <Col key={movie.id}>
                        <Card className="cinema-card h-100">
                            <Card.Img variant="top" src={movie.image || ''} alt={movie.title} />
                            <Card.Body>
                                <Card.Title>{truncate(movie.title, 15)}</Card.Title>
                                <Card.Text>{truncate(movie.description, 10, true)}</Card.Text>
                                <div className="d-flex flex-column gap-2">
                                    {movie.trailer_url && (
                                        <Button variant="primary" onClick={() => handleShowTrailer(movie.trailer_url)}>
                                            Trailer
                                        </Button>
                                    )}
                                    <Button variant="outline-secondary">Chi tiết</Button>
                                    <Button variant="success">Đặt ngay</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <div className="text-center mt-4">
                <Button variant="light" href="/movie" className="button-XT">Xem thêm</Button>
            </div>

            <Modal show={showTrailer} onHide={handleCloseTrailer} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Xem Trailer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {trailerUrl && (
                        isYouTubeUrl(trailerUrl) ? (
                            <iframe
                                width="100%"
                                height="400"
                                src={getYouTubeEmbedUrl(trailerUrl)}
                                title="Trailer"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <p>Trailer không phải từ YouTube hoặc không hỗ trợ nhúng.</p>
                        )
                    )}
                </Modal.Body>
            </Modal>
        </section>
    );
};

const HomePage: React.FC = () => {
    const [index, setIndex] = useState(0);
    const isDesktop = useMediaQuery({ minWidth: 769 });

    const handleSelect = (selectedIndex: number) => setIndex(selectedIndex);

    const banners = [
        { src: banner1, alt: 'Banner 1' },
        { src: banner2, alt: 'Banner 2' },
        { src: banner3, alt: 'Banner 3' },
    ];

    const truncate = (text: string, limit: number, byWord: boolean = false): string => {
        if (byWord) {
            const words = text.split(' ');
            return words.length > limit ? words.slice(0, limit).join(' ') + '...' : text;
        }
        return text.length > limit ? text.slice(0, limit) + '...' : text;
    };

    return (
        <Layout>
            <div className="container">
                <section className="carousel-section mb-5">
                    <Carousel
                        activeIndex={index}
                        onSelect={handleSelect}
                        controls={false}
                        indicators
                        interval={5000}
                        fade
                    >
                        {banners.map((banner, idx) => (
                            <Carousel.Item key={idx}>
                                <img className="d-block w-100" src={banner.src} alt={banner.alt} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </section>

                <MovieSection
                    title="PHIM ĐANG CHIẾU"
                    filter={(movie: Movie) => new Date(movie.release_date) <= new Date()}
                />
                <MovieSection
                    title="PHIM SẮP CHIẾU"
                    filter={(movie: Movie) => new Date(movie.release_date) > new Date()}
                />

                <section className="news-carousel mb-5">
                    <h4 className="text-center title-section mb-4">TIN TỨC</h4>
                    <Carousel indicators interval={3000} pause="hover" slide>
                        {(news as NewsItem[]).map((item, idx) => (
                            <Carousel.Item key={idx}>
                                <Row className="justify-content-center g-4">
                                    <Col xs={12} md={6} lg={5}>
                                        <Card className="news-card h-100">
                                            <div className="news-card-img-wrapper">
                                                <Card.Img variant="top" src={item.image_url} alt={item.title} />
                                            </div>
                                            <Card.Body className="d-flex flex-column">
                                                <Card.Title className="news-card-title">
                                                    {truncate(item.title, 40)}
                                                </Card.Title>
                                                {item.description && (
                                                    <Card.Text className="news-card-text">
                                                        {truncate(item.description, 20, true)}
                                                    </Card.Text>
                                                )}
                                                <Button
                                                    variant="primary"
                                                    href={item.url ?? item.image_url}
                                                    className="news-card-btn mt-auto"
                                                >
                                                    Đọc thêm
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    {isDesktop && news[idx + 1] && (
                                        <Col xs={12} md={6} lg={5}>
                                            <Card className="news-card h-100">
                                                <div className="news-card-img-wrapper">
                                                    <Card.Img
                                                        variant="top"
                                                        src={news[idx + 1].image_url}
                                                        alt={news[idx + 1].title}
                                                    />
                                                </div>
                                                <Card.Body className="d-flex flex-column">
                                                    <Card.Title className="news-card-title">
                                                        {truncate(news[idx + 1].title, 40)}
                                                    </Card.Title>
                                                    {item.description && (
                                                        <Card.Text className="news-card-text">
                                                            {truncate(item.description, 20, true)}
                                                        </Card.Text>
                                                    )}
                                                    <Button
                                                        variant="primary"
                                                        href={(news[idx + 1] as NewsItem).url ?? news[idx + 1].image_url}
                                                        className="news-card-btn mt-auto"
                                                    >
                                                        Đọc thêm
                                                    </Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )}
                                </Row>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </section>
            </div>
        </Layout>
    );
};

export default HomePage;