// 문자열 내 마음대로 정렬하기
function solution(strings, n) {
    strings.sort((a,b) => {
        return a[n].localeCompare(b[n]) === 0 ? a.localeCompare(b) : a[n].localeCompare(b[n]);
    });
    return strings;
}
console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));