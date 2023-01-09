package com.api.memory_quizzes.entity;

import com.api.memory_quizzes.request.UpdateScoreRequest;
import com.api.memory_quizzes.utils.Calculations;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity(name = "gameStats")
@Table(name = "game_stats")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class GameStats {

    @Id
    private String name;

    @OneToOne(mappedBy = "gameStats")
    @JsonBackReference
    private MemoryGame memoryGame;

    @OneToMany(mappedBy = "gameStats", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<GradeAverage> gradeAverage;

    @Column(name = "total_average")
    private Double totalAverage;

    @Column(name = "times_played")
    private Long timesPlayed;

    @Column(name = "times_liked")
    private Long timesLiked;

    public GameStats(MemoryGame memoryGame){
        this.name = memoryGame.getName();
        this.memoryGame = memoryGame;
        this.timesPlayed = 0L;
        this.timesLiked = 0L;
        this.totalAverage = 0.0;
    }

    private void incrementTimesGraded(){
        this.setTimesPlayed(this.timesPlayed + 1);
    }

    public void recalculateAverageScoreAndTimesGraded(double newScore){
        this.setTotalAverage(Calculations.calculateNewAverageScore(
                this.totalAverage, this.timesPlayed, newScore));
        incrementTimesGraded();
    }

    public void recalculateAverageScoreAndTimesGraded(UpdateScoreRequest request){
        this.setTotalAverage(Calculations.calculateNewAverageScore(
                this.totalAverage, this.timesPlayed, request.getFinalScore()));
        incrementTimesGraded();
    }

    public void incrementTimesLiked(){
        this.setTimesLiked(this.timesLiked + 1);
    }
}
