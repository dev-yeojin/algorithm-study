// K번째수
function solution(array, commands) {
    let result = [];
    for(const command of commands) {
        let arr = array.slice(command[0]-1, command[1]);
        //arr.sort();
        /*
        compareFunction이 제공되지 않으면 요소를 문자열로 변환하고 유니 코드 코드 포인트 순서로 문자열을 비교하여 정렬됩니다. 예를 들어 "바나나"는 "체리"앞에옵니다. 숫자 정렬에서는 9가 80보다 앞에 오지만 숫자는 문자열로 변환되기 때문에 "80"은 유니 코드 순서에서 "9"앞에옵니다.
        */
        arr.sort((o1, o2) => o1 - o2);
        result.push(arr[command[2]-1]);
    }
    return result;
}
console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));