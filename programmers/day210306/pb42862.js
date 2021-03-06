// 체육복
function solution(n, lost, reserve) {
    // 체육복 도난 당한 학생들 중 여벌의 체육복이 있는 경우를 거름.
    let lostStudent = lost.filter(l => !reserve.includes(l));
    // 여벌의 체육복이 있는 학생 중 도난당한 학생을 거름
    let reserveStudent = reserve.filter(r => !lost.includes(r));

    // 여벌의 체육복을 가진 학생들 중 근처에(+1/-1) 도난당한 학생이 있다면 도난당한 학생 수에서 줄임
    lostStudent = lostStudent.filter(l => {
        let temp = reserveStudent.find(r => Math.abs(r-l) == 1);
        if(!temp) return true;
        reserveStudent = reserveStudent.filter(r => r !== temp);
    });
    
    return n - lostStudent.length;
}

// function solution(n, lost, reserve) {    
//     // 최초 운동복 설정
//     const clotheList = new Array(n);
//     clotheList.fill(0);
    
//     // 여벌 및 도난 배열 정렬(데이터에서 정렬을 보장하지 않음)
//     // reserve.sort();
//     // lost.sort();
    
//     // 여벌 운동복 추가
//     reserve.forEach(value => clotheList[value - 1] = 1); 
//     // 도난 당한 운동복 제거
//     lost.forEach(value => clotheList[value - 1] = -1);

//     // 여벌 운동복을 기준으로 탐색
//     reserve.forEach((value) => {
//         const index = value - 1;
//         // 여벌 운동복을 가지고 왔지만, 도난 당한 경우
//         if (clotheList[index] === -1) {
//             clotheList[index] = 0;
//             return;
//         }
        
//         // 여벌 운동복이 있는 경우
//         if (clotheList[index] === 1) {
//             if (index - 1 >= 0 && clotheList[index - 1] === -1) {
//                 clotheList[index - 1] = 0;
//             } else if (index + 1 < n && clotheList[index + 1] === -1) {
//                 clotheList[index + 1] = 0;
//             }
//         }
//     });

//     return clotheList.filter(value => value >= 0).length;
// }

// console.log(solution(5, [3,1], [2,3]));