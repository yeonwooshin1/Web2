package day07;


import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper // 해당 인터페이스를 스프링 컨테이너 등록, xxxDAO 역할 대신 한다.
public interface BoardRepository {  // interface start

    // 1. 등록
    @Insert("insert into board(bcontent, bwriter)" +
            " values( #{bcontent} , #{bwriter} )" )
    int boardWrite(BoardDto boardDto);

    // 2. 개별조회
    @Select("select bcontent , bwriter from board where bno = #{ bno }")
    BoardDto boardFind(int bno);

    // 3. 전체조회
    @Select("select * from board ")
    List<BoardDto> boardPrint();

    // 4. 삭제
    @Delete("delete from board where bno = #{ bno }")
    int boardDelete (int bno);

    // 5. 수정
    @Update("update board " +
            " set bcontent = #{ bcontent } , bwriter = #{ bwriter } " +
            " where bno = #{ bno } ")
    int boardUpdate(BoardDto boardDto );

}   // interface end
