import React from 'react';
import Layout from '../../containers/Layout_User';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import '../../styles/user/About.scss';

const About: React.FC = () => {
    return (
        <Layout>
             <section className="cinema-intro">
                {/* Header giới thiệu Cinema */}
                <Container className="intro-container">
                    <Row className="text-center">
                    <Col>
                        <h1 className="cinema-title">Chào Mừng Đến Với Cinema World</h1>
                        <p className="cinema-description">
                        Khám phá thế giới điện ảnh đầy kỳ diệu. Hãy cùng chúng tôi thưởng thức những bộ phim bom tấn, những tác phẩm độc lập và các bộ phim kinh điển.
                        </p>
                    </Col>
                    </Row>
                </Container>

                {/* Phim nổi bật */}
                <Container className="featured-movies">
                    <Row>
                    <Col md={4} className="movie-card">
                        <Card className="movie-card">
                        <Image src="https://via.placeholder.com/350x500" alt="Movie Poster" fluid />
                        <Card.Body>
                            <Card.Title>Phim Hành Động 1</Card.Title>
                            <Card.Text>
                            Một bộ phim hành động đầy kịch tính. Khám phá những cảnh quay nghẹt thở!
                            </Card.Text>
                            <Button variant="primary">Xem Ngay</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="movie-card">
                        <Card className="movie-card">
                        <Image src="https://via.placeholder.com/350x500" alt="Movie Poster" fluid />
                        <Card.Body>
                            <Card.Title>Phim Lãng Mạn 2</Card.Title>
                            <Card.Text>
                            Câu chuyện tình yêu đầy cảm động. Một bộ phim lãng mạn tuyệt vời!
                            </Card.Text>
                            <Button variant="primary">Xem Ngay</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="movie-card">
                        <Card className="movie-card">
                        <Image src="https://via.placeholder.com/350x500" alt="Movie Poster" fluid />
                        <Card.Body>
                            <Card.Title>Phim Hài Kịch 3</Card.Title>
                            <Card.Text>
                            Những tình huống hài hước và vui nhộn. Một bộ phim hài không thể bỏ qua!
                            </Card.Text>
                            <Button variant="primary">Xem Ngay</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    </Row>
                </Container>

                {/* Thông tin thêm về cinema */}
                <Container className="cinema-info">
                    <Row>
                    <Col md={6}>
                        <h2>Về Chúng Tôi</h2>
                        <p>
                        Cinema World cung cấp trải nghiệm điện ảnh tuyệt vời với công nghệ hiện đại nhất. Cho dù bạn là fan của hành động, 
                        tình cảm, hài kịch hay hoạt hình, chúng tôi đều có đủ thể loại cho bạn. Hãy đến và tận hưởng một bộ phim tuyệt vời!
                        </p>
                    </Col>
                    <Col md={6}>
                        <h2>Liên Hệ</h2>
                        <p>
                        Để biết thêm thông tin hoặc đặt vé, vui lòng liên hệ với chúng tôi qua:
                        </p>
                        <ul>
                        <li>Điện thoại: 123-456-789</li>
                        <li>Email: info@cinema.com</li>
                        </ul>
                    </Col>
                    </Row>
                </Container>
                </section>
        </Layout>
    );
};

export default About;