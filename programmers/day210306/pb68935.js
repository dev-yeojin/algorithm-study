// 3진법 뒤집기
function solution(n) {
    let baseThree = "";
    while(n >= 3) {
        baseThree += n % 3
        n = parseInt(n/3, 10);
    }
    baseThree += n;
    
    return parseInt(baseThree, 3);
}
console.log(solution(45));
console.log(solution(125));