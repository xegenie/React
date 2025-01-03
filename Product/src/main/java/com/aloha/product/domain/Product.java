package com.aloha.product.domain;

import java.time.LocalDateTime;
import java.util.UUID;

import lombok.Data;

@Data
public class Product {

    private Long no;               // PK
    private String id;             // 상품 ID (UK)
    private String title;          // 상품명
    private String content;        // 설명
    private Long likes;            // 좋아요
    private String img;            // 이미지 경로
    private LocalDateTime createdAt;  // 등록일자
    private LocalDateTime updatedAt;  // 수정일자
    
    public Product() {
        this.id = UUID.randomUUID().toString();
    }
}