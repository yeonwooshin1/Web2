package test06.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import test06.model.dto.CommentDto;
import test06.service.CommentService;

@RestController
@AllArgsConstructor
@RequestMapping("/comment")
@CrossOrigin( value = "http://localhost:5173")
public class CommentController {

    // DI
    private final CommentService commentService;

    // 5. 댓글 조회
    @GetMapping()
    public ResponseEntity<CommentDto> commentView(@RequestParam int mno) {
        CommentDto result = commentService.commentView(mno);


        return ResponseEntity.status(200).body(result);
    }   // func end

    // 6. 댓글 작성
    @PostMapping()
    public ResponseEntity<Integer> commentWrite(@RequestBody CommentDto dto) {
        int result = commentService.commentWrite(dto);

        return ResponseEntity.status(200).body(result);
    }   // func end

    // 7. 댓글 삭제
    @DeleteMapping()
    public ResponseEntity<Boolean> commentDelete(@RequestParam int cno) {
        boolean result = commentService.commentDelete(cno);

        return ResponseEntity.status(200).body(result);
    }   // func end

}   // class end
