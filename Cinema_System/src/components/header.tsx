import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Navbar, Nav, Form, FormControl, Button, Container, 
         Collapse, NavDropdown, Offcanvas, Image } from 'react-bootstrap';
import '../Scss/Header.scss';
import { FaUserCircle } from "react-icons/fa";

const CinemaHeader: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();

    // Toggle Menu
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Handle Search
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
        // Add search logic here (e.g., API call or navigation)
    };

    const isActive = (path: string) => location.pathname === path;

    return (
        <>
          {['sm'].map((expand) => (
            <Navbar key={expand} expand={expand} className=" mb-3 header"
            >
            <Container fluid>
                <Link to="/"><Image src={logo} className=' mx-2 logo' title='Cinema'  alt="logo" roundedCircle />  </Link>              
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='bg-white text-white'/>
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end"
                    style={{backgroundColor:'#1b2735', height: '450px', width: '300px',
                            borderBottomLeftRadius: '20px', color:'#fff'
                        }}
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='text-white'>
                        <strong>Cinema</strong>
                    </Offcanvas.Title>
                </Offcanvas.Header >
                <Offcanvas.Body>
                    <Nav className="justify-content-center d-flex mx-auto text-center flex-grow-1 pe-3">
                        <Nav.Link href="/movie" className='px-3 '><strong>Phim</strong></Nav.Link>
                        <Nav.Link href="/theater" className='px-3'><strong>Rạp/Giá vé</strong></Nav.Link>
                        <Nav.Link href="/booking" className='px-3'><strong>Lịch chiếu</strong></Nav.Link>
                        <Nav.Link href="/new" className='px-3'><strong>Sự kiện/Tin tức</strong></Nav.Link>
                        <Nav.Link href="/about" className='px-3'><strong>Giới thiệu</strong></Nav.Link>
                        <Nav.Link href="/contact" className='px-3'><strong>Liên hệ</strong></Nav.Link>
                        <NavDropdown
                            title={
                                <>
                                    <FaUserCircle size={25} className=' text-white'/>
                                </>
                            }
                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                        >
                            <NavDropdown.Item href="#action3" style={{color:'1b2735',textAlign:'center'}}><strong>Đăng nhập</strong></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action4" style={{color:'1b2735',textAlign:'center'}}><strong>Đăng ký</strong></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex search-form">
                        <div className="input-group">
                            <Form.Control
                                type="search"
                                placeholder="Tìm kiếm..."
                                className="rounded-pill search-input px-5 search"
                                aria-label="Search"
                            />
                            <Button
                                variant="light"
                                className="rounded-pill search-button"
                            >
                                <i className="bi bi-search"></i>
                            </Button>
                        </div>
                    </Form>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
        ))}
        </>
      );
};

export default CinemaHeader;
