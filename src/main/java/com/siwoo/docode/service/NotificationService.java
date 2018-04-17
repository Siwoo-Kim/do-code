package com.siwoo.docode.service;

import org.springframework.scheduling.annotation.Async;

import java.util.Collection;

public interface NotificationService {

    @Async
    void sendNotification(String subject, String message, Collection<String> recipients);

}