package com.api.memory_quizzes.utils;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MapUrlNameToValidGameTest {
    String testUrl1 = "memory-game";
    String testUrl2 = "memory";
    String correctlyFormatted = "Memory Game";

    @Test
    void mapToValidMemoryName() {
        assertEquals("Memory Game", MapUrlNameToValidGame.mapToValidMemoryName(testUrl1));
    }

    @Test
    void ensureCorrectFormatIsMaintained(){
        assertEquals(correctlyFormatted, MapUrlNameToValidGame.mapToValidMemoryName(correctlyFormatted));
    }

    @Test
    void mapToValidMemoryNameOneWord() {
        assertEquals("Memory", MapUrlNameToValidGame.mapToValidMemoryName(testUrl2));
    }

    @Test
    void mapToValidMemoryEmptyName() {
        assertEquals("", MapUrlNameToValidGame.mapToValidMemoryName(""));
    }
}