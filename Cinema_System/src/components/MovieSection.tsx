import React, { useState } from "react";
import { Modal } from "react-bootstrap"; // Import Modal từ React-Bootstrap
import { Pagination } from "react-bootstrap";
import { movies } from "../mock/mockData";
import "../styles/user/Movie.scss";

interface MovieSectionProps {
  title: string;
  movies: typeof movies;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  moviesPerPage: number;
}

const MovieSection: React.FC<MovieSectionProps> = ({
  title,
  movies,
  currentPage,
  setCurrentPage,
  moviesPerPage,
}) => {
  const [showModal, setShowModal] = useState(false); // Trạng thái hiển thị modal
  const [currentTrailer, setCurrentTrailer] = useState<string | null>(null); // URL video hiện tại

  const totalPages = Math.ceil(movies.length / moviesPerPage);
  const displayedMovies = movies.slice(currentPage * moviesPerPage, (currentPage + 1) * moviesPerPage);

  const handleShowTrailer = (trailerUrl: string) => {
    let embedUrl = trailerUrl;
  
    // Nếu trailerUrl là URL YouTube, chuyển thành embed URL
    if (trailerUrl.includes("youtube.com/watch?v=")) {
      const videoId = trailerUrl.split("v=")[1];
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
    }
  
    setCurrentTrailer(embedUrl); // Cập nhật URL nhúng
    setShowModal(true); // Hiển thị modal
  };  

  const handleCloseModal = () => {
    setShowModal(false); // Đóng modal
    setCurrentTrailer(null); // Xóa URL video
  };

  return (
    <section className="movies-section container" style={{ marginTop: "-100px" }}>
      <h4 className="text-center title-section">
        <strong>{title}</strong>
      </h4>
      <div className="row ">
        {displayedMovies.map((movie) => {
          const truncatedTitle = movie.title.length > 30 ? movie.title.slice(0, 30) + "..." : movie.title;
          const truncatedDescription =
            movie.description.length > 100 ? movie.description.slice(0, 100) + "..." : movie.description;

          return (
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 mb-4 my-4" key={movie.id}>
              <div className="cinema-card">
                <img className="card-img-top" src={movie.image} alt={movie.title} />
                <div className="card-body text-center mx-auto">
                  <h6 className="card-title">{truncatedTitle}</h6>
                  <p className="card-text">{truncatedDescription}</p>
                  {movie.trailer_url && (
                    <button className="btn-primary" onClick={() => handleShowTrailer(movie.trailer_url)}>
                      Trailer
                    </button>
                  )}
                  <button className="btn-details">Chi tiết</button>
                  <button className="btn-book">Đặt ngay</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal hiển thị trailer */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        size="lg"
        className="custom-modal"
      >
        <Modal.Body className="modal-body">
          {currentTrailer ? (
            <div className="video-container">
              <iframe
                width="100%"  // 100% để iframe chiếm toàn bộ chiều rộng của modal
                height="500"  // Chiều cao có thể thay đổi
                src={currentTrailer}
                title="Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <p>Không có trailer để hiển thị.</p>
          )}
        </Modal.Body>
      </Modal>

      {/* Phân trang */}
      {movies.length > moviesPerPage && (
        <Pagination className="mx-auto d-flex justify-content-center mt-4">
          <Pagination.First onClick={() => setCurrentPage(0)} disabled={currentPage === 0} />
          <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0} />
          <Pagination.Item active>{currentPage + 1}</Pagination.Item>
          <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages - 1} />
          <Pagination.Last onClick={() => setCurrentPage(totalPages - 1)} disabled={currentPage === totalPages - 1} />
        </Pagination>
      )}
    </section>
  );
};

export default MovieSection;
