import React from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet, useParams, useNavigate } from "react-router-dom";

export default function Quiz1() {
    return (
        <BrowserRouter>
        <Link to="/">HomePage</Link>
        <Link to="/cart">Cart Page</Link>
        <Link to="/users">User Page</Link>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products/:id" element={<ProductsDetail/>}/>
            <Route path="/products/:id/notice" element={<ProductsNotice/>}/>
            <Route path="/cart" element={<Cart/>}/>
            {/* <Route path="/users" element={<Users/>}/>
            <Route path="/users/coupon/" element={<Coupon/>}/>
            <Route path="/users/question/" element={<Question/>}/>
            <Route path="/users/notice/" element={<Notice/>}/> */}
            <Route path="/users/*" element={<Users/>}>
                <Route path="coupon/" element={<Coupon/>}/>
                <Route path="question/" element={<Question/>}/>
                <Route path="notice/" element={<Notice/>}/>
            </Route>
        </Routes>
        {/* /user 로 이동하는 버튼! useNavigate이용하기*/}
        <Button/>
        </BrowserRouter>
    )
}


function Home(){
    return <h1>HomePage</h1>
}

function ProductsDetail() {
    const {id} = useParams();
    return <h1>{id}번 ProductDetail</h1>
}

function ProductsNotice() {
    const {id} = useParams();
    return <h1>{id}번 Product Notice</h1>
}

function Cart(){
    return <h1>Cart</h1>
}

function Users() {
    return (
        <div>
            <h1>Users</h1>
            {/* Oulet은 여기서도 사용 가능 */}
            <Outlet/>
        </div>
    );
}

function Coupon() {
    return <h1>Users/Coupon</h1>
}

function Question() {
    return <h1>Question</h1>
}

function Notice() {
    return <h1>Notice</h1>
}

function Button() {
    const navigate = useNavigate();
    return <button onClick={() => navigate("/users")}>유저보기</button>
}
