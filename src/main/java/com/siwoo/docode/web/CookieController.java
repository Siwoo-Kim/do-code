package com.siwoo.docode.web;

import jdk.nashorn.internal.ir.annotations.Ignore;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/rest/cookie")
public class CookieController {

    @GetMapping(value = "/{name}")
    public Cookie get(@PathVariable String name,
                      @RequestParam(required = false) String value,
                      HttpServletRequest request,
                      HttpServletResponse response) throws UnsupportedEncodingException {
        Cookie cookie = new Cookie(name, null);
        if (request.getCookies() != null) {
            List<Cookie> cookies = Arrays.asList(request.getCookies());

            Optional<Cookie> existsOrSame = cookies.stream()
                    .filter(_cookie -> _cookie.getName().equals(name))
                    .findAny();

            if(existsOrSame.isPresent()) {
                cookie = existsOrSame.get();
                System.out.println("value: " + value);
                if (value != null &&
                        !value.equals("undefined") &&
                        !value.equals("null")) {
                    cookie.setValue(URLEncoder.encode( value, "UTF-8" ));
                }
            }
        }
        
        cookie.setMaxAge(60 * 60 * 30);
        System.out.println("Cookie[Search:"+cookie.getValue()+"] is created");
        response.addCookie(cookie);
        return cookie;
    }
}
