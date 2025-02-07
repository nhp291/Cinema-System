-- Tạo database với mã hóa UTF-8MB4
CREATE DATABASE CinemaSystemDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE CinemaSystemDB;

-- Bảng Roles
CREATE TABLE Roles (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE,
    description TEXT
);

-- Bảng Customers (cập nhật thêm trường ngày sinh)
CREATE TABLE Customers (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(15) NOT NULL,
    address TEXT,
    role_id BIGINT,
    date_of_birth DATE,  -- Thêm trường ngày tháng năm sinh
    FOREIGN KEY (role_id) REFERENCES Roles(id) ON DELETE SET NULL
);

-- Bảng CustomerAuth
CREATE TABLE Customer_Auth (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    customer_id BIGINT NOT NULL,
    auth_type ENUM('local', 'google', 'facebook') NOT NULL,
    auth_id VARCHAR(255) NOT NULL,
    password VARCHAR(255),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES Customers(id) ON DELETE CASCADE,
    UNIQUE KEY unique_auth (auth_type, auth_id)
);

-- Bảng Movies
CREATE TABLE Movies (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    language VARCHAR(100),
    release_date DATE,
    description TEXT,
    duration INT,
    image VARCHAR(512),
    director VARCHAR(255),
    cast TEXT,
    age_rating VARCHAR(50),
    release_country VARCHAR(100),
    trailer_url VARCHAR(255)
);

-- Bảng Genres
CREATE TABLE Genres (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL UNIQUE
);

-- Bảng MovieGenres
CREATE TABLE Movie_Genres (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    movie_id BIGINT NOT NULL,
    genre_id BIGINT NOT NULL,
    FOREIGN KEY (movie_id) REFERENCES Movies(id) ON DELETE CASCADE,
    FOREIGN KEY (genre_id) REFERENCES Genres(id) ON DELETE CASCADE
);

-- Bảng Theaters
CREATE TABLE Theaters (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    capacity INT NOT NULL
);

-- Bảng Seats
CREATE TABLE Seats (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    seat_number VARCHAR(10) NOT NULL,
    status ENUM('Available', 'Reserved', 'Occupied') DEFAULT 'Available',
    theater_id BIGINT NOT NULL,
    FOREIGN KEY (theater_id) REFERENCES Theaters(id) ON DELETE CASCADE
);

-- Bảng Schedules
CREATE TABLE Schedules (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    datetime DATETIME NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    movie_id BIGINT NOT NULL,
    theater_id BIGINT NOT NULL,
    FOREIGN KEY (movie_id) REFERENCES Movies(id) ON DELETE CASCADE,
    FOREIGN KEY (theater_id) REFERENCES Theaters(id) ON DELETE CASCADE
);

-- Bảng Bookings
CREATE TABLE Bookings (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    seat_id BIGINT NOT NULL,
    status ENUM('Pending', 'Confirmed', 'Cancelled') DEFAULT 'Pending',
    customer_id BIGINT NOT NULL,
    schedule_id BIGINT NOT NULL,
    FOREIGN KEY (seat_id) REFERENCES Seats(id) ON DELETE CASCADE,
    FOREIGN KEY (customer_id) REFERENCES Customers(id) ON DELETE CASCADE,
    FOREIGN KEY (schedule_id) REFERENCES Schedules(id) ON DELETE CASCADE
);

-- Bảng Payments
CREATE TABLE Payments (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    payment_method ENUM('Credit Card', 'PayPal', 'Cash') NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    status ENUM('Successful', 'Failed', 'Pending') DEFAULT 'Pending',
    booking_id BIGINT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (booking_id) REFERENCES Bookings(id) ON DELETE CASCADE
);

-- Bảng MovieReviews
CREATE TABLE Movie_Reviews (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    rating INT NOT NULL,
    comment TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    movie_id BIGINT NOT NULL,
    customer_id BIGINT NOT NULL,
    FOREIGN KEY (movie_id) REFERENCES Movies(id) ON DELETE CASCADE,
    FOREIGN KEY (customer_id) REFERENCES Customers(id) ON DELETE CASCADE
);

-- Bảng Discounts
CREATE TABLE Discounts (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    description TEXT NOT NULL,
    discount_amount DECIMAL(10, 2) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    movie_id BIGINT NOT NULL,
    FOREIGN KEY (movie_id) REFERENCES Movies(id) ON DELETE CASCADE
);

-- Bảng Promotions
CREATE TABLE Promotions (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    discount_percent DECIMAL(5, 2) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    movie_id BIGINT NOT NULL,
    FOREIGN KEY (movie_id) REFERENCES Movies(id) ON DELETE CASCADE
);

-- Bảng CustomerHistory
CREATE TABLE Customer_History (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    action VARCHAR(255) NOT NULL,
    customer_id BIGINT NOT NULL,
    movie_id BIGINT,
    FOREIGN KEY (customer_id) REFERENCES Customers(id) ON DELETE CASCADE,
    FOREIGN KEY (movie_id) REFERENCES Movies(id) ON DELETE SET NULL
);

	-- Dữ liệu mẫu cho Roles
	INSERT INTO Roles (name, description) VALUES
	('Admin', 'Administrator with full access'),
	('Staff', 'Staff with access'),
	('User', 'Regular user');

	-- Dữ liệu mẫu cho Customers (cập nhật thêm ngày sinh)
	INSERT INTO Customers (name, email, phone, address, role_id, date_of_birth) VALUES
	('Admin', 'nhp2901@gmail.com', '0976260335', 'Gò Vấp', 1, '1990-01-01'),
	('User', 'phongnhps31815@fpt.edu.vn', '0976260335', 'HCM', 3, '2000-05-15'),
	('Staff', 'xinchaofaf@gmail.com', '0976260335', 'HCM', 2, '1995-03-22');

	-- Dữ liệu mẫu cho Movies
	INSERT INTO Movies (title, language, release_date, description, duration, image, director, cast, age_rating, release_country, trailer_url) VALUES
	('The Great Adventure', 'English', '2023-12-15', 'An epic adventure movie.', 120, 'image_url', 'John Director', 'Actor A, Actor B', 'PG-13', 'USA', 'trailer_url'),
	('Romantic Escape',     'English', '2024-02-14', 'A heartwarming romantic story.', 90, 'image_url', 'Jane Director', 'Actor X, Actor Y', 'PG', 'USA', 'trailer_url'),
    ('Chạy ngay đi',        'Tiếng Thái', '2024-12-27', 'Kế hoạch “phông bạt” về chiếc khách sạn hạng sang…trong “sang chấn” của tên lừa đảo Nakrob nhanh chóng tan thành mây khói trong 1 nốt nhạc do “chủ cũ” không rủ cũng hiện về đòi quyền sở hữu đất. Bất ổn Thái Lan màn combat tơi bời hoa lá hẹ giữa hội sợ ma và vong hồn chủ cũ trong trận chiến tâm linh không thể đỉnh hơn với 1001 “chiêu thức” hài là chính nhưng hù thì dính nha!', 104, 'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/3/5/350x495-404.jpg', 'Pichaya Jarusboonpracha', 'Chantavit Dhanasevi, Kanyawee Songmuang, Pittaya Saechua, Chukiat Eiamsook, Supatat Ophat', '16+', 'ThaiLand', 'https://www.youtube.com/watch?v=bTJ-fHJopAI'),
    { id: 2, title: 'LỜI THÌ THẦM CỦA TRÁI TIM', language: 'Japanese', release_date: '2025-01-10', description: 'Phát hành tại Nhật Bản vào ngày 15 tháng 7 năm 1995 Dựa trên manga của Hiiragi Aoi Sản xuất, viết kịch bản và dàn dựng bởi Miyazaki Hayao Đạo diễn bởi Kondo Yoshifumi Tsukishima Shizuku, một cô bé lớp 9 mê đọc sách, luôn bị cuốn hút bởi những câu chuyện trên từng trang giấy. Vào một ngày, cô phát hiện ra rằng hầu hết các cuốn sách cô mượn đều có tên một người đọc trước đó – Amasawa Seiji . Hóa ra, Seiji cũng chính là một học sinh cùng trường, với ước mơ trở thành một nghệ nhân làm đàn violin. Cậu ấy đã mơ ước rằng mình có thể học nghề làm đàn vĩ cầm tại Cremona, Ý sau khi tốt nghiệp cấp 2. Cuộc gặp gỡ với Seiji, một người có ước mơ lớn lao nhưng vẫn rất hiện thực đã thổi bùng ngọn lửa nhiệt huyết trong Shizuku, một cô bé vẫn đang loay hoay chưa biết mình muốn làm gì trong cuộc sống...', duration: 111, image: 'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/w/h/whisper-of-the-heart---poster-01.jpg', director: 'Yoshifumi Kondô', cast: 'Yoko Honna, Issei Takahashi, Takashi Tachibana, ...', age_rating: '+-13', release_country: 'Japan', trailer_url: '' },
    { id: 3, title: 'LEMBAYUNG: OAN HỒN SẢN PHỤ', language: 'Indonesian', release_date: '2025-01-10', description: 'Arum và Pica, những người muốn hoàn thành kỳ thực tập tại bệnh viện Lembayung, đã phải đối mặt với nỗi khiếp sợ bí ẩn từ một người phụ nữ mà họ nghi ngờ đã treo cổ trong nhà tắm. Tình huống trở nên gay cấn hơn khi họ nhờ người khác giúp đỡ đến mức đe dọa cả tính mạng của chính mình và những người thân cận nhất.', duration: 123, image: 'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/3/5/350x495lembayung.jpg', director: 'Baim Wong', cast: 'Taskya Namya; Yasamin Jasem; Arya Saloka', age_rating: '+18', release_country: 'Indonesia', trailer_url: 'https://www.youtube.com/watch?v=k2yDJBNbpAo' },
    { id: 4, title: 'CHỊ DÂU', language: 'VietNamese', release_date: '2024-12-20', description: 'Chuyện bắt đầu khi bà Nhị - con dâu cả của gia đình quyết định nhân dịp đám giỗ của mẹ chồng, tụ họp cả bốn chị em gái - con ruột trong nhà lại để thông báo chuyện sẽ tự bỏ tiền túi ra sửa sang căn nhà từ đường cũ kỹ trước khi bão về. Vấn đề này khiến cho nội bộ gia đình bắt đầu có những lục đục, chị dâu và các em chồng cũng xảy ra mâu thuẫn, bất hoà. Dần dà những sự thật đằng sau việc "bằng mặt mà không bằng lòng" giữa các chị em cũng dần được hé lộ, những bí mật, nỗi đau sâu thẳm nhất trong mỗi cá nhân cũng dần được bóc tách. Liệu sợi dây liên kết vốn đã mong manh giữa các chị em có bị cắt đứt và liệu “căn nhà” vốn đã dột nát ấy có còn nguyên vẹn sau cơn bão lớn?', duration: 100, image: 'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/9/_/9._cd_-_main_poster_-_cinemasize.jpg', director: 'Khương Ngọc', cast: 'Việt Hương, Hồng Đào, Lê Khánh, Đinh Y Nhung, Ngọc Trinh', age_rating: '+16', release_country: 'Viet Nam', trailer_url: 'https://www.youtube.com/watch?v=XU4oplOtoQo' },
    { id: 5, title: 'BỘ TỨ BÁO THỦ', language: 'VietNamese', release_date: '2025-01-29', description: 'Bộ tứ báo thủ bao gồm Chét-Xi-Cà, Dì Bốn, Cậu Mười Một, Con Kiều chính thức xuất hiện cùng với phi vụ báo thế kỉ. Nghe nói kế hoạch tiếp theo là ở Đà Lạt, liệu bốn báo thủ sẽ quậy Tết tung nóc cỡ nào?', duration: 110, image: 'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/3/5/350x495btbt.jpg', director: 'Trấn Thành', cast: 'Trấn Thành, Lê Giang, Lê Dương Bảo Lâm, Uyển Ân,...', age_rating: '+16', release_country: 'Viet Nam', trailer_url: '' },
    { id: 6, title: 'PHI VỤ NGHÌN CÂN', language: 'English', release_date: '2025-01-29', description: 'Câu chuyện xoay quanh chú heo Quý Hợi chuyên nghề tìm kiếm thú đi lạc trả về cho chủ. Mọi chuyện vẫn diễn ra êm đềm cho đến ngày Quý Hợi nhận lời ông chủ gánh xiếc đi tìm bé voi Dưa Mắm.', duration: 115, image: 'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/h/p/hpg_poster_470x700.jpg', director: 'Cinzia Angelini, David Feiss', cast: 'Jason Sudeikis, Lilly Singh, Rainn Wilson', age_rating: '+16', release_country: 'USA', trailer_url: '' },
    { id: 7, title: 'CAPTAIN AMERICA: THẾ GIỚI MỚI', language: 'English', release_date: '2025-02-14', description: 'Sau cuộc gặp gỡ với tân Tổng thống Hoa Kỳ Thaddeus Ross, Sam Wilson vô tình bị cuốn vào cuộc xung đột tại một sự kiện quốc tế. Trong vai trò Captain America mới, Wilson buộc phải điều tra và lật tẩy một âm mưu toàn cầu bất chính, trước khi kẻ thủ ác nhấn chìm cả thế giới vào cảnh suy tàn.', duration: 130, image: 'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/c/a/captain_america_th_gi_i_m_i_-_official_poster.jpg', director: 'Julius Onah', cast: 'Harrison Ford, Anthoy Mackie, Giancarlo Esposito, Rosa Salazar, Seth Rollins, Shira Haas', age_rating: '+18', release_country: 'USA', trailer_url: '' },
    { id: 8, title: 'NHÀ GIA TIÊN', language: 'VietNamese', release_date: '2025-02-21', description: 'Nhà Gia Tiên xoay quanh câu chuyện đa góc nhìn về các thế hệ khác nhau trong một gia đình, có hai nhân vật chính là Gia Minh (Huỳnh Lập) và Mỹ Tiên (Phương Mỹ Chi). Trở về căn nhà gia tiên để quay các video “triệu view” trên mạng xã hội, Mỹ Tiên - một nhà sáng tạo nội dung thuộc thế hệ Z vốn không tin vào chuyện tâm linh, hoàn toàn mất kết nối với gia đình, bất ngờ nhìn thấy Gia Minh - người anh trai đã mất từ lâu. Để hồn ma của Gia Minh có thể siêu thoát và không tiếp tục làm phiền mình, Mỹ Tiên bắt tay cùng Gia Minh lên kế hoạch giữ lấy căn nhà gia tiên đang bị họ hàng tranh chấp, đòi ông nội chia tài sản. Đứng trước hàng loạt bí mật động trời trong căn nhà gia tiên, liệu Mỹ Tiên có vượt qua được tất cả để hoàn thành di nguyện của Gia Minh?', duration: 120, image: 'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/p/a/payoff_poster_ngt_master_1_.jpg', director: 'Huỳnh Lập', cast: 'Huỳnh Lập, Phương Mỹ Chi, NSƯT Hạnh Thuý, NSƯT Huỳnh Đông, Puka, Đào Anh Tuấn, Trung Dân, Kiều Linh, Lê Nam, Chí Tâm, Thanh Thức, Trác Thuý Miêu, Mai Thế Hiệp, NS Mạnh Dung, NSƯT Thanh Dậu, NS Thanh Hiền, Nguyễn Anh Tú,…', age_rating: '+16', release_country: 'Viet Nam', trailer_url: '' },
    { id: 9, title: 'THIÊN TÀI NÉM PHAO ', language: 'English', release_date: '2025-01-17', description: 'Siêu phẩm phá đảo phòng vé "Bad Genius" trở lại màn ảnh rộng với phiên bản Hollywood đầy táo bạo. Hội thiên tài và nhóm con nhà giàu nâng tầm chiêu trò cùng bắt tay trong phi vụ gian lận học đường xuyên quốc tế khiến hội đồng thi phải chao đảo.', duration: 96, image: 'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/3/5/350x495-badgenius.jpg', director: 'J.C. Lee', cast: 'Benedict Wong, Callina Liang, Jabari Banks, Taylor Hickson, Samuel Braun.', age_rating: '+13', release_country: 'USA', trailer_url: 'https://www.youtube.com/watch?v=KDS_SAsG7qE' },
    { id: 10, title: 'NHÍM SONIC 3', language: 'English', release_date: '2024-12-27', description: 'Sonic, Knuckles và Tails phải đối mặt với một kẻ thù mới cực kỳ mạnh mẽ là Shadow - một nhân vật phản diện bí ẩn với sức mạnh không giống bất kỳ đối thủ nào họ từng đối mặt trước đây. Bị áp đảo về năng lực, Sonic phải lên đường thành lập một liên minh to lớn hơn.', duration: 110, image: 'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/s/t/sth3_poster_470x700.jpg', director: 'Jeff Fowler', cast: 'Ben Schwartz, Colleen O"Shaughnessey, Idris Elba."', age_rating: '+13', release_country: 'USA', trailer_url: 'https://www.youtube.com/watch?v=JVXPmlgEisk' );

	-- Dữ liệu mẫu cho Genres
	INSERT INTO Genres (name) VALUES
	('Action'),
	('Romance'),
	('Comedy');

	-- Dữ liệu mẫu cho Theaters
	INSERT INTO Theaters (name, address, capacity) VALUES
	('Central Cinema', '789 Pine St', 200),
	('Downtown Theater', '101 Maple Ave', 150);

	-- Dữ liệu mẫu cho Seats
	INSERT INTO Seats (seat_number, status, theater_id) VALUES
	('A1', 'Available', 1),
	('A2', 'Available', 1),
	('B1', 'Reserved', 2),
	('B2', 'Occupied', 2);

	-- Dữ liệu mẫu cho Schedules
	INSERT INTO Schedules (datetime, price, movie_id, theater_id) VALUES
	('2025-01-01 10:00:00', 10.00, 1, 1),
	('2025-01-02 14:00:00', 12.50, 2, 2);

	-- Dữ liệu mẫu cho Bookings
	INSERT INTO Bookings (seat_id, status, customer_id, schedule_id) VALUES
	(1, 'Confirmed', 1, 1),
	(2, 'Pending', 2, 2);

	-- Dữ liệu mẫu cho Payments
	INSERT INTO Payments (payment_method, amount, status, booking_id, created_at, updated_at) 
	VALUES
	('Credit Card', 10.00, 'Successful', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	('PayPal', 12.50, 'Pending', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

	-- Dữ liệu mẫu cho MovieReviews
	INSERT INTO Movie_Reviews (rating, comment, movie_id, customer_id) VALUES
	(5, 'Amazing movie!', 1, 1),
	(4, 'Pretty good.', 2, 2);

	-- Dữ liệu mẫu cho Discounts
	INSERT INTO Discounts (description, discount_amount, start_date, end_date, movie_id) 
	VALUES ('Holiday Discount', 2.00, '2025-01-01', '2025-01-15', 1);

	-- Dữ liệu mẫu cho Promotions
	INSERT INTO Promotions (name, description, discount_percent, start_date, end_date, movie_id) VALUES
	('New Year Promo', 'Celebrate with us!', 10.00, '2025-01-01', '2025-01-15', 2);

	-- Dữ liệu mẫu cho CustomerHistory
	INSERT INTO Customer_History (action, customer_id, movie_id) VALUES
	('Booking movie ticket', 1, 1),
	('Watched movie', 2, 2);

	-- Dữ liệu mẫu cho Movie_Genres
	INSERT INTO Movie_Genres (movie_id, genre_id) VALUES
	(1, 1), -- 'The Great Adventure' - 'Action'
	(2, 2); -- 'Romantic Escape' - 'Romance'

	INSERT INTO Customer_Auth (customer_id, auth_type, auth_id, password) 
	VALUES 
	(1, 'local', 'local_auth_1', 'password123'), 
	(2, 'google', 'google_auth_2', NULL);
