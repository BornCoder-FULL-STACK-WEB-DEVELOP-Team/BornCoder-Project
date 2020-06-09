package com.li.back.service;

import com.li.back.dto.UserGetDto;
import com.li.back.dto.UserPostDto;
import com.li.back.entity.User;
import com.li.back.repository.UserRepository;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.Collection;
import java.util.Random;


@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @SneakyThrows

    public Collection<User> findAll(){
        return userRepository.findAll();
    }

    public UserGetDto addStudent(UserPostDto userPostDto){
        User user = new User();
        user.setName(userPostDto.getName());
        user.setAge(userPostDto.getAge());
//        user.setId(new Random().nextLong());

        User userFromDB = userRepository.save(user);

        UserGetDto userGetDto = new UserGetDto();
        userGetDto.setAge(userFromDB.getAge());
        userGetDto.setName(userFromDB.getName());
//        userGetDto.setId(userFromDB.getId());
        return userGetDto;
    }

    public void deleteStudent(Long id) {
        userRepository.deleteById(id);
    }

    public String login(UserPostDto userPostDto){
        String username = userPostDto.getName();
        int age = userPostDto.getAge();
        User user = userRepository.findByName(username);
        if (user.getName().equals(username) && user.getAge() == age
        ){
            return "pass";
        }
        else {
            return "You should enter correct username or password!";
        }
    }


}

