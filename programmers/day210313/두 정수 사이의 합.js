// 두 정수 사이의 합
function solution(a, b) {
    const min = Math.min(a,b);
    const max = Math.max(a,b);

    return ((min + max) / 2)* (max - min + 1)
}
console.log(solution(3,5))
console.log(solution(3,3))
console.log(solution(5,3))