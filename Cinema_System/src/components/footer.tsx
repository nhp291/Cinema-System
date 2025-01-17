import React from 'react';
import { Container, Row, Col, Button, Form, Nav } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className=' text-white'
    style={{backgroundColor:'#1b2735'}}
    >
      <Container className='p-4'>
        {/* Social Media Section */}
        <section className='mb-4 text-center'>
          <Button variant="outline-light" className='m-1' href='https://www.facebook.com/phong.hoai.523029/' role='button'>
            <FaFacebookF />
          </Button>
          <Button variant="outline-light" className='m-1' href='mailto:nhp2901@gmail.com' role='button'>
            <FaGoogle />
          </Button>
          <Button variant="outline-light" className='m-1' href='https://www.linkedin.com/in/nguyen-hoai-phong/' role='button'>
            <FaLinkedinIn />
          </Button>
          <Button variant="outline-light" className='m-1' href='https://github.com/nhp291' role='button'>
            <FaGithub />
          </Button>
        </section>

        {/* Newsletter Subscription Section */}
        <section className='mb-4'>
          <Form action=''>
            <Row className='d-flex justify-content-center mx-5'>
              <Col size="auto">
                <p className='pt-2'>
                  <h6><strong>Đăng ký để nhận thông báo mới nhất:</strong></h6>
                </p>
              </Col>
              <Col md={6} className='mb-4 px-2'>
                <Form.Control type='email' placeholder='Email của bạn' className='mb-4' />
              </Col>
              <Col size="auto">
                <Button variant='outline-light' type='submit' className='mb-4'>
                    Đăng ký
                </Button>
              </Col>
            </Row>
          </Form>
        </section>

        {/* Footer Description Section */}
        <section className='mb-4'>
          <p  className='text-center' style={{color:'#ffce44'}}>
            <strong>Chào mừng đến với Cinema, nơi mang đến những bộ phim chất lượng cao và những trải nghiệm điện ảnh tuyệt vời. 
                Với công nghệ chiếu phim hiện đại và âm thanh sống động, chúng tôi cung cấp không gian giải trí lý tưởng cho mọi lứa tuổi. 
                Hãy đến và thưởng thức những câu chuyện hấp dẫn, từ hành động gay cấn đến lãng mạn ngọt ngào, cùng gia đình và bạn bè.
            </strong>
          </p>
        </section>

        {/* Footer Links Section */}
        <section>
          <Row>
            <Col lg={3} md={6} className='mb-4'>
              <h5 className='text-uppercase'>Hệ thống rạp</h5>
              <Nav className='flex-column'>
                <Nav.Link href='#!' className='text-white'>
                  Link 1
                </Nav.Link>
              </Nav>
            </Col>

            <Col lg={3} md={6} className='mb-4'>
              <h5 className='text-uppercase'>Xem Phim</h5>
              <Nav className='flex-column'>
                <Nav.Link href='#!' className='text-white'>
                  Phim đang chiếu
                </Nav.Link>
                <Nav.Link href='#!' className='text-white'>
                  Rạp/Giá vé
                </Nav.Link>
                <Nav.Link href='#!' className='text-white'>
                    Lịch chiếu
                </Nav.Link>
              </Nav>
            </Col>

            <Col lg={3} md={6} className='mb-4'>
              <h5 className='text-uppercase'>CINEMA</h5>
              <Nav className='flex-column'>
                <Nav.Link href='#!' className='text-white'>
                  Giới thiệu
                </Nav.Link>
                <Nav.Link href='#!' className='text-white'>
                  Liên hệ
                </Nav.Link>
                <Nav.Link href='#!' className='text-white'>
                  Sự kiện/Tin tức
                </Nav.Link>
              </Nav>
            </Col>

            <Col lg={3} md={6} className='mb-4'>
              <h5 className='text-uppercase'>Tài Khoản</h5>
              <Nav className='flex-column'>
                <Nav.Link href='#!' className='text-white'>
                  Đăng nhập
                </Nav.Link>
                <Nav.Link href='#!' className='text-white'>
                  Đăng ký
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </section>
      </Container>

        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2025 Copyright: 
            <a className='text-white' href='mailto:nhp2901@gmail.com'>
                nhp2901@gmail.com
            </a>
        </div>
    </footer>
  );
};

export default Footer;
