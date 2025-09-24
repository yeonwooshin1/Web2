import { createSlice } from '@reduxjs/toolkit'

// 전역변수 초기값
// persist 객체화 때문에 배열 형식이 아닌 객체 형식이 필요해서 수정!
const initialState = { list: [] } ;

// cartSlice 정의
const cartSlice = createSlice({
    name : "cart" ,
    initialState ,
    reducers : {
        // 배열 안에 객체 넣기
        add : (state , actions) => { 
            // 페이로드에 받아 온 거 정의 (구조 분해)
            const { id , name , price } = actions.payload;

            // 해당 장바구니에 id가 있는지 확인 한다.  
            const found = state.list.find(i => i.id === id);

            // 만약 있으면 해당 객체 수량 1 증가 , 없으면 그 객체의 초기값을 정해서 state에 push한다.
            if (found) {
                found.quantity += 1;       
            } else {
                state.list.push({ id, name, price, quantity: 1 });
            }   // if end

        }   , 
        // 구매시 배열 초기화
        purchase : (state) => { state.list = []; } ,

        // 삭제시 해당 객체 배열에서 삭제
        deleteItem : (state , actions) => { 
            // 해당 삭제할 id 가져오기
            const id = actions.payload;
            // state 상태 변경 => 배열에서 해당 객체 삭제 , filter로 해당 배열 안 객체 삭제
            state.list =  state.list.filter(item => item.id !== id);
        }
    }
});


// store 에 reducer 객체 export
export default cartSlice.reducer;

// Component 들에게 action 객체 export
export const { add , deleteItem , purchase  } = cartSlice.actions;


