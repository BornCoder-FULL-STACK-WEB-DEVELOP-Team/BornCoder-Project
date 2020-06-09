package com.li.back.dto;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
public class SentPostDto {

    private Integer userReceiveId;

    private Integer userSendId;

    private  String content;

}