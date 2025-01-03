package com.aloha.todos.service;

import com.aloha.todos.domain.Todos;
import com.github.pagehelper.PageInfo;

public interface TodoService extends BaseService<Todos> {
    public PageInfo<Todos> list(int page, int size);
}