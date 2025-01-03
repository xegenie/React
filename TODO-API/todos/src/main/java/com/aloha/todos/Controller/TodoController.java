package com.aloha.todos.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.aloha.todos.domain.Pagination;
import com.aloha.todos.domain.Todos;
import com.aloha.todos.service.TodoService;
import com.github.pagehelper.PageInfo;

import lombok.extern.slf4j.Slf4j;

@RestController
@CrossOrigin("*")
@RequestMapping("/todos")
@Slf4j
public class TodoController {

    @Autowired
    private TodoService todoService;

    @GetMapping()
    public ResponseEntity<?> getAll(
            @RequestParam(value = "page", defaultValue = "1", required = false) int page,
            @RequestParam(value = "size", defaultValue = "10", required = false) int size) {
        try {
            Pagination pagination = new Pagination();
            PageInfo<Todos> pageInfo = todoService.list(page, size);
            pagination.setTotal(pageInfo.getTotal());
            List<Todos> list = pageInfo.getList();
            Map<String, Object> response = new HashMap<>();
            response.put("list", list);
            response.put("pagination", pagination);

            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 단일 항목 조회
    @GetMapping("/{id}")
    public ResponseEntity<?> getOne(@PathVariable("id") Long id) {
        try {
            Todos todo = todoService.select(id);
            if (todo == null) {
                return new ResponseEntity<>("해당 데이터를 찾을 수 없습니다.", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(todo, HttpStatus.OK);
        } catch (Exception e) {
            log.error("Error retrieving data: {}", e.getMessage(), e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 항목 생성
    @PostMapping()
    public ResponseEntity<?> create(@RequestBody Todos todo) {
        try {
            boolean result = todoService.insert(todo);
            if (result) {
                return new ResponseEntity<>("데이터가 성공적으로 생성되었습니다.", HttpStatus.CREATED);
            }
            return new ResponseEntity<>("데이터 생성에 실패했습니다.", HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            log.error("Error creating data: {}", e.getMessage(), e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 항목 수정
    @PutMapping()
    public ResponseEntity<?> update(@RequestBody(required = false) Todos todo) {
        try {
            String id = todo.getId();
            boolean result = false;

            if( id == null ) {
                // 전체완료
                result = todoService.updateAll();
            }
            else {
                result = todoService.update(todo);
            }
            if (result) {
                return new ResponseEntity<>("데이터가 성공적으로 업데이트되었습니다.", HttpStatus.OK);
            }
            return new ResponseEntity<>("데이터 업데이트에 실패했습니다.", HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            log.error("Error updating data: {}", e.getMessage(), e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // @PutMapping("/updateAll")
    // public ResponseEntity<?> updateAll() {
    //     try {
    //         boolean result = todoService.updateAll();
    //         if (result) {
    //             return new ResponseEntity<>("모든 항목이 성공적으로 완료 상태로 변경되었습니다.", HttpStatus.OK);
    //         } else {
    //             return new ResponseEntity<>("전체 항목 업데이트에 실패했습니다.", HttpStatus.BAD_REQUEST);
    //         }
    //     } catch (Exception e) {
    //         log.error("Error updating all todos: {}", e.getMessage(), e);
    //         return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); // 500 에러 응답
    //     }
    // }
    

    // 단일 항목 삭제
    @DeleteMapping({"", "/{id}"})
    public ResponseEntity<?> destroy(@PathVariable(value =  "id", required = false) String id) {

        boolean result = false;
        try {
            if( id == null ) {
            // 전체 삭제
                result = todoService.deleteAll();
            } else {
                result = todoService.deleteById(id);
            }

            if (result) {
                return new ResponseEntity<>("데이터가 성공적으로 삭제되었습니다.", HttpStatus.OK);
            }
            return new ResponseEntity<>("데이터 삭제에 실패했습니다.", HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            log.error("Error deleting data: {}", e.getMessage(), e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}