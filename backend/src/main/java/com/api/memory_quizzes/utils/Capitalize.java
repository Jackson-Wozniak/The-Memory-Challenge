package com.api.memory_quizzes.utils;

import java.util.Locale;

public class Capitalize {

    public static String capitalizeAllWordsAfterHyphens(String preCapitalized){
        if(preCapitalized.length() == 0){
            return preCapitalized;
        }
        String[] splitWords = preCapitalized.split("-");

        StringBuilder capitalized = new StringBuilder();
        for(int i = 0; i < splitWords.length; i++){
            String str = splitWords[i];
            str = splitWords[i].substring(0, 1).toUpperCase() + str.substring(1);
            //only append hyphen if it's not the last word
            capitalized.append(str).append(i != (splitWords.length - 1) ? "-" : "");
        }
        return capitalized.toString();
    }
}
