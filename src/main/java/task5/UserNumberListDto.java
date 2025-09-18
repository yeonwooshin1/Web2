package task5;


import lombok.*;

@Setter
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserNumberListDto {    // class start

    private int id; // pk
    private String userName;    // 유저이름
    private String userNumber;  //  유저 번호
    private int userAge;         // 유저 나이

}   // class end
