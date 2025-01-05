export interface Movie {
    id: number;
    title: string;
    description: string;
    releaseDate: string;
    genre: string[];
    rating: number;
}

export interface Booking {
    id: number;
    movieId: number;
    userId: number;
    seats: number[];
    bookingDate: string;
}

export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
}

export interface ApiResponse<T> {
    data: T;
    message: string;
    success: boolean;
}