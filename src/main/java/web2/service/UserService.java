package web2.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import web2.model.dto.UserDto;
import web2.model.mapper.UserMapper;

@Service
@RequiredArgsConstructor
public class UserService {

    // 의존성 주입
    private final UserMapper userMapper;
    // 비크립트 라이브러리 호출
    private final BCryptPasswordEncoder encoder;

    // 회원가입
    public int signup(UserDto userDto) {
        // 회원가입 전 비크립트 암호화 하기
        userDto.setUpwd(encoder.encode(userDto.getUpwd()));

        userMapper.signup(userDto);
        if( userDto.getUno() > 0) {
            return userDto.getUno();    // uno
        } else {
            return 0;
        }   // if end
    }   // func end



    // 2 로그인 : 암호문을 해독하여 평문을 비교하는 방식이 아닌 비교할대상을 암호화해서 암호문 비교
    public UserDto login( UserDto userDto ){
        // 2-1 : 현재 로그인에서 입력받은 아이디의 계정이 있는지 확인
        UserDto result = userMapper.login( userDto.getUid() );
        if( result == null ){ return null; }
        // 2-2 : 만약에 입력받은 아이디의 계정이 존재하면 , 입력받은 비밀번호와 암호화된 비밀번호 비교
        // 평문비교가 아니므로 == .equeals 불가능하다.
        // 암호문 비교 방식인 .matches( 비교할비밀번호평문 , 암호문 )
        boolean result2 = encoder.matches( userDto.getUpwd() , result.getUpwd() );
        if( result2 == true ){ // 비밀번호가 일치하면 로그인 성공
            result.setUpwd( null ); // 비밀번호 성공시 반환되는 계정에는 비밀번호 제외
            return result;
        }else{ return null; }
    } // m end

    /*
    회원의 비밀번호를 암호화
    *
    *
    *
    *
    * */


}   // class end
