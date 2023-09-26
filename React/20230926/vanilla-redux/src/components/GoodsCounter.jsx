import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { addNumber } from '../modules/goodsCounter';
import { subtractNumber } from '../modules/goodsCounter';

export default function GoodsCounter() {

    // store의 state를 접근하도록 합니다.
    const {stock, goods} = useSelector((state) => {
        return {
            stock : state.goodsReducer.stock,
            goods : state.goodsReducer.goods
        }
    })

    // console.log(stock, goods);

    const dispatch = useDispatch();

    // dispatch 함수에 action을 인자로 전달하여 실행합니다.
    const onAddNumber = () => dispatch(addNumber());
    const onSubtractNumber = () => dispatch(subtractNumber());

    return (
        <>
            <h1>Product Detail</h1>
            <h2>딥러닝 개발자 무릎 담요</h2>
            <span><strong>17,500</strong>원</span>
            <div id="counter-box">
                <button type="button" id="minus" onClick={onSubtractNumber} disabled={goods > 0 ? false : true}>MINUS</button>
                <span id="number">0</span>
                <button type="button" id="plus" onClick={onAddNumber} disabled={stock >0 ? false : true}>PLUS</button>
            </div>
            <div>총 수량 <strong id="quantity">{goods}</strong></div>
            <div><strong id="total">{goods * 17500}</strong>원</div>
            <div>재고 <strong>{stock}</strong></div>
        </>
    )
}
