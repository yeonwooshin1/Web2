package day08;

class TestService { // class start
    // 만약에 식당 과 학원 에서 동일한 코드를 실행한다면
    // -> 방법1) 열체크 함수화, 방법2) 관점지향 프로그래밍 AOP

    // 메소드1
    public void enter1(){
        System.out.println("[코로나] 열 체크");
        System.out.println(">> 식당 입장 <<");
    }   // func end

    // 메소드2
    public void enter2(){
        System.out.println("[코로나] 열 체크");
        System.out.println(">> 학원 입장 <<");
    }   // func end

}   // class end

public class Example1 { // class start
    public static void main(String[] args) {
        TestService testService = new TestService();    // 메소드1/2 실행하기 위한 객체 생성
        testService.enter1();                           // 메소드1 호출
        testService.enter2();                           // 메소드2 호출
    }   // main end
}   // class end
