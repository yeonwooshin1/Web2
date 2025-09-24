/*
    슬라이스 : 상태(state), 리듀서(reducer), 액션(action) 정의하는 곳 
    createSlice
*/
import { createSlice } from '@reduxjs/toolkit'

//[1] 상태의 초기값 정의 , 로그인여부 , 로그인회원정보
const initialState = { isAuthenticated : false , userInfo : null }
//[2] 슬라이스 정의
const userSlice = createSlice({
    name : "user" , // 슬라이스(상태) 명    // slice 이름 (액션 type 접두사로 사용 → user/login)
    initialState , // 상태의 초기값 
    reducers : { // 여러개의 상태 변경 함수 정의한곳, { 함수명 : (state)=>{} , 함수명 : (state)=>{} }   // 내가 정의한 case reducer들
        login : ( state , action )=>{  
            
            // state : 현재 slice의 상태 객체
            // action : dispatch(login(payload)) 했을 때 전달된 액션 객체
            // action.payload 안에 dispatch 때 넣은 값이 들어감

            state.isAuthenticated = true; // 로그인 여부 true 로 변경 
            // action 할때 전달되는 매개변수들을 payload 안에 값이 들어있다.
             // 예] dispatch( login( "안녕" ) ) , payload = "안녕"
            state.userInfo = action.payload;
        },
        logout : ( state ) => { 
            state.isAuthenticated = false; // 로그인 여부 false 로 변경 
            state.userInfo = null; // 로그인회원정보 null 로 변경 
        }
    }  
})
// [3] store 에 저장할수 있게 export 해주기 
// -->> export default userSlice.reducer
// → slice 객체 전체를 내보내는 게 아니라,
// → slice 안에 있는 reducer(최종 reducer 함수)만 꺼내서 default export 하는 것.
// → 이유: store는 이 최종 reducer 함수를 등록해야 동작하기 때문.
export default userSlice.reducer // 현재 정의한 리듀서(reducers)들을 store 등록 예정 

// [4] 다른 컴포넌트에서 액션이 가능하도록 login,logout export해주기
// -->> export const { login , logout } = userSlice.actions
// → slice 객체 안에는 actions라는 key가 있음.
// → actions 안에는 내가 정의한 case reducer 이름과 똑같은 action creator 함수들이 자동으로 들어가 있음.
//    예: login(payload) => { type: "user/login", payload }
// → 컴포넌트에서 dispatch할 때는 이 action creator를 import해서 사용해야 함.
export const { login , logout } = userSlice.actions

