package com.api.memory_quizzes.entity;

import com.api.memory_quizzes.entity.GameStats;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
public class MemoryGame {

    @Id
    private String name;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "game_stats", referencedColumnName = "name")
    private GameStats gameStats;

    public MemoryGame(String name){
        this.name = name;
        this.gameStats = new GameStats(this);
    }
}
