import { useNavigate } from "react-router-dom";
import { purchase , deleteItem } from "../store/cartSlice"
import { useDispatch , useSelector } from "react-redux"


export default function CartPage (props ) {
    
    // store.jsx에 있는 reducer에 있는 전역변수 가져오기
    // 객체에 있는 list 배열을 가져온다. 구조분해 안함.
    // useSelector의 매개변수는 store에 정의된 여러 reducer 사이에서 .(reducer명)을 해서 가져오는 것임.
    const cartList = useSelector( ( state )=> state.cart.list );
    
    // store에 보낼 dispatch 함수 정의 
    const dispatch = useDispatch();

    // 페이지 이동에 필요한 useNavigate 함수 정의
    const navigate = useNavigate();

    // 총 가격 계산
    const totalQty = () => {
        // 초기값 0 설정
        let total = 0;
        // forEach 로 수량 x 가격 해서 더해줌
        cartList.forEach(( item ) => total += item.quantity * item.price );
        // total return
        return total; 
    }   // func end

    // 항목 삭제 버튼
    const del = (id) => {
        // 물어봄
        if(!confirm("해당 물품을 삭제하시겠습니까?")) return;
        // 해당 dispatch로 deleteItem 함수에 id 매개변수 넣어줌
        dispatch(deleteItem(id));
        alert("해당 물품이 삭제되었습니다.");
    }   // onClick end


    // 구매 버튼
    const buyItem = () => {
        // 물어봄
        if(!confirm("구매하시겠습니까?")) return;
        // 해당 dispatch(=> store 함수)로 purchase(=> slice 리듀서 함수) 함수 실행
        dispatch(purchase());
        if(!confirm("구매가 완료되었습니다 메인페이지로 이동하시겠습니까?")) return;
        else { navigate("/");}          // 이동 한다고 하면 이동~ 
    }   // onClick end

    return (<>
        <h3> 장바구니 </h3>
        <table>
            <thead>
                <tr><th>음료 이름</th><th>가격</th><th>수량</th><th>비고</th></tr>
            </thead>
            <tbody>
                {cartList.map(item => (
                    <tr key={item.id}><td>{item.name}</td><td>{item.price} 원</td><td>{item.quantity} 개</td><td><button onClick={() => del(item.id)}>삭제</button></td></tr>
                ))}
            </tbody>
        </table>

        <h5> 총 가격 : {totalQty()} 원</h5> 

        <button onClick={buyItem}> 구매하기 </button>

    </>)
}   