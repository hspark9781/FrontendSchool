function factorial(n) {
    // 기본 케이스
    if (n <= 1) return 1;

    // 재귀 케이스
    return n * factorial(n - 1);
}

function sumArray(arr, index = 0) {
    if (index === arr.length) return 0; 
    return arr[index] + sumArray(arr, index + 1); 
}

    
    // 사용 예시
    const arr = [1, 2, 3, 4, 5];
    const result = sumArray(arr);
    console.log(result);  // 출력: 15