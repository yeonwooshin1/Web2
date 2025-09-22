package test06.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import test06.model.dto.DeleteDto;
import test06.model.dto.MovieDto;
import test06.service.MovieService;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/movie")
@CrossOrigin( value = "http://localhost:5173")
public class MovieController {  // class start

    // DI
    private final MovieService movieService;

    // 1. 글 등록
    @PostMapping()
    public ResponseEntity<Integer> reviewWrite(@RequestBody MovieDto dto) {
        int result = movieService.reviewWrite(dto);

        return ResponseEntity.status(200).body(result);
    }   // func end


    // 2. 글 삭제
    @DeleteMapping()
    public ResponseEntity<Boolean> reviewDelete(@RequestBody DeleteDto dto ) {
        boolean result = movieService.reviewDelete(dto);

        return ResponseEntity.status(200).body(result);
    }   // func end

    // 3. 글 전체 조회 + 검색 조회
    @GetMapping("/total")
    public ResponseEntity<List<MovieDto>> reviewTotalView(@RequestParam(required = false, defaultValue = "") String keyword ) {
        List<MovieDto> result = movieService.reviewTotalView(keyword);

        return ResponseEntity.status(200).body(result);
    }   // func end

    // 4. 글 개별 조회
    @GetMapping()
    public ResponseEntity<MovieDto> reviewView(@RequestParam int mno) {
        MovieDto result = movieService.reviewView(mno);

        return ResponseEntity.status(200).body(result);
    }   // func end


}   // class end
