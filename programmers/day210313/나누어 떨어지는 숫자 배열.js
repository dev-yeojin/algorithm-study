// 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
    arr = arr.filter(item => item % divisor === 0).sort((a,b) => a-b);
    if(arr.length === 0) return [-1];
    return arr;
}
console.log(solution([5,9,7,10], 5));
console.log(solution([2,36,1,3], 1));
console.log(solution([3,2,6], 10));