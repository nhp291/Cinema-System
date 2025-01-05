import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api'; // Update with your backend URL

export const fetchMovies = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/movies`);
        return response.data;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
};

export const fetchMovieById = async (id: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/movies/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching movie with id ${id}:`, error);
        throw error;
    }
};

export const createBooking = async (bookingData: any) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/bookings`, bookingData);
        return response.data;
    } catch (error) {
        console.error('Error creating booking:', error);
        throw error;
    }
};

// Add more API functions as needed for your cinema system.