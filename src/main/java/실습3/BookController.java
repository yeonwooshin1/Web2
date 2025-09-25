package 실습3;

import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RequestMapping("/book")
@RestController
@AllArgsConstructor
public class BookController {   // class start

    // DI 주입
    private final BookService bookService;

    // 대출
    @PostMapping("/rent")
    public boolean rentB(@RequestBody Map<String, Object> rentMap ) {

        return bookService.rentB(rentMap);

    }   // func end

    // 반납
    @PostMapping("/return")
    public boolean returnB(@RequestBody Map<String, Object> returnMap ) {

        return bookService.returnB(returnMap);

    }   // func end

}   // class end
