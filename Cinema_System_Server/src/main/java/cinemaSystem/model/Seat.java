package cinemaSystem.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Seats")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Seat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "seat_number", nullable = false)
    private String seatNumber;

    @Enumerated(EnumType.STRING)
    private Status status = Status.AVAILABLE;

    @ManyToOne
    @JoinColumn(name = "theater_id", nullable = false)
    private Theater theater;

    public enum Status {
        AVAILABLE, RESERVED, OCCUPIED
    }
}

