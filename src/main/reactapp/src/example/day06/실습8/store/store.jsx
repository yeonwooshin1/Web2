import storage from 'redux-persist/lib/storage'; // localStorage 사용
import { persistStore, persistReducer } from 'redux-persist';
import cartSlice from './cartSlice';
import { configureStore } from '@reduxjs/toolkit';

// localStorage 에 'user' 라는 이름으로 상태 저장
const persistConfig = { key : 'cart' , storage } 
// persist reducer 생성 
const persistedReducer = persistReducer( persistConfig , cartSlice );

const store = configureStore( {
    reducer : {
        cart : persistedReducer // 퍼시스턴스 *적용후*
    }
})

// default export
export default store ;
// export persist store 
export const persistor = persistStore( store );