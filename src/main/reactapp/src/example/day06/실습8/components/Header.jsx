import { Link } from "react-router-dom";

export default function Header (props ) {
    return (<>
        <ul>
            <Link to ="/"> 홈 </Link>
            <Link to ="/menu"> 제품보기 </Link>
            <Link to ="/cart"> 장바구니 </Link>
        </ul>    
    </>)
}   // Header end   