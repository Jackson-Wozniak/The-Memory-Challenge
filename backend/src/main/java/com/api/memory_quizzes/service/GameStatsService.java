package com.api.memory_quizzes.service;

import com.api.memory_quizzes.entity.GameStats;
import com.api.memory_quizzes.repository.GameStatsRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class GameStatsService {

    @Autowired
    private final GameStatsRepository gameStatsRepository;

    public List<GameStats> findAllStats(){
        return gameStatsRepository.findAll();
    }

    public long getTotalGamesPlayed(){
        return gameStatsRepository.findTotalGamesPlayed().orElse(0L);
    }

    public long getTotalLikes(){
        return gameStatsRepository.findTotalLiked().orElse(0L);
    }
}
