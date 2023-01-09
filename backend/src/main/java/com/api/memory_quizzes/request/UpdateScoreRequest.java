package com.api.memory_quizzes.request;

import com.api.memory_quizzes.enums.SelfAssessmentGrade;
import com.api.memory_quizzes.utils.MapUrlNameToValidGame;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateScoreRequest {

    @JsonProperty("nameOfGame")
    private String nameOfGame;

    @JsonProperty("grade")
    private String grade;

    @JsonProperty("finalScore")
    private double finalScore;

    private boolean liked;

    public UpdateScoreRequest(
            String name,
            String grade,
            double score,
            boolean liked) {
        this.nameOfGame = MapUrlNameToValidGame.mapToValidMemoryName(name);
        this.grade = grade;
        this.finalScore = score;
        this.liked = liked;
    }
}
