package com.li.back.controller;

import com.li.back.dto.UserPostDto;
//import com.li.back.entity.Task;
import com.li.back.entity.Task;
import com.li.back.entity.User;
import com.li.back.repository.TaskRepository;
import com.li.back.repository.UserRepository;
import com.li.back.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.Rollback;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.transaction.Transactional;


@RestController
public class LoginController {
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private TaskRepository taskRepository;


    @PostMapping(
            value = "/log",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public String Log(@RequestBody UserPostDto userPostDto){
        return userService.login(userPostDto);
    }
    @GetMapping("/cool")
    public void test(){
        User user = new User();
        user.setName("AAA");
        Task task = new Task();
        task.setName("BBB");
        user.getTasks().add(task);
        taskRepository.save(task);
        userRepository.save(user);



    }

}

