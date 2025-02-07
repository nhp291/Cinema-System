import React, { useState } from 'react';
import Layout from '../../containers/Layout_User';
import { Form, Button, Container, Row, Col, Card, Table } from "react-bootstrap";
import { theaters } from "../../mock/mockData";

const CinemaBooking: React.FC = () => {
    const [selectedTheater, setSelectedTheater] = useState<number | null>(null);
    const [selectedDate, setSelectedDate] = useState<string>("");

    const handleTheaterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTheater(parseInt(e.target.value));
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(e.target.value);
    };

    const selectedTheaterData = theaters.find((theater) => theater.id === selectedTheater);

    return (
        <Layout>
            <Container>
                <Card className="mt-4 p-4 shadow-lg">
                    <h2 className="text-center text-primary">🎬 Lịch Chiếu & Giá Vé</h2>
                    <Form>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Chọn Rạp</Form.Label>
                                    <Form.Select onChange={handleTheaterChange}>
                                        <option value="">-- Chọn Rạp --</option>
                                        {theaters.map((theater) => (
                                            <option key={theater.id} value={theater.id}>
                                                {theater.name} - {theater.address}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Chọn Ngày Chiếu</Form.Label>
                                    <Form.Control type="date" onChange={handleDateChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>

                    {selectedTheater && selectedDate && (
                        <div className="mt-4">
                            <h4 className="text-center text-success">
                                🎟️ Suất Chiếu tại {selectedTheaterData?.name} ngày {selectedDate}
                            </h4>
                            <Table striped bordered hover className="mt-3">
                                <thead>
                                    <tr className="bg-secondary text-white text-center">
                                        <th>Thời Gian</th>
                                        <th>Giá Vé (VNĐ)</th>
                                        <th>Đặt Vé</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {selectedTheaterData?.showTimes.map((show) => (
                                        <tr key={show.id} className="text-center">
                                            <td>{show.time}</td>
                                            <td>{show.price.toLocaleString()} VNĐ</td>
                                            <td>
                                                <Button variant="success">Đặt Vé</Button>
                                            </td>
                                        </tr>
                                    ))} */}
                                </tbody>
                            </Table>
                        </div>
                    )}
                </Card>
            </Container>
        </Layout>
    );
};

export default CinemaBooking;
