import React, { useState } from "react";
import Layout from "../../containers/Layout_User";
import MovieSection from '../../components/MovieSection';
import { movies, genres, movieGenres } from "../../mock/mockData";
import "../../styles/user/Movie.scss";

const Movie: React.FC = () => {
  const [currentPageNowShowing, setCurrentPageNowShowing] = useState(0);
  const [currentPageComingSoon, setCurrentPageComingSoon] = useState(0);
  const [genreFilter, setGenreFilter] = useState<string>(""); // Lưu thể loại được chọn
  const [durationFilter, setDurationFilter] = useState<string>(""); // Lưu thời gian được chọn

  const moviesPerPage = 8;

  // Danh sách thể loại để hiển thị
  const genreOptions = genres.map((genre) => ({
    id: genre.id,
    name: genre.name,
  }));

  // Lọc phim dựa trên thể loại
  const filteredMovies = movies.filter((movie) => {
    const isNowShowing = new Date(movie.release_date) <= new Date();
    const isComingSoon = new Date(movie.release_date) > new Date();

    // Lọc theo thể loại
    const genreMatch = genreFilter
      ? movieGenres.some(
          (mg) => mg.movie_id === movie.id && mg.genre_id.toString() === genreFilter
        )
      : true;

    // Lọc theo thời lượng
    const durationMatch =
      durationFilter === "< 90"
        ? movie.duration < 90
        : durationFilter === "90 - 120"
        ? movie.duration >= 90 && movie.duration <= 120
        : durationFilter === "> 120"
        ? movie.duration > 120
        : true;

    return genreMatch && durationMatch;
  });

  return (
    <Layout>
      <div className="movie-container">
        {/* Bộ lọc thể loại */}
        <div className="filter">
          <select
            id="genre"
            value={genreFilter}
            onChange={(e) => setGenreFilter(e.target.value)}
            className="genre-dropdown"
          >
            <option value="">Thể loại</option>
            <option value="">Tất cả</option>
            {genreOptions.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>

          <select
            id="duration"
            value={durationFilter}
            onChange={(e) => setDurationFilter(e.target.value)}
            className="duration-dropdown"
          >
            <option value="">Thời gian</option>
            <option value="">Tất cả</option>
            <option value="< 90">&lt; 90 Phút</option>
            <option value="90 - 120">90 - 120 Phút</option>
            <option value="> 120">&gt; 120 Phút</option>
          </select>
        </div>

        {/* Hiển thị phim */}
        <MovieSection
          title="PHIM ĐANG CHIẾU"
          movies={filteredMovies.filter(
            (movie) => new Date(movie.release_date) <= new Date()
          )}
          currentPage={currentPageNowShowing}
          setCurrentPage={setCurrentPageNowShowing}
          moviesPerPage={moviesPerPage}
        />

        <MovieSection
          title="PHIM SẮP CHIẾU"
          movies={filteredMovies.filter(
            (movie) => new Date(movie.release_date) > new Date()
          )}
          currentPage={currentPageComingSoon}
          setCurrentPage={setCurrentPageComingSoon}
          moviesPerPage={moviesPerPage}
        />
      </div>
    </Layout>
  );
};

export default Movie;
