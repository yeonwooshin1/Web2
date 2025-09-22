package test06.model.dto;


import lombok.*;

@Setter
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MovieDto { // dto start

    private int mno;                // 영화넘버 PK

    private String title;           // 영화 제목
    private String director;        // 감독명
    private String genre;           // 장르명
    private String introduction;    // 간단한 소개
    private String keyword;         // 검색 키워드
    private String password;        // 삭제할 때 비밀번호

}   // dto end
