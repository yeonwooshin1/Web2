package task5;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserNumberListService {    // class start
    // DI 등록
    private final UserNumberListRepository userNumberListRepository;

    // 1. 등록
    public int listWrite(  UserNumberListDto dto ){
        return userNumberListRepository.listWrite(dto);
    }   // func end

    // 2. 전체 조회
    public List<UserNumberListDto> listPrint () {
        return userNumberListRepository.listPrint();
    }   // func end

    // 3. 삭제
    public int listDelete (int id) {
        return userNumberListRepository.listDelete(id);
    }   // func end
}   // class end
