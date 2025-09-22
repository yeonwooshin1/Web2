package test06.model.dto;

import lombok.*;

@Setter
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CommentDto {   // dto start

    private int cno;            // 코멘트넘버 PK
    private int mno;            // 영화넘버 FK

    private String comment;     // 코멘트명
    private String password;    // 댓글 삭제할 때 쓰는 비밀번

}   // dto end
