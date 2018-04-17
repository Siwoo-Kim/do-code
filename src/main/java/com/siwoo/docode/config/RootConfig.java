package com.siwoo.docode.config;

import com.sun.org.apache.regexp.internal.RE;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.scheduling.annotation.AsyncConfigurer;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.SchedulingConfigurer;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;
import org.springframework.scheduling.config.ScheduledTaskRegistrar;

import java.util.concurrent.Executor;

@Slf4j
@Configuration
@EnableAsync(proxyTargetClass = true)
@EnableScheduling
public class RootConfig implements AsyncConfigurer, SchedulingConfigurer {


    @Bean
    public ThreadPoolTaskScheduler taskScheduler() {
        log.warn("20개의 스레드를 가진 풀 task 스케쥴러을 생성한다");
        ThreadPoolTaskScheduler scheduler = new ThreadPoolTaskScheduler();
        scheduler.setPoolSize(20);
        scheduler.setThreadNamePrefix("task-");
        scheduler.setAwaitTerminationSeconds(60);
        scheduler.setWaitForTasksToCompleteOnShutdown(true);
        scheduler.setErrorHandler(t -> log.error("비동기 업무 중 에러 발생!"));
        return scheduler;
    }

    @Override
    public Executor getAsyncExecutor() {
        Executor executor = this.taskScheduler();
        log.warn("다음의 @Async 메서드를 비동기로 호출하는 Executor 를 생성한다",executor);
        return executor;
    }

    @Override
    public void configureTasks(ScheduledTaskRegistrar scheduledTaskRegistrar) {
        TaskScheduler scheduler = this.taskScheduler();
        log.warn("다음의 스케쥴된 메서드를 호출하는 스케쥴러를 생성한다",scheduler);
        scheduledTaskRegistrar.setTaskScheduler(scheduler);
    }
}
