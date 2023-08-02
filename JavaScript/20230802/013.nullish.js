// https://ko.javascript.info/nullish-coalescing-operator
// 스펙에 추가된 지 얼마 안 된 문법입니다. 구식 브라우저는 폴리필이(최신 문법을 구식 부라우저에서도 사용할 수 있도록 해주는 것) 필요합니다.

let fistName = null;
let lastName = null;
let nickName = "licat";

console.log(fistName ?? nickName);
console.log(fistName ?? lastName ?? nickName);

lastName = "hyunseok";

let a = null;
let b = 10;
let c = 20;
console.log(a ?? b ?? c);

let height1 = 0;
console.log(height ?? 100); // 0도 value
console.log(height || 100); // 0은 false

let height2;
console.log(height2 ?? 100); 
console.log(height2 || 100); 

let height3 = "";
console.log(height3 ?? "world"); // ""도 value
console.log(height3 || "hello"); 

// || : 0, null, undefined, false, NaN, '', etc...
// ?? : null, undefined

// falsy하다 : 0, null, undefined, false, NaN, '', etc...
// nullish하다 : null, undefined


// nullish 문제
// 1번
let username;
let nickname;
console.log(username || nickname || 'guest')

// 2번
username = '';
nickname = '';
console.log(username || nickname || 'guest')

// 3번
username = '';
nickname = '';
console.log(username ?? nickname ?? 'guest')

// 4번
username;
nickname;
console.log(username ?? nickname ?? 'guest')