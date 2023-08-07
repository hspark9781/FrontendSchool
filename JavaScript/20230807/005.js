// map
// 면접 질문에서도 많이 나옵니다.
// 교과에서 보는 map의 용도와
// 실무에서 사용하는 map의 용도가 조금 다릅니다.

//map의 형태
[1, 2, 3].map((value, index, arr) => {
    console.log(value, index, arr);
    return value;
});

// 교재에서는 주로 아래와 같이 써있습니다
[1, 2, 3].map(v => {
    return v ** 2;
});

[1, 2, 3, 4].map(v => {
    return v * 3; 
});

// forEach와 차이점
// 1. forEach는 return이 없습니다.
// 2. map은 원본을 수정하여 새로운 배열을 만들고, forEach는 원본 배열을 변경하지 않습니다.

let sum = 0;
Array(100).fill(0).forEach((v, i) => {
    sum += i + 1;
});
console.log(sum);

// let sum = 0;
Array(100).fill(0).map((v, i) => i);
console.log(sum);

[1, 2, 3, 4].map(v => "hello worold");
// ['hello worold', 'hello worold', 'hello worold', 'hello worold']
[1, 2, 3, 4].map(v => "hello" + v);
// ['hello1', 'hello2', 'hello3', 'hello4']
[1, 2, 3, 4].map((v, i) => "hello" + (i + 1));
// ['hello1', 'hello2', 'hello3', 'hello4']
[1, 2, 3, 4].map((v, i) => "hello" +i);

let data = [1, 2, 3, 4];
data.map(v => "hello" + v);
data; // 원본은 수정되지 않습니다.

// 같은 코드 1(****)
[1, 2, 3, 4].map((v, i) => "hello" + v);

// 같은 코드 2
function 함수(v) {
    return "hello" + v;
}

[1, 2, 3, 4].map(함수);

// 같은 코드 3
[1, 2, 3, 4].map(function (v) {
    return "hello" + v;
});

// 같은 코드 4(****)
[1, 2, 3, 4].map((v) => {
    return "hello" + v;
})

