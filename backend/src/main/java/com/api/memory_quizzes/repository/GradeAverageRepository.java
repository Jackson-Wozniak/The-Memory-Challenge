package com.api.memory_quizzes.repository;

import com.api.memory_quizzes.entity.GradeAverage;
import com.api.memory_quizzes.entity.idclass.GradeAverageId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GradeAverageRepository extends JpaRepository<GradeAverage, GradeAverageId> {
}
