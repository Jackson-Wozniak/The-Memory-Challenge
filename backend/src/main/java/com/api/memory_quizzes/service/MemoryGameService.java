package com.api.memory_quizzes.service;

import com.api.memory_quizzes.entity.GameStats;
import com.api.memory_quizzes.entity.GradeAverage;
import com.api.memory_quizzes.entity.MemoryGame;
import com.api.memory_quizzes.enums.SelfAssessmentGrade;
import com.api.memory_quizzes.exception.GameNotFoundException;
import com.api.memory_quizzes.exception.GradeException;
import com.api.memory_quizzes.repository.MemoryGameRepository;
import com.api.memory_quizzes.request.UpdateScoreRequest;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MemoryGameService {

    @Autowired
    private final MemoryGameRepository memoryGameRepository;

    public List<MemoryGame> saveAllGames(Iterable<MemoryGame> memoryGames){
        return memoryGameRepository.saveAll(memoryGames);
    }

    public MemoryGame updateScores(UpdateScoreRequest request){
        MemoryGame memoryGame = memoryGameRepository.findById(request.getNameOfGame())
                .orElseThrow(() -> new GameNotFoundException("Cannot find game with given name"));
        GameStats gameStats = memoryGame.getGameStats();
        gameStats.recalculateAverageScoreAndTimesGraded(request);
        if(request.isLiked()) gameStats.incrementTimesLiked();
        GradeAverage gradeAverage = gameStats.getGradeAverage().stream()
                .filter(average -> average.getSelfAssessmentGrade().equals(SelfAssessmentGrade.mapStringToGrade(request.getGrade())))
                .findFirst().orElseThrow(() -> new GradeException("Cannot find grade in request"));
        gradeAverage.recalculateAverageScoreAndTimesGraded(request);

        return memoryGameRepository.save(memoryGame);
    }

    public List<MemoryGame> findAllGames(){
        return memoryGameRepository.findAll();
    }

    public boolean gameExistsByName(String name){
        return memoryGameRepository.findById(name).isPresent();
    }

    public List<String> findListOfMissingGames(ArrayList<String> names){
        List<String> memoryGames = memoryGameRepository.findAll().stream()
                .map(MemoryGame::getName).toList();
        names.removeAll(memoryGames);
        return names;
    }

    public long findMemoryGameCount(){
        return memoryGameRepository.count();
    }
}
