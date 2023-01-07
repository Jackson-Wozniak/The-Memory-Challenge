package com.api.memory_quizzes.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity(name = "GameStats")
@Table(name = "game_stats")
@Getter
@Setter
@NoArgsConstructor
public class GameStats {

    @Id
    private String gameName;

    @OneToOne(cascade = CascadeType.ALL)
    @JsonBackReference
    private MemoryGame memoryGame;

    @Column(name = "average_score")
    private Double averageScore;

    @Column(name = "times_played")
    private Long timesPlayed;

    @Column(name = "times_liked")
    private Long timesLiked;

    public GameStats(MemoryGame memoryGame){
        this.gameName = memoryGame.getName();
        this.memoryGame = memoryGame;
        this.averageScore = 0.0;
        this.timesPlayed = 0L;
        this.timesLiked = 0L;
    }
}
