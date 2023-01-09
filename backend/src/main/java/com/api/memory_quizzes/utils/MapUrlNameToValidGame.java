package com.api.memory_quizzes.utils;

public class MapUrlNameToValidGame {

    public static String mapToValidMemoryName(String urlName){
        //reformat from This-Is-A-Test -> This Is A Test
        return Capitalize.capitalizeAllWordsAfterHyphens(urlName).replace("-", " ");
    }
}
