package day08;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;


// [4] AOP 커스텀 ,
@Aspect // AOP 클래스를 스프링 AOP 컨테이너 에 등록 , AOP 설정하겠다는 어노테이션
@Component  // AOP 클래스를 스프링 빈(객체) 컨테이너 에 등록
class AopClass {    // class start

    // [4-1] 애플리케이션 내 AopService 내 모든 메소드가 실행되면 같이 실행
    // @Before("execution( 경로와 조건 )")
    // * : 모든 리턴 타입의 메소드들
    // java 이하 경로부터 : 적용할 메소드가 위치한 패키지/파일 경로
        // -> 같은 패키지 : 클래스명만 작성
        // -> 다른 패키지 : example.day08.AopService
    // .메소드명
        // .*       : 해당 클래스내 모든 메소드 에 적용
        // .enter1  : 해당 클래스내 enter1() 에만 적용
    // ( 매개변수 )
        // .(..) : 해당 메소드의 모든 매개변수 를 갖는 곳에 적용
        // .enter1( int , boolean ) : 지정한 매개변수를 갖는 매소드만 적용
    @Before("execution(* AopService.*(..) )")
    public void check1 () {
        System.out.println("[코로나] 열 체크");
    }   // func end

    // [4-2]
    @After("execution(* AopService.*(..) )")
    public void check2(){
        System.out.println("[퇴장]");
    }   // func end

    // [4-3]
    // @After("execution( 리턴타입 패키지/클래스경로.메소드명(매개변수 타입 , 매개변수 타입) )")
    @After("execution(* day08.AopService.enter1(..))")
    public void check3(){
        System.out.println("[4-3] enter1 에서 AOP");
    }   // func end

    // [4-4]    // && args( 인자들 ) 매개변수 값들을 연결/바인딩 할 이름 정의
    @Before("execution( boolean day08.AopService.enter3( String ) ) && args( name ) ")
    public void check4( String name ){
        System.out.println("[4-4] enter3 에서 AOP [매개변수] : " + name);
    }   // func end

    // [4-5] @AfterReturning( returning = "바인딩 할 변수명" ) 서비스가 리턴값을 반환받을 수 있다.
    @AfterReturning( value = "execution( boolean day08.AopService.enter3(..))" ,
    returning = "result" )  // 리턴값을 매핑/바인딩 할 이름 정의
    public void check5(boolean result){
        System.out.println("[4-5] enter3 에서 AOP [반환값] : " + result);
    }   // func end

    // [4-6] 개발자가 직접 메소드를 실행하는 시점
    @Around("execution( * day08.AopService.enter3(..) ) ")
    public Object check6( ProceedingJoinPoint joinPoint ) throws Throwable {
        // 리턴타입을 *로 했으므로 모든 자료들을 저장하기 위해 Object
        // 매개변수에는 'ProceedingJoinPoint' 라는 비지니스로직과 조합
        System.out.println( "[4-6] joinPoint 객체 : " + joinPoint );    // 1. 객체 확인
        System.out.println( "[4-6] joinPoint 가 실행할 메소드명 : " + joinPoint.getSignature() ); // 2. 해당 AOP 메소드를 실행한 대상(메소드) 확인
        System.out.println( "[4-6] joinPoint 가 실행할 메소드의 인자들 : " + Arrays.toString(joinPoint.getArgs()) );       // 3. 실행한 대상(메소드) 매개변수의 인자들(배열) 확인


        Object result =     // 실행 결과를 반환 받을 수 있다.
                joinPoint.proceed();    // 4. 실행할 대상 메소드를 직접 실행 ( 실행 시점 커스텀 가능 )
        System.out.println( "실행후 메소드의 반환값 : " + result );

        return result;              // 5. 실행한 대상 메소드의 그대로 리턴해야 한다.
    }   // func end

    /// *로 매개변수나 반환값을 주는 경우에는 Aop 메소드 매개변수 타입은 Object로 해줘서 타입을 지정하지 않아도 쓸 수 있게 해준다.!!!!!

}   // class end

// [3] 간단한 서비스
@Service class AopService { // class start

    public void enter1 () {
        System.out.println("학원 입장");
    }   // func end
    public void enter2 () {
        System.out.println("식당 입장");
    }   // func end

    public boolean enter3 (String name) {
        System.out.println(">> 헬스장 입장 <<");
        return true;    // 임의의 데이터
    }   // func end

}   // class end

// [2] 간단한 http 컨트롤러
@RestController class AopController {
    @Autowired  AopService aopService;

    @GetMapping("/day08/aop")
    public void method(){
        aopService.enter1();
        aopService.enter2();
        aopService.enter3("유재석");
    }   // func end

}   // controller end

// [1] 스프링 시작 클래스
@SpringBootApplication
public class Example2 { // class start

    public static void main(String[] args) {
        SpringApplication.run(Example2.class);
    }
}   // class end
// AOP : 관점 지향 프로그래밍
// 부가 기능을 하나로 모듈화 해서 핵심비지니스 로직 분리
// 로그(기록) , 트렌젝션( SQL 시작/종료 ) , 보안 ( 인증 / 권한 )

// 1. AOP 라이브러리 설치
// implementation 'org.springframework.boot:spring-boot-starter-aop' 설치


