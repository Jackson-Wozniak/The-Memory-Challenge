package com.api.memory_quizzes.utils;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class CalculationsTest {

    @Test
    void testAverageCalculations(){
        double average = 10.0;
        long timesPlayed = 1;
        double newScore = 20.0;
        assertEquals(15.0, Calculations.calculateNewAverageScore(average, timesPlayed, newScore));
    }

    @Test
    void testAverageCalculationsWithList(){
        List<Double> data = List.of(1.0, 10.0, 8.0, 5.0);
        double average = (data.stream().reduce(Double::sum).orElse(0.0)) / data.size();
        long timesPlayed = data.size();
        double newScore = 20.0;
        assertEquals(8.80, Calculations.calculateNewAverageScore(average, timesPlayed, newScore));
    }

    @Test
    void testAverageCalculationsWithZeroes(){
        double average = 0.0;
        long timesPlayed = 0;
        double newScore = 0.0;
        assertEquals(0.00, Calculations.calculateNewAverageScore(average, timesPlayed, newScore));
    }

    @Test
    void testAverageCalculationsWithNegatives(){
        double average = -10.0;
        long timesPlayed = -1;
        double newScore = -20.0;
        assertEquals(0.00, Calculations.calculateNewAverageScore(average, timesPlayed, newScore));
    }
}