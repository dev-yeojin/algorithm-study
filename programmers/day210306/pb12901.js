// 2016년
/*
function solution(a, b) {
    let dayStr = ["FRI","SAT","SUN","MON","TUE","WED","THU"];
    let dayOfMonth = [31,29,31,30,31,30,31,31,30,31,30,31];
    let daySum = b-1;

    for(let i=0; i<a-1; i++) {
        daySum += dayOfMonth[i-1];
    }
    return dayStr[daySum%7];
}
*/
function solution(a, b) {
    const dayStr = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    return dayStr[new Date('2016', a-1, b).getDay()];
}
console.log(solution(5,24));
console.log(solution(1,8));