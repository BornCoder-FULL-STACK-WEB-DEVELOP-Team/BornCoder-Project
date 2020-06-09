package com.li.back.repository;

import com.li.back.entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message,Integer> {

    public List<Message> findByUserReceiveIdLike(Long id);

}
