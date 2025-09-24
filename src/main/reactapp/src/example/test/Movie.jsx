import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from "react-router";


const Main = (props) => {
    return (<>
        <h3>여기는 메인페이지입니다. 과정형 평가 6 입니다~ </h3>    

    </>)
}   // Main end


// 등록 페이지 컴포넌트
const Write = (props) => {
    // useRef
    const inputRef = useRef(null);

    // useNavigate
    const navigate = useNavigate();

    // onClick 등록함수 
    const reviewWrite = async() => {
    
        // form  전송 value값 dom화
        const title = inputRef. current.elements['title'].value.trim();
        const director = inputRef.current.elements['director'].value.trim();
        const genre = inputRef.current.elements['genre'].value.trim();
        const introduction = inputRef.current.elements['introduction'].value.trim();
        const password = inputRef.current.elements['password'].value.trim();

        // 하나라도 빈값이면 리턴주기
        if (!title || !director || !genre || !introduction || !password) {
            alert("모든 항목을 입력해야 합니다.");
            // 함수 종료
            return;
        }   // if end
        
        // 객체로 묶기
        const movieDto = {title , director , genre , introduction , password};

        // post로 자바에 등록 요청
        const response = await axios.post("http://localhost:8080/movie" , movieDto);

        if(response.data == true){

            // 등록했으면 리뷰 페이지로 이동
            alert("영화 등록이 완료되었습니다.");
            navigate("/List");

        }   else alert("영화 등록에 실패하였습니다.");
        
    }   // onClick end

    return (<>
        
        <h3>영화 등록 페이지</h3>
        
        <form ref={inputRef}>
            영화 제목 :  <input name="title" placeholder="영화 제목을 입력하세요."/>
            감독명 : <input name="director"  placeholder="감독명을 입력하세요."/>
            장르명 : <input name="genre" placeholder="장르명을 입력하세요."/>
            간단한 소개 : <textarea name="introduction" placeholder="간단한 소개를 입력하세요."></textarea>
            비밀번호 : <input name="password"/>
            <button onClick={reviewWrite} type="button">영화 등록</button>
        </form>    
    </>)
}   // Write end


// 전체 글 조회 컴포넌트
const List = (props) => {
    
    // useState
    const [ list , setList ] = useState([]);

    // useRef 
    const keywordRef = useRef(""); 
    
    const reviewTotalView = async() => {
        
        // keyword 값 정해주기 
        const keyword = keywordRef.current?.value?.trim() ?? "";

        let url = "http://localhost:8080/movie/total";
        let response;
        
        if (keyword && keyword !== "") {
            // 키워드 있을 때
            response = await axios.get(url, { params: { keyword } });
        } else { response = await axios.get(url);}

        setList( response.data );
    }   // axios end
    
    
    // 한 번 렌더링~
    useEffect( () => { reviewTotalView() } , [] );

    return (<>
        
        <h2>영화글 검색</h2>
        
        <input ref={keywordRef} type="text" /> <button onClick={reviewTotalView}> 검색 </button>
        
        { list.map((index) => {
            return <div> <Link to={`/detail/${index.mno}`}>{ index.title } </Link>
            || <Link to={`/detail/${index.mno}`}>{index.director} </Link> </div>
        })}    
    </>)
}   // List end


// 개별 글 조회 컴포넌트
const Detail = (props) => {
    
    // useNavigate
    const navigate = useNavigate();
    
    // param 가져오기
    const { mno } = useParams();
    
    // setList 배열
    const [ list , setList ] = useState([]);
    
    // useRef
    const deleteRef = useRef(null);

    // 개별조회 axios 하는 곳
    const reviewView = async() => {
        
        const response = await axios.get(`http://localhost:8080/movie?mno=${mno}`);
        
        // list setState 해주기
        setList(response.data);

    }   // axios end

    // 개별 글 삭제 axios 하는 함수
    const reviewDelete = async () => {
        
        const password = deleteRef.current.value;

        const response = await axios.delete(`http://localhost:8080/movie`, { data: { mno , password } });

        if(response.data == true){
            alert("글 삭제가 완료되었습니다.");
            navigate("/List"); // 목록 페이지 등으로 이동
        } else {
            alert("비밀번호가 일치하지 않습니다.")
        }   // if end
        
    } 
    
    // 처음 렌더링시 한 번 불러오는 useEffect
    useEffect(()=> {reviewView()} , []);

    return (<>
        <h2>영화 상세</h2>
        <div>제목: {list.title}</div>
        <div>감독: {list.director}</div>
        <div>장르: {list.genre}</div>
        <div>소개: {list.introduction}</div>
        
        비밀번호 <input ref={deleteRef} />
        <button onClick={reviewDelete}>삭제</button>
        
        {/* 댓글 조회 컴포넌트 */}
        <div><CommentView mno={list.mno}/></div>
        
    </>)
}   // Detail end 

// 개별글 댓글 컴포넌트
const CommentView = (props) => {
    
    // 매개객체 구조 분해
    const {mno} = props;

    // setState => 개별조회 댓글 list
    const [list , setList] = useState([]);

    // 
    
    // 댓글 전체 조회 axios
    const view = async() => {
        
        let response =  await axios.get(`http://localhost:8080/comment?mno=${mno}`);

        setList( response.data );

    }   // axios get end

    // useEffect => 초기 렌더링에 사용 , 값이 없으면 보내지 않음. mno 변경시에 렌더링
    useEffect(() => {
        if (mno !== undefined && mno !== null ) {
            view();
        }}, [mno]);

    
    // 댓글 삭제 axios
    const deleteComment = async(cno) => {
        const password = prompt ("비밀번호를 입력해주세요.");
        const response = await axios.delete('http://localhost:8080/comment' , { data: { cno, password } })
        
        if(response.data == true){
            alert("댓글 삭제가 완료되었습니다.");
            
            // filter 써서 삭제된 애 제외 재배열
            setList(list.filter((item)=>{return item.cno !== cno}));
        } else {
            alert("비밀번호가 일치하지 않습니다.");
        }   // if end
        
    }   // axios delete end
    
    // 등록 useRef
    const inputRef = useRef(null);

    // 댓글 등록 onClick function axios
    const commentWrite = async() => {
        // form  전송 value값 dom화
        const comment = inputRef.current.elements['comment'].value.trim();
        const password = inputRef.current.elements['password'].value.trim();

        // 하나라도 빈값이면 리턴주기
        if (!comment || !password) {
            alert("모든 항목을 입력해야 합니다.");
            // 함수 종료
            return;
        }   // if end
        
        // 객체로 묶기
        const commentDto = {comment , password , mno};

        // post로 자바에 등록 요청
        const response = await axios.post("http://localhost:8080/comment" , commentDto);

        if(response.data == true){

            // 등록했으면 리뷰 페이지로 이동
            alert("댓글 등록이 완료되었습니다.");
            // 넣어서 재 렌더링
            view();

        }   else alert("댓글 등록에 실패하였습니다.");
    }   // axios post end

    return (<>
        <h4>댓글 작성</h4>
        <form ref={inputRef}>
            작성내용 : <input name="comment" type="text" />
            비밀번호 설정 : <input name="password"/>
            <button type="button" onClick={commentWrite}> 댓글 작성 </button>
        </form>

        <br />

        { list.map((index) => {
            return <div key={index.cno}> 댓글 : { index.comment }  <button onClick={ ()=>{deleteComment(index.cno)}}>댓글 삭제</button> </div> 
        })}    
    </>)
}   // CommentView end

// 에러 페이지 컴포넌트
const Page404 = (props) => {
    
    return (<>
    <h3>[404] 존재하지 않는 페이지 입니다.</h3>
    <Link to={"/"}>메인페이지로 이동</Link>
    </>)
}   // 404page end


// 라우터 컴포넌트
export default function Movie (props) {

    return (<>
        <BrowserRouter>
            <div>
                <Link to={'/'}> 메인페이지 </Link>
                <Link to={'/write'}> 영화 등록 페이지</Link>
                <Link to={'/list'}> 영화 목록 조회 </Link>
            </div>
            <div>
                <Routes>
                    <Route path='/' element={ <Main/> }></Route>
                    <Route path='/write' element={ <Write/> }></Route>
                    <Route path='/list' element={ <List/> }></Route>
                    <Route path='/detail/:mno' element={ <Detail/> }></Route>
                    {/* 만약 존재하지 않는 가상 URL을 요청했을 경우 들어갔을 경우 (*)와일드카드 */}
                    <Route path='*' element = {<Page404/>} />
                </Routes>
            </div>
        </BrowserRouter>
    </>)
}   // func end