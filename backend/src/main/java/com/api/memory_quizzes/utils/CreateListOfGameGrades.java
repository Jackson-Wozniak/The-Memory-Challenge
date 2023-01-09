package com.api.memory_quizzes.utils;

import com.api.memory_quizzes.entity.GradeAverage;
import com.api.memory_quizzes.entity.MemoryGame;
import com.api.memory_quizzes.enums.SelfAssessmentGrade;

import java.util.ArrayList;
import java.util.List;

public class CreateListOfGameGrades {

    public static List<GradeAverage> getAllPossibleGradesByGame(List<MemoryGame> memoryGames){
        List<GradeAverage> allMissingGradeAverages = new ArrayList<>();
        memoryGames.forEach(game -> allMissingGradeAverages.addAll(
                SelfAssessmentGrade.getAllGrades().stream()
                        .map(grade -> new GradeAverage(game.getGameStats(), grade)).toList()));
        return allMissingGradeAverages;
    }
}
