package test06.model.dto;

import lombok.*;

@Setter
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DeleteDto {    // dto start

    private int cno;            // 댓글 식별넘버
    private int mno;            // 영화 식별넘버
    private String password;    // 삭제할 비밀번호

}   // dto end
