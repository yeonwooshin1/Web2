package day17;

import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.Set;

@RestController
@RequestMapping("redis")
@RequiredArgsConstructor
public class RedisController {

    //// [1] 간단한 텍스트를 레디스 서버에 저장하기 ( 서비스 )
    //private final RedisTemplate redisTemplate;
    //private final RedisTemplate<String , Object> dtoRedisTemplate;
    //
    //// [2] 간단한 텍스트를 레디스 서버에 호출하기
    //@GetMapping("test")
    //public ResponseEntity<?> test(){
    //    // [ 저장 ] 레디스템플릿객체명.opsForValue().set( key , value );
    //    // { "유재석" : "90" } , { "강호동" : "80" }
    //    redisTemplate.opsForValue().set( "유재석" , "90" ); // 임의 데이터1
    //    redisTemplate.opsForValue().set( "강호동" , "80" ); // 임의 데이터2
    //
    //    // [ 모든 키 호출 ] 레디스템플릿객체명.keys("*")
    //    // [ 특정한 키 호출 ] 레디스템플릿객체명.opsForValue().get( key );
    //    Set<String> keys = redisTemplate.keys("*");
    //        // List vs Map vs Set 컬렉션 프레임워크란? 차이?
    //    List<Object> result = new ArrayList<>();
    //    for( String key : keys ) {
    //        result.add(redisTemplate.opsForValue().get(key));
    //    }   // for end
    //
    //    return ResponseEntity.ok(result);
    //}   // func end
    //
    //// 1. 등록
    //@PostMapping("")
    //private ResponseEntity<?> save(@RequestBody StudentDto studentDto){
    //    System.out.println("studentDto = " + studentDto);
    //    // 0. 중복없는 key 구성
    //    String key  = "student:"+studentDto.getSno();    // sno를 key로 조합함 , 예 ] student:1 , student:2
    //    // 1. 레디스에 전달 받은 값 저장
    //    // 예상 : {"student:1" : { 여러 dto안에 있는 요소들~ }}
    //    dtoRedisTemplate.opsForValue().set( key , studentDto ) ;
    //    return ResponseEntity.ok().body("[저장성공]");
    //}   // func end
    //
    //// 2. 전체 조회
    //@GetMapping("")
    //private ResponseEntity<?> findAll() {
    //    // 0. 조회할 key를 모두 가져온다.   * : 레디스내 모든 키 / xxxx:* : xxxx : 동일한 , * 자리는 임의의 문자 대응
    //    Set<String> keys = dtoRedisTemplate.keys("student:*");
    //
    //    List<Object> result = new ArrayList<>();
    //
    //    for(String key : keys ) { result.add( dtoRedisTemplate.opsForValue().get(key)); }
    //
    //    return ResponseEntity.ok(result);
    //}
    //
    //// 3. 개별 조회
    //@GetMapping("find")
    //private ResponseEntity<?> find(@RequestParam int sno) {
    //    String key = "student:"+sno;
    //
    //    Object result = dtoRedisTemplate.opsForValue().get(key);
    //    return ResponseEntity.ok(result);
    //}   // func end
    //
    //// 4. 삭제
    //@DeleteMapping("")
    //private ResponseEntity<?> delete(@RequestParam int sno) {
    //    // 키 값 지정
    //    String key = "student:"+sno;
    //
    //    // 해당 키에 대한 값 삭제
    //    boolean result = dtoRedisTemplate.delete(key);
    //
    //    // 삭제했는지 결과 반환
    //    return ResponseEntity.ok(result);
    //}   // func end
    //
    //// 5. 수정
    //@PutMapping("")
    //private ResponseEntity<?> update(@RequestBody StudentDto studentDto) {
    //    // 키 값 지정
    //    String key = "student:"+studentDto.getSno();
    //
    //    // 값이 없으면 그냥 수정 불가
    //    if (dtoRedisTemplate.opsForValue().get(key) == null ){
    //        System.out.println("유저 없음 수정 불가");
    //        return ResponseEntity.ok(false);
    //    }   // if end
    //
    //    // 덮어쓰기 가능
    //    dtoRedisTemplate.opsForValue().set(key , studentDto);
    //
    //    // 성공 반환
    //    return ResponseEntity.ok(true);
    //}   // func end
    //
    //
    //// * 인증코드 발급해서 레디스 유효기간 정하기
    //// TTL : 레디스에 저장된 엔트리(key-value) 을 특정한 기간(시간)이 되면 자동 삭제
    //@GetMapping("/auth/send")
    //private ResponseEntity<?> authSend(@RequestParam String phone) {
    //    // 1. key 구상 , "auth:고객전화번호"
    //    String key = "auth:"+phone; // 번호마다 1개씩 인증코드
    //
    //    // 난수 6자리
    //    String code = String.format("%06d" , new Random().nextInt(999999));
    //
    //    // 2. 레디스에 인증코드 저장하기
    //    redisTemplate.opsForValue().set(key , code , Duration.ofSeconds(20));   // 10초 줌
    //
    //    // API 이용하여 고객전화번호에게 인증코드 전송
    //    return ResponseEntity.ok().body("인증코드 발급 완료 : "+ code);
    //}   // func end
    //
    //@GetMapping("/auth/confirm")
    //public ResponseEntity<?> authConfirm(@RequestParam String phone , @RequestParam String code){
    //    String key  = "auth:" + phone;
    //
    //    Object redisCode =  redisTemplate.opsForValue().get(key);
    //
    //    if(redisCode == null ) {return ResponseEntity.ok("인증실패 : 코드 만료 혹은 발급 받지 않음");}
    //    else if (!redisCode.equals(code)) {
    //        return ResponseEntity.ok("코드 불일치");
    //    }
    //    else {
    //        redisTemplate.delete(key);  // 인증 성공시 삭제시킴
    //        return ResponseEntity.ok("인증 성공");
    //    }

    //}   // func end
}   // class end
