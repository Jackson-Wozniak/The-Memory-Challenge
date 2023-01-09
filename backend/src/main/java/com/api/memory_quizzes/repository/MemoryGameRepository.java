package com.api.memory_quizzes.repository;

import com.api.memory_quizzes.entity.MemoryGame;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemoryGameRepository extends JpaRepository<MemoryGame, String> {
}
