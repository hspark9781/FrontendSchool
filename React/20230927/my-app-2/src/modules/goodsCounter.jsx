import { createSlice } from '@reduxjs/toolkit'

// 액션 생성함수
// export const addNumber = () => {
//     return { type: "ADD" };
// };

// export const substractNumber = () => {
//     return { type: "SUBSTRACT" };
// };

// // 초기 값
// const initialState = {
//     stock: 10,
//     goods: 1
// };

// // 리듀서
// const goodsReducer = (state = initialState, action) => {
//     console.log(action)
//     console.log(action.type)
//     console.log(state)
//     switch (action.type) {
//         case "ADD":
//             return {
//                 ...state,
//                 stock : state.stock - 1,
//                 goods : state.goods + 1,
//             }
//         case "SUBSTRACT":
//             return {
//                 ...state,
//                 stock : state.stock + 1,
//                 goods : state.goods - 1,
//             }
//         default:
//             return state;
//     }
// };

// export default goodsReducer;

const initialState = {
    stock: 10,
    goods: 1
};

export const counterSlice = createSlice({
    name: 'counter', // 이 슬라이스의 이름
    initialState,
    reducers: {
        // 함수로 바뀐 것이 중요한 특징, 기존처럼 유니크한 이름이 아니어도 됩니다. 리듀서 함수 선언과 액션 함수 선언이 객체의 형태로 통합되었습니다.
        increment: (state) => {
            state.stock -= 1 // ...state가 없어졌습니다.
            state.goods += 1
        },
        decrement: (state) => {
            state.stock += 1
            state.goods -= 1
        },
    },
})

console.log('counterSlice :', counterSlice);

// 액션 함수를 디스패치가 사용할 수 있도록 export 합니다.
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer // reducers처럼 s붙지 않습니다. console.log로 찍어보면 알 수 있습니다.