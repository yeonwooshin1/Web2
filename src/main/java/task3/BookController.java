package task3;

import lombok.AllArgsConstructor;

import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RequestMapping("/book")
@RestController
@AllArgsConstructor
@Log4j2     // ===== 로그를 처리하는 어노테이션 제공 =====
public class BookController {   // class start

    // DI 주입
    private final BookService bookService;

    // print 함수 대신에 로그 함수 사용해보기 = 부가 기능 제공 , 제약 조건 등
    @GetMapping("/log") public void log(){
        System.out.println("개발 단계 에서는 print 정말 많이 작성하자...");
        // 1og.XXXX : 출력 함수 처럼 출력하는 메세지 함수 이면서 부가기능(파일처리/제약조건등)
        log.debug("테스트 과정 사용된다");           // 테스트(개발) 과정 에서 메세지
        log.info("서비의 흐름, 데이터의 상태");       // 운용 과정 메세지
        log.warn("잠재적 문제 사용된다.");           // 유지보수 과정 메세지
        log.error("예외/실패 또는 오류에서 사용");      // 운용/유지보수 과정 메세지

    }   // log func end



    // 대출
    @PostMapping("/rent")
    public ResponseEntity<Boolean> rentB(@RequestBody Map<String, Object> rentMap ) {
        log.debug( "[대여신청]" + rentMap );
        boolean result = false;

        try {

            result = bookService.rentB(rentMap);
            log.debug("[대여 성공]" + rentMap);
            return ResponseEntity.ok(result);

        } catch ( IllegalArgumentException e) {

            log.debug("[타입 오류 실패]" + rentMap + e.getMessage() );
            return ResponseEntity.status(404).body( result );

        } catch ( RuntimeException e) {

            log.debug("[대여 실패]" + rentMap + e.getMessage() );
            return ResponseEntity.status(407).body( result );

        }   // try catch end

    }   // func end

    // 반납
    @PostMapping("/return")
    public boolean returnB(@RequestBody Map<String, Object> returnMap ) {

        return bookService.returnB(returnMap);

    }   // func end

}   // class end
