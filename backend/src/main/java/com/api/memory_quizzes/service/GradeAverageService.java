package com.api.memory_quizzes.service;

import com.api.memory_quizzes.entity.GameStats;
import com.api.memory_quizzes.entity.GradeAverage;
import com.api.memory_quizzes.entity.idclass.GradeAverageId;
import com.api.memory_quizzes.enums.SelfAssessmentGrade;
import com.api.memory_quizzes.exception.GradeException;
import com.api.memory_quizzes.repository.GradeAverageRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class GradeAverageService {

    @Autowired
    private final GradeAverageRepository gradeAverageRepository;

    public void saveGradeAverage(GradeAverage gradeAverage){
        gradeAverageRepository.save(gradeAverage);
    }

    public void saveListOfGradeAverages(Iterable<GradeAverage> gradeAverages){
        gradeAverageRepository.saveAll(gradeAverages);
    }

    public GradeAverage findGradeAverageById(String nameOfGame, SelfAssessmentGrade selfAssessmentGrade){
        return gradeAverageRepository.findById(new GradeAverageId(nameOfGame, selfAssessmentGrade))
                .orElseThrow(() -> new GradeException("Cannot find a grade associated with that game"));
    }

    public GradeAverage findGradeAverageById(GradeAverageId id){
        return gradeAverageRepository.findById(id)
                .orElseThrow(() -> new GradeException("Cannot find a grade associated with that game"));
    }
}
