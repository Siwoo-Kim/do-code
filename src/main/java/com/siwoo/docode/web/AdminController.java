package com.siwoo.docode.web;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@Controller
@RequestMapping("/rest/auth")
public class AdminController {

    @GetMapping
    public String home() {
        return "index";
    }

    @PostMapping("/login")
    public void login() {

    }

    @GetMapping("/guest")
    public void guest() {
        log.warn("guest");
    }

    @GetMapping("/admin")
    public void admin() {
        log.warn("admin");
    }

}
