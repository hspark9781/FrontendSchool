// https://school.programmers.co.kr/learn/courses/30/lessons/120807
// 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.

let num1 = 0;
let num2 = 0;

let answer1 = num1 === num2 ? 1 : -1;

// https://school.programmers.co.kr/learn/courses/30/lessons/120908
// 문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

let str1 = "asdfsadf";
let str2 = "adsfeewf";
let answer2 = str1.includes(str2) ? 1 : 2;

// https://school.programmers.co.kr/learn/courses/30/lessons/120819
// 머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다. 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// let money = "15,000";
// let answer = [0, 0];
// let count = parseInt(parseInt(money.replaceAll(",", "")) / 5500);
// let money2 = parseInt(money.replaceAll(",", "")) % 5500;
// answer = [count, money2];
// answer;

let money = '15,000';

let 아메리카노 = parseInt(parseInt(money.replaceAll(',', '')) / 5500)
let 남은돈 = parseInt(money.replaceAll(',', '')) % 5500

let answer = [아메리카노, 남은돈]

// 정답
function solution(money) {
    return [~~(money / 5500), money % 5500];
}