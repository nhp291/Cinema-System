import React, { useState } from "react";
import { Card, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { theaters } from "../mock/mockData";

interface CinemaTooltipTheaterProps {
    setShowTooltip: (show: boolean) => void;
}

const CinemaTooltipTheater: React.FC<CinemaTooltipTheaterProps> = ({ setShowTooltip }) => {
    const [selectedTheater, setSelectedTheater] = useState<number | null>(null);
    const [hoveredTheater, setHoveredTheater] = useState<number | null>(null); // State để theo dõi hover

    return (
        <Card
            style={{
                width: "62rem",
                top: "-4px",
                left: "-10px",
                height: "100%",
                boxShadow: "0 10px 8px rgba(0,0,0,0.1)",
                borderRadius: "10px",
                padding: "10px",
                backgroundColor: "black",
            }}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            <Card.Header className="bg-primary text-white text-center fw-bold">
                🎬 Danh Sách Rạp Chiếu
            </Card.Header>
            <ListGroup variant="flush">
                <Row className="g-3 mt-1">
                    {theaters.map((theater) => (
                        <Col md={4} key={theater.id}>
                            <ListGroupItem
                                className="d-flex flex-column align-items-center text-center"
                                onClick={() => setSelectedTheater(theater.id)}
                                onMouseEnter={() => setHoveredTheater(theater.id)}
                                onMouseLeave={() => setHoveredTheater(null)}
                                style={{
                                    cursor: "pointer",
                                    background: selectedTheater === theater.id
                                        ? "#d1ecf1" // Màu khi được chọn
                                        : hoveredTheater === theater.id
                                        ? "linear-gradient(135deg, #f6d365 0%, #fda085 100%)" // ✅ Đã sửa
                                        : "white", // Màu mặc định
                                    borderRadius: "8px",
                                    transition: "background 0.3s ease-in-out",
                                    padding: "10px",
                                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                                }}
                            >
                                <span className="fw-bold text-dark">{theater.name}</span>
                                <small className="text-muted">{theater.address}</small>
                            </ListGroupItem>
                        </Col>
                    ))}
                </Row>
            </ListGroup>
        </Card>
    );
};

export default CinemaTooltipTheater;
