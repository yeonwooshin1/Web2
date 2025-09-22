import { BrowserRouter, Routes, Route, Link, useSearchParams, useParams, useNavigate} from 'react-router-dom';

// [1] 메인페이지 컴포넌트
function Home(props) {return (<> 메인페이지 </>)}

// [2] 소개페이지 컴포넌트
function About(props) { return (<> 소개페이지 </>)}

// [3] 마이페이지 컴포넌트 : 쿼리스트링 매개변수 전달

function MyPage(props) { 
    // ** 리액트 queryString 방식 **
    
    const [ searchParams ] = useSearchParams(); // 1. const [ searchParams ] = useSearchParams();
    const name = searchParams.get('name');      // 2. const 변수명 = serchParams.get( 매개변수명 );
    const age = searchParams.get('age');

    return (<>
        <h3>마이페이지</h3>
        <p>이름 : {name} / 나이 : {age} </p>
    
    </>)
}   // Compo end

// [4] 제품 소개 페이지 : path 매개변수 전달
function Product (props) {
    // ** 리액트 방식 **  : /product/코카콜라/1000  vs /product?name=코카콜라&price=1000
    const { name , price } = useParams();   // 1. const {매개변수명1 , 매개변수명2} = useParams()
    return (<>
        <h3> 제품 소개 페이지 </h3>
        <p> 제품명 : {name} / 가격 : {price}</p>
    </>)
}   // Compo end


// [5] 404페이지 컴포넌트
function Page404 (props) {
    
    // 5-1 : useNavigate() 반환값 저장
    const navigate = useNavigate();
    const 이동함수 = () => {
        
        // HTML 페이지 전환 : <a> , location.href = "경로"
        // location.href="/";

        // 라우터 페이지 전환 방식은 : <Link> , Navigate( "경로" )
        // 5-2 useNavigate() 반환값인 navigate 사용한다.
        navigate( "/" );

    }
    
    return (<>
    <h3> 존재하지 않는 페이지 입니다.</h3>
    <a href="/"> 홈으로( GET방식 )</a>
    <Link to={"/"}>홈으로2( 라우터방식 )</Link>
    <button onClick={ 이동함수 }> 홈으로3 </button>
    </>)
}



// [*] 라우터 : 하나의 컴포넌트가 여러 컴포넌트를 연결 구조 // 가상의 URL 만들기
// 1. 라우터 라이브러리 (터미널) 설치 : npm i react-router-dom

export default function Component12(props) {


    return (<>
        <BrowserRouter>
            <ul>
                <a href="/"> 메인페이지(home) </a>
                {/* 진짜URL 이 아닌 가상의 URL로 이동할 때는 <a> 마크업 대신 <Link> 사용 */}
                <Link to="/"> 메인페이지(home/react 라우터방식)</Link> 
                <Link to="/about"> 소개페이지() </Link>
                <Link to='/mypage'>마이페이지 쿼리스트링 없는 링크</Link>
                <Link to='/mypage?name=유재석&age=12'> 마이페이지 쿼리스트링 있는 링크 </Link>
                <Link to='/product'> 제품소개페이지1(path X)</Link>
                <Link to='/product/코카콜라/10300'> 제품소개페이지2(path O)</Link>

            </ul>
            <Routes>
                <Route path='/' element = {<Home/>} />
                <Route path='/about' element = {<About/>} />
                <Route path='/mypage' element = {<MyPage/>}/>
                <Route path='/product/:name/:price' element = {<Product/>}/>
                {/* 만약 존재하지 않는 가상 URL을 요청했을 경우 들어갔을 경우 (*)와일드카드 */}
                <Route path='*' element = {<Page404/>} />
            </Routes>
        </BrowserRouter>
        
        </>)
}