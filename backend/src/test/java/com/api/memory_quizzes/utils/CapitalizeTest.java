package com.api.memory_quizzes.utils;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CapitalizeTest {

    @Test
    void capitalizeFirstLettersInHyphenedString(){
        String notCapitalized = "this-is-a-test";
        assertEquals("This-Is-A-Test", Capitalize.capitalizeAllWordsAfterHyphens(notCapitalized));
    }

    @Test
    void capitalizeFirstLetterInOneWordString(){
        String notCapitalized = "test";
        assertEquals("Test", Capitalize.capitalizeAllWordsAfterHyphens(notCapitalized));
    }

    @Test
    void emptyStringReturnsItself(){
        String emptyString = "";
        assertEquals("", Capitalize.capitalizeAllWordsAfterHyphens(emptyString));
    }
}