import { useState } from "react"

export default function Task4( props ){
    // 유저 정보
    const [ userName , setUserName ] = useState('');
    const [ number , setNumber ] = useState('');
    const [ userAge , setUserAge ] = useState('');
    // 그걸 담아 보여줄 리스트
    const [ userNumberList , setUserNumberList ] = useState( [] );
    // 리스트 추가
    const NumberListAdd = () => {
        const newObj = { id: userNumberList.length + 1,  userName , number , userAge };
        setUserNumberList([...userNumberList , newObj]);
    }   // func end
    // 리스트 삭제
    const deleteList = ( id ) => {
        setUserNumberList(userNumberList.filter( (item) => { return item.id !== id } ) );
    }   // func end


    return (<>
    <h2>전화번호부</h2>
    {/* 입력 + 등록 폼 */}
    <div>
        <input placeholder="성명"   value={ userName } onChange={(e) => {setUserName(e.target.value)}} />
        <input placeholder="연락처(예 : 010-1234-5678)" value={ number } onChange={(e) => {setNumber(e.target.value)}} />
        <input placeholder="나이" value={ userAge } onChange={(e) => {setUserAge(e.target.value)}} />
        <button onClick={NumberListAdd}> 등록 </button>
    </div>
    {/* 리스트 폼 + 삭제 */}
    <ul>
        {
            userNumberList.map((item) => {
                return <li key={item.id}> 
                    성명:{item.userName} 
                    연락처:{item.number} 
                    나이:{item.userAge} 
                    <button onClick={()=> deleteList(item.id)}> 삭제 </button>
                    </li>
            })
        }
    </ul>
    총{userNumberList.length}명
    </>)
} // func end 
