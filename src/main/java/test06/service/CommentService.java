package test06.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import test06.model.dto.CommentDto;

import test06.model.dto.DeleteDto;
import test06.model.mapper.CommentMapper;

import java.util.List;

@Service
@AllArgsConstructor
public class CommentService {   // class start

    // DI
    private final CommentMapper commentMapper;

    // 5. 댓글 조회
    public List<CommentDto> commentView(int mno) {
        return commentMapper.commentView(mno);
    }   // func end


    // 6. 댓글 작성

    public boolean commentWrite( CommentDto dto) {
        return commentMapper.commentWrite(dto);
    }   // func end

    // 7. 댓글 삭제

    public boolean commentDelete( DeleteDto dto ) {
        int result = commentMapper.checkPassword(dto);

        if(result > 0) return commentMapper.commentDelete(dto.getCno());
        else return false;
    }   // func end
}   // class end
