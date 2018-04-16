package com.siwoo.docode.web;

import com.siwoo.docode.test.domain.DownloadingView;
import com.siwoo.docode.test.domain.Form;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.io.*;
import java.nio.charset.Charset;

@RestController
@RequestMapping("/rest/multipart")
public class MultipartController {

    @PostMapping
    public void create(HttpSession httpSession, Form form) throws IOException {

        System.out.println(form.getAttachments().getOriginalFilename());
        System.out.println(form.getAttachments().getContentType());
        System.out.println(form.getAttachments().getSize());
        /*file.getBytes();*/
        try(BufferedInputStream file = new BufferedInputStream(form.getAttachments().getInputStream()) ) {
            byte[] contents = new byte[1024];
            int bytesRead = 0;
            String strFileContents = "";
            while((bytesRead = file.read(contents)) != -1) {
                strFileContents += new String(contents, 0, bytesRead,Charset.forName("UTF-8"));
                System.out.println(strFileContents);
            }
        }
    }



}
