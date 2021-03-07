// 폰켓몬
function solution(nums) {
    let choiceNum = nums.length/2;
    let species = [...new Set(nums)];
    return species.length >= choiceNum ? choiceNum : species.length;
}
console.log(solution([3,1,2,3]));
console.log(solution([3,3,3,2,2,4]));
console.log(solution([3,3,3,2,2,2]));