package com.siwoo.docode.test.domain;

import org.springframework.web.servlet.View;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

public class DownloadingView implements View {
    private final String fileName;
    private final String contentType;
    private final byte[] contents;

    public DownloadingView(String fileName, String contentType, byte[] contents) {
        this.fileName = fileName;
        this.contentType = contentType;
        this.contents = contents;
    }

    @Override
    public String getContentType() {
        return this.contentType;
    }

    @Override
    public void render(Map<String, ?> model, HttpServletRequest request, HttpServletResponse response) throws Exception {
        response.setHeader("Content-Disposition", "attachment; filename=" + this.fileName);
        response.setContentType("application/octet-stream");
        response.setCharacterEncoding("UTF-8");
        ServletOutputStream stream = response.getOutputStream();
        stream.write(this.contents);
    }
}
