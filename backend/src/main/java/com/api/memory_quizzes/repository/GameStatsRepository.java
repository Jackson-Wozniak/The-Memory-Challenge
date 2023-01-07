package com.api.memory_quizzes.repository;

import com.api.memory_quizzes.entity.GameStats;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface GameStatsRepository extends JpaRepository<GameStats, String> {

    @Query(value = "SELECT SUM(times_played) " +
            "FROM game_stats", nativeQuery = true)
    Optional<Long> findTotalGamesPlayed();

    @Query(value = "SELECT SUM(times_liked) " +
            "FROM game_stats", nativeQuery = true)
    Optional<Long> findTotalLiked();
}
