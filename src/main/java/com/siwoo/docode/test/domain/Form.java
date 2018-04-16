package com.siwoo.docode.test.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Getter @Setter @ToString
public class Form {
    private String subject;
    private String body;
    private MultipartFile attachments;

}
