package test06.model.mapper;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import test06.model.dto.DeleteDto;
import test06.model.dto.MovieDto;

import java.util.List;

@Mapper
public interface MovieMapper {  // mapper start

    // 1. 글 등록
    @Insert("insert into movieList(director, title, genre , introduction,  password) " +
            "values ( #{director} , #{title} , #{genre}, #{introduction}, #{password} )")
    int reviewWrite(MovieDto dto);

    // 2-1. 삭제할 게시물 비밀번호 확인
    @Select("select count(*) from movieList where mno = #{mno} and password = #{password}")
    int checkPassword(DeleteDto dto);

    // 2-2. 실제 삭제
    @Delete("delete from movieList where mno = #{ mno }")
    boolean reviewDelete (int mno);

    // 3-1. 글 전체 조회
    @Select("select * from movieList")
    List<MovieDto> reviewTotalView();

    // 3-2. 글 검색 조회
    // concat( , , , ) 안에 있는 것들을 합쳐줌.
    @Select("select * from movieList where title LIKE CONCAT('%', #{keyword}, '%') ")
    List<MovieDto> reviewKeywordView( String keyword );


    // 4. 글 개별 조회
    @Select("select * from movieList where mno = #{mno}")
    MovieDto reviewView(int mno);


}   // mapper end
