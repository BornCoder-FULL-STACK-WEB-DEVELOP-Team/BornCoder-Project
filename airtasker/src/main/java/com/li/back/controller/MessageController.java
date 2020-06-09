package com.li.back.controller;

import com.li.back.dto.SentPostDto;
import com.li.back.dto.UserPostDto;
import com.li.back.entity.Message;
import com.li.back.repository.MessageRepository;
import com.li.back.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Stack;

@RestController
public class MessageController {
    @Autowired
    private MessageRepository messageRepository;
    @Autowired
    private UserRepository userRepository;

    @PostMapping(
            value = "/sent"
    )
    public void MessageSent(@RequestBody SentPostDto sentPostDto){
        Message message = new Message();
        message.setUserReceiveId(sentPostDto.getUserReceiveId());
        message.setUserSendId(sentPostDto.getUserSendId());
        message.setContent(sentPostDto.getContent());

        messageRepository.save(message);
    }
    @GetMapping(
            value = "/show"
    )
    public Stack<Message> MessageShow(@RequestBody UserPostDto userPostDto){
        Long id = userPostDto.getId();
        List<Message> userMessages = messageRepository.findByUserReceiveIdLike(id);
        userMessages.sort((m1,m2)->m1.getOrder()-m2.getOrder());
        Stack<Message> messageContainer = new Stack<>();
        userMessages.forEach(m->messageContainer.addElement(m));
        return messageContainer;
    }
   
}
