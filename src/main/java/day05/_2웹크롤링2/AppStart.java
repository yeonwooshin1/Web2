package day05._2웹크롤링2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync // 비동기 사용 활성화
public class AppStart { // class start

    public static void main(String[] args) {    // main start
        SpringApplication.run(AppStart.class);
    }   // main end

}   // class end