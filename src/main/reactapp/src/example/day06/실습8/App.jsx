import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";


// 앱 라우터를 총괄하는 App.jsx

export default function App (props) {
    return (<>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element ={ <HomePage/> }></Route>
                <Route path="/menu" element = { <MenuPage/> }></Route>
                <Route path="/cart" element = { <CartPage/> }></Route>
            </Routes>
        </BrowserRouter>
    </>)
}   // App end