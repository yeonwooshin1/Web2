// 1. 리액트 라이브러리의 최초(ROOT) 생성하는 함수 IMPORT
import { createRoot } from 'react-dom/client'
// 2. ubdex.html 에서 root 마크업 가져오기
const root = document.querySelector('#root');
// 3. 가져온 root 마크업을 createRoot 함수의 매개변수로 전달
const create = createRoot( root );

// ===== 최초 렌더링할 컴포넌트 ======
// 4. 렌더링 (화면출력) 할 컴포넌트 가져오기

// 5. 컴포넌트 렌더링하기
// create.render( <App/> );

// day 01
import Component1 from './example/day01/Component1';

// render은 한 번만 가능하다!
// create.render(<Component1/>)
import Component2 from './example/day01/Component2';
// create.render( <Component2/> )

import Component3 from './example/day01/Component3';
// create.render(<Component3/>)

import Task2 from './example/day01/Task2';
// create.render( <Task2 />);

// // day 02
import Component4 from './example/day02/Component4.jsx';
// create.render( <Component4 /> )

import Component5 from './example/day02/Component5.jsx';
// create.render(<Component5/>);

import Component6 from './example/day02/Component6.jsx';
// create.render(<Component6/>);

import Component7 from './example/day02/Component7.jsx';
// create.render(<Component7/>);

import Task3 from './example/day02/Task3.jsx';
//create.render(<Task3/>);

import Task4 from './example/day02/Task4.jsx';
// create.render(<Task4/>);

import Component8 from './example/day03/Component8.jsx';
// create.render(<Component8/>);

import Component9 from './example/day03/Component9.jsx';
// create.render(<Component9/>);

import Component10 from './example/day03/Component10.jsx';
// create.render(<Component10/>);

import Task5 from './example/day03/Task5.jsx';
// create.render(<Task5/>);

import Component11 from './example/day04/Component11.jsx';
// create.render(<Component11/>);

import Component12 from './example/day04/Component12.jsx';
// create.render(<Component12/>);

import Task6 from './example/day04/Task6.jsx';
// create.render(<Task6/>);

// import Movie from './test/Movie.jsx';
// create.render(<Movie/>);

// // day05
// import Component13 from './example/day05/Component13.jsx'
// // [1] 내가 만든 스토어(여러개 상태(전역변수) 를 갖는 저장소) 불러오기
// import store from './example/day05/store.jsx'
// // [2] store 를 사용할 곳에 store 공급 해주기 , <Provider store={ 내가만든스토어 } >
// import { Provider } from 'react-redux';
// // * 주의할점 : dispath 보다 먼저 'Provider'실행 되어야 한다. // 관례적으로 main.jsx에서 공급한다.
// create.render(
//     <Provider store={ store }>
//         <Component13 />
//     </Provider>
// );

// import App from './example/day05/실습7/App.jsx'
// import { Provider } from 'react-redux';
// import store from './example/day05/실습7/store/store.jsx';
// create.render( 
//     // [1] 내가 만든 store 를 root 컴포넌트에 공급하여 모든 컴포넌트가 사용할수 있도록 *전역변수*
//     <Provider store={ store } >
//         <App /> 
//     </Provider>
// );


import App from './example/day06/실습8/App.jsx';
import { Provider } from 'react-redux';
import store, { persistor } from './example/day06/실습8/store/store.jsx';
import { PersistGate } from 'redux-persist/integration/react';

create.render(
    <Provider store={store}>
        <PersistGate loading = { null } persistor={ persistor } >
            <App/>
        </PersistGate>
    </Provider>
);