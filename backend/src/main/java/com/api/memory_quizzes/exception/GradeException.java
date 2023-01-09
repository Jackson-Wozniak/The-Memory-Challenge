package com.api.memory_quizzes.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class GradeException extends RuntimeException{
    public GradeException(String message){
        super(message);
    }
}
