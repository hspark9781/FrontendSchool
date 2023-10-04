import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { setIncomeAction } from '../../store/expense/expense-slice';

export default function IncomeInput() {

    const income = useSelector((store) => store.expense.income);
    const dispatch = useDispatch();

    function setIncome(event) {
        dispatch(setIncomeAction(parseInt(event.target.value)));
    }

    return (
        <label>수입 입력
            <input type="number" placeholder='Ex: 3000'  defaultValue={income} onChange={setIncome}/>
        </label>
    )
}
