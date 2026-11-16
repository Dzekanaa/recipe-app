package com.slopandfries.backend.model;

import jakarta.persistence.*;
import java.util.HashSet;
import java.util.Set;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
public class User extends Account {

    private String profilePicture;

    @Embedded
    private Origin origin;

    @Column(columnDefinition = "TEXT")
    private String bio;

    private int numberOfRecipes = 0;

    @ManyToMany
    @JoinTable(
            name = "user_favorite_recipes",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "recipe_id"))
    private Set<Recipe> favoriteRecipes = new HashSet<>();
}
