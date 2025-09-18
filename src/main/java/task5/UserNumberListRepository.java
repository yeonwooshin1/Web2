package task5;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface UserNumberListRepository { // class start

    // 1. 등록
    @Insert("insert into userNumberList(userName, userNumber, userAge) " +
            "values ( #{userName} , #{userNumber} , #{userAge} )")
    int listWrite(UserNumberListDto dto);

    // 2. 전체조회
    @Select("select * from userNumberList ")
    List<UserNumberListDto> listPrint();

    // 3. 삭제
    @Delete("delete from userNumberList where id = #{ id }")
    int listDelete (int id);


}   // class end
