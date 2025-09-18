import axios from "axios";
import { useEffect, useState } from "react"

export default function Task5( props ){
    // 유저 정보
    const [ userName , setUserName ] = useState('');
    const [ userNumber , setUserNumber ] = useState('');
    const [ userAge , setUserAge ] = useState('');

    // 그걸 담아 보여줄 리스트
    const [ userNumberList , setUserNumberList ] = useState( [] );

    // 1. 등록
    const NumberListAdd = async() => {
        const newObj = { userName , userNumber , userAge };
        if( newObj.userName == "" || newObj.userNumber == "" || newObj.userAge == "" ) {
            alert("값이 유효하거나 빈 값이 아니여야 합니다.");
            return;
        }   // if end
        
        const res = await axios.post("http://localhost:8080/number" , newObj );
        
        console.log(res.data);
        // 등록후 조회 렌더링
        listPrint();

        // value 값 초기화
        setUserName(""); setUserNumber(""); setUserAge("");
        
    }   // func end

    // 2. 전체조회
    const listPrint = async() => {
        const res = await axios.get("http://localhost:8080/number");
        console.log(res.data);
        setUserNumberList(res.data);
    }   // func end

    // 2-1. useEffect로 처음 랜더링
    useEffect(()=> {listPrint()} , [])

    // 리스트 삭제
    const deleteList = async( id ) => {
        
        if(!confirm("삭제하시겠습니까?")){
            return;
        }   // if end

        const res = await axios.delete(`http://localhost:8080/number?id=${id}`);
        // filter로 재랜더링
        setUserNumberList(userNumberList.filter( (item) => { return item.id !== id } ) );

    }   // func end

    // 출력 return 부
    return (<>

    <h2>전화번호부</h2>
    {/* 입력, 등록 폼 */}
    <div>
        <input placeholder="성명"   value={ userName } onChange={(e) => {setUserName(e.target.value)}} />
        <input placeholder="연락처(예 : 010-1234-5678)" value={ userNumber } onChange={(e) => {setUserNumber(e.target.value)}} />
        <input placeholder="나이" value={ userAge } onChange={(e) => {setUserAge(e.target.value)}} />
        <button onClick={NumberListAdd}> 등록 </button>
    </div>
    {/* 리스트 폼, 삭제버튼 */}
    <ul>
        {
            userNumberList.map((item) => {
                return <li key={item.id}> 
                    성명:{item.userName} 
                    연락처:{item.userNumber} 
                    나이:{item.userAge} 
                    <button onClick={()=> deleteList(item.id)}> 삭제 </button>
                    </li>
            })
        }
    </ul>
    총{userNumberList.length}명
    
    </>)
} // func end 
