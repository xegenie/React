package com.aloha.todos.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.aloha.todos.domain.Todos;

@Mapper
public interface TodoMapper extends BaseMapper<Todos> {
    
}
