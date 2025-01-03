package com.aloha.product.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aloha.product.Service.ProductService;
import com.aloha.product.domain.Product;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/products")
@CrossOrigin("*")
@Slf4j
public class ProductController {

    @Autowired
    private ProductService productService;

    
    @GetMapping()
    @Operation(summary = "상품 목록 요청", description = "상품 전체 목록을 응답합니다.")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "SUCCESS - RESPONSE",
                    content = @Content(mediaType = "apllication/json",
                                        schema = @Schema(implementation = Product.class)))
    })
    public ResponseEntity<?> getAll() {
        try {
            List<Product> products = productService.list();
            if (products.isEmpty()) {
                return new ResponseEntity<>("No products found", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(products, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace(); // 서버 로그에서 문제를 확인
            return new ResponseEntity<>("Internal Server Error: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }   

    
    @GetMapping("/{id}")
    public ResponseEntity<?> getOne(@Parameter(description = "상품 식별 고유 ID", required = true)
                                    @PathVariable String id) {
        try {
            Product product = productService.selectById(id);
            if (product == null) {
                return new ResponseEntity<>("Product not found", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(product, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PostMapping()
    public ResponseEntity<?> create(@RequestBody Product product) {
        try {
            boolean result = productService.insert(product);
            if (result) {
                return new ResponseEntity<>("Product created successfully", HttpStatus.CREATED);
            }
            return new ResponseEntity<>("Failed to create product", HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            log.error("Database error: ", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@RequestBody Product product) {
        try {
            boolean result = productService.updateById(product);
            if (result) {
                return new ResponseEntity<>("Product updated successfully", HttpStatus.OK);
            }
            return new ResponseEntity<>("Failed to update product", HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> destroy(@PathVariable String id) {
        try {
            boolean result = productService.deleteById(id);
            if (result) {
                return new ResponseEntity<>("Product deleted successfully", HttpStatus.OK);
            }
            return new ResponseEntity<>("Failed to delete product", HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
