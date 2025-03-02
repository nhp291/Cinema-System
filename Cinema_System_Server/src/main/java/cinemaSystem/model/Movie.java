package cinemasystem.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "Movies")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    private String language;

    @Column(name = "release_date")
    private LocalDate releaseDate;

    private String description;

    private Integer duration;

    private String image;

    private String director;

    private String cast;

    @Column(name = "age_rating")
    private String ageRating;

    @Column(name = "release_country")
    private String releaseCountry;

    @Column(name = "trailer_url")
    private String trailerUrl;
}