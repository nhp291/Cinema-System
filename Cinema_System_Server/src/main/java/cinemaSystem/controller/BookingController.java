package cinemasystem.controller;

import cinemasystem.model.Booking;
import cinemasystem.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {
    @Autowired
    private BookingService bookingService;

    // Lấy tất cả các booking
    @GetMapping
    public List<Booking> getAllBookings() {
        return bookingService.getAllBookings();
    }

    // Lấy booking theo id
    @GetMapping("/{id}")
    public ResponseEntity<Booking> getBookingById(@PathVariable Long id) {
        return bookingService.getBookingById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }


    // Lưu một booking mới
//    @PostMapping
//    public ResponseEntity<?> createBooking(@RequestBody Booking booking) {
//        if (booking == null || booking.getCustomer() == null) {
//            return ResponseEntity.badRequest().body("Invalid booking data");
//        }
//        Booking savedBooking = bookingService.saveBooking(booking);
//        return ResponseEntity.ok(savedBooking);
//    }

    // Xóa một booking
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBooking(@PathVariable Long id) {
        if (bookingService.getBookingById(id).isEmpty()) {
            return ResponseEntity.status(404).body("Booking not found");
        }
        bookingService.deleteBooking(id);
        return ResponseEntity.ok("Booking deleted successfully");
    }

}
