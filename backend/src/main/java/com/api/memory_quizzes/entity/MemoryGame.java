package com.api.memory_quizzes.entity;

import com.api.memory_quizzes.entity.GameStats;
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

    @OneToOne(cascade = CascadeType.ALL, optional = false)
    private GameStats gameStats;

    public MemoryGame(String name){
        this.name = name;
    }
}
