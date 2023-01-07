package com.api.memory_quizzes.service;

import com.api.memory_quizzes.repository.GameStatsRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class GameStatsService {

    @Autowired
    private final GameStatsRepository gameStatsRepository;

    public long getTotalGamesPlayed(){
        return gameStatsRepository.findTotalGamesPlayed().orElse(0L);
    }

    public long getTotalLikes(){
        return gameStatsRepository.findTotalLiked().orElse(0L);
    }
}
