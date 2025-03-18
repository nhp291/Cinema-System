package cinemasystem.dto.movie;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MovieDTO {
    private Long id;
    private String title;
    private String language;
    private String releaseDate;
    private String description;
    private Integer duration;
    private String image;
    private String director;
    private String cast;
    private String ageRating;
    private String releaseCountry;
}
