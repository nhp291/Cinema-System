export interface Movie {
    id: number;
    title: string;
    description: string;
    release_date: string;
    language: string;
    duration: number;
    image: string;
    director: string;
    cast: string;
    age_rating: string;
    release_country: string;
    trailer_url: string;
    genre?: string[];
    rating?: number;
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

export type NewsItem = {
    id: number;
    title: string;
    description?: string;
    content?: string;
    date: string;
    author: string;
    image_url: string;
    url?: string;
};