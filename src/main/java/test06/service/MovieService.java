package test06.service;


import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import test06.model.dto.MovieDto;
import test06.model.mapper.MovieMapper;

import java.util.List;

@Service
@AllArgsConstructor
public class MovieService { // class start

    // DI 주입
    private final MovieMapper movieMapper;


    // 1. 글 등록

    public int reviewWrite( MovieDto dto ) {
        int result = movieMapper.reviewWrite(dto);

        return
    }   // func end


    // 2. 글 삭제

    public boolean reviewDelete( int mno) {
        boolean result = movieMapper.reviewDelete(mno);

        return
    }   // func end

    // 3. 글 전체 조회 + 검색 조회

    public List<MovieDto> reviewTotalView(String Keyword) {


        List<MovieDto> result1 = movieMapper.reviewTotalView();
        List<MovieDto> result2 = movieMapper.reviewKeywordView(Keyword);

        return
    }   // func end

    // 4. 글 개별 조회

    public MovieDto reviewView(MovieDto dto) {


        MovieDto result = movieMapper.reviewView(dto);

        return
    }   // func end


}   // class end
