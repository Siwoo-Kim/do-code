package com.siwoo.docode.web;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/rest/test")
public class ResponseEntityController {

    @GetMapping
    public ResponseEntity<Map> handle() {
        HashMap<String,String> map = new HashMap<>();
        map.put("foo", "bar");
        return new ResponseEntity<>(map,
                HttpStatus.CREATED //HttpStatus 정의
        );
    }

    @PostMapping("/accept")
    public void accept(@RequestHeader HttpHeaders httpHeaders) {
        System.out.println(httpHeaders.getContentType());
        System.out.println(httpHeaders.toSingleValueMap());
    }

    @GetMapping("model")
    public Map model() {
        HashMap<String,String> map = new HashMap<>();
        map.put("foo", "bar");
        return map;
    }

    private LocalDateTime localDateTime = LocalDateTime.of(1989,03,04,12,12,12);

    @GetMapping("date")
    public String date() {
         return localDateTime.toString();
    }

    @GetMapping(value = "date2", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public LocalDateTime date2() {
        return localDateTime;
    }

    @PostMapping("/date3")
    public void getDate(@RequestBody Map<?,?> date) {
        System.out.println(date.toString());
    }
}
