package com.api.memory_quizzes.utils;

import com.api.memory_quizzes.enums.SelfAssessmentGrade;

public class MapUrlNameToValidGame {

    public static String mapToValidMemoryName(String urlName){
        //reformat from This-Is-A-Test -> This Is A Test
        return Capitalize.capitalizeAllWordsAfterHyphens(urlName).replace("-", " ");
    }

    public static SelfAssessmentGrade mapUrlGradeToEnum(String urlGrade){
        return SelfAssessmentGrade.mapStringToGrade(urlGrade);
    }
}
