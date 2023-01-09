package com.api.memory_quizzes.service;

import com.api.memory_quizzes.entity.GameStats;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@RunWith(SpringRunner.class)
class GameStatsServiceTest {

    @Autowired
    private GameStatsService gameStatsService;

    @Test
    void totalGamesPlayedQueryWorks(){
        List<GameStats> gameStats = gameStatsService.findAllStats();
        long totalGamesPlayed = gameStats.stream()
                .map(GameStats::getTimesPlayed)
                .reduce(0L, Long::sum);
        assertEquals(totalGamesPlayed, gameStatsService.getTotalGamesPlayed());
    }

    @Test
    void totalLikedQueryWorks(){
        List<GameStats> gameStats = gameStatsService.findAllStats();
        long totalLiked = gameStats.stream()
                .map(GameStats::getTimesLiked)
                .reduce(0L, Long::sum);
        assertEquals(totalLiked, gameStatsService.getTotalLikes());
    }
}