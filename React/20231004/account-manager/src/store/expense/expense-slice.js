import { createSlice } from "@reduxjs/toolkit";

const expnseSlice = createSlice({
    name : 'expenseSlice',
    initialState : {
        // 사용자의 지출목록을 관리합니다.
        expenseList: [{name : 'coffee', price : 5000}, {name : 'icecream', price : 1500}],
        income: 1000000
    },
    reducers : {
        // addExpenseAction => 액션 type의 이름입니다
        addExpenseAction : (currentSlice, action) => {
            currentSlice.expenseList.push(action.payload);
        },
        setIncomeAction: (currentSlice, action) => {
            console.log('setIncomeAction');
            currentSlice.income = action.payload;
        }
    }
});

// action을 디스패치에서 사용할 수 있도록 밖으로 내보냅니다.
export const {addExpenseAction, setIncomeAction} = expnseSlice.actions;

//slice에서 생성한 reducer들을 외부로 내보냅니다.
export default expnseSlice.reducer