import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../containers/Layout_User";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import "../../styles/user/Booking.scss";

const CinemaBooking: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedTheater, setSelectedTheater] = useState<string>("");
  const [selectedMovie, setSelectedMovie] = useState<string>("");
  const [selectedShowtime, setSelectedShowtime] = useState<string>("");
  const history = useHistory();

  const cities = ["Hà Nội", "TP Hồ Chí Minh", "Đà Nẵng"];
  const theaters = ["CGV", "Lotte Cinema", "BHD Star"];
  const movies = ["Avengers: Endgame", "Spider-Man: No Way Home", "Dune Part Two"];
  const showtimes = ["10:00 AM", "2:00 PM", "6:00 PM", "9:00 PM"];

  const getUpcomingDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const nextDate = new Date();
      nextDate.setDate(today.getDate() + i);
      dates.push({
        formatted: nextDate.toLocaleDateString("vi-VN", { weekday: "short", day: "2-digit", month: "2-digit" }),
        value: nextDate.toISOString().split("T")[0],
      });
    }
    return dates;
  };

  const handleShowtimeSelection = (time: string) => {
    setSelectedShowtime(time);
    history.push(`/chon-ghe?date=${selectedDate}&city=${selectedCity}&theater=${selectedTheater}&movie=${selectedMovie}&showtime=${time}`);
  };

  return (
    <Layout>
      <Container>
        <Card className="cinema-card mt-4 p-4">
          <h2 className="text-center cinema-title">🎬 Lịch Chiếu & Giá Vé</h2>

          {/* Các bước chọn vé */}
          <h4 className="text-center">Chọn Ngày</h4>
          <Row className="mb-3 text-center">
            {getUpcomingDates().map((date) => (
              <Col key={date.value} xs={6} md={2} className="mb-2">
                <Button
                  className={`w-100 date-button ${selectedDate === date.value ? "selected" : ""}`}
                  onClick={() => setSelectedDate(date.value)}
                >
                  {date.formatted}
                </Button>
              </Col>
            ))}
          </Row>

          <h4 className="text-center">Chọn Thành Phố</h4>
          <Row className="mb-3 text-center">
            {cities.map((city) => (
              <Col key={city} xs={6} md={2} className="mb-2">
                <Button
                  className={`w-100 city-button ${selectedCity === city ? "selected" : ""}`}
                  onClick={() => setSelectedCity(city)}
                >
                  {city}
                </Button>
              </Col>
            ))}
          </Row>

          {selectedCity && (
            <>
              <h4 className="text-center">Chọn Rạp</h4>
              <Row className="mb-3 text-center">
                {theaters.map((theater) => (
                  <Col key={theater} xs={6} md={2} className="mb-2">
                    <Button
                      className={`w-100 theater-button ${selectedTheater === theater ? "selected" : ""}`}
                      onClick={() => setSelectedTheater(theater)}
                    >
                      {theater}
                    </Button>
                  </Col>
                ))}
              </Row>
            </>
          )}

          {selectedTheater && (
            <>
              <h4 className="text-center">Chọn Phim</h4>
              <Row className="mb-3 text-center">
                {movies.map((movie) => (
                  <Col key={movie} xs={6} md={3} className="mb-2">
                    <Button
                      className={`w-100 movie-button ${selectedMovie === movie ? "selected" : ""}`}
                      onClick={() => setSelectedMovie(movie)}
                    >
                      {movie}
                    </Button>
                  </Col>
                ))}
              </Row>
            </>
          )}

          {selectedMovie && (
            <>
              <h4 className="text-center">Chọn Suất Chiếu</h4>
              <Row className="mb-3 text-center">
                {showtimes.map((time) => (
                  <Col key={time} xs={6} md={2} className="mb-2">
                    <Button
                      className={`w-100 showtime-button ${selectedShowtime === time ? "selected" : ""}`}
                      onClick={() => handleShowtimeSelection(time)}
                    >
                      {time}
                    </Button>
                  </Col>
                ))}
              </Row>
            </>
          )}

          {/* 📝 Bảng tóm tắt lựa chọn */}
          <h3 className="text-center mt-4">🎟️ Thông tin đặt vé</h3>
          <Card className="summary-card p-4">
            <p><strong>📅 Ngày: </strong>{selectedDate || "Chưa chọn"}</p>
            <p><strong>📍 Thành phố: </strong>{selectedCity || "Chưa chọn"}</p>
            <p><strong>🏢 Rạp: </strong>{selectedTheater || "Chưa chọn"}</p>
            <p><strong>🎥 Phim: </strong>{selectedMovie || "Chưa chọn"}</p>
            <p><strong>⏰ Suất chiếu: </strong>{selectedShowtime || "Chưa chọn"}</p>
          </Card>

          {/* ✅ Nút xác nhận */}
          <div className="text-center mt-4">
            <Button
              variant="success"
              className="confirm-button"
              disabled={!selectedDate || !selectedCity || !selectedTheater || !selectedMovie || !selectedShowtime}
            >
              Xác nhận đặt vé 🎫
            </Button>
          </div>
        </Card>
      </Container>
    </Layout>
  );
};

export default CinemaBooking;
