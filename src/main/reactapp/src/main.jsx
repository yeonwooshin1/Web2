// 1. 리액트 라이브러리의 최초(ROOT) 생성하는 함수 IMPORT
import { createRoot } from 'react-dom/client'
// 2. ubdex.html 에서 root 마크업 가져오기
const root = document.querySelector('#root');
// 3. 가져온 root 마크업을 createRoot 함수의 매개변수로 전달
const create = createRoot( root );

// ===== 최초 렌더링할 컴포넌트 ======
// 4. 렌더링 (화면출력) 할 컴포넌트 가져오기
import App from './App.jsx'; 

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
create.render(<Task5/>);