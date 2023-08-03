// 별표 ****

// 1. 비교연산을 했을 때
let x = 3;
let y = 5;
console.log(x > y);

// 2. 논리연산을 했을 때 각 비교값이 true나 false인 경우
// true나 false가 아닌 경우 단라회로평가가 일어남
x = true;
y = false;
console.log(x && y);

// ***3. true 나 false로 평가되는 것들
// if(value) {
        // value가 true일 때 실행
        // 그렇다면 어떤 value가 true일까?
// }

if(Boolean("hello")) {
    console.log("!!")
}
if("hello") {
    console.log("!!")
}

Boolean("hello"); // true
Boolean(""); // false
Boolean(" "); // true
Boolean(0) // false // 0 이외의 숫자는 true
Boolean(null) // false
Boolean(undefined) // false
Boolean(NaN) // false
// !!null

// 4. 자바스크립트에서 나를 힘들게 하는 true, false
Boolean([1, 2, 3]) // true
Boolean([]) // true
Boolean({"one" : 1}); // true
Boolean({}); // true

null == undefined // true
null > undefined // false, 다른 비교도 false
undefined < 100 // 숫자 비교 다 false



