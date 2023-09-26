import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { sale, soldOut } from '../modules/stockCounter';

export default function StockCounter() {

    const {message} = useSelector((state) => {
        return {
            message : state.stockReducer.message
        }
    });

    const {stock} = useSelector((state) => {
        return {
            stock : state.goodsReducer.stock
        }
    })

    // console.log(message);

    const dispatch = useDispatch();

    const onSale = () => dispatch(sale());
    const onSoldOut = () => dispatch(soldOut());


    useEffect(() => {
        if(stock <= 0) {
            onSoldOut();
        } else {
            onSale();
        }
    }, [stock])


    return (
        <p>{message}</p>
    )
}
