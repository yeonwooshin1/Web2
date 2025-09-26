package task3;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Map;


@Service
@AllArgsConstructor
public class BookService {  // class start

    // DI 주입
    private final BookMapper bookMapper;

    // 대출 서비스
    @Transactional
    public boolean rentB ( Map<String , Object> rentMap ){
        int id;
        try {
            id = Integer.parseInt((String) rentMap.get("bookId"));
        } catch (NumberFormatException e) {
            // 타입 변환 시 int 값이 아닐 경우 예외 던지기 -> 트렌젝션
            throw new IllegalArgumentException(" bookId가 정수가 아닌 값으로 인한 예외 던지기");
        }   // catch end
        String member = String.valueOf(rentMap.get("member"));

        int result =  bookMapper.rentBook(id);
        int result2 = bookMapper.setRentalLog(id , member);

        if( result == 0) {
            throw new RuntimeException("책 수량 부족에 대한 롤백");
        }   // if end
        if( result2 == 0 ) throw new RuntimeException("로그 수정 불가 롤백");

        return true;
    }   //  func end


    // 반납 서비스
    @Transactional
    public boolean returnB (Map<String ,Object> returnMap ) {

        int bookId;

        try {
            bookId = Integer.parseInt((String) returnMap.get("bookId"));
        } catch (NumberFormatException e) {
            // 타입 변환 시 int 값이 아닐 경우 예외 던지기 -> 트렌젝션
            throw new IllegalArgumentException(" bookId가 정수가 아닌 값으로 인한 예외 던지기");
        }   // catch end
        String member = (String) returnMap.get("member");

        // 현재 날짜시간,객체 생성 클래스
        LocalDateTime now = LocalDateTime.now();

        // 반납일 갱신하고 로그 수정하는 mapper 호출
        int result1 = bookMapper.setReturnLog(bookId, member , now);

        // 책 테이블 수량 증가 => 반납했으니까
        int result2 = bookMapper.returnBook(bookId);

        if(result1 == 0) {
            throw new RuntimeException(" 반납할 책 정보 오류 및 이미 반납된 도서에 대한 반납 처리에 대한 롤백 ");
        }   // if end
        if(result2 == 0){
            throw new RuntimeException(" 책 정보 없음에 대한 롤백 ");
        }   // if end

        return true;
    }   // func end
}   // class end
