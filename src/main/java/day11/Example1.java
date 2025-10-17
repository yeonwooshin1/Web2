package day11;

// [2] 인터페이스 : 주로 추상메소드를 (구현부없는) 정의한다.
interface Calculator {
    // 추상 메소드
    int plus( int x , int y);

}   // inter end

public class Example1 { // class start

    // [1] 일반 static 메소드 정의
    public static int plus( int x , int y) { return x + y ;}

    public static void main(String[] args) {    // main start

        // [1] 일반 메소드 호출 : static 일때 객체가 필요없다.
        int result = plus(1 ,3);
        System.out.println("[1] 일반 메소드 호출 : " + result );

        // [2] 인터페이스 추상메소드 호출 : 1) 구현체 2) 익명구현체
        // 1) implement 구현체 만든다.
        // 2) 익명구현체(1회성) : new 인터페이스(){ 구현 }
        Calculator calc = new Calculator() {
            // 오버라이딩 : 상속 또는 추상 메소드를 재구현
            @Override
            public int plus(int x, int y) {
                return x + y ;
            }   // func end
        };
        int value1 = calc.plus( 1 , 3 );
        System.out.println("[2] 익명 구현체 메소드 호출 : " + value1);

        // [3] 람다식 으로 익명 구현체 , java 8 이상 , ( 매개변수 ) -> { 구현부 }
        Calculator calc2  = ( x , y ) -> x + y ;

        int value2 = calc.plus( 1 , 3 );
        System.out.println("[2] 익명 구현체 메소드 호출 : " + value2);

    }   // main end
}   // class end
