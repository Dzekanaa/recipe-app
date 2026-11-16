package com.slopandfries.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Embeddable
@Getter
@Setter
@NoArgsConstructor
public class Origin {

    private String country;
    private String region;
    private String city;

    // saved with the recipe so geocoding is not repeated on every map view
    private Double latitude;
    private Double longitude;
}
