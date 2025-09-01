package example.day01._1스프링스레드;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController             // http 요청/응답 처리
@RequiredArgsConstructor    // final 변수의 생성자 지원
@RequestMapping("/task/day01")  // http 매핑
public class ThreadController { // class start

    private final ThreadService threadService;

    @GetMapping // 동기화 : 스프링 매핑 컨트롤러는 자동 동기화 처리한다.
    // 먼저 요청을 한 HTTP 부터 처리를 한다.
    public int thread1(){
        System.out.println("ThreadController.thread1");
        return threadService.thread1();
    }   // func end

    @DeleteMapping
    public void thread2(){
        System.out.println("ThreadController.thread2");
        threadService.thread2();
    }   // func end
}   // class end
