// 가운데 글자 가져오기
function solution(s) {
    const halfLength = Math.floor(s.length / 2);
    return s.length % 2 === 0 ? s.substr(halfLength - 1, 2) : s.substr(halfLength, 1);
}

let s1 = "abcde";
let s2 = "qwer";

console.log(pb12903(s1));
console.log(pb12903(s2));