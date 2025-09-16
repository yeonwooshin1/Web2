package day07;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/board")
public class BoardController {  // class start

    // DI 등록
    private final BoardService boardService;

    // 1. 등록
    @PostMapping()
    public ResponseEntity<Integer> boardWrite (@RequestBody BoardDto boardDto ) {
        int result = boardService.boardWrite( boardDto );
        return ResponseEntity.status( 200 ).body( result );
    }   // func end

    // 2. 개별조회
    @GetMapping("/find")
    public ResponseEntity<BoardDto> boardFind (@RequestParam int bno ) {
        BoardDto result = boardService.boardFind( bno );
        return ResponseEntity.status( 200 ).body( result );
    }   // func end

    // 3. 전체조회
    @GetMapping("/all")
    public ResponseEntity<List<BoardDto>> boardPrint () {
        List<BoardDto> result = boardService.boardPrint();
        return ResponseEntity.status( 200 ).body( result );
    }   // func end
    // 4. 삭제
    @DeleteMapping()
    public  ResponseEntity<Integer> boardDelete (@RequestParam int bno ) {
        int result = boardService.boardDelete( bno );
        return ResponseEntity.status( 200 ).body( result );
    }   // func end

    // 5. 수정
    @PutMapping()
    public  ResponseEntity<Integer> boardUpdate (@RequestBody BoardDto boardDto , @RequestParam int bno ) {
        int result = boardService.boardUpdate( boardDto , bno );
        return ResponseEntity.status( 200 ).body( result );
    }   // func end

}   // class end
