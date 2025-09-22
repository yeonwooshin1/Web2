package test06.model.mapper;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import task5.UserNumberListDto;
import test06.model.dto.CommentDto;
import test06.model.dto.DeleteDto;

import java.util.List;

@Mapper
public interface CommentMapper {  // mapper start

    // 5. 댓글 조회
    @Select("select * from commentList where mno = #{ mno } ")
    List<CommentDto> commentView(int mno);

    // 6. 댓글 작성
    @Insert("insert into commentList(comment, password , mno) " +
            "values ( #{comment} , #{password} , #{mno} )")
    boolean commentWrite(CommentDto dto);

    // 7-1. 삭제할 댓글 비밀번호 확인
    @Select("select count(*) from commentList where cno = #{cno} and password = #{password}")
    int checkPassword(DeleteDto dto);

    // 7-2. 실제 삭제
    @Delete("delete from commentList where cno = #{ cno }")
    boolean commentDelete (int cno);

}   // mapper end
