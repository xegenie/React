package com.aloha.product.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aloha.product.Mapper.ProductMapper;
import com.aloha.product.domain.Product;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired private ProductMapper productMapper;

    @Override
    public List<Product> list() throws Exception {
        return productMapper.list();
    }

    @Override
    public Product select(Long no) throws Exception {
        return productMapper.select(no);
    }

    @Override
    public Product selectById(String id) throws Exception {
        return productMapper.selectById(id);
    }

    @Override
    public boolean insert(Product product) throws Exception {
        return productMapper.insert(product) > 0;
    }

    @Override
    public boolean update(Product product) throws Exception {
        return productMapper.update(product) > 0;
    }

    @Override
    public boolean updateById(Product product) throws Exception {
        return productMapper.updateById(product) > 0;
    }

    @Override
    public boolean delete(Long no) throws Exception {
        return productMapper.delete(no) > 0;
    }

    @Override
    public boolean deleteById(String id) throws Exception {
        return productMapper.deleteById(id) > 0;
    }


}
