import { useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../containers/Layout_User";
import { Container, Button, Card } from "react-bootstrap";
import { FaCouch } from "react-icons/fa";
import "./SeatSelection.scss"; // Import SCSS mới

export default function SeatSelection() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const movie = searchParams.get("movie");
  const theater = searchParams.get("theater");
  const date = searchParams.get("date");
  const showtime = searchParams.get("showtime");

  // Danh sách ghế (15 ghế/hàng)
  const [seats] = useState(() => {
    const normalSeats = Array.from({ length: 45 }, (_, i) => ({
      id: i + 1,
      type: "normal",
      booked: Math.random() < 0.2,
    }));

    const vipSeats = Array.from({ length: 15 }, (_, i) => ({
      id: 46 + i,
      type: "vip",
      booked: Math.random() < 0.2,
    }));

    const coupleSeats = Array.from({ length: 10 }, (_, i) => ({
      id: 61 + i,
      type: "couple",
      booked: Math.random() < 0.2,
    }));

    return [...normalSeats, ...vipSeats, ...coupleSeats];
  });

  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  const toggleSeat = (id: number) => {
    setSelectedSeats((prev) =>
      prev.includes(id) ? prev.filter((seat) => seat !== id) : [...prev, id]
    );
  };

  const getSeatClass = (seat: { booked: boolean; type: string; id: number }) => {
    if (seat.booked) return "booked";
    if (selectedSeats.includes(seat.id)) return "selected";
    if (seat.type === "vip") return "vip";
    if (seat.type === "couple") return "couple";
    return "normal";
  };

  return (
    <Layout>
      <Container className="mt-4">
        <h3 className="text-center mb-4">
          Chọn Ghế - {movie} ({theater}) - {date} {showtime}
        </h3>
        <Card className="p-3">
          {/* Màn hình rạp chiếu phim */}
          <div className="text-center">
            <div className="screen">MÀN HÌNH</div>
          </div>

          {/* Chú thích */}
          <div className="legend">
            <div className="legend-item">
              <FaCouch color="red" />
              <p>Ghế đã đặt</p>
            </div>
            <div className="legend-item">
              <FaCouch color="green" />
              <p>Ghế đã chọn</p>
            </div>
            <div className="legend-item">
              <FaCouch color="gray" />
              <p>Ghế thường</p>
            </div>
            <div className="legend-item">
              <FaCouch color="gold" />
              <p>Ghế VIP</p>
            </div>
            <div className="legend-item">
              <FaCouch color="pink" />
              <p>Ghế Couple</p>
            </div>
          </div>

          {/* Sơ đồ ghế */}
          <div className="seat-container">
            {seats.map((seat) => (
              <Button
                key={seat.id}
                className={`seat-button ${getSeatClass(seat)}`}
                disabled={seat.booked}
                onClick={() => toggleSeat(seat.id)}
              >
                <FaCouch size={22} color="white" />
              </Button>
            ))}
          </div>

          {/* Nút Xác nhận */}
          <div className="text-center mt-3">
            <Button variant="primary" size="lg" disabled={selectedSeats.length === 0}>
              Xác nhận ({selectedSeats.length} ghế)
            </Button>
          </div>
        </Card>
      </Container>
    </Layout>
  );
}
