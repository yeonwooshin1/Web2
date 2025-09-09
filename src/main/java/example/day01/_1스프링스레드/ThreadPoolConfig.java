package example.day01._1스프링스레드;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

import java.util.List;
import java.util.concurrent.Executor;

@Configuration  // 스프링 컨테이너 빈 등록 , IOC
public class ThreadPoolConfig { // class start

    @Bean
    // 1. 스프링 멀티스레드 커스텀
    public Executor taskExecutor() {// Executor : java.util import 하기
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize( 2 );  // 기본 실행 스레드 개수 설정
        executor.setMaxPoolSize(10);    // 최대 실행 스레드 개수 설정
        executor.setQueueCapacity( 20 ); // 최대 대기 개수 설정 , 20명 대기 상태가 넘치면 503 오류 발생
        executor.initialize();          // 스레드풀 초기화 : 서버를 재실행 마다 초기화
        return executor;
    }   // func end
}   // class end
