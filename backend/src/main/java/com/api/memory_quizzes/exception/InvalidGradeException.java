package com.api.memory_quizzes.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/*
Exception called if api request grade cannot be parsed as enum
 */
@ResponseStatus(HttpStatus.NOT_FOUND)
public class InvalidGradeException extends RuntimeException{
    public InvalidGradeException(String message){
        super(message);
    }
}
