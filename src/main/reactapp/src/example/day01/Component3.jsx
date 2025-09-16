/*
    [ Web1 ] 백틱 템플릿 : 키보드 [tab] 위에 `(백틱) 기호 이용한 문자열 내 JS 코드 연결방법
        예시] let name = "유재석"
            `<div> ${ name } </div>`
    
    [ Web2 ] JSX 템플릿 : 리엑트내 자동 포함
        예시] let name = "유재석"
        return <div> {name} </div>
*/




// [1] 컴포넌트/함수 선언
const Component3 = ( props ) => {
    // --------------> JS 코드 START
    let name = "유재석"

    // --------------> JS 코드 END : return 전까지

    // --------------> return 부터는 JSX 문법
    return (<>
        { /* 주석 처리 */}
        <div> {name} 입니다. </div>
        <div> { 13+20 }</div>

        {/* 다른 컴포넌트 포함하면서 속성(props)/자료 전달 */}
        <SubCom1 key1 = "유재석" key2 = "40" />
        <SubCom1 key1 = "재사용" key2 = "10" />

        </>)
    // --------------> JSX 코드 END

}   // func end
export default Component3;

// [2] 컴포넌트/함수 선언2
const SubCom1 = ( props ) => {
    const obj = { name : "강호동" , age : 50 };
    console.log( obj );

    // 2-1 : props 확인
    console.log(props);
    // 2-2 : props 구조 분해
    const { key1 , key2 } = props;
        // vs key1 = props.key1;   key2 = props.key2; 는 동일하다.
        // but 리엑트에서는 구조 분해를 선호한다. *공식문서*

    return (<>
        <h4> { obj.name } 님의 나이 : { obj.age } </h4>
        <h4> { props.key1 } 님의 나이 : { props.key2 }</h4>
        <h4> { key1 } 님의 나이 : { key2 } </h4>
    </>)
}   // func end