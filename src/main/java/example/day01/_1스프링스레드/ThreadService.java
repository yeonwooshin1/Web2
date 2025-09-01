package example.day01._1스프링스레드;

import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class ThreadService {    // class start

    // 1.
    public int thread1() {
        int result = 0;
        // 반복문
        for(int i = 1; i <= 10 ; i++ ){
            result += i;
            // 예시 ] 현재 스레드 1초간 일시정지
            try{ Thread.sleep(1000); }catch (Exception e) {
                System.out.println(e);
            }
        }   // for end

        System.out.println(result);
        return result;
    }   // func end
    // 2.
    @Async  // 응답을 먼저하고 내부적으로 처리
    public void thread2(){
        int result = 0;
        // 반복문
        for(int i = 1; i <= 10 ; i++ ){
            result += i;
            // 예시 ] 현재 스레드 1초간 일시정지
            try{ Thread.sleep(1000); }catch (Exception e) {
                System.out.println(e);
            }
        }   // for end

        System.out.println(result);
        // return result;
    }   // func end
}   // class end
