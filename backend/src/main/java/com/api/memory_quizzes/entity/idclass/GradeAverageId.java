package com.api.memory_quizzes.entity.idclass;

import com.api.memory_quizzes.enums.SelfAssessmentGrade;
import lombok.*;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class GradeAverageId implements Serializable {

    private String nameOfGame;

    private SelfAssessmentGrade selfAssessmentGrade;
}
