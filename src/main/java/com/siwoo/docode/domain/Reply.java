package com.siwoo.docode.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.Instant;

@Getter @Setter @ToString
public class Reply {
    private Long id;
    private Long discussionId;
    private String user;
    private String message;
    private Instant created;
}
