import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Navbar, Nav, Form, Button, Container, NavDropdown, Offcanvas, Image } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import CinemaTooltipTheater from './TooltipTheater';
import { left } from '@popperjs/core';

const CinemaHeader: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();
    const expand = 'sm'; // Khai báo giá trị cho expand

    // Toggle Menu
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Handle Search
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
    };

    // Active link
    const isActive = (path: string) => location.pathname === path;

    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <Navbar expand={expand} className="mb-3 header custom-navbar">
            <Container fluid>
                <Link to="/">
                    <Image src={logo} className="mx-2 logo" title="Cinema" alt="logo" roundedCircle />
                </Link>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="bg-white" />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                    style={{
                        backgroundColor: '#1b2735',
                        height: '450px',
                        width: '300px',
                        borderBottomLeftRadius: '20px',
                        color: '#fff',
                    }}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="text-white">
                            <strong>Cinema</strong>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-center d-flex mx-auto text-center flex-grow-1 pe-3">
                            <Link to="/movie" className={`nav-link px-3 ${isActive('/movie') ? 'active' : ''}`}>
                                <strong>Phim</strong>
                            </Link>
                            <OverlayTrigger
                                placement="bottom"
                                show={showTooltip}
                                overlay={
                                    <Tooltip id="tooltip-theater">
                                        <div
                                            onMouseEnter={() => setShowTooltip(true)}
                                            onMouseLeave={() => setShowTooltip(false)}
                                        >
                                            {/* Truyền setShowTooltip vào component */}
                                            <CinemaTooltipTheater setShowTooltip={setShowTooltip} />
                                        </div>
                                    </Tooltip>
                                }
                            >
                                <Link
                                    to="/"
                                    className="nav-link px-3"
                                    onMouseEnter={() => setShowTooltip(true)}
                                    onMouseLeave={() => setShowTooltip(false)}
                                >
                                    <strong>Rạp</strong>
                                </Link>
                            </OverlayTrigger>
                            <Link to="/booking" className={`nav-link px-3 ${isActive('/booking') ? 'active' : ''}`}>
                                <strong>Lịch chiếu/Giá vé</strong>
                            </Link>
                            <Link to="/new" className={`nav-link px-3 ${isActive('/new') ? 'active' : ''}`}>
                                <strong>Sự kiện/Tin tức</strong>
                            </Link>
                            <Link to="/about" className={`nav-link px-3 ${isActive('/about') ? 'active' : ''}`}>
                                <strong>Giới thiệu</strong>
                            </Link>
                            <Link to="/contact" className={`nav-link px-3 ${isActive('/contact') ? 'active' : ''}`}>
                                <strong>Liên hệ</strong>
                            </Link>
                            <NavDropdown
                                title={<FaUserCircle size={25} className="text-white" />}
                                id={`offcanvasNavbarDropdown-expand-${expand}`}
                            >
                                <NavDropdown.Item href="#action3" style={{ textAlign: 'center' }}>
                                    <strong>Đăng nhập</strong>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action4" style={{ textAlign: 'center' }}>
                                    <strong>Đăng ký</strong>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex search-form" onSubmit={handleSearch}>
                            <div className="input-group">
                                <Form.Control
                                    type="search"
                                    placeholder="Tìm kiếm..."
                                    className="rounded-pill search-input px-5 search"
                                    aria-label="Search"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <Button
                                    variant="light"
                                    className="rounded-pill search-button"
                                    type="submit"
                                >
                                    <i className="bi bi-search"></i>
                                </Button>
                            </div>
                        </Form>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default CinemaHeader;
