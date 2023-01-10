package com.api.memory_quizzes.request;

import com.api.memory_quizzes.enums.SelfAssessmentGrade;
import com.api.memory_quizzes.utils.MapUrlNameToValidGame;
import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class UpdateScoreRequest {

    @JsonAlias({"nameOfGame", "name"})
    private String nameOfGame;

    @JsonAlias({"grade", "selfAssessmentGrade"})
    private String grade;

    @JsonAlias({"finalScore", "score"})
    private double finalScore;

    private boolean liked;

    public void setValidUrlName(){
        this.nameOfGame = MapUrlNameToValidGame.mapToValidMemoryName(this.nameOfGame);
    }
}
