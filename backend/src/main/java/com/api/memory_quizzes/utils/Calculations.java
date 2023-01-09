package com.api.memory_quizzes.utils;

import java.text.DecimalFormat;

public class Calculations {

    private static final DecimalFormat df = new DecimalFormat("#.##");
    public static double calculateNewAverageScore(
            double prevAverage, long numberOfTimesPlayed, double newScore){
        if(numberOfTimesPlayed < 0){
            return 0.00;
        }
        double newAverage = prevAverage + ((newScore - prevAverage)/(numberOfTimesPlayed + 1));
        return Double.parseDouble(df.format(newAverage));
    }
}
