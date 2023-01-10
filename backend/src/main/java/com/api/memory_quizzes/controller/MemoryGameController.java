package com.api.memory_quizzes.controller;

import com.api.memory_quizzes.entity.GradeAverage;
import com.api.memory_quizzes.entity.MemoryGame;
import com.api.memory_quizzes.enums.SelfAssessmentGrade;
import com.api.memory_quizzes.repository.GradeAverageRepository;
import com.api.memory_quizzes.repository.MemoryGameRepository;
import com.api.memory_quizzes.request.UpdateScoreRequest;
import com.api.memory_quizzes.service.GameStatsService;
import com.api.memory_quizzes.service.MemoryGameService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping(value = "/api/v1/game")
@AllArgsConstructor
public class MemoryGameController {

    @Autowired
    private final MemoryGameService memoryGameService;
    @Autowired
    private final GameStatsService gameStatsService;
    @Autowired
    private final GradeAverageRepository gradeAverageRepository;

    @RequestMapping
    public List<MemoryGame> getAllMemoryGames(){
        return memoryGameService.findAllGames();
    }

    @PutMapping
    public MemoryGame updateScoresForExistingGame(@RequestBody UpdateScoreRequest request){
        request.setValidUrlName();
        return memoryGameService.updateScores(request);
    }
}
