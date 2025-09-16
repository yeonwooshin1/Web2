// 1. 리액트 라이브러리의 최초(ROOT) 생성하는 함수 IMPORT
import { createRoot } from 'react-dom/client'
// 2. ubdex.html 에서 root 마크업 가져오기
const root = document.querySelector('#root');
// 3. 가져온 root 마크업을 createRoot 함수의 매개변수로 전달
const create = createRoot( root );

// ===== 최초 렌더링할 컴포넌트 ======
// 4. 렌더링 (화면출력) 할 컴포넌트 가져오기
// import App from './App.jsx'; 

// 5. 컴포넌트 렌더링하기
// create.render( <App/> );

// day 01
// import Component1 from './example/day01/Component1';

// render은 한 번만 가능하다!
// create.render(<Component1/>)
// import Component2 from './example/day01/Component2';
// create.render( <Component2/> )

// import Component3 from './example/day01/Component3';
// create.render(<Component3/>)

import Task2 from './example/day01/Task2';
create.render( <Task2 />);