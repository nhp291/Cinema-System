import { useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../containers/Layout_User";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

export default function SeatSelection() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const movie = searchParams.get("movie");
  const theater = searchParams.get("theater");
  const date = searchParams.get("date");
  const showtime = searchParams.get("showtime");

  const seats = Array.from({ length: 40 }, (_, i) => ({
    id: i + 1,
    booked: Math.random() < 0.2, // Giả lập ghế đã đặt
  }));

  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  const toggleSeat = (id: number) => {
    setSelectedSeats((prev) =>
      prev.includes(id) ? prev.filter((seat) => seat !== id) : [...prev, id]
    );
  };

  return (
    <Layout>
        <Container className="mt-4">
      <h3 className="text-center mb-4">
        Chọn Ghế - {movie} ({theater}) - {date} {showtime}
      </h3>
      <Card className="p-3">
        <Row className="justify-content-center">
          {seats.map((seat) => (
            <Col key={seat.id} xs={2} className="text-center mb-2">
              <Button
                variant={seat.booked ? "danger" : selectedSeats.includes(seat.id) ? "success" : "secondary"}
                disabled={seat.booked}
                onClick={() => toggleSeat(seat.id)}
                className="w-100"
              >
                {seat.id}
              </Button>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-3">
          <Button variant="primary" disabled={selectedSeats.length === 0}>
            Xác nhận ({selectedSeats.length} ghế)
          </Button>
        </div>
      </Card>
    </Container>
    </Layout>
  );
}
