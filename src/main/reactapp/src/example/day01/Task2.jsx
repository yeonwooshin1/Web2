const products = [
    { title: "무선 키보드", price: 45000, inStock: true },
    { title: "게이밍 마우스", price: 32000, inStock: false },
    { title: "27인치 모니터", price: 280000, inStock: true }
]; 
/* 컴포넌트에서 css 호출하는 방법
    import 'css 파일경로'
*/
import "./Task2.css";

const Task2 = ( props ) => {

    return (<div className = "products">
        <Com1 title = {products[0].title} price = {products[0].price.toLocaleString("ko-KR")} inStock ={products[0].inStock} />
        <Com1 title = {products[1].title} price = {products[1].price.toLocaleString("ko-KR")} inStock ={products[1].inStock}/>
        <Com1 title = {products[2].title} price = {products[2].price.toLocaleString("ko-KR")} inStock ={products[2].inStock}/>
    </div>) 
}   // func end
export default Task2;


const Com1 = ( props ) => {
    const {title , price , inStock} = props;

    return (<>
        <div className="task2"> 
            <div className="div3"> {title} </div>
            <div className="div1"> 가격 : {price} </div>
            <div className="div2"> {inStock == true ? <span style={{color : "green"}}> 재고 있음</span> : <span style={{color : "red"}}>재고 없음</span>}</div>
        </div>
    </>)

}   // func end

