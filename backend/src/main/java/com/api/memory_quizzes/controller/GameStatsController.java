package com.api.memory_quizzes.controller;

import com.api.memory_quizzes.repository.GameStatsRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/v1/stats")
@AllArgsConstructor
public class GameStatsController {

    @Autowired
    private final GameStatsRepository gameStatsRepository;

    @RequestMapping(value = "/total/liked")
    public long getTotalLikedGamesCount(){
        return gameStatsRepository.findTotalLiked().orElse(0L);
    }

    @RequestMapping(value = "/total/played")
    public long getTotalGamesPlayed(){
        return gameStatsRepository.findTotalLiked().orElse(0L);
    }
}
