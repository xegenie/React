package com.aloha.product.Mapper;

import org.apache.ibatis.annotations.Mapper;

import com.aloha.product.domain.Product;

@Mapper
public interface ProductMapper extends BaseMapper<Product> {
    
}
