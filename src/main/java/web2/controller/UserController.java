package web2.controller;

import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import web2.model.dto.UserDto;
import web2.service.UserService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")    // 공통 URL 정의
public class UserController {   // class start

    // 의존성 주입
    private final UserService userService;

    // 1. 회원가입
    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody UserDto userDto) {
        int result = userService.signup( userDto );
        return ResponseEntity.ok( result ); // ok (200 성공의 의미 )
    }   // func end

    // 2. 로그인 ( 세션 자바 웹서버에 임시저장소 )
    @PostMapping("/login")
    public ResponseEntity<?> login(UserDto userDto , HttpSession session) {
        UserDto result = userService.login(userDto);
        if(result != null) {
            session.setAttribute("loginUser" ,result.getUid());
        }   // if end

        return ResponseEntity.ok(result);
    }   // func end



}   // class end
