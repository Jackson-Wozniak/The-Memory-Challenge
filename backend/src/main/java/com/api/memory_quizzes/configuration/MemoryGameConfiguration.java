package com.api.memory_quizzes.configuration;

import com.api.memory_quizzes.entity.GradeAverage;
import com.api.memory_quizzes.entity.MemoryGame;
import com.api.memory_quizzes.enums.SelfAssessmentGrade;
import com.api.memory_quizzes.repository.GradeAverageRepository;
import com.api.memory_quizzes.service.MemoryGameService;
import com.api.memory_quizzes.utils.CreateListOfGameGrades;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Configuration
@AllArgsConstructor
public class MemoryGameConfiguration {

    @Autowired
    private final MemoryGameService memoryGameService;
    @Autowired
    private final GradeAverageRepository gradeAverageRepository;

    private static final List<String> listOfNames = List.of("Grid Memory", "Letter Mapping");
    private static final Logger logger = LoggerFactory.getLogger(MemoryGameConfiguration.class);

    /*
    Assures that all games built on frontend are saved into DB on startup.
    Also saves a default list of grade averages if any new games are created
     */
    @PostConstruct
    public void validateAllGamesOnStartup(){
        List<String> missingNames = memoryGameService.findListOfMissingGames(
                new ArrayList<>(listOfNames));
        List<MemoryGame> savedGames = memoryGameService.saveAllGames(missingNames.stream()
                        .map(MemoryGame::new)
                        .collect(Collectors.toList()));
        gradeAverageRepository.saveAll(CreateListOfGameGrades.getAllPossibleGradesByGame(savedGames));
        logger.info(savedGames.size() + " new games saved on startup");
    }
}
