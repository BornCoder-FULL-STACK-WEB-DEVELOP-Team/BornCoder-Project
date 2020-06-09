package com.li.back.controller;

import com.li.back.dto.UserPostDto;
import com.li.back.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class signInController {

    @Autowired
    private UserService userService;

    @PostMapping(
            value = "/sign",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public String sign(@RequestBody UserPostDto userPostDto){
        userService.addStudent(userPostDto);
        return userPostDto.getName();
    }

}
