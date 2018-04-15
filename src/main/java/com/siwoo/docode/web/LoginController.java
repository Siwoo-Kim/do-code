package com.siwoo.docode.web;

import lombok.*;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/rest/login")
public class LoginController {

    private static final Login authLogin = new Login("guest@email.com","1234");

    @EqualsAndHashCode(of={"email","password"})
    @NoArgsConstructor @AllArgsConstructor
    @Getter @Setter @ToString
    public static class Login {
        private String email;
        private String password;
    }

    @PostMapping
    private Map<String,Boolean> login(@RequestBody Login login) {
        Map<String,Boolean> map = new HashMap<>();
        map.put("result", null);
        if(authLogin.equals(login)) {
            map.put("result",true);
        } else {
            map.put("result",false);
        }
        return map;
    }

}

