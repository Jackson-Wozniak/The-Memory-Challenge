package com.api.memory_quizzes.entity;

import com.api.memory_quizzes.entity.idclass.GradeAverageId;
import com.api.memory_quizzes.enums.SelfAssessmentGrade;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity(name = "gradeAverage")
@Table(name = "grade_average")
@Getter
@Setter
@NoArgsConstructor
@IdClass(GradeAverageId.class)
public class GradeAverage {

    @Id
    private String nameOfGame;

    @Id
    @Enumerated(EnumType.STRING)
    private SelfAssessmentGrade selfAssessmentGrade;

    @ManyToOne(optional = false)
    @JoinColumn(name = "name", nullable = false)
    @JsonBackReference
    private GameStats gameStats;

    @Column(name = "total_average")
    private Double totalAverage;

    @Column(name = "times_graded")
    private Long timesGraded;

    public GradeAverage(GameStats gameStats, SelfAssessmentGrade selfAssessmentGrade) {
        this.nameOfGame = gameStats.getName();
        this.gameStats = gameStats;
        this.selfAssessmentGrade = selfAssessmentGrade;
        this.totalAverage = 0.0;
        this.timesGraded = 0L;
    }
}
