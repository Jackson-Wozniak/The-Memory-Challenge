package com.api.memory_quizzes.controller;

import com.api.memory_quizzes.service.GameStatsService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/v1/stats")
@AllArgsConstructor
public class GameStatsController {

    @Autowired
    private final GameStatsService gameStatsService;

    @RequestMapping(value = "/total/liked")
    public long getTotalLikedGamesCount(){
        return gameStatsService.getTotalLikes();
    }

    @RequestMapping(value = "/total/played")
    public long getTotalGamesPlayed(){
        return gameStatsService.getTotalGamesPlayed();
    }
}
