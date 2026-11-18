package com.slopandfries.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "ingredient_suggestions")
@Getter
@Setter
@NoArgsConstructor
public class IngredientSuggestion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id")
    private User user;

    private String photo;

    @Column(nullable = false)
    private String label;

    @Column(columnDefinition = "TEXT")
    private String description;
}
