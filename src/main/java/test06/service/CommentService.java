package test06.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import test06.model.dto.CommentDto;

import test06.model.mapper.CommentMapper;

import java.util.List;

@Service
@AllArgsConstructor
public class CommentService {   // class start

    // DI
    private final CommentMapper commentMapper;

    // 5. 댓글 조회
    public List<CommentDto> commentView(int mno) {
        CommentDto result = commentMapper.commentView(mno);

        return
    }   // func end


    // 6. 댓글 작성

    public int commentWrite( CommentDto dto) {
        int result = commentMapper.commentWrite(dto);

        return
    }   // func end

    // 7. 댓글 삭제

    public boolean commentDelete( int cno) {
        boolean result = commentMapper.commentDelete( cno );

        return
    }   // func end
}   // class end
