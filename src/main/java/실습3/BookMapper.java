package 실습3;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Update;

import java.time.LocalDateTime;

@Mapper
public interface BookMapper {   // interface start

    // 수량 감소 로직
    @Update("update books set stock = stock - 1 where id = #{id} and stock > 0")
    int rentBook (int id);

    // 대출 로그 작성 로직
    @Insert("insert into rentals( book_id , member ) values (#{ bookId }, #{ member })")
    // 인자값이 두 개 이상일 때는 @Param 으로 명시를 해줘야 됨
    int setRentalLog(@Param("bookId") int bookId, @Param("member")String member);


    // 반납일 지정해주고 반납 sql 문 작성
    @Update("update rentals set return_date = #{now} where book_id = #{ bookId } " +
            "and member = #{ member } and return_date is null")
    // 인자값이 두 개 이상일 때는 @Param 으로 명시를 해줘야 됨
    int setReturnLog(@Param("bookId") int bookId, @Param("member")String member , @Param("now")LocalDateTime now);

    // 수량 증가 로직
    @Update("update books set stock = stock + 1 where id = #{ id }")
    int returnBook(int id);

}   // interface end
