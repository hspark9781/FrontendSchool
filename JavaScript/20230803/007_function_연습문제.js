

// 문제 1 : 사칙연산 함수
function add(x, y){
    return x + y;
}

add(1, 2);

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

// 문제2 : "10,000,000,000"와 같은 문자를 입력받아 10000000000와 같은 숫자를 반환하는 함수를 만들어주세요
function returnNumber(x) {
    return parseInt(x.replaceAll(",", ""));
}
returnNumber("10,000,000,000");
parseInt("10,000,000,000".replaceAll(",", ""));

// 문제3 : hello를 콘솔로 출력하고 입력된 문자열을 쪼개서 출력하는 함수를 만들어 주세요
// 입력 : world
// 출력 : ['w', 'o', 'r', 'l', 'd']

function printAndSplit(str) {
    console.log(str);
    return str.split("");
}

printAndSplit("world");

// 문제4 : 2개의 숫자가 입력되면 2개의 숫자를 더하고 더한 2개의 숫자를 곱하는 함수를 만들어주세요
// 입력 : 1, 2
// 출력 : (1 + 2) * (1 + 2) = 9

function addAndMultiply(x, y) {
    return add(x,  y) * add(x, y);
}

// 메모리 호율을 위해 함수를 내부에서 만들어서 사용
function addAndMultiply(x, y) {
    function add(x, y){
        return x + y;
    }
    return add(x,  y) * add(x, y);
}


// 문제5 : x**2 + 4x - 12를 구해주는 함수를 만들어 주세요.
// 입력 : 3
// 출력 : 9 + 12 - 12 = 9

function calculate(x){
    return x**2 + multiply(4, x) -12;
}
