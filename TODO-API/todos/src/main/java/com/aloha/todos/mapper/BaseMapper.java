package com.aloha.todos.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface BaseMapper<E> {
    public List<E> list();
    public E select(Long no);
    public E selectById(String id);
    public int insert(E entity);
    public int update(E entity);
    public int updateById(E entity);
    public int delete(Long no);
    public int deleteById(String id);
    
    public int deleteAll();
    public int updateAll();
}
