import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Carousel, Card, Button } from 'react-bootstrap';
import '../styles/user/Home.scss';
import { movies } from '../mock/mockData';

const HomePage: React.FC = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    const banners = [
        { src: '/assets/banner1.jpg', alt: 'Banner 1', title: 'Banner 1', description: 'Đây là nội dung của Banner 1.' },
        { src: '/assets/banner2.jpg', alt: 'Banner 2', title: 'Banner 2', description: 'Đây là nội dung của Banner 2.' },
        { src: '/assets/banner3.jpg', alt: 'Banner 3', title: 'Banner 3', description: 'Đây là nội dung của Banner 3.' },
    ];

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
                                {/* <Carousel.Caption className="carousel-caption"> */}
                                    {/* <h3>{banner.title}</h3>
                                    <p>{banner.description}</p> */}
                                {/* </Carousel.Caption> */}
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </section>

                <section className="movies-section mt-4">
                    <h4 className="text-center"><strong>CÁC PHIM ĐANG CHIẾU</strong></h4>
                    <div className="row">
                        {movies.map(movie => (
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={movie.id}>
                                <Card className="cinema-card">
                                    <Card.Img variant="top" src={movie.image} alt={movie.title} />
                                    <Card.Body>
                                        <Card.Title>{movie.title}</Card.Title>
                                        <Card.Text>{movie.description}</Card.Text>
                                        <Button variant="primary">Book Now</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </Layout>
    );
};

export default HomePage;
