import axios from "axios";
import { useEffect, useState } from "react";


// =========== 스프링 서버내 day07(boardService13) =============
export default function Component10 (props) {

    // axios 
    // 1. 등록
    const boardWrite = async() => {
        const postRes = await axios.post("http://localhost:8080/board" , bcon);
        console.log(postRes.status);
        console.log(postRes.data);
        // 등록 될 때마다 boardPrint() 랜더링
        boardPrint();
        // 초기화
        setBcon( { bwriter: "" , bcontent: "" } );

    }   // post axios end

    // 3. 전체조회 
    const boardPrint = async() => {
        const getRes = await axios.get("http://localhost:8080/board/all")
        console.log(getRes);
        // set에 넣어줌
        setBoard( getRes.data );
    }   // get axios end

    // 4. 삭제
    const boardDelete = async( bno ) => {
        if(!confirm("삭제하시겠습니까?")){
            return;
        }   // if end
        
        const delRes = await axios.delete(`http://localhost:8080/board?bno=${bno}`)
        // 재랜더링
        setBoard(board.filter((item)=>{return item.bno !== bno}));

    }   // delete axios end
    

    // 1-1. 등록 입력 받은 데이터들을 관리하는 useState 가 필요하다.
    const [ bcon , setBcon ] = useState( { bwriter : "" , bcontent : "" } );
    
    // 1-2. 등록 value 값 객체에 저장
    const setValue = (e) => {
        // 객체에 해당 dom에 target이 되는 name과 value를 구조 분해한다.
        const { name , value } = e.target;
        // 배열을 써서 감싸주면 그것이 객체의 key가 됨 => [name] key를 설정하는 값
        // setBcon을 하는데 기존 ( ... => 스프레드 연산자 ) 객체에 [name] key와 그에 맞는 value를 덮어씀.
        setBcon( {...bcon , [name] : value })
    }   // func end

    // 3-1. 전체 조회들을 관리하는 useState가 필요하다.
    const [ board , setBoard ] = useState([]);
    // 3-2 useEffect 사용 , 최초 한 번 실행시 boardPrint() 해줌 , useEffect 안하면 무한 루프에 빠짐 = 무한 랜더링
    useEffect(()=> {boardPrint()}, [])

    return (<>
    {/* 1. 등록 폼 */}
    <h3> 스프링 서버의 boardService13(day07) 통신 </h3>
    작성자 : <input placeholder="홍길동" name="bwriter" value={bcon.bwriter} onChange={(e)=>{ setValue(e) }} />
    내용 : <input placeholder="아버지라 부르지 못하고.." name="bcontent" value={bcon.bcontent} onChange={(e)=> { setValue(e) }} />
    <button onClick={boardWrite}> 등록 </button>
    {/* 3. 전체 조회 폼
        4. 개별 삭제 버튼 */}
    { board.map((item)=>{
        return <div> bno : {item.bno} , 작성자 : {item.bwriter} , 내용 : {item.bcontent} 
                    <button onClick={()=> {boardDelete(item.bno)}}>삭제</button>
            </div>
    })}
    
    </>)
}   // func end