package com.aloha.todos.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class HomeController {

    @GetMapping({"","/"})
    public String home() {
        return "redirect:/swagger-ui/index.html";
    }
}
