package com.li.back.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "Message")
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer messageId;
    @Column
    private Integer userReceiveId;
    @Column
    private Integer userSendId;
    @Column
    private  String content;
    @Column
    private Date sentTime;
    @Column
    private int order;

}
