package com.aloha.todos.domain;

import java.util.Date;
import java.util.UUID;

import lombok.Data;

@Data
public class Todos {
    private Long no;
    private String id;
    private String name;
    private Boolean status;
    private Integer seq;
    private Date createAt;
    private Date updateAt;

    public Todos() {
        this.id = UUID.randomUUID().toString();
    }
}
