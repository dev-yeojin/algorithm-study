// 같은 숫자는 싫어
function solution(arr) {
    //flatMap
    return arr.filter((item, idx) => idx === 0 || idx !== 0 && arr[idx - 1] !== item);
}
console.log(solution([1,1,3,3,0,1,1]));
console.log(solution([4,4,4,3,3]));