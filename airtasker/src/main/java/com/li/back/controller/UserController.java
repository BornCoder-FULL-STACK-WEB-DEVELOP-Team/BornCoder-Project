package com.li.back.controller;

import com.li.back.dto.UserGetDto;
import com.li.back.dto.UserPostDto;

import com.li.back.entity.User;
import com.li.back.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;


@RestController

public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping(
            value = "/add",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<UserGetDto> addStudent(@RequestBody UserPostDto userPostDto){
        return ResponseEntity.ok(userService.addStudent(userPostDto));
    }

    @DeleteMapping(
            value = "/deleteById/{id}",
            consumes = MediaType.APPLICATION_JSON_VALUE
    )
    public void deleteStudent(@PathVariable("id") Long id){
        userService.deleteStudent(id);
    }
    @GetMapping(
            value = "/find",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Collection<User>> findAll(){
        return ResponseEntity.ok(userService.findAll());
    }

}








