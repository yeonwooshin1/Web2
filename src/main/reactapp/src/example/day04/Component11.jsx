import { useEffect, useRef, useState } from "react"



/*
 * useRef 는 실행 전 부분 기억과 렌더링 할 필요는 없는데 값을 저장해두는 경우에 필요한 훅이다. => 자바 통신에도 유용
 * 전역변수로 선언하는거 보다 더 좋은 것은 각각 컴포넌트마다 독립적으로 관리할 수 있다.
 * 전역변수는 여러 컴포넌트들이 각각 쓰고 싶어도 하나의 전역이라 모두가 공유하니까 좀 한계점이 있다. 그치만 useRef는 그런 거 없다.
 */

export default function Component11 ( props ) {
    
    // [1] 렌더링 하지 않고 데이터를 참조하는 훅 vs useState

    const inputRef = useRef( null ) // 1. import { useRef } from "react" 또는 자동완성
                                    // 2. userRef( 초기값 )
    
    const 등록함수 = () => {         
        console.log( inputRef );              // 3. inputRef 현재 참조중인 객체 정보 { current : 참조값 }
        console.log( inputRef.current );      // 4. useeRef.current  : 참조값 , <input>
        inputRef.current.focus();             // - 포커스 ( 마우스커서 )
        console.log( inputRef.current.value );  // 단순 입력이라면 useState 보다 useRef 코드가 편리/단순하다.
    }   // onClick func end

    // [2] useState 와 useRef 차이점
    const [ count , setCount ] = useState( 0 );
    const countRef = useRef(count); // 1. useRef( 초기값 )
        // 2. count가 변경 될 때마다
    // useEffect ( () => {} , [] ) : 특정한 상태가 변경될 때마다 실행되는 훅 (함수)
        useEffect( ()=> {
            countRef.current = count;
        } , [count]);  // count 의 상태가 변경되면 해당 함수 (자동) 실행
    
    // [3] 
    const formRef = useRef();
    const 전송함수 = () => {
        console.log( formRef.current );                             // form 내용물들을 한 번에 가져와서 하너 번에 자바(스프링)에게 전송
        console.log( formRef.current.elements['textData'].value );  // formRef.current.elements[ name 속성명값 ]
    }

    return(<>
    
    <h3> useRef 예제1 : 입력 </h3>
    <input ref={ inputRef } />
    <button onClick={ 등록함수 }>등 록</button>

    <h3> useRef 예제2 : 이전값 기억 </h3>
    <p> 현재 count : { count } / 이전 count : { countRef.current } </p>
    <button onClick={ (e) => { setCount( count+1); }}> 증가 </button>

    <h3> useRef 예제3 : 입력 폼 </h3>
    <form ref={ formRef }>
        <input name="textData" />
        <select name="selectData"> <option value="">바나나</option> </select>
        <textarea name="textareaData"></textarea>
        <button onClick={ 전송함수 } type="button"> 폼 전송 </button>

    </form>
    </>)
}   // func end