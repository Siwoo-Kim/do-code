package com.siwoo.docode.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Slf4j
@Service
public class NotificationServiceImpl implements NotificationService{

    @Async
    @Override
    public void sendNotification(String subject, String message, Collection<String> recipients) {
        log.info("Starting to send message to recipients");
        try{
            Thread.sleep(5_000L);
        }catch (InterruptedException e){}
        log.info("Finished notifying recipients");
    }
}
