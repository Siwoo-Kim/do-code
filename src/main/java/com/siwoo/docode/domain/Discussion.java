package com.siwoo.docode.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Getter @Setter @ToString
public class Discussion {
    private Long id;
    private String user;
    private String subject;
    private String uriSafeSubject;
    private String message;
    private Instant created;
    private Instant lastUpdated;
    private Set<String> subscribedUser = new HashSet<>();

}
