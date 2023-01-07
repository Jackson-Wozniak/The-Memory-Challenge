package com.api.memory_quizzes.enums;

import com.api.memory_quizzes.exception.InvalidGradeException;

public enum SelfAssessmentGrade {
    VERY_BAD,
    BAD,
    AVERAGE,
    GOOD,
    VERY_GOOD;

    public SelfAssessmentGrade mapStringToGrade(String grade){
        return switch (grade.toUpperCase()){
            case "VERYBAD" -> VERY_BAD;
            case "BAD" -> BAD;
            case "AVERAGE" -> AVERAGE;
            case "GOOD" -> GOOD;
            case "VERYGOOD" -> VERY_GOOD;
            default -> throw new InvalidGradeException("The given grade cannot be mapped");
        };
    }

}
