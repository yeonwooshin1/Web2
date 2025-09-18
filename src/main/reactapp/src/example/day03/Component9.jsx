import axios from 'axios';

export default function Component9(props){

    // [1] axios : React.js 주로 사용되는 REST API (JSON)비동기 통신 함수, fetch( js내장 )
    // [2] 사용법 : 
    //      1. 설치(node.js) : 라이브러리 추가
    //          (1) 리액트 서버가 종료된 상태에서
    //          (2) 리액트 폴더의 최상위 폴더로 터미널 열기 : [reactApp] 폴더 오른쪽 클릭 -> [터미널열기]
    //          (3) npm install axios
    //              * https://www.npmjs.com/    : 각종 npm 라이브러리 설치 코드 공유
    //          (4) 설치 후 리액트 서버 재실행 : npm run dev
    //      2. 문법
    //      

    // [3] axios test( https://jsonplaceholder.typicode.com/ )
    // [3-1] axios get test("https://jsonplaceholder.typicode.com/posts")
    const onAxios1 = async() => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(res.status) // HTTP 응답 상태 코드 200
        console.log(res.data)   // HTTP 응답자료

        const res2 = await axios.get("https://jsonplaceholder.typicode.com/comments?postId=1");
        console.log(res2.data);     
    }   // axios end

    // [3-2] axios post test("https://jsonplaceholder.typicode.com/posts")
    const onAxios2 = async() => {
        const obj = { title : "밥 먹고 싶다." , body : "점심 언제 오냐" , userId : "밥 뭐 먹냐" };
        const res = await axios.post("https://jsonplaceholder.typicode.com/posts" , obj );
        console.log(res.data);
    }   // axios end

    // [3-3] axios put test("https://jsonplaceholder.typicode.com/posts/1" )
    const onAxios3 = async() => {
        const obj = {  id: 1,  title: 'foo', body: 'bar', userId: 1 };
        const res = await axios.put("https://jsonplaceholder.typicode.com/posts/1" , obj);
        console.log(res.data);
    }   // axios end

    // [3-4] axios delete test("https://jsonplaceholder.typicode.com/posts/1" )
    const onAxios4 = async() => {
        const res = await axios.delete("https://jsonplaceholder.typicode.com/posts/1" );
        console.log(res.status) // HTTP 응답 상태 코드 200
        console.log(res.data);  // HTTP 응답자료
    }   // axios end



    return (<>
        <h3> axios 예제 </h3>
        <button onClick={()=> {onAxios1()}}> [3-1] GET button </button>    
        <button onClick={()=> {onAxios2()}}> [3-2] POST button </button>
        <button onClick={()=> {onAxios3()}}> [3-3] PUT button</button>
        <button onClick={()=> {onAxios4()}}> [3-4] DELETE button</button>
    </>)

}   // func end