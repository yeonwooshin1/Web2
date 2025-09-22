import { BrowserRouter, Routes, Route, Link, useSearchParams, useParams, useNavigate} from 'react-router-dom';
import './Task6.css'
import { useRef } from 'react';

/* 
 * <Link> , <Routes> , <Route> , useNavigate, useParams, useLocation 모든 Router 마크업들은 <BrowserRouter> 에서 파생된 곳에 있어야 한다.  
 * 즉 부모 컴포넌트에서 <BrowserRouter> 안에서 호출 되거나 파생된 자식 컴포넌트들은 자동적으로 상속 받아 쓸 수 있지만
 * 뜬금없이 <BrowserRouter>를 return 안에서 쓴 곳에서 파생된 자식 컴포넌트도 아니고 아무런 관련이 없는 곳에서 쓰면 쓸 수 없다. ( 오류 뜸 )
 * 
 *  
 * 그리고 <BrowserRouter>는 return 렌더링 부에서만 쓸 수 있다. 어쩌면 마크업이니 당연한 거 아닌가 
 * => JSX 요소이기 때문에 반드시 React 렌더 트리 안 ( return 내부 )에 있어야 한다.
 * 
*/

const Home = (props) => {

    return (<>
        <h3>홈 페이지</h3>
        좌측 메뉴에서 회원가입 또는 로그인으로 이동해보세요.
    </>)
}   // Home end

const Signup = (props) => {

    // Ref 훅을 사용하여 초기값 정함
    const idRef = useRef(null);
    const pwRef = useRef(null);

    const navigate = useNavigate();
    const signup = () => {
        const id = idRef.current.value;
        const pw = pwRef.current.value;
        
        // idRef.current vs document.querySelector()
        // idRef.current.value vs document.querySelector().value 이런 느낌
        // document.querySelector은 전체 document 안에서 셀렉터 하는거고 useRef는 그 안에서 가져오는 거임(current) 그래서 더 빠름
        console.log(idRef);                 // idRef                : 참조 객체
        console.log(idRef.current)  ;       // idRef.current        : 객체가 참조중인 dom =>   <input type='text' placeholder='아이디' />
        console.log(idRef.current.value);   // idRef.current.value  : 값의 value값 => 그 input 의 값 ?? ( 예 : user1234)
        
        alert("회원가입 성공");
        navigate( "/login" );
    }   // onClick end


    return (<>
        <h3>회원가입 페이지</h3>
        <div className='form'>
            <input ref={idRef}   type='text' placeholder='아이디' />
            <input ref={pwRef} placeholder='비밀번호' />
               
        </div>
        <button onClick={signup}> 회원가입 </button> 
    </>)
}   // Sign up end


const Login = ( props ) => {

    // Ref 훅을 사용하여 초기값 정함
    const idRef = useRef(null);
    const pwRef = useRef(null);

    const navigate = useNavigate();

    // form 전송을 useRef로 묶었다면? ==> Ref명.elements[해당 name 값].value 하면 됨.
    // const formRef = useRef();
    // const 전송함수 = () => {
    //     console.log( formRef.current );                             // form 내용물들을 한 번에 가져와서 하너 번에 자바(스프링)에게 전송
    //     console.log( formRef.current.elements['textData'].value );  // formRef.current.elements[ name 속성명값 ]
    // }

    const login = () => {

        const id = idRef.current.value;
        const pw = pwRef.current.value;
        
        // idRef.current vs document.querySelector()
        // idRef.current.value vs document.querySelector().value 이런 느낌
        // document.querySelector은 전체 document 안에서 셀렉터 하는거고 useRef는 그 안에서 가져오는 거임(current) 그래서 더 빠름
        console.log(idRef);                 // idRef                : 참조 객체
        console.log(idRef.current)  ;       // idRef.current        : 객체가 참조중인 dom =>   <input type='text' placeholder='아이디' />
        console.log(idRef.current.value);   // idRef.current.value  : 값의 value값 => 그 input 의 값 ?? ( 예 : user1234 )

        alert("로그인 성공");
        navigate("/");

    }   // onClick end


    return ( <>    
        <h3>로그인 페이지</h3>
        <div className='form'>
            <input ref={idRef} type='text' placeholder='아이디' />
            <input ref={pwRef} type='password' placeholder='비밀번호' />
            
        </div>
        <button onClick={login}> 회원가입 </button>
    </>)
}   // Login end


// 라우터 컴포넌트
export default function Task6 (props) {

    return (<>
        <BrowserRouter>
            <div className='container'>
                <ul>
                    <Link to={'/'}><li> 홈 </li></Link>
                    <Link to={'/signup'}><li> 회원가입 </li></Link>
                    <Link to={'/login'}><li> 로그인</li></Link>
                </ul>
                <div>
                    <Routes>
                        <Route path='/' element ={ <Home/> } ></Route>
                        <Route path='/signup' element ={ <Signup/> }></Route>
                        <Route path='/login' element ={ <Login/> }></Route>
                    </Routes> 
                </div>  
            </div>
        </BrowserRouter>  
    </>)
}   // compo end

