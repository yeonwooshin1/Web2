export default function Component5(props) {
    const items = [ "사과" , "바나나" , "딸기" ];
    // return 안됨
    const newItems = items.forEach((item) => { console.log(item); return item;} )
    console.log(newItems);
    // return 됨
    const newItems2 = items.map((item)=> { console.log(item); return item;} )
    console.log(newItems2);

    // 3. 함수 : 변수의 변화를 주는 함수
    const onAdd = () => {
        items.push('수박'); console.log(items);
    }
    // *************** 함수(컴포넌트)는 한 번 호출에 한 번 리턴 *********************
    // 해결책은 : return 다시 하자 --> 함수 다시 호출 --> 재렌더링 : 훅(useState)
    return (<>
        <h3> JSX 반복문, forEach 반복문 없다 vs map : return 있다. </h3>
        <ul>
            {
                items.map((item) => { return <li> { item } </li>})
            }
        </ul>
        순수 JS 방식 : <button onclick= "onAdd()" > item 추가 </button>
        REACT 방식 : <button onClick={ onAdd }> item 추가 </button>
    </>)
}   // func end

