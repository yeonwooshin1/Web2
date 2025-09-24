import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice.jsx"

export default function MenuPage (props ) {
    
    // 음료 샘플 데이터 , 실제로는 axios 해서 받아올것.
    const menu = [
        { id: 1, name: "아메리카노", price: 3000 }, 
        { id: 2, name: "카페라떼", price: 4000 },
        { id: 3, name: "카푸치노", price: 4500 },
    ];

    // store에 보낼 dispatch 함수 정의
    const dispatch = useDispatch();

    // 해당 물품 담는 함수
    const addItem = (item) => {
        
        if(!confirm("장바구니에 해당 물품을 추가하시겠습니까?")) return;

        // 담을 객체 내용 생성
        const obj = { id : item.id , name : item.name , price : item.price };

        dispatch(add(obj));

        alert("해당 물품을 추가했습니다.");
    }   // onClick end

    return (<>
        <h3> 음료 키오스크</h3>
        <table>
            <thead>
                <tr><th>음료 이름</th><th>가격</th><th>비고</th></tr>
            </thead>
            <tbody>
                { menu.map((item) => { 
                return <tr key={item.id}><td>{item.name}</td> <td>{item.price} 원</td> <td> <button onClick={()=> {addItem(item)}}> 담기 </button></td></tr>   
            })}
            </tbody>
        </table>
        
    </>)
}   