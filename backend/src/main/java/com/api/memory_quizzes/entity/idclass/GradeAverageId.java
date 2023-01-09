package com.api.memory_quizzes.entity.idclass;

import com.api.memory_quizzes.enums.SelfAssessmentGrade;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class GradeAverageId implements Serializable {

    private String nameOfGame;

    private SelfAssessmentGrade selfAssessmentGrade;
}
