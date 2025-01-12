-- Tạo database với mã hóa UTF-8MB4
CREATE DATABASE CinemaSystemDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE CinemaSystemDB;

-- Bảng Roles
CREATE TABLE Roles (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE,
    description TEXT
);

-- Bảng Customers
CREATE TABLE Customers (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(15) NOT NULL,
    address TEXT,
    role_id BIGINT,
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

-- Dữ liệu mẫu cho Customers
INSERT INTO Customers (name, email, phone, address, role_id) VALUES
('Admin', 'nhp2901@gmail.com', '0976260335', 'Gò Vấp', 1),
('User', 'phongnhps31815@fpt.edu.vn', '0976260335', 'HCM', 3),
('Staff', 'xinchaofaf@gmail.com', '0976260335', 'HCM', 2);

-- Dữ liệu mẫu cho Movies
INSERT INTO Movies (title, language, release_date, description, duration, image, director, cast, age_rating, release_country, trailer_url) VALUES
('The Great Adventure', 'English', '2023-12-15', 'An epic adventure movie.', 120, 'image_url', 'John Director', 'Actor A, Actor B', 'PG-13', 'USA', 'trailer_url'),
('Romantic Escape', 'English', '2024-02-14', 'A heartwarming romantic story.', 90, 'image_url', 'Jane Director', 'Actor X, Actor Y', 'PG', 'USA', 'trailer_url');

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
