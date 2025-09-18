package task5;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/number")
@CrossOrigin( value = "http://localhost:5173")    // 리액트서버와 CORS 통신을 허용
public class UserNumberListController { // class start

    // 의존성 주입
    private final UserNumberListService userNumberListService;

    // 1. 등록
    @PostMapping()
    public ResponseEntity<Integer> listWrite(@RequestBody UserNumberListDto dto) {
        int result = userNumberListService.listWrite(dto);

        return ResponseEntity.status(200).body(result);
    }   // func end


    // 2. 전체조회
    @GetMapping()
    public ResponseEntity<List<UserNumberListDto>> listPrint(){
        List<UserNumberListDto> result = userNumberListService.listPrint();

        return ResponseEntity.status(200).body(result);
    }   // func end

    // 3. 삭제
    @DeleteMapping()
    public ResponseEntity<Integer> listDelete(@RequestParam int id){
        int result = userNumberListService.listDelete( id );

        return ResponseEntity.status( 200 ).body( result );
    }   // func end

}   // class end
