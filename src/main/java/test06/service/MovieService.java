package test06.service;


import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import test06.model.dto.DeleteDto;
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
        return movieMapper.reviewWrite(dto);
    }   // func end


    // 2. 글 삭제

    public boolean reviewDelete( DeleteDto dto) {
        int result = movieMapper.checkPassword(dto);

        if(result > 0) return movieMapper.reviewDelete(dto.getMno());
        else return false;

    }   // func end

    // 3. 글 전체 조회 + 검색 조회

    public List<MovieDto> reviewTotalView(String keyword) {

        if(keyword != null && !keyword.isEmpty()){
            return movieMapper.reviewKeywordView(keyword);
        }   // if end
        return movieMapper.reviewTotalView();
    }   // func end

    // 4. 글 개별 조회

    public MovieDto reviewView(int mno) {
        return movieMapper.reviewView(mno);
    }   // func end


}   // class end
