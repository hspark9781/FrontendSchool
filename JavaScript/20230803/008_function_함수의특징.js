function add(a, b){
    let answer = a + b
}

// let result = add(10, 20)

///////////////

function add(a, b){
    let answer = a + b
    return
}

result = add(10, 20)

///////////////

function add(a, b){
    let answer = a + b
    return undefined;
}

result = add(10, 20)

// return은 undefined값을 가지고 있다.

/////////////////////////////

function test(){
    console.log("hello");
    console.log("hello");
    console.log("hello");
    return;
    // 에러가 나는 코드가 있어도 자바스크립트엔진이 보지 않는 공간에서는 에러를 출력하지 않습니다. 단락 평가에서도 마찬가지
    console.log("hello");
    console.log("hello");
    console.log("hello");
} // return 되면 코드진행 끝난다 => 3번출력
function errorCode() {
    console.log("hello");
}
let value = true;
result = true || errorCode();

/////////////////////////////

// return(반환보다는 종료의 느낌으로 쓰는 코드)
function test() {
    if(true) {
        if(true) {
            console.log("1");
            return;
        }
    }
    console.log("2");
    return;
}

///////////////////////////////

// 함수의 이름은 결국 변수이다!
console.log("hello") // "hello"는 아규먼트
let leehojun = console.log;
leehojun("hello");

function test() {
    console.log("hello");
}

test()
let hojun = test;
hojun();

///////////////////////////////

// 함수의 이름은 결국 변수이기 때문에 아규먼트로도 전달할 수 있을까요?
// 또는 리턴값을도 전달할 수 있을까요?
// 답은 '네' 입니다!

function add(a, b) {
    return a + b;
}

let x = 10;
let y = 20;
console.log(add(x, y));

// 함수를 아규먼트로 전환
// 아래와 같이 아규먼트 전달된 함수를 '콜백함수'라고 부릅니다.
function add(x, y) {
    return x + y;
}

function addAndMultiply(x, y, z) {
    let sum = z(x, y) * z(x, y)
    return sum;
}

addAndMultiply(1, 2, add);

// 함수를 리턴값으로 전달(스코프와 클로저를 배우고 나서 다시 다룰 예정입니다.)
function one(x) {
    function two(y) {
        return x + y;
    }
    return two;
}

let result = one(10);
result(100);

// 같은 함수명으로 지으면 덮어쓴다.