export const roles = [
    { id: 1, name: 'Admin', description: 'Administrator with full access' },
    { id: 2, name: 'Staff', description: 'Staff with access' },
    { id: 3, name: 'User', description: 'Regular user' }
  ];
  
  export const customers = [
    { id: 1, name: 'Admin', email: 'nhp2901@gmail.com', phone: '0976260335', address: 'Gò Vấp', role_id: 1, date_of_birth: '1990-01-01' },
    { id: 2, name: 'User', email: 'phongnhps31815@fpt.edu.vn', phone: '0976260335', address: 'HCM', role_id: 3, date_of_birth: '2000-05-15' },
    { id: 3, name: 'Staff', email: 'xinchaofaf@gmail.com', phone: '0976260335', address: 'HCM', role_id: 2, date_of_birth: '1995-03-22' }
  ];
  
export const movies = [
    { id: 1, title: 'The Great Adventure', language: 'English', release_date: '2023-12-15', description: 'An epic adventure movie.', duration: 120, image: 'image_url', director: 'John Director', cast: 'Actor A, Actor B', age_rating: 'PG-13', release_country: 'USA', trailer_url: 'trailer_url' },
    { id: 2, title: 'Romantic Escape', language: 'English', release_date: '2024-02-14', description: 'A heartwarming romantic story.', duration: 90, image: 'image_url', director: 'Jane Director', cast: 'Actor X, Actor Y', age_rating: 'PG', release_country: 'USA', trailer_url: 'trailer_url' },
    { id: 3, title: 'The Lost Kingdom', language: 'English', release_date: '2024-06-20', description: 'A fantasy adventure movie about finding an ancient kingdom.', duration: 140, image: 'image_url', director: 'Sarah Director', cast: 'Actor C, Actor D', age_rating: 'PG-13', release_country: 'USA', trailer_url: 'trailer_url' },
    { id: 4, title: 'Summer Nights', language: 'English', release_date: '2025-05-01', description: 'A lighthearted romantic comedy set in the summer.', duration: 100, image: 'image_url', director: 'Alex Director', cast: 'Actor E, Actor F', age_rating: 'PG', release_country: 'USA', trailer_url: 'trailer_url' },
    { id: 5, title: 'The Dark Truth', language: 'English', release_date: '2025-07-10', description: 'A mystery thriller about uncovering dark secrets.', duration: 110, image: 'image_url', director: 'James Director', cast: 'Actor G, Actor H', age_rating: 'R', release_country: 'UK', trailer_url: 'trailer_url' },
    { id: 6, title: 'Into the Abyss', language: 'English', release_date: '2025-09-15', description: 'A psychological horror film set in an isolated town.', duration: 115, image: 'image_url', director: 'Emily Director', cast: 'Actor I, Actor J', age_rating: 'R', release_country: 'Canada', trailer_url: 'trailer_url' },
    { id: 7, title: 'The Warrior\'s Path', language: 'English', release_date: '2025-11-01', description: 'A historical action film about an ancient warrior.', duration: 130, image: 'image_url', director: 'Michael Director', cast: 'Actor K, Actor L', age_rating: 'PG-13', release_country: 'USA', trailer_url: 'trailer_url' },
    { id: 8, title: 'The Secret Garden', language: 'English', release_date: '2024-03-25', description: 'A magical story about a hidden garden with life-changing secrets.', duration: 120, image: 'image_url', director: 'Olivia Director', cast: 'Actor M, Actor N', age_rating: 'PG', release_country: 'UK', trailer_url: 'trailer_url' },
    { id: 9, title: 'Space Odyssey', language: 'English', release_date: '2024-12-10', description: 'A sci-fi epic about space exploration and alien contact.', duration: 150, image: 'image_url', director: 'Chris Director', cast: 'Actor O, Actor P', age_rating: 'PG-13', release_country: 'USA', trailer_url: 'trailer_url' },
    { id: 10, title: 'Time Traveler', language: 'English', release_date: '2025-01-20', description: 'A time travel adventure exploring different eras.', duration: 125, image: 'image_url', director: 'David Director', cast: 'Actor Q, Actor R', age_rating: 'PG', release_country: 'Australia', trailer_url: 'trailer_url' }
  ];  
  
  export const genres = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Romance' },
    { id: 3, name: 'Comedy' }
  ];
  
  export const theaters = [
    { id: 1, name: 'Central Cinema', address: '789 Pine St', capacity: 200 },
    { id: 2, name: 'Downtown Theater', address: '101 Maple Ave', capacity: 150 }
  ];
  
  export const seats = [
    { id: 1, seat_number: 'A1', status: 'Available', theater_id: 1 },
    { id: 2, seat_number: 'A2', status: 'Available', theater_id: 1 },
    { id: 3, seat_number: 'B1', status: 'Reserved', theater_id: 2 },
    { id: 4, seat_number: 'B2', status: 'Occupied', theater_id: 2 }
  ];
  
  export const schedules = [
    { id: 1, datetime: '2025-01-01 10:00:00', price: 10.00, movie_id: 1, theater_id: 1 },
    { id: 2, datetime: '2025-01-02 14:00:00', price: 12.50, movie_id: 2, theater_id: 2 }
  ];
  
  export const bookings = [
    { id: 1, seat_id: 1, status: 'Confirmed', customer_id: 1, schedule_id: 1 },
    { id: 2, seat_id: 2, status: 'Pending', customer_id: 2, schedule_id: 2 }
  ];
  
  export const payments = [
    { id: 1, payment_method: 'Credit Card', amount: 10.00, status: 'Successful', booking_id: 1, created_at: '2025-01-01 09:00:00', updated_at: '2025-01-01 09:10:00' },
    { id: 2, payment_method: 'PayPal', amount: 12.50, status: 'Pending', booking_id: 2, created_at: '2025-01-02 13:00:00', updated_at: '2025-01-02 13:10:00' }
  ];
  
  export const movieReviews = [
    { id: 1, rating: 5, comment: 'Amazing movie!', timestamp: '2025-01-01 09:00:00', movie_id: 1, customer_id: 1 },
    { id: 2, rating: 4, comment: 'Pretty good.', timestamp: '2025-01-02 14:00:00', movie_id: 2, customer_id: 2 }
  ];
  
  export const discounts = [
    { id: 1, description: 'Holiday Discount', discount_amount: 2.00, start_date: '2025-01-01', end_date: '2025-01-15', movie_id: 1 }
  ];
  
  export const promotions = [
    { id: 1, name: 'New Year Promo', description: 'Celebrate with us!', discount_percent: 10.00, start_date: '2025-01-01', end_date: '2025-01-15', movie_id: 2 }
  ];
  
  export const customerHistory = [
    { id: 1, timestamp: '2025-01-01 09:00:00', action: 'Booking movie ticket', customer_id: 1, movie_id: 1 },
    { id: 2, timestamp: '2025-01-02 14:00:00', action: 'Watched movie', customer_id: 2, movie_id: 2 }
  ];
  
  export const movieGenres = [
    { id: 1, movie_id: 1, genre_id: 1 }, // 'The Great Adventure' - 'Action'
    { id: 2, movie_id: 2, genre_id: 2 }  // 'Romantic Escape' - 'Romance'
  ];
  
  export const customerAuth = [
    { id: 1, customer_id: 1, auth_type: 'local', auth_id: 'local_auth_1', password: 'password123' },
    { id: 2, customer_id: 2, auth_type: 'google', auth_id: 'google_auth_2', password: null }
  ];
  