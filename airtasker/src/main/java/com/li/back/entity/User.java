package com.li.back.entity;

import lombok.Data;


import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column
    private String name;
    @Column
    private Integer age;
    @OneToMany(targetEntity = Task.class)
    @JoinColumn(name = "user_id",referencedColumnName = "id")
    private Set<Task> tasks = new HashSet<>();


}


