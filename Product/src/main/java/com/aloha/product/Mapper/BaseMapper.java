package com.aloha.product.Mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface BaseMapper<E> {

    
    public List<E> list() throws Exception;

    public E select(Long no) throws Exception;
    public E selectById(String id) throws Exception;

    public int insert(E entity) throws Exception;

    public int update(E entity) throws Exception;
    public int updateById(E entity) throws Exception;

    public int delete(Long no) throws Exception;
    public int deleteById(String id) throws Exception;


}
