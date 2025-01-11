package cinemaSystem.service;

import cinemaSystem.model.Booking;
import cinemaSystem.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    // Phương thức lấy tất cả các booking
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    // Phương thức tìm booking theo id
    public Optional<Booking> getBookingById(Long id) {
        return bookingRepository.findById(id);
    }

    // Phương thức lưu một booking mới
    public Booking saveBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    // Phương thức xóa booking
    public void deleteBooking(Long id) {
        bookingRepository.deleteById(id);
    }
}
