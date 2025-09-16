package day07;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardService { // class start

    // DI 등록
    private final BoardRepository boardRepository;

    // 1. 등록
    public int boardWrite( BoardDto boardDto ){
        return boardRepository.boardWrite(boardDto);
    }   // func end

    // 2. 개별 조회
    public BoardDto boardFind( int bno ) {
        return boardRepository.boardFind(bno);
    }   // func end

    // 3. 전체 조회
    public List<BoardDto> boardPrint () {
        return boardRepository.boardPrint();
    }   // func end

    // 4. 삭제
    public int boardDelete (int bno) {
        return boardRepository.boardDelete(bno);
    }   // func end

    // 5. 수정
    public int boardUpdate ( BoardDto boardDto , int bno) {
        BoardDto dto = new BoardDto();
        dto.setBno(bno);
        dto.setBwriter(boardDto.getBwriter());
        dto.setBcontent(boardDto.getBcontent());
        return boardRepository.boardUpdate(dto);
    }   // func end


}   // class end
