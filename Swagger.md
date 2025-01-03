## build.gradle (Springboot 버전 3.4.1)
    implementation 'org.springdoc:springdoc-openapi-starter-webmvc-ui:2.7.0'

## 기본 경로
    http://localhost:8080/swagger-ui/index.html"

## SwaggerConfig.java
    package com.aloha.product.config;

    import org.springdoc.core.models.GroupedOpenApi;
    import org.springframework.context.annotation.Bean;
    import org.springframework.context.annotation.Configuration;

    import io.swagger.v3.oas.models.OpenAPI;
    import io.swagger.v3.oas.models.info.Info;

    @Configuration public class SwaggerConfig { 

        @Bean public GroupedOpenApi publicApi() 
        { return GroupedOpenApi.builder() .group("aloha") 
                                        // 그룹명 설정 
                                        .pathsToMatch("/**") 
                                        // 경로 설정 
                                        .build(); 
        } 
        
        @Bean public OpenAPI springShopOpenAPI() { 
            return new OpenAPI() .info(new Info().title("상품 관리 Proejct API") 
                                .description("상품 관리 프로젝트 API 입니다.") 
                                .version("v0.0.1")); 
        } 
    }